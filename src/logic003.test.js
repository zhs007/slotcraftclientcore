const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 003', () => {
    const logic = new SCLogicMgr();

    const obj = [
        {
            "name": "bg-spin",
            "component": [
                {
                    "value": "bg-spin",
                    "type": "WeightReels"
                },
                {
                    "value": "bg-chgsym",
                    "type": "ChgSymbols"
                },
                {
                    "value": "bg-gensym",
                    "type": "GenSymbolValsWithSymbol"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "key": "0.09522579278781107"
        },
        {
            "name": "bg-paylines",
            "component": [
                "bg-paylines"
            ],
            "module": "ShowTopModule",
            "instance": 0,
            "key": "0.4473865323421906"
        },
        {
            "name": "bg-symwin",
            "component": [
                {
                    "value": "bg-symwins",
                    "type": "SymbolValsWins"
                }
            ],
            "module": "SymCollectCoinModule",
            "instance": 0,
            "key": "0.9246295123956234"
        },
        {
            "name": "bg-scatter",
            "component": [
                "bg-scatter"
            ],
            "module": "FgModule",
            "instance": 0,
            "key": "0.5074657350094214"
        },
        {
            "name": "bg-win",
            "component": [
                {
                    "value": "bg-spin",
                    "type": "WeightReels"
                }
            ],
            "module": "WinAniModule",
            "instance": 0,
            "key": "0.12202919887102537"
        },
        {
            "name": "fg-spin",
            "component": [
                {
                    "value": "fg-spin",
                    "type": "BasicReels"
                },
                {
                    "value": "fg-chgsym",
                    "type": "ChgSymbols"
                },
                {
                    "value": "fg-gensym",
                    "type": "GenSymbolValsWithSymbol"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "key": "0.040322135488087385"
        },
        {
            "name": "fg-respine",
            "component": [
                {
                    "value": "fg-respin",
                    "type": "Respin"
                },
                {
                    "value": "fg-adde",
                    "type": "ChgSymbols"
                },
                {
                    "value": "fg-genadde",
                    "type": "GenSymbolValsWithSymbol"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "trigger": "onStart",
            "key": "0.4750702888449998"
        },
        {
            "name": "fg-replacereel",
            "component": [
                {
                    "value": "fg-replacee",
                    "type": "ReplaceReelWithMask"
                },
                {
                    "value": "fg-genreplacee",
                    "type": "GenSymbolValsWithSymbol"
                },
                {
                    "value": "fg-respin",
                    "type": "Respin"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "key": "0.005830075537172963",
            "trigger": "onStart"
        },
        {
            "name": "fg-paylines",
            "component": [
                "fg-paylines"
            ],
            "module": "ShowTopModule",
            "instance": 0,
            "key": "0.5154338994444485"
        },
        {
            "name": "fg-symwins",
            "component": [
                "fg-symwins"
            ],
            "module": "SymCollectCoinModule",
            "instance": 0,
            "key": "0.3130729339799463"
        },
        {
            "name": "fg-start",
            "component": [
                "fg-start"
            ],
            "module": "FgExitModule",
            "instance": 0,
            "key": "0.4940120730691946"
        }
    ];

    const statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);

    const gamecfg = {
        "20": {
            "Components": [
                {
                    "config": {
                        "defaultNextComponent": "bg-chgsym",
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
                        "defaultNextComponent": "bg-scatter",
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
                            "K"
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "SC",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": {
                            "3": 10,
                            "4": 15,
                            "5": 20
                        },
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
                        "defaultNextComponent": "fg-chgsym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "fg-reel1",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggercollect",
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
                            "K"
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
                        "defaultNextComponent": "fg-replacee",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "mask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "num": 5,
                        "perMaskAwards": null,
                        "mapSPMaskAwards": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-genreplacee",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceReelWithMask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "E",
                        "mask": "fg-bmmask"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-gensym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "blankSymbol": "BN",
                        "weight": "bgchgsymweight",
                        "controllers": null,
                        "jumpToComponent": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "bgcashweight",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": [
                            "OM"
                        ],
                        "type": "collector"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-gensym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "blankSymbol": "BN",
                        "weight": "fgchgsymweight",
                        "controllers": null,
                        "jumpToComponent": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerbm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "MM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-respin",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-respin.lastRespinNum"
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "SC"
                        ],
                        "blankSymbol": "BN",
                        "weight": "fgaddeweight",
                        "controllers": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-respin.lastRespinNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "jumpToComponent": "fg-genadde"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-collect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "OM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": [
                            "MM",
                            "BM"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-collect.valueNum"
                                ],
                                "componentVals": [
                                    "fg-triggercollect.symbolNum"
                                ],
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
                        "defaultNextComponent": "fg-triggermm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 12,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": null,
                        "isCycle": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerbm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-adde"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-triggere",
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
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-bmmask",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "fg-bmmask",
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
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": [
                            "OM",
                            "MM",
                            "BM"
                        ],
                        "type": "collector"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                }
            ],
            "MapComponents": {
                "bg-chgsym": {
                    "config": {
                        "defaultNextComponent": "bg-gensym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "blankSymbol": "BN",
                        "weight": "bgchgsymweight",
                        "controllers": null,
                        "jumpToComponent": ""
                    }
                },
                "fg-collect": {
                    "config": {
                        "defaultNextComponent": "fg-triggermm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 12,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": null,
                        "isCycle": false
                    }
                },
                "fg-genadde": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                },
                "fg-symwins": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": [
                            "OM",
                            "MM",
                            "BM"
                        ],
                        "type": "collector"
                    }
                },
                "bg-scatter": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "SC"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 3,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "SC",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 0,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": {
                            "3": 10,
                            "4": 15,
                            "5": 20
                        },
                        "respinNumWeightWithScatterNum": null
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
                "fg-paylines": {
                    "config": {
                        "defaultNextComponent": "fg-triggercollect",
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
                            "K"
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
                "fg-bmmask": {
                    "config": {
                        "defaultNextComponent": "fg-replacee",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "mask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "num": 5,
                        "perMaskAwards": null,
                        "mapSPMaskAwards": null
                    }
                },
                "fg-gensym": {
                    "config": {
                        "defaultNextComponent": "fg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
                    }
                },
                "fg-adde": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "F",
                            "G",
                            "H",
                            "J",
                            "K",
                            "SC"
                        ],
                        "blankSymbol": "BN",
                        "weight": "fgaddeweight",
                        "controllers": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-respin.lastRespinNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "jumpToComponent": "fg-genadde"
                    }
                },
                "fg-triggerbm": {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-triggere",
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
                "bg-spin": {
                    "config": {
                        "defaultNextComponent": "bg-chgsym",
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
                "bg-paylines": {
                    "config": {
                        "defaultNextComponent": "bg-scatter",
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
                            "K"
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
                "fg-replacee": {
                    "config": {
                        "defaultNextComponent": "fg-genreplacee",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceReelWithMask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "E",
                        "mask": "fg-bmmask"
                    }
                },
                "bg-gensym": {
                    "config": {
                        "defaultNextComponent": "bg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "bgcashweight",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
                    }
                },
                "fg-genreplacee": {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "E"
                        ],
                        "weight": "fgcashweight",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                },
                "fg-spin": {
                    "config": {
                        "defaultNextComponent": "fg-chgsym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "fg-reel1",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                "bg-symwins": {
                    "config": {
                        "defaultNextComponent": "bg-paylines",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": [
                            "OM"
                        ],
                        "type": "collector"
                    }
                },
                "fg-chgsym": {
                    "config": {
                        "defaultNextComponent": "fg-gensym",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "blankSymbol": "BN",
                        "weight": "fgchgsymweight",
                        "controllers": null,
                        "jumpToComponent": ""
                    }
                },
                "fg-respin": {
                    "config": {
                        "defaultNextComponent": "fg-triggerbm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-adde"
                    }
                },
                "fg-triggermm": {
                    "config": {
                        "defaultNextComponent": "fg-triggerbm",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "MM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-respin",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-respin.lastRespinNum"
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
                "fg-triggercollect": {
                    "config": {
                        "defaultNextComponent": "fg-collect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "OM"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": [
                            "MM",
                            "BM"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-collect.valueNum"
                                ],
                                "componentVals": [
                                    "fg-triggercollect.symbolNum"
                                ],
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
                "fg-triggere": {
                    "config": {
                        "defaultNextComponent": "fg-symwins",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "E"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-bmmask",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": null,
                        "symbolAwardsWeights": null,
                        "targetMask": "fg-bmmask",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 0,
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
        "gamemodulename": "bh-NCQ2SMGKwnBIta85QM",
        "gameid": 69054,
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
                            6,
                            7
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
                            8,
                            9,
                            10
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
                    1615,
                    33,
                    52,
                    29,
                    34,
                    58,
                    1,
                    0,
                    2,
                    2,
                    4373,
                    25,
                    17,
                    18,
                    14,
                    6,
                    2,
                    1,
                    4,
                    8,
                    30,
                    16,
                    4,
                    2,
                    8,
                    22,
                    8,
                    17,
                    18,
                    4,
                    2,
                    3,
                    3,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    10161,
                    5574,
                    6814,
                    7780,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    2094,
                    8469,
                    0,
                    0,
                    1,
                    0,
                    11822,
                    0,
                    0,
                    0,
                    5863,
                    9142,
                    5617,
                    6185,
                    2366,
                    8498,
                    2674,
                    26,
                    12,
                    1,
                    4,
                    14,
                    4,
                    26,
                    31,
                    27,
                    3,
                    5,
                    3,
                    1,
                    0,
                    0,
                    2193,
                    12876,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    10439,
                    1723,
                    9636,
                    11161,
                    1,
                    1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    0,
                    6031,
                    1280,
                    11229,
                    9921,
                    1,
                    1,
                    0,
                    1,
                    1414,
                    2892,
                    11431,
                    1,
                    5692,
                    28,
                    15,
                    23,
                    10,
                    3,
                    3,
                    4,
                    2,
                    1,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    1877,
                    12487,
                    1,
                    0,
                    2795,
                    0,
                    3537,
                    2312,
                    12174,
                    405,
                    4,
                    4,
                    28,
                    9,
                    12,
                    4,
                    3,
                    1,
                    0,
                    11324,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    1449,
                    7932,
                    4631,
                    588,
                    5613,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    4847,
                    9199,
                    7204,
                    1,
                    1,
                    0,
                    0,
                    2824,
                    6322,
                    1,
                    1,
                    8587,
                    3832,
                    12570,
                    4420,
                    8,
                    32,
                    7,
                    2,
                    15,
                    3,
                    2,
                    2,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    2503,
                    8814,
                    1012,
                    12791,
                    1,
                    6582,
                    22,
                    11,
                    7,
                    6,
                    9,
                    0,
                    3,
                    1967,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    7549,
                    10557,
                    6977,
                    10374,
                    9448,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    2405,
                    2563,
                    7270,
                    7813,
                    6862,
                    1,
                    0,
                    0,
                    11061,
                    1,
                    1,
                    5033,
                    7199,
                    17,
                    10,
                    16,
                    15,
                    22
                ],
                "results": [
                    {
                        "coinWin": 100,
                        "cashWin": 1000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                6,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                14,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                14,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                14,
                                                7,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
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
                                                7,
                                                6,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                14,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                14,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                14,
                                                7,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                11,
                                                11
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        4,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 2,
                                    "coinWin": 100,
                                    "cashWin": 1000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        1,
                                        1,
                                        2,
                                        1,
                                        3,
                                        0
                                    ],
                                    "type": 9,
                                    "lineIndex": -1,
                                    "symbol": 14,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 10
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "bg-spin",
                                    "bg-chgsym",
                                    "bg-gensym",
                                    "bg-symwins",
                                    "bg-scatter"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-scatter": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-start",
                                        "symbolNum": 3,
                                        "wildNum": 0,
                                        "respinNum": 10,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 10,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 0,
                                        "curAddRespinNum": 10,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
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
                                        "reelSetIndex": 0,
                                        "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                                    },
                                    "bg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "bg-gensym": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                0
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "bg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 100,
                                            "cashWin": 1000,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 100,
                                        "symbolNum": 1,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 100,
                        "cashWin": 1000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                10,
                                                6,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                7,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                1,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
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
                                                10,
                                                6,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                7,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                1,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                0,
                                                13
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        4,
                                        0,
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 2,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        4,
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
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        4,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 2,
                                    "coinWin": 100,
                                    "cashWin": 1000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggerbm",
                                    "fg-symwins"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 1,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 2,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-collect": {
                                        "val": 3,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-triggerbm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-triggere",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                2
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 100,
                                            "cashWin": 1000,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 100,
                                        "symbolNum": 1,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                9,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                2,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                9,
                                                7
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-collect"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-collect": {
                                        "val": 3,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                2,
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
                                                8,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                2,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        1,
                                        1,
                                        1,
                                        2,
                                        3,
                                        1,
                                        3,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 4,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        3,
                                        1,
                                        3,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 2,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-collect": {
                                        "val": 8,
                                        "newCollector": 5,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 2,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 0,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 4,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                2,
                                                0
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
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
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
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 1,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 8,
                                        "newCollector": 5,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
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
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
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
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 8,
                                        "newCollector": 5,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
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
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
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
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 8,
                                        "newCollector": 5,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                13,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                2,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
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
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        1,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        1,
                                        1,
                                        0,
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        3,
                                        0,
                                        4,
                                        0,
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 5,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 8,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-triggerbm",
                                    "fg-triggere",
                                    "fg-bmmask",
                                    "fg-replacee",
                                    "fg-genreplacee"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-collect": {
                                        "val": 8,
                                        "newCollector": 5,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerbm": {
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
                                        "nextComponent": "fg-triggere",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggere": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-bmmask",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-replacee": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genreplacee": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 1110,
                        "cashWin": 11100,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                6,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                2,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                5,
                                                4
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
                                                6,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                4,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                2,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                13,
                                                4
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        0,
                                        3,
                                        1
                                    ],
                                    "type": 2,
                                    "lineIndex": 15,
                                    "symbol": 2,
                                    "mul": 150,
                                    "coinWin": 150,
                                    "cashWin": 1500,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 4,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        4,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        4,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
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
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 1,
                                    "coinWin": 960,
                                    "cashWin": 9600,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 15,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-paylines",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggerbm",
                                    "fg-symwins"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-triggercollect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggerbm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                2
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
                                        "nextComponent": "fg-triggere",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                3
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 1060,
                                            "cashWin": 10600,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 960,
                                        "symbolNum": 15,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 6,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-paylines": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 150,
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
                                        "wins": 150,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-collect": {
                                        "val": 9,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                6,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
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
                                                6,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        2,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        2,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-gensym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-gensym": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                0
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                6,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
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
                                                5,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
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
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                2,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1210,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 1200,
                        "cashWin": 12000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1,
                                        0,
                                        2,
                                        1,
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0,
                                        2,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 1,
                                    "coinWin": 1200,
                                    "cashWin": 12000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 14,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-symwins"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 11,
                                        "newCollector": 2,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 2260,
                                            "cashWin": 22600,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 1200,
                                        "symbolNum": 14,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                10,
                                                8,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                9,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                1,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
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
                                                10,
                                                8,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                9,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                1,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        1,
                                        0,
                                        2,
                                        0,
                                        2,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
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
                                        1,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 3,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                10,
                                                8,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                9,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                1,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                8
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                7,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                200,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 11,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                200,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                200,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 12,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                200,
                                                250
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
                                                100,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                150,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                20,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                200,
                                                250
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        2,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
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
                                        1,
                                        1,
                                        2,
                                        2,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 5,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 11,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-triggerbm",
                                    "fg-triggere",
                                    "fg-bmmask",
                                    "fg-replacee",
                                    "fg-genreplacee"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-triggerbm": {
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
                                        "nextComponent": "fg-triggere",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggere": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-bmmask",
                                        "symbolNum": 11,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-replacee": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genreplacee": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 13,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                8,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
                                                10
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
                                                12,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                3,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                8,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
                                                10
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 2,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        1
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-gensym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-gensym": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                0,
                                                0
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 2,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 13,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                12,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                3,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                8,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
                                                10
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
                                                12,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                8,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
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
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 14,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                12,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                8,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
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
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                50
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
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 15,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
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
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
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
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 16,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                6,
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
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                0,
                                                50
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
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 17,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                13,
                                                12,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
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
                                                200,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        2,
                                        1,
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 5,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 13,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-triggerbm",
                                    "fg-triggere",
                                    "fg-bmmask",
                                    "fg-replacee",
                                    "fg-genreplacee"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-replacee": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genreplacee": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 18,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerbm": {
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
                                        "nextComponent": "fg-triggere",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggere": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-bmmask",
                                        "symbolNum": 13,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                4,
                                                3
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
                                                8,
                                                4,
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
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                4,
                                                3
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                200,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        3,
                                        0,
                                        3,
                                        1,
                                        4,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
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
                                        3,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 3,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 18,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                4,
                                                3
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
                                                5,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                200,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
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
                                                200,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 19,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                200,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
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
                                                200,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                200
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 20,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                200,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                200
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
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
                                                200,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                200
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 2410,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 21,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 2700,
                        "cashWin": 27000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                11,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
                                                5
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                200,
                                                50,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                20,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                200
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                50
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1,
                                        0,
                                        2,
                                        1,
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        3,
                                        2,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 3,
                                    "coinWin": 2700,
                                    "cashWin": 27000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 12,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-symwins"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 22,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 4960,
                                            "cashWin": 49600,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 2700,
                                        "symbolNum": 12,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 3,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                2,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                3,
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
                                                2,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                3,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        4,
                                        2
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-chgsym",
                                    "fg-gensym",
                                    "fg-triggercollect",
                                    "fg-collect",
                                    "fg-triggermm"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-chgsym": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-gensym": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggercollect": {
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
                                        "nextComponent": "",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-triggermm": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                        "nextComponent": "fg-respin",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 22,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                2,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                3,
                                                12
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
                                                2,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0
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
                                                0,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 23,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                2,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
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
                                                5,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                0,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                20,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
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
                                                20,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 24,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                20,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
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
                                                20,
                                                50,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 25,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                5,
                                                12
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
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                20,
                                                50,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                0
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
                                                20,
                                                50,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-adde",
                                    "fg-genadde"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 26,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-adde": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-genadde": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1,
                                                1
                                            ],
                                            "usedResults": [],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [
                                                0
                                            ],
                                            "coinWin": 0,
                                            "cashWin": 0,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5110,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-respin",
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
                    },
                    {
                        "coinWin": 860,
                        "cashWin": 8600,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                12
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                20,
                                                50,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [
                                        0,
                                        0,
                                        0,
                                        1,
                                        0,
                                        2,
                                        1,
                                        0,
                                        1,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        0,
                                        4,
                                        1
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 1,
                                    "coinWin": 860,
                                    "cashWin": 8600,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 14,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-symwins"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-bmmask": {
                                        "vals": [
                                            true,
                                            true,
                                            true,
                                            true,
                                            true
                                        ],
                                        "newVals": [
                                            false,
                                            false,
                                            false,
                                            false,
                                            false
                                        ],
                                        "basicComponentData": null,
                                        "num": 5,
                                        "newChged": 0,
                                        "@type": "type.googleapis.com/sgc7pb.MaskData"
                                    },
                                    "fg-respin": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 27,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-symwins": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 5820,
                                            "cashWin": 58200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 860,
                                        "symbolNum": 14,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    },
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5970,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
                                "nextStepFirstComponent": "fg-start",
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
                    },
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                8,
                                                9,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                9,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                3,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                20,
                                                50,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                20,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-collect"
                                ],
                                "respinComponents": [],
                                "mapComponents": {
                                    "fg-start": {
                                        "triggerRespinNum": [],
                                        "basicComponentData": {
                                            "usedScenes": [],
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 5970,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-collect": {
                                        "val": 12,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 3,
                                    "6": 20,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-start",
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
                "playStartTime": 1718174505538
            },
            "playIndex": -1,
            "bet": 10,
            "lines": 20,
            "totalwin": 60700,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statecfg.statedata, statecfg.statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 0) {
            expect(logic.curStates.length).toBe(4);
            expect(logic.curStates[0].otherscene).not.toBe(null);
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