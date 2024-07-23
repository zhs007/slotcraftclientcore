// LogicState2 是 SlotCraft Client 最基础的class
// 逻辑非常简单，就是缓存 stateData 数据里最新的数据，一种数据只会缓存一个。
class LogicState2 {
    constructor() {
        this.preState = null;
        this.scene = null;
        this.otherScene = null;
        this.pos = null;
    }
};

exports.LogicState2 = LogicState2;