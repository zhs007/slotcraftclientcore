const { SCLogicMgr } = require('../src/index.js');

let Logic = {};
Logic.instance = new SCLogicMgr();

let cfgdata = {
    "10": {
        "label": "normal",
        "bet": 10,
        "graph": {
            "cells": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#DC143C",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "5d0f7aaf-dfca-4990-9e22-5fdddc3c76ae",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "8f887090-a546-4b97-a9a5-af0e9ec64cb2",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "1ead20a2-496c-4eff-8e33-5da1885d9b5a",
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
                    "id": "8c2037b1-094b-4c3f-ac57-cc79ea12bcb2",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "9d429b5e-c462-4c48-800f-72a30f86a00c",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "8f887090-a546-4b97-a9a5-af0e9ec64cb2",
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
                    "id": "b07ec512-ce6a-4b63-bd34-f4dfed20c128",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "1ead20a2-496c-4eff-8e33-5da1885d9b5a",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "eb20c8ca-4692-4d60-b958-39bf2702b5e5",
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
                    "id": "f41176f4-f1cb-484a-bc4a-4a4189d9db6a",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "eb20c8ca-4692-4d60-b958-39bf2702b5e5",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "3973a322-4782-4ecc-9ad3-39a1a1bddd8a",
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
                    "id": "51598186-a49e-4639-80e0-b71a783fbf3e",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "3973a322-4782-4ecc-9ad3-39a1a1bddd8a",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "747db60e-af34-4130-9446-67e9730cf74f",
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
                    "id": "69df9395-c133-4377-b301-b384c98a7dea",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "747db60e-af34-4130-9446-67e9730cf74f",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "2bbbf02a-cc52-4b74-bc21-dc0a5ec10e9a",
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
                    "id": "118acc5a-17e3-46e8-9173-a0a30a75722b",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "2bbbf02a-cc52-4b74-bc21-dc0a5ec10e9a",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "b17282a3-681c-49f4-a4d5-1122b22a9c90",
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
                    "id": "986656e2-c53c-4335-b107-47593cf3b8c7",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b17282a3-681c-49f4-a4d5-1122b22a9c90",
                        "port": "loop-component-groups-out"
                    },
                    "target": {
                        "cell": "b8cf1806-2a1a-4f88-9436-9164721e93cd",
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
                    "id": "274a1cf3-08b7-43a6-8d69-b33743a630ef",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b8cf1806-2a1a-4f88-9436-9164721e93cd",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "25ce3588-f21c-4bdb-9ba4-82fb2962823d",
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
                    "id": "7020c8b0-933b-4143-bc58-65b9f2d20cd8",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "25ce3588-f21c-4bdb-9ba4-82fb2962823d",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "74bd7b1d-c3a2-4233-a0f3-963a59cf0f82",
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
                    "id": "d94a3ec7-b239-4ead-9240-0bdc21c99b26",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "74bd7b1d-c3a2-4233-a0f3-963a59cf0f82",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "dd586cec-f841-4488-b9fa-ddeb3715b979",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "9645126a-423a-4b37-bef4-fd24be7f8bee",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "f88b1b43-2b5d-4008-99e4-8e8488468509",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "e87df27b-1422-4deb-a324-590195e50c53",
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
                    "id": "d222d294-4d74-4449-af80-7aed41b98126",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "e87df27b-1422-4deb-a324-590195e50c53",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "9d429b5e-c462-4c48-800f-72a30f86a00c",
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
                    "id": "7115270a-83a8-4260-a821-80e6e17759d0",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "9d429b5e-c462-4c48-800f-72a30f86a00c",
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
                    "id": "2a7ca1f6-e372-4081-97ff-2b0a92933026",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "2bbbf02a-cc52-4b74-bc21-dc0a5ec10e9a",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "afa75995-1bc1-4b91-9f3a-3cc09409ae63",
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
                    "id": "cfff7ac5-33b6-4556-aadf-e07a4e9dd4d9",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "afa75995-1bc1-4b91-9f3a-3cc09409ae63",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "ffbfaa19-d2db-4de4-b2f2-4d4ae449aba4",
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
                    "id": "61d42425-9fbc-46d0-a237-e9df22058030",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "74bd7b1d-c3a2-4233-a0f3-963a59cf0f82",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "c1303217-0a8d-473f-b483-aef8af8dd75a",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-blue to red"
                    },
                    "target": {
                        "cell": "9645126a-423a-4b37-bef4-fd24be7f8bee",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "f7f6dd45-351f-4953-bb9d-b66d4aa86b95",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-blue to  green"
                    },
                    "target": {
                        "cell": "36f137e5-7517-4456-aadc-4ab06368b96f",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "a2c5230d-6024-4c44-ae4f-c0a90dee18ac",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-green to red"
                    },
                    "target": {
                        "cell": "1b79d5dc-0b4b-4450-9058-5cd3e8bc0885",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "17fc45cc-3767-4042-b755-a5d4899e1801",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-green to blue"
                    },
                    "target": {
                        "cell": "eb23e736-c62f-4cf9-9065-d830a5b80fdb",
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
                    "id": "497162dc-51bb-456b-a146-d86caffb7f05",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "1b79d5dc-0b4b-4450-9058-5cd3e8bc0885",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "7b3c257f-cd49-4819-a576-3aaa1667441f",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "eb23e736-c62f-4cf9-9065-d830a5b80fdb",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "902ce6fa-f237-452f-9bbc-b4e17a1fc628",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-red to green"
                    },
                    "target": {
                        "cell": "26363fb4-f66a-4266-86a1-9f9cc15db8b3",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "5c530943-07c3-4e7e-9e22-fbad460fc9c5",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                        "port": "vals-component-groups-out-red to blue"
                    },
                    "target": {
                        "cell": "2f3165c8-78dd-47a0-882f-60065640a7cc",
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
                    "id": "7d369de4-91fd-4d73-80c8-0321f7583e80",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "26363fb4-f66a-4266-86a1-9f9cc15db8b3",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "4554d16a-fea2-4dac-b60f-59681216c098",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "2f3165c8-78dd-47a0-882f-60065640a7cc",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "683c0dd7-7717-4243-91ec-efd186612d8e",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "36f137e5-7517-4456-aadc-4ab06368b96f",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
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
                    "id": "9ebe1ef0-351d-42f9-ba6e-3484bb60076d",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b849532b-eb26-41d7-819f-d46caaa17f1e",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "67949e08-46a5-4424-b43a-12325cefa2e7",
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
                    "id": "5c3f070a-e8ff-4460-91fc-2c08529479ee",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "67949e08-46a5-4424-b43a-12325cefa2e7",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "b9f28d5b-f90b-4f67-b229-bcf4111cb30e",
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
                    "id": "fcf92cf1-f6a3-49da-976e-daff8f4e2ee7",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b9f28d5b-f90b-4f67-b229-bcf4111cb30e",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "f81cb0bc-b26b-436a-9938-10060f7b8213",
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
                    "id": "f1df8408-c8d2-4367-b591-873034ef9a87",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "f81cb0bc-b26b-436a-9938-10060f7b8213",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "c768a1c2-afb1-4efc-87e8-5380f75e0661",
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
                    "id": "4ba36b94-045c-4816-9eb8-0fa5ceaace95",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "c768a1c2-afb1-4efc-87e8-5380f75e0661",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "027aeec2-eaa1-4f7d-85a7-cfa25d144962",
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
                    "id": "e1ebaafd-289f-4026-8835-36964e76c9ef",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "027aeec2-eaa1-4f7d-85a7-cfa25d144962",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "4c830e9d-1363-4597-9343-9ea384819d6b",
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
                    "id": "10222f9d-bb30-48b2-8727-ccf3ba88247e",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "4c830e9d-1363-4597-9343-9ea384819d6b",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "3eb98dec-73c7-47d2-88f8-3418046ad5ed",
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
                    "id": "fd798063-8e05-4b2b-b4c6-56b947a83031",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "3eb98dec-73c7-47d2-88f8-3418046ad5ed",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "8fc1942f-dc3b-49f3-b325-92302554960b",
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
                    "id": "941da417-4fef-45d1-b8e5-dfbc72617190",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "8fc1942f-dc3b-49f3-b325-92302554960b",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "a554dbfb-d14a-4c0a-8737-09096d738fc7",
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
                    "id": "e3505f18-414d-4bf4-9a4e-772ac6095391",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "3eb98dec-73c7-47d2-88f8-3418046ad5ed",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "a365cfee-3126-4f83-9e93-99d9bbc57193",
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
                    "id": "2ce38bf0-44d0-406e-a5ec-529f0cfd951b",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "a365cfee-3126-4f83-9e93-99d9bbc57193",
                        "port": "loop-component-groups-out"
                    },
                    "target": {
                        "cell": "0c50befd-7882-42ed-9f5f-ee74c60db265",
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
                    "id": "af4d320e-0354-442d-a3b2-9dfe177bf09e",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "0c50befd-7882-42ed-9f5f-ee74c60db265",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "19ef63a0-9bac-4eca-9d50-c4a6b1f21f44",
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
                    "id": "161a56b3-10f0-4f0b-9ad4-fef3d8460146",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "19ef63a0-9bac-4eca-9d50-c4a6b1f21f44",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "64ccd383-d8fa-4e13-8ae3-cda9f1d9e1fb",
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
                    "id": "4e337e2a-3038-4d87-a1f1-2ed6c89175a1",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "64ccd383-d8fa-4e13-8ae3-cda9f1d9e1fb",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "44c52fbe-b36b-42e8-8d14-9f51b5aa6a70",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-green to red"
                    },
                    "target": {
                        "cell": "cd754b81-73d1-41d5-956d-d154e59eb8f2",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "53ce66ba-10e4-4687-946f-40a5adcda6ec",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-green to blue"
                    },
                    "target": {
                        "cell": "83eb0050-1f73-4608-be9b-8c462b4d4f58",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "eefbe7c2-80cd-46da-b13c-a1b6accc3174",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-red to green"
                    },
                    "target": {
                        "cell": "a6f857aa-f928-4ce6-b8a7-69a8b260ad9d",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "93625fb0-0fbc-4fe9-aa45-4c392e9411b5",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-red to blue"
                    },
                    "target": {
                        "cell": "b09c7850-6811-4fc0-b993-e150ee9e4f91",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "5d91de6b-2e8f-4f2a-a5bc-52ddd664b680",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-blue to  green"
                    },
                    "target": {
                        "cell": "03b065b4-a8f2-4bad-bd4b-637b1703bb45",
                        "port": "component-groups-in"
                    }
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#696969",
                            "strokeWidth": 3,
                            "strokeDasharray": 0
                        }
                    },
                    "id": "5d44efe3-f65d-46e6-87dd-02f0c62ee14b",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "bf048654-4529-4696-aa4f-3b00d828412e",
                        "port": "vals-component-groups-out-blue to red"
                    },
                    "target": {
                        "cell": "f4bfe15b-2d8c-4648-bb66-99bdf9d7ca04",
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
                    "id": "dffcac95-cdcf-4a39-bc89-5db156a819a7",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "cd754b81-73d1-41d5-956d-d154e59eb8f2",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "8ce5014a-4d77-4e11-bd27-64cee2b6d348",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "83eb0050-1f73-4608-be9b-8c462b4d4f58",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "f7e76107-837d-4de5-835d-f62368cbf6e5",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "a6f857aa-f928-4ce6-b8a7-69a8b260ad9d",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "21171457-a8b2-40ca-8374-cafaad1e3bec",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b09c7850-6811-4fc0-b993-e150ee9e4f91",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "d9a47d64-15fb-4eb3-a1f7-131287cde7d0",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "f4bfe15b-2d8c-4648-bb66-99bdf9d7ca04",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "99a37ca8-3a94-420e-becc-cfe0c593e059",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "03b065b4-a8f2-4bad-bd4b-637b1703bb45",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "4c4cfb31-df5f-461d-ab37-ecab77bea2dc",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
                        "port": "jump-component-groups-out"
                    },
                    "target": {
                        "cell": "ba2c1444-9079-409d-b160-3695932bd45a",
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
                    "id": "b1cc66d2-9b96-4a27-8837-c082f60ceae8",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "67949e08-46a5-4424-b43a-12325cefa2e7",
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
                    "id": "56574bc2-72cc-4e2f-8771-0bb63aab52a7",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "ba2c1444-9079-409d-b160-3695932bd45a",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "67949e08-46a5-4424-b43a-12325cefa2e7",
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
                    "id": "2aa7a51a-dd17-4222-a6c8-cbde235eddb6",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "cbcfeb0f-ab09-4278-b499-84fbbbc3dc03",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "9d429b5e-c462-4c48-800f-72a30f86a00c",
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
                    "id": "ed7f7610-e744-428c-9524-5e820c82ad4f",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "64ccd383-d8fa-4e13-8ae3-cda9f1d9e1fb",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
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
                    "id": "37cf2ca2-fe8c-4edc-aed0-1983556221b8",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "651f494d-ea6e-41f2-a73d-943046c454da",
                        "port": "start-out"
                    },
                    "target": {
                        "cell": "cbcfeb0f-ab09-4278-b499-84fbbbc3dc03",
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
                    "id": "2adbf2f8-956a-4a7f-b94b-5751e2f83e40",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "ffbfaa19-d2db-4de4-b2f2-4d4ae449aba4",
                        "port": "component-groups-out"
                    },
                    "target": {
                        "cell": "b2423037-b8df-4685-b15a-7d822c158dff",
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
                    "id": "1cee8a74-c340-47ee-a808-141be6d046d7",
                    "zIndex": -1,
                    "labels": [
                        {
                            "position": 0.5,
                            "data": null
                        }
                    ],
                    "source": {
                        "cell": "b2423037-b8df-4685-b15a-7d822c158dff",
                        "port": "loop-component-groups-out"
                    },
                    "target": {
                        "cell": "b849532b-eb26-41d7-819f-d46caaa17f1e",
                        "port": "component-groups-in"
                    }
                },
                {
                    "position": {
                        "x": 0,
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
                    "id": "651f494d-ea6e-41f2-a73d-943046c454da",
                    "zIndex": 1,
                    "basicComponentData": null,
                    "data": null
                },
                {
                    "position": {
                        "x": 710,
                        "y": -310
                    },
                    "size": {
                        "width": 400,
                        "height": 692
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "9d429b5e-c462-4c48-800f-72a30f86a00c",
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
                    "zIndex": 3,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "BH",
                                "BM",
                                "BM2",
                                "BL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "bg-piggybank"
                        },
                        "label": "bg-payblue",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-blue",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "bg-payblue",
                                    "symbolNum"
                                ]
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
                        "x": 5450,
                        "y": -1280
                    },
                    "size": {
                        "width": 400,
                        "height": 165
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "ffbfaa19-d2db-4de4-b2f2-4d4ae449aba4",
                    "label": "PiggyBank",
                    "item": {
                        "key": "PiggyBank",
                        "label": "PiggyBank",
                        "out": [
                            "totalWins"
                        ],
                        "configuration": [
                            {
                                "label": "winMulti",
                                "type": "inputNumber1",
                                "defaultValue": 1
                            }
                        ],
                        "componentval": [
                            "winMulti",
                            "savedMoney"
                        ]
                    },
                    "zIndex": 4,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "winMulti": 1
                        },
                        "label": "bg-piggybank"
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
                        "x": 1280,
                        "y": -310
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "8f887090-a546-4b97-a9a5-af0e9ec64cb2",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 5,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "true",
                            "maxVal": 20
                        },
                        "label": "bg-blue",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-blueeffect",
                                    "queue"
                                ],
                                "valueNum": 1
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
                        "x": 1860,
                        "y": -240
                    },
                    "size": {
                        "width": 400,
                        "height": 692
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "1ead20a2-496c-4eff-8e33-5da1885d9b5a",
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
                    "zIndex": 6,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "RH",
                                "RM",
                                "RM2",
                                "RL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "bg-piggybank"
                        },
                        "label": "bg-payred",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-red",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "bg-payred",
                                    "symbolNum"
                                ]
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
                        "x": 2450,
                        "y": -320
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "eb20c8ca-4692-4d60-b958-39bf2702b5e5",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 7,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "true",
                            "maxVal": 20
                        },
                        "label": "bg-red",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-piggybank",
                                    "winMulti"
                                ],
                                "valueNum": 1
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
                        "x": 3010,
                        "y": -360
                    },
                    "size": {
                        "width": 400,
                        "height": 692
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "3973a322-4782-4ecc-9ad3-39a1a1bddd8a",
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
                    "zIndex": 8,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "GH",
                                "GM",
                                "GM2",
                                "GL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "bg-piggybank"
                        },
                        "label": "bg-paygreen",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-green",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "bg-paygreen",
                                    "symbolNum"
                                ]
                            }
                        ],
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
                        "x": 3600,
                        "y": -340
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "747db60e-af34-4130-9446-67e9730cf74f",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 9,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "true",
                            "maxVal": 20
                        },
                        "label": "bg-green",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "bg-greeneffect",
                                    "queue"
                                ],
                                "valueNum": 1
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
                        "x": 4170,
                        "y": -320
                    },
                    "size": {
                        "width": 400,
                        "height": 328
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "2bbbf02a-cc52-4b74-bc21-dc0a5ec10e9a",
                    "label": "RemoveSymbols",
                    "item": {
                        "key": "RemoveSymbols",
                        "label": "RemoveSymbols",
                        "out": [
                            "removeSymbolNum"
                        ],
                        "configuration": [
                            {
                                "label": "targetComponents",
                                "type": "selectWinResultNode"
                            },
                            {
                                "label": "ignoreSymbols",
                                "type": "selectSymbols"
                            }
                        ],
                        "controller": "true"
                    },
                    "zIndex": 10,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "targetComponents": [
                                "bg-payblue",
                                "bg-payred",
                                "bg-paygreen"
                            ]
                        },
                        "label": "bg-remove",
                        "controller": [
                            {
                                "type": "addRespinTimes",
                                "target": "bg-respin",
                                "times": 1
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
                        "x": 4770,
                        "y": -230
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b17282a3-681c-49f4-a4d5-1122b22a9c90",
                    "label": "Respin",
                    "item": {
                        "key": "Respin",
                        "label": "Respin",
                        "configuration": []
                    },
                    "zIndex": 11,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "bg-respin"
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
                        "x": 5320,
                        "y": -240
                    },
                    "size": {
                        "width": 400,
                        "height": 165
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b8cf1806-2a1a-4f88-9436-9164721e93cd",
                    "label": "DropDownSymbols",
                    "item": {
                        "key": "DropDownSymbols",
                        "label": "DropDownSymbols",
                        "configuration": [
                            {
                                "label": "holdSymbols",
                                "type": "selectSymbols"
                            }
                        ]
                    },
                    "zIndex": 12,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "bg-dropdown"
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
                        "x": 5850,
                        "y": -190
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "25ce3588-f21c-4bdb-9ba4-82fb2962823d",
                    "label": "RefillSymbols",
                    "item": {
                        "key": "RefillSymbols",
                        "label": "RefillSymbols",
                        "configuration": []
                    },
                    "zIndex": 13,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "bg-refill"
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
                        "x": 6370,
                        "y": -180
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "74bd7b1d-c3a2-4233-a0f3-963a59cf0f82",
                    "label": "DelayQueue",
                    "item": {
                        "key": "DelayQueue",
                        "label": "DelayQueue",
                        "configuration": [],
                        "componentval": [
                            "queue"
                        ]
                    },
                    "zIndex": 14,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "bg-blueeffect"
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
                        "x": 7320,
                        "y": 780
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "9645126a-423a-4b37-bef4-fd24be7f8bee",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 15,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "BH",
                                    "targetSymbol": "RH"
                                },
                                {
                                    "srcSymbols": "BM",
                                    "targetSymbol": "RM"
                                },
                                {
                                    "srcSymbols": "BM2",
                                    "targetSymbol": "RM2"
                                },
                                {
                                    "srcSymbols": "BL",
                                    "targetSymbol": "RL"
                                }
                            ]
                        },
                        "label": "bg-blue2red"
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
                        "x": 8020,
                        "y": 880
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "c52cfb95-aeb2-480e-9fe8-3b5e8c4fc8cc",
                    "label": "DelayQueue",
                    "item": {
                        "key": "DelayQueue",
                        "label": "DelayQueue",
                        "configuration": [],
                        "componentval": [
                            "queue"
                        ]
                    },
                    "zIndex": 16,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "bg-greeneffect"
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
                        "x": 8740,
                        "y": 1140
                    },
                    "size": {
                        "width": 400,
                        "height": 321
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "e87df27b-1422-4deb-a324-590195e50c53",
                    "label": "AddSymbols",
                    "item": {
                        "key": "AddSymbols",
                        "label": "AddSymbols",
                        "out": [
                            "symbols"
                        ],
                        "configuration": [
                            {
                                "label": "symbol",
                                "type": "selectSymbol",
                                "required": true
                            },
                            {
                                "label": "symbolNumType",
                                "type": "select",
                                "association": [
                                    "symbolNum",
                                    "symbolNumWeight"
                                ],
                                "required": true,
                                "option": [
                                    {
                                        "label": "number",
                                        "value": "number"
                                    },
                                    {
                                        "label": "weight",
                                        "value": "weight"
                                    }
                                ]
                            },
                            {
                                "label": "symbolNum",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1,
                                "show": {
                                    "label": "symbolNumType",
                                    "value": [
                                        "number"
                                    ]
                                }
                            },
                            {
                                "label": "symbolNumWeight",
                                "type": "selectIntValWeight",
                                "required": true,
                                "show": {
                                    "label": "symbolNumType",
                                    "value": [
                                        "weight"
                                    ]
                                }
                            },
                            {
                                "label": "ignoreSymbols",
                                "type": "selectSymbols"
                            }
                        ],
                        "componentval": [
                            "symbolNum"
                        ]
                    },
                    "zIndex": 17,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "symbol": "WL",
                            "symbolNumType": "number",
                            "symbolNum": 1,
                            "ignoreSymbols": [
                                "WL",
                                "SC"
                            ]
                        },
                        "label": "bg-addwl"
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
                        "x": 4750,
                        "y": -1260
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "afa75995-1bc1-4b91-9f3a-3cc09409ae63",
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
                    "zIndex": 18,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "respinNum",
                            "winMulti": 1,
                            "betType": "noPay",
                            "triggerType": "countscatter",
                            "symbols": [
                                "SC"
                            ],
                            "respinComponent": "fg-start",
                            "genRespinType": "number",
                            "respinNum": 10,
                            "minNum": 4
                        },
                        "label": "bg-fgtrigger"
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
                        "x": 6060,
                        "y": -1280
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b2423037-b8df-4685-b15a-7d822c158dff",
                    "label": "Respin",
                    "item": {
                        "key": "Respin",
                        "label": "Respin",
                        "configuration": []
                    },
                    "zIndex": 19,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
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
                        "x": 6200,
                        "y": 440
                    },
                    "size": {
                        "width": 400,
                        "height": 246
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                                "id": "vals-component-groups-out-green to red",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "green to red"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-green to blue",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "green to blue"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-red to green",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "red to green"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-red to blue",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "red to blue"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-blue to  green",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "blue to  green"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-blue to red",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "blue to red"
                                    }
                                }
                            }
                        ]
                    },
                    "id": "07cdde61-7e7b-43e4-8b55-9f65de913979",
                    "label": "WeightBranch",
                    "item": {
                        "key": "WeightBranch",
                        "label": "WeightBranch",
                        "out": [
                            "value"
                        ],
                        "configuration": [
                            {
                                "label": "weight",
                                "type": "selectStringValWeight",
                                "required": true
                            }
                        ],
                        "controller": "true"
                    },
                    "zIndex": 20,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "weight": "greenweight"
                        },
                        "label": "bg-bluebranch"
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
                        "x": 6790,
                        "y": 790
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "36f137e5-7517-4456-aadc-4ab06368b96f",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 21,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "BH",
                                    "targetSymbol": "GH"
                                },
                                {
                                    "srcSymbols": "BM",
                                    "targetSymbol": "GM"
                                },
                                {
                                    "srcSymbols": "BM2",
                                    "targetSymbol": "GM2"
                                },
                                {
                                    "srcSymbols": "BL",
                                    "targetSymbol": "GL"
                                }
                            ]
                        },
                        "label": "bg-blue2green"
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
                        "x": 6750,
                        "y": 120
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "1b79d5dc-0b4b-4450-9058-5cd3e8bc0885",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 22,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "GH",
                                    "targetSymbol": "RH"
                                },
                                {
                                    "srcSymbols": "GM",
                                    "targetSymbol": "RM"
                                },
                                {
                                    "srcSymbols": "GM2",
                                    "targetSymbol": "RM2"
                                },
                                {
                                    "srcSymbols": "GL",
                                    "targetSymbol": "RL"
                                }
                            ]
                        },
                        "label": "bg-greed2red"
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
                        "x": 7260,
                        "y": 130
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "eb23e736-c62f-4cf9-9065-d830a5b80fdb",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 23,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "GH",
                                    "targetSymbol": "BH"
                                },
                                {
                                    "srcSymbols": "GM",
                                    "targetSymbol": "BM"
                                },
                                {
                                    "srcSymbols": "GM2",
                                    "targetSymbol": "BM2"
                                },
                                {
                                    "srcSymbols": "GL",
                                    "targetSymbol": "BL"
                                }
                            ]
                        },
                        "label": "bg-green2blue"
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
                        "x": 6800,
                        "y": 410
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "26363fb4-f66a-4266-86a1-9f9cc15db8b3",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 24,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "RH",
                                    "targetSymbol": "GH"
                                },
                                {
                                    "srcSymbols": "RM",
                                    "targetSymbol": "GM"
                                },
                                {
                                    "srcSymbols": "RM2",
                                    "targetSymbol": "GM2"
                                },
                                {
                                    "srcSymbols": "RL",
                                    "targetSymbol": "GL"
                                }
                            ]
                        },
                        "label": "bg-red2green"
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
                        "x": 7280,
                        "y": 460
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "2f3165c8-78dd-47a0-882f-60065640a7cc",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 25,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "RH",
                                    "targetSymbol": "BH"
                                },
                                {
                                    "srcSymbols": "RM",
                                    "targetSymbol": "BM"
                                },
                                {
                                    "srcSymbols": "RM2",
                                    "targetSymbol": "BM2"
                                },
                                {
                                    "srcSymbols": "RL",
                                    "targetSymbol": "BL"
                                }
                            ]
                        },
                        "label": "bg-red2blue"
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
                        "x": 6670,
                        "y": -1310
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b849532b-eb26-41d7-819f-d46caaa17f1e",
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
                    "zIndex": 26,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isExpandReel": "false",
                            "reelSet": "output"
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
                        "x": 7300,
                        "y": -1390
                    },
                    "size": {
                        "width": 400,
                        "height": 778
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "67949e08-46a5-4424-b43a-12325cefa2e7",
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
                                "label": "symbolValsMulti",
                                "type": "select",
                                "option": [
                                    {
                                        "label": "none",
                                        "value": "none"
                                    },
                                    {
                                        "label": "add",
                                        "value": "add"
                                    },
                                    {
                                        "label": "mul",
                                        "value": "mul"
                                    }
                                ]
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
                                "label": "cacheWinResult",
                                "type": "selectWinResultCacheNode",
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
                    "zIndex": 27,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "BH",
                                "BM",
                                "BM2",
                                "BL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "fg-piggybank"
                        },
                        "label": "fg-payblue",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-blue",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "fg-payblue",
                                    "symbolNum"
                                ]
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
                        "x": 11980,
                        "y": -2360
                    },
                    "size": {
                        "width": 400,
                        "height": 165
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "a554dbfb-d14a-4c0a-8737-09096d738fc7",
                    "label": "PiggyBank",
                    "item": {
                        "key": "PiggyBank",
                        "label": "PiggyBank",
                        "out": [
                            "totalWins"
                        ],
                        "configuration": [
                            {
                                "label": "winMulti",
                                "type": "inputNumber1",
                                "defaultValue": 1
                            }
                        ],
                        "componentval": [
                            "winMulti",
                            "savedMoney"
                        ]
                    },
                    "zIndex": 28,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "winMulti": 1
                        },
                        "label": "fg-piggybank"
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
                        "x": 7920,
                        "y": -1270
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b9f28d5b-f90b-4f67-b229-bcf4111cb30e",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 29,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "false",
                            "maxVal": 20
                        },
                        "label": "fg-blue",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-blueeffect",
                                    "queue"
                                ],
                                "valueNum": 1
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
                        "x": 8480,
                        "y": -1290
                    },
                    "size": {
                        "width": 400,
                        "height": 778
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "f81cb0bc-b26b-436a-9938-10060f7b8213",
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
                                "label": "symbolValsMulti",
                                "type": "select",
                                "option": [
                                    {
                                        "label": "none",
                                        "value": "none"
                                    },
                                    {
                                        "label": "add",
                                        "value": "add"
                                    },
                                    {
                                        "label": "mul",
                                        "value": "mul"
                                    }
                                ]
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
                                "label": "cacheWinResult",
                                "type": "selectWinResultCacheNode",
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
                    "zIndex": 30,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "RH",
                                "RM",
                                "RM2",
                                "RL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "fg-piggybank"
                        },
                        "label": "fg-payred",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-red",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "fg-payred",
                                    "symbolNum"
                                ]
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
                        "x": 9100,
                        "y": -1300
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "c768a1c2-afb1-4efc-87e8-5380f75e0661",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 31,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "false",
                            "maxVal": 20
                        },
                        "label": "fg-red",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-piggybank",
                                    "winMulti"
                                ],
                                "valueNum": 1
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
                        "x": 9670,
                        "y": -1330
                    },
                    "size": {
                        "width": 400,
                        "height": 778
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "027aeec2-eaa1-4f7d-85a7-cfa25d144962",
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
                                "label": "symbolValsMulti",
                                "type": "select",
                                "option": [
                                    {
                                        "label": "none",
                                        "value": "none"
                                    },
                                    {
                                        "label": "add",
                                        "value": "add"
                                    },
                                    {
                                        "label": "mul",
                                        "value": "mul"
                                    }
                                ]
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
                                "label": "cacheWinResult",
                                "type": "selectWinResultCacheNode",
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
                    "zIndex": 32,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "none",
                            "winMulti": 1,
                            "betType": "bet",
                            "triggerType": "scatters",
                            "symbols": [
                                "GH",
                                "GM",
                                "GM2",
                                "GL"
                            ],
                            "wildSymbols": [
                                "WL"
                            ],
                            "putMoneyInPiggyBank": "fg-piggybank"
                        },
                        "label": "fg-paygreen",
                        "controllerExpand": false,
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-green",
                                    "valueNum"
                                ],
                                "valueNum": 0,
                                "source": [
                                    "fg-paygreen",
                                    "symbolNum"
                                ]
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
                        "x": 10230,
                        "y": -1310
                    },
                    "size": {
                        "width": 400,
                        "height": 318
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "4c830e9d-1363-4597-9343-9ea384819d6b",
                    "label": "Collector",
                    "item": {
                        "key": "Collector",
                        "label": "Collector",
                        "out": [
                            "valueNum"
                        ],
                        "configuration": [
                            {
                                "label": "maxVal",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1
                            },
                            {
                                "label": "isCycle",
                                "type": "boolean",
                                "defaultValue": "false"
                            }
                        ],
                        "controller": "true",
                        "componentval": [
                            "valueNum"
                        ]
                    },
                    "zIndex": 33,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isCycle": "false",
                            "maxVal": 20
                        },
                        "label": "fg-green",
                        "controller": [
                            {
                                "triggerNum": "all",
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-greeneffect",
                                    "queue"
                                ],
                                "valueNum": 1
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
                        "x": 10750,
                        "y": -1320
                    },
                    "size": {
                        "width": 400,
                        "height": 328
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "3eb98dec-73c7-47d2-88f8-3418046ad5ed",
                    "label": "RemoveSymbols",
                    "item": {
                        "key": "RemoveSymbols",
                        "label": "RemoveSymbols",
                        "out": [
                            "removeSymbolNum"
                        ],
                        "configuration": [
                            {
                                "label": "targetComponents",
                                "type": "selectWinResultNode"
                            },
                            {
                                "label": "ignoreSymbols",
                                "type": "selectSymbols"
                            }
                        ],
                        "controller": "true"
                    },
                    "zIndex": 34,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "targetComponents": [
                                "fg-payblue",
                                "fg-payred",
                                "fg-paygreen"
                            ]
                        },
                        "label": "fg-remove",
                        "controller": [
                            {
                                "type": "chgComponentConfigIntVal",
                                "targetArr": [
                                    "fg-respin",
                                    "lastRespinNum"
                                ],
                                "valueNum": 1
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
                        "x": 11420,
                        "y": -2410
                    },
                    "size": {
                        "width": 400,
                        "height": 1012
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "8fc1942f-dc3b-49f3-b325-92302554960b",
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
                                "label": "symbolValsMulti",
                                "type": "select",
                                "option": [
                                    {
                                        "label": "none",
                                        "value": "none"
                                    },
                                    {
                                        "label": "add",
                                        "value": "add"
                                    },
                                    {
                                        "label": "mul",
                                        "value": "mul"
                                    }
                                ]
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
                                "label": "cacheWinResult",
                                "type": "selectWinResultCacheNode",
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
                    "zIndex": 35,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "triggerRespinType": "respinNum",
                            "winMulti": 1,
                            "betType": "noPay",
                            "triggerType": "countscatter",
                            "symbols": [
                                "SC"
                            ],
                            "respinComponent": "fg-start",
                            "genRespinType": "number",
                            "respinNum": 10,
                            "minNum": 4
                        },
                        "label": "fg-fgtrigger",
                        "controller": [
                            {
                                "type": "setComponentConfigIntVal",
                                "targetArr": [
                                    "fg-blue",
                                    "valueNum"
                                ],
                                "valueNum": 1
                            },
                            {
                                "type": "setComponentConfigIntVal",
                                "targetArr": [
                                    "fg-red",
                                    "valueNum"
                                ],
                                "valueNum": 1
                            },
                            {
                                "type": "setComponentConfigIntVal",
                                "targetArr": [
                                    "fg-green",
                                    "valueNum"
                                ],
                                "valueNum": 1
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
                        "x": 11290,
                        "y": -1210
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "a365cfee-3126-4f83-9e93-99d9bbc57193",
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
                    "zIndex": 36,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "fg-respin"
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
                        "x": 12350,
                        "y": -1350
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "19ef63a0-9bac-4eca-9d50-c4a6b1f21f44",
                    "label": "RefillSymbols",
                    "item": {
                        "key": "RefillSymbols",
                        "label": "RefillSymbols",
                        "configuration": []
                    },
                    "zIndex": 37,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "fg-refill"
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
                        "x": 11810,
                        "y": -1350
                    },
                    "size": {
                        "width": 400,
                        "height": 165
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "0c50befd-7882-42ed-9f5f-ee74c60db265",
                    "label": "DropDownSymbols",
                    "item": {
                        "key": "DropDownSymbols",
                        "label": "DropDownSymbols",
                        "configuration": [
                            {
                                "label": "holdSymbols",
                                "type": "selectSymbols"
                            }
                        ]
                    },
                    "zIndex": 38,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "fg-dropdown"
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
                        "x": 12930,
                        "y": -1340
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "64ccd383-d8fa-4e13-8ae3-cda9f1d9e1fb",
                    "label": "DelayQueue",
                    "item": {
                        "key": "DelayQueue",
                        "label": "DelayQueue",
                        "configuration": [],
                        "componentval": [
                            "queue"
                        ]
                    },
                    "zIndex": 39,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "fg-blueeffect"
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
                        "x": 13500,
                        "y": -1230
                    },
                    "size": {
                        "width": 400,
                        "height": 246
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                                "id": "vals-component-groups-out-green to red",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "green to red"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-green to blue",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "green to blue"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-red to green",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "red to green"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-red to blue",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "red to blue"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-blue to  green",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "blue to  green"
                                    }
                                }
                            },
                            {
                                "id": "vals-component-groups-out-blue to red",
                                "group": "valsout",
                                "attrs": {
                                    "text": {
                                        "text": "blue to red"
                                    }
                                }
                            }
                        ]
                    },
                    "id": "bf048654-4529-4696-aa4f-3b00d828412e",
                    "label": "WeightBranch",
                    "item": {
                        "key": "WeightBranch",
                        "label": "WeightBranch",
                        "out": [
                            "value"
                        ],
                        "configuration": [
                            {
                                "label": "weight",
                                "type": "selectStringValWeight",
                                "required": true
                            }
                        ],
                        "controller": "true"
                    },
                    "zIndex": 40,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "weight": "greenweight"
                        },
                        "label": "fg-bluebranch"
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
                        "x": 14130,
                        "y": -1450
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "cd754b81-73d1-41d5-956d-d154e59eb8f2",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 41,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "GH",
                                    "targetSymbol": "RH"
                                },
                                {
                                    "srcSymbols": "GM",
                                    "targetSymbol": "RM"
                                },
                                {
                                    "srcSymbols": "GM2",
                                    "targetSymbol": "RM2"
                                },
                                {
                                    "srcSymbols": "GL",
                                    "targetSymbol": "RL"
                                }
                            ]
                        },
                        "label": "fg-green2red"
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
                        "x": 14600,
                        "y": -1430
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "83eb0050-1f73-4608-be9b-8c462b4d4f58",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 42,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "GH",
                                    "targetSymbol": "BH"
                                },
                                {
                                    "srcSymbols": "GM",
                                    "targetSymbol": "BM"
                                },
                                {
                                    "srcSymbols": "GM2",
                                    "targetSymbol": "BM2"
                                },
                                {
                                    "srcSymbols": "GL",
                                    "targetSymbol": "BL"
                                }
                            ]
                        },
                        "label": "fg-green2blue"
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
                        "x": 14110,
                        "y": -1170
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "a6f857aa-f928-4ce6-b8a7-69a8b260ad9d",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 43,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "RH",
                                    "targetSymbol": "GH"
                                },
                                {
                                    "srcSymbols": "RM",
                                    "targetSymbol": "GM"
                                },
                                {
                                    "srcSymbols": "RM2",
                                    "targetSymbol": "GM2"
                                },
                                {
                                    "srcSymbols": "RL",
                                    "targetSymbol": "GL"
                                }
                            ]
                        },
                        "label": "fg-red2green"
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
                        "x": 14600,
                        "y": -1140
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "b09c7850-6811-4fc0-b993-e150ee9e4f91",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 44,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "RH",
                                    "targetSymbol": "BH"
                                },
                                {
                                    "srcSymbols": "RM",
                                    "targetSymbol": "BM"
                                },
                                {
                                    "srcSymbols": "RM2",
                                    "targetSymbol": "BM2"
                                },
                                {
                                    "srcSymbols": "RL",
                                    "targetSymbol": "BL"
                                }
                            ]
                        },
                        "label": "fg-red2blue"
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
                        "x": 14100,
                        "y": -910
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "03b065b4-a8f2-4bad-bd4b-637b1703bb45",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 45,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "BH",
                                    "targetSymbol": "GH"
                                },
                                {
                                    "srcSymbols": "BM",
                                    "targetSymbol": "GM"
                                },
                                {
                                    "srcSymbols": "BM2",
                                    "targetSymbol": "GM2"
                                },
                                {
                                    "srcSymbols": "BL",
                                    "targetSymbol": "GL"
                                }
                            ]
                        },
                        "label": "fg-blue2green"
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
                        "x": 14600,
                        "y": -880
                    },
                    "size": {
                        "width": 400,
                        "height": 213
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "f4bfe15b-2d8c-4648-bb66-99bdf9d7ca04",
                    "label": "ReplaceSymbolGroup",
                    "item": {
                        "key": "ReplaceSymbolGroup",
                        "label": "ReplaceSymbolGroup",
                        "configuration": [
                            {
                                "label": "srcSymbol targetSymbol",
                                "type": "replaceSymbolsModal"
                            },
                            {
                                "label": "mask",
                                "type": "selectMaskNode"
                            }
                        ]
                    },
                    "zIndex": 46,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "srcSymbol targetSymbol": [
                                {
                                    "srcSymbols": "BH",
                                    "targetSymbol": "RH"
                                },
                                {
                                    "srcSymbols": "BM",
                                    "targetSymbol": "RM"
                                },
                                {
                                    "srcSymbols": "BM2",
                                    "targetSymbol": "RM2"
                                },
                                {
                                    "srcSymbols": "BL",
                                    "targetSymbol": "RL"
                                }
                            ]
                        },
                        "label": "fg-blue2red"
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
                        "x": 15310,
                        "y": -1050
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "031c11bd-11c8-41fe-8a7f-7aca7f0f2173",
                    "label": "DelayQueue",
                    "item": {
                        "key": "DelayQueue",
                        "label": "DelayQueue",
                        "configuration": [],
                        "componentval": [
                            "queue"
                        ]
                    },
                    "zIndex": 47,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {},
                        "label": "fg-greeneffect"
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
                        "x": 15860,
                        "y": -890
                    },
                    "size": {
                        "width": 400,
                        "height": 321
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "ba2c1444-9079-409d-b160-3695932bd45a",
                    "label": "AddSymbols",
                    "item": {
                        "key": "AddSymbols",
                        "label": "AddSymbols",
                        "out": [
                            "symbols"
                        ],
                        "configuration": [
                            {
                                "label": "symbol",
                                "type": "selectSymbol",
                                "required": true
                            },
                            {
                                "label": "symbolNumType",
                                "type": "select",
                                "association": [
                                    "symbolNum",
                                    "symbolNumWeight"
                                ],
                                "required": true,
                                "option": [
                                    {
                                        "label": "number",
                                        "value": "number"
                                    },
                                    {
                                        "label": "weight",
                                        "value": "weight"
                                    }
                                ]
                            },
                            {
                                "label": "symbolNum",
                                "type": "inputNumber1",
                                "required": true,
                                "defaultValue": 1,
                                "show": {
                                    "label": "symbolNumType",
                                    "value": [
                                        "number"
                                    ]
                                }
                            },
                            {
                                "label": "symbolNumWeight",
                                "type": "selectIntValWeight",
                                "required": true,
                                "show": {
                                    "label": "symbolNumType",
                                    "value": [
                                        "weight"
                                    ]
                                }
                            },
                            {
                                "label": "ignoreSymbols",
                                "type": "selectSymbols"
                            }
                        ],
                        "componentval": [
                            "symbolNum"
                        ]
                    },
                    "zIndex": 48,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "symbol": "WL",
                            "symbolNumType": "number",
                            "symbolNum": 1,
                            "ignoreSymbols": [
                                "WL",
                                "SC"
                            ]
                        },
                        "label": "fg-addw"
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
                        "x": 180,
                        "y": -240
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
                                        "magnet": true,
                                        "fill": "#A9A9A9",
                                        "x": -5,
                                        "y": -5
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
                                },
                                "label": {
                                    "position": {
                                        "name": "right"
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
                    "id": "cbcfeb0f-ab09-4278-b499-84fbbbc3dc03",
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
                    "zIndex": 50,
                    "componentValues": {
                        "labelIsError": false,
                        "configuration": {
                            "isExpandReel": "false",
                            "reelSet": "output"
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
                }
            ]
        }
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
    "bg-fgtrigger": { "list": ["bg-fgtrigger"], "module": "freegame", "performance": "" },
    "fg-spin": { "list": ["fg-spin"], "module": "spinResult", "performance": "" },
    "fg-dropdown": { "list": ["fg-dropdown"], "module": "dropdown", "performance": "" },
    "fg-refill": { "list": ["fg-refill"], "module": "refill", "performance": "" },
    "fg-blueeffect": { "list": ["fg-greed2red", "fg-green2blue", "fg-red2green", "fg-red2blue", "fg-blue2green", "fg-blue2red"], "module": "chgSymbols", "performance": "0" },
    "fg-addwl": { "list": ["fg-addw"], "module": "chgSymbols", "performance": "1" },
    "fg-payblue": { "list": ["fg-payblue"], "module": "top", "performance": "0" },
    "fg-blue": { "list": ["fg-blue"], "module": "collect", "performance": "0" },
    "fg-payred": { "list": ["fg-payred"], "module": "top", "performance": "1" },
    "fg-red": { "list": ["fg-red"], "module": "collect", "performance": "1" },
    "fg-paygreen": { "list": ["fg-paygreen"], "module": "top", "performance": "2" },
    "fg-green": { "list": ["fg-green"], "module": "collect", "performance": "2" },
    "fg-remove": { "list": ["fg-remove"], "module": "remove", "performance": "" },
    "fg-win": { "list": ["fg-piggybank"], "module": "showWinAni", "performance": "" },
};

let statelist = ["bg-spin", "bg-dropdown", "bg-refill", "bg-blueeffect", "bg-addwl", "bg-payblue", "bg-blue", "bg-payred", "bg-red", "bg-paygreen", "bg-green", "bg-remove", "bg-win", "bg-fgtrigger","fg-spin", "fg-dropdown", "fg-refill", "fg-blueeffect", "fg-addwl", "fg-payblue", "fg-blue", "fg-payred", "fg-red", "fg-paygreen", "fg-green", "fg-remove", "fg-win", "fg-fgtrigger"];

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