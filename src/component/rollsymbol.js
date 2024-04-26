const { SCBaseComponent } = require('./base.js');

class SCRollSymbolComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        return true;
    }

    // 添加特有的数据
    addData(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);

        if (this.curstate) {
            if (this.componentinfo.symbolCode != undefined) {
                this.curstate.symbolCode = this.componentinfo.symbolCode;
            }

            if (
                this.componentinfo.symbolCodes != undefined &&
                this.componentinfo.symbolCodes.length > 0
            ) {
                this.curstate.symbolCodes = [];
                this.curstate.symbolNums = this.componentinfo.symbolCodes.length;

                for (var ii = 0; ii < this.curstate.symbolNums; ii += 1) {
                    this.curstate.symbolCodes.push(this.componentinfo.symbolCodes[ii]);
                }
            }
        }
    }
}

exports.SCRollSymbolComponent = SCRollSymbolComponent;