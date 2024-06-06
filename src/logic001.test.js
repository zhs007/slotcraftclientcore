const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 001', () => {
    const logic = new SCLogicMgr();

    const obj = [
        {
            "name": "bg-spin",
            "component": [
                {
                    "value": "bg-spin",
                    "type": "BasicReels"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "key": "0.42159376390611847"
        },
        {
            "name": "bg-win",
            "component": [
                {
                    "value": "bg-win",
                    "type": "LinesTrigger"
                }
            ],
            "module": "ShowTopModule",
            "instance": 0,
            "key": "0.06832762088722766"
        },
        {
            "name": "bg-solarweights",
            "component": [
                {
                    "value": "bg-respintrigger",
                    "type": "ScatterTrigger"
                }
            ],
            "module": "FgModule",
            "instance": 0,
            "key": "0.6762678434891143"
        },
        {
            "name": "fg-spin",
            "component": [
                {
                    "value": "fg-adde",
                    "type": "ChgSymbols"
                }
            ],
            "module": "SpinModule",
            "instance": 0,
            "key": "0.8030062252428682"
        },
        {
            "name": "fg-exit",
            "component": [
                {
                    "value": "fg-start",
                    "type": "Respin"
                }
            ],
            "module": "FgExitModule",
            "instance": 0,
            "trigger": "onEnding",
            "key": "0.912701909038945"
        }
    ];

    const statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);

    const gamecfg = {
        "10": {
            "Components": [
                {
                    "config": {
                        "defaultNextComponent": "bg-cashweight",
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
                        "defaultNextComponent": "bg-respintrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "H1",
                            "M1",
                            "M2",
                            "L1",
                            "L2",
                            "L3",
                            "L4"
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
                        "weight": "solarweights",
                        "mapBranchs": {
                            "normal": {
                                "awards": null,
                                "jumpToComponent": "bg-win"
                            },
                            "solar": {
                                "awards": null,
                                "jumpToComponent": "bg-cashwin"
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
                            "Cash"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "Cash"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 5,
                        "wildSymbols": [],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-reel",
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
                        "defaultNextComponent": "fg-cashwin",
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "chgSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "H1",
                            "M1",
                            "M2",
                            "WL",
                            "L1",
                            "L2",
                            "L3",
                            "L4"
                        ],
                        "blankSymbol": "BN",
                        "weight": "changeweights",
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
                        "jumpToComponent": "fg-cashwin"
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
                            "Cash"
                        ],
                        "type": "collector"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-start",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "Cash"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-cashweight",
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
                }
            ],
            "MapComponents": {
                "bg-spin": {
                    "config": {
                        "defaultNextComponent": "bg-cashweight",
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
                "bg-solarweights": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "solarweights",
                        "mapBranchs": {
                            "normal": {
                                "awards": null,
                                "jumpToComponent": "bg-win"
                            },
                            "solar": {
                                "awards": null,
                                "jumpToComponent": "bg-cashwin"
                            }
                        }
                    }
                },
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
                            "Cash"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": false,
                        "isAlwaysGen": false
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
                "bg-respintrigger": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "Cash"
                        ],
                        "type": "countscatter",
                        "betType": "noPay",
                        "symbolValsMulti": "",
                        "minNum": 5,
                        "wildSymbols": [],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "fg-reel",
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
                        "defaultNextComponent": "fg-cashwin",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-adde"
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
                            "H1",
                            "M1",
                            "M2",
                            "WL",
                            "L1",
                            "L2",
                            "L3",
                            "L4"
                        ],
                        "blankSymbol": "BN",
                        "weight": "changeweights",
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
                        "jumpToComponent": "fg-cashwin"
                    }
                },
                "fg-reel": {
                    "config": {
                        "defaultNextComponent": "fg-cashweight",
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
                "bg-win": {
                    "config": {
                        "defaultNextComponent": "bg-respintrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "linesTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "H1",
                            "M1",
                            "M2",
                            "L1",
                            "L2",
                            "L3",
                            "L4"
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
                "fg-cashwin": {
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
                            "Cash"
                        ],
                        "type": "collector"
                    }
                },
                "fg-cashweight": {
                    "config": {
                        "defaultNextComponent": "fg-start",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "genSymbolValsWithSymbol",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "type": "normal",
                        "symbols": [
                            "Cash"
                        ],
                        "weight": "cashweights",
                        "defaultVal": 0,
                        "isUseSource": true,
                        "isAlwaysGen": false
                    }
                }
            },
            "Stats2": null
        }
    };
    const msg = {
        "msgid": "gamemoduleinfo",
        "gamemodulename": "_y7ECQoRo6ZAWlaYpCqm0",
        "gameid": 69053,
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
                    78,
                    76,
                    34,
                    91,
                    25,
                    1340,
                    1062,
                    29,
                    1294,
                    1480,
                    7,
                    12,
                    92,
                    60,
                    39,
                    88,
                    522,
                    19,
                    552,
                    6,
                    2,
                    11,
                    18,
                    8,
                    20,
                    11,
                    6,
                    3,
                    2,
                    0,
                    0,
                    3,
                    7,
                    10,
                    7,
                    8,
                    11,
                    9,
                    5,
                    2,
                    17,
                    7,
                    0,
                    6,
                    9,
                    1,
                    8,
                    0,
                    10,
                    10,
                    4,
                    2,
                    3,
                    9,
                    9,
                    0,
                    14,
                    11,
                    0,
                    8,
                    19,
                    11,
                    0,
                    3,
                    7,
                    7,
                    3,
                    4,
                    8,
                    15,
                    5,
                    1,
                    16,
                    0,
                    0,
                    7,
                    4,
                    6,
                    13,
                    14,
                    6,
                    9,
                    13,
                    3,
                    12,
                    4,
                    14,
                    13,
                    2,
                    12,
                    5,
                    11,
                    17,
                    4,
                    19,
                    6,
                    17,
                    20,
                    9,
                    15,
                    10,
                    15,
                    13,
                    15,
                    3,
                    5,
                    14,
                    19,
                    2,
                    17,
                    6,
                    3,
                    5,
                    14,
                    3,
                    19,
                    0,
                    15,
                    20,
                    1,
                    4,
                    5,
                    13,
                    15,
                    12,
                    20,
                    14,
                    0,
                    12,
                    17,
                    3,
                    10,
                    5,
                    11,
                    20,
                    1,
                    10,
                    16,
                    12,
                    5,
                    7,
                    11,
                    18,
                    2,
                    10,
                    10,
                    20,
                    18,
                    10,
                    2,
                    1,
                    10,
                    18,
                    15,
                    14,
                    0
                ],
                "results": [
                    {
                        "coinWin": 24,
                        "cashWin": 1200,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                8,
                                                3,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                3,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                2,
                                                5,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                3,
                                                5,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                4,
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
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                1,
                                                5,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                7,
                                                4,
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
                                                30,
                                                0,
                                                20
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                10,
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
                                                30,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                0,
                                                40,
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
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        1,
                                        2,
                                        0,
                                        3,
                                        1
                                    ],
                                    "type": 2,
                                    "lineIndex": 7,
                                    "symbol": 3,
                                    "mul": 24,
                                    "coinWin": 24,
                                    "cashWin": 1200,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 4,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        1,
                                        0,
                                        3,
                                        1,
                                        2,
                                        3,
                                        0,
                                        4,
                                        2
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
                                    "bg-cashweight",
                                    "bg-solarweights",
                                    "bg-win",
                                    "bg-respintrigger",
                                    "fg-reel",
                                    "fg-cashweight"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "bg-win": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 24,
                                            "cashWin": 1200,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 4,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 24,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
                                    },
                                    "bg-respintrigger": {
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
                                            "runIndex": 0
                                        },
                                        "nextComponent": "fg-reel",
                                        "symbolNum": 5,
                                        "wildNum": 0,
                                        "respinNum": 3,
                                        "wins": 0,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-reel": {
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
                                            "runIndex": 0
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
                                            "runIndex": 0
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
                                            "runIndex": 0
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
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
                                            "runIndex": 0
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
                                            "runIndex": 0
                                        },
                                        "value": "normal",
                                        "@type": "type.googleapis.com/sgc7pb.WeightBranchData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                        "coinWin": 150,
                        "cashWin": 7500,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                1,
                                                5,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                7,
                                                4,
                                                7
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
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                7,
                                                4,
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
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        0,
                                        2,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 5,
                                    "coinWin": 150,
                                    "cashWin": 7500,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-adde",
                                    "fg-cashwin"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 1,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 150,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-cashwin": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 150,
                                            "cashWin": 7500,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "wins": 150,
                                        "symbolNum": 3,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                        "coinWin": 240,
                        "cashWin": 12000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                5,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                7,
                                                4,
                                                7
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
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                4,
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
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        0,
                                        2,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 8,
                                    "coinWin": 240,
                                    "cashWin": 12000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-adde",
                                    "fg-cashwin"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-cashwin": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 390,
                                            "cashWin": 19500,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "wins": 240,
                                        "symbolNum": 3,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 390,
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
                        "coinWin": 330,
                        "cashWin": 16500,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                4,
                                                7
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
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                4,
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
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        0,
                                        2,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 11,
                                    "coinWin": 330,
                                    "cashWin": 16500,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-adde",
                                    "fg-cashwin"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-cashwin": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 720,
                                            "cashWin": 36000,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "wins": 330,
                                        "symbolNum": 3,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 720,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                        "coinWin": 360,
                        "cashWin": 18000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                4,
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
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        0,
                                        2,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 12,
                                    "coinWin": 360,
                                    "cashWin": 18000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-adde",
                                    "fg-cashwin"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 11,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 4,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1080,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "fg-cashwin": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 1080,
                                            "cashWin": 54000,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "wins": 360,
                                        "symbolNum": 3,
                                        "collectorNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.SymbolValWinsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                        "coinWin": 420,
                        "cashWin": 21000,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                4,
                                                0,
                                                8,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                8,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
                                                0
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                0,
                                                0,
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
                                                0,
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
                                        2,
                                        1,
                                        0,
                                        2,
                                        0
                                    ],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 14,
                                    "coinWin": 420,
                                    "cashWin": 21000,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 3,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-start",
                                    "fg-adde",
                                    "fg-cashwin"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-cashwin": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 1500,
                                            "cashWin": 75000,
                                            "targetScene": 0,
                                            "runIndex": 0
                                        },
                                        "wins": 420,
                                        "symbolNum": 3,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 13,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 12,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 11,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 10,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 11,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                4,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                7,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                8,
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
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                    "fg-start",
                                    "fg-adde"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 12,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 13,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                8,
                                                4
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                8,
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
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                    "fg-start",
                                    "fg-adde"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 10,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 14,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 15,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                8,
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
                                                8,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                    "fg-start",
                                    "fg-adde"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 11,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 16,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 10,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 17,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 9,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 18,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 19,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 7,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 20,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 6,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 21,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 22,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 23,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
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
                                                7
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
                                },
                                {
                                    "values": [
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
                                                7
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
                                    "fg-start",
                                    "fg-adde"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 6,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 24,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 25,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 26,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                7
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 27,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                                7
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
                                },
                                {
                                    "values": [
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
                                    "fg-start",
                                    "fg-adde"
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 28,
                                        "curAddRespinNum": 3,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    }
                                },
                                "mapVals": {
                                    "1": 5,
                                    "2": 4,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 29,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 30,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 31,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 32,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                                            "runIndex": 0
                                        },
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 33,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 1500,
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
                "playStartTime": 1717579694610
            },
            "playIndex": -1,
            "bet": 50,
            "lines": 10,
            "totalwin": 76200,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statecfg.statedata, statecfg.statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 0) {
            expect(logic.curStates.length).toBe(3);
        } else if (stepIndex == 1) {
            expect(logic.curStates.length).toBe(1);
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