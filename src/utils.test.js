const { parseSlotCraftJson } = require('./utils.js');

test('parseSlotCraftJson', () => {
    let obj = [
        {
            name: 'bg-spin',
            component: [
                {
                    value: 'bg-spin',
                    type: 'BasicReels',
                },
            ],
            module: 'SpinModule',
            instance: 0,
            key: '0.3752781228097424',
        },
        {
            name: 'bg-paylines',
            component: [
                {
                    value: 'bg-paylines',
                    type: 'LinesTrigger',
                },
                {
                    value: 'bg-paysc',
                    type: 'ScatterTrigger',
                },
            ],
            module: 'ShowTopModule',
            instance: 0,
            key: '0.5469951039573102',
        },
        {
            name: 'bg-win',
            component: [
                {
                    value: 'bg-spin',
                    type: 'BasicReels',
                },
            ],
            module: 'WinAniModule',
            instance: 0,
            key: '0.9572452423664488',
        },
    ];

    let statecfg = parseSlotCraftJson(obj);
    expect(statecfg).not.toBe(null);
    expect(statecfg.statelist.length).toBe(3);
    expect(statecfg.statedata).not.toBe(null);

    let num = 0;
    for (const k in statecfg.statedata) {
        num++;
    }

    expect(num).toBe(statecfg.statelist.length);
});
