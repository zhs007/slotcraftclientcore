const { genLogicData } = require('./logicdatautils.js');

test('genLogicData', () => {
    let obj = [
        {
            label: 'normal',
            bet: 10,
            graph: {
                cells: [
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#1677ff',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '5829b251-2338-477d-9f31-57615ed36027',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '4bcfc051-fad5-4cb6-9b01-620ba07b9232',
                            port: 'start-out',
                        },
                        target: {
                            cell: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#1677ff',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '70269940-b767-417e-ab58-0b7f68dd6d0d',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: '691543af-60c8-4132-a384-f32ae6e735f2',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#3cb44b',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '781d97f9-9e2a-4a72-85a6-c407e4aeb17d',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '691543af-60c8-4132-a384-f32ae6e735f2',
                            port: 'jump-component-groups-out',
                        },
                        target: {
                            cell: 'ccb36a0a-58fa-41b7-a6d2-67cff8c48551',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#4363d8',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '0b0b14e6-b73c-4be9-ae46-24735168c54e',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '691543af-60c8-4132-a384-f32ae6e735f2',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: 'd8ae0ea7-57fa-439a-8b79-cc4b65aaa118',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#3cb44b',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '87cc8a26-a8f9-473c-8297-ef6fa15027fa',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: 'ccb36a0a-58fa-41b7-a6d2-67cff8c48551',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: 'd8ae0ea7-57fa-439a-8b79-cc4b65aaa118',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#4363d8',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: 'f3507100-b463-4c5e-87b7-d54210bf5327',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: 'd8ae0ea7-57fa-439a-8b79-cc4b65aaa118',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: '351e449d-034a-44e6-860e-17d32da88c48',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#4363d8',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '8bf34914-698e-49de-ac8a-eaf36eb70e20',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '351e449d-034a-44e6-860e-17d32da88c48',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: 'b4515bc4-f0b1-4100-9781-a108197062a8',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        position: {
                            x: 0,
                            y: 0,
                        },
                        size: {
                            width: 1,
                            height: 1,
                        },
                        visible: true,
                        shape: 'custom-node-width-start',
                        ports: {
                            groups: {
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                        {
                                            tagName: 'text',
                                            selector: 'portNameLabel',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 80,
                                            height: 40,
                                            strokeWidth: 0,
                                            fill: '#242525',
                                            magnet: true,
                                        },
                                        portNameLabel: {
                                            ref: 'portBody',
                                            refX: 23,
                                            refY: 12,
                                            fill: '#fff',
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -40,
                                                y: -20,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'start-out',
                                    group: 'domout',
                                    attrs: {
                                        portNameLabel: {
                                            text: 'Start',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '4bcfc051-fad5-4cb6-9b01-620ba07b9232',
                        zIndex: 1,
                    },
                    {
                        position: {
                            x: 180,
                            y: -210,
                        },
                        size: {
                            width: 400,
                            height: 276,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                        label: 'WeightReels',
                        item: {
                            key: 'WeightReels',
                            label: 'WeightReels',
                            out: ['symbols', 'reelSet', 'reelSetIndex'],
                            defaultValue: {
                                configuration: {
                                    isExpandReel: false,
                                },
                            },
                            configuration: [
                                {
                                    label: 'reelSetWeight',
                                    type: 'selectReelSetWeight',
                                    required: true,
                                },
                                {
                                    label: 'isExpandReel',
                                    type: 'boolean',
                                },
                            ],
                            controller: 'true',
                            componentval: ['reelSetWeight'],
                        },
                        data: {
                            configuration: {
                                isExpandReel: false,
                                reelSetWeight: 'bgreelweight',
                            },
                            labelIsError: false,
                            label: 'bg-spin',
                            controllerExpand: false,
                        },
                        zIndex: 2,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 750,
                            y: -300,
                        },
                        size: {
                            width: 400,
                            height: 875,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                                {
                                    id: 'jump-component-groups-out',
                                    group: 'jumpout',
                                    attrs: {
                                        text: {
                                            text: 'jumpTo',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '691543af-60c8-4132-a384-f32ae6e735f2',
                        label: 'ScatterTrigger',
                        item: {
                            key: 'ScatterTrigger',
                            label: 'ScatterTrigger',
                            out: [
                                'wins',
                                'symbolNum',
                                'wildNum',
                                'respinNum',
                                'winResult',
                            ],
                            defaultValue: {
                                moreExpand: true,
                                configuration: {
                                    triggerType: 'scatters',
                                    betType: 'bet',
                                    checkWinType: 'left2right',
                                    winMulti: 1,
                                    triggerRespinType: 'none',
                                },
                            },
                            configuration: [
                                {
                                    label: 'triggerType',
                                    type: 'select',
                                    association: [
                                        'minNum',
                                        'posArea',
                                        'countScatterPayAs',
                                    ],
                                    option: [
                                        {
                                            label: 'scatters',
                                            value: 'scatters',
                                        },
                                        {
                                            label: 'reelscatters',
                                            value: 'reelscatters',
                                        },
                                        {
                                            label: 'countscatter',
                                            value: 'countscatter',
                                        },
                                        {
                                            label: 'countscatterReels',
                                            value: 'countscatterReels',
                                        },
                                        {
                                            label: 'countscatterInArea',
                                            value: 'countscatterInArea',
                                        },
                                    ],
                                },
                                {
                                    label: 'minNum',
                                    type: 'inputWidthNumber',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'posArea',
                                    type: 'posArea',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: ['countscatterInArea'],
                                    },
                                },
                                {
                                    label: 'countScatterPayAs',
                                    type: 'selectSymbol',
                                    required: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'betType',
                                    type: 'select',
                                    association: ['putMoneyInPiggyBank'],
                                    option: [
                                        {
                                            label: 'bet',
                                            value: 'bet',
                                        },
                                        {
                                            label: 'totalBet',
                                            value: 'totalBet',
                                        },
                                        {
                                            label: 'noPay',
                                            value: 'noPay',
                                        },
                                    ],
                                },
                                {
                                    label: 'symbols',
                                    type: 'selectSymbols',
                                    required: true,
                                },
                                {
                                    label: 'wildSymbols',
                                    type: 'selectSymbols',
                                },
                                {
                                    label: 'winMulti',
                                    type: 'inputNumber1',
                                },
                                {
                                    label: 'symbolValsMulti',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'add',
                                            value: 'add',
                                        },
                                        {
                                            label: 'mul',
                                            value: 'mul',
                                        },
                                        {
                                            label: 'powof2add',
                                            value: 'powof2add',
                                        },
                                        {
                                            label: 'powof2mul',
                                            value: 'powof2mul',
                                        },
                                    ],
                                },
                                {
                                    label: 'targetMask',
                                    type: 'selectMaskNode',
                                },
                                {
                                    label: 'putMoneyInPiggyBank',
                                    type: 'selectPiggyBankNode',
                                    show: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                },
                                {
                                    label: 'triggerRespinType',
                                    type: 'select',
                                    association: [
                                        'respinComponent',
                                        'genRespinType',
                                    ],
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'respinNum',
                                            value: 'respinNum',
                                        },
                                        {
                                            label: 'triggerNum',
                                            value: 'triggerNum',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinComponent',
                                    type: 'selectRespinNode',
                                    required: true,
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                },
                                {
                                    label: 'genRespinType',
                                    type: 'select',
                                    association: [
                                        'respinNum',
                                        'respinNumWithScatterNum',
                                        'respinNumWeight',
                                        'respinNumWeightWithScatterNum',
                                    ],
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                    option: [
                                        {
                                            label: 'number',
                                            value: 'number',
                                        },
                                        {
                                            label: 'scatterNum',
                                            value: 'scatterNum',
                                        },
                                        {
                                            label: 'weight',
                                            value: 'weight',
                                        },
                                        {
                                            label: 'scatterNumWeight',
                                            value: 'scatterNumWeight',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinNum',
                                    type: 'inputNumberInteger',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['number'],
                                    },
                                },
                                {
                                    label: 'respinNumWithScatterNum',
                                    type: 'respinNumWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNum'],
                                    },
                                },
                                {
                                    label: 'respinNumWeight',
                                    type: 'selectIntValWeight',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['weight'],
                                    },
                                },
                                {
                                    label: 'respinNumWeightWithScatterNum',
                                    type: 'respinNumWeightWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNumWeight'],
                                    },
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                            controller: 'true',
                            componentval: ['winMulti'],
                        },
                        data: {
                            moreExpand: true,
                            configuration: {
                                triggerType: 'countscatterInArea',
                                betType: 'noPay',
                                checkWinType: 'left2right',
                                winMulti: 1,
                                triggerRespinType: 'none',
                                posArea: [1, 1, 1, 2],
                                minNum: 3,
                                symbols: ['SC'],
                            },
                            labelIsError: false,
                            label: 'bg-walktrigger',
                        },
                        zIndex: 3,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 1270,
                            y: -180,
                        },
                        size: {
                            width: 400,
                            height: 220,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                            ],
                        },
                        id: 'ccb36a0a-58fa-41b7-a6d2-67cff8c48551',
                        label: 'MoveSymbol',
                        item: {
                            key: 'MoveSymbol',
                            label: 'MoveSymbol',
                            out: ['symbols'],
                            defaultValue: {
                                moreExpand: true,
                            },
                            configuration: [
                                {
                                    label: 'moveData',
                                    type: 'moveData',
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                        },
                        data: {
                            moreExpand: true,
                            labelIsError: false,
                            label: 'bg-walk',
                            configuration: {
                                moveData: [
                                    {
                                        src: {
                                            type: 'selectWithXY',
                                            Y: 1,
                                            X: 1,
                                        },
                                        target: {
                                            type: 'selectSymbolR2L',
                                            Y: 1,
                                            Symbol: 'SC',
                                        },
                                        moveType: 'xy',
                                        targetSymbol: 'SC',
                                        overrideSrc: 'false',
                                        overrideTarget: 'false',
                                        overridePath: 'true',
                                        name: 'moveData 1',
                                    },
                                ],
                                inputSymbols: [],
                            },
                        },
                        zIndex: 4,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 1850,
                            y: -350,
                        },
                        size: {
                            width: 400,
                            height: 622,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                                {
                                    id: 'jump-component-groups-out',
                                    group: 'jumpout',
                                    attrs: {
                                        text: {
                                            text: 'jumpTo',
                                        },
                                    },
                                },
                            ],
                        },
                        id: 'd8ae0ea7-57fa-439a-8b79-cc4b65aaa118',
                        label: 'LinesTrigger',
                        item: {
                            key: 'LinesTrigger',
                            label: 'LinesTrigger',
                            out: ['wins', 'winResult'],
                            defaultValue: {
                                moreExpand: true,
                                configuration: {
                                    triggerType: 'lines',
                                    betType: 'bet',
                                    checkWinType: 'left2right',
                                    winMulti: 1,
                                },
                            },
                            configuration: [
                                {
                                    label: 'triggerType',
                                    type: 'select',
                                    association: ['minNum'],
                                    option: [
                                        {
                                            label: 'lines',
                                            value: 'lines',
                                        },
                                        {
                                            label: 'checkLines',
                                            value: 'checkLines',
                                        },
                                    ],
                                },
                                {
                                    label: 'minNum',
                                    type: 'inputWidthNumber',
                                    show: {
                                        label: 'triggerType',
                                        value: ['checkLines'],
                                    },
                                },
                                {
                                    label: 'betType',
                                    type: 'select',
                                    association: ['putMoneyInPiggyBank'],
                                    option: [
                                        {
                                            label: 'bet',
                                            value: 'bet',
                                        },
                                        {
                                            label: 'totalBet',
                                            value: 'totalBet',
                                        },
                                        {
                                            label: 'noPay',
                                            value: 'noPay',
                                        },
                                    ],
                                },
                                {
                                    label: 'checkWinType',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'left2right',
                                            value: 'left2right',
                                        },
                                        {
                                            label: 'right2left',
                                            value: 'right2left',
                                        },
                                        {
                                            label: 'count',
                                            value: 'count',
                                        },
                                    ],
                                },
                                {
                                    label: 'symbols',
                                    type: 'selectSymbols',
                                    required: true,
                                },
                                {
                                    label: 'wildSymbols',
                                    type: 'selectSymbols',
                                },
                                {
                                    label: 'winMulti',
                                    type: 'inputNumber1',
                                },
                                {
                                    label: 'symbolValsMulti',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'add',
                                            value: 'add',
                                        },
                                        {
                                            label: 'mul',
                                            value: 'mul',
                                        },
                                        {
                                            label: 'powof2add',
                                            value: 'powof2add',
                                        },
                                        {
                                            label: 'powof2mul',
                                            value: 'powof2mul',
                                        },
                                    ],
                                },
                                {
                                    label: 'putMoneyInPiggyBank',
                                    type: 'selectPiggyBankNode',
                                    show: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                            componentval: ['winMulti'],
                        },
                        data: {
                            moreExpand: true,
                            configuration: {
                                triggerType: 'lines',
                                betType: 'bet',
                                checkWinType: 'left2right',
                                winMulti: 1,
                                symbols: [
                                    'WL',
                                    'A',
                                    'B',
                                    'C',
                                    'D',
                                    'E',
                                    'F',
                                    'G',
                                    'H',
                                    'J',
                                    'K',
                                    'L',
                                ],
                                wildSymbols: ['WL'],
                            },
                            labelIsError: false,
                            label: 'bg-paylines',
                        },
                        zIndex: 5,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 2490,
                            y: -420,
                        },
                        size: {
                            width: 400,
                            height: 739,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                                {
                                    id: 'jump-component-groups-out',
                                    group: 'jumpout',
                                    attrs: {
                                        text: {
                                            text: 'jumpTo',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '351e449d-034a-44e6-860e-17d32da88c48',
                        label: 'ScatterTrigger',
                        item: {
                            key: 'ScatterTrigger',
                            label: 'ScatterTrigger',
                            out: [
                                'wins',
                                'symbolNum',
                                'wildNum',
                                'respinNum',
                                'winResult',
                            ],
                            defaultValue: {
                                moreExpand: true,
                                configuration: {
                                    triggerType: 'scatters',
                                    betType: 'bet',
                                    checkWinType: 'left2right',
                                    winMulti: 1,
                                    triggerRespinType: 'none',
                                },
                            },
                            configuration: [
                                {
                                    label: 'triggerType',
                                    type: 'select',
                                    association: [
                                        'minNum',
                                        'posArea',
                                        'countScatterPayAs',
                                    ],
                                    option: [
                                        {
                                            label: 'scatters',
                                            value: 'scatters',
                                        },
                                        {
                                            label: 'reelscatters',
                                            value: 'reelscatters',
                                        },
                                        {
                                            label: 'countscatter',
                                            value: 'countscatter',
                                        },
                                        {
                                            label: 'countscatterReels',
                                            value: 'countscatterReels',
                                        },
                                        {
                                            label: 'countscatterInArea',
                                            value: 'countscatterInArea',
                                        },
                                    ],
                                },
                                {
                                    label: 'minNum',
                                    type: 'inputWidthNumber',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'posArea',
                                    type: 'posArea',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: ['countscatterInArea'],
                                    },
                                },
                                {
                                    label: 'countScatterPayAs',
                                    type: 'selectSymbol',
                                    required: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'betType',
                                    type: 'select',
                                    association: ['putMoneyInPiggyBank'],
                                    option: [
                                        {
                                            label: 'bet',
                                            value: 'bet',
                                        },
                                        {
                                            label: 'totalBet',
                                            value: 'totalBet',
                                        },
                                        {
                                            label: 'noPay',
                                            value: 'noPay',
                                        },
                                    ],
                                },
                                {
                                    label: 'symbols',
                                    type: 'selectSymbols',
                                    required: true,
                                },
                                {
                                    label: 'wildSymbols',
                                    type: 'selectSymbols',
                                },
                                {
                                    label: 'winMulti',
                                    type: 'inputNumber1',
                                },
                                {
                                    label: 'symbolValsMulti',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'add',
                                            value: 'add',
                                        },
                                        {
                                            label: 'mul',
                                            value: 'mul',
                                        },
                                        {
                                            label: 'powof2add',
                                            value: 'powof2add',
                                        },
                                        {
                                            label: 'powof2mul',
                                            value: 'powof2mul',
                                        },
                                    ],
                                },
                                {
                                    label: 'targetMask',
                                    type: 'selectMaskNode',
                                },
                                {
                                    label: 'putMoneyInPiggyBank',
                                    type: 'selectPiggyBankNode',
                                    show: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                },
                                {
                                    label: 'triggerRespinType',
                                    type: 'select',
                                    association: [
                                        'respinComponent',
                                        'genRespinType',
                                    ],
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'respinNum',
                                            value: 'respinNum',
                                        },
                                        {
                                            label: 'triggerNum',
                                            value: 'triggerNum',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinComponent',
                                    type: 'selectRespinNode',
                                    required: true,
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                },
                                {
                                    label: 'genRespinType',
                                    type: 'select',
                                    association: [
                                        'respinNum',
                                        'respinNumWithScatterNum',
                                        'respinNumWeight',
                                        'respinNumWeightWithScatterNum',
                                    ],
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                    option: [
                                        {
                                            label: 'number',
                                            value: 'number',
                                        },
                                        {
                                            label: 'scatterNum',
                                            value: 'scatterNum',
                                        },
                                        {
                                            label: 'weight',
                                            value: 'weight',
                                        },
                                        {
                                            label: 'scatterNumWeight',
                                            value: 'scatterNumWeight',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinNum',
                                    type: 'inputNumberInteger',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['number'],
                                    },
                                },
                                {
                                    label: 'respinNumWithScatterNum',
                                    type: 'respinNumWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNum'],
                                    },
                                },
                                {
                                    label: 'respinNumWeight',
                                    type: 'selectIntValWeight',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['weight'],
                                    },
                                },
                                {
                                    label: 'respinNumWeightWithScatterNum',
                                    type: 'respinNumWeightWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNumWeight'],
                                    },
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                            controller: 'true',
                            componentval: ['winMulti'],
                        },
                        data: {
                            moreExpand: true,
                            configuration: {
                                triggerType: 'scatters',
                                betType: 'bet',
                                checkWinType: 'left2right',
                                winMulti: 1,
                                triggerRespinType: 'none',
                                symbols: ['SC'],
                            },
                            labelIsError: false,
                            label: 'bg-paysc',
                        },
                        zIndex: 6,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 3060,
                            y: -460,
                        },
                        size: {
                            width: 400,
                            height: 739,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                                {
                                    id: 'jump-component-groups-out',
                                    group: 'jumpout',
                                    attrs: {
                                        text: {
                                            text: 'jumpTo',
                                        },
                                    },
                                },
                            ],
                        },
                        id: 'b4515bc4-f0b1-4100-9781-a108197062a8',
                        label: 'ScatterTrigger',
                        item: {
                            key: 'ScatterTrigger',
                            label: 'ScatterTrigger',
                            out: [
                                'wins',
                                'symbolNum',
                                'wildNum',
                                'respinNum',
                                'winResult',
                            ],
                            defaultValue: {
                                moreExpand: true,
                                configuration: {
                                    triggerType: 'scatters',
                                    betType: 'bet',
                                    checkWinType: 'left2right',
                                    winMulti: 1,
                                    triggerRespinType: 'none',
                                },
                            },
                            configuration: [
                                {
                                    label: 'triggerType',
                                    type: 'select',
                                    association: [
                                        'minNum',
                                        'posArea',
                                        'countScatterPayAs',
                                    ],
                                    option: [
                                        {
                                            label: 'scatters',
                                            value: 'scatters',
                                        },
                                        {
                                            label: 'reelscatters',
                                            value: 'reelscatters',
                                        },
                                        {
                                            label: 'countscatter',
                                            value: 'countscatter',
                                        },
                                        {
                                            label: 'countscatterReels',
                                            value: 'countscatterReels',
                                        },
                                        {
                                            label: 'countscatterInArea',
                                            value: 'countscatterInArea',
                                        },
                                    ],
                                },
                                {
                                    label: 'minNum',
                                    type: 'inputWidthNumber',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'posArea',
                                    type: 'posArea',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: ['countscatterInArea'],
                                    },
                                },
                                {
                                    label: 'countScatterPayAs',
                                    type: 'selectSymbol',
                                    required: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'betType',
                                    type: 'select',
                                    association: ['putMoneyInPiggyBank'],
                                    option: [
                                        {
                                            label: 'bet',
                                            value: 'bet',
                                        },
                                        {
                                            label: 'totalBet',
                                            value: 'totalBet',
                                        },
                                        {
                                            label: 'noPay',
                                            value: 'noPay',
                                        },
                                    ],
                                },
                                {
                                    label: 'symbols',
                                    type: 'selectSymbols',
                                    required: true,
                                },
                                {
                                    label: 'wildSymbols',
                                    type: 'selectSymbols',
                                },
                                {
                                    label: 'winMulti',
                                    type: 'inputNumber1',
                                },
                                {
                                    label: 'symbolValsMulti',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'add',
                                            value: 'add',
                                        },
                                        {
                                            label: 'mul',
                                            value: 'mul',
                                        },
                                        {
                                            label: 'powof2add',
                                            value: 'powof2add',
                                        },
                                        {
                                            label: 'powof2mul',
                                            value: 'powof2mul',
                                        },
                                    ],
                                },
                                {
                                    label: 'targetMask',
                                    type: 'selectMaskNode',
                                },
                                {
                                    label: 'putMoneyInPiggyBank',
                                    type: 'selectPiggyBankNode',
                                    show: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                },
                                {
                                    label: 'triggerRespinType',
                                    type: 'select',
                                    association: [
                                        'respinComponent',
                                        'genRespinType',
                                    ],
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'respinNum',
                                            value: 'respinNum',
                                        },
                                        {
                                            label: 'triggerNum',
                                            value: 'triggerNum',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinComponent',
                                    type: 'selectRespinNode',
                                    required: true,
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                },
                                {
                                    label: 'genRespinType',
                                    type: 'select',
                                    association: [
                                        'respinNum',
                                        'respinNumWithScatterNum',
                                        'respinNumWeight',
                                        'respinNumWeightWithScatterNum',
                                    ],
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                    option: [
                                        {
                                            label: 'number',
                                            value: 'number',
                                        },
                                        {
                                            label: 'scatterNum',
                                            value: 'scatterNum',
                                        },
                                        {
                                            label: 'weight',
                                            value: 'weight',
                                        },
                                        {
                                            label: 'scatterNumWeight',
                                            value: 'scatterNumWeight',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinNum',
                                    type: 'inputNumberInteger',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['number'],
                                    },
                                },
                                {
                                    label: 'respinNumWithScatterNum',
                                    type: 'respinNumWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNum'],
                                    },
                                },
                                {
                                    label: 'respinNumWeight',
                                    type: 'selectIntValWeight',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['weight'],
                                    },
                                },
                                {
                                    label: 'respinNumWeightWithScatterNum',
                                    type: 'respinNumWeightWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNumWeight'],
                                    },
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                            controller: 'true',
                            componentval: ['winMulti'],
                        },
                        data: {
                            moreExpand: true,
                            configuration: {
                                triggerType: 'scatters',
                                betType: 'bet',
                                checkWinType: 'left2right',
                                winMulti: 1,
                                triggerRespinType: 'none',
                                symbols: ['FG'],
                            },
                            labelIsError: false,
                            label: 'bg-payfg',
                        },
                        zIndex: 7,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            label: 'method1',
            bet: 100,
            graph: {
                cells: [
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#1677ff',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '5829b251-2338-477d-9f31-57615ed36027',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '4bcfc051-fad5-4cb6-9b01-620ba07b9232',
                            port: 'start-out',
                        },
                        target: {
                            cell: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#1677ff',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '70269940-b767-417e-ab58-0b7f68dd6d0d',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                            port: 'component-groups-out',
                        },
                        target: {
                            cell: '691543af-60c8-4132-a384-f32ae6e735f2',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        shape: 'edge',
                        attrs: {
                            line: {
                                stroke: '#3cb44b',
                                strokeWidth: 3,
                                strokeDasharray: 0,
                            },
                        },
                        id: '781d97f9-9e2a-4a72-85a6-c407e4aeb17d',
                        zIndex: -1,
                        labels: [
                            {
                                position: 0.5,
                                data: null,
                            },
                        ],
                        source: {
                            cell: '691543af-60c8-4132-a384-f32ae6e735f2',
                            port: 'jump-component-groups-out',
                        },
                        target: {
                            cell: 'ccb36a0a-58fa-41b7-a6d2-67cff8c48551',
                            port: 'component-groups-in',
                        },
                    },
                    {
                        position: {
                            x: 0,
                            y: 0,
                        },
                        size: {
                            width: 1,
                            height: 1,
                        },
                        visible: true,
                        shape: 'custom-node-width-start',
                        ports: {
                            groups: {
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                        {
                                            tagName: 'text',
                                            selector: 'portNameLabel',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 80,
                                            height: 40,
                                            strokeWidth: 0,
                                            fill: '#242525',
                                            magnet: true,
                                        },
                                        portNameLabel: {
                                            ref: 'portBody',
                                            refX: 23,
                                            refY: 12,
                                            fill: '#fff',
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -40,
                                                y: -20,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'start-out',
                                    group: 'domout',
                                    attrs: {
                                        portNameLabel: {
                                            text: 'Start',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '4bcfc051-fad5-4cb6-9b01-620ba07b9232',
                        zIndex: 1,
                    },
                    {
                        position: {
                            x: 180,
                            y: -210,
                        },
                        size: {
                            width: 400,
                            height: 276,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '707bf527-e7ea-4cd9-bf20-0923e7f19222',
                        label: 'WeightReels',
                        item: {
                            key: 'WeightReels',
                            label: 'WeightReels',
                            out: ['symbols', 'reelSet', 'reelSetIndex'],
                            defaultValue: {
                                configuration: {
                                    isExpandReel: false,
                                },
                            },
                            configuration: [
                                {
                                    label: 'reelSetWeight',
                                    type: 'selectReelSetWeight',
                                    required: true,
                                },
                                {
                                    label: 'isExpandReel',
                                    type: 'boolean',
                                },
                            ],
                            controller: 'true',
                            componentval: ['reelSetWeight'],
                        },
                        data: {
                            configuration: {
                                isExpandReel: false,
                                reelSetWeight: 'bgreelweight',
                            },
                            labelIsError: false,
                            label: 'bg-spin',
                            controllerExpand: false,
                        },
                        zIndex: 2,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 750,
                            y: -300,
                        },
                        size: {
                            width: 400,
                            height: 875,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                                {
                                    id: 'jump-component-groups-out',
                                    group: 'jumpout',
                                    attrs: {
                                        text: {
                                            text: 'jumpTo',
                                        },
                                    },
                                },
                            ],
                        },
                        id: '691543af-60c8-4132-a384-f32ae6e735f2',
                        label: 'ScatterTrigger',
                        item: {
                            key: 'ScatterTrigger',
                            label: 'ScatterTrigger',
                            out: [
                                'wins',
                                'symbolNum',
                                'wildNum',
                                'respinNum',
                                'winResult',
                            ],
                            defaultValue: {
                                moreExpand: true,
                                configuration: {
                                    triggerType: 'scatters',
                                    betType: 'bet',
                                    checkWinType: 'left2right',
                                    winMulti: 1,
                                    triggerRespinType: 'none',
                                },
                            },
                            configuration: [
                                {
                                    label: 'triggerType',
                                    type: 'select',
                                    association: [
                                        'minNum',
                                        'posArea',
                                        'countScatterPayAs',
                                    ],
                                    option: [
                                        {
                                            label: 'scatters',
                                            value: 'scatters',
                                        },
                                        {
                                            label: 'reelscatters',
                                            value: 'reelscatters',
                                        },
                                        {
                                            label: 'countscatter',
                                            value: 'countscatter',
                                        },
                                        {
                                            label: 'countscatterReels',
                                            value: 'countscatterReels',
                                        },
                                        {
                                            label: 'countscatterInArea',
                                            value: 'countscatterInArea',
                                        },
                                    ],
                                },
                                {
                                    label: 'minNum',
                                    type: 'inputWidthNumber',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'posArea',
                                    type: 'posArea',
                                    required: true,
                                    show: {
                                        label: 'triggerType',
                                        value: ['countscatterInArea'],
                                    },
                                },
                                {
                                    label: 'countScatterPayAs',
                                    type: 'selectSymbol',
                                    required: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                    show: {
                                        label: 'triggerType',
                                        value: [
                                            'countscatter',
                                            'countscatterReels',
                                            'countscatterInArea',
                                        ],
                                    },
                                },
                                {
                                    label: 'betType',
                                    type: 'select',
                                    association: ['putMoneyInPiggyBank'],
                                    option: [
                                        {
                                            label: 'bet',
                                            value: 'bet',
                                        },
                                        {
                                            label: 'totalBet',
                                            value: 'totalBet',
                                        },
                                        {
                                            label: 'noPay',
                                            value: 'noPay',
                                        },
                                    ],
                                },
                                {
                                    label: 'symbols',
                                    type: 'selectSymbols',
                                    required: true,
                                },
                                {
                                    label: 'wildSymbols',
                                    type: 'selectSymbols',
                                },
                                {
                                    label: 'winMulti',
                                    type: 'inputNumber1',
                                },
                                {
                                    label: 'symbolValsMulti',
                                    type: 'select',
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'add',
                                            value: 'add',
                                        },
                                        {
                                            label: 'mul',
                                            value: 'mul',
                                        },
                                        {
                                            label: 'powof2add',
                                            value: 'powof2add',
                                        },
                                        {
                                            label: 'powof2mul',
                                            value: 'powof2mul',
                                        },
                                    ],
                                },
                                {
                                    label: 'targetMask',
                                    type: 'selectMaskNode',
                                },
                                {
                                    label: 'putMoneyInPiggyBank',
                                    type: 'selectPiggyBankNode',
                                    show: {
                                        label: 'betType',
                                        value: ['bet', 'totalBet'],
                                    },
                                },
                                {
                                    label: 'triggerRespinType',
                                    type: 'select',
                                    association: [
                                        'respinComponent',
                                        'genRespinType',
                                    ],
                                    option: [
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                        {
                                            label: 'respinNum',
                                            value: 'respinNum',
                                        },
                                        {
                                            label: 'triggerNum',
                                            value: 'triggerNum',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinComponent',
                                    type: 'selectRespinNode',
                                    required: true,
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                },
                                {
                                    label: 'genRespinType',
                                    type: 'select',
                                    association: [
                                        'respinNum',
                                        'respinNumWithScatterNum',
                                        'respinNumWeight',
                                        'respinNumWeightWithScatterNum',
                                    ],
                                    show: {
                                        label: 'triggerRespinType',
                                        value: ['respinNum', 'triggerNum'],
                                    },
                                    option: [
                                        {
                                            label: 'number',
                                            value: 'number',
                                        },
                                        {
                                            label: 'scatterNum',
                                            value: 'scatterNum',
                                        },
                                        {
                                            label: 'weight',
                                            value: 'weight',
                                        },
                                        {
                                            label: 'scatterNumWeight',
                                            value: 'scatterNumWeight',
                                        },
                                    ],
                                },
                                {
                                    label: 'respinNum',
                                    type: 'inputNumberInteger',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['number'],
                                    },
                                },
                                {
                                    label: 'respinNumWithScatterNum',
                                    type: 'respinNumWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNum'],
                                    },
                                },
                                {
                                    label: 'respinNumWeight',
                                    type: 'selectIntValWeight',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['weight'],
                                    },
                                },
                                {
                                    label: 'respinNumWeightWithScatterNum',
                                    type: 'respinNumWeightWithScatterNum',
                                    required: true,
                                    show: {
                                        label: 'genRespinType',
                                        value: ['scatterNumWeight'],
                                    },
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                            controller: 'true',
                            componentval: ['winMulti'],
                        },
                        data: {
                            moreExpand: true,
                            configuration: {
                                triggerType: 'countscatterInArea',
                                betType: 'noPay',
                                checkWinType: 'left2right',
                                winMulti: 1,
                                triggerRespinType: 'none',
                                posArea: [1, 1, 1, 2],
                                minNum: 3,
                                symbols: ['SC'],
                            },
                            labelIsError: false,
                            label: 'bg-walktrigger',
                        },
                        zIndex: 3,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        position: {
                            x: 1270,
                            y: -180,
                        },
                        size: {
                            width: 400,
                            height: 220,
                        },
                        view: 'react-shape-view',
                        shape: 'custom-node',
                        ports: {
                            groups: {
                                domin: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'portBody',
                                        },
                                    ],
                                    attrs: {
                                        portBody: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: -5,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                },
                                domout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 50,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                jumpout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                loopout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                foreachout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            magnet: true,
                                            fill: '#A9A9A9',
                                            x: -5,
                                            y: -5,
                                        },
                                    },
                                    position: {
                                        args: {
                                            position: {
                                                x: 399,
                                                y: 80,
                                            },
                                            angle: 0,
                                        },
                                    },
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                                valsout: {
                                    markup: [
                                        {
                                            tagName: 'rect',
                                            selector: 'rect',
                                        },
                                    ],
                                    attrs: {
                                        rect: {
                                            width: 10,
                                            height: 10,
                                            strokeWidth: 1,
                                            fill: '#A9A9A9',
                                            magnet: true,
                                            y: -5,
                                        },
                                    },
                                    position: 'rightPortPosition',
                                    label: {
                                        position: {
                                            name: 'right',
                                        },
                                    },
                                },
                            },
                            items: [
                                {
                                    id: 'component-groups-in',
                                    group: 'domin',
                                },
                                {
                                    id: 'component-groups-out',
                                    group: 'domout',
                                    attrs: {
                                        text: {
                                            text: 'Next',
                                        },
                                    },
                                },
                            ],
                        },
                        id: 'ccb36a0a-58fa-41b7-a6d2-67cff8c48551',
                        label: 'MoveSymbol',
                        item: {
                            key: 'MoveSymbol',
                            label: 'MoveSymbol',
                            out: ['symbols'],
                            defaultValue: {
                                moreExpand: true,
                            },
                            configuration: [
                                {
                                    label: 'moveData',
                                    type: 'moveData',
                                },
                            ],
                            more: [
                                {
                                    label: 'inputSymbols',
                                    type: 'selectSymbolsNode',
                                },
                            ],
                        },
                        data: {
                            moreExpand: true,
                            labelIsError: false,
                            label: 'bg-walk',
                            configuration: {
                                moveData: [
                                    {
                                        src: {
                                            type: 'selectWithXY',
                                            Y: 1,
                                            X: 1,
                                        },
                                        target: {
                                            type: 'selectSymbolR2L',
                                            Y: 1,
                                            Symbol: 'SC',
                                        },
                                        moveType: 'xy',
                                        targetSymbol: 'SC',
                                        overrideSrc: 'false',
                                        overrideTarget: 'false',
                                        overridePath: 'true',
                                        name: 'moveData 1',
                                    },
                                ],
                                inputSymbols: [],
                            },
                        },
                        zIndex: 4,
                        tools: {
                            items: [
                                {
                                    name: 'button-remove',
                                    args: {
                                        x: 380,
                                        y: 18,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ];

    const logicData = genLogicData(obj);
    expect(typeof logicData).not.toBe('string');
    expect(logicData).not.toBe(null);
});
