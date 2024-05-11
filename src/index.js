const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');
const { genLogicData } = require('./logicdatautils.js');

let SlotcraftEditor = {
    parseSlotCraftJson: parseSlotCraftJson,
    genLogicData: genLogicData,
};

globalThis.SCLogicMgr = SCLogicMgr;
globalThis.parseSlotCraftJson = parseSlotCraftJson;
globalThis.SlotcraftEditor = SlotcraftEditor;

exports.SCLogicMgr = SCLogicMgr;
exports.parseSlotCraftJson = parseSlotCraftJson;
exports.SlotcraftEditor = SlotcraftEditor;