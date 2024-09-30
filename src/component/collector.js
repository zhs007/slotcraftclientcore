const { SCBaseComponent } = require('./base.js');

class SCCollectorComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        return info.newCollector > 0;
    }

    // 添加特有的数据
    addData(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);

        if (this.curstate) {
            curstate.curnum = this.componentinfo.val;
            curstate.addnum = this.componentinfo.newCollector;
            curstate.totalnum += this.componentinfo.newCollector;
        }
    }
}

exports.SCCollectorComponent = SCCollectorComponent;
