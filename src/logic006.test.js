const { SCLogicMgr } = require('./logicmgr.js');
const { parseSlotCraftJson } = require('./utils.js');

test('logic test 006', () => {
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
                "fg-start"
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
        "fg-fgtrigger"
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
                    272374,
                    2808,
                    3524459,
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
                                    "bg-spin",
                                    "bg-blue",
                                    "bg-payred",
                                    "bg-red",
                                    "bg-paygreen",
                                    "bg-green",
                                    "bg-remove"
                                ],
                                "respinComponents": [
                                    "bg-respin"
                                ],
                                "mapComponents": {
                                    "bg-payred": {
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
                                    "bg-red": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-remove": {
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
                                    "bg-blueeffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-respin": {
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
                                    "bg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
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
                                    "bg-green": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                "firstComponent": "",
                                "nextStepFirstComponent": "bg-respin",
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
                                    "bg-respin",
                                    "bg-dropdown",
                                    "bg-refill",
                                    "bg-greeneffect",
                                    "bg-blueeffect",
                                    "bg-payblue",
                                    "bg-blue",
                                    "bg-red",
                                    "bg-paygreen",
                                    "bg-green",
                                    "bg-remove"
                                ],
                                "respinComponents": [
                                    "bg-respin"
                                ],
                                "mapComponents": {
                                    "bg-respin": {
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
                                    "bg-dropdown": {
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
                                    "bg-greeneffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-blueeffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-payblue": {
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
                                    "bg-remove": {
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
                                    "bg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-refill": {
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
                                    "bg-blue": {
                                        "val": 8,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                1
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 7,
                                            "cashWin": 70,
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
                                    "bg-green": {
                                        "val": 17,
                                        "newCollector": 9,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "bg-respin",
                                "nextStepFirstComponent": "bg-respin",
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
                                    "bg-respin",
                                    "bg-dropdown",
                                    "bg-refill",
                                    "bg-greeneffect",
                                    "bg-blueeffect",
                                    "bg-blue",
                                    "bg-red",
                                    "bg-paygreen",
                                    "bg-green",
                                    "bg-remove"
                                ],
                                "respinComponents": [
                                    "bg-respin"
                                ],
                                "mapComponents": {
                                    "bg-respin": {
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
                                    "bg-dropdown": {
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
                                    "bg-refill": {
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
                                    "bg-blueeffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-blue": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-paygreen": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 9,
                                            "cashWin": 90,
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
                                    "bg-remove": {
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
                                    "bg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-greeneffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-green": {
                                        "val": 5,
                                        "newCollector": 8,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    }
                                },
                                "mapVals": {
                                    "1": 7,
                                    "2": 7,
                                    "7": 0
                                },
                                "mapStrVals": {},
                                "firstComponent": "bg-respin",
                                "nextStepFirstComponent": "bg-respin",
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
                                    "bg-respin",
                                    "bg-dropdown",
                                    "bg-refill",
                                    "bg-greeneffect",
                                    "bg-greenbranch",
                                    "bg-green2red",
                                    "bg-blueeffect",
                                    "bg-blue",
                                    "bg-red",
                                    "bg-green",
                                    "bg-piggybank"
                                ],
                                "respinComponents": [],
                                "mapComponents": {
                                    "bg-respin": {
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
                                        "totalCoinWin": 13,
                                        "totalCashWin": 0,
                                        "retriggerAddRespinNum": 0,
                                        "lastTriggerNum": 0,
                                        "curTriggerNum": 0,
                                        "@type": "type.googleapis.com/sgc7pb.RespinData"
                                    },
                                    "bg-greeneffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-green2red": {
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
                                    "bg-blueeffect": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-blue": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-piggybank": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [
                                                0
                                            ],
                                            "usedPrizeScenes": [],
                                            "srcScenes": [],
                                            "coinWin": 13,
                                            "cashWin": 130,
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
                                    "bg-dropdown": {
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
                                    "bg-refill": {
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
                                    "bg-greenbranch": {
                                        "basicComponentData": {
                                            "usedScenes": [],
                                            "usedOtherScenes": [],
                                            "usedResults": [],
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
                                    "bg-red": {
                                        "val": 8,
                                        "newCollector": 0,
                                        "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                    },
                                    "bg-green": {
                                        "val": 5,
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
                                "firstComponent": "bg-respin",
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
                "playStartTime": 1718703346990
            },
            "playIndex": -1,
            "bet": 10,
            "lines": 10,
            "totalwin": 130,
            "playwin": 0,
            "maxWinLimit": 0
        }
    };

    logic.onConfig(gamecfg, statedata, statelist);

    let stepIndex = 0;
    let onBegin = (data) => {
        if (stepIndex == 3) {
            expect(logic.curStates.length).toBe(5);
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