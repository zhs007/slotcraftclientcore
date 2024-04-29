const { parseSlotCraftJson } = require('./utils.js');

test('parseSlotCraftJson', () => {
    let obj = {
        "parameter": {
            "type": "scroll",
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
            },
            {
                "name": "FgExitModule",
                "event": [
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
                "name": "ShowGivenTopModule",
                "event": [
                    {
                        "name": "showgiventop",
                        "children": [
                            "showgiventop.start",
                            "showgiventop.loop",
                            "showgiventop.end"
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
                "instance": 0,
                "key": "0.45674063663833864"
            },
            {
                "name": "bg-walk",
                "component": [
                    "bg-walk"
                ],
                "module": "Walk",
                "instance": 0,
                "key": "0.9263824207108724"
            },
            {
                "name": "bg-top",
                "component": [
                    "bg-paylines",
                    "bg-payfg"
                ],
                "module": "ShowTopModule",
                "instance": 0,
                "key": "0.25131664872893644"
            },
            {
                "name": "bg-paysc",
                "component": [
                    "bg-paysc"
                ],
                "module": "ShowGivenTopModule",
                "instance": 0,
                "key": "0.22565741311306753"
            },
            {
                "name": "bg-win",
                "module": "WinAniModule",
                "component": [
                    "bg-spin"
                ],
                "instance": 0,
                "key": "0.5431839165335342"
            },
            {
                "name": "bg-triggerfg",
                "component": [
                    "bg-triggerfg"
                ],
                "module": "FgModule",
                "instance": 0,
                "key": "0.6743827007862229"
            },
            {
                "name": "fg-spin",
                "component": [
                    "fg-spin"
                ],
                "module": "SpinModule",
                "instance": 0,
                "key": "0.2995512983856581"
            },
            {
                "name": "fg-walkdown",
                "component": [
                    "fg-walkdown"
                ],
                "module": "Walkdown",
                "instance": 0,
                "key": "0.9823130497017216"
            },
            {
                "name": "fg-walk",
                "component": [
                    "fg-walk"
                ],
                "module": "Walk",
                "instance": 0,
                "key": "0.4201252294491449"
            },
            {
                "name": "fg-top",
                "component": [
                    "fg-paylines",
                    "fg-payfg"
                ],
                "module": "ShowTopModule",
                "instance": 0,
                "key": "0.7101853067205299"
            },
            {
                "name": "fg-paysc",
                "component": [
                    "fg-paysc"
                ],
                "module": "ShowGivenTopModule",
                "instance": 0,
                "key": "0.749963925100319"
            },
            {
                "name": "fg-win",
                "module": "ShowTopModule",
                "component": [
                    "fg-spin"
                ],
                "instance": 0,
                "key": "0.8541919964468441"
            },
            {
                "name": "fg-fgtrigger",
                "component": [
                    "fg-fgtrigger"
                ],
                "module": "FreeExtraMod",
                "instance": 0,
                "key": "0.1948945916762974"
            },
            {
                "name": "fg-end",
                "component": [
                    "fg-start"
                ],
                "instance": 0,
                "key": "0.8535021772688989",
                "module": "FgExitModule"
            }
        ],
        "object": [
            {
                "name": "spinetest",
                "data": [
                    "bgnormal"
                ],
                "children": {
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
                        }
                    ],
                    "columns": [
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "spinetest",
                                "type": "spine",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "rocket1"
                                ],
                                "isloop": 1
                            },
                            "data": []
                        }
                    ]
                }
            },
            {
                "name": "freeani",
                "data": [
                    "freeenter",
                    "freeextra",
                    "freeexit"
                ],
                "children": {
                    "columns": [
                        "freeenter.start",
                        "freeenter.loop",
                        "freeenter.end",
                        "freeextra.start",
                        "freeextra.loop",
                        "freeextra.end",
                        "freeexit.start",
                        "freeexit.loop",
                        "freeexit.end"
                    ],
                    "sort": [
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
                        }
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "enterstart",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "fg1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "freeenter.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "enterloop",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "fg2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "freeenter.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "enterend",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "fg3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "freeenter.end"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "exitstart",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "jiesuan1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "freeexit.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "exitloop",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "jiesuan2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "freeexit.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "exitend",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "jiesuan3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "freeexit.end"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "extraloop",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "zjmf15"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "freeextra.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "extraend",
                                "type": "sprite",
                                "res": "empty.png"
                            },
                            "data": [
                                "freeextra.end"
                            ]
                        }
                    ],
                    "attribute": {
                        "FgModule": 0,
                        "FreeExtraMod": 0,
                        "FgExitModule": 0
                    }
                }
            },
            {
                "name": "winani",
                "data": [
                    "bigwin",
                    "superwin",
                    "megawin"
                ],
                "children": {
                    "sort": [
                        {
                            "name": "bigwin.start",
                            "active": false
                        },
                        {
                            "name": "bigwin.loop",
                            "active": false
                        },
                        {
                            "name": "bigwin.end",
                            "active": false
                        },
                        {
                            "name": "superwin.start",
                            "active": false
                        },
                        {
                            "name": "superwin.loop",
                            "active": false
                        },
                        {
                            "name": "superwin.end",
                            "active": false
                        },
                        {
                            "name": "megawin.start",
                            "active": false
                        },
                        {
                            "name": "megawin.loop",
                            "active": false
                        },
                        {
                            "name": "megawin.end",
                            "active": false
                        }
                    ],
                    "columns": [
                        "bigwin.start",
                        "bigwin.loop",
                        "bigwin.end",
                        "superwin.start",
                        "superwin.loop",
                        "superwin.end",
                        "megawin.start",
                        "megawin.loop",
                        "megawin.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "winanibig1",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "bwin_1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "bigwin.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanibig2",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "bwin_2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "bigwin.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanibig3",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "bwin_3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "bigwin.end"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanisuper1",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "swin_1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "superwin.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanisuper2",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "swin_2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "superwin.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanisuper3",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "swin_3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "superwin.end"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanimega1",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "mwin_1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "megawin.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanimega2",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "mwin_2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "megawin.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "winanimega3",
                                "type": "spine",
                                "res": "uiobject_win.json",
                                "ani": [
                                    "mwin_3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "megawin.end"
                            ]
                        }
                    ]
                }
            },
            {
                "name": "gamelogo",
                "data": [
                    "bgnormal"
                ],
                "children": {
                    "columns": [
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end"
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
                        }
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "logo",
                                "type": "sprite",
                                "res": "logo.png"
                            },
                            "data": [
                                "bgnormal.loop"
                            ]
                        }
                    ],
                    "attribute": {
                        "BgModule": 0,
                        "offset": [
                            -650,
                            380
                        ]
                    }
                }
            },
            {
                "name": "sccolect",
                "data": [],
                "children": {
                    "sort": [],
                    "columns": [],
                    "data": []
                }
            },
            {
                "name": "winlianxian",
                "data": [
                    "showtop"
                ],
                "children": {
                    "sort": [
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
                        }
                    ],
                    "columns": [
                        "showtop.start",
                        "showtop.loop",
                        "showtop.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "lianshow",
                                "type": "spine",
                                "res": "uiobject_lianxian.json",
                                "ani": [
                                    "line_1",
                                    "line_2",
                                    "line_3",
                                    "line_4",
                                    "line_5",
                                    "line_6",
                                    "line_7",
                                    "line_8",
                                    "line_9",
                                    "line_10"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "showtop.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "emptysp",
                                "type": "sprite",
                                "res": "empty.png"
                            },
                            "data": [
                                "showtop.end"
                            ]
                        }
                    ]
                }
            },
            {
                "name": "moonwalkfg",
                "data": [
                    "fgnormal",
                    "bgnormal",
                    "wdstsymbolaction"
                ],
                "children": {
                    "sort": [
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
                            "name": "wdstsymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wdstsymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wdstsymbolaction.end",
                            "active": false
                        }
                    ],
                    "columns": [
                        "fgnormal.start",
                        "fgnormal.loop",
                        "fgnormal.end",
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end",
                        "wdstsymbolaction.start",
                        "wdstsymbolaction.loop",
                        "wdstsymbolaction.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "fg1",
                                "type": "spine",
                                "res": "12.json",
                                "ani": [
                                    "fg1"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "fgnormal.start"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "fg2",
                                "type": "spine",
                                "res": "12.json",
                                "ani": [
                                    "fg2"
                                ],
                                "isloop": 1
                            },
                            "data": []
                        },
                        {
                            "yAxis": {
                                "name": "fg3",
                                "type": "spine",
                                "res": "12.json",
                                "ani": [
                                    "fg3"
                                ],
                                "isloop": 0
                            },
                            "data": [
                                "wdstsymbolaction.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "nonesp",
                                "type": "sprite",
                                "res": "empty.png"
                            },
                            "data": [
                                "bgnormal.loop",
                                "fgnormal.loop",
                                "wdstsymbolaction.end"
                            ]
                        }
                    ]
                }
            },
            {
                "name": "ReelObj",
                "data": [
                    "spinnormal",
                    "spinscroll",
                    "spinendnd",
                    "wkendsymbolaction",
                    "wkothersymbolaction",
                    "wdstsymbolaction",
                    "wdothersymbolaction",
                    "showtop",
                    "wkstsymbolaction",
                    "showgiventop"
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
                            "name": "wkstsymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wkstsymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wkstsymbolaction.end",
                            "active": false
                        },
                        {
                            "name": "wkendsymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wkendsymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wkendsymbolaction.end",
                            "active": false
                        },
                        {
                            "name": "wkothersymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wkothersymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wkothersymbolaction.end",
                            "active": false
                        },
                        {
                            "name": "wdstsymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wdstsymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wdstsymbolaction.end",
                            "active": false
                        },
                        {
                            "name": "wdothersymbolaction.start",
                            "active": false
                        },
                        {
                            "name": "wdothersymbolaction.loop",
                            "active": false
                        },
                        {
                            "name": "wdothersymbolaction.end",
                            "active": false
                        },
                        {
                            "name": "showgiventop.start",
                            "active": false
                        },
                        {
                            "name": "showgiventop.loop",
                            "active": false
                        },
                        {
                            "name": "showgiventop.end",
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_ty0.json",
                                        "ani": [
                                            "0_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_ty0.json",
                                        "ani": [
                                            "0_idle"
                                        ],
                                        "isloop": 1
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "spinnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_ty0.json",
                                        "ani": [
                                            "0_idle"
                                        ],
                                        "isloop": 1
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_mx1.json",
                                        "ani": [
                                            "1_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_mx1.json",
                                        "ani": [
                                            "1_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_mx1.json",
                                        "ani": [
                                            "1_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_dq2.json",
                                        "ani": [
                                            "2_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_dq2.json",
                                        "ani": [
                                            "2_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_dq2.json",
                                        "ani": [
                                            "2_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_hx3.json",
                                        "ani": [
                                            "3_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_hx3.json",
                                        "ani": [
                                            "3_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_hx3.json",
                                        "ani": [
                                            "3_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_sx4.json",
                                        "ani": [
                                            "4_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_sx4.json",
                                        "ani": [
                                            "4_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_sx4.json",
                                        "ani": [
                                            "4_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_jx5.json",
                                        "ani": [
                                            "05_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_jx5.json",
                                        "ani": [
                                            "05_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_jx5.json",
                                        "ani": [
                                            "05_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_tx6.json",
                                        "ani": [
                                            "6_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_tx6.json",
                                        "ani": [
                                            "6_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_tx6.json",
                                        "ani": [
                                            "6_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_tw7.json",
                                        "ani": [
                                            "7_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_tw7.json",
                                        "ani": [
                                            "7_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_tw7.json",
                                        "ani": [
                                            "7_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_a8.json",
                                        "ani": [
                                            "8_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_a8.json",
                                        "ani": [
                                            "8_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_a8.json",
                                        "ani": [
                                            "8_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_k9.json",
                                        "ani": [
                                            "9_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_k9.json",
                                        "ani": [
                                            "9_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_k9.json",
                                        "ani": [
                                            "9_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_q10.json",
                                        "ani": [
                                            "10_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_q10.json",
                                        "ani": [
                                            "10_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_q10.json",
                                        "ani": [
                                            "10_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "L",
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_j11.json",
                                        "ani": [
                                            "11_win"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_j11.json",
                                        "ani": [
                                            "11_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_j11.json",
                                        "ani": [
                                            "11_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
                                    ]
                                }
                            ]
                        },
                        {
                            "symbol": "FG",
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop",
                                        "wkothersymbolaction.end"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "12.json",
                                        "ani": [
                                            "bonus4"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wkothersymbolaction.end",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "12.json",
                                        "ani": [
                                            "bonus3"
                                        ],
                                        "isloop": 1
                                    },
                                    "data": [
                                        "spinnormal.loop",
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "12.json",
                                        "ani": [
                                            "bonus1"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
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
                                "wkstsymbolaction.start",
                                "wkstsymbolaction.loop",
                                "wkstsymbolaction.end",
                                "wkendsymbolaction.start",
                                "wkendsymbolaction.loop",
                                "wkendsymbolaction.end",
                                "wkothersymbolaction.start",
                                "wkothersymbolaction.loop",
                                "wkothersymbolaction.end",
                                "wdstsymbolaction.start",
                                "wdstsymbolaction.loop",
                                "wdstsymbolaction.end",
                                "wdothersymbolaction.start",
                                "wdothersymbolaction.loop",
                                "wdothersymbolaction.end",
                                "showgiventop.start",
                                "showgiventop.loop",
                                "showgiventop.end"
                            ],
                            "data": [
                                {
                                    "yAxis": {
                                        "name": "walkstani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "run1",
                                            "run2",
                                            "run3",
                                            "run4"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkstsymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "walkendani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute1"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkendsymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "walkotani",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "salute2"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "wkothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "showtop",
                                        "type": "spine",
                                        "layer": "uplayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "rocket1"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "showtop.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "nonesp",
                                        "type": "sprite",
                                        "layer": "normallayer",
                                        "res": "empty.png"
                                    },
                                    "data": [
                                        "wdstsymbolaction.loop",
                                        "wdothersymbolaction.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "normalsp",
                                        "type": "spine",
                                        "layer": "normallayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "yq13_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinnormal.loop"
                                    ]
                                },
                                {
                                    "yAxis": {
                                        "name": "bottomsp",
                                        "type": "spine",
                                        "layer": "downlayer",
                                        "res": "symbol_yq13.json",
                                        "ani": [
                                            "yq13_idle"
                                        ],
                                        "isloop": 0
                                    },
                                    "data": [
                                        "spinscroll.start",
                                        "spinscroll.loop",
                                        "spinscroll.end"
                                    ]
                                }
                            ]
                        }
                    ],
                    "attribute": {
                        "SpinModule": 0,
                        "Walk": 0,
                        "ShowTopModule": 0,
                        "ShowGivenTopModule": 0,
                        "Walkdown": 0,
                        "offset": [
                            0,
                            40
                        ]
                    }
                }
            },
            {
                "name": "ReelObj.uplayer2"
            },
            {
                "name": "ReelObj.uplayer"
            },
            {
                "name": "moonwalkfgdown",
                "data": [
                    "fgnormal",
                    "bgnormal"
                ],
                "children": {
                    "sort": [
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
                        }
                    ],
                    "columns": [
                        "fgnormal.start",
                        "fgnormal.loop",
                        "fgnormal.end",
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "fg2",
                                "type": "spine",
                                "res": "12.json",
                                "ani": [
                                    "fg2"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "fgnormal.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "nonesp",
                                "type": "sprite",
                                "res": "empty.png"
                            },
                            "data": [
                                "bgnormal.loop"
                            ]
                        }
                    ]
                }
            },
            {
                "name": "ReelObj.normallayer"
            },
            {
                "name": "ReelObj.downlayer"
            },
            {
                "name": "gamebground",
                "data": [
                    "freeenter",
                    "fgnormal",
                    "freeextra",
                    "bgnormal"
                ],
                "children": {
                    "sort": [
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
                        },
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
                        }
                    ],
                    "columns": [
                        "freeenter.start",
                        "freeenter.loop",
                        "freeenter.end",
                        "fgnormal.start",
                        "fgnormal.loop",
                        "fgnormal.end",
                        "freeextra.start",
                        "freeextra.loop",
                        "freeextra.end",
                        "bgnormal.start",
                        "bgnormal.loop",
                        "bgnormal.end"
                    ],
                    "data": [
                        {
                            "yAxis": {
                                "name": "reelbgsp",
                                "type": "sprite",
                                "res": "reel2.png"
                            },
                            "data": [
                                "bgnormal.loop",
                                "fgnormal.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "chuangkou",
                                "type": "spine",
                                "res": "cabin.json",
                                "ani": [
                                    "cabin"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "bgnormal.loop",
                                "fgnormal.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "bgpt",
                                "type": "spine",
                                "res": "background.json",
                                "ani": [
                                    "putong"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "bgnormal.loop"
                            ]
                        },
                        {
                            "yAxis": {
                                "name": "bgmf",
                                "type": "spine",
                                "res": "background.json",
                                "ani": [
                                    "mianfei"
                                ],
                                "isloop": 1
                            },
                            "data": [
                                "fgnormal.loop"
                            ]
                        }
                    ]
                }
            }
        ],
        "assets": [
            {
                "fieldname": "0",
                "originalname": "12.atlas",
                "encoding": "7bit",
                "mimetype": "application/octet-stream",
                "size": 4236,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.atlas",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "1",
                "originalname": "12.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 202180,
                "type": "spine",
                "animations": [
                    "bonus1",
                    "bonus2",
                    "bonus3",
                    "bonus4",
                    "bonus5",
                    "fg1",
                    "fg2",
                    "fg3"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.json",
                "spineMiss": [],
                "spineAssets": {
                    "12.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.png",
                    "12.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.atlas"
                }
            },
            {
                "fieldname": "2",
                "originalname": "12.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 681507,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.png",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "3",
                "originalname": "background.atlas",
                "encoding": "7bit",
                "mimetype": "application/octet-stream",
                "size": 1238,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.atlas",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "4",
                "originalname": "background.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 87621,
                "type": "spine",
                "animations": [
                    "mianfei",
                    "putong"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.json",
                "spineMiss": [],
                "spineAssets": {
                    "background.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.png",
                    "background.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.atlas"
                }
            },
            {
                "fieldname": "5",
                "originalname": "background.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 1298034,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.png",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "6",
                "originalname": "symbol.atlas",
                "encoding": "7bit",
                "mimetype": "application/octet-stream",
                "size": 18391,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "7",
                "originalname": "symbol.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 1193845,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "8",
                "originalname": "symbol_a8.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 13663,
                "type": "spine",
                "animations": [
                    "8_idle",
                    "8_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_a8.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "9",
                "originalname": "symbol_dq2.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 27836,
                "type": "spine",
                "animations": [
                    "2_idle",
                    "2_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_dq2.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "10",
                "originalname": "symbol_hx3.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 55018,
                "type": "spine",
                "animations": [
                    "3_idle",
                    "3_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_hx3.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "11",
                "originalname": "symbol_j11.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 12173,
                "type": "spine",
                "animations": [
                    "11_idle",
                    "11_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_j11.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "12",
                "originalname": "symbol_jx5.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 86315,
                "type": "spine",
                "animations": [
                    "05_idle",
                    "05_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_jx5.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "13",
                "originalname": "symbol_k9.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 12039,
                "type": "spine",
                "animations": [
                    "9_idle",
                    "9_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_k9.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "14",
                "originalname": "symbol_mx1.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 36971,
                "type": "spine",
                "animations": [
                    "1_idle",
                    "1_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_mx1.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "15",
                "originalname": "symbol_q10.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 11981,
                "type": "spine",
                "animations": [
                    "10_idle",
                    "10_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_q10.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "16",
                "originalname": "symbol_sx4.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 52358,
                "type": "spine",
                "animations": [
                    "4_idle",
                    "4_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_sx4.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "17",
                "originalname": "symbol_tw7.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 86992,
                "type": "spine",
                "animations": [
                    "7_idle",
                    "7_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_tw7.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "18",
                "originalname": "symbol_tx6.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 51686,
                "type": "spine",
                "animations": [
                    "6_idle",
                    "6_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_tx6.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "19",
                "originalname": "symbol_ty0.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 78460,
                "type": "spine",
                "animations": [
                    "0_idle",
                    "0_win"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_ty0.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "20",
                "originalname": "symbol_yq13.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 170923,
                "type": "spine",
                "animations": [
                    "rocket1",
                    "run1",
                    "run2",
                    "run3",
                    "run4",
                    "salute1",
                    "salute2",
                    "yq13_idle",
                    "yq13_idle2"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_yq13.json",
                "spineMiss": [],
                "spineAssets": {
                    "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                }
            },
            {
                "fieldname": "21",
                "originalname": "uiobject.atlas",
                "encoding": "7bit",
                "mimetype": "application/octet-stream",
                "size": 11687,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "22",
                "originalname": "uiobject.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 1359999,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "23",
                "originalname": "uiobject_kgx.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 5438,
                "type": "spine",
                "animations": [
                    "uik1_0",
                    "uik1_1",
                    "uik1_3"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_kgx.json",
                "spineMiss": [],
                "spineAssets": {
                    "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                    "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                }
            },
            {
                "fieldname": "24",
                "originalname": "uiobject_lianxian.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 80939,
                "type": "spine",
                "animations": [
                    "line_1",
                    "line_2",
                    "line_3",
                    "line_4",
                    "line_5",
                    "line_6",
                    "line_7",
                    "line_8",
                    "line_9",
                    "line_10"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_lianxian.json",
                "spineMiss": [],
                "spineAssets": {
                    "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                    "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                }
            },
            {
                "fieldname": "25",
                "originalname": "uiobject_qidaikuang.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 6964,
                "type": "spine",
                "animations": [
                    "qdk"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_qidaikuang.json",
                "spineMiss": [],
                "spineAssets": {
                    "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                    "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                }
            },
            {
                "fieldname": "26",
                "originalname": "uiobject_win.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 285198,
                "type": "spine",
                "animations": [
                    "bwin_1",
                    "bwin_2",
                    "bwin_3",
                    "fg1",
                    "fg2",
                    "fg3",
                    "jiesuan1",
                    "jiesuan2",
                    "jiesuan3",
                    "mwin_1",
                    "mwin_2",
                    "mwin_3",
                    "swin_1",
                    "swin_2",
                    "swin_3",
                    "xian",
                    "zjmf15"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_win.json",
                "spineMiss": [],
                "spineAssets": {
                    "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                    "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                }
            },
            {
                "fieldname": "3",
                "originalname": "cabin.atlas",
                "encoding": "7bit",
                "mimetype": "application/octet-stream",
                "size": 2728,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.atlas",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "4",
                "originalname": "cabin.json",
                "encoding": "7bit",
                "mimetype": "application/json",
                "size": 19320,
                "type": "spine",
                "animations": [
                    "cabin"
                ],
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.json",
                "spineMiss": [],
                "spineAssets": {
                    "cabin.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.png",
                    "cabin.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.atlas"
                }
            },
            {
                "fieldname": "5",
                "originalname": "cabin.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 404127,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.png",
                "type": "spine",
                "spineMiss": []
            },
            {
                "fieldname": "0",
                "originalname": "logo.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 42686,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/logo.png",
                "type": "image"
            },
            {
                "fieldname": "15",
                "originalname": "empty.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 934,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/empty.png",
                "type": "image"
            },
            {
                "fieldname": "16",
                "originalname": "fgicon.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 73329,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/fgicon.png",
                "type": "image"
            },
            {
                "fieldname": "17",
                "originalname": "high_1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 74668,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/high_1.png",
                "type": "image"
            },
            {
                "fieldname": "31",
                "originalname": "low_A.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 72960,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_A.png",
                "type": "image"
            },
            {
                "fieldname": "32",
                "originalname": "low_J.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 71308,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_J.png",
                "type": "image"
            },
            {
                "fieldname": "33",
                "originalname": "low_K.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 71228,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_K.png",
                "type": "image"
            },
            {
                "fieldname": "34",
                "originalname": "low_Q.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 69879,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_Q.png",
                "type": "image"
            },
            {
                "fieldname": "35",
                "originalname": "mid_1.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 62714,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_1.png",
                "type": "image"
            },
            {
                "fieldname": "36",
                "originalname": "mid_2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 71092,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_2.png",
                "type": "image"
            },
            {
                "fieldname": "37",
                "originalname": "mid_3.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 66966,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_3.png",
                "type": "image"
            },
            {
                "fieldname": "38",
                "originalname": "mid_4.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 72941,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_4.png",
                "type": "image"
            },
            {
                "fieldname": "39",
                "originalname": "mid_5.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 60779,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_5.png",
                "type": "image"
            },
            {
                "fieldname": "40",
                "originalname": "mid_6.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 72908,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_6.png",
                "type": "image"
            },
            {
                "fieldname": "47",
                "originalname": "reel2.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 344842,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/reel2.png",
                "type": "image"
            },
            {
                "fieldname": "48",
                "originalname": "scatter.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 82434,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/scatter.png",
                "type": "image"
            },
            {
                "fieldname": "67",
                "originalname": "wild.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "size": 76919,
                "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/wild.png",
                "type": "image"
            }
        ],
        "sourcecode": "",
        "performanceData": {
            "parameter": {
                "type": "scroll",
                "width": 5,
                "height": 3,
                "symbolWidth": 185,
                "symbolHeight": 185
            },
            "assets": [
                {
                    "fieldname": "0",
                    "originalname": "12.atlas",
                    "encoding": "7bit",
                    "mimetype": "application/octet-stream",
                    "size": 4236,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.atlas",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "1",
                    "originalname": "12.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 202180,
                    "type": "spine",
                    "animations": [
                        "bonus1",
                        "bonus2",
                        "bonus3",
                        "bonus4",
                        "bonus5",
                        "fg1",
                        "fg2",
                        "fg3"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "12.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.png",
                        "12.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.atlas"
                    }
                },
                {
                    "fieldname": "2",
                    "originalname": "12.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 681507,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/12.png",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "3",
                    "originalname": "background.atlas",
                    "encoding": "7bit",
                    "mimetype": "application/octet-stream",
                    "size": 1238,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.atlas",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "4",
                    "originalname": "background.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 87621,
                    "type": "spine",
                    "animations": [
                        "mianfei",
                        "putong"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "background.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.png",
                        "background.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.atlas"
                    }
                },
                {
                    "fieldname": "5",
                    "originalname": "background.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 1298034,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/background.png",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "6",
                    "originalname": "symbol.atlas",
                    "encoding": "7bit",
                    "mimetype": "application/octet-stream",
                    "size": 18391,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "7",
                    "originalname": "symbol.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 1193845,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "8",
                    "originalname": "symbol_a8.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 13663,
                    "type": "spine",
                    "animations": [
                        "8_idle",
                        "8_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_a8.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "9",
                    "originalname": "symbol_dq2.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 27836,
                    "type": "spine",
                    "animations": [
                        "2_idle",
                        "2_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_dq2.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "10",
                    "originalname": "symbol_hx3.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 55018,
                    "type": "spine",
                    "animations": [
                        "3_idle",
                        "3_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_hx3.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "11",
                    "originalname": "symbol_j11.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 12173,
                    "type": "spine",
                    "animations": [
                        "11_idle",
                        "11_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_j11.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "12",
                    "originalname": "symbol_jx5.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 86315,
                    "type": "spine",
                    "animations": [
                        "05_idle",
                        "05_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_jx5.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "13",
                    "originalname": "symbol_k9.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 12039,
                    "type": "spine",
                    "animations": [
                        "9_idle",
                        "9_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_k9.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "14",
                    "originalname": "symbol_mx1.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 36971,
                    "type": "spine",
                    "animations": [
                        "1_idle",
                        "1_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_mx1.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "15",
                    "originalname": "symbol_q10.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 11981,
                    "type": "spine",
                    "animations": [
                        "10_idle",
                        "10_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_q10.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "16",
                    "originalname": "symbol_sx4.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 52358,
                    "type": "spine",
                    "animations": [
                        "4_idle",
                        "4_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_sx4.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "17",
                    "originalname": "symbol_tw7.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 86992,
                    "type": "spine",
                    "animations": [
                        "7_idle",
                        "7_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_tw7.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "18",
                    "originalname": "symbol_tx6.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 51686,
                    "type": "spine",
                    "animations": [
                        "6_idle",
                        "6_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_tx6.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "19",
                    "originalname": "symbol_ty0.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 78460,
                    "type": "spine",
                    "animations": [
                        "0_idle",
                        "0_win"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_ty0.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "20",
                    "originalname": "symbol_yq13.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 170923,
                    "type": "spine",
                    "animations": [
                        "rocket1",
                        "run1",
                        "run2",
                        "run3",
                        "run4",
                        "salute1",
                        "salute2",
                        "yq13_idle",
                        "yq13_idle2"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol_yq13.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "symbol.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.png",
                        "symbol.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/symbol.atlas"
                    }
                },
                {
                    "fieldname": "21",
                    "originalname": "uiobject.atlas",
                    "encoding": "7bit",
                    "mimetype": "application/octet-stream",
                    "size": 11687,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "22",
                    "originalname": "uiobject.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 1359999,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "23",
                    "originalname": "uiobject_kgx.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 5438,
                    "type": "spine",
                    "animations": [
                        "uik1_0",
                        "uik1_1",
                        "uik1_3"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_kgx.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                        "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                    }
                },
                {
                    "fieldname": "24",
                    "originalname": "uiobject_lianxian.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 80939,
                    "type": "spine",
                    "animations": [
                        "line_1",
                        "line_2",
                        "line_3",
                        "line_4",
                        "line_5",
                        "line_6",
                        "line_7",
                        "line_8",
                        "line_9",
                        "line_10"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_lianxian.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                        "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                    }
                },
                {
                    "fieldname": "25",
                    "originalname": "uiobject_qidaikuang.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 6964,
                    "type": "spine",
                    "animations": [
                        "qdk"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_qidaikuang.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                        "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                    }
                },
                {
                    "fieldname": "26",
                    "originalname": "uiobject_win.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 285198,
                    "type": "spine",
                    "animations": [
                        "bwin_1",
                        "bwin_2",
                        "bwin_3",
                        "fg1",
                        "fg2",
                        "fg3",
                        "jiesuan1",
                        "jiesuan2",
                        "jiesuan3",
                        "mwin_1",
                        "mwin_2",
                        "mwin_3",
                        "swin_1",
                        "swin_2",
                        "swin_3",
                        "xian",
                        "zjmf15"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject_win.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "uiobject.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.png",
                        "uiobject.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/uiobject.atlas"
                    }
                },
                {
                    "fieldname": "3",
                    "originalname": "cabin.atlas",
                    "encoding": "7bit",
                    "mimetype": "application/octet-stream",
                    "size": 2728,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.atlas",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "4",
                    "originalname": "cabin.json",
                    "encoding": "7bit",
                    "mimetype": "application/json",
                    "size": 19320,
                    "type": "spine",
                    "animations": [
                        "cabin"
                    ],
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.json",
                    "spineMiss": [],
                    "spineAssets": {
                        "cabin.png": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.png",
                        "cabin.atlas": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.atlas"
                    }
                },
                {
                    "fieldname": "5",
                    "originalname": "cabin.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 404127,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/cabin.png",
                    "type": "spine",
                    "spineMiss": []
                },
                {
                    "fieldname": "0",
                    "originalname": "logo.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 42686,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/logo.png",
                    "type": "image"
                },
                {
                    "fieldname": "15",
                    "originalname": "empty.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 934,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/empty.png",
                    "type": "image"
                },
                {
                    "fieldname": "16",
                    "originalname": "fgicon.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 73329,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/fgicon.png",
                    "type": "image"
                },
                {
                    "fieldname": "17",
                    "originalname": "high_1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 74668,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/high_1.png",
                    "type": "image"
                },
                {
                    "fieldname": "31",
                    "originalname": "low_A.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 72960,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_A.png",
                    "type": "image"
                },
                {
                    "fieldname": "32",
                    "originalname": "low_J.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 71308,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_J.png",
                    "type": "image"
                },
                {
                    "fieldname": "33",
                    "originalname": "low_K.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 71228,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_K.png",
                    "type": "image"
                },
                {
                    "fieldname": "34",
                    "originalname": "low_Q.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 69879,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/low_Q.png",
                    "type": "image"
                },
                {
                    "fieldname": "35",
                    "originalname": "mid_1.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 62714,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_1.png",
                    "type": "image"
                },
                {
                    "fieldname": "36",
                    "originalname": "mid_2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 71092,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_2.png",
                    "type": "image"
                },
                {
                    "fieldname": "37",
                    "originalname": "mid_3.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 66966,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_3.png",
                    "type": "image"
                },
                {
                    "fieldname": "38",
                    "originalname": "mid_4.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 72941,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_4.png",
                    "type": "image"
                },
                {
                    "fieldname": "39",
                    "originalname": "mid_5.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 60779,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_5.png",
                    "type": "image"
                },
                {
                    "fieldname": "40",
                    "originalname": "mid_6.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 72908,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/mid_6.png",
                    "type": "image"
                },
                {
                    "fieldname": "47",
                    "originalname": "reel2.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 344842,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/reel2.png",
                    "type": "image"
                },
                {
                    "fieldname": "48",
                    "originalname": "scatter.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 82434,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/scatter.png",
                    "type": "image"
                },
                {
                    "fieldname": "67",
                    "originalname": "wild.png",
                    "encoding": "7bit",
                    "mimetype": "image/png",
                    "size": 76919,
                    "url": "https://gameres.rgs.blugurugames.com/gameproduction/quickslots/4p09QwE5ZRZ0OAc9ToJIN/wild.png",
                    "type": "image"
                }
            ],
            "symData": [
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
                "L",
                "FG",
                "SC"
            ],
            "rootLayer": [
                {
                    "name": "spinetest"
                },
                {
                    "name": "freeani"
                },
                {
                    "name": "winani"
                },
                {
                    "name": "gamelogo"
                },
                {
                    "name": "sccolect"
                },
                {
                    "name": "winlianxian"
                },
                {
                    "name": "moonwalkfg"
                },
                {
                    "name": "ReelObj"
                },
                {
                    "name": "ReelObj.uplayer2"
                },
                {
                    "name": "ReelObj.uplayer"
                },
                {
                    "name": "moonwalkfgdown"
                },
                {
                    "name": "ReelObj.normallayer"
                },
                {
                    "name": "ReelObj.downlayer"
                },
                {
                    "name": "gamebground"
                }
            ],
            "data": {
                "spinetest": {
                    "actions": [
                        {
                            "name": "spinetest",
                            "type": "spine",
                            "res": "symbol_yq13.json",
                            "ani": [
                                "rocket1"
                            ],
                            "isloop": 1
                        }
                    ]
                },
                "freeani": {
                    "actions": [
                        {
                            "name": "enterstart",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "fg1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "enterloop",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "fg2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "enterend",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "fg3"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "exitstart",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "jiesuan1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "exitloop",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "jiesuan2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "exitend",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "jiesuan3"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "extraloop",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "zjmf15"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "extraend",
                            "type": "sprite",
                            "res": "empty.png"
                        }
                    ],
                    "freeenter.start": [
                        0
                    ],
                    "freeenter.loop": [
                        1
                    ],
                    "freeenter.end": [
                        2
                    ],
                    "freeexit.start": [
                        3
                    ],
                    "freeexit.loop": [
                        4
                    ],
                    "freeexit.end": [
                        5
                    ],
                    "freeextra.loop": [
                        6
                    ],
                    "freeextra.end": [
                        7
                    ]
                },
                "winani": {
                    "actions": [
                        {
                            "name": "winanibig1",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "bwin_1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "winanibig2",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "bwin_2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "winanibig3",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "bwin_3"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "winanisuper1",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "swin_1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "winanisuper2",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "swin_2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "winanisuper3",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "swin_3"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "winanimega1",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "mwin_1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "winanimega2",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "mwin_2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "winanimega3",
                            "type": "spine",
                            "res": "uiobject_win.json",
                            "ani": [
                                "mwin_3"
                            ],
                            "isloop": 0
                        }
                    ],
                    "bigwin.start": [
                        0
                    ],
                    "bigwin.loop": [
                        1
                    ],
                    "bigwin.end": [
                        2
                    ],
                    "superwin.start": [
                        3
                    ],
                    "superwin.loop": [
                        4
                    ],
                    "superwin.end": [
                        5
                    ],
                    "megawin.start": [
                        6
                    ],
                    "megawin.loop": [
                        7
                    ],
                    "megawin.end": [
                        8
                    ]
                },
                "gamelogo": {
                    "actions": [
                        {
                            "name": "logo",
                            "type": "sprite",
                            "res": "logo.png"
                        }
                    ],
                    "bgnormal.loop": [
                        0
                    ]
                },
                "sccolect": {
                    "actions": []
                },
                "winlianxian": {
                    "actions": [
                        {
                            "name": "lianshow",
                            "type": "spine",
                            "res": "uiobject_lianxian.json",
                            "ani": [
                                "line_1",
                                "line_2",
                                "line_3",
                                "line_4",
                                "line_5",
                                "line_6",
                                "line_7",
                                "line_8",
                                "line_9",
                                "line_10"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "emptysp",
                            "type": "sprite",
                            "res": "empty.png"
                        }
                    ],
                    "showtop.loop": [
                        0
                    ],
                    "showtop.end": [
                        1
                    ]
                },
                "moonwalkfg": {
                    "actions": [
                        {
                            "name": "fg1",
                            "type": "spine",
                            "res": "12.json",
                            "ani": [
                                "fg1"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "fg2",
                            "type": "spine",
                            "res": "12.json",
                            "ani": [
                                "fg2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "fg3",
                            "type": "spine",
                            "res": "12.json",
                            "ani": [
                                "fg3"
                            ],
                            "isloop": 0
                        },
                        {
                            "name": "nonesp",
                            "type": "sprite",
                            "res": "empty.png"
                        }
                    ],
                    "fgnormal.start": [
                        0
                    ],
                    "wdstsymbolaction.loop": [
                        2
                    ],
                    "bgnormal.loop": [
                        3
                    ],
                    "fgnormal.loop": [
                        3
                    ],
                    "wdstsymbolaction.end": [
                        3
                    ]
                },
                "ReelObj": {
                    "WL": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_ty0.json",
                                "ani": [
                                    "0_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_ty0.json",
                                "ani": [
                                    "0_idle"
                                ],
                                "isloop": 1
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_ty0.json",
                                "ani": [
                                    "0_idle"
                                ],
                                "isloop": 1
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "A": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_mx1.json",
                                "ani": [
                                    "1_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_mx1.json",
                                "ani": [
                                    "1_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_mx1.json",
                                "ani": [
                                    "1_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.end": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.start": [
                            4
                        ]
                    },
                    "B": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_dq2.json",
                                "ani": [
                                    "2_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_dq2.json",
                                "ani": [
                                    "2_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_dq2.json",
                                "ani": [
                                    "2_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "C": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_hx3.json",
                                "ani": [
                                    "3_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_hx3.json",
                                "ani": [
                                    "3_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_hx3.json",
                                "ani": [
                                    "3_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "D": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_sx4.json",
                                "ani": [
                                    "4_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_sx4.json",
                                "ani": [
                                    "4_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_sx4.json",
                                "ani": [
                                    "4_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "E": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_jx5.json",
                                "ani": [
                                    "05_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_jx5.json",
                                "ani": [
                                    "05_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_jx5.json",
                                "ani": [
                                    "05_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "F": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_tx6.json",
                                "ani": [
                                    "6_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_tx6.json",
                                "ani": [
                                    "6_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_tx6.json",
                                "ani": [
                                    "6_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "G": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_tw7.json",
                                "ani": [
                                    "7_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_tw7.json",
                                "ani": [
                                    "7_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_tw7.json",
                                "ani": [
                                    "7_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "H": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_a8.json",
                                "ani": [
                                    "8_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_a8.json",
                                "ani": [
                                    "8_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_a8.json",
                                "ani": [
                                    "8_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "J": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_k9.json",
                                "ani": [
                                    "9_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_k9.json",
                                "ani": [
                                    "9_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_k9.json",
                                "ani": [
                                    "9_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "K": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_q10.json",
                                "ani": [
                                    "10_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_q10.json",
                                "ani": [
                                    "10_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_q10.json",
                                "ani": [
                                    "10_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "L": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_j11.json",
                                "ani": [
                                    "11_win"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_j11.json",
                                "ani": [
                                    "11_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_j11.json",
                                "ani": [
                                    "11_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "FG": {
                        "actions": [
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "12.json",
                                "ani": [
                                    "bonus4"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "12.json",
                                "ani": [
                                    "bonus3"
                                ],
                                "isloop": 1
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "12.json",
                                "ani": [
                                    "bonus1"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkothersymbolaction.loop": [
                            0,
                            3
                        ],
                        "wkothersymbolaction.end": [
                            0,
                            2
                        ],
                        "showtop.loop": [
                            1
                        ],
                        "wdothersymbolaction.loop": [
                            2
                        ],
                        "spinnormal.loop": [
                            3
                        ],
                        "spinscroll.start": [
                            4
                        ],
                        "spinscroll.loop": [
                            4
                        ],
                        "spinscroll.end": [
                            4
                        ]
                    },
                    "SC": {
                        "actions": [
                            {
                                "name": "walkstani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "run1",
                                    "run2",
                                    "run3",
                                    "run4"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "walkendani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute1"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "walkotani",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "salute2"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "showtop",
                                "type": "spine",
                                "layer": "uplayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "rocket1"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "nonesp",
                                "type": "sprite",
                                "layer": "normallayer",
                                "res": "empty.png"
                            },
                            {
                                "name": "normalsp",
                                "type": "spine",
                                "layer": "normallayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "yq13_idle"
                                ],
                                "isloop": 0
                            },
                            {
                                "name": "bottomsp",
                                "type": "spine",
                                "layer": "downlayer",
                                "res": "symbol_yq13.json",
                                "ani": [
                                    "yq13_idle"
                                ],
                                "isloop": 0
                            }
                        ],
                        "wkstsymbolaction.loop": [
                            0
                        ],
                        "wkendsymbolaction.loop": [
                            1
                        ],
                        "wkothersymbolaction.loop": [
                            2
                        ],
                        "showtop.loop": [
                            3
                        ],
                        "wdstsymbolaction.loop": [
                            4
                        ],
                        "wdothersymbolaction.loop": [
                            4
                        ],
                        "spinnormal.loop": [
                            5
                        ],
                        "spinscroll.start": [
                            6
                        ],
                        "spinscroll.loop": [
                            6
                        ],
                        "spinscroll.end": [
                            6
                        ]
                    }
                },
                "moonwalkfgdown": {
                    "actions": [
                        {
                            "name": "fg2",
                            "type": "spine",
                            "res": "12.json",
                            "ani": [
                                "fg2"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "nonesp",
                            "type": "sprite",
                            "res": "empty.png"
                        }
                    ],
                    "fgnormal.loop": [
                        0
                    ],
                    "bgnormal.loop": [
                        1
                    ]
                },
                "gamebground": {
                    "actions": [
                        {
                            "name": "reelbgsp",
                            "type": "sprite",
                            "res": "reel2.png"
                        },
                        {
                            "name": "chuangkou",
                            "type": "spine",
                            "res": "cabin.json",
                            "ani": [
                                "cabin"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "bgpt",
                            "type": "spine",
                            "res": "background.json",
                            "ani": [
                                "putong"
                            ],
                            "isloop": 1
                        },
                        {
                            "name": "bgmf",
                            "type": "spine",
                            "res": "background.json",
                            "ani": [
                                "mianfei"
                            ],
                            "isloop": 1
                        }
                    ],
                    "bgnormal.loop": [
                        0,
                        1,
                        2
                    ],
                    "fgnormal.loop": [
                        0,
                        1,
                        3
                    ]
                }
            },
            "statedata": {
                "bg-spin": {
                    "list": [
                        "bg-spin"
                    ],
                    "module": "SpinModule",
                    "performance": ""
                },
                "bg-walk": {
                    "list": [
                        "bg-walk"
                    ],
                    "module": "Walk",
                    "performance": ""
                },
                "bg-top": {
                    "list": [
                        "bg-paylines",
                        "bg-payfg"
                    ],
                    "module": "ShowTopModule",
                    "performance": ""
                },
                "bg-paysc": {
                    "list": [
                        "bg-paysc"
                    ],
                    "module": "ShowGivenTopModule",
                    "performance": ""
                },
                "bg-win": {
                    "list": [
                        "bg-spin"
                    ],
                    "module": "WinAniModule",
                    "performance": ""
                },
                "bg-triggerfg": {
                    "list": [
                        "bg-triggerfg"
                    ],
                    "module": "FgModule",
                    "performance": ""
                },
                "fg-spin": {
                    "list": [
                        "fg-spin"
                    ],
                    "module": "SpinModule",
                    "performance": ""
                },
                "fg-walkdown": {
                    "list": [
                        "fg-walkdown"
                    ],
                    "module": "Walkdown",
                    "performance": ""
                },
                "fg-walk": {
                    "list": [
                        "fg-walk"
                    ],
                    "module": "Walk",
                    "performance": ""
                },
                "fg-top": {
                    "list": [
                        "fg-paylines",
                        "fg-payfg"
                    ],
                    "module": "ShowTopModule",
                    "performance": ""
                },
                "fg-paysc": {
                    "list": [
                        "fg-paysc"
                    ],
                    "module": "ShowGivenTopModule",
                    "performance": ""
                },
                "fg-win": {
                    "list": [
                        "fg-spin"
                    ],
                    "module": "ShowTopModule",
                    "performance": ""
                },
                "fg-fgtrigger": {
                    "list": [
                        "fg-fgtrigger"
                    ],
                    "module": "FreeExtraMod",
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
            },
            "statelist": [
                "fg-paysc",
                "fg-walk",
                "fg-end",
                "fg-spin",
                "bg-top",
                "bg-spin",
                "fg-walkdown",
                "bg-win",
                "fg-top",
                "fg-win",
                "bg-paysc",
                "bg-triggerfg",
                "fg-fgtrigger",
                "bg-walk"
            ]
        },
        "symdata": [
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
            "L",
            "FG",
            "SC"
        ],
        "symData": [
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
            "L",
            "FG",
            "SC"
        ]
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