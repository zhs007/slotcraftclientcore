const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

globalThis.SCLogicMgr = SCLogicMgr;
globalThis.parseSlotCraftJson = parseSlotCraftJson;

exports.SCLogicMgr = SCLogicMgr;
exports.parseSlotCraftJson = parseSlotCraftJson;