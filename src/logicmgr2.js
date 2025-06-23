const {
    SCLogicState2,
    SCLogicStep2,
    ScGameStep,
    SCLogicGameResult2,
    LogicGameResult2,
} = require('./logicstate2.js');
const { isSameScene } = require('./utils.js');

class SCLogicMgr2 {
    constructor() {
        this.cfgdata = null;
        this.statedata = null;
        this.statelist = null;

        this.lstGameResult2Listener = []; // async func(gameResult2, step2, state2)
        this.callbackFGNum = null; // callback(curNum, totalNum)
        this.callbackWins = null; // callback(wins)
        this.callwinLimitTip = null; // callback(winlimit)

        this.curMsg = null;
        this.cunMsgIndex = 0;
        this.curResults = null;
        this.curBet = 0;

        this.curGameResult2 = null;
        this.curStateWins = 0;
        this.isIgnoreState = false; // 是否处于忽略State的状态
        this.maxwinLimitNUmber=-1;

        // this.version = 'v1.1.31'; 
        // this.version = 'v1.1.33'; // 2025.03.17
        // this.version = 'v1.1.34'; // 2025.04.17
        // this.version = 'v1.1.35'; // 2025.05.16
        //this.version = 'v1.1.36'; // 2025.05.19
        this.version = 'v1.1.37'; // 2025.06.23  //对mac safari 兼容性优化
    }

    addListener(listener) {
        this.lstGameResult2Listener.push(listener);
    }
    setWinLimitNumber(limit) {
        this.maxwinLimitNUmber=limit;
    }
    getWinLimitNumber() {
        return this.maxwinLimitNUmber;
    }
    isOutWinLimit() {
        if(this.maxwinLimitNUmber <=0||this.curStateWins < this.maxwinLimitNUmber) {
            return false;
        }
        this.curStateWins=this.maxwinLimitNUmber;
        return true;
    }
    setUIFrameworksFuncs(callbackWins, callbackFGNum,callwinlimit) {
        this.callbackWins = callbackWins;
        this.callbackFGNum = callbackFGNum;
        this.callwinLimitTip=callwinlimit;
    }

    getCurMsg() {
        return this.curMsg;
    }

    // 收到配置数据
    onConfig(cfgdata, statedata, statelist) {
        this.cfgdata = cfgdata;
        this.statedata = statedata;
        this.statelist = statelist;
        this._resetStateData();
    }
    _resetStateData() {
        for (const key in this.statedata) {
            var curStateData = this.statedata[key];
            if (curStateData.module == 'FreeGameEnding') {
                curStateData.bquick = false;
                curStateData.toui = true;
                curStateData.exitmodule = curStateData.module;
            }
            if (curStateData.module == 'Spin') {
                curStateData.triggerspin = true;
            }
            if (curStateData.module == 'ShowBigWins') {
                curStateData.stepsingle = true;
            }
        }
    }
    CheckStateTriggerKey(commponname, triggerkey) {
        for (const key in this.statedata) {
            const curStateData = this.statedata[key];
            if (curStateData.list && curStateData.list.indexOf(commponname) >= 0) {
                return curStateData[triggerkey];
            }
        }
        return false;
    }
    onResumeMessage(msgdata, modulekey) {
        if (msgdata &&
            msgdata.gmi &&
            msgdata.gmi.replyPlay &&
            msgdata.gmi.replyPlay.results
        ) {
            let results = msgdata.gmi.replyPlay.results;
            return this._parseResumeMessage(results, modulekey);
        }
        return false;
    }
    _moduleComponent(modulekey) {
        let lstcomponent = [];
        for (let key in this.statedata) {
            let state = this.statedata[key];
            if (state[modulekey]) {
                lstcomponent = lstcomponent.concat(state['list']);
            }
        }
        return lstcomponent;
    }
    _parseResumeMessage(results, modulekey) {
        let modulecomponents = this._moduleComponent(modulekey);
        if (modulecomponents.length == 0) {
            return false;
        }
        for (let i = results.length - 1; i >= 0; i--) {
            const curResult = results[i];
            const curGameModParam = curResult.clientData.curGameModParam;
            let mapComponents = curGameModParam.mapComponents;
            for (let mkey in mapComponents) {
                if (modulecomponents.indexOf(mkey) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
    // 收到新的消息，这里 then 是逻辑全部处理完后的事件
    async onMessage(msgdata) {
        this.curMsg = msgdata;
        this.curGameResult2 = new LogicGameResult2(msgdata, this);

        await this.curGameResult2._resultRunLogic();
    }

    // 内部接口，外部不要用，顺序执行回调，会阻塞
    async _onEvent(gameResult2, step2, state2) {
        for (let ii = 0; ii < this.lstGameResult2Listener.length; ii++) {
            await this.lstGameResult2Listener[ii](gameResult2, step2, state2);
        }
    }
    // 内部接口，外部不要用，调用中间层得超出赢得最大限制
    _onUIWinLimit() {
        if (this.callwinLimitTip) {
            this.callwinLimitTip();
        }
    }
    // 内部接口，外部不要用，通知UI刷新wins
    _onUIWins(curWins) {
        if (this.callbackWins) {
            this.callbackWins(curWins);
        }
    }

    // 内部接口，外部不要用，通知UI刷新免费次数
    _onUIFGNum(curNum, totalNum) {
        if (this.callbackFGNum) {
            this.callbackFGNum(curNum, totalNum);
        }
    }
    // 前端用来主动刷新UIWins的接口
    refurbishUIWins() {
        this._onUIWins(this.curStateWins);
    }
}

exports.SCLogicMgr2 = SCLogicMgr2;
