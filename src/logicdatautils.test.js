const { genLogicData } = require('./logicdatautils.js');

test('genLogicData', () => {
    let obj = [
        {
            "label": "normal",
            "bet": 10,
            "graph": {
                "cells": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "5caf3ff0-1660-4ec2-8db1-4d1f28a8108b",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "3bcdded8-3dd7-4e99-bb61-f752564580ef",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#0000FF",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "3e55b4f5-1612-473f-8d62-99113470542d",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                            "port": "loop-component-groups-out"
                        },
                        "target": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "16d98e74-f6e4-4e14-9a14-211fc7c3a35f",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "c3f7b9fc-158b-472b-8b81-72185ece2ba8",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "9f55ea26-7ca8-4873-b4e0-2ffb3e262a94",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "dd730fa9-6d3c-4d9d-8c4d-88b2d88ce5a6",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "ed270750-e506-4c72-8958-2d79411b0cc6",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "84fd1e38-8664-40f6-a844-9af5930756f0",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "30cd334c-4874-4265-807d-0d88bd78db0e",
                            "port": "start-out"
                        },
                        "target": {
                            "cell": "ed270750-e506-4c72-8958-2d79411b0cc6",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "8fe62ca6-80c6-45b6-afe9-2e3f6d8d52a3",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "db738b75-9bbe-454e-a390-945f2abf7901",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "d81ef2ec-1c2d-43f8-a035-dfe0791b3c44",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "b42443ea-6860-4a49-b8dc-bc36a891f46b",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": -60,
                            "y": 0
                        },
                        "size": {
                            "width": 1,
                            "height": 1
                        },
                        "visible": true,
                        "shape": "custom-node-width-start",
                        "ports": {
                            "groups": {
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        },
                                        {
                                            "tagName": "text",
                                            "selector": "portNameLabel"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 80,
                                            "height": 40,
                                            "strokeWidth": 0,
                                            "fill": "#242525",
                                            "magnet": true
                                        },
                                        "portNameLabel": {
                                            "ref": "portBody",
                                            "refX": 23,
                                            "refY": 12,
                                            "fill": "#fff"
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -40,
                                                "y": -20
                                            },
                                            "angle": 0
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "start-out",
                                    "group": "domout",
                                    "attrs": {
                                        "portNameLabel": {
                                            "text": "Start"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "30cd334c-4874-4265-807d-0d88bd78db0e",
                        "zIndex": 1,
                        "basicComponentData": null,
                        "data": null
                    },
                    {
                        "position": {
                            "x": 170,
                            "y": -250
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "ed270750-e506-4c72-8958-2d79411b0cc6",
                        "label": "WeightReels",
                        "item": {
                            "key": "WeightReels",
                            "label": "WeightReels",
                            "out": [
                                "symbols",
                                "reelSet",
                                "reelSetIndex"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight"
                                }
                            ]
                        },
                        "zIndex": 2,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSetWeight": "bgreelweight"
                            },
                            "label": "bg-spin"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 800,
                            "y": -420
                        },
                        "size": {
                            "width": 400,
                            "height": 686
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 4,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    3
                                ],
                                "minNum": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "configurationExpand": false,
                            "label": "bg-walktrigger"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 1350,
                            "y": -340
                        },
                        "size": {
                            "width": 400,
                            "height": 229
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 6,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "bg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 2000,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 425
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                }
                            ]
                        },
                        "zIndex": 8,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "bg-paylines",
                            "configurationExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 2520,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 506
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 11,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "bg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 3100,
                            "y": -720
                        },
                        "size": {
                            "width": 400,
                            "height": 506
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 13,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "bg-payfg",
                            "configurationExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 4260,
                            "y": -620
                        },
                        "size": {
                            "width": 400,
                            "height": 155
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "loop-component-groups-out",
                                    "group": "loopout",
                                    "attrs": {
                                        "text": {
                                            "text": "loop"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                        "label": "Respin",
                        "item": {
                            "key": "Respin",
                            "label": "Respin",
                            "defaultValue": {
                                "isWinBreak": "false"
                            },
                            "configuration": [
                                {
                                    "label": "isWinBreak",
                                    "type": "boolean"
                                }
                            ]
                        },
                        "zIndex": 17,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isWinBreak": "false"
                            },
                            "label": "fg-start"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 4810,
                            "y": -660
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                        "label": "WeightReels",
                        "item": {
                            "key": "WeightReels",
                            "label": "WeightReels",
                            "out": [
                                "symbols",
                                "reelSet",
                                "reelSetIndex"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight"
                                }
                            ]
                        },
                        "zIndex": 19,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSetWeight": "fgreelweight"
                            },
                            "label": "fg-spin"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 5430,
                            "y": -850
                        },
                        "size": {
                            "width": 400,
                            "height": 686
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 21,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "minNum": 1,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-walktrigger",
                            "controllerExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 6030,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 22,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "true",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    }
                                ]
                            },
                            "label": "fg-walkdown"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f257cb0a-f062-4207-864c-0b12ad46bb50",
                        "zIndex": 24,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 6630,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 229
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 25,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "fg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "2d12bb29-c1af-4b70-bb26-87ac12dea78a",
                        "zIndex": 26,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 9140,
                            "y": -1150
                        },
                        "size": {
                            "width": 400,
                            "height": 640
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 34,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatter",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "minNum": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-fgtrigger",
                            "controller": [
                                {
                                    "type": "addRespinTimes",
                                    "target": "fg-start",
                                    "times": 15
                                }
                            ]
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 7240,
                            "y": -940
                        },
                        "size": {
                            "width": 400,
                            "height": 477
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 36,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 3,
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "fg-paylines"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "d5350839-1737-426e-a3f8-5ef2019092a4",
                        "zIndex": 37,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 7850,
                            "y": -1070
                        },
                        "size": {
                            "width": 400,
                            "height": 558
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 40,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f5dd5d23-4934-4a39-8513-ad972bc4a1e4",
                        "zIndex": 41,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 8490,
                            "y": -1120
                        },
                        "size": {
                            "width": 400,
                            "height": 558
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 42,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-payfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "8fe07f32-7d04-42ed-9e3a-68fb8108dae6",
                        "zIndex": 43,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "ae17a1fe-24b2-434d-a891-957db4575d71",
                        "zIndex": 44,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 3630,
                            "y": -640
                        },
                        "size": {
                            "width": 400,
                            "height": 870
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winResult"
                            ],
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "defaultValue": "scatters",
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "reelscatters",
                                            "value": "reelscatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter"
                                        },
                                        {
                                            "label": "countscatterReels",
                                            "value": "countscatterReels"
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    },
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "defaultValue": "bet",
                                    "association": [
                                        "putMoneyInPiggyBank"
                                    ],
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1",
                                    "defaultValue": 1
                                },
                                {
                                    "label": "targetMask",
                                    "type": "selectMaskNode"
                                },
                                {
                                    "label": "putMoneyInPiggyBank",
                                    "type": "selectPiggyBankNode",
                                    "show": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    }
                                },
                                {
                                    "label": "triggerRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinComponent",
                                        "genRespinType"
                                    ],
                                    "defaultValue": "none",
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "respinNum",
                                            "value": "respinNum"
                                        },
                                        {
                                            "label": "triggerNum",
                                            "value": "triggerNum"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinComponent",
                                    "type": "selectRespinNode",
                                    "required": true,
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    },
                                    "option": [
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                "winMulti"
                            ]
                        },
                        "zIndex": 45,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerRespinType": "respinNum",
                                "winMulti": 1,
                                "betType": "noPay",
                                "triggerType": "countscatter",
                                "minNum": 3,
                                "countScatterPayAs": "FG",
                                "symbols": [
                                    "FG"
                                ],
                                "respinComponent": "fg-start",
                                "genRespinType": "number",
                                "respinNum": 15
                            },
                            "label": "bg-triggerfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "label": "antebet",
            "bet": 20,
            "graph": {
                "cells": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "5caf3ff0-1660-4ec2-8db1-4d1f28a8108b",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "3bcdded8-3dd7-4e99-bb61-f752564580ef",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#0000FF",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "3e55b4f5-1612-473f-8d62-99113470542d",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                            "port": "loop-component-groups-out"
                        },
                        "target": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "16d98e74-f6e4-4e14-9a14-211fc7c3a35f",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "c3f7b9fc-158b-472b-8b81-72185ece2ba8",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "9f55ea26-7ca8-4873-b4e0-2ffb3e262a94",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "dd730fa9-6d3c-4d9d-8c4d-88b2d88ce5a6",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "ed270750-e506-4c72-8958-2d79411b0cc6",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "84fd1e38-8664-40f6-a844-9af5930756f0",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "30cd334c-4874-4265-807d-0d88bd78db0e",
                            "port": "start-out"
                        },
                        "target": {
                            "cell": "ed270750-e506-4c72-8958-2d79411b0cc6",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "8fe62ca6-80c6-45b6-afe9-2e3f6d8d52a3",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "db738b75-9bbe-454e-a390-945f2abf7901",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": -60,
                            "y": 0
                        },
                        "size": {
                            "width": 1,
                            "height": 1
                        },
                        "visible": true,
                        "shape": "custom-node-width-start",
                        "ports": {
                            "groups": {
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        },
                                        {
                                            "tagName": "text",
                                            "selector": "portNameLabel"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 80,
                                            "height": 40,
                                            "strokeWidth": 0,
                                            "fill": "#242525",
                                            "magnet": true
                                        },
                                        "portNameLabel": {
                                            "ref": "portBody",
                                            "refX": 23,
                                            "refY": 12,
                                            "fill": "#fff"
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -40,
                                                "y": -20
                                            },
                                            "angle": 0
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "start-out",
                                    "group": "domout",
                                    "attrs": {
                                        "portNameLabel": {
                                            "text": "Start"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "30cd334c-4874-4265-807d-0d88bd78db0e",
                        "zIndex": 1,
                        "basicComponentData": null,
                        "data": null
                    },
                    {
                        "position": {
                            "x": 170,
                            "y": -250
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "ed270750-e506-4c72-8958-2d79411b0cc6",
                        "label": "WeightReels",
                        "item": {
                            "key": "WeightReels",
                            "label": "WeightReels",
                            "out": [
                                "symbols",
                                "reelSet",
                                "reelSetIndex"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight"
                                }
                            ]
                        },
                        "zIndex": 2,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSetWeight": "abreelweight"
                            },
                            "label": "bg-spin"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 800,
                            "y": -420
                        },
                        "size": {
                            "width": 400,
                            "height": 684
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 4,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    3
                                ],
                                "minNum": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "configurationExpand": false,
                            "label": "bg-walktrigger"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 1350,
                            "y": -340
                        },
                        "size": {
                            "width": 400,
                            "height": 228
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 6,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "bg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 2000,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 424
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                }
                            ]
                        },
                        "zIndex": 8,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "bg-paylines",
                            "configurationExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "b42443ea-6860-4a49-b8dc-bc36a891f46b",
                        "zIndex": 9,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 2520,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 504
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 11,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "bg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 3100,
                            "y": -720
                        },
                        "size": {
                            "width": 400,
                            "height": 504
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 13,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "bg-payfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 4260,
                            "y": -620
                        },
                        "size": {
                            "width": 400,
                            "height": 155
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "loop-component-groups-out",
                                    "group": "loopout",
                                    "attrs": {
                                        "text": {
                                            "text": "loop"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "5b104fe8-9f03-4c1c-8640-8dc95cba0c9c",
                        "label": "Respin",
                        "item": {
                            "key": "Respin",
                            "label": "Respin",
                            "defaultValue": {
                                "isWinBreak": "false"
                            },
                            "configuration": [
                                {
                                    "label": "isWinBreak",
                                    "type": "boolean"
                                }
                            ]
                        },
                        "zIndex": 17,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isWinBreak": "false"
                            },
                            "label": "fg-start"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 4810,
                            "y": -660
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                        "label": "WeightReels",
                        "item": {
                            "key": "WeightReels",
                            "label": "WeightReels",
                            "out": [
                                "symbols",
                                "reelSet",
                                "reelSetIndex"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight"
                                }
                            ]
                        },
                        "zIndex": 19,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSetWeight": "fgreelweight"
                            },
                            "label": "fg-spin"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 5430,
                            "y": -850
                        },
                        "size": {
                            "width": 400,
                            "height": 684
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 21,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "minNum": 1,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-walktrigger",
                            "controllerExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 6030,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 206
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 22,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "true",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    }
                                ]
                            },
                            "label": "fg-walkdown"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f257cb0a-f062-4207-864c-0b12ad46bb50",
                        "zIndex": 24,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 6630,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 228
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 25,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "fg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "2d12bb29-c1af-4b70-bb26-87ac12dea78a",
                        "zIndex": 26,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 9140,
                            "y": -1150
                        },
                        "size": {
                            "width": 400,
                            "height": 638
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 34,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatter",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "minNum": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-fgtrigger",
                            "controller": [
                                {
                                    "type": "addRespinTimes",
                                    "target": "fg-start",
                                    "times": 15
                                }
                            ]
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 7240,
                            "y": -940
                        },
                        "size": {
                            "width": 400,
                            "height": 475
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 36,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 3,
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "fg-paylines"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "d5350839-1737-426e-a3f8-5ef2019092a4",
                        "zIndex": 37,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "d81ef2ec-1c2d-43f8-a035-dfe0791b3c44",
                        "zIndex": 39,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 7850,
                            "y": -1070
                        },
                        "size": {
                            "width": 400,
                            "height": 556
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 40,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f5dd5d23-4934-4a39-8513-ad972bc4a1e4",
                        "zIndex": 41,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 8490,
                            "y": -1120
                        },
                        "size": {
                            "width": 400,
                            "height": 556
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 42,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-payfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "8fe07f32-7d04-42ed-9e3a-68fb8108dae6",
                        "zIndex": 43,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "ae17a1fe-24b2-434d-a891-957db4575d71",
                        "zIndex": 44,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 3630,
                            "y": -640
                        },
                        "size": {
                            "width": 400,
                            "height": 867
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winResult"
                            ],
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "defaultValue": "scatters",
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "reelscatters",
                                            "value": "reelscatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter"
                                        },
                                        {
                                            "label": "countscatterReels",
                                            "value": "countscatterReels"
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "defaultValue": "bet",
                                    "association": [
                                        "putMoneyInPiggyBank"
                                    ],
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1",
                                    "defaultValue": 1
                                },
                                {
                                    "label": "targetMask",
                                    "type": "selectMaskNode"
                                },
                                {
                                    "label": "putMoneyInPiggyBank",
                                    "type": "selectPiggyBankNode",
                                    "show": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    }
                                },
                                {
                                    "label": "triggerRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinComponent",
                                        "genRespinType"
                                    ],
                                    "defaultValue": "none",
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "respinNum",
                                            "value": "respinNum"
                                        },
                                        {
                                            "label": "triggerNum",
                                            "value": "triggerNum"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinComponent",
                                    "type": "selectRespinNode",
                                    "required": true,
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    },
                                    "option": [
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                "winMulti"
                            ]
                        },
                        "zIndex": 45,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerRespinType": "respinNum",
                                "winMulti": 1,
                                "betType": "noPay",
                                "triggerType": "countscatter",
                                "minNum": 3,
                                "countScatterPayAs": "FG",
                                "symbols": [
                                    "FG"
                                ],
                                "respinComponent": "fg-start",
                                "genRespinType": "number",
                                "respinNum": 15
                            },
                            "label": "bg-triggerfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "label": "buyfeature",
            "bet": 845,
            "graph": {
                "cells": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "5caf3ff0-1660-4ec2-8db1-4d1f28a8108b",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "16d98e74-f6e4-4e14-9a14-211fc7c3a35f",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "9f55ea26-7ca8-4873-b4e0-2ffb3e262a94",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "8fe62ca6-80c6-45b6-afe9-2e3f6d8d52a3",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "db738b75-9bbe-454e-a390-945f2abf7901",
                        "zIndex": -1,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "7c7dafe9-dd43-47f8-9f33-c7b82144b7f6",
                        "zIndex": -1,
                        "source": {
                            "cell": "30cd334c-4874-4265-807d-0d88bd78db0e",
                            "port": "start-out"
                        },
                        "target": {
                            "cell": "0a8d6411-fb9a-4b39-b5b6-7924430f940d",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "875edf6a-1300-4ab6-9553-7b3a64bd34eb",
                        "zIndex": -1,
                        "source": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "4c93098a-7ea9-4d54-95ac-f53520da733f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#0000FF",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "ca060756-ba28-4557-a4bc-52e93a9b900d",
                        "zIndex": -1,
                        "source": {
                            "cell": "4c93098a-7ea9-4d54-95ac-f53520da733f",
                            "port": "loop-component-groups-out"
                        },
                        "target": {
                            "cell": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 3,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "351be2f0-f7d5-4b58-a321-c2f151311460",
                        "zIndex": -1,
                        "source": {
                            "cell": "0a8d6411-fb9a-4b39-b5b6-7924430f940d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": -60,
                            "y": 0
                        },
                        "size": {
                            "width": 1,
                            "height": 1
                        },
                        "visible": true,
                        "shape": "custom-node-width-start",
                        "ports": {
                            "groups": {
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        },
                                        {
                                            "tagName": "text",
                                            "selector": "portNameLabel"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 80,
                                            "height": 40,
                                            "strokeWidth": 0,
                                            "fill": "#242525",
                                            "magnet": true
                                        },
                                        "portNameLabel": {
                                            "ref": "portBody",
                                            "refX": 23,
                                            "refY": 12,
                                            "fill": "#fff"
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -40,
                                                "y": -20
                                            },
                                            "angle": 0
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "start-out",
                                    "group": "domout",
                                    "attrs": {
                                        "portNameLabel": {
                                            "text": "Start"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "30cd334c-4874-4265-807d-0d88bd78db0e",
                        "zIndex": 1,
                        "basicComponentData": null,
                        "data": null
                    },
                    {
                        "position": {
                            "x": 800,
                            "y": -420
                        },
                        "size": {
                            "width": 400,
                            "height": 686
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "14c3cb68-818e-45cf-b39d-90b1dd621868",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 4,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    3
                                ],
                                "minNum": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "configurationExpand": false,
                            "label": "bg-walktrigger"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 1350,
                            "y": -340
                        },
                        "size": {
                            "width": 400,
                            "height": 229
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 6,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "bg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 2000,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 425
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                }
                            ]
                        },
                        "zIndex": 8,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "bg-paylines",
                            "configurationExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "b42443ea-6860-4a49-b8dc-bc36a891f46b",
                        "zIndex": 9,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "0f528e8e-68e2-494a-8d60-5da1b776a97d",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "6c82c59c-b3a7-4432-8e13-fcfc6064b08f",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 2520,
                            "y": -520
                        },
                        "size": {
                            "width": 400,
                            "height": 506
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "0abcdbec-c66e-4f7d-8650-3bab1acfcff9",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 11,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "bg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 3100,
                            "y": -720
                        },
                        "size": {
                            "width": 400,
                            "height": 506
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "e6a0ec7c-d42e-4538-9a11-df2679870d6d",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 13,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "bg-payfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 4810,
                            "y": -660
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "29d6281c-d36f-44b9-92b8-527570fb23ba",
                        "label": "WeightReels",
                        "item": {
                            "key": "WeightReels",
                            "label": "WeightReels",
                            "out": [
                                "symbols",
                                "reelSet",
                                "reelSetIndex"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "reelSetWeight",
                                    "type": "selectReelSetWeight"
                                }
                            ]
                        },
                        "zIndex": 19,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSetWeight": "fgreelweight"
                            },
                            "label": "fg-spin"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 5430,
                            "y": -850
                        },
                        "size": {
                            "width": 400,
                            "height": 686
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 21,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatterInArea",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "posArea": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "minNum": 1,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-walktrigger",
                            "controllerExpand": false
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 6030,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 22,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "true",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    }
                                ]
                            },
                            "label": "fg-walkdown"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#008000",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f257cb0a-f062-4207-864c-0b12ad46bb50",
                        "zIndex": 24,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "jump-component-groups-out"
                        },
                        "target": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 6630,
                            "y": -770
                        },
                        "size": {
                            "width": 400,
                            "height": 229
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                        "label": "MoveSymbol",
                        "item": {
                            "key": "MoveSymbol",
                            "label": "MoveSymbol",
                            "out": [
                                "symbols"
                            ],
                            "defaultValue": {
                                "isExpandReel": "false"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "moveData",
                                    "type": "moveData"
                                }
                            ]
                        },
                        "zIndex": 25,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "moveData": [
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 1,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 1,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 1"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 2,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 2,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 2"
                                    },
                                    {
                                        "src": {
                                            "type": "selectWithXY",
                                            "Y": 3,
                                            "X": 1
                                        },
                                        "target": {
                                            "type": "selectSymbolR2L",
                                            "Y": 3,
                                            "Symbol": "SC"
                                        },
                                        "moveType": "xy",
                                        "targetSymbol": "SC",
                                        "overrideSrc": "false",
                                        "overrideTarget": "false",
                                        "overridePath": "true",
                                        "name": "moveData 3"
                                    }
                                ]
                            },
                            "label": "fg-walk"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "2d12bb29-c1af-4b70-bb26-87ac12dea78a",
                        "zIndex": 26,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "e7502125-06a4-4dec-abc0-d005e8f68a11",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 9140,
                            "y": -1150
                        },
                        "size": {
                            "width": 400,
                            "height": 640
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none"
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true"
                        },
                        "zIndex": 34,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "countscatter",
                                "betType": "noPay",
                                "genRespinType": "none",
                                "minNum": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-fgtrigger",
                            "controller": [
                                {
                                    "type": "chgComponentConfigIntVal",
                                    "targetArr": [
                                        "fg-start",
                                        "lastRespinNum"
                                    ],
                                    "valueNum": 15
                                }
                            ]
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 7240,
                            "y": -940
                        },
                        "size": {
                            "width": 400,
                            "height": 477
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                        "label": "LinesTrigger",
                        "item": {
                            "key": "LinesTrigger",
                            "label": "LinesTrigger",
                            "out": [
                                "wins",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "lines",
                                            "value": "lines"
                                        },
                                        {
                                            "label": "checkLines",
                                            "value": "checkLines"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "checkLines"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "checkWinType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "left2right",
                                            "value": "left2right"
                                        },
                                        {
                                            "label": "right2left",
                                            "value": "right2left"
                                        },
                                        {
                                            "label": "all",
                                            "value": "all"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                }
                            ],
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 36,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "lines",
                                "betType": "bet",
                                "checkWinType": "left2right",
                                "winMulti": 3,
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
                                "wildSymbols": [
                                    "WL"
                                ]
                            },
                            "label": "fg-paylines"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "d5350839-1737-426e-a3f8-5ef2019092a4",
                        "zIndex": 37,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "a86006d7-d04e-43af-b2f0-6d10190a652b",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1,
                                "strokeDasharray": 0
                            }
                        },
                        "id": "d81ef2ec-1c2d-43f8-a035-dfe0791b3c44",
                        "zIndex": 39,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "f629bb51-147b-4080-bb7a-242e0f07ec22",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 7850,
                            "y": -1070
                        },
                        "size": {
                            "width": 400,
                            "height": 558
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 40,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "SC"
                                ]
                            },
                            "label": "fg-paysc"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "f5dd5d23-4934-4a39-8513-ad972bc4a1e4",
                        "zIndex": 41,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "eb303a5e-fd43-4605-b0e3-1f22d8b67a66",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 8490,
                            "y": -1120
                        },
                        "size": {
                            "width": 400,
                            "height": 558
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        },
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winMulti"
                            ],
                            "defaultValue": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 1
                            },
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea",
                                            "setVal": {
                                                "betType": "noPay"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1"
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber"
                                }
                            ]
                        },
                        "zIndex": 42,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerType": "scatters",
                                "betType": "bet",
                                "genRespinType": "none",
                                "winMulti": 3,
                                "symbols": [
                                    "FG"
                                ]
                            },
                            "label": "fg-payfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "8fe07f32-7d04-42ed-9e3a-68fb8108dae6",
                        "zIndex": 43,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "ce9588a1-481b-405e-b2d9-01ee2ff3ea96",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#DC143C",
                                "strokeWidth": 1
                            }
                        },
                        "id": "ae17a1fe-24b2-434d-a891-957db4575d71",
                        "zIndex": 44,
                        "labels": [
                            {
                                "position": 0.5,
                                "data": null
                            }
                        ],
                        "source": {
                            "cell": "389fd043-1ec8-4a63-8614-08f2b775ccd7",
                            "port": "component-groups-out"
                        },
                        "target": {
                            "cell": "ad5669c9-f889-4f79-b4ae-57d80207954a",
                            "port": "component-groups-in"
                        }
                    },
                    {
                        "position": {
                            "x": 3630,
                            "y": -640
                        },
                        "size": {
                            "width": 400,
                            "height": 870
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "jump-component-groups-out",
                                    "group": "jumpout",
                                    "attrs": {
                                        "text": {
                                            "text": "jumpTo"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "146670c6-bb00-4c04-99b5-1f27994cbe1c",
                        "label": "ScatterTrigger",
                        "item": {
                            "key": "ScatterTrigger",
                            "label": "ScatterTrigger",
                            "out": [
                                "wins",
                                "symbolNum",
                                "wildNum",
                                "respinNum",
                                "winResult"
                            ],
                            "configuration": [
                                {
                                    "label": "targetSymbols",
                                    "type": "selectSymbolsNode"
                                },
                                {
                                    "label": "triggerType",
                                    "type": "select",
                                    "association": [
                                        "minNum",
                                        "posArea",
                                        "countScatterPayAs"
                                    ],
                                    "defaultValue": "scatters",
                                    "option": [
                                        {
                                            "label": "scatters",
                                            "value": "scatters"
                                        },
                                        {
                                            "label": "reelscatters",
                                            "value": "reelscatters"
                                        },
                                        {
                                            "label": "countscatter",
                                            "value": "countscatter"
                                        },
                                        {
                                            "label": "countscatterReels",
                                            "value": "countscatterReels"
                                        },
                                        {
                                            "label": "countscatterInArea",
                                            "value": "countscatterInArea"
                                        }
                                    ]
                                },
                                {
                                    "label": "minNum",
                                    "type": "inputWidthNumber",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "posArea",
                                    "type": "posArea",
                                    "required": true,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "countScatterPayAs",
                                    "type": "selectSymbol",
                                    "required": false,
                                    "show": {
                                        "label": "triggerType",
                                        "value": [
                                            "countscatter",
                                            "countscatterReels",
                                            "countscatterInArea"
                                        ]
                                    }
                                },
                                {
                                    "label": "betType",
                                    "type": "select",
                                    "defaultValue": "bet",
                                    "association": [
                                        "putMoneyInPiggyBank"
                                    ],
                                    "option": [
                                        {
                                            "label": "bet",
                                            "value": "bet"
                                        },
                                        {
                                            "label": "totalBet",
                                            "value": "totalBet"
                                        },
                                        {
                                            "label": "noPay",
                                            "value": "noPay"
                                        }
                                    ]
                                },
                                {
                                    "label": "symbols",
                                    "type": "selectSymbols",
                                    "required": true
                                },
                                {
                                    "label": "wildSymbols",
                                    "type": "selectSymbols"
                                },
                                {
                                    "label": "winMulti",
                                    "type": "inputNumber1",
                                    "defaultValue": 1
                                },
                                {
                                    "label": "targetMask",
                                    "type": "selectMaskNode"
                                },
                                {
                                    "label": "putMoneyInPiggyBank",
                                    "type": "selectPiggyBankNode",
                                    "show": {
                                        "label": "betType",
                                        "value": [
                                            "bet",
                                            "totalBet"
                                        ]
                                    }
                                },
                                {
                                    "label": "triggerRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinComponent",
                                        "genRespinType"
                                    ],
                                    "defaultValue": "none",
                                    "option": [
                                        {
                                            "label": "none",
                                            "value": "none"
                                        },
                                        {
                                            "label": "respinNum",
                                            "value": "respinNum"
                                        },
                                        {
                                            "label": "triggerNum",
                                            "value": "triggerNum"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinComponent",
                                    "type": "selectRespinNode",
                                    "required": true,
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "genRespinType",
                                    "type": "select",
                                    "association": [
                                        "respinNum",
                                        "respinNumWithScatterNum",
                                        "respinNumWeight",
                                        "respinNumWeightWithScatterNum"
                                    ],
                                    "show": {
                                        "label": "triggerRespinType",
                                        "value": [
                                            "respinNum",
                                            "triggerNum"
                                        ]
                                    },
                                    "option": [
                                        {
                                            "label": "number",
                                            "value": "number"
                                        },
                                        {
                                            "label": "scatterNum",
                                            "value": "scatterNum"
                                        },
                                        {
                                            "label": "weight",
                                            "value": "weight"
                                        },
                                        {
                                            "label": "scatterNumWeight",
                                            "value": "scatterNumWeight"
                                        }
                                    ]
                                },
                                {
                                    "label": "respinNum",
                                    "type": "inputNumberInteger",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "number"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWithScatterNum",
                                    "type": "respinNumWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNum"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeight",
                                    "type": "selectIntValWeight",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "weight"
                                        ]
                                    }
                                },
                                {
                                    "label": "respinNumWeightWithScatterNum",
                                    "type": "respinNumWeightWithScatterNum",
                                    "required": true,
                                    "show": {
                                        "label": "genRespinType",
                                        "value": [
                                            "scatterNumWeight"
                                        ]
                                    }
                                }
                            ],
                            "controller": "true",
                            "componentval": [
                                "winMulti"
                            ]
                        },
                        "zIndex": 45,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "triggerRespinType": "respinNum",
                                "winMulti": 1,
                                "betType": "noPay",
                                "triggerType": "countscatter",
                                "minNum": 3,
                                "countScatterPayAs": "FG",
                                "symbols": [
                                    "FG"
                                ],
                                "respinComponent": "fg-start",
                                "genRespinType": "number",
                                "respinNum": 15
                            },
                            "label": "bg-triggerfg"
                        },
                        "basicComponentData": null,
                        "data": null,
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "position": {
                            "x": 160,
                            "y": -210
                        },
                        "size": {
                            "width": 400,
                            "height": 207
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                }
                            ]
                        },
                        "id": "0a8d6411-fb9a-4b39-b5b6-7924430f940d",
                        "label": "BasicReels",
                        "item": {
                            "key": "BasicReels",
                            "label": "BasicReels",
                            "out": [
                                "symbols"
                            ],
                            "configuration": [
                                {
                                    "label": "reelSet",
                                    "type": "selectReels",
                                    "required": true
                                },
                                {
                                    "label": "isExpandReel",
                                    "type": "boolean",
                                    "defaultValue": "false"
                                }
                            ],
                            "componentval": [
                                "reelSet"
                            ]
                        },
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        },
                        "zIndex": 46,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {
                                "isExpandReel": "false",
                                "reelSet": "bf-reel"
                            },
                            "label": "bf-spin"
                        }
                    },
                    {
                        "position": {
                            "x": 4260,
                            "y": -560
                        },
                        "size": {
                            "width": 400,
                            "height": 123
                        },
                        "view": "react-shape-view",
                        "shape": "custom-node",
                        "ports": {
                            "groups": {
                                "domin": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "portBody"
                                        }
                                    ],
                                    "attrs": {
                                        "portBody": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": -5,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "domout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 394,
                                                "y": 50
                                            },
                                            "angle": 0
                                        }
                                    }
                                },
                                "jumpout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "loopout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "foreachout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "magnet": true,
                                            "fill": "#A9A9A9",
                                            "x": -5,
                                            "y": -5
                                        }
                                    },
                                    "position": {
                                        "args": {
                                            "position": {
                                                "x": 399,
                                                "y": 80
                                            },
                                            "angle": 0
                                        }
                                    },
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                },
                                "valsout": {
                                    "markup": [
                                        {
                                            "tagName": "rect",
                                            "selector": "rect"
                                        }
                                    ],
                                    "attrs": {
                                        "rect": {
                                            "width": 10,
                                            "height": 10,
                                            "strokeWidth": 1,
                                            "fill": "#A9A9A9",
                                            "magnet": true,
                                            "y": -5
                                        }
                                    },
                                    "position": "rightPortPosition",
                                    "label": {
                                        "position": {
                                            "name": "right"
                                        }
                                    }
                                }
                            },
                            "items": [
                                {
                                    "id": "component-groups-in",
                                    "group": "domin"
                                },
                                {
                                    "id": "component-groups-out",
                                    "group": "domout"
                                },
                                {
                                    "id": "loop-component-groups-out",
                                    "group": "loopout",
                                    "attrs": {
                                        "text": {
                                            "text": "loop"
                                        }
                                    }
                                }
                            ]
                        },
                        "id": "4c93098a-7ea9-4d54-95ac-f53520da733f",
                        "label": "Respin",
                        "item": {
                            "key": "Respin",
                            "label": "Respin",
                            "out": [
                                "curRespinNum",
                                "curTriggerNum",
                                "lastRespinNum",
                                "lastTriggerNum",
                                "retriggerAddRespinNum"
                            ],
                            "configuration": [],
                            "componentval": [
                                "lastRespinNum",
                                "retriggerAddRespinNum",
                                "lastTriggerNum"
                            ]
                        },
                        "tools": {
                            "items": [
                                {
                                    "name": "button-remove",
                                    "args": {
                                        "x": 380,
                                        "y": 18
                                    }
                                }
                            ]
                        },
                        "zIndex": 47,
                        "componentValues": {
                            "labelIsError": false,
                            "configuration": {},
                            "label": "fg-start"
                        }
                    }
                ]
            }
        }
    ];

    const logicData = genLogicData(obj);
    expect(typeof logicData).not.toBe('string');
    expect(logicData).not.toBe(null);
});