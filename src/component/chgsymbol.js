const { SCBaseComponent } = require('./base.js');
const { isSameScene, parseMsgScene } = require('../utils.js');

class SCChangeSymbolComponent extends SCBaseComponent {
    constructor(name, data, mgr) {
        super(name, data, mgr);
    }

    isActive(clientdata, info) {
        // 有新的scene
        if (this._hasScene(info)) {
            if (info.basicComponentData.usedScenes[0] > 1 &&
                isSameScene(parseMsgScene(clientdata, info.basicComponentData.usedScenes[0] - 1),
                    parseMsgScene(clientdata, info.basicComponentData.usedScenes[0]))) {

                return true;
            }
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

exports.SCChangeSymbolComponent = SCChangeSymbolComponent;