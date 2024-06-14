const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 004', () => {
    const logic = new SCLogicMgr();

    const obj = [
        {
            "name": "bg-spin",
            "component": [
                "bg-spin"
            ],
            "module": "SpinModule",
            "key": "0.027027721959255624",
            "instance": 0
        },
        {
            "name": "bg-walk",
            "module": "SymChangeModule",
            "component": [
                {
                    "value": "bg-walk",
                    "type": "MoveSymbol"
                }
            ],
            "instance": 0,
            "key": "0.36648606903770076"
        },
        {
            "name": "bg-paylines",
            "component": [
                "bg-paylines"
            ],
            "module": "ShowTopModule",
            "key": "0.4871801322127982",
            "instance": 0
        },
        {
            "name": "bg-scatter",
            "component": [
                "bg-scatter"
            ],
            "module": "FgModule",
            "key": "0.7836021082473845",
            "instance": 0
        },
        {
            "name": "fg-paylines",
            "component": [
                "fg-paylines"
            ],
            "module": "ShowTopModule",
            "key": "0.7306529353986351",
            "instance": 0
        },
        {
            "name": "bg-win",
            "module": "WinAniModule",
            "component": [
                {
                    "value": "bg-spin",
                    "type": "WeightReels"
                }
            ],
            "instance": 0,
            "key": "0.9790015858777055"
        },
        {
            "name": "fg-bmmask",
            "component": [
                "fg-bmmask"
            ],
            "key": "0.013511808076895226",
            "instance": 0
        },
        {
            "name": "fg-replacee",
            "component": [
                "fg-replacee"
            ],
            "key": "0.003314134292101034",
            "instance": 0
        },
        {
            "name": "bg-chgsym",
            "component": [
                "bg-chgsym"
            ],
            "key": "0.5138017535868018",
            "instance": 0
        },
        {
            "name": "bg-gensym",
            "component": [
                "bg-gensym"
            ],
            "key": "0.8126351029371353",
            "instance": 0
        },
        {
            "name": "bg-symwins",
            "component": [
                "bg-symwins"
            ],
            "key": "0.7111153479415264",
            "instance": 0
        },
        {
            "name": "fg-chgsym",
            "component": [
                "fg-chgsym"
            ],
            "key": "0.15961579180994678",
            "instance": 0
        },
        {
            "name": "fg-gensym",
            "component": [
                "fg-gensym"
            ],
            "key": "0.5402325487736028",
            "instance": 0
        },
        {
            "name": "fg-triggermm",
            "component": [
                "fg-triggermm"
            ],
            "key": "0.0462990595445556",
            "instance": 0
        },
        {
            "name": "fg-adde",
            "component": [
                "fg-adde"
            ],
            "key": "0.2685501301477602",
            "instance": 0,
            "module": "FreeExtraModule"
        },
        {
            "name": "fg-triggercollect",
            "component": [
                "fg-triggercollect"
            ],
            "key": "0.9387786086701766",
            "instance": 0
        },
        {
            "name": "fg-collect",
            "component": [
                "fg-collect"
            ],
            "key": "0.5234064092252655",
            "instance": 0
        },
        {
            "name": "fg-respin",
            "component": [
                "fg-respin"
            ],
            "key": "0.7980581195507639",
            "instance": 0
        },
        {
            "name": "fg-triggerbm",
            "component": [
                "fg-triggerbm"
            ],
            "key": "0.35281837912422875",
            "instance": 0
        },
        {
            "name": "fg-genadde",
            "component": [
                "fg-genadde"
            ],
            "key": "0.3537338732599111",
            "instance": 0
        },
        {
            "name": "fg-triggere",
            "component": [
                "fg-triggere"
            ],
            "key": "0.9624319033426627",
            "instance": 0
        },
        {
            "name": "fg-symwins",
            "component": [
                "fg-symwins"
            ],
            "key": "0.4600322065732565",
            "instance": 0
        },
        {
            "name": "fg-genreplacee",
            "component": [
                "fg-genreplacee"
            ],
            "key": "0.22105070725185438",
            "instance": 0
        },
        {
            "name": "fg-start",
            "component": [
                "fg-start"
            ],
            "module": "FgExitModule",
            "key": "0.8474325638437483",
            "instance": 0
        }
    ];

    const statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);

    const gamecfg = {
        "10": {
            "Components": [
                {
                    "config": {
                        "defaultNextComponent": "bg-walktrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSetWeight": "bgreelweight",
                        "isExpandReel": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatterInArea",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": [
                            0,
                            0,
                            0,
                            2
                        ],
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "bg-walk",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            }
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-paysc",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "L"
                        ],
                        "type": "lines",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "checkWinType": "left2right",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "piggyBankComponent": "",
                        "isAddRespinMode": false,
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-payfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-triggerfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-spin"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-walktrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSetWeight": "fgreelweight",
                        "isExpandReel": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatterInArea",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-walkdown",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-walk",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": true,
                                "overridePath": true
                            }
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            }
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "respinTimes",
                                "vals": [
                                    15
                                ],
                                "strParams": [
                                    "fg-start"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-paysc",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "L"
                        ],
                        "type": "lines",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "checkWinType": "left2right",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "piggyBankComponent": "",
                        "isAddRespinMode": false,
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-payfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "FG",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 15,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                }
            ],
            "MapComponents": {
                "bg-spin": {
                    "config": {
                        "defaultNextComponent": "bg-walktrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSetWeight": "bgreelweight",
                        "isExpandReel": false
                    }
                },
                "fg-start": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-spin"
                    }
                },
                "fg-walk": {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            }
                        ]
                    }
                },
                "bg-walk": {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 1,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            },
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectSymbolR2L",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": "SC"
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": false,
                                "overridePath": true
                            }
                        ]
                    }
                },
                "fg-fgtrigger": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "respinTimes",
                                "vals": [
                                    15
                                ],
                                "strParams": [
                                    "fg-start"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-payfg": {
                    "config": {
                        "defaultNextComponent": "fg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "bg-paysc": {
                    "config": {
                        "defaultNextComponent": "bg-payfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-walktrigger": {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatterInArea",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-walkdown",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-walkdown": {
                    "config": {
                        "defaultNextComponent": "fg-walk",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "moveSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "moveData": [
                            {
                                "src": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 0,
                                    "symbol": ""
                                },
                                "target": {
                                    "type": "selectWithXY",
                                    "x": 0,
                                    "y": 2,
                                    "symbol": ""
                                },
                                "moveType": "xy",
                                "targetSymbol": "SC",
                                "overrideSrc": false,
                                "overrideTarget": true,
                                "overridePath": true
                            }
                        ]
                    }
                },
                "fg-paylines": {
                    "config": {
                        "defaultNextComponent": "fg-paysc",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "L"
                        ],
                        "type": "lines",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "checkWinType": "left2right",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "piggyBankComponent": "",
                        "isAddRespinMode": false,
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-paysc": {
                    "config": {
                        "defaultNextComponent": "fg-payfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 3,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "bg-walktrigger": {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatterInArea",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": [
                            0,
                            0,
                            0,
                            2
                        ],
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "bg-walk",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "bg-paylines": {
                    "config": {
                        "defaultNextComponent": "bg-paysc",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "L"
                        ],
                        "type": "lines",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "checkWinType": "left2right",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "piggyBankComponent": "",
                        "isAddRespinMode": false,
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "bg-payfg": {
                    "config": {
                        "defaultNextComponent": "bg-triggerfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-spin": {
                    "config": {
                        "defaultNextComponent": "fg-walktrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSetWeight": "fgreelweight",
                        "isExpandReel": false
                    }
                },
                "bg-triggerfg": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "FG"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "FG",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 15,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                }
            },
            "Stats2": null
        }
    };
    const msg = {
        "msgid": "gamemoduleinfo",
        "gamemodulename": "QlFkOkN87Slhz956X3RKe",
        "gameid": 69019,
        "gmi": {
            "defaultScene": {
                "values": [
                    {
                        "values": [
                            1,
                            2,
                            3
                        ]
                    },
                    {
                        "values": [
                            4,
                            5,
                            6
                        ]
                    },
                    {
                        "values": [
                            1,
                            2,
                            3
                        ]
                    },
                    {
                        "values": [
                            7,
                            8,
                            9
                        ]
                    },
                    {
                        "values": [
                            1,
                            2,
                            3
                        ]
                    }
                ],
                "indexes": [],
                "validRow": []
            },
            "replyPlay": {
                "randomNumbers": [
                    195,
                    71,
                    282,
                    146,
                    58,
                    251
                ],
                "results": [
                    {
                        "coinWin": 30,
                        "cashWin": 1500,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                13,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                2,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                8,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                },
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                13,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                2,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                8,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1,
                                        0,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1,
                                        0,
                                        2,
                                        1,
                                        0
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 30,
                                    "coinWin": 30,
                                    "cashWin": 1500,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 4,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "bg-spin",
                                    "bg-walktrigger",
                                    "bg-walk",
                                    "bg-paysc"
                                ],
                                "respinComponents": [],
                                "mapComponents": {
                                    "bg-spin": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                0
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "reelSetIndex": 1,
                                        "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                                    },
                                    "bg-walktrigger": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "bg-walk",
                                        "symbolNum": 3,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "bg-walk": {
                                        "pos": [
                                            -1,
                                            -1,
                                            -1
                                        ],
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.MoveSymbolData"
                                    },
                                    "bg-paysc": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 30,
                                            "cashWin": 1500,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 4,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 30,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 10,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "",
                                "nextStepFirstComponent": "",
                                "@type": "type.googleapis.com/sgc7pb.GameParam"
                            },
                            "nextGameMod": "basic",
                            "curIndex": 0,
                            "parentIndex": 0,
                            "modType": "",
                            "prizeCoinWin": 0,
                            "prizeCashWin": 0,
                            "jackpotCoinWin": 0,
                            "jackpotCashWin": 0,
                            "jackpotType": 0
                        }
                    }
                ],
                "nextCommands": [],
                "nextCommandParams": [],
                "playerState": {
                    "public": {
                        "json": "{\"curgamemod\":\"basic\",\"nextm\":0}",
                        "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2"
                    }
                },
                "finished": true,
                "stake": null,
                "playStartTime": 1718350972549
            },
            "playIndex": -1,
            "bet": 50,
            "lines": 10,
            "totalwin": 1500,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statecfg.statedata, statecfg.statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 0) {
            expect(logic.curStates.length).toBe(3);
            expect(logic.curStates[0].otherscene).not.toBe(null);
            expect(logic.curStates[1].pos).not.toBe(null);
        }

        const type = data.curType;

        while (logic.hasNextState()) {
            logic.nextState();
        }

        stepIndex++;

        logic.endStep();
    };

    let onEnd = (data) => {
        const type = data.curType;
    };

    logic.addStepBeginListener(onBegin);
    logic.addStepEndListener(onEnd);

    logic.onMessage(msg);
});