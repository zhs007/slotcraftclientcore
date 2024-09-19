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

class GameStep{
    constructor(gr2) {
        this.gameResult = gr2;
        this.totalWins=0;
        this.stateIndex=0;
        this.lstStateData=[];
        this.toUiStateData=null;
        this.exitStateData=null;
    }

    calcTotalWins(cashwin) {
        this.totalWins += cashwin;
    }
    getTotalWins() {
        return this.totalWins;
    }
    parseGameStep(curStep) {

        let lststatelen=curStep.lstStates.length;
        for(let i=0;i<lststatelen;i++){
            let stateName=curStep.lstStates[i];
            let stateData=curStep.mapStates[stateName];
            this.lstStateData.push(stateData);
            
            if (stateData.isNeedTotalWins()) {
                // 否则，如果还需要总赢得的话，只可能是单局总赢得
                stateData.totalWins = this.getTotalWins();
            }

            if (stateData.curStateData.toui&&stateData.respin) {
                this.toUiStateData=stateData;
            }
            if(stateData.curStateData.exitmodule){
                stateData.totalWins = this.gameResult.totalWins;
                this.exitStateData=stateData;
            }
        }
    }
    //刷新Fg UI逻辑，在于不需要弹出免费或者额外免费时就刷新UI，而是等下一step旋转时刷新UI
    async _gameStepRunLogic(gr2, mgr2,runingindex) {
        if (this.stateIndex == 0) {
            await mgr2._onEvent(gr2, this, null).catch((err) => {
                console.error(" got " + err);
            });
            if(this.toUiStateData){
                mgr2._onUIFGNum(
                    this.toUiStateData.respin.curRespinNum,
                    this.toUiStateData.respin.curRespinNum +
                    this.toUiStateData.respin.lastRespinNum
                        //-this.mapStates[statename].respin.curAddRespinNum
                );
            }
        }
        let lststatelen=this.lstStateData.length;
        for (let si = 0; si <lststatelen; si++) {
            this.stateIndex++;
            const statedata = this.lstStateData[si];        
            if(statedata.curStateData.exitmodule){
                //这里写的有点绝对，暂时够用
                continue;
            }
            await mgr2
            ._onEvent(gr2, this, statedata)
            .catch((err) => {
                console.error(" got " + err);
            });
        }
        let isEndStep=(runingindex==this.gameResult.getgameStepCount()-1);
        //补发exitStateData
        if(isEndStep&&this.exitStateData!=null){
            const exitstate=this.exitStateData;
            await mgr2
            ._onEvent(gr2, this, exitstate)
            .catch((err) => {
                console.error(" got " + err);
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

            if (this.mapStates[statename]&&this.mapStates[statename].isInComponents(historyComponents)) {
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
            throw new Error("Invalid message data.");
        }
    }

    _parseResults() {
        var gameStep=null;
        for (let i = 0; i < this.curResults.length; i++) {
            const curStep = new LogicStep2(
                this,
                this.lstSteps.length,
                i,
                this.curBet
            );
            const curResult = this.curResults[i];
            const curGameModParam=curResult.clientData.curGameModParam;
            let firstComponent=curGameModParam.firstComponent;
            let nextStepFirstComponent=curGameModParam.nextStepFirstComponent;
            if(firstComponent==""||firstComponent=="fg-start"){
                gameStep=new GameStep(this);
            }
            gameStep?.calcTotalWins(curResult.cashWin);
            gameStep?.parseGameStep(curStep);

            if(nextStepFirstComponent==""||nextStepFirstComponent=="fg-start"){
                this.lstSteps.push(gameStep);
            }

        }
    }
    getgameStepCount(){
        return this.lstSteps.length;
    }
    //刷新wins逻辑，在于每个step结算时自动刷新，由于客户端可能提前刷新(弹出结算等)，所以win在step开始时就可以把值加上
    async _resultRunLogic() {
        this.mgr2.curStateWins = 0;
        let steplen = this.lstSteps.length;
        for (let i = 0; i < steplen; i++) {
            let step = this.lstSteps[i];
            this.mgr2.curStateWins += step.getTotalWins();
            await step._gameStepRunLogic(this, this.mgr2,i).catch((err) => {
                console.error(" got " + err);
            });
            this.mgr2._onUIWins(this.mgr2.curStateWins);
        }

    }
}

exports.LogicState2 = LogicState2;
exports.LogicStep2 = LogicStep2;
exports.GameStep = GameStep;
exports.LogicGameResult2 = LogicGameResult2;