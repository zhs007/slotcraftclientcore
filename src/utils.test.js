const { parseSlotCraftJson } = require("./utils.js");

test("parseSlotCraftJson", () => {
    let obj = [
        {
            name: "bg-spin",
            component: [
                {
                    value: "bg-spin",
                    type: "WeightReels",
                },
                {
                    value: "bg-gensym",
                    type: "GenSymbolValsWithSymbol",
                },
                {
                    value: "bg-chgom",
                    type: "ChgSymbols",
                },
                {
                    value: "bg-chgwl",
                    type: "ChgSymbols",
                },
            ],
            module: "Spin",
            instance: 0,
        },
        {
            name: "bg-win",
            component: [
                {
                    value: "bg-paylines",
                    type: "LinesTrigger",
                },
            ],
            module: "ShowBigWins",
            instance: 0,
        },
        {
            name: "bg-coinwins",
            component: [
                {
                    value: "bg-symwins",
                    type: "SymbolValsWins",
                },
            ],
            module: "CoinPickupWin",
            instance: 0,
        },
        {
            name: "bg-scatter",
            component: ["bg-scatter"],
            module: "StartFreeGame",
            instance: 0,
        },
        {
            name: "bg-showbigwin",
            component: [
                {
                    value: "bg-paylines",
                    type: "LinesTrigger",
                },
                {
                    value: "bg-scatter",
                    type: "ScatterTrigger",
                },
                {
                    value: "bg-symwins",
                    type: "SymbolValsWins",
                },
            ],
            module: "ShowSymbolWins",
            instance: 0,
        },
        {
            name: "fg-spin",
            component: [
                {
                    value: "fg-spin",
                    type: "BasicReels",
                },
                {
                    value: "fg-gensym",
                    type: "GenSymbolValsWithSymbol",
                },
                {
                    value: "fg-chgmm",
                    type: "ChgSymbols",
                },
                {
                    value: "fg-chgbm",
                    type: "ChgSymbols",
                },
                {
                    value: "fg-chgwl",
                    type: "ChgSymbols",
                },
            ],
            module: "Spin",
            instance: 0,
        },
        {
            name: "bg-mmeffect",
            component: [
                {
                    value: "fg-adde",
                    type: "ChgSymbols",
                },
                {
                    value: "fg-genadde",
                    type: "GenSymbolValsWithSymbol",
                },
            ],
            module: "SymbolChange",
            instance: 0,
        },
        {
            name: "bg-bmeffect",
            component: [
                {
                    value: "fg-replacee",
                    type: "ReplaceReelWithMask",
                },
                {
                    value: "fg-genreplacee",
                    type: "GenSymbolValsWithSymbol",
                },
            ],
            module: "SymbolChange",
            instance: 0,
        },
        {
            name: "fg-symwins",
            component: ["fg-symwins"],
            module: "CoinPickupWin",
            instance: 0,
        },
        {
            name: "fg-bigwins",
            component: [
                {
                    value: "fg-paylines",
                    type: "LinesTrigger",
                },
                {
                    value: "fg-symwins",
                    type: "SymbolValsWins",
                },
                {
                    value: "fg-respin",
                    type: "Respin",
                },
            ],
            module: "ShowSymbolWins",
            instance: 0,
            trigger: "onStart",
            toUI: "notToUI",
            forceTotalNum: 0,
        },
        {
            name: "fg-start",
            component: ["fg-start"],
            module: "FreeGameEnding",
            instance: 0,
        },
    ];

    let statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);
    expect(statecfg.statelist.length).toBe(11);
    expect(statecfg.statedata).not.toBe(null);

    let num = 0;
    for (const k in statecfg.statedata) {
        num++;
    }

    expect(num).toBe(statecfg.statelist.length);
});
