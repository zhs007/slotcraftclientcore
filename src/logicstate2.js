const { parseMsgScene, parseMsgOtherScene, hasState } = require("./utils.js");

// LogicState2 是 SlotCraft Client 最基础的class
// 逻辑非常简单，就是缓存 stateData 数据里最新的数据，一种数据只会缓存一个。
class LogicState2 {
    constructor(stateName, curStateData, msgResult) {
        this.curStateIndex = -1;

        this.stateName = stateName;
        this.curStateData = curStateData;
        this.scene = null;
        this.otherScene = null;
        this.pos = null;
        this.wins = [];

        this.respin = null;
        this.collector = null;

        this.msgResult = msgResult; // msg
        this.mapComponentData = {}; // kv

        this._parseResult(curStateData, msgResult);
    }

    _parseResult(curStateData, msgResult) {
        const mapComponents =
            msgResult.clientData.curGameModParam.mapComponents;
        for (const val of curStateData.list) {
            if (mapComponents[val]) {
                this.mapComponentData[val] = mapComponents[val];
            }
        }

        if (this.mapComponentData.length == 0) {
            throw new Error("_parseResult fail.");
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;
        let sceneComponent = "";
        let otherSceneComponent = "";

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

                if (
                    this.mapComponentData[c]["@type"] ==
                    "type.googleapis.com/sgc7pb.RespinData"
                ) {
                    this.respin = this.mapComponentData[c];
                }
            }
        }

        if (sceneComponent != "") {
            this.scene = parseMsgScene(
                msgResult.clientData,
                this.mapComponentData[sceneComponent].basicComponentData
                    .usedScenes[
                    this.mapComponentData[sceneComponent].basicComponentData
                        .usedScenes.length - 1
                ]
            );
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
}

// LogicStep2 是 SlotCraft Client 最基础的class之一，一个step可以理解为一次respin等
// 简单来说，step是一组state的集合，step主要由服务器逻辑拆分，但也可能被前端逻辑进一步拆分
class LogicStep2 {
    constructor(stepIndex, msgResult, mgr2) {
        this.mapStates = {};
        this.lstStates = [];
        this.curResult = msgResult; // msg

        this.curStepIndex = stepIndex;
        // this.curStateIndex = 0;

        this._parseResult(msgResult, mgr2);
    }

    _parseResult(msgResult, mgr2) {
        for (const key in mgr2.statedata) {
            const curStateData = mgr2.statedata[key];
            if (
                hasState(
                    curStateData,
                    msgResult.clientData.curGameModParam.mapComponents
                )
            ) {
                const curState = new LogicState2(key, curStateData, msgResult);
                this.mapStates[key] = curState;
            }
        }

        const historyComponents =
            msgResult.clientData.curGameModParam.historyComponents;

        for (const val of mgr2.statelist) {
            if (this.mapStates[val] && historyComponents.indexOf(val) >= 0) {
                // this.mapStates[val].curStateIndex = this.lstStates.length;
                this.lstStates.push(val);
            }
        }
    }

    async _runLogic(gr2, mgr2) {
        for (let si = 0; si < this.lstStates.length; si++) {
            const statename = this.lstStates[si];
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

        for (let si = 0; si < this.lstStates.length; si++) {
            const statename = this.lstStates[si];
            if (this.mapStates[statename].respin != null) {
                if (
                    this.mapStates[statename].curStateData.exitmodule &&
                    this.mapStates[statename].respin.lastRespinNum == 0 &&
                    this.mapStates[statename].respin.lastTriggerNum == 0
                ) {
                    await mgr2
                        ._onEvent(gr2, this, this.mapStates[statename])
                        .catch((err) => {
                            console.error(statename + " got " + err);
                        });
                }
            } else {
                await mgr2
                    ._onEvent(gr2, this, this.mapStates[statename])
                    .catch((err) => {
                        console.error(statename + " got " + err);
                    });
            }
        }
    }

    calcWins() {
        let wins = 0;
        for (const key in this.mapStates) {
            wins += this.mapStates[key].calcWins();
        }

        return wins;
    }
}

// LogicGameResult2 是 SlotCraft Client 最基础的class之一，一个game result可以理解为一次spin的返回
// game result一定是一组step，至少有1个
class LogicGameResult2 {
    constructor(msgdata, mgr2) {
        this.mgr2 = mgr2;

        this.lstSteps = [];

        this.cunResultIndex = 0;
        this.curResults = null;
        this.curBet = 0;

        // this.curStepIndex = -1;

        this._parseMsg(msgdata);
    }

    // 解析消息
    _parseMsg(msgdata) {
        if (
            msgdata &&
            msgdata.gmi &&
            msgdata.gmi.replyPlay &&
            msgdata.gmi.replyPlay.results
        ) {
            this.curResults = msgdata.gmi.replyPlay.results;
            this.curBet = msgdata.gmi.lines;

            this._parseResults();
        } else {
            throw new Error("Invalid message data.");
        }
    }

    _parseResults() {
        for (const i in this.curResults) {
            const curResult = this.curResults[i];

            const curStep = new LogicStep2(
                this.lstSteps.length,
                curResult,
                this.mgr2
            );
            this.lstSteps.push(curStep);
        }

        // this.curStepIndex = 0;
    }

    async _runLogic() {
        let curWins = 0;

        for (let step of this.lstSteps) {
            await step._runLogic(this, this.mgr2).catch((err) => {
                console.error(step.name + " got " + err);
            });

            curWins += step.calcWins();

            this.mgr2._onUIWins(curWins);
        }
    }
}

exports.LogicState2 = LogicState2;
exports.LogicStep2 = LogicStep2;
exports.LogicGameResult2 = LogicGameResult2;
