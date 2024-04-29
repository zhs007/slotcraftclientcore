const { parseSlotCraftJson } = require('./utils.js');

test('parseSlotCraftJson', () => {
    let obj = [
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
    ];

    let statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);
    expect(statecfg.statelist.length).toBe(14);
    expect(statecfg.statedata).not.toBe(null);

    let num = 0;
    for (const k in statecfg.statedata) {
        num++;
    }

    expect(num).toBe(statecfg.statelist.length);
});