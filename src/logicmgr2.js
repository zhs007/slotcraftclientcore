const {
  SCLogicState2,
  SCLogicStep2,
  SCLogicGameResult2,
  LogicGameResult2,
} = require("./logicstate2.js");
const { isSameScene } = require("./utils.js");

class SCLogicMgr2 {
  constructor() {
    this.cfgdata = null;
    this.statedata = null;
    this.statelist = null;

    this.lstGameResult2Listener = []; // async func(gameResult2, step2, state2)
    this.callbackFGNum = null; // callback(curNum, totalNum)
    this.callbackWins = null; // callback(wins)

    this.curMsg = null;
    this.cunMsgIndex = 0;
    this.curResults = null;
    this.curBet = 0;

    this.curGameResult2 = null;

    this.curStateWins = 0;

    this.version = 'v1.1.20';
  }

  addListener(listener) {
    this.lstGameResult2Listener.push(listener);
  }

  setUIFrameworksFuncs(callbackWins, callbackFGNum) {
    this.callbackWins = callbackWins;
    this.callbackFGNum = callbackFGNum;
  }

  // 收到配置数据
  onConfig(cfgdata, statedata, statelist) {
    this.cfgdata = cfgdata;
    this.statedata = statedata;
    this.statelist = statelist;
  }

  // 收到新的消息，这里 then 是逻辑全部处理完后的事件
  async onMessage(msgdata) {
    this.curGameResult2 = new LogicGameResult2(msgdata, this);

    await this.curGameResult2._runLogic();
  }

  // 内部接口，外部不要用，顺序执行回调，会阻塞
  async _onEvent(gameResult2, step2, state2) {
    for (let ii = 0; ii < this.lstGameResult2Listener.length; ii++) {
      await this.lstGameResult2Listener[ii](gameResult2, step2, state2);
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
