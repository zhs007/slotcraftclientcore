class SCLogicState {
    constructor() {
        this.prestate = undefined; // 上一个场景

        this.scene = [];
        this.otherscene = [];

        this.results = [];

        this.coinWin = 0;
        this.cashWin = 0;
        this.respinnum = 0;

        this.curnum = 0;
        this.addnum = 0;
        this.totalnum = 0;

        // 改状态对应的成员数据
        this.componentname = undefined;
        this.componenttype = undefined;
        this.componentdata = undefined;

        // this.componentnames = {};
        // this.componenttypes = {};
    }

    // 获取状态对应的成员名称
    getComponentName() {
        return this.componentname;
    }

    // 获取状态对应的成员类型
    getComponentType() {
        return this.componenttype;
    }

    // 获取状态对应的成员数据
    getComponentData() {
        return this.componentdata;
    }

    // 设置成员信息
    setComponent(component, data) {
        if (component.name) {
            this.componentname = component.name;
        }

        if (component.type) {
            this.componenttype = component.type;
        }

        if (data) {
            this.componentdata = data;
        }
    }

    // // 状态中是否有某个名字的成员
    // hasComponent (name) {
    //     return this.componentnames[name] && this.componentnames[name] > 0;
    // }

    // // 状态中是否有某个类型的成员
    // hasComponentType (typename) {
    //     return this.componenttypes[typename] && this.componenttypes[typename] > 0;
    // }

    // // 向状态中添加一个成员
    // addComponent (component) {
    //     if(component.name) {
    //         if(this.componentnames[component.name]) {
    //             this.componentnames[component.name] += 1;
    //         }
    //         else {
    //             this.componentnames[component.name] = 1;
    //         }
    //     }

    //     if(component.type) {
    //         if(this.componenttypes[component.type]) {
    //             this.componenttypes[component.type] += 1;
    //         }
    //         else {
    //             this.componenttypes[component.type] = 1;
    //         }
    //     }
    // }

    // 使用一个状态的数据来初始化
    init(state) {
        this.scene = this._deepClone(state.scene);
        this.otherscene = this._deepClone(state.otherscene);
        this.pos = this._deepClone(state.pos);
        this.coinWin = state.coinWin;
        this.cashWin = state.cashWin;
        this.respinnum = state.respinnum;
    }

    // 初始化scene
    initScene(sdata) {
        if (!sdata.values || sdata.values.length <= 0) {
            return;
        }

        this.scene = [];

        var slen = sdata.values.length;

        for (var ii = 0; ii < slen; ii += 1) {
            var arr = [];

            for (var jj = 0; jj < sdata.values[ii].values.length; jj += 1) {
                arr.push(sdata.values[ii].values[jj]);
            }

            this.scene.push(arr);
        }
    }

    // 初始化otherScene
    initOtherScene(sdata) {
        if (!sdata.values || sdata.values.length <= 0) {
            return;
        }

        this.otherscene = [];

        var slen = sdata.values.length;

        for (var ii = 0; ii < slen; ii += 1) {
            var arr = [];

            for (var jj = 0; jj < sdata.values[ii].values.length; jj += 1) {
                arr.push(sdata.values[ii].values[jj]);
            }

            this.otherscene.push(arr);
        }
    }

    initPos(pos) {
        this.pos = pos;
    }

    // 添加一个赔付
    addResult(rdata, componentname, type) {
        var result = this._deepClone(rdata);

        result.componentname = componentname;
        result.type = type;

        this.results.push(result);
    }

    // 深度克隆
    _deepClone(obj) {
        let newObj = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === 'object') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] =
                        obj && typeof obj[key] === 'object'
                            ? this._deepClone(obj[key])
                            : obj[key];
                }
            }
        }

        return newObj;
    }
}

exports.SCLogicState = SCLogicState;
