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
    isTriggerFGModule,
    isChgSymbolsComponent,
    genPosWithChgSymbols,
} = require('./utils.js');

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
                    this.mapComponentData[val]['@type'] ==
                    'type.googleapis.com/sgc7pb.RespinData'
                ) {
                    this.respin = this.mapComponentData[val];
                } else if (
                    this.mapComponentData[val]['@type'] ==
                    'type.googleapis.com/sgc7pb.CollectorData'
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
            throw new Error('_parseResult fail.');
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;
        let sceneComponent = '';
        let otherSceneComponent = '';

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

        if (sceneComponent != '') {
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

        if (otherSceneComponent != '') {
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
}

class GameStep {
    constructor(gr2) {
        this.gameResult = gr2;
        this.totalWins = 0;
        this.lstStateData = [];
        this.toUiStateData = null;
        this.exitStateData = null;
    }

    calcTotalWins(cashwin) {
        this.totalWins += cashwin;
    }
    getTotalWins() {
        return this.totalWins;
    }
    // 解析游戏步骤
    parseGameStep(curStep) {
        // 定义当前步骤的状态数组
        let curStepStates = [];
        // 获取当前步骤的状态长度
        let lststatelen = curStep.lstStates.length;
        let singlenames = [];
        // 遍历当前步骤的状态
        for (let i = 0; i < lststatelen; i++) {
            // 获取当前状态的名字
            let stateName = curStep.lstStates[i];
            // 获取当前状态的数据
            let stateData = curStep.mapStates[stateName];
            // curStepStates.push(stateData);
            // 将当前状态的数据添加到当前步骤的状态数组中
            this._pushCurStepStates(
                this.gameResult.mgr2,
                curStepStates,
                stateData
            );

            if (stateData.isNeedTotalWins()) {
                // 否则，如果还需要总赢得的话，只可能是单局总赢得
                stateData.totalWins = this.getTotalWins();
            }
            //这里记录但step中得singlestate名字，晚些从后遍历，跳过第一个，其他全删
            if (stateData.curStateData.stepsingle) {
                singlenames.push(stateData.curStateData.module);
            }
            //一个step中，toui、exitmodule应该是唯一state，如果多次出现，这里逻辑会覆盖
            if (stateData.curStateData.toui && stateData.respin) {
                this.toUiStateData = stateData;
            }
            if (stateData.curStateData.exitmodule) {
                stateData.totalWins = this.gameResult.totalWins;
                this.exitStateData = stateData;
            }
        }
        this.lstStateData.push(curStepStates);
        this._singleReCheck(singlenames);
    }
    _singleReCheck(singlenames) {
        //逻辑上跳过倒数第一个，其他全删
        let needremove = [];
        for (let i = this.lstStateData.length - 1; i >= 0; i--) {
            let curstates = this.lstStateData[i];
            for (let j = curstates.length - 1; j >= 0; j--) {
                let curStateData = curstates[j];
                let modulename = curStateData.curStateData.module;
                if (needremove.indexOf(modulename) >= 0) {
                    curstates.splice(j, 1);
                    continue;
                }
                if (singlenames.indexOf(modulename) >= 0) {
                    needremove.push(modulename);
                }
            }
        }
    }
    // 对添加到list的state进行过滤，若mgr2中的IsIgnoreState为true，则不添加state
    _pushCurStepStates(mgr2, lstStates, state) {
        let isIgnore = mgr2.isIgnoreState;
        if (state.curStateData.ignorestate) {
            let hasResult = false; // 是否已有结果
            if (state.mapComponentData) {
                for (const key of state.curStateData.list) {
                    let data = state.mapComponentData[key];
                    if (data && data.value && data.value != '') {
                        hasResult = true;
                        break;
                    }
                }
            }

            // 收到免费选择结果时，删除StateList中已存在的不包含结果的SelectFreeState，以保证客户端仅会收到一个包含结果的SelectFreeState
            if (hasResult)
                this._removeAllStepStateByName(state.curStateData.module);

            // 此处的逻辑为，第一个没有结果的SelectFree会加入到list中，并将mgr2.isIgnoreState置为true
            // 后续消息中有结果的SelectFree会将mgr2.isIgnoreState置为false，并加入list中
            mgr2.isIgnoreState = !hasResult;
            if (isIgnore && !mgr2.isIgnoreState) isIgnore = false;
        }

        if (!isIgnore) {
            lstStates.push(state);
        }
    }

    // 删除statelist已存在的相同state
    _removeAllStepStateByName(stateName) {
        for (let step of this.gameResult.lstSteps) {
            for (let lstStates of step.lstStateData) {
                for (let i = lstStates.length - 1; i >= 0; i--) {
                    if (lstStates[i].curStateData.module == stateName) {
                        lstStates.splice(i, 1);
                    }
                }
            }
        }
    }

    //刷新Fg UI逻辑，在于不需要弹出免费或者额外免费时就刷新UI，而是等下一step旋转时刷新UI
    async _gameStepRunLogic(gr2, mgr2, runingindex) {
        //step的头
        if (this.toUiStateData) {
            mgr2._onUIFGNum(
                this.toUiStateData.respin.curRespinNum,
                this.toUiStateData.respin.curRespinNum +
                    this.toUiStateData.respin.lastRespinNum -
                    this.toUiStateData.respin.curAddRespinNum
            );
        }

        let lststatelen0 = this.lstStateData.length;
        for (let si0 = 0; si0 < lststatelen0; si0++) {
            const curstepdata = this.lstStateData[si0];
            let lststatelen = curstepdata.length;
            for (let si = 0; si < lststatelen; si++) {
                const statedata = curstepdata[si];
                if (statedata.curStateData.exitmodule) {
                    //这里写的有点绝对，暂时够用
                    continue;
                }

                if (statedata.curStateData.triggerspin) {
                    // await mgr2._onEvent(gr2, curstepdata, null).catch((err) => {
                    //     console.error(' got ' + err);
                    // });
                    await mgr2
                        ._onEvent(gr2, curstepdata, {
                            curStateData: { module: 'StepStart' },
                        })
                        .catch((err) => {
                            console.error(' got ' + err);
                        });
                }
                await mgr2
                    ._onEvent(gr2, curstepdata, statedata)
                    .catch((err) => {
                        console.error(' got ' + err);
                    });
            }
        }
        await mgr2
            ._onEvent(gr2, curstepdata, { curStateData: { module: 'StepEnd' } })
            .catch((err) => {
                console.error(' got ' + err);
            });
        let isEndStep = runingindex == this.gameResult.getgameStepCount() - 1;
        //补发exitStateData
        if (isEndStep && this.exitStateData != null) {
            const exitstate = this.exitStateData;
            await mgr2._onEvent(gr2, this, exitstate).catch((err) => {
                console.error(' got ' + err);
            });
        }
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
            }
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;

        // 然后填充state list，这时根据historyComponents数据，respin ending还会有特殊处理
        for (const statename of mgr2.statelist) {
            // if (this.mapStates[statename]) {
            //     if (this.mapStates[statename].respin != null && this.mapStates[statename].curStateData.exitmodule) {
            //         if (this.mapStates[statename].respin.lastRespinNum == 0 && this.mapStates[statename].respin.lastTriggerNum == 0 && isRespinEnding(this.gameResult2.curResults, this.curResultIndex, this.mapStates[statename].curStateData.list[0])) {
            //             this.lstStates.push(statename);

            //             this.gameResult2._removeExitState(statename);
            //         }
            //     } else if (this.mapStates[statename].isInComponents(historyComponents)) {
            //         this.lstStates.push(statename);
            //     }
            // }

            if (
                this.mapStates[statename] &&
                this.mapStates[statename].isInComponents(historyComponents)
            ) {
                this.lstStates.push(statename);
            }
        }
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

        this._parseMsg(msgdata);
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
            throw new Error('Invalid message data.');
        }
    }

    _parseResults() {
        var gameStep = null;
        for (let i = 0; i < this.curResults.length; i++) {
            const curStep = new LogicStep2(
                this,
                this.lstSteps.length,
                i,
                this.curBet
            );
            const curResult = this.curResults[i];
            const curGameModParam = curResult.clientData.curGameModParam;
            let firstComponent = curGameModParam.firstComponent;
            let nextStepFirstComponent = curGameModParam.nextStepFirstComponent;
            if (this._gameStepNewOrEnd(firstComponent)) {
                gameStep = new GameStep(this);
            }
            gameStep?.calcTotalWins(curResult.cashWin);
            gameStep?.parseGameStep(curStep);

            if (this._gameStepNewOrEnd(nextStepFirstComponent)) {
                this.lstSteps.push(gameStep);
            }
        }
    }
    _gameStepNewOrEnd(componentname) {
        if (
            componentname == '' ||
            componentname == 'fg-start' ||
            this.mgr2.CheckStateTriggerKey(componentname, 'creategamestep')
        ) {
            return true;
        }
        return false;
    }
    getgameStepCount() {
        return this.lstSteps.length;
    }
    //刷新wins逻辑，在于每个step结算时自动刷新，由于客户端可能提前刷新(弹出结算等)，所以win在step开始时就可以把值加上
    async _resultRunLogic() {
        this.mgr2.curStateWins = 0;
        let steplen = this.lstSteps.length;
        for (let i = 0; i < steplen; i++) {
            let step = this.lstSteps[i];
            this.mgr2.curStateWins += step.getTotalWins();
            await step._gameStepRunLogic(this, this.mgr2, i).catch((err) => {
                console.error(' got ' + err);
            });
            this.mgr2._onUIWins(this.mgr2.curStateWins);
        }
    }
}

exports.LogicState2 = LogicState2;
exports.LogicStep2 = LogicStep2;
exports.GameStep = GameStep;
exports.LogicGameResult2 = LogicGameResult2;
