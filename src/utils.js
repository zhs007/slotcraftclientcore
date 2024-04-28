function isSameScene(src, target) {
    if (src.length != target.length) {
        return false;
    }

    for (let x = 0; x < src.length; x++) {
        if (src[x].length != target[x].length) {
            return false;
        }

        for (let y = 0; y < src[x].length; y++) {
            if (src[x][y] != target[x][y]) {
                return false;
            }
        }
    }

    return true;

}

function parseMsgScene(clientdata, sceneindex) {
    if (!clientdata.scenes || clientdata.scenes.length <= sceneindex) {
        return null;
    }

    let scenedata = clientdata.scenes[sceneindex];
    let scene = [];
    var slen = scenedata.values.length;

    for (var ii = 0; ii < slen; ii += 1) {
        var arr = [];

        for (var jj = 0; jj < scenedata.values[ii].values.length; jj += 1) {
            arr.push(scenedata.values[ii].values[jj]);
        }

        scene.push(arr);
    }

    return scene;
}

function parseSlotCraftJson(obj) {
    if (!obj || !obj['moduleMatching']) {
        return null;
    }

    let statecfg = {
        statedata: {},
        statelist: [],
    };

    let lst = [];

    let objModule = obj['moduleMatching'];
    for (let i = 0; i < objModule.length; i++) {
        const curmod = objModule[i];

        if (curmod.module && curmod.module != '') {
            statecfg.statedata[curmod.name] = {
                list: curmod.component,
                module: curmod.module,
                performance: "",
            };

            if (curmod.module == 'FgExitModule') {
                statecfg.statedata[curmod.name].bquick = false;
                statecfg.statedata[curmod.name].toui = true;
                statecfg.statedata[curmod.name].exitmodule = curmod.module;
            }

            curmod.key = parseFloat(curmod.key);

            lst.push(curmod);
        }
    }

    lst.sort((a, b) => {
        return a.key - b.key;
    })

    for (let i = 0; i < lst.length; i++) {
        statecfg.statelist.push(lst[i].name);
    }

    return statecfg;
}

exports.isSameScene = isSameScene;
exports.parseMsgScene = parseMsgScene;
exports.parseSlotCraftJson = parseSlotCraftJson;