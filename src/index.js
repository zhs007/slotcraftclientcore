const { SCLogicMgr } = require('./logicmgr.js');
const { SCLogicMgr2 } = require('./logicmgr2.js');
const { parseSlotCraftJson } = require('./utils.js');
const { genLogicData } = require('./logicdatautils.js');
const { genLogicFileData } = require('./logicfiledata.js');

let SlotcraftEditor = {
    parseSlotCraftJson: parseSlotCraftJson,
    genLogicData: genLogicData,
    genLogicFileData: genLogicFileData,
};

globalThis.SCLogicMgr = SCLogicMgr;
globalThis.SCLogicMgr2 = SCLogicMgr2;
globalThis.parseSlotCraftJson = parseSlotCraftJson;
globalThis.SlotcraftEditor = SlotcraftEditor;

exports.SCLogicMgr = SCLogicMgr;
exports.SCLogicMgr2 = SCLogicMgr2;
exports.parseSlotCraftJson = parseSlotCraftJson;
exports.SlotcraftEditor = SlotcraftEditor;
