const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 002', () => {
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
            "key": "0.3814158632837261"
        },
        {
            "name": "bg-paylines",
            "component": [
                "bg-paylines"
            ],
            "module": "ShowTopModule",
            "instance": 0,
            "key": "0.5876166289142748"
        },
        {
            "name": "bg-scatter",
            "component": [
                "bg-scatter"
            ],
            "module": "FgModule",
            "instance": 0,
            "key": "0.7428874121539344"
        },
        {
            "name": "fg-paylines",
            "component": [
                "fg-paylines"
            ],
            "module": "ShowTopModule",
            "instance": 0,
            "key": "0.17224014006967203"
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
            "key": "0.8343066310906622"
        },
        {
            "name": "fg-bmmask",
            "component": [
                {
                    "value": "bg-symwins",
                    "type": "SymbolValsWins"
                }
            ],
            "module": "SymCollectCoinModule",
            "instance": 0,
            "key": "0.07917379484245868"
        },
        {
            "name": "fg-replacee",
            "component": [
                {
                    "value": "fg-respin",
                    "type": "Respin"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "trigger": "onStart",
            "key": "0.8202998713512215"
        },
        {
            "name": "bg-chgsym",
            "component": [
                {
                    "value": "fg-adde",
                    "type": "ChgSymbols"
                },
                {
                    "value": "fg-genadde",
                    "type": "GenSymbolValsWithSymbol"
                }
            ],
            "module": "SymChangeModule",
            "instance": 0,
            "key": "0.8617102024782008"
        },
        {
            "name": "bg-gensym",
            "component": [
                {
                    "value": "fg-replacee",
                    "type": "ReplaceReelWithMask"
                },
                {
                    "value": "fg-genreplacee",
                    "type": "GenSymbolValsWithSymbol"
                }
            ],
            "module": "SymChangeModule",
            "instance": 0,
            "key": "0.48497312574376705"
        },
        {
            "name": "bg-symwins",
            "component": [
                "bg-symwins"
            ],
            "instance": 0,
            "key": "0.45309493842148063"
        },
        {
            "name": "fg-chgsym",
            "component": [
                "fg-chgsym"
            ],
            "instance": 0,
            "key": "0.009466296857344902"
        },
        {
            "name": "fg-gensym",
            "component": [
                "fg-gensym"
            ],
            "instance": 0,
            "key": "0.6769211128574766"
        },
        {
            "name": "fg-triggermm",
            "component": [
                "fg-triggermm"
            ],
            "instance": 0,
            "key": "0.945116564088825"
        },
        {
            "name": "fg-adde",
            "component": [
                "fg-adde"
            ],
            "module": "FreeExtraModule",
            "instance": 0,
            "key": "0.7808461912722771"
        },
        {
            "name": "fg-triggercollect",
            "component": [
                "fg-triggercollect"
            ],
            "instance": 0,
            "key": "0.6951897777058755"
        },
        {
            "name": "fg-collect",
            "component": [
                "fg-collect"
            ],
            "instance": 0,
            "key": "0.8528755513330726"
        },
        {
            "name": "fg-respin",
            "component": [
                "fg-respin"
            ],
            "instance": 0,
            "key": "0.7380851317773824"
        },
        {
            "name": "fg-triggerbm",
            "component": [
                "fg-triggerbm"
            ],
            "instance": 0,
            "key": "0.654544801082267"
        },
        {
            "name": "fg-genadde",
            "component": [
                "fg-genadde"
            ],
            "instance": 0,
            "key": "0.6490698742170962"
        },
        {
            "name": "fg-triggere",
            "component": [
                "fg-triggere"
            ],
            "instance": 0,
            "key": "0.7866726856922213"
        },
        {
            "name": "fg-symwins",
            "component": [
                "fg-symwins"
            ],
            "instance": 0,
            "key": "0.9226625577898238"
        },
        {
            "name": "fg-genreplacee",
            "component": [
                "fg-genreplacee"
            ],
            "instance": 0,
            "key": "0.5147672475271128"
        },
        {
            "name": "fg-start",
            "component": [
                "fg-start"
            ],
            "module": "FgExitModule",
            "instance": 0,
            "key": "0.5382864355219705"
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
        "gamemodulename": "ztUJjwPBn4Po2g0-LnTTO",
        "gameid": 69028,
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
                    1232,
                    26,
                    18,
                    51,
                    36,
                    5,
                    17,
                    4,
                    21,
                    20,
                    372,
                    2464
                ],
                "results": [
                    {
                        "coinWin": 40,
                        "cashWin": 4000,
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
                                                9,
                                                10,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
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
                                                5,
                                                5,
                                                4
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
                                                8,
                                                4,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                10,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                6,
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
                                                20,
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
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 1,
                                    "coinWin": 40,
                                    "cashWin": 4000,
                                    "otherMul": 1,
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
                                    "bg-spin",
                                    "bg-chgsym",
                                    "bg-gensym",
                                    "bg-symwins"
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
                                            "coinWin": 40,
                                            "cashWin": 4000,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 40,
                                        "symbolNum": 2,
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
                "playStartTime": 1717654914573
            },
            "playIndex": -1,
            "bet": 100,
            "lines": 20,
            "totalwin": 4000,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statecfg.statedata, statecfg.statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 0) {
            expect(logic.curStates.length).toBe(2);
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