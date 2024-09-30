const { isSameScene, parseMsgScene } = require('../utils.js');

class SCBaseComponent {
    constructor(name, data, mgr) {
        this.name = name;
        this.data = data;
        this.mgr = mgr;

        if (data.config && data.config.componentType) {
            this.type = data.config.componentType;
        }
    }

    // 判断是否激活
    isActive(clientdata, info) {
        // 有新的scene
        if (this._hasScene(info)) {
            if (
                info.basicComponentData.usedScenes[0] == 0 ||
                (info.basicComponentData.usedScenes[0] >= 1 &&
                    !isSameScene(
                        parseMsgScene(
                            clientdata,
                            info.basicComponentData.usedScenes[0] - 1
                        ),
                        parseMsgScene(
                            clientdata,
                            info.basicComponentData.usedScenes[0]
                        )
                    ))
            ) {
                return true;
            }
        }

        // 有新的scene
        if (this._hasOtherScene(info)) {
            return true;
        }

        if (this._hasPos(info)) {
            return true;
        }

        return false;
    }

    // 模块运行
    run(clientdata, componentinfo, curstate) {
        this.init(clientdata, componentinfo, curstate);

        if (this.hasNewScene()) {
            this.initScene();
        }

        if (this.hasNewOtherScene()) {
            this.initOtherScene();
        }

        if (this.hasPos()) {
            this.initPos();
        }
    }

    // 添加特有的数据
    addData(clientdata, componentinfo, curstate) {}

    // 初始化
    init(clientdata, componentinfo, curstate) {
        this.clientdata = clientdata;
        this.componentinfo = componentinfo;
        this.curstate = curstate;
    }

    // 当前成员是否产生新场景
    hasNewScene() {
        if (!this.clientdata || !this.componentinfo) {
            return false;
        }

        if (
            !this.componentinfo.basicComponentData ||
            !this.componentinfo.basicComponentData.usedScenes ||
            this.componentinfo.basicComponentData.usedScenes.length <= 0
        ) {
            return false;
        }

        var sindex = this.componentinfo.basicComponentData.usedScenes[0];

        if (
            !this.clientdata.scenes ||
            this.clientdata.scenes.length <= sindex
        ) {
            return false;
        }

        return true;
    }

    // 初始化场景
    initScene() {
        var sindex = this.componentinfo.basicComponentData.usedScenes[0];
        var scenedata = this.clientdata.scenes[sindex];

        if (this.curstate) {
            this.curstate.initScene(scenedata);
        }
    }

    // 当前成员是否产生新场景
    hasNewOtherScene() {
        if (!this.clientdata || !this.componentinfo) {
            return false;
        }

        if (
            !this.componentinfo.basicComponentData ||
            !this.componentinfo.basicComponentData.usedOtherScenes ||
            this.componentinfo.basicComponentData.usedOtherScenes.length <= 0
        ) {
            return false;
        }

        var sindex = this.componentinfo.basicComponentData.usedOtherScenes[0];

        if (
            !this.clientdata.otherScenes ||
            this.clientdata.otherScenes.length <= sindex
        ) {
            return false;
        }

        return true;
    }

    // 初始化otherScene
    initOtherScene() {
        var sindex = this.componentinfo.basicComponentData.usedOtherScenes[0];
        var scenedata = this.clientdata.otherScenes[sindex];

        if (this.curstate) {
            this.curstate.initOtherScene(scenedata);
        }
    }

    // 当前成员是否产生赔付结果
    hasNewResults() {
        if (!this.clientdata || !this.componentinfo) {
            return false;
        }

        if (
            !this.componentinfo.basicComponentData ||
            !this.componentinfo.basicComponentData.usedResults ||
            this.componentinfo.basicComponentData.usedResults.length <= 0
        ) {
            return false;
        }

        return true;
    }

    // 初始化赔付
    initResults() {
        var rindexs = this.componentinfo.basicComponentData.usedResults;
        var resultdatas = this.clientdata.results;

        var rlen = rindexs.length;
        var ctype = this.data.config.type;

        for (var ii = 0; ii < rlen; ii += 1) {
            var ri = rindexs[ii];
            var rdata = resultdatas[ri];

            if (rdata) {
                this.curstate.addResult(rdata, this.name, ctype);
            }
        }
    }

    hasPos() {
        if (!this.clientdata || !this.componentinfo) {
            return false;
        }

        return this._hasPos(this.componentinfo);
    }

    // init position
    initPos() {
        if (this.curstate) {
            this.curstate.initPos(this.componentinfo.pos);
        }
    }

    _hasScene(info) {
        return (
            info.basicComponentData &&
            info.basicComponentData.usedScenes &&
            info.basicComponentData.usedScenes.length > 0
        );
    }

    _hasOtherScene(info) {
        return (
            info.basicComponentData &&
            info.basicComponentData.usedOtherScenes &&
            info.basicComponentData.usedOtherScenes.length > 0
        );
    }

    _hasResult(info) {
        return (
            info.basicComponentData &&
            info.basicComponentData.usedResults &&
            info.basicComponentData.usedResults.length > 0
        );
    }

    _hasnextComponent(info) {
        return info.nextComponent != '';
    }

    _hasPos(info) {
        return info.pos;
    }
}

exports.SCBaseComponent = SCBaseComponent;
