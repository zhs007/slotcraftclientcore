const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 007', () => {
    const logic = new SCLogicMgr();

    const statedata = {
        "bg-spin": {
            "list": [
                "bg-spin",
                "bg-cashweight"
            ],
            "module": "SpinModule",
            "performance": ""
        },
        "bg-wildex": {
            "list": [
                "bg-replace"
            ],
            "module": "SymChangeModule",
            "performance": ""
        },
        "bg-solar": {
            "list": [
                "bg-cashwin"
            ],
            "module": "SymCollectCoinModule",
            "performance": ""
        },
        "bg-win": {
            "list": [
                "bg-win"
            ],
            "module": "ShowTopModule",
            "performance": ""
        },
        "fg-start": {
            "list": [
                "fg-start"
            ],
            "module": "FgModule",
            "performance": ""
        },
        "fg-spin": {
            "list": [
                "fg-spin"
            ],
            "module": "SymChangeModule",
            "performance": ""
        },
        "fg-end": {
            "list": [
                "fg-start"
            ],
            "module": "FgExitModule",
            "performance": "",
            "bquick": false,
            "toui": true,
            "exitmodule": "FgExitModule"
        }
    };
    const statelist = [
        "bg-spin",
        "bg-wildex",
        "bg-solar",
        "bg-win",
        "fg-start",
        "fg-spin",
        "fg-end"
    ];

    const gamecfg = {
        "50": {
            "Components": [
                {
                    "config": {
                        "defaultNextComponent": "bg-wildex",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reel0",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-triggerfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
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
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "forceBranch": "",
                        "weight": "solarweights",
                        "mapBranchs": {
                            "solar": {
                                "awards": null,
                                "jumpToComponent": "bg-cashwin"
                            },
                            "normal": {
                                "awards": null,
                                "jumpToComponent": "bg-win"
                            }
                        }
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-solarweights",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "SC"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-win",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": null,
                        "type": "normal"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-solarweights",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL"
                        ],
                        "type": "countscatterReels",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": [],
                        "posArea": null,
                        "countScatterPayAs": "WL",
                        "winMulti": 1,
                        "jumpToComponent": "bg-wildexmask",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [],
                        "symbolAwardsWeights": null,
                        "targetMask": "bg-wildexmask",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 3,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-replace",
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
                        "defaultNextComponent": "bg-cashweight",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceReelWithMask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "mask": "bg-wildexmask",
                        "ignoreSymbols": [
                            "SC"
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
                            "SC"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 5,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    3
                                ],
                                "strParams": [
                                    "fg-start.lastRespinNum"
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
                        "respinNum": 3,
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "chgSymbolsType": "normal",
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "blankSymbol": "BN",
                        "weight": "changeweights",
                        "maxNumber": 0,
                        "controllers": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    3
                                ],
                                "strParams": [
                                    "fg-start.lastRespinNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "jumpToComponent": "fg-cashweight"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-checkcol",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "non-clear",
                        "symbols": [
                            "SC"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "reelTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "SC",
                        "type": "columnNumber",
                        "wildSymbols": null,
                        "minSymbolNum": 4,
                        "targetMask": "",
                        "mapBranchs": {
                            "3": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot0.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "4": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot1.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "5": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot2.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            }
                        }
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot0"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 500,
                        "winMulti": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot1"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 2500,
                        "winMulti": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-checkrow",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot2"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-checkrow",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 500000,
                        "winMulti": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-column0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "reelTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "SC",
                        "type": "row",
                        "wildSymbols": null,
                        "minSymbolNum": 5,
                        "targetMask": "",
                        "mapBranchs": {
                            "1": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column0.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "2": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column1.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "3": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column2.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "4": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column3.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            }
                        }
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-column1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum0"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-mul0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul0.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum0.outputInt"
                                ],
                                "onTriggerRespin": ""
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
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 0,
                        "column": 0,
                        "multi": 1
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-column2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum1"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-mul1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul1.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum1.outputInt"
                                ],
                                "onTriggerRespin": ""
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
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 1,
                        "column": 0,
                        "multi": 1
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-column3",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum2"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-mul2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul2.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum2.outputInt"
                                ],
                                "onTriggerRespin": ""
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
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 2,
                        "column": 0,
                        "multi": 1
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum3"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-mul3",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul3.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum3.outputInt"
                                ],
                                "onTriggerRespin": ""
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
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 3,
                        "column": 0,
                        "multi": 1
                    }
                }
            ],
            "MapComponents": {
                "bg-cashweight": {
                    "config": {
                        "defaultNextComponent": "bg-solarweights",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "SC"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": true
                    }
                },
                "fg-triggerjackpot1": {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot1"
                    }
                },
                "fg-rollnum0": {
                    "config": {
                        "defaultNextComponent": "fg-mul0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul0.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum0.outputInt"
                                ],
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                },
                "fg-column1": {
                    "config": {
                        "defaultNextComponent": "fg-column2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum1"
                    }
                },
                "fg-mul1": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 1,
                        "column": 0,
                        "multi": 1
                    }
                },
                "fg-mul3": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 3,
                        "column": 0,
                        "multi": 1
                    }
                },
                "fg-checkcol": {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "reelTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "SC",
                        "type": "columnNumber",
                        "wildSymbols": null,
                        "minSymbolNum": 4,
                        "targetMask": "",
                        "mapBranchs": {
                            "5": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot2.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "3": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot0.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "4": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-triggerjackpot1.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            }
                        }
                    }
                },
                "bg-win": {
                    "config": {
                        "defaultNextComponent": "bg-triggerfg",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
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
                "fg-spin": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "chgSymbolsType": "normal",
                        "symbols": [
                            "WL",
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "blankSymbol": "BN",
                        "weight": "changeweights",
                        "maxNumber": 0,
                        "controllers": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    3
                                ],
                                "strParams": [
                                    "fg-start.lastRespinNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "jumpToComponent": "fg-cashweight"
                    }
                },
                "fg-checkrow": {
                    "config": {
                        "defaultNextComponent": "fg-column0",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "reelTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "SC",
                        "type": "row",
                        "wildSymbols": null,
                        "minSymbolNum": 5,
                        "targetMask": "",
                        "mapBranchs": {
                            "3": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column2.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "4": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column3.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "1": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column0.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            },
                            "2": {
                                "awards": [
                                    {
                                        "awardType": "chgComponentConfigIntVal",
                                        "vals": [
                                            1
                                        ],
                                        "strParams": [
                                            "fg-column1.queue"
                                        ],
                                        "componentVals": null,
                                        "onTriggerRespin": ""
                                    }
                                ],
                                "jumpToComponent": ""
                            }
                        }
                    }
                },
                "fg-column0": {
                    "config": {
                        "defaultNextComponent": "fg-column1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum0"
                    }
                },
                "fg-rollnum2": {
                    "config": {
                        "defaultNextComponent": "fg-mul2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul2.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum2.outputInt"
                                ],
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                },
                "bg-solarweights": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "forceBranch": "",
                        "weight": "solarweights",
                        "mapBranchs": {
                            "solar": {
                                "awards": null,
                                "jumpToComponent": "bg-cashwin"
                            },
                            "normal": {
                                "awards": null,
                                "jumpToComponent": "bg-win"
                            }
                        }
                    }
                },
                "bg-wildex": {
                    "config": {
                        "defaultNextComponent": "bg-solarweights",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "WL"
                        ],
                        "type": "countscatterReels",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 1,
                        "wildSymbols": [],
                        "posArea": null,
                        "countScatterPayAs": "WL",
                        "winMulti": 1,
                        "jumpToComponent": "bg-wildexmask",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [],
                        "symbolAwardsWeights": null,
                        "targetMask": "bg-wildexmask",
                        "isReverse": false,
                        "isAddRespinMode": false,
                        "respinComponent": "",
                        "respinNum": 3,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-cashweight": {
                    "config": {
                        "defaultNextComponent": "fg-checkcol",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "non-clear",
                        "symbols": [
                            "SC"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": true
                    }
                },
                "fg-jackpot0": {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 500,
                        "winMulti": 0
                    }
                },
                "fg-triggerjackpot2": {
                    "config": {
                        "defaultNextComponent": "fg-checkrow",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot2"
                    }
                },
                "fg-column3": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum3"
                    }
                },
                "bg-cashwin": {
                    "config": {
                        "defaultNextComponent": "bg-win",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "symbolValWins",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "winMulti": 1,
                        "symbols": null,
                        "type": "normal"
                    }
                },
                "bg-wildexmask": {
                    "config": {
                        "defaultNextComponent": "bg-replace",
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
                "bg-replace": {
                    "config": {
                        "defaultNextComponent": "bg-cashweight",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceReelWithMask",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "mask": "bg-wildexmask",
                        "ignoreSymbols": [
                            "SC"
                        ]
                    }
                },
                "fg-rollnum1": {
                    "config": {
                        "defaultNextComponent": "fg-mul1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul1.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum1.outputInt"
                                ],
                                "onTriggerRespin": ""
                            }
                        ]
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
                            "SC"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 5,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-start",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    3
                                ],
                                "strParams": [
                                    "fg-start.lastRespinNum"
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
                        "respinNum": 3,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
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
                "fg-jackpot2": {
                    "config": {
                        "defaultNextComponent": "fg-checkrow",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 500000,
                        "winMulti": 0
                    }
                },
                "fg-column2": {
                    "config": {
                        "defaultNextComponent": "fg-column3",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-rollnum2"
                    }
                },
                "bg-spin": {
                    "config": {
                        "defaultNextComponent": "bg-wildex",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reel0",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                "fg-triggerjackpot0": {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot1",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-jackpot0"
                    }
                },
                "fg-jackpot1": {
                    "config": {
                        "defaultNextComponent": "fg-triggerjackpot2",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "jackpot",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "betType": "bet",
                        "wins": 2500,
                        "winMulti": 0
                    }
                },
                "fg-mul2": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 2,
                        "column": 0,
                        "multi": 1
                    }
                },
                "fg-mul0": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbolVals",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "mul",
                        "sourceType": "row",
                        "positionCollection": "",
                        "winResultComponents": null,
                        "maxNumber": 0,
                        "maxVal": 999999,
                        "minVal": 0,
                        "row": 0,
                        "column": 0,
                        "multi": 1
                    }
                },
                "fg-rollnum3": {
                    "config": {
                        "defaultNextComponent": "fg-mul3",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "rollNumber",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "cashmutiweights",
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-mul3.multi"
                                ],
                                "componentVals": [
                                    "fg-rollnum3.outputInt"
                                ],
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                }
            },
            "Stats2": null
        }
    };
    const msg = {
        "msgid": "gamemoduleinfo",
        "gamemodulename": "0OpsdeBTg6DqAt6wQIlTZ",
        "gameid": 69049,
        "gmi": {
            "defaultScene": {
                "values": [
                    {
                        "values": [
                            1,
                            2,
                            3,
                            4
                        ]
                    },
                    {
                        "values": [
                            5,
                            6,
                            7,
                            8
                        ]
                    },
                    {
                        "values": [
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "values": [
                            3,
                            4,
                            5,
                            6
                        ]
                    },
                    {
                        "values": [
                            4,
                            5,
                            6,
                            7
                        ]
                    }
                ],
                "indexes": [],
                "validRow": []
            },
            "replyPlay": {
                "randomNumbers": [
                    32,
                    5,
                    19,
                    6,
                    80,
                    20,
                    187,
                    310,
                    639,
                    755,
                    32,
                    19,
                    18,
                    2,
                    27,
                    12,
                    8,
                    13,
                    5,
                    7,
                    12,
                    20,
                    1,
                    17,
                    27,
                    2,
                    310,
                    29,
                    0,
                    27,
                    13,
                    7,
                    0,
                    9,
                    1,
                    22,
                    13,
                    28,
                    0,
                    13,
                    9,
                    775,
                    392,
                    47,
                    332,
                    13,
                    2,
                    18,
                    10,
                    13,
                    16,
                    22,
                    25,
                    14,
                    25,
                    15,
                    25,
                    18,
                    6,
                    9,
                    2,
                    27,
                    29,
                    27,
                    29,
                    8,
                    27,
                    20,
                    5,
                    3,
                    0,
                    15,
                    26,
                    16,
                    9,
                    25,
                    375,
                    313,
                    278,
                    660,
                    340,
                    117,
                    118,
                    696,
                    47,
                    485,
                    273,
                    13,
                    23,
                    7,
                    22,
                    25,
                    2,
                    12,
                    4,
                    29,
                    28,
                    15,
                    3,
                    7,
                    18,
                    1,
                    7,
                    25,
                    27,
                    237,
                    605,
                    583,
                    131,
                    374,
                    430,
                    707,
                    571,
                    561,
                    277,
                    7,
                    334,
                    20,
                    28,
                    20,
                    6,
                    20,
                    12,
                    13,
                    19,
                    8,
                    9,
                    9,
                    10,
                    15,
                    20,
                    25,
                    27,
                    21,
                    20,
                    0,
                    24,
                    2,
                    25,
                    1,
                    14,
                    334,
                    82,
                    345,
                    481,
                    683,
                    596,
                    371,
                    862,
                    219,
                    240,
                    533,
                    794,
                    389,
                    319,
                    26,
                    3,
                    1,
                    4,
                    3,
                    28,
                    774,
                    12,
                    0,
                    14,
                    10,
                    11,
                    493,
                    8,
                    23,
                    21,
                    21,
                    4,
                    29,
                    26,
                    19,
                    9,
                    21,
                    24,
                    7,
                    25,
                    15,
                    0,
                    12,
                    432,
                    788,
                    327,
                    769,
                    83,
                    644,
                    736,
                    108,
                    181,
                    669,
                    34,
                    432,
                    654,
                    8,
                    318,
                    509,
                    184,
                    17,
                    7,
                    22,
                    7,
                    28,
                    8,
                    20,
                    28,
                    5,
                    28,
                    0,
                    14,
                    401,
                    750,
                    54,
                    783,
                    513,
                    598,
                    599,
                    823,
                    722,
                    747,
                    653,
                    34,
                    846,
                    94,
                    165,
                    702,
                    634,
                    441,
                    36,
                    16,
                    1,
                    473,
                    17,
                    29,
                    2,
                    17,
                    22,
                    22,
                    8,
                    4,
                    9,
                    13,
                    13,
                    29,
                    13
                ],
                "results": [
                    {
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                2,
                                                5,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                6
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
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
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
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
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
                                        2,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 0,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 1,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        1,
                                        1,
                                        1,
                                        2,
                                        3,
                                        0,
                                        3,
                                        1,
                                        4,
                                        0
                                    ],
                                    "type": 5,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 5,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "bg-spin",
                                    "bg-wildex",
                                    "bg-wildexmask",
                                    "bg-replace",
                                    "bg-cashweight",
                                    "bg-solarweights",
                                    "bg-triggerfg"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-cashweight": {
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
                                    "bg-solarweights": {
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
                                        "value": "normal",
                                        "@type": "type.googleapis.com/sgc7pb.WeightBranchData"
                                    },
                                    "bg-triggerfg": {
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
                                        "symbolNum": 5,
                                        "wildNum": 0,
                                        "respinNum": 3,
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 0,
                                        "curAddRespinNum": 3,
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "bg-wildex": {
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
                                        "nextComponent": "bg-wildexmask",
                                        "symbolNum": 1,
                                        "wildNum": 0,
                                        "respinNum": 3,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "bg-replace": {
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                        "coinWin": 0,
                        "cashWin": 0,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                6
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
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
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
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
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
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
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
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-spin",
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                        "curRespinNum": 1,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                6
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
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
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
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
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
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
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
                                                450,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                150,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                300,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                150,
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
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-checkrow",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-rollnum1",
                                    "fg-mul1"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-checkrow": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                4,
                                                0,
                                                1,
                                                0,
                                                0,
                                                32,
                                                1
                                            ]
                                        }
                                    },
                                    "fg-rollnum1": {
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
                                        "number": 3,
                                        "@type": "type.googleapis.com/sgc7pb.RollNumberData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 6,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
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
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
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
                                                0,
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                50,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                150,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
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
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 6,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
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
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
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
                                                0,
                                                50,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                100,
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                100,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
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
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 6,
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                6
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
                                                8,
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                50,
                                                0,
                                                250
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50,
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
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
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
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
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
                                                8,
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                50,
                                                0,
                                                250
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50,
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
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                50,
                                                0,
                                                250
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50,
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
                                    "fg-cashweight",
                                    "fg-checkcol",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-checkcol": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                5,
                                                0,
                                                1,
                                                0,
                                                0,
                                                0,
                                                32,
                                                1
                                            ]
                                        }
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 11,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                0,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                50,
                                                0,
                                                250
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50,
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
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                100,
                                                50,
                                                0,
                                                250
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                50,
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
                                    "fg-cashweight",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "lastRespinNum": 12,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 12,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "lastRespinNum": 11,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 13,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 10,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 14,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "curRespinNum": 15,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                150,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                50,
                                                100,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                0,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                50,
                                                100,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                100,
                                                50,
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
                                    "fg-cashweight",
                                    "fg-checkcol",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3"
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
                                        "lastRespinNum": 11,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 16,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-checkcol": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                5,
                                                0,
                                                1,
                                                0,
                                                1,
                                                0,
                                                32,
                                                2
                                            ]
                                        }
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 17,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 18,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 19,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                        "coinWin": 500,
                        "cashWin": 50000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                0,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                150,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                100,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                250,
                                                150,
                                                150,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                250,
                                                50,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                50,
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
                                                1500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                1000,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                250,
                                                150,
                                                1500,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                250,
                                                500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                500,
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
                                    "pos": [],
                                    "type": 10,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 500,
                                    "cashWin": 50000,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 0,
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
                                    "fg-cashweight",
                                    "fg-checkcol",
                                    "fg-triggerjackpot0",
                                    "fg-jackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-checkrow",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-rollnum2",
                                    "fg-mul2"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-checkcol": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                5,
                                                0,
                                                1,
                                                1,
                                                1,
                                                0,
                                                32,
                                                3
                                            ]
                                        }
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-rollnum2": {
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
                                        "number": 10,
                                        "@type": "type.googleapis.com/sgc7pb.RollNumberData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-jackpot0": {
                                        "type_url": "type.googleapis.com/sgc7pb.JackpotData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                10,
                                                26,
                                                1,
                                                0,
                                                40,
                                                244,
                                                3,
                                                48,
                                                208,
                                                134,
                                                3,
                                                16,
                                                244,
                                                3,
                                                24,
                                                1
                                            ]
                                        }
                                    },
                                    "fg-checkrow": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                4,
                                                0,
                                                1,
                                                1,
                                                0,
                                                32,
                                                2
                                            ]
                                        }
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 20,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-cashweight": {
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                        "coinWin": 2500,
                        "cashWin": 250000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                6
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
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
                                                0,
                                                50,
                                                1500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                1000,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                250,
                                                150,
                                                1500,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                250,
                                                500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                500,
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
                                                1500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                1000,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                250,
                                                150,
                                                1500,
                                                100
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                250,
                                                500,
                                                50
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                500,
                                                100
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
                                                1500,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                1000,
                                                300
                                            ]
                                        },
                                        {
                                            "values": [
                                                250,
                                                150,
                                                1500,
                                                300
                                            ]
                                        },
                                        {
                                            "values": [
                                                50,
                                                250,
                                                500,
                                                150
                                            ]
                                        },
                                        {
                                            "values": [
                                                150,
                                                100,
                                                500,
                                                300
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "results": [
                                {
                                    "pos": [],
                                    "type": 10,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 2500,
                                    "cashWin": 250000,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 0,
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
                                    "fg-cashweight",
                                    "fg-checkcol",
                                    "fg-triggerjackpot0",
                                    "fg-triggerjackpot1",
                                    "fg-jackpot1",
                                    "fg-triggerjackpot2",
                                    "fg-checkrow",
                                    "fg-column0",
                                    "fg-column1",
                                    "fg-column2",
                                    "fg-column3",
                                    "fg-rollnum3",
                                    "fg-mul3"
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
                                        "lastRespinNum": 12,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 21,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-spin": {
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-jackpot1": {
                                        "type_url": "type.googleapis.com/sgc7pb.JackpotData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                10,
                                                26,
                                                1,
                                                0,
                                                40,
                                                196,
                                                19,
                                                48,
                                                144,
                                                161,
                                                15,
                                                16,
                                                196,
                                                19,
                                                24,
                                                1
                                            ]
                                        }
                                    },
                                    "fg-column0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-cashweight": {
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
                                    "fg-checkcol": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                5,
                                                0,
                                                1,
                                                1,
                                                1,
                                                1,
                                                32,
                                                4
                                            ]
                                        }
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-checkrow": {
                                        "type_url": "type.googleapis.com/sgc7pb.ReelTriggerData",
                                        "value": {
                                            "type": "Buffer",
                                            "data": [
                                                10,
                                                0,
                                                26,
                                                4,
                                                0,
                                                1,
                                                1,
                                                1,
                                                32,
                                                3
                                            ]
                                        }
                                    },
                                    "fg-rollnum3": {
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
                                        "number": 3,
                                        "@type": "type.googleapis.com/sgc7pb.RollNumberData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "lastRespinNum": 11,
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 23,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 24,
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 25,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 26,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "lastRespinNum": 6,
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 28,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 29,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                        "curRespinNum": 30,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "curRespinNum": 31,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-triggerjackpot0": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul2": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                1
                                            ],
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
                                    "bg-wildexmask": {
                                        "vals": [
                                            false,
                                            false,
                                            true,
                                            false,
                                            false
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
                                    "fg-column1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul1": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                    "fg-column3": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-mul3": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [
                                                2
                                            ],
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
                                        "curRespinNum": 32,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-column2": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-triggerjackpot1": {
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
                                        "queue": 0,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
                                    "6": 50,
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
                                                7,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        }
                                    ],
                                    "indexes": [],
                                    "validRow": []
                                }
                            ],
                            "otherScenes": [],
                            "results": [],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start"
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
                                        "curRespinNum": 33,
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
                                    "2": 4,
                                    "6": 50,
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
                "playStartTime": 1721708040280
            },
            "playIndex": -1,
            "bet": 100,
            "lines": 50,
            "totalwin": 300000,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statedata, statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        // if (stepIndex == 25) {
        //     expect(logic.curStates.length).toBe(6);
        // }

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