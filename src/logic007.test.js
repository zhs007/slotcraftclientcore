const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 007', () => {
    const logic = new SCLogicMgr();

    const statedata = {
        "bg-spin": {
            "list": [
                "bg-spin"
            ],
            "module": "spinResult",
            "performance": ""
        },
        "bg-dropdown": {
            "list": [
                "bg-dropdown"
            ],
            "module": "dropdown",
            "performance": ""
        },
        "bg-refill": {
            "list": [
                "bg-refill"
            ],
            "module": "refill",
            "performance": ""
        },
        "bg-blueeffect": {
            "list": [
                "bg-green2red",
                "bg-green2blue",
                "bg-red2green",
                "bg-red2blue",
                "bg-blue2green",
                "bg-blue2red"
            ],
            "module": "chgSymbols",
            "performance": "2"
        },
        "bg-addwl": {
            "list": [
                "bg-addwl"
            ],
            "module": "chgSymbols",
            "performance": "0"
        },
        "bg-payblue": {
            "list": [
                "bg-payblue"
            ],
            "module": "top",
            "performance": "0"
        },
        "bg-blue": {
            "list": [
                "bg-blue"
            ],
            "module": "collect",
            "performance": "0"
        },
        "bg-payred": {
            "list": [
                "bg-payred"
            ],
            "module": "top",
            "performance": "1"
        },
        "bg-red": {
            "list": [
                "bg-red"
            ],
            "module": "collect",
            "performance": "1"
        },
        "bg-redmul": {
            "list": [
                "bg-piggybank"
            ],
            "module": "multi",
            "performance": "1"
        },
        "bg-paygreen": {
            "list": [
                "bg-paygreen"
            ],
            "module": "top",
            "performance": "2"
        },
        "bg-green": {
            "list": [
                "bg-green"
            ],
            "module": "collect",
            "performance": "2"
        },
        "bg-remove": {
            "list": [
                "bg-remove"
            ],
            "module": "remove",
            "performance": ""
        },
        "bg-win": {
            "list": [
                "bg-piggybank"
            ],
            "module": "showWinAni",
            "performance": ""
        },
        "bg-fgtrigger": {
            "list": [
                "bg-fgtrigger"
            ],
            "module": "freegame",
            "performance": ""
        },
        "fg-spin": {
            "list": [
                "fg-spin"
            ],
            "module": "spinResult",
            "performance": ""
        },
        "fg-dropdown": {
            "list": [
                "fg-dropdown"
            ],
            "module": "dropdown",
            "performance": ""
        },
        "fg-refill": {
            "list": [
                "fg-refill"
            ],
            "module": "refill",
            "performance": ""
        },
        "fg-blueeffect": {
            "list": [
                "fg-green2red",
                "fg-green2blue",
                "fg-red2green",
                "fg-red2blue",
                "fg-blue2green",
                "fg-blue2red"
            ],
            "module": "chgSymbols",
            "performance": "2"
        },
        "fg-addwl": {
            "list": [
                "fg-addw"
            ],
            "module": "chgSymbols",
            "performance": "0"
        },
        "fg-payblue": {
            "list": [
                "fg-payblue"
            ],
            "module": "top",
            "performance": "0"
        },
        "fg-blue": {
            "list": [
                "fg-blue"
            ],
            "module": "collect",
            "performance": "0"
        },
        "fg-payred": {
            "list": [
                "fg-payred"
            ],
            "module": "top",
            "performance": "1"
        },
        "fg-red": {
            "list": [
                "fg-red"
            ],
            "module": "collect",
            "performance": "1"
        },
        "fg-redmul": {
            "list": [
                "fg-piggybank"
            ],
            "module": "multi",
            "performance": "1"
        },
        "fg-paygreen": {
            "list": [
                "fg-paygreen"
            ],
            "module": "top",
            "performance": "2"
        },
        "fg-green": {
            "list": [
                "fg-green"
            ],
            "module": "collect",
            "performance": "2"
        },
        "fg-remove": {
            "list": [
                "fg-remove"
            ],
            "module": "remove",
            "performance": ""
        },
        "fg-win": {
            "list": [
                "fg-piggybank"
            ],
            "module": "showWinAni",
            "performance": ""
        },
        "fg-fgtrigger": {
            "list": [
                "fg-fgtrigger"
            ],
            "module": "freeExtra",
            "performance": ""
        },
        "fg": {
            "list": [
                "fg-start",
                "fg-respin"
            ],
            "module": "freespin",
            "performance": "",
            "bquick": false,
            "toui": true,
            "exitmodule": "exitFree"
        }
    };
    const statelist = [
        "bg-spin",
        "bg-dropdown",
        "bg-refill",
        "bg-blueeffect",
        "bg-addwl",
        "bg-payblue",
        "bg-blue",
        "bg-payred",
        "bg-red",
        "bg-redmul",
        "bg-paygreen",
        "bg-green",
        "bg-remove",
        "bg-win",
        "bg-fgtrigger",
        "fg-spin",
        "fg-dropdown",
        "fg-refill",
        "fg-blueeffect",
        "fg-addwl",
        "fg-payblue",
        "fg-blue",
        "fg-payred",
        "fg-red",
        "fg-redmul",
        "fg-paygreen",
        "fg-green",
        "fg-remove",
        "fg-win",
        "fg-fgtrigger",
        "fg"
    ];

    const gamecfg = {
        "10": {
            "Components": [
                {
                    "config": {
                        "defaultNextComponent": "bg-blue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-blue.valueNum"
                                ],
                                "componentVals": [
                                    "bg-payblue.symbolNum"
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
                        "defaultNextComponent": "fg-start",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "piggyBank",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "winMulti": 1,
                        "type": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-payred",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-blueeffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-red",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-red.valueNum"
                                ],
                                "componentVals": [
                                    "bg-payred.symbolNum"
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
                        "defaultNextComponent": "bg-paygreen",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-piggybank.winMulti"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-green",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-green.valueNum"
                                ],
                                "componentVals": [
                                    "bg-paygreen.symbolNum"
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
                        "defaultNextComponent": "bg-remove",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-greeneffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "removeSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-respin",
                        "targetComponents": [
                            "bg-payblue",
                            "bg-payred",
                            "bg-paygreen"
                        ],
                        "ignoreSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "awards": [
                            {
                                "awardType": "respinTimes",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "bg-respin"
                                ],
                                "componentVals": null,
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
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "bg-dropdown"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-refill",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "dropDownSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "holdSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-greeneffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "refillSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "defaultSymbolVal": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-greenbranch"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-addwl"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "addSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "symbolNum": 1,
                        "symbolNumWeight": "",
                        "ignoreSymbols": [
                            "WL",
                            "SC"
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-piggybank",
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
                        "minNum": 4,
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
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 10,
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
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "greenweight",
                        "mapBranchs": {
                            "red to blue": {
                                "awards": null,
                                "jumpToComponent": "bg-red2blue"
                            },
                            "green to red": {
                                "awards": null,
                                "jumpToComponent": "bg-green2red"
                            },
                            "blue to red": {
                                "awards": null,
                                "jumpToComponent": "bg-blue2red"
                            },
                            "blue to  green": {
                                "awards": null,
                                "jumpToComponent": "bg-blue2green"
                            },
                            "green to blue": {
                                "awards": null,
                                "jumpToComponent": "bg-green2blue"
                            },
                            "red to green": {
                                "awards": null,
                                "jumpToComponent": "bg-red2green"
                            }
                        }
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": [
                                    "fg-payblue.symbolNum"
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
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "piggyBank",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "winMulti": 1,
                        "type": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-payred",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-blueeffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-red",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": [
                                    "fg-payred.symbolNum"
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
                        "defaultNextComponent": "fg-paygreen",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-piggybank.winMulti"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-green",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": [
                                    "fg-paygreen.symbolNum"
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
                        "defaultNextComponent": "fg-remove",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-greeneffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "removeSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-respin",
                        "targetComponents": [
                            "fg-payblue",
                            "fg-payred",
                            "fg-paygreen"
                        ],
                        "ignoreSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
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
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-piggybank",
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
                        "minNum": 4,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 10,
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
                        "mainComponent": "fg-dropdown"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-greeneffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "refillSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "defaultSymbolVal": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-refill",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "dropDownSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "holdSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-greenbranch"
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
                        "weight": "greenweight",
                        "mapBranchs": {
                            "blue to  green": {
                                "awards": null,
                                "jumpToComponent": "fg-blue2green"
                            },
                            "green to blue": {
                                "awards": null,
                                "jumpToComponent": "fg-green2blue"
                            },
                            "red to green": {
                                "awards": null,
                                "jumpToComponent": "fg-red2green"
                            },
                            "red to blue": {
                                "awards": null,
                                "jumpToComponent": "fg-red2blue"
                            },
                            "green to red": {
                                "awards": null,
                                "jumpToComponent": "fg-green2red"
                            },
                            "blue to red": {
                                "awards": null,
                                "jumpToComponent": "fg-blue2red"
                            }
                        }
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-addw"
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "addSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "symbolNum": 1,
                        "symbolNumWeight": "",
                        "ignoreSymbols": [
                            "WL",
                            "SC"
                        ]
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reels2-001",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reels2-001",
                        "isExpandReel": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-piggybank.savedMoney"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                }
            ],
            "MapComponents": {
                "fg-blue2red": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                "bg-paygreen": {
                    "config": {
                        "defaultNextComponent": "bg-green",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-green.valueNum"
                                ],
                                "componentVals": [
                                    "bg-paygreen.symbolNum"
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
                "bg-blueeffect": {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-addwl"
                    }
                },
                "bg-greenbranch": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "greenweight",
                        "mapBranchs": {
                            "red to blue": {
                                "awards": null,
                                "jumpToComponent": "bg-red2blue"
                            },
                            "green to red": {
                                "awards": null,
                                "jumpToComponent": "bg-green2red"
                            },
                            "blue to red": {
                                "awards": null,
                                "jumpToComponent": "bg-blue2red"
                            },
                            "blue to  green": {
                                "awards": null,
                                "jumpToComponent": "bg-blue2green"
                            },
                            "green to blue": {
                                "awards": null,
                                "jumpToComponent": "bg-green2blue"
                            },
                            "red to green": {
                                "awards": null,
                                "jumpToComponent": "bg-red2green"
                            }
                        }
                    }
                },
                "fg-green": {
                    "config": {
                        "defaultNextComponent": "fg-remove",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-greeneffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "fg-greenbranch": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "weightBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "weight": "greenweight",
                        "mapBranchs": {
                            "green to red": {
                                "awards": null,
                                "jumpToComponent": "fg-green2red"
                            },
                            "blue to red": {
                                "awards": null,
                                "jumpToComponent": "fg-blue2red"
                            },
                            "blue to  green": {
                                "awards": null,
                                "jumpToComponent": "fg-blue2green"
                            },
                            "green to blue": {
                                "awards": null,
                                "jumpToComponent": "fg-green2blue"
                            },
                            "red to green": {
                                "awards": null,
                                "jumpToComponent": "fg-red2green"
                            },
                            "red to blue": {
                                "awards": null,
                                "jumpToComponent": "fg-red2blue"
                            }
                        }
                    }
                },
                "fg-red2green": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                "bg-payred": {
                    "config": {
                        "defaultNextComponent": "bg-red",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-red.valueNum"
                                ],
                                "componentVals": [
                                    "bg-payred.symbolNum"
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
                "bg-dropdown": {
                    "config": {
                        "defaultNextComponent": "bg-refill",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "dropDownSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "holdSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0
                    }
                },
                "bg-refill": {
                    "config": {
                        "defaultNextComponent": "bg-greeneffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "refillSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "defaultSymbolVal": 0
                    }
                },
                "fg-payred": {
                    "config": {
                        "defaultNextComponent": "fg-red",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": [
                                    "fg-payred.symbolNum"
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
                "fg-greeneffect": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-greenbranch"
                    }
                },
                "fg-green2red": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                "bg-green": {
                    "config": {
                        "defaultNextComponent": "bg-remove",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-greeneffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "bg-remove": {
                    "config": {
                        "defaultNextComponent": "bg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "removeSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-respin",
                        "targetComponents": [
                            "bg-payblue",
                            "bg-payred",
                            "bg-paygreen"
                        ],
                        "ignoreSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "awards": [
                            {
                                "awardType": "respinTimes",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "bg-respin"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                },
                "bg-fgtrigger": {
                    "config": {
                        "defaultNextComponent": "bg-piggybank",
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
                        "minNum": 4,
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
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 10,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-paygreen": {
                    "config": {
                        "defaultNextComponent": "fg-green",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": [
                                    "fg-paygreen.symbolNum"
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
                "fg-red2blue": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                "fg-blueeffect": {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-addw"
                    }
                },
                "bg-piggybank": {
                    "config": {
                        "defaultNextComponent": "fg-start",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "piggyBank",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "winMulti": 1,
                        "type": ""
                    }
                },
                "bg-respin": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "bg-dropdown"
                    }
                },
                "bg-addwl": {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "addSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "symbolNum": 1,
                        "symbolNumWeight": "",
                        "ignoreSymbols": [
                            "WL",
                            "SC"
                        ]
                    }
                },
                "fg-payblue": {
                    "config": {
                        "defaultNextComponent": "fg-blue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "fg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": [
                                    "fg-payblue.symbolNum"
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
                "fg-fgtrigger": {
                    "config": {
                        "defaultNextComponent": "fg-piggybank",
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
                        "minNum": 4,
                        "wildSymbols": null,
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    1
                                ],
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ],
                        "symbolAwardsWeights": null,
                        "targetMask": "",
                        "isReverse": false,
                        "isAddRespinMode": true,
                        "respinComponent": "fg-start",
                        "respinNum": 10,
                        "respinNumWeight": "",
                        "respinNumWithScatterNum": null,
                        "respinNumWeightWithScatterNum": null
                    }
                },
                "fg-respin": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "respin",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "mainComponent": "fg-dropdown"
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
                "fg-red": {
                    "config": {
                        "defaultNextComponent": "fg-paygreen",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-piggybank.winMulti"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "fg-remove": {
                    "config": {
                        "defaultNextComponent": "fg-fgtrigger",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "removeSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "fg-respin",
                        "targetComponents": [
                            "fg-payblue",
                            "fg-payred",
                            "fg-paygreen"
                        ],
                        "ignoreSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
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
                        ]
                    }
                },
                "fg-refill": {
                    "config": {
                        "defaultNextComponent": "fg-greeneffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "refillSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0,
                        "defaultSymbolVal": 0
                    }
                },
                "fg-blue2green": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                "bg-spin": {
                    "config": {
                        "defaultNextComponent": "bg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reels2-001",
                        "isExpandReel": false,
                        "awards": null
                    }
                },
                "fg-blue": {
                    "config": {
                        "defaultNextComponent": "fg-payred",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "fg-blueeffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "fg-dropdown": {
                    "config": {
                        "defaultNextComponent": "fg-refill",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "dropDownSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "holdSymbols": null,
                        "isNeedProcSymbolVals": false,
                        "emptySymbolVal": 0
                    }
                },
                "fg-green2blue": {
                    "config": {
                        "defaultNextComponent": "fg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                "fg-addw": {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "addSymbols",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "WL",
                        "symbolNum": 1,
                        "symbolNumWeight": "",
                        "ignoreSymbols": [
                            "WL",
                            "SC"
                        ]
                    }
                },
                "bg-greeneffect": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "queueBranch",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "jumpToComponent": "bg-greenbranch"
                    }
                },
                "bg-blue2red": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                "bg-green2blue": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                "fg-spin": {
                    "config": {
                        "defaultNextComponent": "fg-payblue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "basicReels",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "reelSet": "reels2-001",
                        "isExpandReel": false,
                        "awards": [
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-piggybank.savedMoney"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-blue.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-red.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            },
                            {
                                "awardType": "setComponentConfigIntVal",
                                "vals": [
                                    0
                                ],
                                "strParams": [
                                    "fg-green.valueNum"
                                ],
                                "componentVals": null,
                                "onTriggerRespin": ""
                            }
                        ]
                    }
                },
                "bg-red2blue": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "mask": ""
                    }
                },
                "fg-piggybank": {
                    "config": {
                        "defaultNextComponent": "",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "piggyBank",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "winMulti": 1,
                        "type": ""
                    }
                },
                "bg-payblue": {
                    "config": {
                        "defaultNextComponent": "bg-blue",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "scatterTrigger",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "type": "scatters",
                        "betType": "bet",
                        "symbolValsMulti": "",
                        "minNum": 0,
                        "wildSymbols": [
                            "WL"
                        ],
                        "posArea": null,
                        "countScatterPayAs": "",
                        "winMulti": 1,
                        "jumpToComponent": "",
                        "piggyBankComponent": "bg-piggybank",
                        "forceToNext": false,
                        "awards": [
                            {
                                "awardType": "chgComponentConfigIntVal",
                                "vals": null,
                                "strParams": [
                                    "bg-blue.valueNum"
                                ],
                                "componentVals": [
                                    "bg-payblue.symbolNum"
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
                "bg-blue": {
                    "config": {
                        "defaultNextComponent": "bg-payred",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-blueeffect.queue"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "bg-red": {
                    "config": {
                        "defaultNextComponent": "bg-paygreen",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "collector",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "symbol": "",
                        "maxVal": 20,
                        "perLevelAwards": null,
                        "mapSPLevelAwards": {
                            "-1": [
                                {
                                    "awardType": "chgComponentConfigIntVal",
                                    "vals": [
                                        1
                                    ],
                                    "strParams": [
                                        "bg-piggybank.winMulti"
                                    ],
                                    "componentVals": null,
                                    "onTriggerRespin": ""
                                }
                            ]
                        },
                        "isCycle": true
                    }
                },
                "bg-blue2green": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "BH",
                            "BM",
                            "BM2",
                            "BL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                },
                "bg-green2red": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "targetSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "mask": ""
                    }
                },
                "bg-red2green": {
                    "config": {
                        "defaultNextComponent": "bg-blueeffect",
                        "tagRNG": null,
                        "initStrVals": null,
                        "useFileMapping": false,
                        "componentType": "replaceSymbolGroup",
                        "targetScenes3": null,
                        "targetOtherScenes3": null,
                        "srcSymbols": [
                            "RH",
                            "RM",
                            "RM2",
                            "RL"
                        ],
                        "targetSymbols": [
                            "GH",
                            "GM",
                            "GM2",
                            "GL"
                        ],
                        "mask": ""
                    }
                }
            },
            "Stats2": null
        }
    };
    const msg = {
        "msgid": "gamemoduleinfo",
        "gamemodulename": "penguindynasty",
        "gameid": 61131,
        "gmi": {
            "defaultScene": {
                "values": [
                    {
                        "values": [
                            1,
                            1,
                            2,
                            2,
                            2,
                            3,
                            3
                        ]
                    },
                    {
                        "values": [
                            2,
                            2,
                            1,
                            1,
                            1,
                            3,
                            3
                        ]
                    },
                    {
                        "values": [
                            4,
                            4,
                            5,
                            5,
                            5,
                            6,
                            6
                        ]
                    },
                    {
                        "values": [
                            5,
                            5,
                            4,
                            4,
                            4,
                            6,
                            6
                        ]
                    },
                    {
                        "values": [
                            7,
                            7,
                            8,
                            8,
                            8,
                            9,
                            9
                        ]
                    },
                    {
                        "values": [
                            8,
                            8,
                            7,
                            7,
                            7,
                            9,
                            9
                        ]
                    },
                    {
                        "values": [
                            1,
                            1,
                            7,
                            7,
                            8,
                            8,
                            9
                        ]
                    }
                ],
                "indexes": [],
                "validRow": []
            },
            "replyPlay": {
                "randomNumbers": [
                    250239,
                    1277,
                    6947400,
                    35,
                    21,
                    4514,
                    13660,
                    3685259,
                    53688,
                    78,
                    4218,
                    1577,
                    950536,
                    1403,
                    12,
                    2590,
                    5717,
                    8458173,
                    1605,
                    48,
                    39441,
                    1987,
                    6427701,
                    8242,
                    55,
                    11408,
                    4926,
                    1102828,
                    73766,
                    28,
                    7497,
                    7125,
                    1660539,
                    27608,
                    86,
                    4806,
                    6,
                    3674579,
                    0,
                    14,
                    7548,
                    9684,
                    4406954,
                    64444,
                    30446,
                    138,
                    2523378,
                    5,
                    37463,
                    305,
                    294115,
                    0
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
                                                12,
                                                6,
                                                6,
                                                6,
                                                13,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                13,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                1,
                                                13,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                11,
                                                11,
                                                11,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                7,
                                                10,
                                                10,
                                                10,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                13,
                                                4,
                                                4,
                                                6,
                                                6,
                                                3
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
                                        4,
                                        2,
                                        4,
                                        3,
                                        3,
                                        6,
                                        1
                                    ],
                                    "type": 9,
                                    "lineIndex": -1,
                                    "symbol": 13,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
                                    "otherMul": 0,
                                    "wilds": 0,
                                    "symbolNums": 4,
                                    "value": 10
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "bg-spin",
                                    "bg-blue",
                                    "bg-red",
                                    "bg-green",
                                    "bg-fgtrigger"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
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
                                        "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                                    },
                                    "bg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-fgtrigger": {
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
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                7,
                                                12,
                                                12,
                                                12,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                5,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                9,
                                                9,
                                                9,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                4,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                1,
                                                1,
                                                1,
                                                11,
                                                11,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                7,
                                                7,
                                                9,
                                                9,
                                                9,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                1,
                                                1,
                                                1,
                                                13,
                                                4,
                                                4
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
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
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
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
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                8,
                                                8,
                                                8,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                12,
                                                12,
                                                12,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                12,
                                                12,
                                                12,
                                                1,
                                                1,
                                                1
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
                                        1,
                                        1,
                                        1,
                                        2,
                                        1,
                                        3,
                                        2,
                                        0,
                                        2,
                                        1,
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
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 8,
                                    "coinWin": 8,
                                    "cashWin": 80,
                                    "otherMul": 1,
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
                                    "fg-start",
                                    "fg-spin",
                                    "fg-blue",
                                    "fg-payred",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
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
                                        "lastRespinNum": 8,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-payred": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 8,
                                            "cashWin": 80,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 11,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 8,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-red": {
                                        "val": 11,
                                        "newCollector": 11,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
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
                                        "removedNum": 11,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
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
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                12,
                                                12,
                                                12,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                12,
                                                12,
                                                12,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                12,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                12,
                                                12,
                                                12,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                -1,
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                1
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
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2,
                                        4,
                                        5,
                                        4,
                                        6,
                                        6,
                                        1,
                                        6,
                                        2,
                                        6,
                                        3
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-greeneffect": {
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
                                    "fg-red": {
                                        "val": 11,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 2,
                                            "cashWin": 20,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 8,
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
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "curRespinNum": 1,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-piggybank": {
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
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-blueeffect": {
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                -1,
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                4,
                                                4,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                11,
                                                11,
                                                11,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                4,
                                                4,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                1,
                                                1,
                                                1
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
                                        1,
                                        4,
                                        1,
                                        5,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        5,
                                        4,
                                        6,
                                        5,
                                        4,
                                        5,
                                        5
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 4,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-dropdown": {
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
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 2,
                                            "cashWin": 20,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-blue": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    },
                                    "fg-piggybank": {
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
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                    "fg-red": {
                                        "val": 11,
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
                                        "totalCoinWin": 0,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                        "coinWin": 12,
                        "cashWin": 120,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                6,
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                2,
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                9,
                                                2,
                                                2,
                                                2,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                11,
                                                11,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                1,
                                                1,
                                                1
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
                                                6,
                                                5,
                                                5,
                                                7,
                                                7,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                2,
                                                2,
                                                2,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                3,
                                                3,
                                                3,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                5,
                                                7,
                                                7,
                                                7,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                8,
                                                8,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                10,
                                                10,
                                                10,
                                                11,
                                                11,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                1,
                                                1,
                                                1
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 12,
                                    "cashWin": 120,
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
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
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
                                        "curRespinNum": 2,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 12,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 12,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                    "fg-blue": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-red": {
                                        "val": 11,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 12,
                                            "cashWin": 120,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 12,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                1,
                                                1,
                                                8,
                                                8,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                1,
                                                1,
                                                1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                7,
                                                6,
                                                6,
                                                1,
                                                1,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                9,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                2,
                                                2,
                                                8,
                                                8,
                                                2,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                10,
                                                9,
                                                9,
                                                9,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                3,
                                                3,
                                                4,
                                                4,
                                                4,
                                                12
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
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
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 12,
                                            "cashWin": 120,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 12,
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
                                        "totalCoinWin": 12,
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                5,
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                8,
                                                8,
                                                8,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                8,
                                                8,
                                                8,
                                                5,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                1,
                                                4,
                                                4,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                7,
                                                7,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                6,
                                                6,
                                                3,
                                                3,
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
                                                5,
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                -1,
                                                -1,
                                                -1,
                                                5,
                                                5,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                1,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                7,
                                                7,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                6,
                                                6,
                                                3,
                                                3,
                                                -1,
                                                -1
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
                                        1,
                                        2,
                                        1,
                                        3,
                                        1,
                                        4,
                                        2,
                                        1,
                                        2,
                                        2,
                                        2,
                                        3,
                                        2,
                                        6,
                                        3,
                                        5,
                                        3,
                                        6,
                                        6,
                                        5,
                                        6,
                                        6
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 8,
                                    "coinWin": 8,
                                    "cashWin": 80,
                                    "otherMul": 1,
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
                                    "fg-start",
                                    "fg-spin",
                                    "fg-blue",
                                    "fg-payred",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
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
                                        "curRespinNum": 3,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 12,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-remove": {
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
                                        "removedNum": 11,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 12,
                                            "cashWin": 120,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 12,
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
                                    "fg-payred": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 16,
                                            "cashWin": 160,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 11,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 8,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-red": {
                                        "val": 11,
                                        "newCollector": 11,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                        "coinWin": 8,
                        "cashWin": 80,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                -1,
                                                -1,
                                                -1,
                                                5,
                                                5,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                1,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                7,
                                                7,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                6,
                                                6,
                                                3,
                                                3,
                                                -1,
                                                -1
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
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                9,
                                                9,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                1,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                7,
                                                7,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                3,
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
                                                7,
                                                7,
                                                11,
                                                11,
                                                11,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                9,
                                                9,
                                                9,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                5,
                                                5,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                13,
                                                1,
                                                1,
                                                1,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                7,
                                                7,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                6,
                                                6,
                                                6,
                                                3,
                                                3
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 8,
                                    "cashWin": 80,
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
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 8,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-red": {
                                        "val": 11,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                3,
                                                3,
                                                3,
                                                2,
                                                2,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                2,
                                                2,
                                                2,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                7,
                                                7,
                                                7,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                7,
                                                7,
                                                5,
                                                5,
                                                5,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                3,
                                                3,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                13,
                                                9,
                                                9,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                11,
                                                11,
                                                11,
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
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
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 20,
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
                                        "lastRespinNum": 5,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 20,
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
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                2,
                                                12,
                                                12,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                5,
                                                5,
                                                5,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                2,
                                                2,
                                                12,
                                                12,
                                                13
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                3,
                                                3,
                                                10,
                                                10,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                6,
                                                6,
                                                6,
                                                5,
                                                5,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                6,
                                                6,
                                                3,
                                                3,
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
                            "results": [
                                {
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
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
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 20,
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
                                        "lastRespinNum": 4,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 20,
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                4,
                                                6,
                                                6,
                                                6,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                12,
                                                12,
                                                12,
                                                4,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                12,
                                                12,
                                                12,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                10,
                                                12,
                                                12,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                5,
                                                5,
                                                4,
                                                4,
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
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                10,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                5,
                                                5,
                                                -1,
                                                -1,
                                                -1
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
                                        5,
                                        0,
                                        6,
                                        1,
                                        0,
                                        1,
                                        4,
                                        1,
                                        5,
                                        1,
                                        6,
                                        2,
                                        5,
                                        2,
                                        6,
                                        6,
                                        4,
                                        6,
                                        5,
                                        6,
                                        6
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 4,
                                    "mul": 20,
                                    "coinWin": 20,
                                    "cashWin": 200,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 13,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        1,
                                        1,
                                        1,
                                        2,
                                        1,
                                        3,
                                        2,
                                        2,
                                        2,
                                        3,
                                        2,
                                        4,
                                        3,
                                        3,
                                        3,
                                        4
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-start",
                                    "fg-spin",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 8,
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 20,
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
                                    "fg-blue": {
                                        "val": 13,
                                        "newCollector": 13,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 4,
                                            "cashWin": 40,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 22,
                                            "cashWin": 220,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 13,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 20,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-remove": {
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
                                        "removedNum": 21,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                10,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                5,
                                                5,
                                                -1,
                                                -1,
                                                -1
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
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                11,
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
                                                3,
                                                3,
                                                3,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                            "otherScenes": [],
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
                                        3,
                                        0,
                                        3,
                                        1,
                                        5,
                                        0,
                                        5,
                                        1
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 3,
                                    "mul": 5,
                                    "coinWin": 5,
                                    "cashWin": 50,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
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
                                        "curRespinNum": 5,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                        "queue": 1,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 27,
                                            "cashWin": 270,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 5,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-blue": {
                                        "val": 1,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                                                7,
                                                10,
                                                10,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                                                7,
                                                10,
                                                10,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                11,
                                                11,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                0,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                11,
                                                11,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                11,
                                                11,
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
                                                7,
                                                -1,
                                                -1,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                -1,
                                                -1,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                -1,
                                                -1,
                                                -1,
                                                5,
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
                                        1,
                                        0,
                                        2,
                                        2,
                                        4,
                                        2,
                                        5,
                                        2,
                                        6,
                                        3,
                                        2,
                                        3,
                                        3,
                                        3,
                                        4
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 10,
                                    "mul": 20,
                                    "coinWin": 20,
                                    "cashWin": 200,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 8,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        1,
                                        1,
                                        1,
                                        2,
                                        3,
                                        2,
                                        4,
                                        2,
                                        4,
                                        3,
                                        6,
                                        2,
                                        6,
                                        3,
                                        6,
                                        4
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 5,
                                    "coinWin": 5,
                                    "cashWin": 50,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-addw",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-blueeffect": {
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
                                    "fg-dropdown": {
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
                                    "fg-greeneffect": {
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
                                        "queue": 1,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 29,
                                            "cashWin": 290,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 16,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 25,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-addw": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                    "fg-blue": {
                                        "val": 2,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 1,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                4
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
                                        "removedNum": 15,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "curRespinNum": 6,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-green": {
                                        "val": 5,
                                        "newCollector": 17,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                7,
                                                -1,
                                                -1,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                4,
                                                4,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                1,
                                                1,
                                                -1,
                                                -1,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                -1,
                                                -1,
                                                -1,
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
                                                -1,
                                                -1,
                                                7,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                3,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                8,
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
                                                7,
                                                7,
                                                7,
                                                4,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                3,
                                                5,
                                                5,
                                                5,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                8,
                                                8,
                                                2,
                                                2,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                2,
                                                2,
                                                2,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                1,
                                                1,
                                                1,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                8,
                                                8,
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
                                                7,
                                                7,
                                                7,
                                                12,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                5,
                                                5,
                                                5,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                8,
                                                8,
                                                10,
                                                10,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                9,
                                                9,
                                                9,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                8,
                                                8,
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
                                                7,
                                                7,
                                                7,
                                                12,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                5,
                                                5,
                                                5,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                9,
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                -1,
                                                5,
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
                                        2,
                                        1,
                                        2,
                                        2,
                                        4,
                                        4,
                                        4,
                                        5,
                                        4,
                                        6,
                                        6,
                                        2,
                                        6,
                                        3,
                                        6,
                                        4
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-greenbranch",
                                    "fg-blue2green",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-payred",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-greenbranch": {
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
                                        "value": "blue to  green",
                                        "@type": "type.googleapis.com/sgc7pb.WeightBranchData"
                                    },
                                    "fg-blue": {
                                        "val": 2,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 9,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                4
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 20,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-greeneffect": {
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
                                    "fg-green": {
                                        "val": 5,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-blueeffect": {
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
                                    "fg-dropdown": {
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
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-blue2green": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                    "fg-payred": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 18,
                                            "cashWin": 180,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                        "coinWin": 54,
                        "cashWin": 540,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                7,
                                                7,
                                                7,
                                                12,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                5,
                                                5,
                                                5,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                -1,
                                                -1,
                                                10,
                                                10,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                13,
                                                9,
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                -1,
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
                                                7,
                                                7,
                                                12,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                5,
                                                5,
                                                5,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                10,
                                                10,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                13,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                11,
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
                                                7,
                                                7,
                                                7,
                                                12,
                                                6,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                11,
                                                5,
                                                5,
                                                5,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                10,
                                                10,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                5,
                                                10,
                                                10,
                                                10,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                4,
                                                4,
                                                13,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                7,
                                                7,
                                                13,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                2,
                                                11,
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
                            "otherScenes": [],
                            "results": [
                                {
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 54,
                                    "cashWin": 540,
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
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-red": {
                                        "val": 9,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 5,
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
                                        "lastRespinNum": 3,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 7,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                    "fg-blue": {
                                        "val": 2,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 54,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                11,
                                                11,
                                                8,
                                                8,
                                                8,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                4,
                                                6,
                                                6,
                                                6,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                10,
                                                10,
                                                4,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                6,
                                                6,
                                                10,
                                                10,
                                                12,
                                                12,
                                                2
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                2,
                                                2,
                                                2,
                                                12,
                                                12,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                12,
                                                12,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                8,
                                                8,
                                                8,
                                                2,
                                                2
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 0,
                                    "cashWin": 0,
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
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-blueeffect": {
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
                                    "fg-greeneffect": {
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 0,
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
                                        "lastRespinNum": 2,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 8,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-red": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                4,
                                                4,
                                                4,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                8,
                                                8,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                4,
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                6,
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                3,
                                                3,
                                                12,
                                                12,
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
                                                6,
                                                6,
                                                4,
                                                4,
                                                4,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                4,
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                6,
                                                6,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                3,
                                                3,
                                                12,
                                                12,
                                                -1
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
                                        1,
                                        4,
                                        1,
                                        5,
                                        1,
                                        6,
                                        3,
                                        6,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2,
                                        6,
                                        6
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-start",
                                    "fg-spin",
                                    "fg-blue",
                                    "fg-payred",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
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
                                    "fg-green": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 74,
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-payred": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 20,
                                            "cashWin": 200,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-blueeffect": {
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
                                    "fg-greeneffect": {
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                4,
                                                4,
                                                4,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                4,
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                12,
                                                12,
                                                6,
                                                6,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                9,
                                                3,
                                                3,
                                                12,
                                                12,
                                                -1
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
                                                6,
                                                4,
                                                4,
                                                4,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                4,
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                2,
                                                2,
                                                12,
                                                12,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                9,
                                                9,
                                                3,
                                                3,
                                                12,
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
                                                6,
                                                6,
                                                4,
                                                4,
                                                4,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                4,
                                                4,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                2,
                                                2,
                                                12,
                                                12,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                12,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                9,
                                                9,
                                                3,
                                                3,
                                                12,
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
                                                6,
                                                6,
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                9,
                                                9,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                9,
                                                9,
                                                3,
                                                3,
                                                -1,
                                                -1
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
                                        2,
                                        0,
                                        3,
                                        0,
                                        4,
                                        1,
                                        0,
                                        2,
                                        3,
                                        2,
                                        4,
                                        3,
                                        0,
                                        4,
                                        3,
                                        4,
                                        4
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 4,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 9,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        3,
                                        3,
                                        3,
                                        4,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2,
                                        4,
                                        5,
                                        4,
                                        6,
                                        6,
                                        5,
                                        6,
                                        6
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 9,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 31,
                                            "cashWin": 310,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 9,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-green": {
                                        "val": 9,
                                        "newCollector": 9,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 18,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-blueeffect": {
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
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 29,
                                            "cashWin": 290,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 9,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-greeneffect": {
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
                                    "fg-blue": {
                                        "val": 9,
                                        "newCollector": 9,
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
                                        "lastRespinNum": 1,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 9,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                6,
                                                6,
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                9,
                                                9,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                -1,
                                                -1,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                2,
                                                2,
                                                -1,
                                                -1,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                7,
                                                9,
                                                9,
                                                3,
                                                3,
                                                -1,
                                                -1
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
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                9,
                                                9,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                7,
                                                9,
                                                9,
                                                3,
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
                                                4,
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                9,
                                                3,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                9,
                                                9,
                                                3,
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
                                                4,
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                4,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                9,
                                                9,
                                                -1,
                                                -1
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
                                        1,
                                        4,
                                        1,
                                        5,
                                        1,
                                        6,
                                        2,
                                        0,
                                        2,
                                        1,
                                        3,
                                        0,
                                        6,
                                        5,
                                        6,
                                        6
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 3,
                                    "mul": 5,
                                    "coinWin": 5,
                                    "cashWin": 50,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-dropdown": {
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
                                    "fg-blueeffect": {
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
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 34,
                                            "cashWin": 340,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 5,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
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
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-blue": {
                                        "val": 17,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 9,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                4,
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                9,
                                                9,
                                                9,
                                                -1,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                4,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                7,
                                                7,
                                                9,
                                                9,
                                                -1,
                                                -1
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
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                4,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                4,
                                                4,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                4,
                                                4,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                -1,
                                                -1,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                        1,
                                        2,
                                        1,
                                        3,
                                        2,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        2,
                                        4,
                                        3
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 4,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 9,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-blueeffect": {
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
                                        "queue": 1,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-blue": {
                                        "val": 6,
                                        "newCollector": 9,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 9,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 74,
                                            "cashWin": 740,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 0,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 74,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 36,
                                            "cashWin": 360,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 9,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-green": {
                                        "val": 9,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                        "coinWin": 13,
                        "cashWin": 130,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                -1,
                                                -1,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                -1,
                                                -1,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                12,
                                                12,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                3,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                8,
                                                8,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                                3,
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                12,
                                                12,
                                                12,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                3,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                8,
                                                8,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                                3,
                                                4,
                                                6,
                                                6,
                                                6,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                12,
                                                12,
                                                12,
                                                9,
                                                9,
                                                9
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                3,
                                                11,
                                                11,
                                                11,
                                                5,
                                                5
                                            ]
                                        },
                                        {
                                            "values": [
                                                0,
                                                4,
                                                3,
                                                2,
                                                2,
                                                6,
                                                6
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                10,
                                                8,
                                                8,
                                                11,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                7,
                                                7,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                7,
                                                9,
                                                9
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
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 13,
                                    "cashWin": 130,
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
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-addw",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [
                                    "fg-start"
                                ],
                                "mapComponents": {
                                    "fg-dropdown": {
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
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-blueeffect": {
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
                                    "fg-addw": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                    "fg-blue": {
                                        "val": 7,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 10,
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
                                        "curRespinNum": 12,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-greeneffect": {
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
                                    "fg-red": {
                                        "val": 9,
                                        "newCollector": 1,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 87,
                                            "cashWin": 870,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 13,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                4,
                                                4,
                                                7,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                8,
                                                8,
                                                8,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                12,
                                                3,
                                                3,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                4,
                                                4,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                8,
                                                8,
                                                8,
                                                4,
                                                4,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                12,
                                                12,
                                                12,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                4,
                                                7,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                        1,
                                        1,
                                        1,
                                        2,
                                        1,
                                        3,
                                        3,
                                        0,
                                        3,
                                        1,
                                        4,
                                        1,
                                        4,
                                        2,
                                        4,
                                        3
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 8,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 8,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        2,
                                        0,
                                        2,
                                        1,
                                        2,
                                        2,
                                        4,
                                        0,
                                        4,
                                        6,
                                        5,
                                        1,
                                        5,
                                        2,
                                        5,
                                        3
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-start",
                                    "fg-spin",
                                    "fg-blue",
                                    "fg-payred",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-remove": {
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
                                        "removedNum": 16,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 87,
                                            "cashWin": 870,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 13,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-payred": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 22,
                                            "cashWin": 220,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 33,
                                            "cashWin": 330,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-green": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-blueeffect": {
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
                                    "fg-greeneffect": {
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
                                    "fg-blue": {
                                        "val": 0,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 8,
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
                                        "curRespinNum": 12,
                                        "curAddRespinNum": 1,
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                4,
                                                4,
                                                7,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                3,
                                                -1,
                                                -1,
                                                -1,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                4,
                                                7,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                3,
                                                3,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                4,
                                                4,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                4,
                                                7,
                                                7,
                                                7,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                2,
                                                3,
                                                3,
                                                11,
                                                11
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                4,
                                                4,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                11,
                                                11,
                                                11,
                                                12,
                                                12,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                2,
                                                3,
                                                3,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                12,
                                                12,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                        3,
                                        2,
                                        3,
                                        3,
                                        4,
                                        5,
                                        4,
                                        6,
                                        5,
                                        0,
                                        5,
                                        1
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 4,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 8,
                                    "value": 0
                                },
                                {
                                    "pos": [
                                        0,
                                        5,
                                        0,
                                        6,
                                        2,
                                        5,
                                        2,
                                        6,
                                        3,
                                        0,
                                        3,
                                        1,
                                        4,
                                        0,
                                        4,
                                        1,
                                        4,
                                        2
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 11,
                                    "mul": 5,
                                    "coinWin": 5,
                                    "cashWin": 50,
                                    "otherMul": 1,
                                    "wilds": 0,
                                    "symbolNums": 9,
                                    "value": 0
                                }
                            ],
                            "mulPos": [],
                            "prizeScenes": [],
                            "curGameMod": "basic",
                            "curGameModParam": {
                                "historyComponents": [
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-payblue",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-dropdown": {
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
                                    "fg-blueeffect": {
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
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 38,
                                            "cashWin": 380,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 9,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 5,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 87,
                                            "cashWin": 870,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 13,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-payblue": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 38,
                                            "cashWin": 380,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
                                        "winMulti": 1,
                                        "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                    },
                                    "fg-blue": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-greeneffect": {
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
                                    "fg-green": {
                                        "val": 17,
                                        "newCollector": 9,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 17,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                2,
                                                2,
                                                2,
                                                3,
                                                3,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                12,
                                                12,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                -1,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                12,
                                                12,
                                                11,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                8,
                                                8,
                                                4,
                                                4,
                                                12,
                                                12
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                11,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                8,
                                                8,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                        2,
                                        0,
                                        2,
                                        1,
                                        3,
                                        0,
                                        3,
                                        1,
                                        3,
                                        2,
                                        4,
                                        5,
                                        4,
                                        6,
                                        5,
                                        0
                                    ],
                                    "type": 1,
                                    "lineIndex": -1,
                                    "symbol": 12,
                                    "mul": 2,
                                    "coinWin": 2,
                                    "cashWin": 20,
                                    "otherMul": 1,
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
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-paygreen",
                                    "fg-green",
                                    "fg-remove"
                                ],
                                "respinComponents": [
                                    "fg-start",
                                    "fg-respin"
                                ],
                                "mapComponents": {
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-green": {
                                        "val": 5,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-remove": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                        "removedNum": 8,
                                        "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-dropdown": {
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
                                    },
                                    "fg-greeneffect": {
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
                                        "queue": 1,
                                        "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                    },
                                    "fg-blue": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 87,
                                            "cashWin": 870,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "wins": 13,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-blueeffect": {
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
                                    "fg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 40,
                                            "cashWin": 400,
                                            "targetScene": 0,
                                            "runIndex": 0,
                                            "output": 0,
                                            "strOutput": ""
                                        },
                                        "nextComponent": "",
                                        "symbolNum": 8,
                                        "wildNum": 0,
                                        "respinNum": 0,
                                        "wins": 2,
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
                                        "lastRespinNum": 0,
                                        "totalRespinNum": 0,
                                        "curRespinNum": 10,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 87,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
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
                        "coinWin": 13,
                        "cashWin": 130,
                        "clientData": {
                            "scenes": [
                                {
                                    "values": [
                                        {
                                            "values": [
                                                6,
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                11,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                10,
                                                8,
                                                8,
                                                4,
                                                4,
                                                -1,
                                                -1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                -1,
                                                11,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                -1,
                                                10,
                                                8,
                                                8,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                -1,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                9,
                                                12,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                11,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                10,
                                                10,
                                                8,
                                                8,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                12,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
                                                5,
                                                5,
                                                9
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
                                                6,
                                                6,
                                                4,
                                                7,
                                                7,
                                                7
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                3,
                                                3,
                                                3,
                                                1,
                                                1,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                8,
                                                2,
                                                2,
                                                2,
                                                3,
                                                3
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                8,
                                                8,
                                                7,
                                                6,
                                                6,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                4,
                                                6,
                                                6,
                                                8,
                                                8,
                                                4,
                                                4
                                            ]
                                        },
                                        {
                                            "values": [
                                                8,
                                                4,
                                                2,
                                                2,
                                                2,
                                                2,
                                                1
                                            ]
                                        },
                                        {
                                            "values": [
                                                5,
                                                7,
                                                7,
                                                7,
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
                            "otherScenes": [],
                            "results": [
                                {
                                    "pos": [],
                                    "type": 8,
                                    "lineIndex": -1,
                                    "symbol": -1,
                                    "mul": 0,
                                    "coinWin": 13,
                                    "cashWin": 130,
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
                                    "fg-respin",
                                    "fg-dropdown",
                                    "fg-refill",
                                    "fg-greeneffect",
                                    "fg-greenbranch",
                                    "fg-green2red",
                                    "fg-blueeffect",
                                    "fg-blue",
                                    "fg-red",
                                    "fg-green",
                                    "fg-piggybank"
                                ],
                                "respinComponents": [],
                                "mapComponents": {
                                    "fg-dropdown": {
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
                                    "fg-refill": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                2
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
                                    "fg-blue": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-red": {
                                        "val": 8,
                                        "newCollector": 0,
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
                                        "curRespinNum": 15,
                                        "curAddRespinNum": 0,
                                        "totalCoinWin": 100,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "fg-greenbranch": {
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
                                        "value": "green to red",
                                        "@type": "type.googleapis.com/sgc7pb.WeightBranchData"
                                    },
                                    "fg-green2red": {
                                        "basicComponentData": {
                                            "usedScenes": [
                                                3
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
                                    "fg-blueeffect": {
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
                                    "fg-green": {
                                        "val": 5,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "fg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
                                                0,
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
                                        "wins": 13,
                                        "winMulti": 1,
                                        "savedMoney": 0,
                                        "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                    },
                                    "fg-greeneffect": {
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
                                    "1": 7,
                                    "2": 7,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "fg-respin",
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
                        "curGameMod": "basic",
                        "nextM": 0,
                        "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState"
                    }
                },
                "finished": true,
                "stake": null,
                "playStartTime": 1718765170874
            },
            "playIndex": -1,
            "bet": 10,
            "lines": 10,
            "totalwin": 1000,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statedata, statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 25) {
            expect(logic.curStates.length).toBe(6);
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