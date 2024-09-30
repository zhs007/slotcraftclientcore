const { SCUIData } = require('./uidata.js');
const { SCLogicState } = require('./logicstate.js');
const {
    SCBaseComponent,
    SCBankComponent,
    SCChangeSymbolComponent,
    SCCollectorComponent,
    SCReelComponent,
    SCRollSymbolComponent,
    SCTriggerComponent,
} = require('./component/all.js');
const { isSameScene } = require('./utils.js');

class SCLogicMgr {
    constructor() {
        this.lstStepBeginFunc = [];
        this.lstStepEndFunc = [];
    }

    // 收到配置数据
    onConfig(cfgdata, statedata, statelist) {
        this.cfgdata = cfgdata;
        this.statedata = statedata;
        this.statelist = statelist;

        this._init();
    }

    // 收到新的消息
    onMessage(msgdata) {
        this.curMsg = msgdata;

        if (
            msgdata &&
            msgdata.gmi &&
            msgdata.gmi.replyPlay &&
            msgdata.gmi.replyPlay.results
        ) {
            this.curResults = msgdata.gmi.replyPlay.results;
            this.curBet = msgdata.gmi.lines;
        } else {
            this.curResults = undefined;
        }

        this.oldStates = undefined;
        this.curStates = undefined;

        this.totalWin = 0;
        this.curNums = 0;
        this.allNums = 0;

        this.cunMsgIndex = 0;
        this._createStates();

        // 收到消息之后立刻启动新的step
        this.beginStep();
    }

    // 获取当前的 result
    getCurResult() {
        if (
            this.cunMsgIndex >= 0 &&
            this.curResults &&
            this.cunMsgIndex < this.curResults.length
        ) {
            return this.curResults[this.cunMsgIndex];
        }

        return null;
    }

    // 判断是否有下一个step
    hasNextStep() {
        return this.curResults && this.cunMsgIndex + 1 < this.curResults.length;
    }

    // 去下一个step
    nextStep() {
        if (this.hasNextStep()) {
            this.cunMsgIndex += 1;
            this._createStates();
            this.beginStep();
        }
    }

    //! 当前是否有合法的state数据，某些情况下，可能会存在不合法的数据
    hasCurState() {
        return (
            this.curStates &&
            this.curStateIndex >= 0 &&
            this.curStateIndex < this.curStates.length
        );
    }

    //! 查找一个state
    findState(module) {
        for (let ii = 0; ii < this.curStates.length; ii++) {
            if (this.curStates[ii].module == module) {
                return this.curStates[ii];
            }
        }

        return undefined;
    }

    //! 获取当前的state
    getCurState() {
        if (this.hasCurState()) {
            return this.curStates[this.curStateIndex];
        }

        return undefined;
    }

    //! 判断是否有下一个state
    hasNextState() {
        return this.curStates && this.curStateIndex + 1 < this.curStates.length;
    }

    // 去下一个state
    nextState() {
        if (this.hasNextState()) {
            this.curStateIndex += 1;
        }
    }

    //! 开始新的step
    beginStep() {
        for (var ii = 0; ii < this.lstStepBeginFunc.length; ii += 1) {
            var func = this.lstStepBeginFunc[ii];
            func(this.beginUIData);
        }
    }

    //! 当前step执行完成
    endStep() {
        for (var ii = 0; ii < this.lstStepEndFunc.length; ii += 1) {
            var func = this.lstStepEndFunc[ii];
            func(this.endUIData);
        }

        this.nextStep();
    }

    //! 添加Step开始的侦听函数，返回一个SCUIData
    addStepBeginListener(func) {
        for (var ii = 0; ii < this.lstStepBeginFunc.length; ii += 1) {
            if (func == this.lstStepBeginFunc[ii]) {
                return;
            }
        }

        this.lstStepBeginFunc.push(func);
    }

    //! 添加Step结束的侦听函数，返回一个SCUIData
    addStepEndListener(func) {
        for (var ii = 0; ii < this.lstStepEndFunc.length; ii += 1) {
            if (func == this.lstStepEndFunc[ii]) {
                return;
            }
        }

        this.lstStepEndFunc.push(func);
    }

    // //! 和前一个state比较，是否scene有变化
    // isSceneChg(target) {
    //     if (this.curStates && this.curStates.length > 1) {
    //         if (this.curStates[this.curStates.length - 1].scene.length > 0) {
    //             return isSameScene(this.curStates[this.curStates.length - 1].scene[this.curStates[this.curStates.length - 1].scene.length - 1], target)
    //         }
    //     }

    //     return false;
    // }

    // 初始化
    _init() {
        if (!this.cfgdata) {
            return;
        }

        // 创建成员数据
        this.components = {};

        for (var bet in this.cfgdata) {
            var bdata = this.cfgdata[bet];

            if (bdata.MapComponents) {
                this.components[bet] = {};

                for (var comname in bdata.MapComponents) {
                    var cdata = bdata.MapComponents[comname];
                    this.components[bet][comname] = this.createComponent(
                        comname,
                        cdata
                    );
                }
            }
        }

        // 判断哪些成员会参与表现
        this.showcomponents = {};

        for (var state in this.statedata) {
            var sdata = this.statedata[state];

            for (var ii = 0; ii < sdata.list.length; ii += 1) {
                var cname = sdata.list[ii];

                if (this.showcomponents[cname] == undefined) {
                    this.showcomponents[cname] = [];
                }

                this.showcomponents[cname].push(state);
            }
        }

        // 从statedata中找出toui的作为gamedata
        this.gamedata = [];

        for (var state in this.statedata) {
            var sdata = this.statedata[state];

            if (sdata.toui) {
                sdata.name = state;
                this.gamedata.push(sdata);
            }
        }
    }

    // 判断一个成员是否参与表现
    isShowComponent(name) {
        var scs = this.showcomponents[name];

        return scs && scs.length > 0;
    }

    getStateData(sname) {
        return this.statedata[sname];
    }

    // 根据history判断是否会出现某个state
    hasState(clientdata, sname, historyComponents, mapComponents) {
        if (!historyComponents) {
            return false;
        }

        var sdata = this.getStateData(sname);

        if (!sdata) {
            return false;
        }

        for (var ii = 0; ii < sdata.list.length; ii += 1) {
            var comname = sdata.list[ii];

            var hclen = historyComponents.length;

            for (var jj = 0; jj < hclen; jj += 1) {
                var sname = historyComponents[jj];
                var hrname = this._getRealComponentName(historyComponents[jj]);

                if (comname == hrname) {
                    var component = this.getComponent(this.curBet, comname);

                    if (component) {
                        var componentinfo = mapComponents[sname];

                        if (componentinfo) {
                            // 判断是否激活
                            if (component.isActive(clientdata, componentinfo)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        return false;
    }

    // 根据消息中的一个step转换成若干个state
    _createStates() {
        if (this.curStates) {
            this.oldStates = this.curStates;
            this.curStates = undefined;
        }

        if (!this.curResults || this.cunMsgIndex >= this.curResults.length) {
            return;
        }

        var mapStates = {};

        this.curStates = [];
        //this.curStateIndex = 0;

        var clientData = undefined;
        var historyComponents = undefined;
        var mapComponents = undefined;

        var result = this.curResults[this.cunMsgIndex];
        if (result && result.clientData && result.clientData.curGameModParam) {
            clientData = result.clientData;
            historyComponents =
                result.clientData.curGameModParam.historyComponents;
            mapComponents = result.clientData.curGameModParam.mapComponents;
        }

        if (historyComponents && mapComponents) {
            // 根据statelist将所有可能出现的state都构建出来
            var sllen = this.statelist.length;

            for (var ii = 0; ii < sllen; ii += 1) {
                var sname = this.statelist[ii];
                var sdata = this.getStateData(sname);

                if (!sdata) {
                    continue;
                }

                // 暂时特殊处理prestate的
                if (sdata.prestate) {
                    if (
                        this.hasState(
                            result.clientData,
                            sname,
                            historyComponents,
                            mapComponents
                        )
                    ) {
                        // 可能会产生多个state
                        var prename = this._getNextPreName(
                            result.clientData,
                            sname,
                            '',
                            historyComponents,
                            mapComponents
                        );

                        while (prename != '') {
                            var state = this.addState();

                            state.name = sname;
                            state.module = sdata.module;
                            state.performance = sdata.performance;

                            if (mapStates[sdata.prestate]) {
                                state.prestate = mapStates[sdata.prestate];
                            }

                            mapStates[sname + prename] = state;

                            prename = this._getNextPreName(
                                result.clientData,
                                sname,
                                prename,
                                historyComponents,
                                mapComponents
                            );
                        }
                    }
                } else {
                    if (
                        this.hasState(
                            result.clientData,
                            sname,
                            historyComponents,
                            mapComponents
                        )
                    ) {
                        var state = this.addState();

                        state.name = sname;
                        state.module = sdata.module;
                        state.performance = sdata.performance;

                        mapStates[sname] = state;
                    }
                }
            }

            // 按照成员顺序填充数据
            var tmpstate = new SCLogicState();
            var hlen = historyComponents.length;

            // 暂时直接填入win数据
            tmpstate.coinWin = result.coinWin;
            tmpstate.cashWin = result.cashWin;

            for (var ii = 0; ii < hlen; ii += 1) {
                var comname = historyComponents[ii];
                var rname = this._getRealComponentName(historyComponents[ii]);
                var prename = this._getComponentPreName(historyComponents[ii]);
                var component = this.getComponent(this.curBet, comname);
                var componentinfo = mapComponents[comname];

                if (component && componentinfo) {
                    component.run(clientData, componentinfo, tmpstate);

                    var lst = this.showcomponents[rname];

                    if (lst) {
                        for (var jj = 0; jj < lst.length; jj += 1) {
                            var sname = lst[jj] + prename;
                            var state = mapStates[sname];

                            if (state) {
                                state.init(tmpstate);
                                component.addData(
                                    clientData,
                                    componentinfo,
                                    state
                                );
                            }
                        }
                    }
                }
            }
        }

        // var curstate = undefined;

        // if (
        //   result &&
        //   result.clientData &&
        //   result.clientData.curGameModParam &&
        //   result.clientData.curGameModParam.historyComponents
        // ) {
        //   var hlen = result.clientData.curGameModParam.historyComponents.length;

        //   for (var ii = 0; ii < hlen; ii += 1) {
        //     var comname = result.clientData.curGameModParam.historyComponents[ii];
        //     var component = this.getComponent(this.curBet, comname);

        //     if (component) {
        //       var componentinfo = undefined;

        //       if (result.clientData.curGameModParam.mapComponents) {
        //         componentinfo =
        //           result.clientData.curGameModParam.mapComponents[comname];
        //       }

        //       curstate = component.run(
        //         result.clientData,
        //         componentinfo,
        //         this.curStates,
        //         curstate
        //       );
        //     }
        //   }
        // }

        this.curStateIndex = 0;

        this._createUIData(historyComponents, mapComponents);
    }

    // 创建UI数据
    _createUIData(historyComponents, mapComponents) {
        // 填充UIData（暂时用module数据来判断）
        this.beginUIData = new SCUIData();
        this.beginUIData.totalWin = this.totalWin;

        this.beginUIData.curNums = this.curNums;
        this.beginUIData.allNums = this.allNums;

        if (this.cunMsgIndex == 0) {
            this.beginUIData.curType = 'spin';
            this.beginUIData.bQuick = true;
        }

        // 判断当前step是哪个component在运行
        var fcomname = historyComponents[0];

        var fstate = undefined;

        for (var ii = 0; ii < this.gamedata.length; ii += 1) {
            var gdata = this.gamedata[ii];

            for (var jj = 0; jj < gdata.list.length; jj += 1) {
                if (gdata.list[jj] == fcomname) {
                    fstate = gdata;
                    break;
                }
            }

            if (fstate) {
                break;
            }
        }

        if (fstate) {
            this.beginUIData.curType = fstate.module;
            this.beginUIData.bQuick = fstate.bquick;

            var componentinfo = mapComponents[fcomname];

            // this.beginUIData.curNums = componentinfo.curRespinNum;
            // this.beginUIData.allNums = componentinfo.curRespinNum + componentinfo.lastRespinNum;
            // this.beginUIData.addNums = componentinfo.curAddRespinNum;
        }

        this.endUIData = new SCUIData(this.beginUIData);

        this.endUIData.bNextStep = this.hasNextStep();

        if (this.endUIData.bNextStep) {
            // 根据gamedata的数据判断下一次会执行的模块
            var nresult = this.curResults[this.cunMsgIndex + 1];
            var ncomname =
                nresult.clientData.curGameModParam.historyComponents[0];

            // 根据下一轮触发的模块在本轮找数据
            var nstate = undefined;

            for (var ii = 0; ii < this.gamedata.length; ii += 1) {
                var gdata = this.gamedata[ii];

                for (var jj = 0; jj < gdata.list.length; jj += 1) {
                    if (gdata.list[jj] == ncomname) {
                        nstate = gdata;
                        break;
                    }
                }

                if (nstate) {
                    break;
                }
            }

            if (nstate) {
                this.endUIData.nextType = nstate.module;

                var componentinfo = mapComponents[ncomname];

                this.endUIData.curNums = componentinfo.curRespinNum;
                this.endUIData.allNums =
                    componentinfo.curRespinNum + componentinfo.lastRespinNum;
                this.endUIData.addNums = componentinfo.curAddRespinNum;
            }

            this.curNums = this.endUIData.curNums + 1;
            this.allNums = this.endUIData.allNums;
        }

        if (this.curStates.length > 0) {
            var state = this.curStates[this.curStates.length - 1];
            this.totalWin += state.cashWin;

            this.endUIData.cashWin = state.cashWin;
            this.endUIData.totalWin = this.totalWin;
        }

        //! 特殊处理exitmodule增加一个state的情况
        if (!this.endUIData.bNextStep && fstate && fstate.exitmodule) {
            var state = this.addState();

            state.name = fstate.name;
            state.module = fstate.exitmodule;
            state.performance = fstate.performance;

            state.cashWin = this.totalWin;
        }
    }

    // 向当前状态中添加一个新状态添加一个状态
    addState() {
        var state = new SCLogicState();

        if (this.curStates.length > 0) {
            state.prestate = this.curStates[this.curStates.length - 1];
        }

        this.curStates.push(state);

        return state;
    }

    // 创建一个成员
    createComponent(name, data) {
        if (!data.config || !data.config.componentType) {
            return null;
        }

        var ctype = data.config.componentType;
        var component = null;

        switch (ctype.toLowerCase()) {
            case 'basicreels':
            case 'weightreels':
            case 'removesymbols':
            case 'dropdownsymbols':
            case 'refillsymbols':
            case 'chgsymbols':
                {
                    component = new SCReelComponent(name, data, this);
                }
                break;
            case 'linestrigger':
            case 'waystrigger':
            case 'clustertrigger':
            case 'scattertrigger':
            case 'symbolvalwins':
                {
                    component = new SCTriggerComponent(name, data, this);
                }
                break;
            case 'movesymbol':
            case 'replacereelwithmask':
            case 'replacesymbolgroup':
            case 'addsymbols':
                {
                    component = new SCChangeSymbolComponent(name, data, this);
                }
                break;
            case 'rollsymbol':
                {
                    component = new SCRollSymbolComponent(name, data, this);
                }
                break;
            case 'collector':
                {
                    component = new SCCollectorComponent(name, data, this);
                }
                break;
            case 'piggybank':
                {
                    component = new SCBankComponent(name, data, this);
                }
                break;
            default:
                {
                    component = new SCBaseComponent(name, data, this);
                }
                break;
        }

        return component;
    }

    // 获取一个成员
    getComponent(bet, comname) {
        if (!this.components[bet]) {
            return null;
        }

        var rname = this._getRealComponentName(comname);

        return this.components[bet][rname];
    }

    // 获取真实的成员名称
    _getRealComponentName(comname) {
        // 判断拼接的名称
        if (comname.indexOf('/') >= 0) {
            var arr = comname.split('/');
            return arr[arr.length - 1];
        }

        return comname;
    }

    // 获取成员的前缀
    _getComponentPreName(comname) {
        // 判断拼接的名称
        if (comname.indexOf('/') >= 0) {
            var arr = comname.split('/');
            return arr[0];
        }

        return '';
    }

    // 获取循环状态的名字
    _getNextPreName(
        clientdata,
        sname,
        prename,
        historyComponents,
        mapComponents
    ) {
        if (!historyComponents) {
            return false;
        }

        var sdata = this.getStateData(sname);

        if (!sdata) {
            return false;
        }

        for (var ii = 0; ii < sdata.list.length; ii += 1) {
            var bfind = false;

            if (prename == '') {
                bfind = true;
            }

            var comname = sdata.list[ii];

            var hclen = historyComponents.length;

            for (var jj = 0; jj < hclen; jj += 1) {
                var sname = historyComponents[jj];
                var hrname = this._getRealComponentName(historyComponents[jj]);

                if (comname == hrname) {
                    var component = this.getComponent(this.curBet, comname);

                    if (component) {
                        var componentinfo = mapComponents[sname];

                        if (componentinfo) {
                            // 判断是否激活
                            if (component.isActive(clientdata, componentinfo)) {
                                var pname = this._getComponentPreName(
                                    historyComponents[jj]
                                );

                                if (prename == pname) {
                                    bfind = true;
                                }

                                if (prename != pname && bfind) {
                                    return pname;
                                }
                            }
                        }
                    }
                }
            }
        }

        return '';
    }
}

exports.SCLogicMgr = SCLogicMgr;
