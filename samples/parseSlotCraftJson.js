const { parseSlotCraftJson } = require('../src/index.js');


    let obj = [
        {
            "name": "bg-spin",
            "component": [
                {
                    "value": "bg-spin",
                    "type": "BasicReels"
                }
            ],
            "module": "Spin",
            "instance": 0,
            "key": "0.6253469051750875"
        },
        {
            "name": "bg-paylines",
            "component": [
                {
                    "value": "bg-paylines",
                    "type": "LinesTrigger"
                }
            ],
            "module": "ShowSymbolWins",
            "instance": 0,
            "key": "0.28235249411651275"
        },
        {
            "name": "bg-paysc",
            "component": [
                {
                    "value": "bg-paysc",
                    "type": "ScatterTrigger"
                }
            ],
            "module": "ShowSymbolWins",
            "instance": 0,
            "key": "0.5762625317356089"
        },
        {
            "name": "fg-start",
            "component": [
                {
                    "value": "fg-start",
                    "type": "Respin"
                }
            ],
            "instance": 0,
            "trigger": "onStart",
            "key": "0.8207540557799426",
            "toUI": "notToUI",
            "forceTotalNum": 0,
            "module": "StartFreeGame"
        },
        {
            "name": "fg-spin",
            "component": [
                {
                    "value": "fg-spin",
                    "type": "BasicReels"
                }
            ],
            "instance": 0,
            "key": "0.20942574181717744",
            "module": "Spin"
        },
        {
            "name": "fg-syms",
            "component": [
                {
                    "value": "fg-syms",
                    "type": "SymbolCollection"
                }
            ],
            "instance": 0,
            "key": "0.8762186802044967"
        },
        {
            "name": "fg-paylines",
            "component": [
                {
                    "value": "fg-paylines",
                    "type": "LinesTrigger"
                }
            ],
            "instance": 0,
            "key": "0.054364424303539494",
            "module": "ShowSymbolWins"
        },
        {
            "name": "fg-paysc",
            "component": [
                {
                    "value": "fg-paysc",
                    "type": "ScatterTrigger"
                }
            ],
            "instance": 0,
            "key": "0.9815368758927097",
            "module": "ShowSymbolWins"
        },
        {
            "name": "fg-bookof",
            "component": [
                {
                    "value": "fg-bookof",
                    "type": "Mask"
                }
            ],
            "instance": 0,
            "key": "0.2898162289599038"
        },
        {
            "name": "fg-checkbookof",
            "component": [
                {
                    "value": "fg-checkbookof",
                    "type": "ScatterTrigger"
                }
            ],
            "instance": 0,
            "key": "0.7581954539894376"
        },
        {
            "name": "fg-replacereel",
            "component": [
                {
                    "value": "fg-replacereel",
                    "type": "ReplaceReelWithMask"
                }
            ],
            "instance": 0,
            "key": "0.9992387853092546"
        },
        {
            "name": "fg-paybookof",
            "component": [
                {
                    "value": "fg-paybookof",
                    "type": "LinesTrigger"
                }
            ],
            "instance": 0,
            "key": "0.09181108062322019",
            "module": "ShowSymbolWins"
        },
        {
            "name": "fg-rollsym",
            "component": [
                {
                    "value": "fg-rollsym",
                    "type": "RollSymbol"
                }
            ],
            "instance": 0,
            "key": "0.5909221763871129"
        },
        {
            "name": "bg-rollsym",
            "component": [
                {
                    "value": "bg-rollsym",
                    "type": "RollSymbol"
                }
            ],
            "instance": 0,
            "key": "0.7654487207518088"
        }
    ];

    let statecfg = parseSlotCraftJson(obj);


    let num = 0;
    for (const k in statecfg.statedata) {
        num++;
    }
