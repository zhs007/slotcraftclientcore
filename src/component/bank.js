const { SCBaseComponent } = require('./base.js');

class SCBankComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        return true;
    }

    // 添加特有的数据
    addData(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);
    }
}

exports.SCBankComponent = SCBankComponent;
