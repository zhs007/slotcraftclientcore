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

function parseMsgOtherScene(clientdata, otherSceneIndex) {
    if (
        !clientdata.otherScenes ||
        clientdata.otherScenes.length <= otherSceneIndex
    ) {
        return null;
    }

    let scenedata = clientdata.otherScenes[otherSceneIndex];
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

function parseSlotCraftJson(objModule) {
    if (!objModule) {
        return null;
    }

    let statecfg = {
        statedata: {},
        statelist: [],
    };

    // let lst = [];

    // let objModule = obj['moduleMatching'];
    for (let i = 0; i < objModule.length; i++) {
        const curmod = objModule[i];

        if (curmod.module && curmod.module != "") {
            let lst = [];
            for (let j = 0; j < curmod.component.length; j++) {
                const curcomponent = curmod.component[j];

                if (typeof curcomponent == "string") {
                    if (curcomponent == "") {
                        throw new Error("Invalid component (string).");
                    }

                    lst.push(curcomponent);
                } else if (typeof curcomponent == "object") {
                    if (!curcomponent.value || curcomponent.value == "") {
                        throw new Error("Invalid component (object.value).");
                    }

                    lst.push(curcomponent.value);
                } else {
                    throw new Error("Invalid component (type).");
                }
            }

            statecfg.statedata[curmod.name] = {
                list: lst,
                module: curmod.module,
                performance: "",
            };

            if (curmod.module == "FgExitModule") {
                statecfg.statedata[curmod.name].bquick = false;
                statecfg.statedata[curmod.name].toui = true;
                statecfg.statedata[curmod.name].exitmodule = curmod.module;
            }

            // curmod.key = parseFloat(curmod.key);

            // lst.push(curmod);

            statecfg.statelist.push(curmod.name);
        }
    }

    // lst.sort((a, b) => {
    //     return a.key - b.key;
    // })

    // for (let i = 0; i < lst.length; i++) {
    //     statecfg.statelist.push(lst[i].name);
    // }

    return statecfg;
}

function hasState(state, mapComponents) {
    for (const val of state.list) {
        if (mapComponents[val]) {
            return true;
        }
    }

    return false;
}

function getComponentConfigData(betCfgData, componentName) {
    if (betCfgData.mapComponents[componentName]) {
        return betCfgData.mapComponents[componentName];
    }

    return null;
}

// isMainRespin - 判断是否是主respin，一般情况下，如果消息里只有一个respin组件，那么它就一定是主respin，否则，只有配置为FG模块的respin才是主respin
function isMainRespin(results, respinName) {
    let isMain = false;
    for (const i in results) {
        const result = results[i];
        if (result.clientData.curGameModParam.respinComponents.length > 1) {
            return false;
        }

        if (result.clientData.curGameModParam.respinComponents.length == 1 && result.clientData.curGameModParam.respinComponents[0] != respinName) {
            return false;
        } else {
            isMain = true;
        }
    }

    return isMain;
}

// isNeedTotalWinsModule - 判断模块是否需要totalwin，WinAniModule和FgExitModule需要
function isNeedTotalWinsModule(modName) {
    return modName == "FgExitModule" || modName == "WinAniModule";
}

// isFGEndingModule - 判断模块是否是FG结束模块，FgExitModule
function isFGEndingModule(modName) {
    return modName == "FgExitModule";
}

exports.isSameScene = isSameScene;
exports.parseMsgScene = parseMsgScene;
exports.parseMsgOtherScene = parseMsgOtherScene;
exports.parseSlotCraftJson = parseSlotCraftJson;
exports.hasState = hasState;
exports.getComponentConfigData = getComponentConfigData;
exports.isNeedTotalWinsModule = isNeedTotalWinsModule;
exports.isMainRespin = isMainRespin;
exports.isFGEndingModule = isFGEndingModule;
