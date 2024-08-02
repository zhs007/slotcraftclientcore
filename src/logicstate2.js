const {
    parseMsgScene,
    parseMsgOtherScene,
    hasState,
    isNeedTotalWinsModule,
    isFGEndingModule,
    calcTotalWins,
    isRespinEnding,
    isExitState,
    isRetriggerFGModule,
    isChgSymbolsComponent,
    genPosWithChgSymbols,
} = require("./utils.js");

// LogicState2 是 SlotCraft Client 最基础的class
// 逻辑非常简单，就是缓存 stateData 数据里最新的数据，一种数据只会缓存一个。
class LogicState2 {
    constructor(stateName, curStateData, betCfgData, msgResult) {
        this.curStateIndex = -1;

        this.stateName = stateName;
        this.curStateData = curStateData;
        this.scene = null;
        this.otherScene = null;
        this.pos = null;
        this.wins = [];
        this.totalWins = 0; // 总赢得

        this.respin = null;
        this.collector = null;

        this.msgResult = msgResult; // msg
        this.mapComponentData = {}; // kv
        this.mapComponentConfigData = {}; // kv

        this._parseResult(curStateData, betCfgData, msgResult);
    }

    _parseResult(curStateData, betCfgData, msgResult) {
        const mapComponents =
            msgResult.clientData.curGameModParam.mapComponents;
        for (const val of curStateData.list) {
            if (mapComponents[val]) {
                this.mapComponentData[val] = mapComponents[val];

                // 这2个数据很特殊，直接取就好了
                if (
                    this.mapComponentData[val]["@type"] ==
                    "type.googleapis.com/sgc7pb.RespinData"
                ) {
                    this.respin = this.mapComponentData[val];
                } else if (
                    this.mapComponentData[val]["@type"] ==
                    "type.googleapis.com/sgc7pb.CollectorData"
                ) {
                    this.collector = this.mapComponentData[val];
                }
            }

            if (betCfgData.mapComponents && betCfgData.mapComponents[val]) {
                this.mapComponentConfigData[val] =
                    betCfgData.mapComponents[val];
            }
        }

        // 能进入这个分支，就不可能一个component都获取不到
        if (this.mapComponentData.length == 0) {
            throw new Error("_parseResult fail.");
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;
        let sceneComponent = "";
        let otherSceneComponent = "";

        // 根据服务器执行顺序遍历component，理论上应该用最新的数据，wins是合并操作
        for (const c of historyComponents) {
            if (this.mapComponentData[c]) {
                if (this.mapComponentData[c].basicComponentData) {
                    if (
                        this.mapComponentData[c].basicComponentData.usedScenes
                            .length > 0
                    ) {
                        sceneComponent = c;
                    }

                    if (
                        this.mapComponentData[c].basicComponentData
                            .usedOtherScenes.length > 0
                    ) {
                        otherSceneComponent = c;
                    }

                    if (
                        this.mapComponentData[c].basicComponentData.usedResults
                            .length > 0
                    ) {
                        for (const wi of this.mapComponentData[c]
                            .basicComponentData.usedResults) {
                            this.wins.push(msgResult.clientData.results[wi]);
                        }
                    }
                }

                if (this.mapComponentData[c].pos) {
                    this.pos = this.mapComponentData[c].pos;
                }
            }
        }

        if (sceneComponent != "") {
            const curSceneIndex =
                this.mapComponentData[sceneComponent].basicComponentData
                    .usedScenes[
                    this.mapComponentData[sceneComponent].basicComponentData
                        .usedScenes.length - 1
                ];
            this.scene = parseMsgScene(msgResult.clientData, curSceneIndex);

            // 如果当前scene用chgSymbols组件的，需要生成pos
            if (
                isChgSymbolsComponent(
                    this.mapComponentConfigData[sceneComponent]
                )
            ) {
                //! 这里其实是有隐患的，目前的配置下，这个逻辑是正确的，如果后面有调整就需要改逻辑
                if (curSceneIndex > 0) {
                    this.pos = genPosWithChgSymbols(
                        msgResult.clientData,
                        curSceneIndex - 1,
                        this.mapComponentConfigData[sceneComponent]
                    );
                }
            }
        }

        if (otherSceneComponent != "") {
            this.otherScene = parseMsgOtherScene(
                msgResult.clientData,
                this.mapComponentData[otherSceneComponent].basicComponentData
                    .usedOtherScenes[
                    this.mapComponentData[otherSceneComponent]
                        .basicComponentData.usedOtherScenes.length - 1
                ]
            );
        }
    }

    calcWins() {
        let wins = 0;
        for (const win of this.wins) {
            wins += win.cashWin;
        }

        return wins;
    }

    isInComponents(components) {
        for (const ci in components) {
            if (this.mapComponentData[components[ci]]) {
                return true;
            }
        }

        return false;
    }

    isFGEnding() {
        return isFGEndingModule(this.curStateData.module);
    }

    isNeedTotalWins() {
        return isNeedTotalWinsModule(this.curStateData.module);
    }

    isRetriggerFG() {
        return isRetriggerFGModule(this.curStateData.module);
    }
}

// LogicStep2 是 SlotCraft Client 最基础的class之一，一个step可以理解为一次respin等
// 简单来说，step是一组state的集合，step主要由服务器逻辑拆分，但也可能被前端逻辑进一步拆分
class LogicStep2 {
    constructor(gr2, stepIndex, resultIndex, curBet) {
        this.gameResult2 = gr2;
        this.curResultIndex = resultIndex;
        this.mapStates = {};
        this.lstStates = [];
        this.curResult = gr2.curResults[resultIndex]; // msg

        this.curStepIndex = stepIndex;

        this._parseResult(this.curResult, curBet, this.gameResult2.mgr2);
    }

    _parseResult(msgResult, curBet, mgr2) {
        // 首先先生成state，根据mapComponents
        for (const key in mgr2.statedata) {
            const curStateData = mgr2.statedata[key];
            if (
                hasState(
                    curStateData,
                    msgResult.clientData.curGameModParam.mapComponents
                )
            ) {
                const curState = new LogicState2(
                    key,
                    curStateData,
                    mgr2.cfgdata[curBet],
                    msgResult
                );
                this.mapStates[key] = curState;

                if (isExitState(curStateData)) {
                    this.gameResult2._cacheExitState(curState);
                }
            }
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;

        // 然后填充state list，这时根据historyComponents数据，respin ending还会有特殊处理
        for (const statename of mgr2.statelist) {
            if (this.mapStates[statename]) {
                if (
                    this.mapStates[statename].respin != null &&
                    this.mapStates[statename].curStateData.exitmodule
                ) {
                    if (
                        this.mapStates[statename].respin.lastRespinNum == 0 &&
                        this.mapStates[statename].respin.lastTriggerNum == 0 &&
                        isRespinEnding(
                            this.gameResult2.curResults,
                            this.curResultIndex,
                            this.mapStates[statename].curStateData.list[0]
                        )
                    ) {
                        this.lstStates.push(statename);

                        this.gameResult2._removeExitState(statename);
                    }
                } else if (
                    this.mapStates[statename].isInComponents(historyComponents)
                ) {
                    this.lstStates.push(statename);
                }
            }
        }

        this.gameResult2._procExitStates(this);
    }

    async _runLogic(gr2, mgr2) {
        // 如果这个step触发了再次触发免费游戏，那么需要特殊处理UI刷新，应该在游戏处理完增加FG以后，再多刷新一次UI
        if (this.isRetriggerFG()) {
            for (const statename in this.mapStates) {
                if (this.mapStates[statename].respin != null) {
                    if (this.mapStates[statename].curStateData.toui) {
                        mgr2._onUIFGNum(
                            this.mapStates[statename].respin.curRespinNum,
                            this.mapStates[statename].respin.curRespinNum +
                                this.mapStates[statename].respin.lastRespinNum -
                                this.mapStates[statename].curAddRespinNum
                        );
                    }
                }
            }

            // 如果不是第一个step，需要给一个空state的事件，让逻辑可以处理spin，然后再收到spin时处理spinEnd
            if (this.curStepIndex != 0) {
                await mgr2._onEvent(gr2, this, null).catch((err) => {
                    console.error(statename + " got " + err);
                });
            }

            for (let si = 0; si < this.lstStates.length; si++) {
                const statename = this.lstStates[si];
                await mgr2
                    ._onEvent(gr2, this, this.mapStates[statename])
                    .catch((err) => {
                        console.error(statename + " got " + err);
                    });

                if (this.mapStates[statename].isRetriggerFG()) {
                    if (this.mapStates[statename].respin != null) {
                        if (this.mapStates[statename].curStateData.toui) {
                            mgr2._onUIFGNum(
                                this.mapStates[statename].respin.curRespinNum,
                                this.mapStates[statename].respin.curRespinNum +
                                    this.mapStates[statename].respin
                                        .lastRespinNum
                            );
                        }
                    }
                }
            }

            return;
        }

        for (const statename in this.mapStates) {
            if (this.mapStates[statename].respin != null) {
                if (this.mapStates[statename].curStateData.toui) {
                    mgr2._onUIFGNum(
                        this.mapStates[statename].respin.curRespinNum,
                        this.mapStates[statename].respin.curRespinNum +
                            this.mapStates[statename].respin.lastRespinNum
                    );
                }
            }
        }

        // 如果不是第一个step，需要给一个空state的事件，让逻辑可以处理spin，然后再收到spin时处理spinEnd
        if (this.curStepIndex != 0) {
            await mgr2._onEvent(gr2, this, null).catch((err) => {
                console.error(statename + " got " + err);
            });
        }

        for (let si = 0; si < this.lstStates.length; si++) {
            const statename = this.lstStates[si];
            await mgr2
                ._onEvent(gr2, this, this.mapStates[statename])
                .catch((err) => {
                    console.error(statename + " got " + err);
                });
        }
    }

    _addExitState(curState) {
        this.mapStates[curState.stateName] = curState;
        this.lstStates.push(curState.stateName);
    }

    calcWins() {
        let wins = 0;
        for (const key in this.mapStates) {
            wins += this.mapStates[key].calcWins();
        }

        return wins;
    }

    calcMsgWins() {
        return this.curResult.cashWin;
    }

    isRetriggerFG() {
        for (const key in this.mapStates) {
            if (this.mapStates[key].isRetriggerFG()) {
                return true;
            }
        }

        return false;
    }
}

// LogicGameResult2 是 SlotCraft Client 最基础的class之一，一个game result可以理解为一次spin的返回
// game result一定是一组step，至少有1个
class LogicGameResult2 {
    constructor(msgdata, mgr2) {
        this.mgr2 = mgr2;

        this.lstSteps = [];

        this.curResults = null;
        this.curBet = 0;
        this.totalWins = 0;

        this.cacheExitStates = {}; // 缓存当前需要处理exit的state

        this._parseMsg(msgdata);
    }

    // 缓存exit的state
    _cacheExitState(state) {
        this.cacheExitStates[state.stateName] = state;
    }

    // 获取exit的state
    _getExitState(stateName) {
        return this.cacheExitStates[stateName];
    }

    // _removeExitState -
    _removeExitState(stateName) {
        delete this.cacheExitStates[stateName];
    }

    _procExitStates(curStep) {
        for (const stateName in this.cacheExitStates) {
            const curState = this.cacheExitStates[stateName];
            if (
                isRespinEnding(
                    this.curResults,
                    curStep.curResultIndex,
                    curState.curStateData.list[0]
                )
            ) {
                curStep._addExitState(curState);

                this._removeExitState(stateName);
            }
        }
    }

    // 解析消息
    _parseMsg(msgdata) {
        // Check if msgdata exists and has the properties gmi, replyPlay and results
        if (
            msgdata &&
            msgdata.gmi &&
            msgdata.gmi.replyPlay &&
            msgdata.gmi.replyPlay.results
        ) {
            this.curResults = msgdata.gmi.replyPlay.results;
            this.curBet = msgdata.gmi.lines;
            this.totalWins = msgdata.gmi.totalwin;

            this._parseResults();
        } else {
            // Throw an error if the message data is invalid
            throw new Error("Invalid message data.");
        }
    }

    _parseResults() {
        for (let i = 0; i < this.curResults.length; i++) {
            const curResult = this.curResults[i];

            const curStep = new LogicStep2(
                this,
                this.lstSteps.length,
                i,
                this.curBet
            );

            for (const stateName of curStep.lstStates) {
                // 如果是免费结束，一定需要总赢得
                if (curStep.mapStates[stateName].isFGEnding()) {
                    curStep.mapStates[stateName].totalWins = this.totalWins;
                } else if (curStep.mapStates[stateName].isNeedTotalWins()) {
                    // 否则，如果还需要总赢得的话，只可能是单局总赢得
                    if (curStep.mapStates[stateName].respin != null) {
                        curStep.mapStates[stateName].totalWins = calcTotalWins(
                            this.curResults,
                            i,
                            curStep.mapStates[stateName].curStateData.list[0]
                        );
                    } else {
                        curStep.mapStates[stateName].totalWins = calcTotalWins(
                            this.curResults,
                            i,
                            ""
                        );
                    }
                }
            }

            this.lstSteps.push(curStep);
        }
    }

    async _runLogic() {
        let curWins = 0;

        for (let step of this.lstSteps) {
            await step._runLogic(this, this.mgr2).catch((err) => {
                console.error(step.name + " got " + err);
            });

            curWins += step.calcMsgWins();

            this.mgr2._onUIWins(curWins);
        }
    }
}

exports.LogicState2 = LogicState2;
exports.LogicStep2 = LogicStep2;
exports.LogicGameResult2 = LogicGameResult2;
