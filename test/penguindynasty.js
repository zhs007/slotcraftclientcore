const { SCLogicMgr } = require('../src/index.js');

let Logic = {};
Logic.instance = new SCLogicMgr();

let cfgdata = {
    "10": {
        "Components": [
            {
                "config": {
                    "defaultNextComponent": "bg-payblue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "basicReels",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "reelSetWeight": "",
                    "reelSet": "output",
                    "isExpandReel": false
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-blue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "BH",
                        "BM",
                        "BM2",
                        "BL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "piggyBank",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "winMulti": 1
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-payred",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "RH",
                        "RM",
                        "RM2",
                        "RL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "GH",
                        "GM",
                        "GM2",
                        "GL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "removeSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-respin",
                    "targetComponents": [
                        "bg-payblue",
                        "bg-payred",
                        "bg-paygreen"
                    ],
                    "ignoreSymbols": null,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "respin",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "mainComponent": "bg-dropdown"
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-refill",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "dropDownSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "holdSymbols": null
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-blueeffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "refillSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "queueBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-bluebranch"
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "queueBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-addwl"
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-payblue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "addSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbol": "WL",
                    "symbolNum": 2,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "SC"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "respin",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "mainComponent": ""
                }
            },
            {
                "config": {
                    "defaultNextComponent": "",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "weightBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "weight": "greenweight",
                    "mapBranchs": {
                        "green to red": {
                            "awards": null,
                            "jumpToComponent": "bg-greed2red"
                        },
                        "green to blue": {
                            "awards": null,
                            "jumpToComponent": "bg-green2blue"
                        },
                        "red to green": {
                            "awards": null,
                            "jumpToComponent": "bg-red2green"
                        },
                        "red to blue": {
                            "awards": null,
                            "jumpToComponent": "bg-red2blue"
                        },
                        "blue to red": {
                            "awards": null,
                            "jumpToComponent": "bg-blue2red"
                        },
                        "blue to  green": {
                            "awards": null,
                            "jumpToComponent": "bg-blue2green"
                        }
                    }
                }
            },
            {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            }
        ],
        "MapComponents": {
            "bg-blue2green": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-red2blue": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-respin": {
                "config": {
                    "defaultNextComponent": "",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "respin",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "mainComponent": "bg-dropdown"
                }
            },
            "bg-dropdown": {
                "config": {
                    "defaultNextComponent": "bg-refill",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "dropDownSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "holdSymbols": null
                }
            },
            "bg-blue": {
                "config": {
                    "defaultNextComponent": "bg-payred",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-paygreen": {
                "config": {
                    "defaultNextComponent": "bg-green",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "GH",
                        "GM",
                        "GM2",
                        "GL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
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
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "queueBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-bluebranch"
                }
            },
            "bg-greed2red": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-green2blue": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-payblue": {
                "config": {
                    "defaultNextComponent": "bg-blue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "BH",
                        "BM",
                        "BM2",
                        "BL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
                    "isAddRespinMode": false,
                    "respinComponent": "",
                    "respinNum": 0,
                    "respinNumWeight": "",
                    "respinNumWithScatterNum": null,
                    "respinNumWeightWithScatterNum": null
                }
            },
            "bg-piggybank": {
                "config": {
                    "defaultNextComponent": "fg-start",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "piggyBank",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "winMulti": 1
                }
            },
            "bg-red2green": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "bg-blue2red": {
                "config": {
                    "defaultNextComponent": "bg-greeneffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "replaceSymbolGroup",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            "fg-start": {
                "config": {
                    "defaultNextComponent": "",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "respin",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "mainComponent": ""
                }
            },
            "bg-bluebranch": {
                "config": {
                    "defaultNextComponent": "",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "weightBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "weight": "greenweight",
                    "mapBranchs": {
                        "green to blue": {
                            "awards": null,
                            "jumpToComponent": "bg-green2blue"
                        },
                        "red to green": {
                            "awards": null,
                            "jumpToComponent": "bg-red2green"
                        },
                        "red to blue": {
                            "awards": null,
                            "jumpToComponent": "bg-red2blue"
                        },
                        "blue to red": {
                            "awards": null,
                            "jumpToComponent": "bg-blue2red"
                        },
                        "blue to  green": {
                            "awards": null,
                            "jumpToComponent": "bg-blue2green"
                        },
                        "green to red": {
                            "awards": null,
                            "jumpToComponent": "bg-greed2red"
                        }
                    }
                }
            },
            "bg-spin": {
                "config": {
                    "defaultNextComponent": "bg-payblue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "basicReels",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "reelSetWeight": "",
                    "reelSet": "output",
                    "isExpandReel": false
                }
            },
            "bg-refill": {
                "config": {
                    "defaultNextComponent": "bg-blueeffect",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "refillSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false
                }
            },
            "bg-remove": {
                "config": {
                    "defaultNextComponent": "bg-fgtrigger",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "removeSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-respin",
                    "targetComponents": [
                        "bg-payblue",
                        "bg-payred",
                        "bg-paygreen"
                    ],
                    "ignoreSymbols": null,
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
            "bg-greeneffect": {
                "config": {
                    "defaultNextComponent": "bg-payblue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "queueBranch",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "jumpToComponent": "bg-addwl"
                }
            },
            "bg-addwl": {
                "config": {
                    "defaultNextComponent": "bg-payblue",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "addSymbols",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbol": "WL",
                    "symbolNum": 2,
                    "symbolNumWeight": "",
                    "ignoreSymbols": [
                        "WL",
                        "SC"
                    ]
                }
            },
            "bg-fgtrigger": {
                "config": {
                    "defaultNextComponent": "bg-piggybank",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "SC"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
                    "isAddRespinMode": true,
                    "respinComponent": "fg-start",
                    "respinNum": 10,
                    "respinNumWeight": "",
                    "respinNumWithScatterNum": null,
                    "respinNumWeightWithScatterNum": null
                }
            },
            "bg-payred": {
                "config": {
                    "defaultNextComponent": "bg-red",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "scatterTrigger",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
                    "symbols": [
                        "RH",
                        "RM",
                        "RM2",
                        "RL"
                    ],
                    "type": "scatters",
                    "betType": "bet",
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
                    "needDiscardResults": false,
                    "isAddRespinMode": false,
                    "respinComponent": "",
                    "respinNum": 0,
                    "respinNumWeight": "",
                    "respinNumWithScatterNum": null,
                    "respinNumWeightWithScatterNum": null
                }
            },
            "bg-green": {
                "config": {
                    "defaultNextComponent": "bg-remove",
                    "tagScenes": null,
                    "tagOtherScenes": null,
                    "targetScene": "",
                    "targetOtherScene": "",
                    "tagGlobalScenes": null,
                    "targetGlobalScene": "",
                    "tagGlobalOtherScenes": null,
                    "targetGlobalOtherScene": "",
                    "scene2Components": null,
                    "otherScene2Components": null,
                    "tagRNG": null,
                    "initStrVals": null,
                    "useFileMapping": false,
                    "componentType": "collector",
                    "useSceneV2": false,
                    "targetScenes3": null,
                    "useSceneV3": true,
                    "isNeedCacheScene3": false,
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
            }
        },
        "Stats2": null
    }
};

let statedata = {
    "bg-spin": { "list": ["bg-spin"], "module": "spinResult", "performance": "" },
    "bg-dropdown": { "list": ["bg-dropdown"], "module": "dropdown", "performance": "" },
    "bg-refill": { "list": ["bg-refill"], "module": "refill", "performance": "" },
    "bg-blueeffect": { "list": ["bg-greed2red", "bg-green2blue", "bg-red2green", "bg-red2blue", "bg-blue2green", "bg-blue2red"], "module": "chgSymbols", "performance": "0" },
    "bg-addwl": { "list": ["bg-addwl"], "module": "chgSymbols", "performance": "1" },
    "bg-payblue": { "list": ["bg-payblue"], "module": "top", "performance": "0" },
    "bg-blue": { "list": ["bg-blue"], "module": "collect", "performance": "0" },
    "bg-payred": { "list": ["bg-payred"], "module": "top", "performance": "1" },
    "bg-red": { "list": ["bg-red"], "module": "collect", "performance": "1" },
    "bg-paygreen": { "list": ["bg-paygreen"], "module": "top", "performance": "2" },
    "bg-green": { "list": ["bg-green"], "module": "collect", "performance": "2" },
    "bg-remove": { "list": ["bg-remove"], "module": "remove", "performance": "" },
    "bg-win": { "list": ["bg-piggybank"], "module": "showWinAni", "performance": "" },
    "bg-fgtrigger": { "list": ["bg-fgtrigger"], "module": "enterFree", "performance": "" }
};

let statelist = ["bg-spin", "bg-dropdown", "bg-refill", "bg-blueeffect", "bg-addwl", "bg-payblue", "bg-blue", "bg-payred", "bg-red", "bg-paygreen", "bg-green", "bg-remove", "bg-win", "bg-fgtrigger"];

Logic.instance.onConfig(cfgdata, statedata, statelist);

let msgdata = {
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
                914847,
                3222,
                4953874,
                5
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
                                            10,
                                            7,
                                            4,
                                            8,
                                            4,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            8,
                                            12,
                                            4,
                                            7,
                                            12,
                                            1,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            4,
                                            12,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            4,
                                            12,
                                            4,
                                            8,
                                            5,
                                            4
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            7,
                                            3,
                                            4,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            7,
                                            -1,
                                            8,
                                            -1,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            8,
                                            12,
                                            -1,
                                            7,
                                            12,
                                            1,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            -1,
                                            12,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            -1,
                                            12,
                                            -1,
                                            8,
                                            5,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            7,
                                            3,
                                            -1,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                    2,
                                    0,
                                    4,
                                    1,
                                    2,
                                    2,
                                    1,
                                    4,
                                    1,
                                    4,
                                    3,
                                    4,
                                    6,
                                    5,
                                    3
                                ],
                                "type": 1,
                                "lineIndex": -1,
                                "symbol": 4,
                                "mul": 5,
                                "coinWin": 5,
                                "cashWin": 5,
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
                                "bg-payblue",
                                "bg-blue",
                                "bg-red",
                                "bg-green",
                                "bg-remove"
                            ],
                            "respinComponents": [
                                "bg-respin"
                            ],
                            "mapComponents": {
                                "bg-green": {
                                    "val": 0,
                                    "newCollector": 0,
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "wins": 0,
                                    "winMulti": 1,
                                    "savedMoney": 0,
                                    "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
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
                                        "coinWin": 5,
                                        "cashWin": 5,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "nextComponent": "",
                                    "symbolNum": 8,
                                    "wildNum": 0,
                                    "respinNum": 0,
                                    "wins": 5,
                                    "winMulti": 1,
                                    "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                },
                                "bg-blue": {
                                    "val": 8,
                                    "newCollector": 8,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-red": {
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
                                            10,
                                            7,
                                            -1,
                                            8,
                                            -1,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            8,
                                            12,
                                            -1,
                                            7,
                                            12,
                                            1,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            -1,
                                            12,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            -1,
                                            12,
                                            -1,
                                            8,
                                            5,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            7,
                                            3,
                                            -1,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            8,
                                            12,
                                            7,
                                            12,
                                            1,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            12,
                                            12,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            -1,
                                            2,
                                            12,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            8,
                                            12,
                                            7,
                                            12,
                                            1,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            3,
                                            12,
                                            12,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            12
                                        ]
                                    },
                                    {
                                        "values": [
                                            4,
                                            2,
                                            3,
                                            2,
                                            12,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            8,
                                            -1,
                                            7,
                                            -1,
                                            1,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            3,
                                            -1,
                                            -1,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            4,
                                            2,
                                            3,
                                            2,
                                            -1,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                    1,
                                    2,
                                    1,
                                    4,
                                    1,
                                    6,
                                    2,
                                    1,
                                    2,
                                    2,
                                    3,
                                    6,
                                    4,
                                    4,
                                    5,
                                    0
                                ],
                                "type": 1,
                                "lineIndex": -1,
                                "symbol": 12,
                                "mul": 5,
                                "coinWin": 5,
                                "cashWin": 5,
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
                                "bg-blueeffect",
                                "bg-greeneffect",
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
                                        "runIndex": 0
                                    },
                                    "wins": 0,
                                    "winMulti": 1,
                                    "savedMoney": 0,
                                    "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "runIndex": 0
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
                                        "runIndex": 0
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
                                        "runIndex": 0
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
                                        "coinWin": 5,
                                        "cashWin": 5,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "nextComponent": "",
                                    "symbolNum": 8,
                                    "wildNum": 0,
                                    "respinNum": 0,
                                    "wins": 5,
                                    "winMulti": 1,
                                    "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                },
                                "bg-green": {
                                    "val": 8,
                                    "newCollector": 8,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                },
                                "bg-red": {
                                    "val": 0,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-remove": {
                                    "basicComponentData": {
                                        "usedScenes": [
                                            1,
                                            3
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
                                            8,
                                            6,
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            8,
                                            -1,
                                            7,
                                            -1,
                                            1,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            3,
                                            -1,
                                            -1,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            4,
                                            2,
                                            3,
                                            2,
                                            -1,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            -1,
                                            2,
                                            8,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            3,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            4,
                                            2,
                                            3,
                                            2,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            8,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            3,
                                            8,
                                            2,
                                            8,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            8,
                                            3,
                                            8,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            8,
                                            2,
                                            3,
                                            8,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            4,
                                            2,
                                            3,
                                            2,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            8,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            -1,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            3,
                                            -1,
                                            2,
                                            -1,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            -1,
                                            3,
                                            -1,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            2,
                                            3,
                                            -1,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            4,
                                            2,
                                            3,
                                            2,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            -1,
                                            10,
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
                                    4,
                                    1,
                                    2,
                                    1,
                                    4,
                                    2,
                                    1,
                                    2,
                                    3,
                                    3,
                                    0,
                                    3,
                                    3,
                                    4,
                                    5,
                                    6,
                                    4
                                ],
                                "type": 1,
                                "lineIndex": -1,
                                "symbol": 8,
                                "mul": 15,
                                "coinWin": 15,
                                "cashWin": 15,
                                "otherMul": 1,
                                "wilds": 0,
                                "symbolNums": 10,
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
                                "bg-blueeffect",
                                "bg-greeneffect",
                                "bg-blue",
                                "bg-payred",
                                "bg-red",
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
                                        "runIndex": 0
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                },
                                "bg-red": {
                                    "val": 10,
                                    "newCollector": 10,
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
                                        "runIndex": 0
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                },
                                "bg-blue": {
                                    "val": 8,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-payred": {
                                    "basicComponentData": {
                                        "usedScenes": [],
                                        "usedOtherScenes": [],
                                        "usedResults": [
                                            0
                                        ],
                                        "usedPrizeScenes": [],
                                        "srcScenes": [],
                                        "coinWin": 15,
                                        "cashWin": 15,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "nextComponent": "",
                                    "symbolNum": 10,
                                    "wildNum": 0,
                                    "respinNum": 0,
                                    "wins": 15,
                                    "winMulti": 1,
                                    "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                },
                                "bg-green": {
                                    "val": 8,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-remove": {
                                    "basicComponentData": {
                                        "usedScenes": [
                                            1,
                                            3,
                                            3
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
                                    "removedNum": 10,
                                    "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                            6,
                                            10,
                                            7,
                                            -1,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            3,
                                            -1,
                                            2,
                                            -1,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            -1,
                                            3,
                                            -1,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            2,
                                            3,
                                            -1,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            4,
                                            2,
                                            3,
                                            2,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            11,
                                            10,
                                            11,
                                            -1,
                                            10,
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
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            11,
                                            3,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            10,
                                            3,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            2,
                                            3,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            2,
                                            4,
                                            2,
                                            3,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            11,
                                            3,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            3,
                                            9,
                                            11,
                                            3,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            4,
                                            10,
                                            3,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            12,
                                            2,
                                            3,
                                            11,
                                            3,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            7,
                                            2,
                                            4,
                                            2,
                                            3,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            3,
                                            10,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            11,
                                            -1,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            9,
                                            11,
                                            -1,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            4,
                                            10,
                                            -1,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            12,
                                            2,
                                            -1,
                                            11,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            7,
                                            2,
                                            4,
                                            2,
                                            -1,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            -1,
                                            10,
                                            2,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                    1,
                                    0,
                                    1,
                                    3,
                                    2,
                                    3,
                                    3,
                                    3,
                                    3,
                                    5,
                                    4,
                                    4,
                                    5,
                                    3,
                                    5,
                                    6
                                ],
                                "type": 1,
                                "lineIndex": -1,
                                "symbol": 3,
                                "mul": 20,
                                "coinWin": 20,
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
                                "bg-respin",
                                "bg-dropdown",
                                "bg-refill",
                                "bg-blueeffect",
                                "bg-greeneffect",
                                "bg-payblue",
                                "bg-blue",
                                "bg-red",
                                "bg-green",
                                "bg-remove"
                            ],
                            "respinComponents": [
                                "bg-respin"
                            ],
                            "mapComponents": {
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
                                        "runIndex": 0
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
                                        "coinWin": 25,
                                        "cashWin": 25,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "nextComponent": "",
                                    "symbolNum": 9,
                                    "wildNum": 0,
                                    "respinNum": 0,
                                    "wins": 20,
                                    "winMulti": 1,
                                    "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                },
                                "bg-red": {
                                    "val": 10,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-green": {
                                    "val": 8,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-remove": {
                                    "basicComponentData": {
                                        "usedScenes": [
                                            1,
                                            3,
                                            3,
                                            3
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
                                    "removedNum": 9,
                                    "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "runIndex": 0
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                },
                                "bg-blue": {
                                    "val": 17,
                                    "newCollector": 9,
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
                                        "runIndex": 0
                                    },
                                    "wins": 0,
                                    "winMulti": 1,
                                    "savedMoney": 0,
                                    "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
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
                                        "runIndex": 0
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
                                            11,
                                            -1,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            9,
                                            11,
                                            -1,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            4,
                                            10,
                                            -1,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            11,
                                            12,
                                            2,
                                            -1,
                                            11,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            7,
                                            2,
                                            4,
                                            2,
                                            -1,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            5,
                                            7,
                                            -1,
                                            10,
                                            2,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            9,
                                            11,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            11,
                                            12,
                                            2,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            7,
                                            2,
                                            4,
                                            2,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            6,
                                            5,
                                            7,
                                            10,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            4,
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            6,
                                            9,
                                            11,
                                            2,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            2,
                                            11,
                                            12,
                                            2,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            7,
                                            2,
                                            4,
                                            2,
                                            2,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10,
                                            2
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            4,
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            6,
                                            9,
                                            11,
                                            -1,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            -1,
                                            11,
                                            12,
                                            -1,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            7,
                                            -1,
                                            4,
                                            -1,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                    1,
                                    4,
                                    2,
                                    6,
                                    3,
                                    1,
                                    3,
                                    4,
                                    4,
                                    2,
                                    4,
                                    4,
                                    4,
                                    5,
                                    5,
                                    6
                                ],
                                "type": 1,
                                "lineIndex": -1,
                                "symbol": 2,
                                "mul": 20,
                                "coinWin": 20,
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
                                "bg-blueeffect",
                                "bg-greeneffect",
                                "bg-payblue",
                                "bg-blue",
                                "bg-red",
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
                                        "runIndex": 0
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
                                },
                                "bg-dropdown": {
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
                                        "runIndex": 0
                                    },
                                    "queue": 1,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
                                },
                                "bg-green": {
                                    "val": 8,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-remove": {
                                    "basicComponentData": {
                                        "usedScenes": [
                                            1,
                                            3,
                                            3,
                                            3,
                                            3
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
                                    "removedNum": 8,
                                    "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
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
                                        "runIndex": 0
                                    },
                                    "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
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
                                        "coinWin": 45,
                                        "cashWin": 45,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "nextComponent": "",
                                    "symbolNum": 8,
                                    "wildNum": 0,
                                    "respinNum": 0,
                                    "wins": 20,
                                    "winMulti": 1,
                                    "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                                },
                                "bg-blue": {
                                    "val": 5,
                                    "newCollector": 8,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-red": {
                                    "val": 10,
                                    "newCollector": 0,
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
                                        "runIndex": 0
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
                    "coinWin": 65,
                    "cashWin": 65,
                    "clientData": {
                        "scenes": [
                            {
                                "values": [
                                    {
                                        "values": [
                                            4,
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            5,
                                            6,
                                            9,
                                            11,
                                            -1,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            -1,
                                            11,
                                            12,
                                            -1,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            10,
                                            7,
                                            -1,
                                            4,
                                            -1,
                                            -1,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10,
                                            -1
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            4,
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            5,
                                            6,
                                            9,
                                            11,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            6,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            6,
                                            11,
                                            12,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            -1,
                                            -1,
                                            10,
                                            7,
                                            4,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            -1,
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            4,
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            5,
                                            6,
                                            9,
                                            11,
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            6,
                                            10,
                                            4,
                                            10,
                                            6,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            4,
                                            8,
                                            6,
                                            11,
                                            12,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            3,
                                            10,
                                            7,
                                            4,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            2,
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                            11,
                                            6,
                                            10,
                                            7,
                                            5,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            5,
                                            6,
                                            9,
                                            11,
                                            7,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            6,
                                            10,
                                            8,
                                            10,
                                            6,
                                            7
                                        ]
                                    },
                                    {
                                        "values": [
                                            8,
                                            8,
                                            6,
                                            11,
                                            12,
                                            11,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            7,
                                            10,
                                            7,
                                            8,
                                            5
                                        ]
                                    },
                                    {
                                        "values": [
                                            6,
                                            9,
                                            12,
                                            6,
                                            5,
                                            7,
                                            10
                                        ]
                                    },
                                    {
                                        "values": [
                                            12,
                                            9,
                                            11,
                                            10,
                                            11,
                                            10,
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
                                "coinWin": 65,
                                "cashWin": 65,
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
                                "bg-blueeffect",
                                "bg-bluebranch",
                                "bg-blue2red",
                                "bg-greeneffect",
                                "bg-blue",
                                "bg-red",
                                "bg-green",
                                "bg-piggybank"
                            ],
                            "respinComponents": [],
                            "mapComponents": {
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "queue": 0,
                                    "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
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
                                        "runIndex": 0
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
                                        "runIndex": 0
                                    },
                                    "lastRespinNum": 0,
                                    "totalRespinNum": 0,
                                    "curRespinNum": 5,
                                    "curAddRespinNum": 0,
                                    "totalCoinWin": 65,
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
                                "bg-blue": {
                                    "val": 5,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-red": {
                                    "val": 10,
                                    "newCollector": 0,
                                    "@type": "type.googleapis.com/sgc7pb.CollectorData"
                                },
                                "bg-green": {
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
                                        "coinWin": 65,
                                        "cashWin": 65,
                                        "targetScene": 0,
                                        "runIndex": 0
                                    },
                                    "wins": 65,
                                    "winMulti": 1,
                                    "savedMoney": 0,
                                    "@type": "type.googleapis.com/sgc7pb.PiggyBankData"
                                },
                                "bg-bluebranch": {
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
                                    "value": "blue to red",
                                    "@type": "type.googleapis.com/sgc7pb.WeightBranchData"
                                },
                                "bg-blue2red": {
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
                                        "runIndex": 0
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
            "playStartTime": 1713853569673
        },
        "playIndex": -1,
        "bet": 1,
        "lines": 10,
        "totalwin": 65,
        "playwin": 0,
        "maxWinLimit": 0
    }
};

function onBegin(data) {
    const type = data.curType;

    while (Logic.instance.hasNextState()) {
        Logic.instance.nextState();
    }

    Logic.instance.endStep();
}

function onEnd(data) {
    const type = data.curType;
}


Logic.instance.addStepBeginListener(onBegin);
Logic.instance.addStepEndListener(onEnd);

Logic.instance.onMessage(msgdata);

console.log("done");