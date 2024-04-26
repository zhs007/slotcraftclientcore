const { parseSlotCraftJson } = require('./utils.js');

test('parseSlotCraftJson', () => {
    let obj = {
        "sourcecode": "",
        "parameter": {
            "width": 5,
            "height": 3,
            "symbolWidth": 185,
            "symbolHeight": 185
        },
        "applicableModule": [
            {
                "name": "BgModule",
                "event": [
                    {
                        "name": "bgnormal",
                        "children": [
                            "bgnormal.start",
                            "bgnormal.loop",
                            "bgnormal.end"
                        ]
                    }
                ]
            },
            {
                "name": "SpinModule",
                "event": [
                    {
                        "name": "spinnormal",
                        "children": [
                            "spinnormal.start",
                            "spinnormal.loop",
                            "spinnormal.end"
                        ]
                    },
                    {
                        "name": "spinscroll",
                        "children": [
                            "spinscroll.start",
                            "spinscroll.loop",
                            "spinscroll.end"
                        ]
                    },
                    {
                        "name": "spinendnd",
                        "children": [
                            "spinendnd.start",
                            "spinendnd.loop",
                            "spinendnd.end"
                        ]
                    }
                ]
            },
            {
                "name": "ShowTopModule",
                "event": [
                    {
                        "name": "showtop",
                        "children": [
                            "showtop.start",
                            "showtop.loop",
                            "showtop.end"
                        ]
                    }
                ]
            },
            {
                "name": "WinAniModule",
                "event": [
                    {
                        "name": "bigwin",
                        "children": [
                            "bigwin.start",
                            "bigwin.loop",
                            "bigwin.end"
                        ]
                    },
                    {
                        "name": "superwin",
                        "children": [
                            "superwin.start",
                            "superwin.loop",
                            "superwin.end"
                        ]
                    },
                    {
                        "name": "megawin",
                        "children": [
                            "megawin.start",
                            "megawin.loop",
                            "megawin.end"
                        ]
                    }
                ]
            },
            {
                "name": "FgModule",
                "event": [
                    {
                        "name": "freeenter",
                        "children": [
                            "freeenter.start",
                            "freeenter.loop",
                            "freeenter.end"
                        ]
                    },
                    {
                        "name": "fgnormal",
                        "children": [
                            "fgnormal.start",
                            "fgnormal.loop",
                            "fgnormal.end"
                        ]
                    },
                    {
                        "name": "freeexit",
                        "children": [
                            "freeexit.start",
                            "freeexit.loop",
                            "freeexit.end"
                        ]
                    }
                ]
            },
            {
                "name": "FreeExtraMod",
                "event": [
                    {
                        "name": "freeextra",
                        "children": [
                            "freeextra.start",
                            "freeextra.loop",
                            "freeextra.end"
                        ]
                    }
                ]
            },
            {
                "name": "Walk",
                "event": [
                    {
                        "name": "wkstsymbolaction",
                        "children": [
                            "wkstsymbolaction.start",
                            "wkstsymbolaction.loop",
                            "wkstsymbolaction.end"
                        ]
                    },
                    {
                        "name": "wkendsymbolaction",
                        "children": [
                            "wkendsymbolaction.start",
                            "wkendsymbolaction.loop",
                            "wkendsymbolaction.end"
                        ]
                    },
                    {
                        "name": "wkothersymbolaction",
                        "children": [
                            "wkothersymbolaction.start",
                            "wkothersymbolaction.loop",
                            "wkothersymbolaction.end"
                        ]
                    }
                ]
            },
            {
                "name": "Walkdown",
                "event": [
                    {
                        "name": "wdstsymbolaction",
                        "children": [
                            "wdstsymbolaction.start",
                            "wdstsymbolaction.loop",
                            "wdstsymbolaction.end"
                        ]
                    },
                    {
                        "name": "wdothersymbolaction",
                        "children": [
                            "wdothersymbolaction.start",
                            "wdothersymbolaction.loop",
                            "wdothersymbolaction.end"
                        ]
                    }
                ]
            }
        ],
        "moduleMatching": [
            {
                "name": "bg-spin",
                "component": [
                    "bg-spin"
                ],
                "module": "SpinModule",
                "key": "0.689832378143991"
            },
            {
                "name": "bg-paylines",
                "component": [
                    "bg-paylines"
                ],
                "module": "ShowTopModule",
                "key": "0.46311691859358084"
            },
            {
                "name": "bg-scatter",
                "component": [
                    "bg-scatter"
                ],
                "module": "FgModule",
                "key": "0.8524748218144924"
            },
            {
                "name": "fg-start",
                "component": [
                    "fg-start"
                ],
                "module": "FreeExtraMod",
                "key": "0.5814638400617631"
            },
            {
                "name": "fg-spin",
                "component": [
                    "fg-spin"
                ],
                "module": "FgModule",
                "key": "0.5007152328323805"
            },
            {
                "name": "fg-paylines",
                "component": [
                    "fg-paylines"
                ],
                "module": "ShowTopModule",
                "key": "0.7675481813676872"
            },
            {
                "name": "fg-bmmask",
                "component": [
                    "fg-bmmask"
                ],
                "key": "0.22668570203113947"
            },
            {
                "name": "fg-replacee",
                "component": [
                    "fg-replacee"
                ],
                "key": "0.5021070833253316"
            },
            {
                "name": "bg-chgsym",
                "component": [
                    "bg-chgsym"
                ],
                "key": "0.2959685257061331"
            },
            {
                "name": "bg-gensym",
                "component": [
                    "bg-gensym"
                ],
                "key": "0.708250104451539"
            },
            {
                "name": "bg-symwins",
                "component": [
                    "bg-symwins"
                ],
                "key": "0.41971797774325625"
            },
            {
                "name": "fg-chgsym",
                "component": [
                    "fg-chgsym"
                ],
                "key": "0.4668523863630263"
            },
            {
                "name": "fg-gensym",
                "component": [
                    "fg-gensym"
                ],
                "key": "0.9558273443255401"
            },
            {
                "name": "fg-triggermm",
                "component": [
                    "fg-triggermm"
                ],
                "key": "0.3697439271881151"
            },
            {
                "name": "fg-adde",
                "component": [
                    "fg-adde"
                ],
                "key": "0.8078773490993407"
            },
            {
                "name": "fg-triggercollect",
                "component": [
                    "fg-triggercollect"
                ],
                "key": "0.2424436427645853"
            },
            {
                "name": "fg-collect",
                "component": [
                    "fg-collect"
                ],
                "key": "0.0898680574030819"
            },
            {
                "name": "fg-respin",
                "component": [
                    "fg-respin"
                ],
                "key": "0.5870715078692355"
            },
            {
                "name": "fg-triggerbm",
                "component": [
                    "fg-triggerbm"
                ],
                "key": "0.032927576988122986"
            },
            {
                "name": "fg-genadde",
                "component": [
                    "fg-genadde"
                ],
                "key": "0.697530886490406"
            },
            {
                "name": "fg-triggere",
                "component": [
                    "fg-triggere"
                ],
                "key": "0.6734522686375626"
            },
            {
                "name": "fg-symwins",
                "component": [
                    "fg-symwins"
                ],
                "key": "0.426037603943767"
            },
            {
                "name": "fg-genreplacee",
                "component": [
                    "fg-genreplacee"
                ],
                "key": "0.5369090177212923"
            }
        ],
        "object": [
            {
                "name": "ReelObj",
                "data": [
                    "spinnormal",
                    "spinscroll",
                    "spinendnd",
                    "showtop",
                    "fgnormal"
                ],
                "children": {
                    "sort": [
                        {
                            "name": "spinnormal.start",
                            "active": false
                        },
                        {
                            "name": "spinnormal.loop",
                            "active": false
                        },
                        {
                            "name": "spinnormal.end",
                            "active": false
                        },
                        {
                            "name": "spinscroll.start",
                            "active": false
                        },
                        {
                            "name": "spinscroll.loop",
                            "active": false
                        },
                        {
                            "name": "spinscroll.end",
                            "active": false
                        },
                        {
                            "name": "spinendnd.start",
                            "active": false
                        },
                        {
                            "name": "spinendnd.loop",
                            "active": false
                        },
                        {
                            "name": "spinendnd.end",
                            "active": false
                        },
                        {
                            "name": "showtop.start",
                            "active": false
                        },
                        {
                            "name": "showtop.loop",
                            "active": false
                        },
                        {
                            "name": "showtop.end",
                            "active": false
                        },
                        {
                            "name": "fgnormal.start",
                            "active": false
                        },
                        {
                            "name": "fgnormal.loop",
                            "active": false
                        },
                        {
                            "name": "fgnormal.end",
                            "active": false
                        }
                    ],
                    "symData": [
                        {
                            "symbol": "WL",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "W1.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "W1.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.end",
                                        "spinendnd.loop",
                                        "spinendnd.start"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "A",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "H1.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "H1.png"
                                    },
                                    "data": [
                                        "spinendnd.end",
                                        "spinendnd.loop",
                                        "spinendnd.start",
                                        "spinscroll.end",
                                        "spinscroll.loop",
                                        "spinscroll.start"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "B",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "H2.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "H2.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "C",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "H3.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "H3.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "D",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "M1.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "M1.png"
                                    },
                                    "data": [
                                        "spinendnd.end",
                                        "spinendnd.loop",
                                        "spinendnd.start",
                                        "spinscroll.end",
                                        "spinscroll.loop",
                                        "spinscroll.start"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "E",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "M2.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "M2.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "F",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "M3.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "M3.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "G",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "L1.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "L1.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "H",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "L2.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "L2.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "J",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "L3.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "L3.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "K",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "L4.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "L4.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "OM",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "SC1.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "SC1.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "MM",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "SC2.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "SC2.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "BM",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "SC3.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "SC3.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "SC",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "normal",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "SC4.png"
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "showtop.loop",
                                        "fgnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "down",
                                        "type": "sprite",
                                        "layer": "downlayer",
                                        "res": "SC4.png"
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end",
                                        "spinendnd.start",
                                        "spinendnd.loop",
                                        "spinendnd.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "BN",
                            "columns": [
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end"
                            ],
                            "data": []
                        }
                    ],
                    "offset": []
                }
            },
            {
                "name": "ReelObj.uplayer2"
            },
            {
                "name": "ReelObj.uplayer"
            },
            {
                "name": "ReelObj.normallayer"
            },
            {
                "name": "ReelObj.downlayer"
            },
            {
                "name": "bk",
                "data": [
                    "bgnormal",
                    "spinnormal",
                    "spinscroll",
                    "spinendnd",
                    "showtop",
                    "freeenter",
                    "fgnormal",
                    "freeexit",
                    "freeextra"
                ],
                "children": {
                    "columns": [
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end",
                        "spinnormal.start",
                        "spinnormal.loop",
                        "spinnormal.end",
                        "spinscroll.start",
                        "spinscroll.loop",
                        "spinscroll.end",
                        "spinendnd.start",
                        "spinendnd.loop",
                        "spinendnd.end",
                        "showtop.start",
                        "showtop.loop",
                        "showtop.end",
                        "freeenter.start",
                        "freeenter.loop",
                        "freeenter.end",
                        "fgnormal.start",
                        "fgnormal.loop",
                        "fgnormal.end",
                        "freeexit.start",
                        "freeexit.loop",
                        "freeexit.end",
                        "freeextra.start",
                        "freeextra.loop",
                        "freeextra.end"
                    ],
                    "sort": [
                        {
                            "name": "bgnormal.start",
                            "active": false
                        },
                        {
                            "name": "bgnormal.loop",
                            "active": false
                        },
                        {
                            "name": "bgnormal.end",
                            "active": false
                        },
                        {
                            "name": "spinnormal.start",
                            "active": false
                        },
                        {
                            "name": "spinnormal.loop",
                            "active": false
                        },
                        {
                            "name": "spinnormal.end",
                            "active": false
                        },
                        {
                            "name": "spinscroll.start",
                            "active": false
                        },
                        {
                            "name": "spinscroll.loop",
                            "active": false
                        },
                        {
                            "name": "spinscroll.end",
                            "active": false
                        },
                        {
                            "name": "spinendnd.start",
                            "active": false
                        },
                        {
                            "name": "spinendnd.loop",
                            "active": false
                        },
                        {
                            "name": "spinendnd.end",
                            "active": false
                        },
                        {
                            "name": "showtop.start",
                            "active": false
                        },
                        {
                            "name": "showtop.loop",
                            "active": false
                        },
                        {
                            "name": "showtop.end",
                            "active": false
                        },
                        {
                            "name": "freeenter.start",
                            "active": false
                        },
                        {
                            "name": "freeenter.loop",
                            "active": false
                        },
                        {
                            "name": "freeenter.end",
                            "active": false
                        },
                        {
                            "name": "fgnormal.start",
                            "active": false
                        },
                        {
                            "name": "fgnormal.loop",
                            "active": false
                        },
                        {
                            "name": "fgnormal.end",
                            "active": false
                        },
                        {
                            "name": "freeexit.start",
                            "active": false
                        },
                        {
                            "name": "freeexit.loop",
                            "active": false
                        },
                        {
                            "name": "freeexit.end",
                            "active": false
                        },
                        {
                            "name": "freeextra.start",
                            "active": false
                        },
                        {
                            "name": "freeextra.loop",
                            "active": false
                        },
                        {
                            "name": "freeextra.end",
                            "active": false
                        }
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "bk",
                                "type": "sprite",
                                "res": "background.webp"
                            },
                            "data": [
                                "bgnormal.start",
                                "bgnormal.loop",
                                "bgnormal.end",
                                "spinnormal.start",
                                "spinnormal.loop",
                                "spinnormal.end",
                                "spinscroll.start",
                                "spinscroll.loop",
                                "spinscroll.end",
                                "spinendnd.start",
                                "spinendnd.loop",
                                "spinendnd.end",
                                "showtop.start",
                                "showtop.loop",
                                "showtop.end",
                                "freeenter.start",
                                "freeenter.loop",
                                "freeenter.end",
                                "fgnormal.start",
                                "fgnormal.loop",
                                "fgnormal.end",
                                "freeexit.start",
                                "freeexit.loop",
                                "freeexit.end",
                                "freeextra.start",
                                "freeextra.loop",
                                "freeextra.end"
                            ]
                        }
                    ],
                    "offset": []
                }
            }
        ],
        "assets": [
            {
                "fieldname": "0",
                "originalname": "M3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 3033,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M3.png",
                "type": "image"
            },
            {
                "fieldname": "1",
                "originalname": "M2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 3017,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M2.png",
                "type": "image"
            },
            {
                "fieldname": "2",
                "originalname": "L4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2389,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L4.png",
                "type": "image"
            },
            {
                "fieldname": "3",
                "originalname": "M1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2783,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M1.png",
                "type": "image"
            },
            {
                "fieldname": "4",
                "originalname": "L1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2311,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L1.png",
                "type": "image"
            },
            {
                "fieldname": "5",
                "originalname": "M4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2873,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M4.png",
                "type": "image"
            },
            {
                "fieldname": "6",
                "originalname": "L2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2541,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L2.png",
                "type": "image"
            },
            {
                "fieldname": "7",
                "originalname": "L3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2589,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L3.png",
                "type": "image"
            },
            {
                "fieldname": "8",
                "originalname": "H4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2434,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H4.png",
                "type": "image"
            },
            {
                "fieldname": "9",
                "originalname": "H3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2589,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H3.png",
                "type": "image"
            },
            {
                "fieldname": "10",
                "originalname": "H2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2552,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H2.png",
                "type": "image"
            },
            {
                "fieldname": "11",
                "originalname": "H1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 2322,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H1.png",
                "type": "image"
            },
            {
                "fieldname": "12",
                "originalname": "W4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7157,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W4.png",
                "type": "image"
            },
            {
                "fieldname": "13",
                "originalname": "background.webp",
                "encoding": "7bit",
                "mimetype": "image/webp",
                "size": 103776,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/background.webp",
                "type": "image"
            },
            {
                "fieldname": "14",
                "originalname": "COIN4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7678,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN4.png",
                "type": "image"
            },
            {
                "fieldname": "15",
                "originalname": "SC4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7189,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC4.png",
                "type": "image"
            },
            {
                "fieldname": "16",
                "originalname": "W2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7405,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W2.png",
                "type": "image"
            },
            {
                "fieldname": "17",
                "originalname": "COIN1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7902,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN1.png",
                "type": "image"
            },
            {
                "fieldname": "18",
                "originalname": "SC1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7055,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC1.png",
                "type": "image"
            },
            {
                "fieldname": "19",
                "originalname": "W3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7667,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W3.png",
                "type": "image"
            },
            {
                "fieldname": "20",
                "originalname": "W1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 6648,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W1.png",
                "type": "image"
            },
            {
                "fieldname": "21",
                "originalname": "SC3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7537,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC3.png",
                "type": "image"
            },
            {
                "fieldname": "22",
                "originalname": "COIN3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7864,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN3.png",
                "type": "image"
            },
            {
                "fieldname": "23",
                "originalname": "COIN2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7860,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN2.png",
                "type": "image"
            },
            {
                "fieldname": "24",
                "originalname": "SC2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 7269,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC2.png",
                "type": "image"
            }
        ],
        "performanceData": {
            "parameter": {
                "width": 5,
                "height": 3,
                "symbolWidth": 185,
                "symbolHeight": 185
            },
            "assets": [
                {
                    "fieldname": "0",
                    "originalname": "M3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 3033,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M3.png",
                    "type": "image"
                },
                {
                    "fieldname": "1",
                    "originalname": "M2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 3017,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M2.png",
                    "type": "image"
                },
                {
                    "fieldname": "2",
                    "originalname": "L4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2389,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L4.png",
                    "type": "image"
                },
                {
                    "fieldname": "3",
                    "originalname": "M1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2783,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M1.png",
                    "type": "image"
                },
                {
                    "fieldname": "4",
                    "originalname": "L1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2311,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L1.png",
                    "type": "image"
                },
                {
                    "fieldname": "5",
                    "originalname": "M4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2873,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/M4.png",
                    "type": "image"
                },
                {
                    "fieldname": "6",
                    "originalname": "L2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2541,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L2.png",
                    "type": "image"
                },
                {
                    "fieldname": "7",
                    "originalname": "L3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2589,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/L3.png",
                    "type": "image"
                },
                {
                    "fieldname": "8",
                    "originalname": "H4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2434,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H4.png",
                    "type": "image"
                },
                {
                    "fieldname": "9",
                    "originalname": "H3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2589,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H3.png",
                    "type": "image"
                },
                {
                    "fieldname": "10",
                    "originalname": "H2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2552,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H2.png",
                    "type": "image"
                },
                {
                    "fieldname": "11",
                    "originalname": "H1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 2322,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/H1.png",
                    "type": "image"
                },
                {
                    "fieldname": "12",
                    "originalname": "W4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7157,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W4.png",
                    "type": "image"
                },
                {
                    "fieldname": "13",
                    "originalname": "background.webp",
                    "encoding": "7bit",
                    "mimetype": "image/webp",
                    "size": 103776,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/background.webp",
                    "type": "image"
                },
                {
                    "fieldname": "14",
                    "originalname": "COIN4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7678,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN4.png",
                    "type": "image"
                },
                {
                    "fieldname": "15",
                    "originalname": "SC4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7189,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC4.png",
                    "type": "image"
                },
                {
                    "fieldname": "16",
                    "originalname": "W2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7405,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W2.png",
                    "type": "image"
                },
                {
                    "fieldname": "17",
                    "originalname": "COIN1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7902,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN1.png",
                    "type": "image"
                },
                {
                    "fieldname": "18",
                    "originalname": "SC1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7055,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC1.png",
                    "type": "image"
                },
                {
                    "fieldname": "19",
                    "originalname": "W3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7667,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W3.png",
                    "type": "image"
                },
                {
                    "fieldname": "20",
                    "originalname": "W1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 6648,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/W1.png",
                    "type": "image"
                },
                {
                    "fieldname": "21",
                    "originalname": "SC3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7537,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC3.png",
                    "type": "image"
                },
                {
                    "fieldname": "22",
                    "originalname": "COIN3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7864,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN3.png",
                    "type": "image"
                },
                {
                    "fieldname": "23",
                    "originalname": "COIN2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7860,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/COIN2.png",
                    "type": "image"
                },
                {
                    "fieldname": "24",
                    "originalname": "SC2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 7269,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/ztUJjwPBn4Po2g0-LnTTO/SC2.png",
                    "type": "image"
                }
            ],
            "rootLayer": [
                {
                    "name": "ReelObj",
                    "offset": []
                },
                {
                    "name": "ReelObj.uplayer2",
                    "offset": []
                },
                {
                    "name": "ReelObj.uplayer",
                    "offset": []
                },
                {
                    "name": "ReelObj.normallayer",
                    "offset": []
                },
                {
                    "name": "ReelObj.downlayer",
                    "offset": []
                },
                {
                    "name": "bk",
                    "offset": []
                }
            ],
            "data": {
                "ReelObj": {
                    "WL": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "W1.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "W1.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ]
                    },
                    "A": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "H1.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "H1.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinendnd.end": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.start": [
                            1
                        ]
                    },
                    "B": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "H2.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "H2.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "C": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "H3.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "H3.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "D": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "M1.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "M1.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinendnd.end": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.start": [
                            1
                        ]
                    },
                    "E": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "M2.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "M2.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "F": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "M3.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "M3.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "G": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "L1.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "L1.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "H": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "L2.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "L2.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "J": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "L3.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "L3.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "K": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "L4.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "L4.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "OM": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "SC1.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "SC1.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "MM": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "SC2.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "SC2.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "BM": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "SC3.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "SC3.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "SC": {
                        "actions": [
                            {
                                "name": "normal",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "SC4.png"
                            },
                            {
                                "name": "down",
                                "type": "sprite",
                                "layer": "downlayer",
                                "res": "SC4.png"
                            }
                        ],
                        "spinnormal.loop": [
                            0
                        ],
                        "showtop.loop": [
                            0
                        ],
                        "fgnormal.loop": [
                            0
                        ],
                        "spinscroll.start": [
                            1
                        ],
                        "spinscroll.loop": [
                            1
                        ],
                        "spinscroll.end": [
                            1
                        ],
                        "spinendnd.start": [
                            1
                        ],
                        "spinendnd.loop": [
                            1
                        ],
                        "spinendnd.end": [
                            1
                        ]
                    },
                    "BN": {
                        "actions": []
                    }
                },
                "bk": {
                    "actions": [
                        {
                            "name": "bk",
                            "type": "sprite",
                            "res": "background.webp"
                        }
                    ],
                    "bgnormal.start": [
                        0
                    ],
                    "bgnormal.loop": [
                        0
                    ],
                    "bgnormal.end": [
                        0
                    ],
                    "spinnormal.start": [
                        0
                    ],
                    "spinnormal.loop": [
                        0
                    ],
                    "spinnormal.end": [
                        0
                    ],
                    "spinscroll.start": [
                        0
                    ],
                    "spinscroll.loop": [
                        0
                    ],
                    "spinscroll.end": [
                        0
                    ],
                    "spinendnd.start": [
                        0
                    ],
                    "spinendnd.loop": [
                        0
                    ],
                    "spinendnd.end": [
                        0
                    ],
                    "showtop.start": [
                        0
                    ],
                    "showtop.loop": [
                        0
                    ],
                    "showtop.end": [
                        0
                    ],
                    "freeenter.start": [
                        0
                    ],
                    "freeenter.loop": [
                        0
                    ],
                    "freeenter.end": [
                        0
                    ],
                    "fgnormal.start": [
                        0
                    ],
                    "fgnormal.loop": [
                        0
                    ],
                    "fgnormal.end": [
                        0
                    ],
                    "freeexit.start": [
                        0
                    ],
                    "freeexit.loop": [
                        0
                    ],
                    "freeexit.end": [
                        0
                    ],
                    "freeextra.start": [
                        0
                    ],
                    "freeextra.loop": [
                        0
                    ],
                    "freeextra.end": [
                        0
                    ]
                }
            },
            "statedata": {
                "bg-spin": {
                    "list": [
                        "bg-spin"
                    ],
                    "module": "spinResult",
                    "performance": ""
                },
                "bg-walk": {
                    "list": [
                        "bg-walk"
                    ],
                    "module": "moonWalk",
                    "performance": ""
                },
                "bg-top": {
                    "list": [
                        "bg-paylines",
                        "bg-payfg"
                    ],
                    "module": "showWinTop",
                    "performance": ""
                },
                "bg-paysc": {
                    "list": [
                        "bg-paysc"
                    ],
                    "module": "paysc",
                    "performance": ""
                },
                "bg-win": {
                    "list": [
                        "bg-spin"
                    ],
                    "module": "showWinAni",
                    "performance": ""
                },
                "bg-triggerfg": {
                    "list": [
                        "bg-triggerfg"
                    ],
                    "module": "enterFree",
                    "performance": ""
                },
                "fg-spin": {
                    "list": [
                        "fg-spin"
                    ],
                    "module": "spinResult",
                    "performance": ""
                },
                "fg-walkdown": {
                    "list": [
                        "fg-walkdown"
                    ],
                    "module": "moonDown",
                    "performance": ""
                },
                "fg-walk": {
                    "list": [
                        "fg-walk"
                    ],
                    "module": "moonWalk",
                    "performance": ""
                },
                "fg-top": {
                    "list": [
                        "fg-paylines",
                        "fg-payfg"
                    ],
                    "module": "showWinTop",
                    "performance": ""
                },
                "fg-paysc": {
                    "list": [
                        "fg-paysc"
                    ],
                    "module": "paysc",
                    "performance": ""
                },
                "fg-win": {
                    "list": [
                        "fg-spin"
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
            },
            "statelist": [
                "bg-spin",
                "bg-walk",
                "bg-top",
                "bg-paysc",
                "bg-win",
                "bg-triggerfg",
                "fg-spin",
                "fg-walkdown",
                "fg-walk",
                "fg-top",
                "fg-paysc",
                "fg-win",
                "fg-fgtrigger"
            ]
        }
    };

    let statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);
    expect(statecfg.statelist.length).toBe(6);
    expect(statecfg.statedata).not.toBe(null);

    let num = 0;
    for (const k in statecfg.statedata) {
        num++;
    }

    expect(num).toBe(6);
});