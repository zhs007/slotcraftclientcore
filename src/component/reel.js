const { SCBaseComponent } = require('./base.js');

class SCReelComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        // 有新的scene
        if (this._hasScene(info)) {
            return true;
        }

        return super.isActive(clientdata, info);
    }

    run(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);

        if (this.hasNewScene()) {
            this.initScene();
        }
    }
}

exports.SCReelComponent = SCReelComponent;