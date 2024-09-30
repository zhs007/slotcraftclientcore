const { SCBaseComponent } = require('./base.js');

class SCTriggerComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        // 有新的result
        if (this._hasResult(info)) {
            return true;
        }

        // 有nextComponent
        if (this._hasnextComponent(info)) {
            return true;
        }

        return super.isActive(clientdata, info);
    }

    // 添加特有的数据
    addData(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);

        if (this.curstate && this.hasNewResults()) {
            this.initResults();
        }

        // if (this._hasnextComponent(componentinfo)) {
        curstate.respinnum = componentinfo.respinNum;
        // }
    }

    // run(clientdata, componentinfo, states, curstate) {
    //   this.init(clientdata, componentinfo, states, curstate);

    //   this.newstate = this.hasNewResults();

    //   this.curstate = super.run(clientdata, componentinfo, states, curstate);

    //   if (this.curstate && this.hasNewResults()) {
    //     this.initResults();
    //   }

    //   this.curstate.setComponent(this);

    //   return this.curstate;
    // }
}

exports.SCTriggerComponent = SCTriggerComponent;
