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

    for (let i = 0; i < objModule.length; i++) {
        const curmod = objModule[i];

        if (curmod.module && curmod.module != '') {
            let lst = [];
            for (let j = 0; j < curmod.component.length; j++) {
                const curcomponent = curmod.component[j];

                if (typeof curcomponent == 'string') {
                    if (curcomponent == '') {
                        throw new Error('Invalid component (string).');
                    }

                    lst.push(curcomponent);
                } else if (typeof curcomponent == 'object') {
                    if (!curcomponent.value || curcomponent.value == '') {
                        throw new Error('Invalid component (object.value).');
                    }

                    lst.push(curcomponent.value);
                } else {
                    throw new Error('Invalid component (type).');
                }
            }

            statecfg.statedata[curmod.name] = {
                list: lst,
                module: curmod.module,
                performance: '',
            };
            if (curmod.module == 'FreeGameEnding') {
                statecfg.statedata[curmod.name].bquick = false;
                statecfg.statedata[curmod.name].toui = true;
                statecfg.statedata[curmod.name].exitmodule = curmod.module;
            }
            if (curmod.module == 'Spin') {
                statecfg.statedata[curmod.name].triggerspin = true;
            }
            if (curmod.module == 'ShowBigWins') {
                statecfg.statedata[curmod.name].stepsingle = true;
            }

            if (curmod.trigger) {
                statecfg.statedata[curmod.name].trigger = trigger;
            }

            statecfg.statelist.push(curmod.name);
        }
    }

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

        if (
            result.clientData.curGameModParam.respinComponents.length == 1 &&
            result.clientData.curGameModParam.respinComponents[0] != respinName
        ) {
            return false;
        } else {
            isMain = true;
        }
    }

    return isMain;
}

// isNeedTotalWinsModule - 判断模块是否需要totalwin，WinAniModule和FgExitModule需要
function isNeedTotalWinsModule(modName) {
    return modName == 'FgExitModule' || modName == 'WinAniModule';
}

// isFGEndingModule - 判断模块是否是FG结束模块，FgExitModule
function isFGEndingModule(modName) {
    return modName == 'FgExitModule';
}

// isRetriggerFGModule - 判断模块是否是再次触发FG模块，FreeExtraModule
function isRetriggerFGModule(modName) {
    return modName == 'FreeExtraModule';
}

function isTriggerFGModule(modName) {
    return modName == 'FgModule';
}

function getMainRespinNames(stateData) {
    let names = [];
    for (const key in stateData) {
        const curStateData = stateData[key];
        if (isFGEndingModule(curStateData.module)) {
            names.push(curStateData.list[0]);
        }
    }

    return names;
}

function findFirstResults(results, i, respinName) {
    for (let ci = i; ci > 0; ci--) {
        if (ci == 1) {
            if (
                results[0].clientData.curGameModParam.historyComponents[0] ==
                respinName
            ) {
                return 0;
            }

            return 1;
        }

        if (
            results[ci - 1].clientData.curGameModParam.historyComponents[0] !=
            respinName
        ) {
            return ci;
        }
    }

    return i;
}

function calcTotalWins(results, i, respinName) {
    const result = results[i];

    if (respinName == '') {
        return result.cashWin;
    }

    if (result.clientData.curGameModParam.historyComponents[0] == respinName) {
        const si = findFirstResults(results, i, respinName);
        let totalWins = 0;

        for (let ci = si; ci <= results.length; ci++) {
            if (
                results[ci].clientData.curGameModParam.historyComponents[0] ==
                respinName
            ) {
                totalWins += results[ci].cashWin;
            } else {
                break;
            }
        }

        return totalWins;
    }

    return 0;
}

// isRespinEnding - 判断当前respin是否结束
function isRespinEnding(results, i, respinName) {
    // 如果result结束，则respin一定结束
    if (results.length == i + 1) {
        return true;
    }

    // 如果当前消息里没有这个respinName，则结束
    // if (
    //     results[i].clientData.curGameModParam.respinComponents.indexOf(
    //         respinName
    //     ) == -1
    // ) {
    //     return true;
    // }

    return false;
}

function isExitState(curStateData) {
    return curStateData.exitmodule || curStateData.trigger == 'onEnding';
}

// isChgSymbolsComponent - 判断是否是chgSymbols组件，chgSymbols组件需要前端逻辑处理pos数据
function isChgSymbolsComponent(componentCfgData) {
    if (
        componentCfgData &&
        componentCfgData.config &&
        componentCfgData.config.componentType == 'chgSymbols'
    ) {
        return true;
    }

    return false;
}

// genPosWithChgSymbols - 本地生成pos数据
function genPosWithChgSymbols(clientData, sceneIndex, componentCfgData) {
    const scene = parseMsgScene(clientData, sceneIndex);
    let pos = [];
    for (let x = 0; x < scene.length; x++) {
        for (let y = 0; y < scene[x].length; y++) {
            if (componentCfgData.config.symbols.indexOf(scene[x][y]) != -1) {
                pos.push(x, y);
            }
        }
    }
    return pos;
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
exports.getMainRespinNames = getMainRespinNames;
exports.calcTotalWins = calcTotalWins;
exports.isRespinEnding = isRespinEnding;
exports.isExitState = isExitState;
exports.isRetriggerFGModule = isRetriggerFGModule;
exports.isTriggerFGModule = isTriggerFGModule;
exports.isChgSymbolsComponent = isChgSymbolsComponent;
exports.genPosWithChgSymbols = genPosWithChgSymbols;
