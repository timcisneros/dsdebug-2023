const caasIndexing = [
    {
        size: { width: 962, height: 601 },
        content: '',
        type: 'springcm.Group',
        position: { x: -8, y: 20 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'f41edb7e-c4b4-4fc5-a68c-888187e6010d',
        z: 1,
        name: {
            type: 'String',
            value: 'Get Most Current Employee Data or Move to Exceptions',
        },
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Get Most Current Employee Data or Move to Exceptions',
            },
        },
    },
    {
        size: { width: 1240, height: 599 },
        content: '',
        type: 'springcm.Group',
        position: { x: 963, y: 26 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: '6dce4e77-bd39-440e-94c9-1feed3d811d2',
        name: { type: 'String', value: 'Apply Attributes' },
        z: 2,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Apply Attributes',
            },
        },
    },
    {
        size: { width: 684, height: 600 },
        content: '',
        type: 'springcm.Group',
        position: { x: 2215, y: 24 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: '8bceebfa-885d-4d56-921a-7b99225b03fc',
        z: 3,
        name: { type: 'String', value: 'Completed' },
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Completed',
            },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b05a0d73-3843-4602-9149-f9b599902f56',
            port: 'e',
        },
        target: {
            id: '6125f11d-b36c-4bb3-88f3-fca1b2a310d0',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'a5badad9-99dd-43cd-b2d9-a1405118d644',
        z: 1000004,
        name: { type: 'String', value: 'Link 2' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '6125f11d-b36c-4bb3-88f3-fca1b2a310d0',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'fbdd4558-343b-4a76-a467-70288d55d4a3',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'a5db0069-87c4-4246-97ae-ee403912abab',
        z: 1000007,
        name: { type: 'String', value: 'Link 3' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'fbdd4558-343b-4a76-a467-70288d55d4a3',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'aedc67c4-e36e-41ba-8dff-1fa6fbc045a6',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '9f308b56-5b55-4191-baae-9e2a75a3da2b',
        z: 1000009,
        name: { type: 'String', value: 'Link 4' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '6125f11d-b36c-4bb3-88f3-fca1b2a310d0',
            port: 'e',
        },
        target: {
            id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c8ce2f6c-0ed3-44b4-8e35-ee75c2769c8d',
        z: 1000011,
        name: { type: 'String', value: 'Link 5' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2adfc731-f6f8-4b40-9fff-ca182db0ca73',
            port: 'en',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(7)',
        },
        target: {
            id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '4643fd2a-45bd-47a9-95f6-aa06f2d31065',
        z: 1000015,
        name: { type: 'String', value: 'Link 8' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
            port: 'ws',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(6)',
        },
        target: {
            id: '780e4b87-3ce9-45ba-9ca1-c7d9d25064cf',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '7c51b431-c97f-41e9-929d-8a01a71e5f7a',
        z: 1000018,
        name: { type: 'String', value: 'Link 9' },
        vertices: [{ x: 359, y: 278 }],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
            port: 'e',
        },
        target: {
            id: '1aed71fb-fd2e-4f97-802d-12e1de8826da',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f4d47831-5634-448e-9d0f-8c067c38e6ae',
        z: 1000019,
        name: { type: 'String', value: 'Link 10' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: -171, y: 67 },
        angle: 0,
        activityName: 'StartActivity',
        group: 'hidden',
        icon: { path: 'start.svg#Dark', color: 'white' },
        z: 2000001,
        id: '61b91aea-ca79-4bdf-8892-0adf5d94e972',
        name: { type: 'String', value: 'Start' },
        definedVariables: {
            type: 'Variable',
            value: [
                {
                    type: 'Xml',
                    value: {
                        name: 'Params',
                        displayName: 'Params',
                        description: '',
                        displayType: 'Document',
                        schema: {
                            nodes: [
                                {
                                    name: 'Documents',
                                    nodes: [
                                        {
                                            name: 'Document',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'ba44372d-51f2-48f4-8d34-5f2e7f8485cc',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '4575d560-fd35-439f-a228-7b6b380e6059',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '283b61dc-20c3-4cc9-832a-0fb1deaf508f',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '264c96fe-dd77-4a24-afb3-58147e5afd1a',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'b151424c-6e21-4e60-93d3-49bd201c834d',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'e7fdd74f-040d-48ed-bb46-072a7a205b07',
                                                },
                                                {
                                                    name: 'Metadata',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    nodes: [
                                                        {
                                                            name: 'Group',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '65436b9b-9ff0-434a-9f0f-3405a60d2bd3',
                                                        },
                                                        {
                                                            name: 'Field',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '4ed0686b-0308-4aab-907a-b99b9a2f44f4',
                                                        },
                                                        {
                                                            name: 'Value',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '37657019-6529-4e05-bedf-afe1cc7ade79',
                                                        },
                                                        {
                                                            name: 'SetName',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '8c571fae-d4cf-41ee-8989-04d53db813f0',
                                                        },
                                                        {
                                                            name: 'SetNumber',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '3801df97-7cbd-48ed-af2e-3bb174ba7045',
                                                        },
                                                    ],
                                                    guid: 'c61ed6f1-e8f2-481a-8ed4-7c3e24a076d6',
                                                },
                                                {
                                                    name: 'MetadataGroup',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    nodes: [
                                                        {
                                                            name: 'Set',
                                                            nodes: [
                                                                {
                                                                    name: 'Field',
                                                                    nodes: [
                                                                        {
                                                                            name: 'Group',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '87605954-74bf-4bf9-98ed-2b1e47b74f85',
                                                                        },
                                                                        {
                                                                            name: 'Field',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: 'd02b44ad-114a-4e3a-8daa-ff7768ee6392',
                                                                        },
                                                                        {
                                                                            name: 'Value',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: 'eb854789-4659-4dae-9211-a32f64a88b18',
                                                                        },
                                                                        {
                                                                            name: 'SetName',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: 'ada0be34-8755-4e76-9cea-8619b988f104',
                                                                        },
                                                                        {
                                                                            name: 'SetNumber',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '8642e92e-fa57-42f3-8109-5a47a0826b53',
                                                                        },
                                                                    ],
                                                                    guid: 'a15929eb-eb58-4ac8-a83a-00225ebd30b0',
                                                                },
                                                                {
                                                                    name: 'Name',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '81517fc7-2076-45f9-96cd-964ca57311d4',
                                                                },
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '6557789b-2561-4c31-bfcb-471e56caaece',
                                                                },
                                                            ],
                                                            guid: 'e117e7a2-fa50-4bf5-aa0f-dc62a093f1be',
                                                        },
                                                        {
                                                            name: 'Name',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '1b59f094-de1c-45b2-bbef-790072fe9212',
                                                        },
                                                    ],
                                                    guid: '6413e0ef-8560-4b22-90e5-f16d8f932d1b',
                                                },
                                                {
                                                    name: 'ParentFolderName',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '5bcf1da2-4e77-478b-a403-076e0a57e065',
                                                },
                                                {
                                                    name: 'UpdatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '4dadd73c-4260-41ab-b480-ba3e990830ab',
                                                },
                                                {
                                                    name: 'UpdatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '6de4205f-3e42-4292-8c04-db0b2508536d',
                                                },
                                                {
                                                    name: 'IsFormDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'a981e704-e45d-4f79-9d0c-1d081d2e6cb1',
                                                },
                                                {
                                                    name: 'IsTermDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'd033cd4b-8714-4a97-8bd0-d984da0a8c22',
                                                },
                                                {
                                                    name: 'EditDocumentURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'fb2eb875-08e8-47d2-8478-0f95908bbf1c',
                                                },
                                                {
                                                    name: 'IsCheckedOut',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'f81ec2f0-118e-4613-af66-193a93657bb6',
                                                },
                                                {
                                                    name: 'MIMEType',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '0b7844a7-4716-40a5-99ab-7fb993e3f27a',
                                                },
                                                {
                                                    name: 'PageCount',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '5f7e9d58-7cb1-4d4d-9d67-83afea76a30e',
                                                },
                                                {
                                                    name: 'EmployeeFile',
                                                    nodes: [
                                                        {
                                                            name: 'LastName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '40ab7963-4b9b-4212-b323-66487f28c436',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '9575a72b-4fc2-4a2c-accf-57ca15f51b7c',
                                                                },
                                                            ],
                                                            guid: 'c1bd997c-7f1b-4281-a05a-e35b5ab6e2b2',
                                                        },
                                                        {
                                                            name: 'FirstName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '2a5ea2fa-1dff-4469-90dc-46c3b7aad281',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '7f3c6253-0c29-41e6-a38b-bf57bfbd2c0a',
                                                                },
                                                            ],
                                                            guid: '12d54086-1dcd-48e1-9e4b-ce3e2dc93c94',
                                                        },
                                                        {
                                                            name: 'EMPID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '67be8314-c587-4f5e-b422-629a2c0518ab',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '6db30abd-6d30-4a71-ae23-15ef18c9da32',
                                                                },
                                                            ],
                                                            guid: 'de502d89-c853-4a53-84ac-99de7da6af67',
                                                        },
                                                        {
                                                            name: 'SocialSecurityNumber',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '737d8364-0808-4512-bd5f-34524a253052',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'a07bb676-e4a9-4f1c-b650-8abc775337af',
                                                                },
                                                            ],
                                                            guid: '86eeda13-6a7f-4a3a-9d8a-e97cc519d658',
                                                        },
                                                        {
                                                            name: 'DepartmentID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'eec5b422-2acf-4ff5-9033-38e6f1bb5f56',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'dacee4d7-159c-409f-9e54-2f3c13fe05db',
                                                                },
                                                            ],
                                                            guid: '413474b7-fdbc-4a63-9514-94b78111056f',
                                                        },
                                                        {
                                                            name: 'Status',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '48ab74be-9e2c-4f1b-bd77-dfa765420443',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '54087df4-a65e-45b6-8e23-ee0a68e6445f',
                                                                },
                                                            ],
                                                            guid: '50ec8979-b6c1-4c6f-bec5-cee3fb3246b1',
                                                        },
                                                        {
                                                            name: 'PSID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'a6fee99b-07ca-4e20-b5e1-d3af95e9027a',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '729688dc-0e55-4124-82df-5a82bf48d98c',
                                                                },
                                                            ],
                                                            guid: '23522cec-103d-4b65-8993-e0e082334e32',
                                                        },
                                                        {
                                                            name: 'HireDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '599643b1-8641-4a12-8a19-756dc32d9249',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'a3948117-6094-484e-ba4b-f96d114696a9',
                                                                },
                                                            ],
                                                            guid: 'da3cfc5e-43c5-40ad-a4ed-daf6986383ab',
                                                        },
                                                        {
                                                            name: 'TermDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'a51955ae-2635-4f5d-8751-a0709057b922',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e08aa910-5468-4124-93ef-16374524bac1',
                                                                },
                                                            ],
                                                            guid: '6b75ebc4-076c-47b7-850a-6b2a56d464ed',
                                                        },
                                                        {
                                                            name: 'FacilityCode',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '3794c09e-6b0c-45b8-a21a-02982b82ee8b',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'fed9fc75-0c73-44ab-80b7-a2c15553899f',
                                                                },
                                                            ],
                                                            guid: 'e8124957-bfb1-45e1-ae06-64388ec697e0',
                                                        },
                                                        {
                                                            name: 'Hospital',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'c9db81d0-e482-4a64-af90-056de3e9422b',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '8161f1f8-b889-4e4a-a120-e891737f201b',
                                                                },
                                                            ],
                                                            guid: 'f5dee10e-50cb-4e7b-8574-fb91392377fa',
                                                        },
                                                        {
                                                            name: 'DocumentName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '667e60ce-97b0-487f-aeee-7d1925a48aa6',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'ea7cbc4e-0689-46f8-bd7e-848499689639',
                                                                },
                                                            ],
                                                            guid: '387496b9-3b97-47ee-bc1b-a44f1e977821',
                                                        },
                                                        {
                                                            name: 'Category',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '529b31f5-9574-4f86-be08-41a6be1bc6ea',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '870d9345-24c0-4796-b946-0450fe14c19d',
                                                                },
                                                            ],
                                                            guid: '456b4644-8025-4033-a138-b3a9b9a3487b',
                                                        },
                                                        {
                                                            name: 'Subcategory',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '5e045655-a963-47b2-8997-c8260740e08b',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '4db9c041-c96b-4cf5-9220-6bd38b23456e',
                                                                },
                                                            ],
                                                            guid: '9b4896a3-5ba6-45ae-b291-0f3b22661f28',
                                                        },
                                                        {
                                                            name: 'DocumentDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'db6aaa0e-a734-4a44-99ed-971ddb6b6832',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'fa3ed9a1-b5ea-49d1-ae09-aa1d8b505758',
                                                                },
                                                            ],
                                                            guid: '609798bb-4ba0-4a0e-a3cd-d74cb9e201d0',
                                                        },
                                                        {
                                                            name: 'DocumentDate_FormattedDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'cea9b077-90b5-4c3f-98a4-d574502ad268',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'f31e6354-59d9-4873-8404-f284098b52b2',
                                                                },
                                                            ],
                                                            guid: '457b6caa-6fa4-4877-ae2e-ec2fdecbb79c',
                                                        },
                                                        {
                                                            name: 'DocumentDate_FormattedTime',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '0081ce7d-6b6b-4537-a3be-e927b4801a3e',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'fd993851-bde2-4951-af6b-e7004f5a1451',
                                                                },
                                                            ],
                                                            guid: 'fbdcc9b0-c2e5-48bf-b656-ed87201582aa',
                                                        },
                                                    ],
                                                    guid: '5b22d0bb-9e1d-4b44-8dbf-9dcfce805b98',
                                                },
                                            ],
                                            guid: '07b18e01-6809-4e00-a3fa-ec68dc251d1d',
                                        },
                                    ],
                                    guid: '833e2b69-6e50-4c30-ba85-33725051d4dd',
                                },
                            ],
                        },
                        sortable: false,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: true,
                        isLocal: false,
                    },
                },
                {
                    type: 'User',
                    value: {
                        name: 'SubmittedBy',
                        displayName: 'Submitted By',
                        description: '',
                        displayType: 'Actor',
                        schema: {
                            name: 'UserAccount',
                            nodes: [
                                {
                                    name: 'Name',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '048ce225-8178-48d6-98f6-bac55fab6da8',
                                },
                                {
                                    name: 'CreatedDate',
                                    dataType: 'dateTime',
                                    type: 'element',
                                    guid: '80ad43a3-2b5c-4ede-9f7a-04ac9cffa97d',
                                },
                                {
                                    name: 'Email',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '6af3aa6b-a06c-48bd-af59-10f71ed629cb',
                                },
                                {
                                    name: 'FirstName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '48933bc7-8e63-4278-8914-ce12fca57d17',
                                },
                                {
                                    name: 'LastName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '13e496d0-a519-47af-a4c5-1b8e95612a72',
                                },
                                {
                                    name: 'ManagerUid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '3d233bda-03fb-42cf-8eb9-cdee8b7af6f6',
                                },
                                {
                                    name: 'Role',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'ce85fd0e-c91c-45a4-994e-f7e34f73218d',
                                },
                                {
                                    name: 'Uid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'da087449-0826-48a3-8851-5449fcb5720b',
                                },
                                {
                                    name: 'Language',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'af2603d6-3d1e-44e4-98c2-80e3ee46fb44',
                                },
                                {
                                    name: 'Region',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '16deec84-5726-4140-b580-c1fc3690b759',
                                },
                            ],
                        },
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Comments',
                        displayName: 'Comments',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: true,
                        deletable: false,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Date',
                        displayName: 'Current Date',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Time',
                        displayName: 'Current Time',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Link',
                        displayName: 'Current Step Link',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'LastAbortEmail',
                        displayName: 'Last Abort Email',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Document_Name',
                        displayName: 'Document_Name',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Last_Name',
                        displayName: 'Last_Name',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'First_Name',
                        displayName: 'First_Name',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'EMP_ID',
                        displayName: 'EMP_ID',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Social_Security_Number',
                        displayName: 'Social_Security_Number',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Department_ID',
                        displayName: 'Department_ID',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Status',
                        displayName: 'Status',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'PSID',
                        displayName: 'PSID',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Hire_Date',
                        displayName: 'Hire_Date',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Term_Date',
                        displayName: 'Term_Date',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Category',
                        displayName: 'Category',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Subcategory',
                        displayName: 'Subcategory',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Test',
                        displayName: 'Test',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'MetadataGroup',
                        displayName: 'MetadataGroup',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Date',
                    value: {
                        name: 'Document_Date',
                        displayName: 'Document_Date',
                        description: '',
                        displayType: 'Date',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'MetadataGroupNode',
                        displayName: 'MetadataGroupNode',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Doc',
                        displayName: 'Doc',
                        description: '',
                        displayType: 'CustomXml',
                        schema: {
                            nodes: [
                                {
                                    name: 'root',
                                    type: 'element',
                                    dataType: 'string',
                                    guid: 'cd9e4734-c4ba-47fc-b0f6-7b4b40590811',
                                    isRoot: true,
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Doc_No_Attributes_Query',
                        displayName: 'Doc_No_Attributes_Query',
                        description: '',
                        displayType: 'CustomXml',
                        schema: {
                            nodes: [
                                {
                                    name: 'Root',
                                    type: 'element',
                                    dataType: 'string',
                                    guid: 'ebf55ed4-9ea2-4358-95d6-9822b2aa24b2',
                                    isRoot: true,
                                    nodes: [
                                        {
                                            type: 'element',
                                            dataType: 'string',
                                            guid: 'b5b5a6fe-f813-43b7-9a4a-4fc9096924ef',
                                            name: 'Id',
                                        },
                                    ],
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'New_Doc',
                        displayName: 'New_Doc',
                        description: '',
                        displayType: 'Document',
                        schema: {
                            nodes: [
                                {
                                    name: 'Documents',
                                    nodes: [
                                        {
                                            name: 'Document',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '49db40c6-4088-43a6-8b07-def3155189c4',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'b230f743-a82c-41a7-9710-f79d4c7d63c9',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'a1c67973-6f00-4ab4-b359-43fe01dd3b17',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'a313bbc3-52b1-469b-9587-ef7b94cdee3d',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '95258cb3-1890-4ece-9c87-29be13548fec',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '89e75a85-4856-4b3b-b97d-4235e88a9cb8',
                                                },
                                                {
                                                    name: 'ParentFolderName',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '35cd07c0-ca1c-462b-ac0c-6cb9ebc97d7d',
                                                },
                                                {
                                                    name: 'UpdatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '1358dcc8-aa76-47d6-91f1-d9ce9ed3f0dc',
                                                },
                                                {
                                                    name: 'UpdatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'fe3bcb20-41c6-4e3c-9faf-38449c3a6ab6',
                                                },
                                                {
                                                    name: 'IsFormDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '83a46467-a7d2-432d-8a66-c266c241a353',
                                                },
                                                {
                                                    name: 'IsTermDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '956d32bd-ddea-4042-95fa-a228884b8ddd',
                                                },
                                                {
                                                    name: 'EditDocumentURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '6a06bde9-1899-4dfe-afc6-71cecafc004b',
                                                },
                                                {
                                                    name: 'IsCheckedOut',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'cd787b66-f9f7-47cc-95c0-ec12713a6bb4',
                                                },
                                                {
                                                    name: 'PageCount',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'eba6fede-4771-4bc7-84e8-57a885f1dab0',
                                                },
                                            ],
                                            guid: '7911e926-0b70-49c1-a12a-e67a2001c2b7',
                                        },
                                    ],
                                    guid: 'f3e5b495-a404-46cc-89e6-61c282a0da5d',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Facility_Code',
                        displayName: 'Facility_Code',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Hospital',
                        displayName: 'Hospital',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Business_Unit',
                        displayName: 'Business_Unit',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Social_Security_Number_Formatted',
                        displayName: 'Social_Security_Number_Formatted',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'TryAgain',
                        displayName: 'TryAgain',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
            ],
        },
        workflowName: { type: 'String', value: 'INDEXING__CaaS' },
        sendNotification: { type: 'Bool', value: false },
        trackActivity: { type: 'Bool', value: true },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Start',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/start.svg#Dark',
            },
            svg: { color: 'white' },
            circle: { fill: '#A0CC23' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 311, y: 68 },
        angle: 0,
        activityName: 'UpdateStatusActivity',
        group: 'engineActivities',
        icon: { path: 'status_change.svg#Dark', color: '#e98824' },
        id: 'b05a0d73-3843-4602-9149-f9b599902f56',
        z: 2000002,
        name: { type: 'String', value: 'Update Information 1' },
        stepDescription: {
            type: 'String',
            value: 'Log Full Name of Document',
        },
        status: {
            type: 'String',
            value: '<%#XmlVariables.Params.Documents.Document.Name%>',
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nInformation 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Log Full Name of\nDocument',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/status_change.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: 2737, y: 64 },
        angle: 0,
        activityName: 'EndActivity',
        group: 'engineActivities',
        icon: { path: 'finish.svg#Dark', color: 'white' },
        id: 'c8ae7bc2-04c8-4593-ac6e-10213b34dda4',
        z: 2000004,
        name: { type: 'String', value: 'Finish 1' },
        stepDescription: { type: 'String', value: '' },
        attrs: {
            '.circle-container': {
                fill: '#29bdbe',
                class: 'circle-container theme_primary_fill',
            },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Finish 1',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/finish.svg#Dark',
            },
            svg: { color: 'white' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 549, y: 69 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '6125f11d-b36c-4bb3-88f3-fca1b2a310d0',
        z: 2000005,
        name: { type: 'String', value: 'Update Variable From CSV 1' },
        stepDescription: {
            type: 'String',
            value: 'Get Employee Data',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Oracle HRIS Master Table - Employees.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'EMP ID' },
        fieldValue: {
            type: 'Expression',
            value: {
                code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\nreturn GetVariableValue($"Params.Documents.Document.{metadata_group_node}.EMPID");',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Last_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Last Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'First_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'First Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EMP_ID' },
                    },
                    variableValue: { type: 'String', value: 'EMP ID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Social Security Number',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Department_ID',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Department ID',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Status' },
                    },
                    variableValue: { type: 'String', value: 'Status' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'PSID' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Legal Entity',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hire_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Hire Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Term_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Term Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Facility_Code',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Facility Code',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Business_Unit',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'BusinessUnit',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.96875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.984375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get Employee Data',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1994, y: 67 },
        angle: 0,
        activityName: 'UpdateDocumentMetadataActivity',
        group: 'engineActivities',
        icon: { path: 'update_metadata.svg#Dark', color: '#CC3791' },
        id: 'df2e5738-d7e9-434b-8620-f918e221b74b',
        z: 2000008,
        name: {
            type: 'String',
            value: 'Update Document Metadata Value 1',
        },
        stepDescription: {
            type: 'String',
            value: 'Apply or Refresh Existing Attributes',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'New_Doc' },
                },
            ],
        },
        metadata: {
            type: 'MetadataUpdate',
            value: [
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Last Name',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Last_Name' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'First Name',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'First_Name' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'EMP ID',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EMP_ID' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Social Security Number',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Department ID',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Department_ID',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Status',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Status' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'PSID',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'PSID' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Hire Date',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hire_Date' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Term Date',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Term_Date' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Document Name',
                                    groupName: 'Employee File',
                                    setName: 'Document Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Document_Name',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Category',
                                    groupName: 'Employee File',
                                    setName: 'Document Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Category' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Subcategory',
                                    groupName: 'Employee File',
                                    setName: 'Document Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Subcategory',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Document Date',
                                    groupName: 'Employee File',
                                    setName: 'Document Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Date',
                            value: 'Document_Date',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Facility Code',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Facility_Code',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Hospital',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hospital' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Business Unit',
                                    groupName: 'Employee File',
                                    setName: 'Employee Information',
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Business_Unit',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nMetadata Val…',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Apply or Refresh Existing\nAttributes',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_metadata.svg#Dark',
            },
            svg: { color: '#CC3791', fill: '#fff' },
            rect: { fill: '#CC3791' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 250, y: 350 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: 'fbdd4558-343b-4a76-a467-70288d55d4a3',
        name: { type: 'String', value: 'Update Variable From CSV 2' },
        stepDescription: {
            type: 'String',
            value: 'Try Legacy Employee Data',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Employee Information_Legacy.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Social Security Number' },
        fieldValue: {
            type: 'Expression',
            value: {
                code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\n\r\nreturn String.Format("{0:000000000}", Int32.Parse(GetVariableValue($"Params.Documents.Document.{metadata_group_node}.SocialSecurityNumber")));',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Last_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Last Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'First_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'First Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EMP_ID' },
                    },
                    variableValue: { type: 'String', value: 'EMP ID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Social Security Number',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Department_ID',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Department ID',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Status' },
                    },
                    variableValue: { type: 'String', value: 'Status' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'PSID' },
                    },
                    variableValue: { type: 'String', value: 'PSID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hire_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Hire Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Term_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Term Date',
                    },
                },
            ],
        },
        z: 2000009,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Try Legacy Employee\nData',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 633, y: 352 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '2adfc731-f6f8-4b40-9fff-ca182db0ca73',
        name: { type: 'String', value: 'Update Variable From CSV 3' },
        stepDescription: {
            type: 'String',
            value: 'Retry Employee Data with SSN',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Oracle HRIS Master Table - Employees.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Social Security Number' },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Last_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Last Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'First_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'First Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EMP_ID' },
                    },
                    variableValue: { type: 'String', value: 'EMP ID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Social Security Number',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Department_ID',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Department ID',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Status' },
                    },
                    variableValue: { type: 'String', value: 'Status' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'PSID' },
                    },
                    variableValue: { type: 'String', value: 'PSID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hire_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Hire Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Term_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Term Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Facility_Code',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Facility Code',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Business_Unit',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'BusinessUnit',
                    },
                },
            ],
        },
        z: 2000010,
        fieldValue: {
            type: 'String',
            value: '<%#Variable.Social_Security_Number_Formatted%>',
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Retry Employee Data with\nSSN',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 47, y: 350 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '780e4b87-3ce9-45ba-9ca1-c7d9d25064cf',
        z: 2000011,
        name: { type: 'String', value: 'Copy or Move Document 1' },
        stepDescription: {
            type: 'String',
            value: 'Move to Exceptions',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Exceptions/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.25,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move to Exceptions',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 788, y: 67 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
        z: 2000013,
        name: { type: 'String', value: 'Update Variable From CSV 4' },
        stepDescription: {
            type: 'String',
            value: 'Get Category and Subcategory',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Document Name Lookup.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Document Name' },
        fieldValue: {
            type: 'String',
            value: '<%#Variable.Document_Name%>',
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Category' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Category',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Subcategory',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Subcategory',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get Category and\nSubcategory',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 102, y: 68 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '787e7e96-ced0-453a-803e-85b995060f6e',
        z: 2000015,
        name: { type: 'String', value: 'Update Variable Value 1' },
        stepDescription: {
            type: 'String',
            value: 'Initial Variables',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'MetadataGroup',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: '// PMH Employee File - Alta HR\r\n// PMH Employee File - Culver City\r\n// Employee File\r\n\r\nreturn "Employee File"',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'Date',
                            value: 'Document_Date',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\n\r\nstring document_date = GetVariableValue($"Params.Documents.Document.{metadata_group_node}.DocumentDate_FormattedDate");\r\n\r\nstring result;\r\n\r\nif (document_date == "1/1/1900 12:00:00 AM") {\r\n    result = null;\r\n} else {\r\n    result = document_date;\r\n}\r\n\r\nreturn result;',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Document_Name',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\n\r\nstring document_name = GetVariableValue($"Params.Documents.Document.{metadata_group_node}.DocumentName");\r\n\r\nreturn document_name;',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'MetadataGroupNode',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string metadata_group = GetVariableValue("MetadataGroup");\r\n\r\nstring[] strings_to_remove = {"-"};\r\nstring[] split_words = metadata_group.Split();\r\n\r\nfor(int i = 0; i < split_words.Length; i++) {\r\n    string found_strings_to_remove = Array.Find(strings_to_remove, str => str.Contains(split_words[i], StringComparison.Ordinal));\r\n    if(split_words[i] == found_strings_to_remove) {\r\n        split_words[i] = "";\r\n    }\r\n    split_words[i].Trim();\r\n} \r\nstring joined_words = String.Join("", split_words);\r\nreturn metadata_group = joined_words;',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'TryAgain' },
                    },
                    variableValue: { type: 'String', value: 'Yes' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 91.8125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -45.90625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Initial Variables',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1018, y: 337 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'aeb30c1b-3fb6-4f00-8852-45c2c2b28a8a',
        name: { type: 'String', value: 'Copy or Move Document 3' },
        stepDescription: {
            type: 'String',
            value: 'Move to Exceptions',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Exceptions/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        z: 2000018,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.25,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move to Exceptions',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 2497, y: 66 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '9761707c-c811-4853-bc70-23b0d85cea81',
        z: 2000029,
        name: { type: 'String', value: 'Copy or Move Document 2' },
        stepDescription: {
            type: 'String',
            value: 'Move To Completed Folder',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'New_Doc' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Completed/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move To Completed\nFolder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1015, y: 72 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '1aed71fb-fd2e-4f97-802d-12e1de8826da',
        z: 2000031,
        name: { type: 'String', value: 'Copy or Move Document 4' },
        stepDescription: {
            type: 'String',
            value: 'Copy New Document',
        },
        action: { type: 'String', value: 'copy' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [{ type: 'String', value: '/Oracle HR/_Admin/Staging/' }],
        },
        outputDocuments: {
            type: 'Variable',
            value: { type: 'Xml', value: 'New_Doc' },
        },
        includeAttributes: { type: 'Bool', value: false },
        saveAsPdf: { type: 'Bool', value: false },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 123.71875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -61.859375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Copy New Document',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1588, y: 63 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '8eac4cc6-8118-4d59-8409-974b0491a6c6',
        name: { type: 'String', value: 'Copy or Move Document 5' },
        stepDescription: {
            type: 'String',
            value: 'Delete Old Document',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [{ type: 'String', value: '/Trash/' }],
        },
        outputDocuments: { type: 'Variable' },
        z: 2000032,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 5',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 126.53125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -63.265625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Delete Old Document',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1787, y: 65 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '7ba38249-1606-4af3-ae57-39d34cb79d02',
        z: 2000034,
        name: { type: 'String', value: 'Update Variable From CSV 5' },
        stepDescription: { type: 'String', value: 'Get Hospital' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Hospital Folder Mapping.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Code' },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Facility_Code',
                        },
                    },
                    variableValue: { type: 'String', value: 'Code' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hospital' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Folder Name',
                    },
                },
            ],
        },
        fieldValue: {
            type: 'Expression',
            value: {
                code: 'string facility_code = GetVariableValue("Facility_Code");\r\n\r\nreturn Int32.Parse(facility_code).ToString("0000");',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 5',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 77.953125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -38.9765625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get Hospital',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1406, y: 66 },
        angle: 0,
        activityName: 'SimpleDelayActivity',
        group: 'engineActivities',
        icon: { path: 'generic.svg#Dark', color: '#99ca3c' },
        id: '2799d690-4955-48a0-b3c0-efcd1d513d26',
        z: 2000038,
        name: { type: 'String', value: 'Timer Trigger 1' },
        stepDescription: { type: 'String', value: '' },
        timers: {
            type: 'Timers',
            value: [
                {
                    initial: {
                        type: 'Period',
                        value: {
                            months: 0,
                            weeks: 0,
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 10,
                        },
                    },
                    calendar: '',
                    recurring: '',
                    output: {
                        type: 'Output',
                        value: {
                            name: 'Done',
                            referenceKey:
                                'f620de50-a93d-436f-b346-51065ada1678',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Timer Trigger 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/generic.svg#Dark',
            },
            svg: { color: '#99ca3c', fill: '#fff' },
            rect: { fill: '#99ca3c' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1784, y: 346 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'e92de2a4-edde-45d2-8e3f-1f84b4024c4e',
        name: { type: 'String', value: 'Copy or Move Document 6' },
        stepDescription: {
            type: 'String',
            value: 'Move to Exceptions',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'New_Doc' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Exceptions/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        z: 2000039,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 6',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.25,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move to Exceptions',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 445, y: 355 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: 'aedc67c4-e36e-41ba-8dff-1fa6fbc045a6',
        z: 2000040,
        name: { type: 'String', value: 'Update Variable Value 2' },
        stepDescription: { type: 'String', value: 'Format SSN' },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number_Formatted',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\nstring ssn = GetVariableValue($"Params.Documents.Document.{metadata_group_node}.SocialSecurityNumber");\r\n\r\nreturn String.Format("{0:000-00-0000}", Int32.Parse(ssn));',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 76.484375,
                height: 26,
                rx: 3,
                ry: 3,
                x: -38.2421875,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Format SSN',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1203, y: 71 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: 'b32cae9c-4ab4-4b23-860e-bbd809d49400',
        z: 2000041,
        name: { type: 'String', value: 'Update Variable Value 3' },
        stepDescription: {
            type: 'String',
            value: 'Remove SSN Formatting',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string ssn = GetVariableValue("Social_Security_Number");\r\n\r\nstring result = ssn.Replace("-", string.Empty);\r\n\r\nreturn result;',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 142.046875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -71.0234375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Remove SSN Formatting',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 809, y: 350 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: 'd7df4833-475f-4c7c-9d5d-41666971668c',
        name: { type: 'String', value: 'Update Variable From CSV 6' },
        stepDescription: {
            type: 'String',
            value: 'Try Legacy Employee Data Again',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/Employee Information_Legacy.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Social Security Number' },
        fieldValue: {
            type: 'Expression',
            value: {
                code: 'string metadata_group_node = GetVariableValue("MetadataGroupNode");\r\n\r\nreturn GetVariableValue($"Params.Documents.Document.{metadata_group_node}.SocialSecurityNumber");',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Last_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Last Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'First_Name' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'First Name',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EMP_ID' },
                    },
                    variableValue: { type: 'String', value: 'EMP ID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Social_Security_Number',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Social Security Number',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Department_ID',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Department ID',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Status' },
                    },
                    variableValue: { type: 'String', value: 'Status' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'PSID' },
                    },
                    variableValue: { type: 'String', value: 'PSID' },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Hire_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Hire Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Term_Date' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Term Date',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Business_Unit',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Business Unit',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Facility_Code',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Facility Code',
                    },
                },
            ],
        },
        z: 2000046,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 6',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Try Legacy Employee\nData Again',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 2248, y: 69 },
        angle: 0,
        activityName: 'RenameDocumentActivity',
        group: 'engineActivities',
        icon: { path: 'generic.svg#Dark', color: '#f7b618' },
        id: '4a759df3-0956-4bcf-8322-18f7ecff91f1',
        z: 2000047,
        name: { type: 'String', value: 'Rename Document 1' },
        stepDescription: { type: 'String', value: '' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'New_Doc' },
                },
            ],
        },
        newDocumentName: {
            type: 'Expression',
            value: {
                code: 'string last_name = GetVariableValue("Last_Name");\r\nstring first_name = GetVariableValue("First_Name");\r\nstring document_name = GetVariableValue("Document_Name");\r\n\r\nreturn String.Format("{0} {1} - {2}.pdf", last_name, first_name, document_name);\r\n',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Rename\nDocument 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/generic.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: '787e7e96-ced0-453a-803e-85b995060f6e',
            port: 'e',
        },
        target: {
            id: 'b05a0d73-3843-4602-9149-f9b599902f56',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'e2e3c1fe-9633-49a3-ae2c-c97d43604468',
        z: 3000002,
        name: { type: 'String', value: 'Link 13' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '787e7e96-ced0-453a-803e-85b995060f6e',
            port: 'ws',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(6)',
        },
        target: {
            id: '780e4b87-3ce9-45ba-9ca1-c7d9d25064cf',
            port: 'nw',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(1)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'cb09ab1b-7f02-49fa-bd40-0d3f51a7dbc0',
        z: 3000003,
        name: { type: 'String', value: 'Link 14' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'df2e5738-d7e9-434b-8620-f918e221b74b',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'e92de2a4-edde-45d2-8e3f-1f84b4024c4e',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '9f560df5-addd-4571-abc0-eca4e613f397',
        z: 3000005,
        name: { type: 'String', value: 'Link 16' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b05a0d73-3843-4602-9149-f9b599902f56',
            port: 'ws',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(6)',
        },
        target: {
            id: '780e4b87-3ce9-45ba-9ca1-c7d9d25064cf',
            port: 'ne',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(3)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '1cefd908-eaca-4a79-8b3a-6c0fa7c2b230',
        z: 3000009,
        name: { type: 'String', value: 'Link 19' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '9761707c-c811-4853-bc70-23b0d85cea81',
            port: 'e',
        },
        target: {
            id: 'c8ae7bc2-04c8-4593-ac6e-10213b34dda4',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(4)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '74003642-b7ef-48fd-8ce6-976e5d62ec2f',
        z: 3000033,
        name: { type: 'String', value: 'Link 18' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '61b91aea-ca79-4bdf-8892-0adf5d94e972',
            port: 'e',
        },
        target: {
            id: '787e7e96-ced0-453a-803e-85b995060f6e',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'fdd30841-736b-477e-a6c5-a90a67eeea63',
        z: 3000035,
        name: { type: 'String', value: 'Link 1' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1aed71fb-fd2e-4f97-802d-12e1de8826da',
            port: 'e',
        },
        target: {
            id: 'b32cae9c-4ab4-4b23-860e-bbd809d49400',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f5f693fe-2019-43c3-a81c-dc39eb279045',
        z: 3000039,
        name: { type: 'String', value: 'Link 12' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1aed71fb-fd2e-4f97-802d-12e1de8826da',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'aeb30c1b-3fb6-4f00-8852-45c2c2b28a8a',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '19e42d7b-04de-4c5a-9343-89d94c844fa7',
        z: 3000041,
        name: { type: 'String', value: 'Link 22' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '8eac4cc6-8118-4d59-8409-974b0491a6c6',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '7ba38249-1606-4af3-ae57-39d34cb79d02',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '7899528c-1079-4839-8d40-65e7a93214d7',
        z: 3000043,
        name: { type: 'String', value: 'Link 11' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '7ba38249-1606-4af3-ae57-39d34cb79d02',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'e92de2a4-edde-45d2-8e3f-1f84b4024c4e',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ab633422-c3b6-4e79-93de-12f4e262df06',
        z: 3000046,
        name: { type: 'String', value: 'Link 17' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '7ba38249-1606-4af3-ae57-39d34cb79d02',
            port: 'e',
        },
        target: {
            id: 'df2e5738-d7e9-434b-8620-f918e221b74b',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'e6c0d8c0-b4c5-4144-be52-7b021dfd376f',
        z: 3000048,
        name: { type: 'String', value: 'Link 15' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'df2e5738-d7e9-434b-8620-f918e221b74b',
            port: 'e',
        },
        target: {
            id: '4a759df3-0956-4bcf-8322-18f7ecff91f1',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '7ba51a7c-9e36-4f68-aff2-2fe2091d17d3',
        z: 3000049,
        name: { type: 'String', value: 'Link 20' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '9761707c-c811-4853-bc70-23b0d85cea81',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'e92de2a4-edde-45d2-8e3f-1f84b4024c4e',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f06c1e60-147d-47e5-974c-4efb0eb8df63',
        z: 3000050,
        name: { type: 'String', value: 'Link 21' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2799d690-4955-48a0-b3c0-efcd1d513d26',
            port: 'e',
        },
        target: {
            id: '8eac4cc6-8118-4d59-8409-974b0491a6c6',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '0cd2a3bf-812f-46e0-808c-9e6a981f1ad6',
        z: 3000052,
        name: { type: 'String', value: 'Link 23' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: 'f620de50-a93d-436f-b346-51065ada1678',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'aedc67c4-e36e-41ba-8dff-1fa6fbc045a6',
            port: 'e',
        },
        target: {
            id: '2adfc731-f6f8-4b40-9fff-ca182db0ca73',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '805137d2-a776-4a21-9ad0-cda0852690f4',
        z: 3000053,
        name: { type: 'String', value: 'Link 24' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b32cae9c-4ab4-4b23-860e-bbd809d49400',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '2799d690-4955-48a0-b3c0-efcd1d513d26',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '0738376e-4d48-4c8a-9ad0-fc0ec3d65d1d',
        z: 3000055,
        name: { type: 'String', value: 'Link 25' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2adfc731-f6f8-4b40-9fff-ca182db0ca73',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'd7df4833-475f-4c7c-9d5d-41666971668c',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '10ead13a-ae25-440b-948b-c6da97a3677a',
        z: 3000067,
        name: { type: 'String', value: 'Link 7' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'd7df4833-475f-4c7c-9d5d-41666971668c',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '7ac5ff4e-afbf-4ddc-9cae-6ce7839e1748',
            port: 'se',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(12)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f7a68ac7-1f64-458a-bbde-6af999236658',
        z: 3000068,
        name: { type: 'String', value: 'Link 29' },
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        vertices: [],
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'fbdd4558-343b-4a76-a467-70288d55d4a3',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        target: {
            id: '780e4b87-3ce9-45ba-9ca1-c7d9d25064cf',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'd23a13f8-bfa2-456a-be65-09a9415dbe9c',
        z: 3000069,
        name: { type: 'String', value: 'Link 6' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '4a759df3-0956-4bcf-8322-18f7ecff91f1',
            port: 'e',
        },
        target: {
            id: '9761707c-c811-4853-bc70-23b0d85cea81',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'e1cde459-dbb3-412e-9067-7fcafe7756ca',
        z: 3000070,
        name: { type: 'String', value: 'Link 26' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
];

const caasRouting = [
    {
        size: { width: 1186, height: 473 },
        content: '',
        type: 'springcm.Group',
        position: { x: -31, y: -197 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'e264227e-04fa-4352-8e3f-217271801f1e',
        z: 1,
        name: { type: 'String', value: 'Initialization' },
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Initialization',
            },
        },
    },
    {
        size: { width: 1346, height: 284 },
        content: '',
        type: 'springcm.Group',
        position: { x: 1177, y: -6 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'd071fb9e-6796-4ab7-929d-4e8216a5fea3',
        name: { type: 'String', value: 'Move Document' },
        z: 2,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Move Document',
            },
        },
    },
    {
        size: { width: 728, height: 490 },
        content: '',
        type: 'springcm.Group',
        position: { x: 1177, y: 309 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: '0f026c7f-c924-432b-aded-231868760b50',
        name: { type: 'String', value: 'Move Existing Folder' },
        z: 3,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'Move Existing Folder',
            },
        },
    },
    {
        size: { width: 1346, height: 284 },
        content: '',
        type: 'springcm.Group',
        position: { x: 1177, y: -328 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: '6f5ab385-aee3-48a1-90c3-27e8afb8b041',
        name: { type: 'String', value: 'CharterCARE I9s' },
        z: 4,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#000000',
                'ref-x': '50%',
                text: 'CharterCARE I9s',
            },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: '75f698bd-c479-441c-b231-07f387e9540b',
            port: 'e',
        },
        target: {
            id: '1a6db4f4-174d-48a9-a44b-084526164383',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'afe92541-06be-4864-9081-74bec8a71fd2',
        z: 1000001,
        name: { type: 'String', value: 'Link 1' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: -161, y: 66 },
        angle: 0,
        activityName: 'StartActivity',
        group: 'hidden',
        icon: { path: 'start.svg#Dark', color: 'white' },
        z: 2000001,
        id: '75f698bd-c479-441c-b231-07f387e9540b',
        name: { type: 'String', value: 'Start' },
        definedVariables: {
            type: 'Variable',
            value: [
                {
                    type: 'Xml',
                    value: {
                        name: 'Params',
                        displayName: 'Params',
                        description: '',
                        displayType: 'Document',
                        schema: {
                            nodes: [
                                {
                                    name: 'Documents',
                                    nodes: [
                                        {
                                            name: 'Document',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '765c4a80-facc-4944-9714-2d434f1201c2',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd0c8a489-ccf1-4b0b-a2d3-d9c0a4c511a9',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'a10761f2-ac36-4d20-8f7a-f41577867bb4',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '4dc09af8-930f-4fd2-92b6-fe3ccd4edea9',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'b475a127-d445-4abd-bd09-598220275d6e',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'e11b6f88-16d1-4053-bf76-156dbfb9a399',
                                                },
                                                {
                                                    name: 'Metadata',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    nodes: [
                                                        {
                                                            name: 'Group',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '25d399e5-15d4-4d60-8c2b-b3a919a37b13',
                                                        },
                                                        {
                                                            name: 'Field',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '9c7b6071-d43f-4f92-86c0-1ae19a836277',
                                                        },
                                                        {
                                                            name: 'Value',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '3a4b8018-ab7a-4a4a-9eca-d61f4da2d94e',
                                                        },
                                                        {
                                                            name: 'SetName',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'f0a5386e-0f54-4e89-87ba-6e367ce29c0e',
                                                        },
                                                        {
                                                            name: 'SetNumber',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '67b744e7-0aaa-47e6-babe-6eb225d3a9eb',
                                                        },
                                                    ],
                                                    guid: '32bf5e36-6a10-409d-bbca-87e8cc47e34a',
                                                },
                                                {
                                                    name: 'MetadataGroup',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    nodes: [
                                                        {
                                                            name: 'Set',
                                                            nodes: [
                                                                {
                                                                    name: 'Field',
                                                                    nodes: [
                                                                        {
                                                                            name: 'Group',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: 'b73bf104-707b-4a72-9cc6-2234f3103580',
                                                                        },
                                                                        {
                                                                            name: 'Field',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '742e348c-a208-4784-8e4c-cd73080552a6',
                                                                        },
                                                                        {
                                                                            name: 'Value',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '36c2a339-6ef0-4d9f-ad95-f02c52e81ea7',
                                                                        },
                                                                        {
                                                                            name: 'SetName',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '5c5d8431-5851-45bf-81d9-a7449dda25b0',
                                                                        },
                                                                        {
                                                                            name: 'SetNumber',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'element',
                                                                            guid: '8ee4d822-d083-4d29-9c8f-6c0b08d422e3',
                                                                        },
                                                                    ],
                                                                    guid: '6d3a506f-5b93-4fc5-9e72-2cf769ff6d49',
                                                                },
                                                                {
                                                                    name: 'Name',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: 'b15c26bf-9647-48a9-a6fa-4ad06c9c7606',
                                                                },
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '69227cf9-7dab-43af-a52a-a1a12665a668',
                                                                },
                                                            ],
                                                            guid: '099c6169-5aa0-4501-b9da-0ffd58064126',
                                                        },
                                                        {
                                                            name: 'Name',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'd2d0da4e-5138-4254-b33c-f5ea0a850df9',
                                                        },
                                                    ],
                                                    guid: 'c4d42542-b96c-4533-b8cf-a7af8c1bb866',
                                                },
                                                {
                                                    name: 'ParentFolderName',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd11085bd-098e-409a-a3e1-a59390fe98a9',
                                                },
                                                {
                                                    name: 'UpdatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd64d960e-7d08-4f99-bd30-7d58697cad13',
                                                },
                                                {
                                                    name: 'UpdatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'bd3d63ed-4f15-4814-aa40-295239312460',
                                                },
                                                {
                                                    name: 'IsFormDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'f5307b51-8147-47e5-983e-14a6cb019825',
                                                },
                                                {
                                                    name: 'IsTermDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'a1e339d3-99ad-4033-baed-ac6aa7c88a8a',
                                                },
                                                {
                                                    name: 'EditDocumentURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '476e2914-8cc9-4729-8e67-f50b997cf9d8',
                                                },
                                                {
                                                    name: 'IsCheckedOut',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '9a914f9d-6db9-4be3-8a4e-0f59987f3380',
                                                },
                                                {
                                                    name: 'MIMEType',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'c2ea0892-7e9d-41b7-b603-f25edff4f132',
                                                },
                                                {
                                                    name: 'PageCount',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'c07bbd53-c9f3-4387-8575-1c7fb7e8874d',
                                                },
                                                {
                                                    name: 'EmployeeFile',
                                                    nodes: [
                                                        {
                                                            name: 'LastName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'bfe17250-9ac9-44ec-bcc2-b0ff98128968',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'dbf07353-1a2d-4f09-82a0-37696e084f8d',
                                                                },
                                                            ],
                                                            guid: '7d0211cf-f671-47d4-93fe-e6e76c560aa9',
                                                        },
                                                        {
                                                            name: 'FirstName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '577a358a-de1a-485a-8ac2-cb25a8f1c891',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'd127b158-6870-47e7-9cdd-ab96f8e91e00',
                                                                },
                                                            ],
                                                            guid: '67175d21-6978-4e29-80d8-e1ac3c265296',
                                                        },
                                                        {
                                                            name: 'EMPID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '4774c670-35cb-45c9-b949-2eb9f73a4f06',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'b6bbd6b6-3626-43f1-90b3-65c4c98e249d',
                                                                },
                                                            ],
                                                            guid: 'ceaf5532-8740-4824-b8cc-853da0b75633',
                                                        },
                                                        {
                                                            name: 'SocialSecurityNumber',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '0c2f0eb9-d8bb-4eaf-8813-d71efebce20f',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e22c3aca-0a4b-44fa-bee5-d1104600ce93',
                                                                },
                                                            ],
                                                            guid: 'b4226fd4-457a-4786-b49b-b3645bb0838f',
                                                        },
                                                        {
                                                            name: 'DepartmentID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e030eef2-47ab-4f38-b93e-2dd3c279aa5b',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e7349aa9-3c8b-4b8d-b8d1-e30cf624d696',
                                                                },
                                                            ],
                                                            guid: 'b0e2f482-b7f5-443c-b556-0792e17fad2e',
                                                        },
                                                        {
                                                            name: 'Status',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e3fa08f0-e490-415c-bd6e-48cd729ebc5d',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '76a591b1-39a6-449d-8b8d-d3f00d6680d6',
                                                                },
                                                            ],
                                                            guid: '8ce732c9-5cf8-46b2-b229-f7ade9f7b726',
                                                        },
                                                        {
                                                            name: 'PSID',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '13656914-f129-4a01-a55b-601a0801566f',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'c44e12ce-27fa-4bd5-bca1-956930b8bdc6',
                                                                },
                                                            ],
                                                            guid: '4ccf93c0-4e8c-400b-ad04-fcce0d86edde',
                                                        },
                                                        {
                                                            name: 'HireDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '597e6ae5-4889-4c35-aeeb-19de09bd2def',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '27b05abb-33c9-4589-bb10-71be9fba0613',
                                                                },
                                                            ],
                                                            guid: '34720eb3-d96f-4212-b9bc-946022ed47b9',
                                                        },
                                                        {
                                                            name: 'TermDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'ab377424-e7df-4b5e-912f-41fdbff40fac',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'e0f2bd37-eaca-474c-8f4e-b1c38c003cbf',
                                                                },
                                                            ],
                                                            guid: '5646c526-5e91-4a43-a915-82bd4608545c',
                                                        },
                                                        {
                                                            name: 'FacilityCode',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '5e0b1cb6-6dcb-4c93-9971-27739f843bf1',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '6d080c1a-6193-4786-a9a4-05d2ba04d36a',
                                                                },
                                                            ],
                                                            guid: '11cc0392-1373-4e7b-b692-c904dfa958ac',
                                                        },
                                                        {
                                                            name: 'Hospital',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'f449eb8c-de66-4a22-b124-ee82ab2b2aaa',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'dd1270bf-fb23-4f43-bc1e-ef5035d268c1',
                                                                },
                                                            ],
                                                            guid: 'fb9512dc-ddfa-4594-b58c-a2bbd87bd6f2',
                                                        },
                                                        {
                                                            name: 'DocumentName',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'f8f4010e-7f0b-4794-af8f-2b73d2cd3ab1',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '2d36cecb-3457-4642-84b7-0f30dafb684f',
                                                                },
                                                            ],
                                                            guid: '3ca275be-cf49-45c2-809d-8976502309e6',
                                                        },
                                                        {
                                                            name: 'Category',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '7122cccd-9186-45f8-a7a8-47da6c0d36dd',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '12a2c68d-27e0-4aa5-92e5-62b1835ec488',
                                                                },
                                                            ],
                                                            guid: '6c8b02ad-f103-4a05-a8fc-78bc47ccb54a',
                                                        },
                                                        {
                                                            name: 'Subcategory',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '0c229fed-d5b4-4e3b-a338-17a11b5d57e6',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '9f370a98-dc98-4211-ae4d-5db0e644e501',
                                                                },
                                                            ],
                                                            guid: '41886ded-56d0-4d7e-8fe1-fea24b4dee5d',
                                                        },
                                                        {
                                                            name: 'DocumentDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '8ce89219-8c60-4f01-b0c0-7c825219b243',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '91411cf4-dcff-49a6-818f-ab5fd5f98395',
                                                                },
                                                            ],
                                                            guid: '9b581ed6-2266-4fdb-b517-4f088ad79eb8',
                                                        },
                                                        {
                                                            name: 'DocumentDate_FormattedDate',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'ac7f7566-13e3-4209-b163-06b5c278fba2',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'b9418b64-60f8-47d6-aee8-f54304075c92',
                                                                },
                                                            ],
                                                            guid: 'a6d42a5e-eb11-4631-ac98-b8e2d9e6b1a6',
                                                        },
                                                        {
                                                            name: 'DocumentDate_FormattedTime',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '94d5559c-039a-44d2-b08c-2d0f5ed0fece',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '94af7cd8-9a8a-4b37-84f6-efb3a7161d51',
                                                                },
                                                            ],
                                                            guid: '8231950a-a7f0-48ee-ae85-577d93dc0493',
                                                        },
                                                    ],
                                                    guid: '1ba59840-fcdc-42da-af2f-587726c5e786',
                                                },
                                            ],
                                            guid: '23d3deae-1e6d-4088-9359-b0b684a91f94',
                                        },
                                    ],
                                    guid: '78ee1cd3-5afd-4710-907d-285e65b3e098',
                                },
                            ],
                        },
                        sortable: false,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: true,
                        isLocal: false,
                    },
                },
                {
                    type: 'User',
                    value: {
                        name: 'SubmittedBy',
                        displayName: 'Submitted By',
                        description: '',
                        displayType: 'Actor',
                        schema: {
                            name: 'UserAccount',
                            nodes: [
                                {
                                    name: 'Name',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'dcad4c85-320a-45e7-8fdc-3651b0c9d952',
                                },
                                {
                                    name: 'CreatedDate',
                                    dataType: 'dateTime',
                                    type: 'element',
                                    guid: 'eecc379e-8338-4ff9-8f6e-5a12eeeaf383',
                                },
                                {
                                    name: 'Email',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '1b146aef-c3f4-4936-a4af-81e705094270',
                                },
                                {
                                    name: 'FirstName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'a2287c61-ed0c-45fb-87ab-aba0cd6ff013',
                                },
                                {
                                    name: 'LastName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '8963b235-b56f-405f-9303-42cb1beb96d7',
                                },
                                {
                                    name: 'ManagerUid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'da607db4-f9c0-44c9-bd07-ef36ebc5c902',
                                },
                                {
                                    name: 'Role',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '422ff7a6-4d85-4271-9634-1b24cbd879a7',
                                },
                                {
                                    name: 'Uid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'ebe85df8-4557-4a3f-9015-8dd0a14d4de8',
                                },
                                {
                                    name: 'Language',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '6d39db04-a5b5-4bf4-8a74-213144b35899',
                                },
                                {
                                    name: 'Region',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'c3d83c7b-60de-470f-b16b-2d5f6bb206f8',
                                },
                            ],
                        },
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Comments',
                        displayName: 'Comments',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: true,
                        deletable: false,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Date',
                        displayName: 'Current Date',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Time',
                        displayName: 'Current Time',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Link',
                        displayName: 'Current Step Link',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'LastAbortEmail',
                        displayName: 'Last Abort Email',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Destination_Folder_Name',
                        displayName: 'Destination_Folder_Name',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Number',
                    value: {
                        name: 'Search_Result_Count',
                        displayName: 'Search_Result_Count',
                        description: '',
                        displayType: 'Number',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Destination_Folder_Path',
                        displayName: 'Destination_Folder_Path',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Existing_Folder_Path',
                        displayName: 'Existing_Folder_Path',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Search_Folder_Id',
                        displayName: 'Search_Folder_Id',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Destination_Folder_Path_Full',
                        displayName: 'Destination_Folder_Path_Full',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Department_Id',
                        displayName: 'Department_Id',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Destination_Folder_Path_Full_Category_Subcategory',
                        displayName:
                            'Destination_Folder_Path_Full_Category_Subcategory',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Category',
                        displayName: 'Category',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Subcategory',
                        displayName: 'Subcategory',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Category_Folder',
                        displayName: 'Category_Folder',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '48f45e97-88ab-4972-afb5-5853da2d29d1',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '45e3719b-ed38-4190-9bd0-b98f50a26d0a',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'ee92281e-ee42-40c7-ad12-45fb05ec2d4b',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '8119d6f0-b927-455e-9a46-9e373659fe93',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '7735637a-0893-4e14-94a9-658091b36544',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '03498ab0-26b3-464a-abe8-5343fda2ebd9',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'b55ad4a9-0b3a-44aa-83af-10a08b2daab9',
                                                },
                                            ],
                                            guid: '9b975bd8-9b99-4ab0-87ad-e9afa0e0ec20',
                                        },
                                    ],
                                    guid: 'f04b8cfe-581c-4b7c-ac44-82494d0551ae',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Subcategory_Folder',
                        displayName: 'Subcategory_Folder',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'f86fd746-a9c6-4063-906f-535064184d4f',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '71fb57bc-2888-44aa-8e98-09f8a295c80b',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'f83d8f6b-5204-42cc-b168-13f41232dda8',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '96cc58db-ca92-45f4-a0ea-fce445a50056',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd3ba8d58-86b9-4c84-bde2-0e959d90ada3',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'b399667a-0a8c-4d6a-989c-8120b3aef4ac',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '52255f9e-ffae-4176-be6e-2fcdfbe66a0e',
                                                },
                                            ],
                                            guid: '9e0c14a2-6103-46a7-86dd-7350377eb563',
                                        },
                                    ],
                                    guid: '5ab0adbd-0d88-4d64-8e86-70c0f0de1899',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Search_Results',
                        displayName: 'Search_Results',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '2d4039e8-c18c-4132-98a7-e9e835a6c365',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'f23a0784-75a6-4c47-896f-91ec86ccafa6',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'a56a5e46-8a74-4a7d-819c-8bb4be91207c',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd50ed155-2742-4ab6-aa6b-57d866fe4200',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '19bd6054-b577-4555-b8f3-8af23030591d',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '4559e44e-3a81-4262-a63f-3fc0a083f9ce',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'b0b73769-e9f6-46cb-910c-8db3671a52f6',
                                                },
                                            ],
                                            guid: 'ab59b65f-c206-4852-953a-bc95b291bae6',
                                        },
                                    ],
                                    guid: '5bed0eec-818c-4ba4-bb3b-4e95dc720b1c',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'Employee_Folder',
                        displayName: 'Employee_Folder',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '9dc55ced-6f80-4edc-8b16-f2647d9af9f4',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '0586902e-d353-43e2-840d-f1218d5812b6',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '021d41e9-d0d6-435a-837c-61490ad18a49',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '3f18f149-84ac-4be4-8496-2b413d87c2b4',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'e02863b6-f1dd-4d20-bc47-e96afa041f2c',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '96501b15-6d1b-456e-9ce9-ddd7d007e1ad',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '6bd5da09-23ac-42e5-8137-54ced0ae9b66',
                                                },
                                            ],
                                            guid: '66b88371-2d7c-4144-a3f2-bfe5461d272c',
                                        },
                                    ],
                                    guid: '9b19792f-c553-48a0-8116-c14b05d90796',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Person_Number',
                        displayName: 'Person_Number',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
            ],
        },
        workflowName: { type: 'String', value: 'CaaS__ROUTING' },
        sendNotification: { type: 'Bool', value: false },
        trackActivity: { type: 'Bool', value: true },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Start',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/start.svg#Dark',
            },
            svg: { color: 'white' },
            circle: { fill: '#A0CC23' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 298, y: 66 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '28ddb969-04d0-4fd6-a57f-322319ee3d71',
        z: 2000004,
        name: { type: 'String', value: 'Update Variable Value 1' },
        stepDescription: {
            type: 'String',
            value: 'Initial Variables',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Name',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string last_name = GetVariableValue("Params.Documents.Document.EmployeeFile.LastName");\r\nstring first_name = GetVariableValue("Params.Documents.Document.EmployeeFile.FirstName");\r\nstring employee_id = GetVariableValue("Params.Documents.Document.EmployeeFile.EMPID");\r\n\r\nreturn String.Format("{0}, {1} - {2}", last_name, first_name, employee_id);',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Path',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string business_unit = GetVariableValue("Params.Documents.Document.EmployeeFile.BusinessUnit");\r\nstring hospital = GetVariableValue("Params.Documents.Document.EmployeeFile.Hospital");\r\nstring department_id = GetVariableValue("Params.Documents.Document.EmployeeFile.DepartmentID");\r\nstring status = GetVariableValue("Params.Documents.Document.EmployeeFile.Status");\r\nstring document_name = GetVariableValue("Params.Documents.Document.EmployeeFile.DocumentName");\r\nstring result;\r\n\r\nif (status == "T") {\r\n    status = "Terminated";\r\n} else {\r\n    status = "Active";\r\n}\r\n\r\nif (department_id == "8650" && hospital != "CharterCARE") {\r\n    result = $"Prospect Medical/Oracle HR/{business_unit}/Human Resources/{hospital}/Department 8650/{status}/";\r\n} else if (hospital == "CharterCARE" && document_name == "I9") {\r\n    result = $"Prospect Medical/Oracle HR/{business_unit}/Human Resources/{hospital}/{document_name}/{status}/";\r\n} else {\r\n    result = $"Prospect Medical/Oracle HR/{business_unit}/Human Resources/{hospital}/{status}/";\r\n}\r\n\r\nreturn result;\r\n',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Path_Full',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return "/" + GetVariableValue("Destination_Folder_Path") + GetVariableValue("Destination_Folder_Name") + "/";',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 91.8046875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -45.90234375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Initial Variables',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 525, y: 96 },
        angle: 0,
        activityName: 'SearchActivity',
        group: 'engineActivities',
        icon: { path: 'search.svg#Dark', color: '#607D8B' },
        id: '2df9c14b-9044-4b4d-9e43-95a60d910c22',
        z: 2000005,
        name: { type: 'String', value: 'Search 1' },
        stepDescription: {
            type: 'String',
            value: 'Search for existing folder',
        },
        withAllWords: { type: 'String', value: '' },
        withAnyWords: { type: 'String', value: '' },
        withoutWords: { type: 'String', value: '' },
        withPhrase: { type: 'String', value: '' },
        title: {
            type: 'String',
            value: '"<%#Variable.Destination_Folder_Name%>"',
        },
        searchContent: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attribute: { type: 'String', value: '' },
        searchType: { type: 'String', value: 'Folders' },
        folders: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Prospect Medical/Oracle HR/',
                },
            ],
        },
        includeSubFolders: { type: 'Bool', value: true },
        outputFolders: {
            type: 'Variable',
            value: { type: 'Xml', value: 'Search_Results' },
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Search 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 144.12890625,
                height: 26,
                rx: 3,
                ry: 3,
                x: -72.064453125,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Search for existing folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/search.svg#Dark',
            },
            svg: { color: '#607D8B', fill: '#fff' },
            rect: { fill: '#607D8B' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 767, y: 90 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '3099f885-8ce7-4988-8721-8e167e4a2d58',
        z: 2000006,
        name: { type: 'String', value: 'Update Variable Value 2' },
        stepDescription: {
            type: 'String',
            value: 'Get result count',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'Number',
                            value: 'Search_Result_Count',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return GetVariableValue("^Search 1FolderIds").Length;',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Search_Folder_Id',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return GetVariableValue("^Search 1FolderIds");',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 97.0390625,
                height: 26,
                rx: 3,
                ry: 3,
                x: -48.51953125,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get result count',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1234, y: 67 },
        angle: 0,
        activityName: 'CreateFolderActivity',
        group: 'engineActivities',
        icon: { path: 'create_folder.svg#Dark', color: '#e98824' },
        id: 'a2aed0da-f01f-4fba-960e-093a2c085ed1',
        z: 2000009,
        name: { type: 'String', value: 'Create Folder 1' },
        stepDescription: {
            type: 'String',
            value: 'Create new folder path',
        },
        newFolder: {
            type: 'String',
            value: '<%#Variable.Destination_Folder_Name%>',
        },
        description: { type: 'String', value: '' },
        parentFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Destination_Folder_Path',
                    },
                },
            ],
        },
        returnExisting: { type: 'Bool', value: true },
        inheritLimitedAttributeGroups: { type: 'Bool', value: false },
        outputFolders: {
            type: 'Variable',
            value: { type: 'Xml', value: 'Employee_Folder' },
        },
        limitedAttributeGroups: { type: 'MetadataGroup' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Create Folder 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 134.8125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -67.40625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Create new folder path',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/create_folder.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 2132, y: 65 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'b5a10aa2-0dba-4de6-99de-fe402f5908e4',
        z: 2000010,
        name: { type: 'String', value: 'Copy or Move Document 1' },
        stepDescription: {
            type: 'String',
            value: 'Move document to destination folder',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'Xml',
                        value: 'Subcategory_Folder',
                    },
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move document to\ndestination folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: 2413, y: 69 },
        angle: 0,
        activityName: 'EndActivity',
        group: 'engineActivities',
        icon: { path: 'finish.svg#Dark', color: 'white' },
        id: 'ddb8f874-7a8c-42b6-88bc-dc5f6622d73a',
        z: 2000011,
        name: { type: 'String', value: 'Finish 1' },
        stepDescription: { type: 'String', value: '' },
        attrs: {
            '.circle-container': {
                fill: '#29bdbe',
                class: 'circle-container theme_primary_fill',
            },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Finish 1',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/finish.svg#Dark',
            },
            svg: { color: 'white' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1747, y: 371 },
        angle: 0,
        activityName: 'CopyFolderActivity',
        group: 'engineActivities',
        icon: { path: 'copy_folder.svg#Dark', color: '#d13393' },
        id: '02149c6b-6446-4047-b608-89cc983c93c7',
        z: 2000014,
        name: { type: 'String', value: 'Copy or Move Folder 1' },
        stepDescription: {
            type: 'String',
            value: 'Move the folder to the destination path',
        },
        action: { type: 'String', value: 'move' },
        sourceFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Existing_Folder_Path',
                    },
                },
            ],
        },
        parentFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Destination_Folder_Path',
                    },
                },
            ],
        },
        newFolderName: {
            type: 'String',
            value: '<%#Variable.Destination_Folder_Name%>',
        },
        outputFolders: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nFolder 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move the folder to the\ndestination path',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_folder.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 93, height: 93 },
        type: 'springcm.Diamond',
        content: '',
        position: { x: 1486, y: 375 },
        angle: 0,
        activityName: 'RuleActivity',
        group: 'engineActivities',
        icon: { path: 'rule.svg#Dark', color: '#29bdbe' },
        id: 'b92920c6-9643-44de-bda9-66c24d14d091',
        z: 2000015,
        name: { type: 'String', value: 'Rule 2' },
        stepDescription: {
            type: 'String',
            value: 'Is the current folder in the correct destination?',
        },
        condition: {
            type: 'Condition',
            value: {
                conditions: [
                    {
                        leftOperand: {
                            type: 'Variable',
                            value: {
                                type: 'String',
                                value: 'Existing_Folder_Path',
                            },
                        },
                        comparisonOperator: 'equals',
                        rightOperand: {
                            type: 'Variable',
                            value: {
                                type: 'String',
                                value: 'Destination_Folder_Path_Full',
                            },
                        },
                        guid: '1642eb1b-bb03-4bb2-85c3-b670b0c7107a',
                    },
                ],
                logicalOperator: '',
                guid: '9129edbe-b32e-4f1a-9586-ecf0f4281d9e',
            },
        },
        attrs: {
            '.step-container': { 'data-error-state': false },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Rule 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Is the current folder in the\ncorrect destination?',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href': '/atlassupport/scripts/jointjs/svg/rule.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 298, y: -171 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
        z: 2000016,
        name: { type: 'String', value: 'Copy or Move Document 2' },
        stepDescription: {
            type: 'String',
            value: 'Move to Exceptions',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Exceptions/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.26171875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.630859375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move to Exceptions',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1232, y: 629 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'da82db06-ce2f-4e9d-9a37-1ad4da0cfba0',
        name: { type: 'String', value: 'Copy or Move Document 3' },
        stepDescription: {
            type: 'String',
            value: 'Move to Exceptions',
        },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/Exceptions/',
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        z: 2000017,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 115.26171875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -57.630859375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move to Exceptions',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1230, y: 371 },
        angle: 0,
        activityName: 'GetPathActivity',
        group: 'engineActivities',
        icon: { path: 'get_path.svg#Dark', color: '#3366cc' },
        id: '4ba19c47-05de-429b-abb4-bd65631b4bc8',
        z: 2000020,
        name: { type: 'String', value: 'Get Path 1' },
        stepDescription: {
            type: 'String',
            value: 'Get existing folder path',
        },
        entityType: { type: 'String', value: 'folder' },
        outputVariable: {
            type: 'Variable',
            value: { type: 'String', value: 'Existing_Folder_Path' },
        },
        folder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Search_Folder_Id',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Get Path 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 136.08203125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -68.041015625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get existing folder path',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/get_path.svg#Dark',
            },
            svg: { color: '#3366cc', fill: '#fff' },
            rect: { fill: '#3366cc' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1485, y: 67 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
        z: 2000021,
        name: { type: 'String', value: 'Update Variable Value 3' },
        stepDescription: {
            type: 'String',
            value: 'Get path with category and subcategory',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Path_Full_Category_Subcategory',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string category = GetVariableValue("Params.Documents.Document.EmployeeFile.Category");\r\nstring subcategory = GetVariableValue("Params.Documents.Document.EmployeeFile.Subcategory");\r\n\r\nreturn GetVariableValue("Destination_Folder_Path_Full") + category + "/" + subcategory + "/";',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Category' },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return GetVariableValue("Params.Documents.Document.EmployeeFile.Category");',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Subcategory',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return GetVariableValue("Params.Documents.Document.EmployeeFile.Subcategory");',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get path with category\nand subcategory',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1695, y: 69 },
        angle: 0,
        activityName: 'CreateFolderActivity',
        group: 'engineActivities',
        icon: { path: 'create_folder.svg#Dark', color: '#e98824' },
        id: 'e067bdfa-d7c7-441a-8aef-f0714940f23d',
        z: 2000022,
        name: { type: 'String', value: 'Create Folder 2' },
        stepDescription: {
            type: 'String',
            value: 'Create or find existing category folder',
        },
        newFolder: {
            type: 'String',
            value: '<%#Variable.Category%>',
        },
        description: { type: 'String', value: '' },
        parentFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Destination_Folder_Path_Full',
                    },
                },
            ],
        },
        returnExisting: { type: 'Bool', value: true },
        inheritLimitedAttributeGroups: { type: 'Bool', value: false },
        outputFolders: {
            type: 'Variable',
            value: { type: 'Xml', value: 'Category_Folder' },
        },
        limitedAttributeGroups: { type: 'MetadataGroup' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Create Folder 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Create or find existing\ncategory folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/create_folder.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1903, y: 69 },
        angle: 0,
        activityName: 'CreateFolderActivity',
        group: 'engineActivities',
        icon: { path: 'create_folder.svg#Dark', color: '#e98824' },
        id: 'df66a628-1c18-455a-8d09-6abe9667f043',
        name: { type: 'String', value: 'Create Folder 3' },
        stepDescription: {
            type: 'String',
            value: 'Create or find existing category folder',
        },
        newFolder: {
            type: 'String',
            value: '<%#Variable.Subcategory%>',
        },
        description: { type: 'String', value: '' },
        parentFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Category_Folder' },
                },
            ],
        },
        returnExisting: { type: 'Bool', value: true },
        inheritLimitedAttributeGroups: { type: 'Bool', value: false },
        outputFolders: {
            type: 'Variable',
            value: { type: 'Xml', value: 'Subcategory_Folder' },
        },
        limitedAttributeGroups: { type: 'MetadataGroup' },
        z: 2000023,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Create Folder 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Create or find existing\ncategory folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/create_folder.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 525, y: 363 },
        angle: 0,
        activityName: 'UpdateStatusActivity',
        group: 'engineActivities',
        icon: { path: 'status_change.svg#Dark', color: '#e98824' },
        id: '6c068cfa-d740-4879-86d1-2796716c07aa',
        z: 2000027,
        name: { type: 'String', value: 'Update Information 1' },
        stepDescription: {
            type: 'String',
            value: 'Could not find existing folder',
        },
        status: {
            type: 'Expression',
            value: {
                code: 'return "Could not find existing folder (" + GetVariableValue("Params.Documents.Document.EmployeeFile.DocumentName") + ")";',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nInformation 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Could not find existing\nfolder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/status_change.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 61, y: 67 },
        angle: 0,
        activityName: 'UpdateStatusActivity',
        group: 'engineActivities',
        icon: { path: 'status_change.svg#Dark', color: '#e98824' },
        id: '1a6db4f4-174d-48a9-a44b-084526164383',
        z: 2000028,
        name: { type: 'String', value: 'Update Information 2' },
        stepDescription: { type: 'String', value: '' },
        status: {
            type: 'Expression',
            value: {
                code: 'return GetVariableValue("Params.Documents.Document.Name");',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nInformation 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/status_change.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 68, y: 368 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '5cf8f284-72b6-4663-8514-2256c3cc5bb3',
        z: 2000029,
        name: { type: 'String', value: 'Update Variable From CSV 1' },
        stepDescription: { type: 'String', value: 'Check for 8800' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/Oracle HR/_Admin/CSV Files/PMH Active Executives.csv',
                },
            ],
        },
        fieldId: { type: 'String', value: 'Person Number' },
        fieldValue: {
            type: 'String',
            value: '<%#XmlVariables.Params.Documents.Document.EmployeeFile.EMPID%>',
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Person_Number',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Person Number',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 96.94140625,
                height: 26,
                rx: 3,
                ry: 3,
                x: -48.470703125,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Check for 8800',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 316, y: 461 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: 'be3591ef-11a5-470a-adb5-1f858e660a11',
        name: { type: 'String', value: 'Update Variable Value 4' },
        stepDescription: {
            type: 'String',
            value: 'Update Destination',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Path',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'string business_unit = GetVariableValue("Params.Documents.Document.EmployeeFile.BusinessUnit");\r\nstring hospital = GetVariableValue("Params.Documents.Document.EmployeeFile.Hospital");\r\nstring department_id = GetVariableValue("Params.Documents.Document.EmployeeFile.DepartmentID");\r\nstring status = GetVariableValue("Params.Documents.Document.EmployeeFile.Status");\r\n\r\nif (status == "T") {\r\n    status = "Terminated";\r\n} else {\r\n    status = "Active";\r\n}\r\n\r\nreturn $"Prospect Medical/Oracle HR/{business_unit}/Human Resources/{hospital}/Department 8800/{status}/";\r\n',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'Destination_Folder_Path_Full',
                        },
                    },
                    variableValue: {
                        type: 'Expression',
                        value: {
                            code: 'return "/" + GetVariableValue("Destination_Folder_Path") + GetVariableValue("Destination_Folder_Name") + "/";',
                            returnType: 'System.Object',
                            additionalCode: '',
                        },
                    },
                },
            ],
        },
        z: 2000030,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 116.0625,
                height: 26,
                rx: 3,
                ry: 3,
                x: -58.03125,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Update Destination',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 93, height: 93 },
        type: 'springcm.Diamond',
        content: '',
        position: { x: 1000, y: 90 },
        angle: 0,
        activityName: 'DecisionActivity',
        group: 'engineActivities',
        icon: { path: 'rule.svg#Dark', color: '#29bdbe' },
        id: '799b84ad-d647-405f-abbc-3832776b027a',
        z: 2000031,
        name: { type: 'String', value: 'Decision 1' },
        stepDescription: {
            type: 'String',
            value: 'Is there an existing folder?',
        },
        decisions: {
            type: 'Decisions',
            value: {
                decisions: [
                    {
                        condition: {
                            conditions: [
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'Number',
                                            value: 'Search_Result_Count',
                                        },
                                    },
                                    comparisonOperator: 'gt',
                                    rightOperand: {
                                        type: 'String',
                                        value: '1',
                                    },
                                    logicalOperator: 'and',
                                    guid: '82e34470-ecbb-4ebf-8f69-1275740ff338',
                                },
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'String',
                                            value: 'Destination_Folder_Path',
                                        },
                                    },
                                    comparisonOperator: 'notcontains',
                                    rightOperand: {
                                        type: 'String',
                                        value: 'I9',
                                    },
                                    guid: 'c2907f9d-147f-4016-a9fe-4abc1f1d6882',
                                },
                            ],
                            logicalOperator: '',
                            guid: '46a3faf3-6bc7-4b0a-8f20-b2cf5026d572',
                        },
                        output: {
                            type: 'Output',
                            value: {
                                name: 'True',
                                referenceKey:
                                    '853ee891-bea6-4a2d-b917-805dd2065375',
                            },
                        },
                    },
                    {
                        condition: {
                            conditions: [
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'String',
                                            value: 'Destination_Folder_Path',
                                        },
                                    },
                                    comparisonOperator: 'contains',
                                    rightOperand: {
                                        type: 'String',
                                        value: 'I9',
                                    },
                                    logicalOperator: 'and',
                                    guid: 'a9cfd9f9-300c-4e4f-8f3c-12e77fe953fc',
                                },
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'Xml',
                                            value: 'Params.Documents.Document.EmployeeFile.Hospital',
                                        },
                                    },
                                    comparisonOperator: 'equals',
                                    rightOperand: {
                                        type: 'String',
                                        value: 'CharterCARE',
                                    },
                                    guid: '27b6e4a2-92de-4091-abc6-d1e26d77f5ff',
                                },
                            ],
                            logicalOperator: '',
                            guid: '30573b2e-d1cf-4b10-82d1-404b7191efa4',
                        },
                        output: {
                            type: 'Output',
                            value: {
                                name: 'CharterCARE I9s',
                                referenceKey:
                                    '79358260-ca08-477d-a2c8-f149ddb2c194',
                            },
                        },
                    },
                    {
                        condition: {
                            conditions: [
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'Number',
                                            value: 'Search_Result_Count',
                                        },
                                    },
                                    comparisonOperator: 'lt',
                                    rightOperand: {
                                        type: 'String',
                                        value: '1',
                                    },
                                    logicalOperator: 'and',
                                    guid: 'dffb1919-a4f0-4cce-99a4-a38c10955a94',
                                },
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'String',
                                            value: 'Destination_Folder_Path',
                                        },
                                    },
                                    comparisonOperator: 'notcontains',
                                    rightOperand: {
                                        type: 'String',
                                        value: 'I9',
                                    },
                                    guid: '5d69ad35-f758-4e4c-8a88-0dffb2770c16',
                                },
                            ],
                            logicalOperator: '',
                            guid: '0d8d5f18-fd06-4a9f-8414-2be7dc1441b4',
                        },
                        output: {
                            type: 'Output',
                            value: {
                                name: 'False',
                                referenceKey:
                                    'fe15882e-ef49-4b8a-a7a6-1fc1f9b0abb3',
                            },
                        },
                    },
                ],
                elseOutput: {
                    type: 'Output',
                    value: {
                        name: 'Failure',
                        referenceKey: 'b2f4cea4-f1a6-4e04-a9ca-0de671675699',
                    },
                },
            },
        },
        outputDecision: { type: 'Variable' },
        attrs: {
            '.step-container': { 'data-error-state': false },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Decision 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Is there an existing\nfolder?',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href': '/atlassupport/scripts/jointjs/svg/rule.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 2138, y: -213 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'cf94e0d5-60ba-487f-9aab-1f7ee88bde19',
        z: 2000032,
        name: { type: 'String', value: 'Copy or Move Document 4' },
        stepDescription: { type: 'String', value: '' },
        action: { type: 'String', value: 'move' },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'Destination_Folder_Path',
                    },
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2df9c14b-9044-4b4d-9e43-95a60d910c22',
            port: 'e',
        },
        target: {
            id: '3099f885-8ce7-4988-8721-8e167e4a2d58',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '82cd22c8-13b8-4ea3-b349-cea354870408',
        z: 3000001,
        name: { type: 'String', value: 'Link 3' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b92920c6-9643-44de-bda9-66c24d14d091',
            port: 'e',
        },
        target: {
            id: '02149c6b-6446-4047-b608-89cc983c93c7',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6bfe4594-d180-4ca7-8052-9df9e458db8b',
        z: 3000001,
        name: { type: 'String', value: 'Link 11' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'false' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'a2aed0da-f01f-4fba-960e-093a2c085ed1',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c7bbc4b9-f275-44de-8cdf-cda6cb054bfe',
        z: 3000001,
        name: { type: 'String', value: 'Link 15' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '3099f885-8ce7-4988-8721-8e167e4a2d58',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'b09223eb-04bd-4592-8715-819565cbf897',
        z: 3000001,
        name: { type: 'String', value: 'Link 14' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b92920c6-9643-44de-bda9-66c24d14d091',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6db64e04-ad6c-4142-b2c6-078bed49879e',
        z: 3000001,
        name: { type: 'String', value: 'Link 10' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'true' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '5cf8f284-72b6-4663-8514-2256c3cc5bb3',
            port: 'en',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(7)',
        },
        target: {
            id: '2df9c14b-9044-4b4d-9e43-95a60d910c22',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '43c0fdf0-f175-4fa4-bfab-8f01a3249626',
        z: 3000001,
        name: { type: 'String', value: 'Link 29' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '3099f885-8ce7-4988-8721-8e167e4a2d58',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '799b84ad-d647-405f-abbc-3832776b027a',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '4d65d37a-a4a6-41d6-9fb3-ecc338e06188',
        z: 3000004,
        name: { type: 'String', value: 'Link 4' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'a2aed0da-f01f-4fba-960e-093a2c085ed1',
            port: 'e',
        },
        target: {
            id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ee1a2e97-679b-43e8-a16e-ca8550428566',
        z: 3000007,
        name: { type: 'String', value: 'Link 6' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b5a10aa2-0dba-4de6-99de-fe402f5908e4',
            port: 'e',
        },
        target: {
            id: 'ddb8f874-7a8c-42b6-88bc-dc5f6622d73a',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(4)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '9045a7ce-a505-48b9-a45f-d91e00041eb2',
        z: 3000009,
        name: { type: 'String', value: 'Link 8' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '02149c6b-6446-4047-b608-89cc983c93c7',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '13d4a21a-8a53-49af-a9a9-603af073b334',
        z: 3000014,
        name: { type: 'String', value: 'Link 12' },
        vertices: [{ x: 1533, y: 238 }],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '28ddb969-04d0-4fd6-a57f-322319ee3d71',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'e25692ab-9862-4239-ba39-e348f6a1b6c3',
        z: 3000015,
        name: { type: 'String', value: 'Link 13' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b5a10aa2-0dba-4de6-99de-fe402f5908e4',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'bef11f86-70c6-499f-958b-68909d909041',
        z: 3000020,
        name: { type: 'String', value: 'Link 16' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '02149c6b-6446-4047-b608-89cc983c93c7',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'da82db06-ce2f-4e9d-9a37-1ad4da0cfba0',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8aa1aede-d5fc-4845-a1a4-a4321a0ae766',
        z: 3000022,
        name: { type: 'String', value: 'Link 18' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '4ba19c47-05de-429b-abb4-bd65631b4bc8',
            port: 'e',
        },
        target: {
            id: 'b92920c6-9643-44de-bda9-66c24d14d091',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'e78e110e-aabb-47e8-81dd-10f9fca52368',
        z: 3000028,
        name: { type: 'String', value: 'Link 9' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '4ba19c47-05de-429b-abb4-bd65631b4bc8',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: 'da82db06-ce2f-4e9d-9a37-1ad4da0cfba0',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ae62ab9f-434e-4d93-b9a9-33b0e6e54152',
        z: 3000029,
        name: { type: 'String', value: 'Link 17' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
            port: 'e',
        },
        target: {
            id: 'e067bdfa-d7c7-441a-8aef-f0714940f23d',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ba7e95f2-e7d2-4ca6-abe1-a7e9fab7527f',
        z: 3000030,
        name: { type: 'String', value: 'Link 20' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'e067bdfa-d7c7-441a-8aef-f0714940f23d',
            port: 'e',
        },
        target: {
            id: 'df66a628-1c18-455a-8d09-6abe9667f043',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'd564e018-3a7d-43d5-9b1e-46bd1bef5d67',
        z: 3000031,
        name: { type: 'String', value: 'Link 21' },
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        vertices: [],
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'df66a628-1c18-455a-8d09-6abe9667f043',
            port: 'e',
        },
        target: {
            id: 'b5a10aa2-0dba-4de6-99de-fe402f5908e4',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ff8e4a64-d1b4-4c54-9952-1dbfef21d9b7',
        z: 3000032,
        name: { type: 'String', value: 'Link 22' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '0d59fe2c-044f-48de-8c9c-7310705c41de',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f4f1534d-fa23-43ce-97f4-5f6a6f99a1ed',
        z: 3000033,
        name: { type: 'String', value: 'Link 23' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'e067bdfa-d7c7-441a-8aef-f0714940f23d',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '41e11e75-b82d-4223-b0e1-e72cfdc2a4bd',
        z: 3000034,
        name: { type: 'String', value: 'Link 24' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'df66a628-1c18-455a-8d09-6abe9667f043',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'fce867e2-cabb-4c13-aa3c-c963b4ae62b3',
        z: 3000035,
        name: { type: 'String', value: 'Link 25' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2df9c14b-9044-4b4d-9e43-95a60d910c22',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '6c068cfa-d740-4879-86d1-2796716c07aa',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c513f802-f9d9-4390-8e6a-08761938e3b1',
        z: 3000036,
        name: { type: 'String', value: 'Link 26' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '6c068cfa-d740-4879-86d1-2796716c07aa',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '3099f885-8ce7-4988-8721-8e167e4a2d58',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c14c24e6-5546-49d4-a6eb-96cb54cc4679',
        z: 3000037,
        name: { type: 'String', value: 'Link 19' },
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        vertices: [],
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1a6db4f4-174d-48a9-a44b-084526164383',
            port: 'e',
        },
        target: {
            id: '28ddb969-04d0-4fd6-a57f-322319ee3d71',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c110ec89-9118-48b6-9719-ac8132c8ff08',
        z: 3000038,
        name: { type: 'String', value: 'Link 27' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '28ddb969-04d0-4fd6-a57f-322319ee3d71',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '5cf8f284-72b6-4663-8514-2256c3cc5bb3',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8f0f98ba-dca5-4d67-a48a-5b20015a8f0d',
        z: 3000039,
        name: { type: 'String', value: 'Link 28' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '5cf8f284-72b6-4663-8514-2256c3cc5bb3',
            port: 'es',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(9)',
        },
        target: {
            id: 'be3591ef-11a5-470a-adb5-1f858e660a11',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '93a55eda-d1d9-4f6c-aee4-1284e6fb9618',
        z: 3000041,
        name: { type: 'String', value: 'Link 2' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'be3591ef-11a5-470a-adb5-1f858e660a11',
            port: 'n',
        },
        target: {
            id: '2df9c14b-9044-4b4d-9e43-95a60d910c22',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '463c4b0c-8253-498c-92f4-3d33596132e7',
        z: 3000043,
        name: { type: 'String', value: 'Link 30' },
        vertices: [{ x: 465, y: 408 }],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '799b84ad-d647-405f-abbc-3832776b027a',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '4ba19c47-05de-429b-abb4-bd65631b4bc8',
            port: 'ws',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(6)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8d2da5ff-c846-4a8b-a144-87b7a8ce9203',
        z: 3000045,
        name: { type: 'String', value: 'Link 31' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: '853ee891-bea6-4a2d-b917-805dd2065375',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '799b84ad-d647-405f-abbc-3832776b027a',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'a2aed0da-f01f-4fba-960e-093a2c085ed1',
            port: 'ws',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(6)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '1736ae10-62e1-434b-9e8a-b5646db664d7',
        z: 3000046,
        name: { type: 'String', value: 'Link 32' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: 'fe15882e-ef49-4b8a-a7a6-1fc1f9b0abb3',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '799b84ad-d647-405f-abbc-3832776b027a',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'e168dfed-b603-4bab-bb17-b4959abe4130',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '787f504b-e96f-4fc1-8f58-0962c9c44994',
        z: 3000047,
        name: { type: 'String', value: 'Link 5' },
        vertices: [{ x: 1046, y: -58 }],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'failure' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '799b84ad-d647-405f-abbc-3832776b027a',
            port: 'ne',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(3)',
        },
        target: {
            id: 'cf94e0d5-60ba-487f-9aab-1f7ee88bde19',
            port: 'wn',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(4)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '587d2ecf-4c1b-476e-9380-0f71eb676697',
        z: 3000048,
        name: { type: 'String', value: 'Link 7' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: '79358260-ca08-477d-a2c8-f149ddb2c194',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'cf94e0d5-60ba-487f-9aab-1f7ee88bde19',
            port: 'e',
        },
        target: {
            id: 'ddb8f874-7a8c-42b6-88bc-dc5f6622d73a',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '58c4e5c6-3cab-4690-8aa7-07115481e1d6',
        z: 3000049,
        name: { type: 'String', value: 'Link 33' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
];

const xyzContractManagement = [
    {
        size: { width: 272, height: 1108 },
        content: '',
        type: 'springcm.Group',
        position: { x: -189.00000000000577, y: 26.999999999999318 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: '096d89fa-958f-4851-8695-509ec17c4b04',
        z: 1,
        name: {
            type: 'String',
            value: 'Generate Doc and Create Folder',
        },
        color: { type: 'String', value: '#757575' },
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#757575',
                'ref-x': '50%',
                text: 'Generate Doc and Create Folder',
            },
            '.groupbody': { stroke: '#757575' },
        },
    },
    {
        size: { width: 482, height: 1107 },
        content: '',
        type: 'springcm.Group',
        position: { x: 94.99999999998965, y: 26.0000000000025 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'f24ded4f-0ddc-481c-b5c8-44f9656e9265',
        name: {
            type: 'String',
            value: 'Route to internal departments for Review',
        },
        color: { type: 'String', value: '#757575' },
        z: 2,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#757575',
                'ref-x': '50%',
                text: 'Route to internal departments for Review',
            },
            '.groupbody': { stroke: '#757575' },
        },
    },
    {
        size: { width: 1518, height: 721 },
        content: '',
        type: 'springcm.Group',
        position: { x: 588.9999999999927, y: 28.00000000001512 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'f5b9556c-b5cd-4cd2-80e7-5cf468d8f8ba',
        name: {
            type: 'String',
            value: 'Decide next steps for document',
        },
        color: { type: 'String', value: '#757575' },
        z: 3,
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#757575',
                'ref-x': '50%',
                text: 'Decide next steps for document',
            },
            '.groupbody': { stroke: '#757575' },
        },
    },
    {
        size: { width: 624, height: 335 },
        content: '',
        type: 'springcm.Group',
        position: { x: 590, y: -322.00000000000165 },
        angle: 0,
        activityName: 'GroupBoxActivity',
        group: 'engineActivities',
        icon: { path: 'group.svg#Concepts', color: '#3366cc' },
        id: 'a6a37ff4-14bd-4e30-8c85-c9d41b453396',
        z: 4,
        name: { type: 'String', value: 'Exception Path' },
        color: { type: 'String', value: '#757575' },
        attrs: {
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/group.svg#Concepts',
            },
            svg: { color: '#fff', fill: '#3366cc' },
            rect: { fill: '#3366cc' },
            text: { text: 'Group', 'ref-x': 0, 'ref-y': 0 },
            '.body': {
                width: 150,
                height: 150,
                stroke: '#000000',
                'stroke-dasharray': '6',
                'stroke-width': 2,
                rx: 1,
                ry: 1,
                'pointer-events': 'stroke',
            },
            '.label-rect': {
                ref: '.body',
                'ref-width': 1,
                'ref-x': 0,
                'ref-y': -30,
                height: 25,
            },
            '.label-group': {
                ref: '.label-rect',
                'ref-x': 0,
                'ref-y': 0,
            },
            '.label-wrap': {
                ref: '.label-rect',
                'ref-width': 1,
                'ref-height': 1,
            },
            '.label': {
                y: '1.3em',
                'text-anchor': 'middle',
                'font-size': 14,
                fill: '#757575',
                'ref-x': '50%',
                text: 'Exception Path',
            },
            '.groupbody': { stroke: '#757575' },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: '780dec56-2916-4f9c-a77e-7381c3ae52a1',
            port: 's',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(7)',
        },
        target: {
            id: 'd79e7ca5-9391-4fb7-a83d-b1dfc50bc3ec',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5ea9788e-3849-4946-a577-87b2b411c8e3',
        z: 1000003,
        name: { type: 'String', value: 'Link 1' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'd79e7ca5-9391-4fb7-a83d-b1dfc50bc3ec',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '3dde6bdb-a250-4c53-bd77-a6fbce6be7b0',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '87ae8850-a6c7-47bc-ac0b-10d7a26dbef5',
        z: 1000004,
        name: { type: 'String', value: 'Link 2' },
        vertices: [],
        output: { type: 'String', value: 'updated' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '72281a32-8585-40ba-89ee-8c86b62e8f4a',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '1a0f49a7-2100-4369-b789-6d91d3285f34',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c6e6e877-bcd0-4094-93c2-f6b926ade02d',
        z: 1000010,
        name: { type: 'String', value: 'Link 4' },
        vertices: [],
        output: { type: 'String', value: 'success' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: -99, y: 42 },
        angle: 0,
        activityName: 'StartActivity',
        group: 'hidden',
        icon: { path: 'start.svg#Dark', color: 'white' },
        z: 2000001,
        id: '780dec56-2916-4f9c-a77e-7381c3ae52a1',
        name: { type: 'String', value: 'Start' },
        definedVariables: {
            type: 'Variable',
            value: [
                {
                    type: 'Xml',
                    value: {
                        name: 'Params',
                        displayName: 'Params',
                        description: '',
                        displayType: 'CustomXml',
                        schema: {
                            nodes: [
                                {
                                    name: 'Params',
                                    type: 'element',
                                    dataType: 'string',
                                    guid: 'a8768a9d-576d-4ac8-8f14-76eee40c71d2',
                                    isRoot: true,
                                    nodes: [
                                        {
                                            name: 'Documents',
                                            nodes: [
                                                {
                                                    name: 'Document',
                                                    nodes: [
                                                        {
                                                            name: 'Id',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '186d0a11-7043-4fe5-9039-349bff162d4c',
                                                        },
                                                        {
                                                            name: 'Description',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '5e6a13ca-7b4d-4c57-b1d9-3003383b8691',
                                                        },
                                                        {
                                                            name: 'Name',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '0a7d0c80-988c-480b-85f0-6e3117843477',
                                                        },
                                                        {
                                                            name: 'ParentFolderId',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '06284656-d551-4a8a-9649-24133fbd7ea2',
                                                        },
                                                        {
                                                            name: 'CreatedBy',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'a1011f15-5586-4301-be77-481355311695',
                                                        },
                                                        {
                                                            name: 'CreatedDate',
                                                            dataType:
                                                                'dateTime',
                                                            type: 'element',
                                                            guid: 'b489d5a6-b13d-46f4-a348-a7ce4d6d9cec',
                                                        },
                                                        {
                                                            name: 'ParentFolderName',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'f4b4d0a0-c446-42df-a1c9-24b0f4011675',
                                                        },
                                                        {
                                                            name: 'UpdatedBy',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '52a024b5-04fd-40d9-90ba-e6c8f883795c',
                                                        },
                                                        {
                                                            name: 'UpdatedDate',
                                                            dataType:
                                                                'dateTime',
                                                            type: 'element',
                                                            guid: 'a4bbe25b-f3e7-4aa3-811a-fa80efa0fe5b',
                                                        },
                                                        {
                                                            name: 'IsFormDocument',
                                                            dataType: 'boolean',
                                                            type: 'element',
                                                            guid: 'a7293de6-969f-4040-8175-e1346238379d',
                                                        },
                                                        {
                                                            name: 'IsTermDocument',
                                                            dataType: 'boolean',
                                                            type: 'element',
                                                            guid: '37123e08-ba5b-43b5-836e-0c640c4876cf',
                                                        },
                                                        {
                                                            name: 'EditDocumentURL',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '1ea1c058-dea3-4516-9975-ed4752826643',
                                                        },
                                                        {
                                                            name: 'IsCheckedOut',
                                                            dataType: 'boolean',
                                                            type: 'element',
                                                            guid: '4bdeb809-c22e-4aa3-9cf0-4b9769207e67',
                                                        },
                                                        {
                                                            name: 'MIMEType',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '11b3cbb7-faf6-4a97-9930-f43958b98125',
                                                        },
                                                        {
                                                            name: 'PageCount',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'e718278e-4a18-4a6f-960d-230ff6027638',
                                                        },
                                                    ],
                                                    guid: 'cff67c21-613b-4e97-bcec-822fd2a1496a',
                                                },
                                            ],
                                            guid: 'ea149002-4335-4921-a899-092ba85713c8',
                                        },
                                        {
                                            name: 'TemplateFieldData',
                                            nodes: [
                                                {
                                                    name: 'Effective_Date',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '101e1b3a-76c7-4a63-9f58-c6309edf8d96',
                                                },
                                                {
                                                    name: 'Effective_Date_unformatted',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '026485b3-4404-436c-a67f-f4647cc6756c',
                                                },
                                                {
                                                    name: 'Vendor_Information',
                                                    nodes: [
                                                        {
                                                            name: 'Vendor_Name',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '5a295365-38ca-49f8-8ee9-59505f4b64b1',
                                                        },
                                                        {
                                                            name: 'Street',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '85db5b73-471b-4c83-a8b2-d64d86941d53',
                                                        },
                                                        {
                                                            name: 'City',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'dad7bfee-5c5b-454c-ac74-1552f2d22b15',
                                                        },
                                                        {
                                                            name: 'State',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '78491631-6d83-4033-a85c-c024a9c8b21c',
                                                        },
                                                        {
                                                            name: 'displayName',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: 'ad25395f-16cd-4d46-bd33-4e5094073181',
                                                        },
                                                        {
                                                            name: 'displayValue',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: '0e75460a-dc28-4901-a777-0ae7b819fbba',
                                                        },
                                                    ],
                                                    guid: 'a5667a6c-4c38-4bcd-93ca-06564297a8c5',
                                                },
                                                {
                                                    name: 'Representative_Information',
                                                    nodes: [
                                                        {
                                                            name: 'Representative_Container',
                                                            nodes: [
                                                                {
                                                                    name: 'Representative_Dropdown',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '717765c6-3fe8-4a60-a95e-5212b21a1aa3',
                                                                },
                                                                {
                                                                    name: 'Representative_First_Name',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '4848b872-a205-431e-b0bc-80cec7afa0dd',
                                                                },
                                                                {
                                                                    name: 'Representative_Last_Name',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '8ab4e4cf-bb43-4048-a4e5-d1830af8eebf',
                                                                },
                                                                {
                                                                    name: 'Representative_Title',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '3f7ee1f9-8567-4bc9-9d44-7db2e7442c94',
                                                                },
                                                                {
                                                                    name: 'Email',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '41bd4614-9c5c-4e2c-bc53-84b819f8b031',
                                                                },
                                                                {
                                                                    name: 'Full_Name',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'element',
                                                                    guid: '8b29f6dc-3326-4b08-9463-e3b416df89af',
                                                                },
                                                                {
                                                                    name: 'displayName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'ff702f44-deb7-4cc7-9f6c-63241ee8ae57',
                                                                },
                                                                {
                                                                    name: 'displayValue',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'cc936a9e-b032-4529-925d-2145cc23b519',
                                                                },
                                                            ],
                                                            guid: '28ea7a51-0d47-4f6c-b730-5c0a52c4a586',
                                                        },
                                                        {
                                                            name: 'displayName',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: '326d2bf6-d96d-47df-ab82-76ad69aa573f',
                                                        },
                                                        {
                                                            name: 'displayValue',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: 'c904d98d-9f8f-456f-a255-b407cb5d5168',
                                                        },
                                                    ],
                                                    guid: '054b2908-2297-448c-b671-f7ac6999669b',
                                                },
                                                {
                                                    name: 'Document_Options',
                                                    nodes: [
                                                        {
                                                            name: 'Termination_Term',
                                                            nodes: [
                                                                {
                                                                    name: 'Termination_Term_Container',
                                                                    nodes: [
                                                                        {
                                                                            name: 'Termination_Term_TermName',
                                                                            nodes: [
                                                                                {
                                                                                    name: 'Termination_TermText',
                                                                                    dataType:
                                                                                        'string',
                                                                                    type: 'element',
                                                                                    guid: 'ba5f4609-ef2c-480a-b6b5-5812dd732795',
                                                                                },
                                                                                {
                                                                                    name: 'Termination_TermNotes',
                                                                                    dataType:
                                                                                        'string',
                                                                                    type: 'element',
                                                                                    guid: '9262689d-8525-46a5-b916-0a819fb6ab46',
                                                                                },
                                                                                {
                                                                                    name: 'displayValue',
                                                                                    dataType:
                                                                                        'string',
                                                                                    type: 'attribute',
                                                                                    guid: '3b6fc4ac-70fb-4eb0-89c9-b59a6d81bf95',
                                                                                },
                                                                            ],
                                                                            guid: 'a70d1ce8-bc91-4556-a71d-8026c088d5a7',
                                                                        },
                                                                        {
                                                                            name: 'displayValue',
                                                                            dataType:
                                                                                'string',
                                                                            type: 'attribute',
                                                                            guid: 'd0d48fe9-637a-4f89-bd3d-f1b797934814',
                                                                        },
                                                                    ],
                                                                    guid: 'a71a56d6-b1f6-4f0f-b8b3-f9fdc7e74b79',
                                                                },
                                                                {
                                                                    name: 'displayName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: 'b837ad95-51e4-4f3e-b848-569550005801',
                                                                },
                                                                {
                                                                    name: 'displayValue',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '30905f3c-a248-4583-aede-c7dfbec675e3',
                                                                },
                                                            ],
                                                            guid: 'eae7d0d2-56e1-4c03-9a4b-2ce47638a2fe',
                                                        },
                                                        {
                                                            name: 'displayName',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: 'b64a4bbc-2b93-4969-a760-e8e4afedce0e',
                                                        },
                                                        {
                                                            name: 'displayValue',
                                                            dataType: 'string',
                                                            type: 'attribute',
                                                            guid: '8933c7d6-5e97-4a18-9149-15280f3dc851',
                                                        },
                                                    ],
                                                    guid: 'f490bf3b-29ec-434b-b7cb-3aea6205a55e',
                                                },
                                                {
                                                    name: 'First_or_Third_party',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '344b23f4-76d8-435a-adf7-e682ba652c20',
                                                },
                                                {
                                                    name: 'displayName',
                                                    dataType: 'string',
                                                    type: 'attribute',
                                                    guid: '0ce5ecd5-c786-4e2e-88ea-8e8afdcb0e17',
                                                },
                                                {
                                                    name: 'displayValue',
                                                    dataType: 'string',
                                                    type: 'attribute',
                                                    guid: 'd7b9778f-bedd-4862-a84d-8f38a4f5734a',
                                                },
                                                {
                                                    name: 'mergedDocumentUid',
                                                    dataType: 'string',
                                                    type: 'attribute',
                                                    guid: 'd231ad91-4d6e-4bc1-9c24-a960c62fa7f8',
                                                },
                                            ],
                                            guid: 'f958d065-8dff-4214-b542-ad4657db5de4',
                                        },
                                    ],
                                },
                            ],
                        },
                        sortable: false,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: true,
                        isLocal: false,
                    },
                },
                {
                    type: 'User',
                    value: {
                        name: 'SubmittedBy',
                        displayName: 'Submitted By',
                        description: '',
                        displayType: 'Actor',
                        schema: {
                            name: 'UserAccount',
                            nodes: [
                                {
                                    name: 'Name',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '0d30b948-bcfb-41b4-a431-b858041dbe1a',
                                },
                                {
                                    name: 'CreatedDate',
                                    dataType: 'dateTime',
                                    type: 'element',
                                    guid: '9bea2590-338d-4fd8-9388-7f9c7bee8c2b',
                                },
                                {
                                    name: 'Email',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'e5135ab2-fc7e-4625-afd6-c8a88f7788f0',
                                },
                                {
                                    name: 'FirstName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'd30f25a8-295e-4738-b018-a69af60b2de9',
                                },
                                {
                                    name: 'LastName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'd6668d0b-a148-4b0a-a502-911dfe948846',
                                },
                                {
                                    name: 'ManagerUid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'c9de5dfe-70cc-49cd-96dd-578af2df4b31',
                                },
                                {
                                    name: 'Role',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '089b27ee-c731-48b4-84ea-ad1c163c3ca5',
                                },
                                {
                                    name: 'Uid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '035809eb-bccb-45ec-aa2a-7898a2076be1',
                                },
                                {
                                    name: 'Language',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'ba29a1d5-0d3a-482a-a341-e26a74758be1',
                                },
                                {
                                    name: 'Region',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'af40058e-45d7-45df-bf7e-11e9ae11a400',
                                },
                            ],
                        },
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Comments',
                        displayName: 'Comments',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: true,
                        deletable: false,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Date',
                        displayName: 'Current Date',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Time',
                        displayName: 'Current Time',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Link',
                        displayName: 'Current Step Link',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'LastAbortEmail',
                        displayName: 'Last Abort Email',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'VendorName',
                        displayName: 'VendorName',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'ContractFolder',
                        displayName: 'ContractFolder',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'f68b6471-e149-457f-83ec-d06bacdf3d66',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '1991412b-f284-48b9-a3a1-e985ac0df261',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '0744b446-b34d-461b-995d-f17763fb788b',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'dd4beefc-7e67-4b54-b0a8-6e2185b9dddf',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '031ee523-a779-4dcc-a967-b849afd00585',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'cd87b655-e943-40e5-9903-8c2003d9ac14',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'ed93552b-0a07-4868-af5a-5123dd6002cf',
                                                },
                                            ],
                                            guid: '7bd34095-f369-4671-aea4-fe1f80a4b011',
                                        },
                                    ],
                                    guid: '88e8c557-50bf-4f83-bab3-653081d7807d',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'ContractFolderRoot',
                        displayName: 'ContractFolderRoot',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'FirstOrThirdParty',
                        displayName: 'FirstOrThirdParty',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Legal',
                        displayName: 'Legal',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'SalesManager',
                        displayName: 'SalesManager',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'ConfigEForm',
                        displayName: 'ConfigEForm',
                        description: '',
                        displayType: 'Document',
                        schema: {
                            nodes: [
                                {
                                    name: 'Documents',
                                    nodes: [
                                        {
                                            name: 'Document',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '2e52786e-dca9-4424-8131-85f5a39c16f7',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '2b9f06df-5f28-4e39-b3da-ec740b8c54bd',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '933649f3-e0d3-4cb1-95da-030e4e36473e',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '1a0e30ec-340c-469d-b6c4-81f2cf950a80',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '47471691-1b14-406b-a864-c9aa53e6f060',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'f1685f09-b55d-4032-9797-f0d47634afb7',
                                                },
                                                {
                                                    name: 'ParentFolderName',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '8983b93f-f24f-4337-96ae-d6a868f0d15d',
                                                },
                                                {
                                                    name: 'UpdatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '989372b6-9879-4694-96eb-c3cbfa2a75c0',
                                                },
                                                {
                                                    name: 'UpdatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '5755fdc5-ec80-48c0-b65f-a6a7edb69bee',
                                                },
                                                {
                                                    name: 'IsFormDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '10a1c828-a0c1-4614-9492-7d8052d3b318',
                                                },
                                                {
                                                    name: 'IsTermDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '9fc334fb-b71a-41c0-9812-aab87888680f',
                                                },
                                                {
                                                    name: 'EditDocumentURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '92125f29-2dd2-480a-a737-a042d6d23059',
                                                },
                                                {
                                                    name: 'IsCheckedOut',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '73b79216-35ce-4eac-a2d4-2f2fe31dc1e5',
                                                },
                                                {
                                                    name: 'CustomFormData',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    nodes: [
                                                        {
                                                            name: 'FieldId',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '5e9acd87-8511-4725-8f07-c1bf0d3958a4',
                                                        },
                                                        {
                                                            name: 'FieldValue',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'e5448430-0546-4076-aa8d-f3484ddc6d01',
                                                        },
                                                        {
                                                            name: 'SetName',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: 'd32b0a93-d856-4119-93f3-158119dc844f',
                                                        },
                                                        {
                                                            name: 'SetNumber',
                                                            dataType: 'string',
                                                            type: 'element',
                                                            guid: '426478f4-d416-4a9c-a5cc-48d36ff672ee',
                                                        },
                                                    ],
                                                    guid: '7c114e0c-780b-4dce-8890-26f498ba4066',
                                                },
                                                {
                                                    name: 'MIMEType',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '59873309-df0b-43ec-adf3-c735aa3ac97f',
                                                },
                                                {
                                                    name: 'PageCount',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'd9e9c30e-c383-4917-9ebd-945009aebb96',
                                                },
                                                {
                                                    name: 'CustomFormFields',
                                                    nodes: [
                                                        {
                                                            name: 'Subject',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '8a9f7f99-f75a-4c1f-8ebf-e02059c46e73',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '26c92e20-4c53-4169-a2cc-2ae350fb8d33',
                                                                },
                                                            ],
                                                            guid: '066222d7-eff8-4dee-8dcd-3987ffff8d66',
                                                        },
                                                        {
                                                            name: 'Body',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '2f47dc4c-a0a5-44b0-997d-30024f268a7f',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '61b0bcbf-8651-46ad-af0a-379ada3411f0',
                                                                },
                                                            ],
                                                            guid: 'df7d757f-31c8-4f26-ab67-bad5c6b6e031',
                                                        },
                                                        {
                                                            name: 'ApproverInstructions',
                                                            nodes: [
                                                                {
                                                                    name: 'SetNumber',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '5de9bbd8-c335-4d16-8bc1-7352c8f7f868',
                                                                },
                                                                {
                                                                    name: 'SetName',
                                                                    dataType:
                                                                        'string',
                                                                    type: 'attribute',
                                                                    guid: '2d064a29-cf92-4d36-9e08-d37d6eb5832a',
                                                                },
                                                            ],
                                                            guid: '2e7c887f-5fdf-4451-bca3-e717ce43a536',
                                                        },
                                                    ],
                                                    guid: 'fce5914c-31eb-4699-854c-7cfb3f2fe216',
                                                },
                                            ],
                                            guid: '15693ea9-b9a9-4d47-b40e-96a6557f902e',
                                        },
                                    ],
                                    guid: '0a4aaa58-5895-4d7b-afda-7c1600f44dfc',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'SignedDate',
                        displayName: 'SignedDate',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Subject',
                        displayName: 'Subject',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Body',
                        displayName: 'Body',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'ApproverInstructions',
                        displayName: 'ApproverInstructions',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'TestFolder',
                        displayName: 'TestFolder',
                        description: '',
                        displayType: 'Folder',
                        schema: {
                            nodes: [
                                {
                                    name: 'Folders',
                                    nodes: [
                                        {
                                            name: 'Folder',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'e6cb1d15-d13e-4aab-8f70-e5b32c9fc276',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '7c00932e-df20-4e77-8b21-7b50d33593ff',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '94c8c6ca-4441-4e11-8fa0-3ddd3e1c2c4f',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'e85c6bfc-6c7c-4473-a84e-fed47e26774b',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '7145d417-1478-4cf6-8576-4517ac4448a7',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: '7136382f-3e5e-4104-a975-7a1edc7ceecd',
                                                },
                                                {
                                                    name: 'BrowseFolderURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '39f3cff2-6afe-468f-82f1-4b4129eb484b',
                                                },
                                            ],
                                            guid: '39bd59e4-f10e-4a21-9090-b2aa120f7deb',
                                        },
                                    ],
                                    guid: '68a225b8-cc25-4bfb-ba61-220055414f9a',
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'Xml',
                    value: {
                        name: 'SignatureAuditXML',
                        displayName: 'SignatureAuditXML',
                        description: '',
                        displayType: 'CustomXml',
                        schema: {
                            nodes: [
                                {
                                    name: 'root',
                                    type: 'element',
                                    dataType: 'string',
                                    guid: '9c1167d6-6164-4f3a-95d0-f60345c760ac',
                                    isRoot: true,
                                },
                            ],
                        },
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: false,
                        isLocal: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'VendorEmail',
                        displayName: 'VendorEmail',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'RepFirstName',
                        displayName: 'RepFirstName',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'RepLastName',
                        displayName: 'RepLastName',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'EffectiveDate',
                        displayName: 'EffectiveDate',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'VendorTitle',
                        displayName: 'VendorTitle',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
            ],
        },
        sendNotification: { type: 'Bool', value: false },
        trackActivity: { type: 'Bool', value: true },
        workflowName: {
            type: 'String',
            value: 'XYZ Contract Management',
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Start',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/start.svg#Dark',
            },
            svg: { color: 'white' },
            circle: { fill: '#A0CC23' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: -99, y: 205 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: 'd79e7ca5-9391-4fb7-a83d-b1dfc50bc3ec',
        z: 2000003,
        name: { type: 'String', value: 'Update Variable Value 1' },
        stepDescription: {
            type: 'String',
            value: 'Get Vendor Name and Contract Root',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'VendorName' },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Vendor_Information.Vendor_Name',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'ContractFolderRoot',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: '/Other Sources/Salesforce/Account/Burlington Textiles Corp of America/Opportunity/Burlington Textiles Weaving Plant Generator/',
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'VendorEmail',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Representative_Information.Representative_Container.Email',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'EffectiveDate',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Effective_Date',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'VendorTitle',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Representative_Information.Representative_Container.Representative_Title',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Get Vendor Name and\nContract Root',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: -101, y: 460 },
        angle: 0,
        activityName: 'UpdateStatusActivity',
        group: 'engineActivities',
        icon: { path: 'status_change.svg#Dark', color: '#e98824' },
        id: '3dde6bdb-a250-4c53-bd77-a6fbce6be7b0',
        z: 2000004,
        name: { type: 'String', value: 'Update Information 1' },
        stepDescription: {
            type: 'String',
            value: 'Show Vendor in Info Column',
        },
        status: { type: 'String', value: '<%#Variable.VendorName%>' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nInformation 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Show Vendor in Info\nColumn',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/status_change.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: -99, y: 731 },
        angle: 0,
        activityName: 'CreateFolderActivity',
        group: 'engineActivities',
        icon: { path: 'create_folder.svg#Dark', color: '#e98824' },
        id: '72281a32-8585-40ba-89ee-8c86b62e8f4a',
        z: 2000006,
        name: { type: 'String', value: 'Create Folder 1' },
        stepDescription: {
            type: 'String',
            value: 'Create Contract Folder',
        },
        newFolder: {
            type: 'String',
            value: '<%#Variable.VendorName%>',
        },
        description: { type: 'String', value: '' },
        returnExisting: { type: 'Bool', value: true },
        inheritLimitedAttributeGroups: { type: 'Bool', value: false },
        limitedAttributeGroups: { type: 'MetadataGroup' },
        parentFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'String',
                        value: 'ContractFolderRoot',
                    },
                },
            ],
        },
        outputFolders: {
            type: 'Variable',
            value: { type: 'Xml', value: 'ContractFolder' },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Create Folder 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 135.078125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -67.5390625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Create Contract Folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/create_folder.svg#Dark',
            },
            svg: { color: '#e98824', fill: '#fff' },
            rect: { fill: '#e98824', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: -99, y: 948 },
        angle: 0,
        activityName: 'CopyMoveDocumentActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '1a0f49a7-2100-4369-b789-6d91d3285f34',
        z: 2000007,
        name: { type: 'String', value: 'Copy or Move Document 1' },
        action: { type: 'String', value: 'move' },
        stepDescription: {
            type: 'String',
            value: 'Move Document to XYZ Contract Folder',
        },
        sourceDocument: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        targetFolder: {
            type: 'Folder',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'ContractFolder' },
                },
            ],
        },
        outputDocuments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Copy or Move\nDocument 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Move Document to XYZ\nContract Folder',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 93, height: 93 },
        type: 'springcm.Diamond',
        content: '',
        position: { x: 173, y: 483 },
        angle: 0,
        activityName: 'DecisionActivity',
        group: 'engineActivities',
        icon: { path: 'rule.svg#Dark', color: '#29bdbe' },
        id: '57c4d9d8-7a6c-4b77-a696-dc69d152dcbf',
        z: 2000018,
        name: { type: 'String', value: 'Decision 1' },
        stepDescription: {
            type: 'String',
            value: 'First or Third Party',
        },
        decisions: {
            type: 'Decisions',
            value: {
                decisions: [
                    {
                        condition: {
                            conditions: [
                                {
                                    leftOperand: {
                                        type: 'Variable',
                                        value: {
                                            type: 'String',
                                            value: 'FirstOrThirdParty',
                                        },
                                    },
                                    comparisonOperator: 'equals',
                                    rightOperand: {
                                        type: 'String',
                                        value: 'First',
                                    },
                                    guid: 'e936ba8d-1586-4cd8-89d3-0d0b39874fe9',
                                },
                            ],
                            logicalOperator: '',
                            guid: 'f94617a3-bd07-4f95-b41d-7869b4a738c1',
                        },
                        output: {
                            type: 'Output',
                            value: {
                                name: 'First',
                                referenceKey:
                                    '3f2aa556-2eef-4aa3-b537-81a91ce60a06',
                            },
                        },
                    },
                ],
                elseOutput: {
                    type: 'Output',
                    value: {
                        name: 'Third',
                        referenceKey: '9f25f161-0429-4b9f-b7a8-bc9bb59fda4f',
                    },
                },
            },
        },
        attrs: {
            '.step-container': { 'data-error-state': false },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Decision 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 110.125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -55.0625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'First or Third Party',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href': '/atlassupport/scripts/jointjs/svg/rule.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe', 'data-error-state': 'true' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 165, y: 231 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '45ebec4a-d3bc-4ec2-874c-e0cbbbd96367',
        z: 2000019,
        name: { type: 'String', value: 'Update Variable From CSV 1' },
        stepDescription: { type: 'String', value: 'Route to Legal' },
        fieldId: { type: 'String', value: 'Department' },
        fieldValue: { type: 'String', value: 'Legal' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/DSU Training Account/Admin/Workflow/Contract Management/CSV Mapping Files/XYZ Department Approver-Signer.csv',
                },
            ],
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Legal' },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Approver',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 89.390625,
                height: 26,
                rx: 3,
                ry: 3,
                x: -44.6953125,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Route to Legal',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 166, y: 728 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: 'b1035f75-832b-4797-8f64-ce30c15d1d7f',
        z: 2000022,
        name: { type: 'String', value: 'Update Variable Value 2' },
        notifyOnException: { type: 'Bool', value: true },
        stepDescription: {
            type: 'String',
            value: 'Update Variables',
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'FirstOrThirdParty',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.First_or_Third_party',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Subject' },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'ConfigEForm.Documents.Document.CustomFormFields.Subject',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'Body' },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'ConfigEForm.Documents.Document.CustomFormFields.Body',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'ApproverInstructions',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'ConfigEForm.Documents.Document.CustomFormFields.ApproverInstructions',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'VendorEmail',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Representative_Information.Representative_Container.Email',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'RepFirstName',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Representative_Information.Representative_Container.Representative_First_Name',
                        },
                    },
                },
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'RepLastName',
                        },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Representative_Information.Representative_Container.Representative_Last_Name',
                        },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 103.671875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -51.8359375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Update Variables',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 615, y: 260 },
        angle: 0,
        activityName: 'ChoiceActivity',
        group: 'engineActivities',
        icon: {
            path: 'approve_documents.svg#Dark',
            color: '#29bdbe',
        },
        id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
        z: 2000023,
        name: { type: 'String', value: 'Choice 2' },
        stepDescription: {
            type: 'String',
            value: 'Decide next step',
        },
        activityDisplayName: { type: 'String', value: '' },
        stageName: { type: 'String', value: '' },
        instructions: { type: 'String', value: '' },
        notificationSubject: { type: 'String', value: '' },
        compareVersion: { type: 'Bool', value: false },
        assigneeType: { type: 'String', value: 'user' },
        assignedUsers: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'String', value: 'Legal' },
                },
            ],
        },
        requiredCompletion: { type: 'Number', value: 1 },
        addCustomAction: { type: 'Bool', value: false },
        allowComment: { type: 'String', value: 'Yes' },
        waitForNextStep: { type: 'Bool', value: false },
        timeout: { type: 'Timers', value: [] },
        timeoutWarningFromStepExecution: {
            type: 'Bool',
            value: false,
        },
        timers: { type: 'Timers', value: [] },
        outputs: {
            type: 'Outputs',
            value: [
                {
                    type: 'Output',
                    value: {
                        name: 'Send to Vendor for Review',
                        referenceKey: '9ef391ef-03ad-43aa-ae40-a73e114fcd4e',
                    },
                },
                {
                    type: 'Output',
                    value: {
                        name: 'Send to Internal User for Review',
                        referenceKey: 'fce8d7cc-2b99-4d5b-a84f-5a93218cad0f',
                    },
                },
                {
                    type: 'Output',
                    value: {
                        name: 'Send for Signature',
                        referenceKey: '10ba1c2f-27c5-404d-838b-287561b62286',
                    },
                },
                {
                    type: 'Output',
                    value: {
                        name: 'Reject Document',
                        referenceKey: '5ec0fb7f-d505-4865-9272-4054f8a34258',
                    },
                },
            ],
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Choice 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 101.671875,
                height: 26,
                rx: 3,
                ry: 3,
                x: -50.8359375,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Decide next step',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/approve_documents.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 427, y: 481 },
        angle: 0,
        activityName: 'UpdateVariableFromCSVActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_xml_variable_from_csv.svg#Dark',
            color: '#d13393',
        },
        id: '36c9b878-fe25-4eb0-bf8f-ea4ce47554a5',
        name: { type: 'String', value: 'Update Variable From CSV 2' },
        stepDescription: {
            type: 'String',
            value: 'Route to Sales Manager',
        },
        fieldId: { type: 'String', value: 'Department' },
        fieldValue: { type: 'String', value: 'Sales Manager' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/DSU Training Account/Admin/Workflow/Contract Management/CSV Mapping Files/XYZ Department Approver-Signer.csv',
                },
            ],
        },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'SalesManager',
                        },
                    },
                    variableValue: {
                        type: 'String',
                        value: 'Approver',
                    },
                },
            ],
        },
        z: 2000024,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nFrom CSV 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 140.078125,
                height: 26,
                rx: 3,
                ry: 3,
                x: -70.0390625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Route to Sales Manager',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_xml_variable_from_csv.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 427, y: 230 },
        angle: 0,
        activityName: 'SendForExternalReviewNewActivity',
        group: 'engineActivities',
        icon: {
            path: 'send_for_external_review.svg#Dark',
            color: '#1b9d1d',
        },
        id: 'fb8428ff-6869-45da-b055-9589e0152fa4',
        z: 2000025,
        name: { type: 'String', value: 'Send for External Review 3' },
        stepDescription: {
            type: 'String',
            value: 'Route to Legal for Review',
        },
        stageName: { type: 'String', value: '' },
        subject: { type: 'String', value: '<%#Variable.Subject%>' },
        expirationDays: { type: 'String', value: '' },
        hideDueDateFromEmail: { type: 'Bool', value: false },
        addMySignatureToThisEmail: { type: 'Bool', value: false },
        sendOutNotifications: { type: 'Bool', value: false },
        emailAppearance: { type: 'Number', value: 0 },
        dateFormat: { type: 'String', value: 'en-US' },
        suppressSenderEmails: { type: 'Bool', value: false },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        sender: {
            type: 'Participant',
            value: [
                {
                    type: 'User',
                    value: {
                        type: 'Guid',
                        value: '93e42a3f-e9b8-eb11-b81a-48df378a7098',
                    },
                },
            ],
        },
        notes: {
            type: 'String',
            value: '<p>&lt;%#Variable.Body%&gt;</p>',
        },
        recipient: {
            type: 'Participant',
            value: [
                {
                    type: 'User',
                    value: {
                        type: 'Guid',
                        value: '93e42a3f-e9b8-eb11-b81a-48df378a7098',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Send for\nExternal Review\n3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 146.609375,
                height: 26,
                rx: 3,
                ry: 3,
                x: -73.3046875,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Route to Legal for Review',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/send_for_external_review.svg#Dark',
            },
            svg: { color: '#1b9d1d', fill: '#fff' },
            rect: { fill: '#1b9d1d', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 405, y: 946 },
        angle: 0,
        activityName: 'FindDocumentActivity',
        group: 'engineActivities',
        icon: { path: 'find_document.svg#Dark', color: '#2BBCB6' },
        id: '269d8919-2a38-4e3f-b9c1-5be868985794',
        z: 2000026,
        name: { type: 'String', value: 'Find Document 1' },
        stepDescription: {
            type: 'String',
            value: 'Find Config Eform',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'String',
                    value: '/DSU Training Account/Admin/Workflow/Contract Management/Email Settings/XYZ Task Assignment Email Settings.sxform',
                },
            ],
        },
        outputDocuments: {
            type: 'Variable',
            value: { type: 'Xml', value: 'ConfigEForm' },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Find Document 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 107.609375,
                height: 26,
                rx: 3,
                ry: 3,
                x: -53.8046875,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Find Config Eform',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/find_document.svg#Dark',
            },
            svg: { color: '#2BBCB6', fill: '#fff' },
            rect: { fill: '#2BBCB6' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1232, y: 43 },
        angle: 0,
        activityName: 'UpdateDocumentKeywordActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'd175ae11-a828-4416-a02a-bb996bfd15cf',
        z: 2000028,
        name: { type: 'String', value: 'Update Document Keywords 1' },
        stepDescription: {
            type: 'String',
            value: 'Show signed in description',
        },
        keywords: { type: 'String', value: 'Signed' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nKeywords 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Show signed in\ndescription',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1722, y: 44 },
        angle: 0,
        activityName: 'UpdateDocumentMetadataActivity',
        group: 'engineActivities',
        icon: { path: 'update_metadata.svg#Dark', color: '#CC3791' },
        id: 'f1a4aa85-0a93-44a6-bc1a-1437a7aa71b7',
        z: 2000029,
        name: {
            type: 'String',
            value: 'Update Document Metadata Value 1',
        },
        stepDescription: {
            type: 'String',
            value: 'Add Signed Date Metadata',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        metadata: {
            type: 'MetadataUpdate',
            value: [
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Signed Date',
                                    groupName: 'General Details',
                                    setName: null,
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'SignedDate' },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nMetadata Value 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Add Signed Date\nMetadata',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_metadata.svg#Dark',
            },
            svg: { color: '#CC3791', fill: '#fff' },
            rect: { fill: '#CC3791' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1459, y: 40 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '533922e8-71b3-4d57-b33f-830a9c2b943c',
        z: 2000030,
        name: { type: 'String', value: 'Update Variable Value 3' },
        stepDescription: {
            type: 'String',
            value: 'Update Signed Date',
        },
        notifyOnException: { type: 'Bool', value: true },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'SignedDate' },
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'System', value: 'Date' },
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 121.25,
                height: 26,
                rx: 3,
                ry: 3,
                x: -60.625,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Update Signed Date',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: 1963, y: 329 },
        angle: 0,
        activityName: 'EndActivity',
        group: 'engineActivities',
        icon: { path: 'finish.svg#Dark', color: 'white' },
        id: '66b2bd42-9677-4a30-b806-df4d56a227c9',
        z: 2000031,
        name: { type: 'String', value: 'Finish 2' },
        stepDescription: { type: 'String', value: '' },
        attrs: {
            '.circle-container': {
                fill: '#29bdbe',
                class: 'circle-container theme_primary_fill',
            },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Finish 2',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/finish.svg#Dark',
            },
            svg: { color: 'white' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 992, y: 259 },
        angle: 0,
        activityName: 'ApproveDocumentsActivity',
        group: 'engineActivities',
        icon: {
            path: 'approve_documents.svg#Dark',
            color: '#29bdbe',
        },
        id: '59155a83-e8da-4d85-8b5a-766948d2401f',
        z: 2000032,
        name: { type: 'String', value: 'Approve 1' },
        stepDescription: {
            type: 'String',
            value: 'Send to Internal User to Approve',
        },
        activityDisplayName: { type: 'String', value: '' },
        stageName: { type: 'String', value: '' },
        instructions: { type: 'String', value: '' },
        approveText: { type: 'String', value: '' },
        rejectText: { type: 'String', value: '' },
        notificationSubject: { type: 'String', value: '' },
        checkoutDocuments: { type: 'Bool', value: false },
        compareVersion: { type: 'Bool', value: false },
        assigneeType: { type: 'String', value: 'user' },
        assignedUsers: {
            type: 'Participant',
            value: [
                {
                    type: 'User',
                    value: {
                        type: 'Guid',
                        value: '93e42a3f-e9b8-eb11-b81a-48df378a7098',
                    },
                },
            ],
        },
        requiredCompletion: { type: 'Number', value: 1 },
        assignedUsersInOrder: { type: 'Bool', value: false },
        addCustomAction: { type: 'Bool', value: false },
        allowComment: { type: 'String', value: 'Yes' },
        waitForNextStep: { type: 'Bool', value: false },
        timeout: { type: 'Timers', value: [] },
        timeoutWarningFromStepExecution: {
            type: 'Bool',
            value: false,
        },
        timers: { type: 'Timers', value: [] },
        requiredApprovalCount: { type: 'Number', value: 1 },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Approve 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Send to Internal User to\nApprove',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/approve_documents.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 816, y: 566 },
        angle: 0,
        activityName: 'SendForExternalReviewNewActivity',
        group: 'engineActivities',
        icon: {
            path: 'send_for_external_review.svg#Dark',
            color: '#1b9d1d',
        },
        id: '5f2195f3-6acf-4db4-a4f6-df904c1a1bca',
        z: 2000034,
        name: { type: 'String', value: 'Send for External Review 4' },
        stepDescription: {
            type: 'String',
            value: 'Send to Vendor for External Review',
        },
        stageName: { type: 'String', value: '' },
        subject: { type: 'String', value: '<%#Variable.Subject%>' },
        expirationDays: { type: 'String', value: '' },
        hideDueDateFromEmail: { type: 'Bool', value: false },
        addMySignatureToThisEmail: { type: 'Bool', value: false },
        sendOutNotifications: { type: 'Bool', value: false },
        emailAppearance: { type: 'Number', value: 0 },
        dateFormat: { type: 'String', value: 'en-US' },
        suppressSenderEmails: { type: 'Bool', value: false },
        sender: {
            type: 'Participant',
            value: [
                {
                    type: 'User',
                    value: {
                        type: 'Guid',
                        value: '93e42a3f-e9b8-eb11-b81a-48df378a7098',
                    },
                },
            ],
        },
        recipient: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'String', value: 'VendorEmail' },
                },
            ],
        },
        notes: {
            type: 'String',
            value: '<p>&lt;%#Variable.Body%&gt;</p>',
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Send for\nExternal Review\n4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Send to Vendor for\nExternal Review',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/send_for_external_review.svg#Dark',
            },
            svg: { color: '#1b9d1d', fill: '#fff' },
            rect: { fill: '#1b9d1d', 'data-error-state': 'true' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1966, y: 44 },
        angle: 0,
        activityName: 'SendEmailActivity',
        group: 'engineActivities',
        icon: { path: 'email.svg#Dark', color: '#f15a22' },
        id: 'f4cee5f7-a2a3-43ea-b3ff-7511386336d2',
        z: 2000035,
        name: { type: 'String', value: 'Email 1' },
        stepDescription: {
            type: 'String',
            value: 'Send Final Email',
        },
        subject: { type: 'String', value: 'Completed: Thank You' },
        from: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'String', value: 'Legal' },
                },
            ],
        },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'String', value: 'VendorEmail' },
                },
            ],
        },
        body: {
            type: 'String',
            value: '<p>Thank you for completing the signing process.</p>',
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Email 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 99.859375,
                height: 26,
                rx: 3,
                ry: 3,
                x: -49.9296875,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Send Final Email',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email.svg#Dark',
            },
            svg: { color: '#f15a22', fill: '#fff' },
            rect: { fill: '#f15a22' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 164, y: 951 },
        angle: 0,
        activityName: 'UpdateDocumentMetadataActivity',
        group: 'engineActivities',
        icon: { path: 'update_metadata.svg#Dark', color: '#CC3791' },
        id: 'c12fa069-49b4-4822-9fce-870cb3c3f600',
        z: 2000036,
        name: {
            type: 'String',
            value: 'Update Document Metadata Value 2',
        },
        stepDescription: { type: 'String', value: '' },
        metadata: {
            type: 'MetadataUpdate',
            value: [
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Signed Date',
                                    groupName: 'Vendor Details',
                                    setName: null,
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'Xml',
                            value: 'Params.Params.TemplateFieldData.Effective_Date',
                        },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Vendor Name',
                                    groupName: 'Vendor Details',
                                    setName: null,
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: { type: 'String', value: 'VendorName' },
                    },
                },
                {
                    metadataToConfigure: {
                        type: 'MetadataField',
                        value: [
                            {
                                type: 'Object',
                                value: {
                                    name: 'Contact Email',
                                    groupName: 'Vendor Details',
                                    setName: null,
                                },
                            },
                        ],
                    },
                    variableValue: {
                        type: 'Variable',
                        value: {
                            type: 'String',
                            value: 'VendorEmail',
                        },
                    },
                },
            ],
        },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nMetadata Val…',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_metadata.svg#Dark',
            },
            svg: { color: '#CC3791', fill: '#fff' },
            rect: { fill: '#CC3791' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: 1308, y: 581 },
        angle: 0,
        activityName: 'EndActivity',
        group: 'engineActivities',
        icon: { path: 'finish.svg#Dark', color: 'white' },
        id: '4b6cdb33-1565-41a2-a593-c7579b6b1d25',
        z: 2000037,
        name: { type: 'String', value: 'Finish 1' },
        stepDescription: { type: 'String', value: '' },
        attrs: {
            '.circle-container': {
                fill: '#29bdbe',
                class: 'circle-container theme_primary_fill',
            },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Finish 1',
                lineHeight: '1.4em',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/finish.svg#Dark',
            },
            svg: { color: 'white' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 809, y: -256 },
        angle: 0,
        activityName: 'UpdateDocumentKeywordActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '140a916c-0152-40dd-a0b6-c2d303b084c9',
        name: { type: 'String', value: 'Update Document Keywords 2' },
        stepDescription: {
            type: 'String',
            value: 'Show Cancelled or Failure in description',
        },
        keywords: { type: 'String', value: 'Cancelled or Failure' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        z: 2000038,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nKeywords 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Show Cancelled or Failure\nin description',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 974, y: -254 },
        angle: 0,
        activityName: 'UpdateDocumentKeywordActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: 'f9b62e10-69db-4212-9e92-0b8db6287cce',
        name: { type: 'String', value: 'Update Document Keywords 3' },
        stepDescription: {
            type: 'String',
            value: 'Show Rejected in description',
        },
        keywords: { type: 'String', value: 'Rejected' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        z: 2000039,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nKeywords 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Show Rejected in\ndescription',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 652, y: 570 },
        angle: 0,
        activityName: 'UpdateDocumentKeywordActivity',
        group: 'engineActivities',
        icon: {
            path: 'copy_move_document.svg#Dark',
            color: '#f7b618',
        },
        id: '6232dfb0-94fd-40fa-a040-01df0209bb0d',
        name: { type: 'String', value: 'Update Document Keywords 4' },
        stepDescription: {
            type: 'String',
            value: 'Show under review in description',
        },
        keywords: { type: 'String', value: 'Under Review' },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        z: 2000041,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update\nDocument\nKeywords 4',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 28,
            },
            '.descriptionbox': {
                width: 150,
                height: 40,
                rx: 3,
                ry: 3,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Show under review in\ndescription',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/copy_move_document.svg#Dark',
            },
            svg: { color: '#f7b618', fill: '#fff' },
            rect: { fill: '#f7b618' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 800, y: 44 },
        angle: 0,
        activityName: 'ReviewAndSendForSignatureActivity',
        group: 'engineActivities',
        icon: {
            path: 'review_and_send_for_signature.svg#Dark',
            color: '#ecb900',
        },
        id: '51348a7c-993d-4784-a70f-cebaeb597a34',
        z: 2000044,
        name: {
            type: 'String',
            value: 'Review and Send for Signature 1',
        },
        useDSTemplates: { type: 'String', value: 'document' },
        assigneeType: { type: 'String', value: 'user' },
        assignedUsers: {
            type: 'Participant',
            value: [
                {
                    type: 'User',
                    value: {
                        type: 'Guid',
                        value: '93e42a3f-e9b8-eb11-b81a-48df378a7098',
                    },
                },
            ],
        },
        signaturesOrdered: { type: 'Bool', value: true },
        writtenRequired: { type: 'Bool', value: false },
        allowComment: { type: 'String', value: 'Yes' },
        waitForNextStep: { type: 'Bool', value: false },
        timeout: { type: 'Timers', value: [] },
        timeoutWarningFromStepExecution: {
            type: 'Bool',
            value: false,
        },
        timers: { type: 'Timers', value: [] },
        stepDescription: { type: 'String', value: '' },
        activityDisplayName: { type: 'String', value: '' },
        stageName: { type: 'String', value: '' },
        signatureSubject: {
            type: 'Expression',
            value: {
                code: 'return GetVariableValue("Subject");',
                returnType: 'System.Object',
                additionalCode: '',
            },
        },
        message: {
            type: 'String',
            value: 'The Vendor Agreement is ready for signature.',
        },
        instructions: { type: 'String', value: '' },
        expirationDays: { type: 'String', value: '' },
        password: { type: 'String', value: '' },
        rejectText: { type: 'String', value: 'Reject Request' },
        notificationSubject: { type: 'String', value: '' },
        document: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        sender: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'String', value: 'Legal' },
                },
            ],
        },
        esignatureRecipients: {
            type: 'ESignatureParticipant',
            value: [
                {
                    type: 'ESignatureRecipient',
                    value: {
                        recipientAuthenticationType: {
                            type: 'String',
                            value: 'None',
                        },
                        recipientAuthenticationPhoneNumber: {
                            type: 'String',
                            value: '',
                        },
                        recipientAuthenticationAccessCode: {
                            type: 'String',
                            value: '',
                        },
                        allowRecipientToProvidePhoneNumber: {
                            type: 'Bool',
                            value: false,
                        },
                        authenticationType: 'None',
                        recipient: {
                            type: 'Expression',
                            value: {
                                code: 'return GetVariableValue("VendorEmail");',
                                returnType: 'System.Object',
                                additionalCode: '',
                            },
                        },
                        recipientType: {
                            type: 'String',
                            value: 'Signer',
                        },
                        firstName: {
                            type: 'Expression',
                            value: {
                                code: 'return GetVariableValue("RepFirstName");',
                                returnType: 'System.Object',
                                additionalCode: '',
                            },
                        },
                        lastName: {
                            type: 'Expression',
                            value: {
                                code: 'return GetVariableValue("RepLastName");',
                                returnType: 'System.Object',
                                additionalCode: '',
                            },
                        },
                        templateRole: {
                            type: 'String',
                            value: 'Vendor',
                        },
                        signingOrder: { type: 'Number', value: 1 },
                    },
                },
                {
                    type: 'ESignatureRecipient',
                    value: {
                        recipient: {
                            type: 'Variable',
                            value: { type: 'String', value: 'Legal' },
                        },
                        lastName: {
                            type: 'String',
                            value: 'Cisneros',
                        },
                        recipientAuthenticationType: {
                            type: 'String',
                            value: 'None',
                        },
                        recipientAuthenticationPhoneNumber: {
                            type: 'String',
                            value: '',
                        },
                        recipientAuthenticationAccessCode: {
                            type: 'String',
                            value: '',
                        },
                        allowRecipientToProvidePhoneNumber: {
                            type: 'Bool',
                            value: false,
                        },
                        recipientType: {
                            type: 'String',
                            value: 'Signer',
                        },
                        authenticationType: 'None',
                        firstName: { type: 'String', value: 'Tim' },
                        templateRole: {
                            type: 'String',
                            value: 'XYZ',
                        },
                        signingOrder: { type: 'Number', value: 2 },
                    },
                },
            ],
        },
        esignatureTemplates: {
            type: 'ESignatureTemplates',
            value: [],
        },
        notificationFromAddress: { type: 'Participant', value: [] },
        notificationBody: { type: 'String', value: '' },
        outputComments: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Review and Send\nfor Signature 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/review_and_send_for_signature.svg#Dark',
            },
            svg: { color: '#ecb900', fill: '#fff' },
            rect: { fill: '#ecb900' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 1025, y: 43 },
        angle: 0,
        activityName: 'WaitForSignatureActivity',
        group: 'engineActivities',
        icon: {
            path: 'wait_for_signature.svg#Dark',
            color: '#1b9d1d',
        },
        id: '025d7b07-5695-445d-ae50-390679cc69dd',
        z: 2000045,
        name: { type: 'String', value: 'Wait for Signature 1' },
        timers: { type: 'Timers', value: [] },
        stepDescription: { type: 'String', value: '' },
        stageName: { type: 'String', value: '' },
        signatureAuditEventsText: {
            type: 'String',
            value: 'None, Sent, Viewed, Signed, Rejected, Delegated, EmailBounced, Sealed',
        },
        document: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        sender: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'User', value: 'SubmittedBy' },
                },
            ],
        },
        signatureAuditInfoXmlVariable: { type: 'Variable' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Wait for\nSignature 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/wait_for_signature.svg#Dark',
            },
            svg: { color: '#1b9d1d', fill: '#fff' },
            rect: { fill: '#1b9d1d' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: '3dde6bdb-a250-4c53-bd77-a6fbce6be7b0',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '72281a32-8585-40ba-89ee-8c86b62e8f4a',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '319a17b2-3d5e-4283-8c2d-ceec41883ed5',
        z: 3000001,
        name: { type: 'String', value: 'Link 3' },
        vertices: [],
        output: { type: 'String', value: 'success' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '57c4d9d8-7a6c-4b77-a696-dc69d152dcbf',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '45ebec4a-d3bc-4ec2-874c-e0cbbbd96367',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5e9034bf-05b9-4b71-99e2-8c93a9f68203',
        z: 3000005,
        name: { type: 'String', value: 'Link 12' },
        vertices: [],
        output: {
            type: 'Reference',
            value: '3f2aa556-2eef-4aa3-b537-81a91ce60a06',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1a0f49a7-2100-4369-b789-6d91d3285f34',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'c12fa069-49b4-4822-9fce-870cb3c3f600',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '31692f87-394f-4bf6-a0eb-4a55b54dfdcf',
        z: 3000008,
        name: { type: 'String', value: 'Link 7' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'b1035f75-832b-4797-8f64-ce30c15d1d7f',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '57c4d9d8-7a6c-4b77-a696-dc69d152dcbf',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c810d0f3-c6ef-46d4-a4cc-7d4af4e2db8a',
        z: 3000009,
        name: { type: 'String', value: 'Link 14' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '45ebec4a-d3bc-4ec2-874c-e0cbbbd96367',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'nw',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(1)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '7c8df5a8-6d0c-4108-9e40-eccf6a7de679',
        z: 3000012,
        name: { type: 'String', value: 'Link 13' },
        vertices: [{ x: 219, y: 207 }],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '57c4d9d8-7a6c-4b77-a696-dc69d152dcbf',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '36c9b878-fe25-4eb0-bf8f-ea4ce47554a5',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'd89a836b-62cd-4e40-89a1-17ff2220db56',
        z: 3000013,
        name: { type: 'String', value: 'Link 15' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: '9f25f161-0429-4b9f-b7a8-bc9bb59fda4f',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '269d8919-2a38-4e3f-b9c1-5be868985794',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'b1035f75-832b-4797-8f64-ce30c15d1d7f',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'a1bac0aa-dfd4-4cbe-b7c8-5dfbeeb38581',
        z: 3000014,
        name: { type: 'String', value: 'Link 16' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '36c9b878-fe25-4eb0-bf8f-ea4ce47554a5',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: 'fb8428ff-6869-45da-b055-9589e0152fa4',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '819a64b6-8110-4485-b327-af60fc7e7c00',
        z: 3000015,
        name: { type: 'String', value: 'Link 17' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'fb8428ff-6869-45da-b055-9589e0152fa4',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        target: {
            id: '45ebec4a-d3bc-4ec2-874c-e0cbbbd96367',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8f8f8e18-637b-4194-ac0b-dc9a920a175e',
        z: 3000016,
        name: { type: 'String', value: 'Link 18' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'completed with Document' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'd175ae11-a828-4416-a02a-bb996bfd15cf',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '533922e8-71b3-4d57-b33f-830a9c2b943c',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '967a1530-0ba2-468f-b76e-37b22cb04a22',
        z: 3000022,
        name: { type: 'String', value: 'Link 22' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'success' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '533922e8-71b3-4d57-b33f-830a9c2b943c',
            port: 'e',
        },
        target: {
            id: 'f1a4aa85-0a93-44a6-bc1a-1437a7aa71b7',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '04f31b9f-20b8-4841-8563-2d3a49ca9bd1',
        z: 3000023,
        name: { type: 'String', value: 'Link 23' },
        vertices: [],
        description: { type: 'String', value: '' },
        output: { type: 'String', value: 'updated' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '59155a83-e8da-4d85-8b5a-766948d2401f',
            port: 'nw',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(1)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'en',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(7)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8e31d9d8-0804-4b74-9e83-492e1663401b',
        z: 3000030,
        name: { type: 'String', value: 'Link 20' },
        vertices: [{ x: 955, y: 263 }],
        output: { type: 'String', value: 'approved' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'sw',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(10)',
        },
        target: {
            id: '6232dfb0-94fd-40fa-a040-01df0209bb0d',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5b4b9c97-7a76-4efc-b8e9-83f381eb67e7',
        z: 3000034,
        name: { type: 'String', value: 'Link 27' },
        vertices: [],
        output: {
            type: 'Reference',
            value: '9ef391ef-03ad-43aa-ae40-a73e114fcd4e',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '5f2195f3-6acf-4db4-a4f6-df904c1a1bca',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'es',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(9)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '065ca244-b2e9-4f6e-95ad-5f25a2c58169',
        z: 3000036,
        name: { type: 'String', value: 'Link 28' },
        vertices: [{ x: 915, y: 420 }],
        output: { type: 'String', value: 'completed with Document' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '59155a83-e8da-4d85-8b5a-766948d2401f',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '7bf4b210-c1c0-4511-8a70-1a0cc2e7efb7',
        z: 3000038,
        name: { type: 'String', value: 'Link 25' },
        vertices: [{ x: 825, y: 351 }],
        description: { type: 'String', value: '' },
        output: {
            type: 'Reference',
            value: 'fce8d7cc-2b99-4d5b-a84f-5a93218cad0f',
        },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'f1a4aa85-0a93-44a6-bc1a-1437a7aa71b7',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'f4cee5f7-a2a3-43ea-b3ff-7511386336d2',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '8b894912-9a1a-46a0-b207-f8192efd0ea7',
        z: 3000047,
        name: { type: 'String', value: 'Link 9' },
        vertices: [],
        output: { type: 'String', value: 'success' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'f4cee5f7-a2a3-43ea-b3ff-7511386336d2',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '66b2bd42-9677-4a30-b806-df4d56a227c9',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ba2ca050-28e2-4f11-9c81-9f4e7155c39d',
        z: 3000048,
        name: { type: 'String', value: 'Link 10' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'c12fa069-49b4-4822-9fce-870cb3c3f600',
            port: 'e',
        },
        target: {
            id: '269d8919-2a38-4e3f-b9c1-5be868985794',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5c80fd1b-04ca-4d7c-8923-4466d70d86e2',
        z: 3000054,
        name: { type: 'String', value: 'Link 21' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'se',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(12)',
        },
        target: {
            id: '4b6cdb33-1565-41a2-a593-c7579b6b1d25',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '66f885d0-d4e5-402e-9074-b99bc7c83b7a',
        z: 3000055,
        name: { type: 'String', value: 'Link 24' },
        vertices: [{ x: 1361, y: 507 }],
        output: {
            type: 'Reference',
            value: '5ec0fb7f-d505-4865-9272-4054f8a34258',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '140a916c-0152-40dd-a0b6-c2d303b084c9',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '96696498-53dd-4a52-870d-63cd5e7f7bbe',
        z: 3000059,
        name: { type: 'String', value: 'Link 31' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'f9b62e10-69db-4212-9e92-0b8db6287cce',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c0e069a1-5a69-4c24-89fd-5004e040b110',
        z: 3000062,
        name: { type: 'String', value: 'Link 32' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '5f2195f3-6acf-4db4-a4f6-df904c1a1bca',
            port: 'nw',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(1)',
        },
        target: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'se',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(12)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6232100a-dcaa-41bd-ab78-d9d5b3d36bd4',
        z: 3000063,
        name: { type: 'String', value: 'Link 33' },
        vertices: [{ x: 750, y: 441 }],
        output: {
            type: 'String',
            value: 'completed without Document',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '6232dfb0-94fd-40fa-a040-01df0209bb0d',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '5f2195f3-6acf-4db4-a4f6-df904c1a1bca',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'd8421b99-6008-423b-92c2-20eccece2fc1',
        z: 3000066,
        name: { type: 'String', value: 'Link 34' },
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '00b0ef8c-70b7-46d9-ab25-1988d4bd30b2',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '51348a7c-993d-4784-a70f-cebaeb597a34',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '2cd5cc17-7ee3-4e5b-861d-ede3035abeda',
        z: 3000067,
        name: { type: 'String', value: 'Link 5' },
        vertices: [],
        output: {
            type: 'Reference',
            value: '10ba1c2f-27c5-404d-838b-287561b62286',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '51348a7c-993d-4784-a70f-cebaeb597a34',
            port: 'nw',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(1)',
        },
        target: {
            id: '140a916c-0152-40dd-a0b6-c2d303b084c9',
            port: 'wn',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(4)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'ef01942b-7f35-4daf-9a30-5818d81ad104',
        z: 3000068,
        name: { type: 'String', value: 'Link 6' },
        vertices: [{ x: 730, y: -21 }],
        output: { type: 'String', value: 'failure' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '51348a7c-993d-4784-a70f-cebaeb597a34',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        target: {
            id: '140a916c-0152-40dd-a0b6-c2d303b084c9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '1c50efbd-4cda-460c-9179-bd89e3b8e0f9',
        z: 3000069,
        name: { type: 'String', value: 'Link 8' },
        vertices: [],
        output: { type: 'String', value: 'action canceled' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '51348a7c-993d-4784-a70f-cebaeb597a34',
            port: 'ne',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(3)',
        },
        target: {
            id: 'f9b62e10-69db-4212-9e92-0b8db6287cce',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '1ca9e83a-4a8e-4536-ae7f-108d9dc3580d',
        z: 3000070,
        name: { type: 'String', value: 'Link 11' },
        vertices: [{ x: 1023, y: -2 }],
        output: {
            type: 'String',
            value: 'action Completed - Rejected by Sender',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '51348a7c-993d-4784-a70f-cebaeb597a34',
            port: 'e',
        },
        target: {
            id: '025d7b07-5695-445d-ae50-390679cc69dd',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'caad2a32-1714-4d27-a552-7bd25bb70ddb',
        z: 3000072,
        name: { type: 'String', value: 'Link 19' },
        vertices: [],
        output: {
            type: 'String',
            value: 'action Completed - Sent by Sender',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '025d7b07-5695-445d-ae50-390679cc69dd',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: 'd175ae11-a828-4416-a02a-bb996bfd15cf',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'b69ff14c-6102-4743-93be-90edc6a087ba',
        z: 3000073,
        name: { type: 'String', value: 'Link 26' },
        vertices: [],
        output: { type: 'String', value: 'signed' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
];

const internalApproval = [
    {
        type: 'springcm.Link',
        source: {
            id: '8a0cda0e-de7d-416f-8ee6-b42e19608005',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(5)',
        },
        target: {
            id: '197629ce-c911-4eb4-99f7-ca3ba51da717',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        id: 'a675642d-3a23-4e36-8b24-e53cca2504a3',
        name: { type: 'String', value: 'Link 1' },
        router: {
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            name: 'manhattan',
        },
        z: 1000001,
        vertices: [],
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'a25e4a95-91f0-4f76-9b07-2b9ed3b1e4b4',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        id: '5f9fdcd5-21ac-426a-9b86-ed599bc3549b',
        name: { type: 'String', value: 'Link 4' },
        router: {
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            name: 'manhattan',
        },
        z: 1000004,
        vertices: [],
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'e755ecf9-7110-45a6-a797-3b8299005615',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        id: 'e61676da-0a85-410f-854e-0bc900ba2e9d',
        name: { type: 'String', value: 'Link 5' },
        router: {
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            name: 'manhattan',
        },
        z: 1000005,
        vertices: [],
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'e',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(8)',
        },
        target: {
            id: '5684326f-c94a-4080-8fe4-301f12415957',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(4)',
        },
        description: { type: 'String', value: '' },
        id: 'ccaaec27-0059-4852-a13f-f7c18e0840b6',
        name: { type: 'String', value: 'Link 7' },
        output: { type: 'String', value: 'false' },
        router: {
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            name: 'manhattan',
        },
        vertices: [],
        z: 1000007,
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '4dd099df-014c-49c7-bc1e-bf93297a4a36',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        target: {
            id: '5684326f-c94a-4080-8fe4-301f12415957',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(5) > circle:nth-child(2)',
        },
        id: '81c907e1-9034-475b-90c0-3211113012c4',
        name: { type: 'String', value: 'Link 8' },
        router: {
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            name: 'manhattan',
        },
        z: 1000008,
        vertices: [],
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
            port: 'en',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(7)',
        },
        target: {
            id: 'c1db9dc0-0aec-4f51-951a-9de7975089b2',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '696e0691-ecee-42ae-ab06-617db79bf698',
        z: 1000009,
        name: { type: 'String', value: 'Link 9' },
        vertices: [],
        output: { type: 'String', value: 'failure' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: -238, y: 405 },
        angle: 0,
        activityName: 'StartActivity',
        workflowTrigger: { templateTag: '#workflowTrigger' },
        definedVariables: {
            type: 'Variable',
            value: [
                {
                    type: 'Xml',
                    value: {
                        name: 'Params',
                        displayName: 'Params',
                        description: '',
                        displayType: 'Document',
                        schema: {
                            nodes: [
                                {
                                    name: 'Documents',
                                    nodes: [
                                        {
                                            name: 'Document',
                                            nodes: [
                                                {
                                                    name: 'Id',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'bf633762-6fc5-4465-98a6-79799658ca08',
                                                },
                                                {
                                                    name: 'Description',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '0d3e3ab6-fae6-4c62-8d0c-464362d0045b',
                                                },
                                                {
                                                    name: 'Name',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'ae1b5cbf-4d50-4542-9ba2-c4c6f763c467',
                                                },
                                                {
                                                    name: 'ParentFolderId',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: 'f1351503-2594-432d-bdfd-406efd6db8d3',
                                                },
                                                {
                                                    name: 'CreatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '1a06ef58-3299-4832-86df-dbf9c0313c19',
                                                },
                                                {
                                                    name: 'CreatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'f48622ad-961a-45e0-9544-e903e8738aa9',
                                                },
                                                {
                                                    name: 'ParentFolderName',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '5d9f132d-ab34-4fc5-a056-93cbfefb06cc',
                                                },
                                                {
                                                    name: 'UpdatedBy',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '589ce003-20cd-46ef-bf60-16bd00730793',
                                                },
                                                {
                                                    name: 'UpdatedDate',
                                                    dataType: 'dateTime',
                                                    type: 'element',
                                                    guid: 'f9c8d707-0496-464a-8568-4224239da7c3',
                                                },
                                                {
                                                    name: 'IsFormDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'ef141ee7-c555-47f6-ba26-f623e3ddb207',
                                                },
                                                {
                                                    name: 'IsTermDocument',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: 'b193b437-49e3-44c2-96c1-b925e1d62b4a',
                                                },
                                                {
                                                    name: 'EditDocumentURL',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '5abb8da1-edcf-47eb-a568-cd8ebe0cf2f7',
                                                },
                                                {
                                                    name: 'IsCheckedOut',
                                                    dataType: 'boolean',
                                                    type: 'element',
                                                    guid: '0b080bdb-851f-4bf9-8d89-076b7c5a77a3',
                                                },
                                                {
                                                    name: 'PageCount',
                                                    dataType: 'string',
                                                    type: 'element',
                                                    guid: '93a1a07e-a6e2-4bdf-8e11-aba19bfeff51',
                                                },
                                            ],
                                            guid: 'fc766609-7d8a-44a8-b9f4-d22340869206',
                                        },
                                    ],
                                    guid: 'a9fdeb8c-2a5a-4502-a95e-eb917eace134',
                                },
                            ],
                        },
                        sortable: false,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                        isContent: true,
                        isLocal: false,
                    },
                },
                {
                    type: 'User',
                    value: {
                        name: 'SubmittedBy',
                        displayName: 'Submitted By',
                        description: '',
                        displayType: 'Actor',
                        schema: {
                            name: 'UserAccount',
                            nodes: [
                                {
                                    name: 'Name',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '1d3e19c0-27ce-4f23-b87d-bbb7dde9b866',
                                },
                                {
                                    name: 'CreatedDate',
                                    dataType: 'dateTime',
                                    type: 'element',
                                    guid: 'bfe7b816-dfd8-462b-a78b-0d9fcb7d8635',
                                },
                                {
                                    name: 'Email',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '221db912-49fa-44bb-bb68-9a996d005163',
                                },
                                {
                                    name: 'FirstName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'b124545e-bba3-4520-b71a-e766e6da9c41',
                                },
                                {
                                    name: 'LastName',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '50279d0c-9790-4dce-a93f-44d252c884d1',
                                },
                                {
                                    name: 'ManagerUid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'b90c8ed0-bd11-42f2-a8fe-c6b82e148fd2',
                                },
                                {
                                    name: 'Role',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '606e7954-caba-4552-9697-60b01e3dedbd',
                                },
                                {
                                    name: 'Uid',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'a4a9982a-f134-4cbb-998e-2584792f3a4a',
                                },
                                {
                                    name: 'Language',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: 'c370670d-2fa0-4ec6-81e2-bb9a4d9118ac',
                                },
                                {
                                    name: 'Region',
                                    dataType: 'string',
                                    type: 'element',
                                    guid: '88d161ad-212f-434f-b814-28d971d4c29d',
                                },
                            ],
                        },
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'Comments',
                        displayName: 'Comments',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: true,
                        deletable: false,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Date',
                        displayName: 'Current Date',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Time',
                        displayName: 'Current Time',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'Link',
                        displayName: 'Current Step Link',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
                {
                    type: 'String',
                    value: {
                        name: 'EmailBody',
                        displayName: 'EmailBody',
                        description: '',
                        displayType: 'Text',
                        schema: {},
                        sortable: true,
                        editable: true,
                        editableValue: true,
                        deletable: true,
                        draggable: true,
                        preDefined: false,
                    },
                },
                {
                    type: 'System',
                    value: {
                        name: 'LastAbortEmail',
                        displayName: 'Last Abort Email',
                        description: '',
                        displayType: 'System',
                        schema: {},
                        sortable: false,
                        editable: false,
                        editableValue: false,
                        deletable: false,
                        draggable: true,
                        preDefined: true,
                    },
                },
            ],
        },
        group: 'hidden',
        icon: { color: 'white', path: 'start.svg#Dark' },
        id: '8a0cda0e-de7d-416f-8ee6-b42e19608005',
        name: { type: 'String', value: 'Start' },
        sendNotification: { type: 'Bool', value: false },
        trackActivity: { type: 'Bool', value: true },
        workflowName: {
            type: 'String',
            value: 'Internal Approval',
            templateTag: '#workflowName',
        },
        displayName: {
            type: 'String',
            value: 'Internal Approval',
            templateTag: '#displayName',
        },
        z: 2000001,
        daysTillPurgeOnSuccess: { type: 'Number', value: 0 },
        daysTillPurgeOnFailure: { type: 'Number', value: 30 },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Start',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/start.svg#Dark',
            },
            svg: { color: 'white' },
            circle: { fill: '#A0CC23' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 179, y: 401 },
        angle: 0,
        activityDisplayName: { type: 'String', value: '' },
        activityName: 'ApproveDocumentsActivity',
        addCustomAction: { type: 'Bool', value: false },
        allowComment: { type: 'String', value: 'Yes' },
        approveText: { type: 'String', value: 'Approve' },
        assignedUsers: { templateTag: '#assignedUsers' },
        assignedWorkerPoolUsers: { type: 'Participant', value: [] },
        assignedUsersInOrder: {
            templateTag: '#approvalOrder',
            type: 'String',
            value: 'false',
        },
        assignedWorkerPools: {
            templateTag: '#assignedWorkerPools',
            type: 'WorkerPool',
            value: [
                {
                    type: 'Guid',
                    value: '18828b45-2429-ee11-b83f-48df378a9c18',
                },
            ],
        },
        assigneeType: {
            templateTag: '#assigneeType',
            type: 'String',
            value: 'workerpool',
        },
        checkoutDocuments: {
            templateTag: '#lockdocument',
            type: 'String',
            value: 'true',
        },
        compareVersion: { type: 'Bool', value: false },
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        group: 'engineActivities',
        icon: {
            color: '#29bdbe',
            path: 'approve_documents.svg#Dark',
        },
        id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
        instructions: {
            type: 'String',
            value: 'Review this document in order to approve or deny this document. You’ll be able to add necessary comments and ad hoc tasks.',
        },
        name: { type: 'String', value: 'Approve' },
        notificationBody: {
            type: 'String',
            value: '<p>&lt;!DOCTYPE HTML&gt;&lt;html data-name="nustache_layout_docusign"&gt;&lt;head&gt;&lt;title&gt;DocuSign Email&lt;/title&gt;&lt;style type="text/css"&gt;&lt;/style&gt;&lt;/head&gt;&lt;body style="font-family:Helvetica,Arial,Sans Serif" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0"&gt;&lt;div style="background-color:#eaeaea;font-family:Helvetica,Arial,Sans Serif" bgcolor="#eaeaea"&gt;&lt;table style="background-color:#eaeaea;" bgcolor="#eaeaea" border="0" cellspacing="0" cellpadding="0" align="center" width="100%"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td width="640"&gt;&lt;table style="border-collapse:collapse;background-color:#ffffff;max-width:640px"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;table cellpadding="0" cellspacing="0" border="0" width="100%" align="center" style="background-color:#1e4ca1;color:#fff"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img height="75" src="https://www.docusign.net/member/Images/email/docGeneric-white.png" style="width:75px;height:75px" width="75"&gt;&lt;table cellpadding="0" cellspacing="0" border="0" width="100%"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;Approval Requested&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff"&gt;&lt;%#Variable.EmailBody%&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;table cellpadding="0" cellspacing="0" border="0" width="100%"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:30px" align="center"&gt;&lt;div&gt;&lt;table cellpadding="0" cellspacing="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:0 24px;font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423" align="center" height="44"&gt;&lt;a href="&lt;%#System.Link%&gt;" style="font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423;display:inline-block" target="_blank"&gt;&lt;span style="line-height:44px"&gt;Open Task&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td style="padding:30px 24px 45px 24px;background-color:#eaeaea"&gt;&lt;p style="margin-bottom:1em;font-family:Helvetica,Arial,Sans Serif;font-size:13px;color:#666666;line-height:18px"&gt;&lt;b&gt;Do Not Share This Email&lt;/b&gt;&lt;br&gt; This email contains a secure link to &lt;span&gt;DocuSign&lt;/span&gt;. Please do not share this email, link, or access code with others.&lt;br&gt; &lt;/p&gt;&lt;p style="margin-bottom:1em;font-family:Helvetica,Arial,Sans Serif;font-size:13px;color:#666666;line-height:18px"&gt;&lt;b&gt;About &lt;span&gt;DocuSign&lt;/span&gt;&lt;/b&gt;&lt;br&gt; Sign documents electronically in just minutes. It\'s safe, secure, and legally binding. Whether you\'re in an office, at home, on-the-go -- or even across the globe -- &lt;span&gt;DocuSign&lt;/span&gt; provides a professional trusted solution for Digital Transaction Managementâ˘.&lt;/p&gt;&lt;p style="margin-bottom:1em;font-family:Helvetica,Arial,Sans Serif;font-size:13px;color:#666666;line-height:18px"&gt;&lt;b&gt;Questions about the Document?&lt;/b&gt;&lt;br&gt; If you need to modify the document or have questions about the details in the document, please reach out to the sender by emailing them directly.&lt;br&gt;&lt;br&gt; If you are having trouble signing the document, please visit the &lt;a href="https://support.docusign.com/articles/How-do-I-sign-a-DocuSign-document-Basic-Signing" style="text-decoration:none;color:#357eeb" target="_blank" data-saferedirecturl="https://support.docusign.com/articles/How-do-I-sign-a-DocuSign-document-Basic-Signing"&gt; Help with Signing &lt;/a&gt; page on our &lt;a href="https://www.docusign.com/support" style="text-decoration:none;color:#357eeb" target="_blank" data-saferedirecturl="https://www.docusign.com/support"&gt; Support Center &lt;/a&gt;.&lt;br&gt;&lt;br&gt;&lt;/p&gt;&lt;p style="margin-bottom:1em;font-family:Helvetica,Arial,Sans Serif;font-size:13px;color:#666666;line-height:18px"&gt;&lt;a href="https://www.docusign.com/features-and-benefits/mobile" style="text-decoration:none;color:#357eeb" target="_blank" data-saferedirecturl="https://www.docusign.com/features-and-benefits/mobile"&gt;&lt;img style="margin-right:7px;border:none;vertical-align:middle" width="18" height="18" src="https://www.docusign.net/Member/Images/email/icon-DownloadApp-18x18@2x.png"&gt; Download the &lt;span&gt;DocuSign&lt;/span&gt; App&lt;/a&gt;&lt;/p&gt;&lt;p style="margin-bottom:1em;font-family:Helvetica,Arial,Sans Serif;font-size:13px;color:#666666;line-height:18px;font-size:10px;line-height:14px"&gt; This message was sent to you by&lt;span&gt;DocuSign&lt;/span&gt; HR who is using the&lt;span&gt;DocuSign&lt;/span&gt; Electronic Signature Service. If you would rather not receive email from this sender you may contact the sender with your request.&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</p>',
        },
        notificationFromAddress: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        notificationSubject: {
            templateTag: '#notificationSubject',
            type: 'String',
            value: '',
        },
        rejectText: { type: 'String', value: 'Reject' },
        requiredApprovalCount: { type: 'Number', value: 1 },
        requiredCompletion: {
            templateTag: '#requiredCompletion',
            type: 'Number',
            value: 1,
        },
        stageName: {
            templateTag: '#workflowName',
            type: 'String',
            value: 'Internal Approval',
        },
        stepDescription: { type: 'String', value: '' },
        timeout: {
            type: 'Timers',
            templateTag: '#timeout',
            value: [
                {
                    output: {
                        type: 'Output',
                        value: {
                            name: 'Timeout - Action',
                            referenceKey:
                                'cfe8004e-bb90-4868-8974-c7dbd6482cca',
                        },
                    },
                    initial: {
                        type: 'Period',
                        value: {
                            months: '0',
                            weeks: '0',
                            days: '10',
                        },
                    },
                    calendar: { type: 'String', value: '' },
                    recurring: '',
                    unit: { type: 'String', value: 'days' },
                },
            ],
        },
        timeoutWarningFromStepExecution: {
            type: 'Bool',
            value: false,
        },
        timers: { type: 'Timers', value: [] },
        waitForNextStep: { type: 'Bool', value: false },
        z: 2000002,
        outputComments: {
            type: 'Variable',
            value: { type: 'String', value: 'Comments' },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Approve',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-dy': 0,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 0,
                rx: 0,
                ry: 0,
                width: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/approve_documents.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { fill: '#29bdbe', 'data-error-state': false },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
            '.step-container-folded': { 'data-error-state': false },
            '.step-container-folded-background': {
                'data-error-state': false,
            },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 176, y: 799 },
        angle: 0,
        activityName: 'EmailDocumentActivity',
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        format: { type: 'String', value: 'pdfornative' },
        fromDisplayName: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        group: 'engineActivities',
        icon: { color: '#E06109', path: 'email_document.svg#Dark' },
        id: 'e755ecf9-7110-45a6-a797-3b8299005615',
        includeSignature: { type: 'Bool', value: false },
        name: { type: 'String', value: 'Email Document 1' },
        note: {
            type: 'String',
            value: '<p>&lt;p&gt;&lt;/p&gt;&lt;table style="background-color:#1e4ca1;color:#fff" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img src="https://www.docusign.net/member/Images/email/docComplete-white.png" style="width:75px;height:75px" width="75" height="75" class="CToWUd"&gt;&lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;&lt;%#XmlVariables.Params.Documents.Document.Name%&gt; approved by &lt;%#^ApproveCompletedBy%&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:30px" align="center"&gt;&lt;div&gt;&lt;table cellspacing="0" cellpadding="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:0 24px;font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423" height="44" align="center"&gt;&lt;a href="&lt;%#XmlVariables.Params.Documents.Document.EditDocumentURL%&gt;" style="font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423;display:inline-block" target="_blank"&gt;&lt;span style="line-height:44px"&gt;View&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;br&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="color:#000;font-size:16px;font-family:Helvetica,Arial,Sans Serif;background-color:#fff"&gt;&lt;p&gt;&lt;span style="font-size:15px;color:#333;font-family:Helvetica,Arial,Sans Serif;line-height:20px"&gt;&lt;%#^ApproveCompletedBy%&gt; has approved &lt;%#XmlVariables.Params.Documents.Document.Name%&gt; with these comments: &lt;%#^ApproveComments%&gt;<br> We will now move &lt;%#XmlVariables.Params.Documents.Document.Name%&gt; to the next step in your workflow.&lt;/span&gt;&lt;/p&gt;&lt;/td&gt; &lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;/p&gt;</p>',
        },
        stepDescription: {
            type: 'String',
            value: 'Notify document was approved',
        },
        subject: {
            type: 'String',
            value: '<%#XmlVariables.Params.Documents.Document.Name%> approved.',
        },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        z: 2000003,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Email Document\n1',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-dy': 28,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 40,
                rx: 3,
                ry: 3,
                width: 150,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Notify document was\napproved',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email_document.svg#Dark',
            },
            svg: { color: '#E06109', fill: '#fff' },
            rect: { fill: '#E06109' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
            '.step-container-folded': { 'data-error-state': false },
            '.step-container-folded-background': {
                'data-error-state': false,
            },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 175, y: -17 },
        angle: 0,
        activityName: 'EmailDocumentActivity',
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        format: { type: 'String', value: 'pdfornative' },
        fromDisplayName: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        group: 'engineActivities',
        icon: { color: '#E06109', path: 'email_document.svg#Dark' },
        id: 'a25e4a95-91f0-4f76-9b07-2b9ed3b1e4b4',
        includeSignature: { type: 'Bool', value: false },
        name: { type: 'String', value: 'Email Document 2' },
        note: {
            type: 'String',
            value: '<p>&lt;p&gt;&lt;/p&gt;&lt;table style="background-color:#1e4ca1;color:#fff" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img src="https://www.docusign.net/signing/images/email/docReject-white.png" style="width:75px;height:75px" width="75" height="75" class="CToWUd"&gt;&lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;&lt;%#XmlVariables.Params.Documents.Document.Name%&gt; rejected by &lt;%#^ApproveCompletedBy%&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:30px" align="center"&gt;&lt;div&gt;&lt;table cellspacing="0" cellpadding="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:0 24px;font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423" height="44" align="center"&gt;&lt;a href="&lt;%#XmlVariables.Params.Documents.Document.EditDocumentURL%&gt;" style="font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423;display:inline-block" target="_blank"&gt;&lt;span style="line-height:44px"&gt;Review Document&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;br&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="color:#000;font-size:16px;font-family:Helvetica,Arial,Sans Serif;background-color:#fff"&gt;&lt;p&gt;&lt;span style="font-size:15px;color:#333;font-family:Helvetica,Arial,Sans Serif;line-height:20px"&gt;&lt;Comments%&gt;&lt;br /&gt;&lt;%#^ApproveCompletedBy%&gt; has rejected your document. They left this comment about the rejection: &lt;%#^ApproveComments%&gt; You should review the document and contact &lt;%#^ApproveCompletedBy%&gt; to find out more.&lt;/span&gt;&lt;/p&gt;&lt;/td&gt; &lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;/p&gt;</p>',
        },
        stepDescription: {
            type: 'String',
            value: 'Notify document was rejected',
        },
        subject: { type: 'String', value: 'Document rejected' },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        z: 2000004,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Email Document\n2',
            },
            '.description': {
                opacity: 1,
                ref: '.step-container',
                'ref-dy': 28,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 40,
                rx: 3,
                ry: 3,
                width: 150,
                x: -75,
                y: -8,
                fill: '#212121',
            },
            '.descriptiontext': {
                text: 'Notify document was\nrejected',
                'font-size': 11,
                fill: '#fff',
                lineHeight: 14,
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email_document.svg#Dark',
            },
            svg: { color: '#E06109', fill: '#fff' },
            rect: { fill: '#E06109' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
            '.step-container-folded': { 'data-error-state': false },
            '.step-container-folded-background': {
                'data-error-state': false,
            },
        },
    },
    {
        size: { width: 93, height: 93 },
        type: 'springcm.Diamond',
        content: '',
        position: { x: 671, y: 413 },
        angle: 0,
        designSource: { source: 'WorkflowTemplate' },
        activityName: 'RuleActivity',
        condition: {
            type: 'Condition',
            value: {
                conditions: [
                    {
                        comparisonOperator: 'equals',
                        guid: '8fe6972f-f0bb-4296-8a04-107bda807cc1',
                        leftOperand: {
                            type: 'String',
                            value: 'true',
                        },
                        rightOperand: {
                            templateTag: '#finalizeWorkflow',
                            type: 'String',
                            value: 'false',
                        },
                    },
                ],
                guid: '5c1d3935-7adb-470a-9c55-433d94632644',
                logicalOperator: '',
            },
        },
        group: 'engineActivities',
        icon: { color: '#29bdbe', path: 'rule.svg#Dark' },
        id: '1b623b79-be76-4575-879e-c29552f1b4e9',
        name: { type: 'String', value: 'Rule 1' },
        stepDescription: { type: 'String', value: '' },
        z: 2000005,
        attrs: {
            '.step-container': { 'data-error-state': false },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Rule 1',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-dy': 0,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 0,
                rx: 0,
                ry: 0,
                width: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href': '/atlassupport/scripts/jointjs/svg/rule.svg#Dark',
            },
            svg: { color: '#29bdbe', fill: '#fff' },
            rect: { 'data-error-state': false, fill: '#29bdbe' },
            designSource: { source: 'WorkflowTemplate' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 856, y: 234 },
        angle: 0,
        activityName: 'WorkflowActivity',
        group: 'engineActivities',
        icon: { color: '#757575', path: 'generic.svg#Dark' },
        id: '4dd099df-014c-49c7-bc1e-bf93297a4a36',
        name: { type: 'String', value: 'Workflow 1' },
        stepDescription: { type: 'String', value: '' },
        waitForChildWorkflow: { type: 'Bool', value: false },
        workflow: {
            templateTag: '#childWorkflow',
            type: 'Definition',
            value: {
                name: {
                    type: 'Expression',
                    value: {
                        code: 'GetVariableValue("")',
                        returnType: 'System.Object',
                        additionalCode: '',
                    },
                },
            },
        },
        z: 2000006,
        variables: {
            type: 'Variable',
            value: [
                { type: 'String', value: 'Comments' },
                { type: 'User', value: 'SubmittedBy' },
            ],
        },
        parameterVariableName: {
            type: 'Variable',
            value: { type: 'Xml', value: 'Params' },
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Workflow 1',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-dy': 0,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 0,
                rx: 0,
                ry: 0,
                width: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/generic.svg#Dark',
            },
            svg: { color: '#757575', fill: '#fff' },
            rect: { fill: '#757575', 'data-error-state': false },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Circle',
        position: { x: 859, y: 608 },
        angle: 0,
        activityName: 'EndActivity',
        group: 'engineActivities',
        icon: { color: 'white', path: 'finish.svg#Dark' },
        id: '5684326f-c94a-4080-8fe4-301f12415957',
        name: { type: 'String', value: 'Finish 1' },
        stepDescription: { type: 'String', value: '' },
        z: 2000007,
        attrs: {
            '.circle-container': {
                class: 'circle-container theme_primary_fill',
                fill: '#29bdbe',
            },
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Finish 1',
            },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/finish.svg#Dark',
            },
            svg: { color: 'white' },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 347, y: 266 },
        angle: 0,
        activityName: 'EmailDocumentActivity',
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        format: { type: 'String', value: 'pdfornative' },
        fromDisplayName: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        group: 'engineActivities',
        icon: { color: '#E06109', path: 'email_document.svg#Dark' },
        id: 'c1db9dc0-0aec-4f51-951a-9de7975089b2',
        includeSignature: { type: 'Bool', value: false },
        name: { type: 'String', value: 'Email Document 3' },
        note: {
            type: 'String',
            value: '<p>&lt;p&gt;&lt;/p&gt;&lt;table style="background-color:#1e4ca1;color:#fff" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img src="https://www.docusign.net/signing/images/email/docReject-white.png" style="width:75px;height:75px" width="75" height="75" class="CToWUd"&gt;&lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;The approval for &lt;%#XmlVariables.Params.Documents.Document.Name%&gt; failed &lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:30px" align="center"&gt;&lt;div&gt;&lt;table cellspacing="0" cellpadding="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:0 24px;font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423" height="44" align="center"&gt;&lt;a href="&lt;%#XmlVariables.Params.Documents.Document.EditDocumentURL%&gt;" style="font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423;display:inline-block" target="_blank"&gt;&lt;span style="line-height:44px"&gt;View&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;br&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="color:#000;font-size:16px;font-family:Helvetica,Arial,Sans Serif;background-color:#fff"&gt;&lt;p&gt;&lt;span style="font-size:15px;color:#333;font-family:Helvetica,Arial,Sans Serif;line-height:20px"&gt;The approval request on this document failed. You can resend the document for approval or contact your administrator.&lt;/span&gt;&lt;/p&gt;&lt;/td&gt; &lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;/p&gt;</p>',
        },
        stepDescription: { type: 'String', value: '' },
        subject: { type: 'String', value: 'Approval request Failed' },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        z: 2000008,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Email Document\n3',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-dy': 0,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 0,
                rx: 0,
                ry: 0,
                width: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email_document.svg#Dark',
            },
            svg: { color: '#E06109', fill: '#fff' },
            rect: { fill: '#E06109' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 473, y: 601 },
        angle: 0,
        activityName: 'EmailDocumentActivity',
        documents: {
            type: 'Document',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'Xml', value: 'Params' },
                },
            ],
        },
        format: { type: 'String', value: 'pdfornative' },
        fromDisplayName: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        group: 'engineActivities',
        icon: { color: '#E06109', path: 'email_document.svg#Dark' },
        id: 'f6b1399e-a2f5-48d0-98c2-356a768dd2c3',
        includeSignature: { type: 'Bool', value: false },
        name: { type: 'String', value: 'Email Document 4' },
        note: {
            type: 'String',
            value: '<p>&lt;p&gt;&lt;/p&gt;&lt;table style="background-color:#1e4ca1;color:#fff" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img src="https://www.docusign.net/signing/images/email/docReject-white.png" style="width:75px;height:75px" width="75" height="75" class="CToWUd"&gt;&lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;The approval for &lt;%#XmlVariables.Params.Documents.Document.Name%&gt; expired &lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:30px" align="center"&gt;&lt;div&gt;&lt;table cellspacing="0" cellpadding="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:0 24px;font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423" height="44" align="center"&gt;&lt;a href="&lt;%#XmlVariables.Params.Documents.Document.EditDocumentURL%&gt;" style="font-size:15px;color:#333;background-color:#ffc423;font-family:Helvetica,Arial,Sans Serif;font-weight:700;text-align:center;text-decoration:none;border-radius:2px;background-color:#ffc423;display:inline-block" target="_blank"&gt;&lt;span style="line-height:44px"&gt;View&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;br&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="color:#000;font-size:16px;font-family:Helvetica,Arial,Sans Serif;background-color:#fff"&gt;&lt;p&gt;&lt;span style="font-size:15px;color:#333;font-family:Helvetica,Arial,Sans Serif;line-height:20px"&gt;The approval request on this document expired because it wasn\'t approved by &lt;%#^ApproveUncompleted%&gt; in time. You can resend the document for approval or contact your administrator. &lt;/span&gt;&lt;/p&gt;&lt;/td&gt; &lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;/p&gt;</p>',
        },
        stepDescription: { type: 'String', value: '' },
        subject: { type: 'String', value: 'Document not approved' },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: {
                        type: 'User',
                        value: 'SubmittedBy.Email',
                    },
                },
            ],
        },
        z: 2000009,
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                lineHeight: '1.4em',
                text: 'Email Document\n4',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-dy': 0,
                'ref-x': 0.5,
            },
            '.descriptionbox': {
                height: 0,
                rx: 0,
                ry: 0,
                width: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email_document.svg#Dark',
            },
            svg: { color: '#E06109', fill: '#fff' },
            rect: { fill: '#E06109' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
            '.step-container-folded': { 'data-error-state': false },
            '.step-container-folded-background': {
                'data-error-state': false,
            },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: -37, y: 399 },
        angle: 0,
        activityName: 'UpdateVariableActivity',
        group: 'engineActivities',
        icon: {
            path: 'update_variable_value.svg#Dark',
            color: '#d13393',
        },
        id: '197629ce-c911-4eb4-99f7-ca3ba51da717',
        z: 2000010,
        name: { type: 'String', value: 'Update Variable Value 1' },
        notifyOnException: { type: 'Bool', value: true },
        stepDescription: { type: 'String', value: '' },
        variableUpdates: {
            type: 'VariableUpdate',
            value: [
                {
                    variableToConfigure: {
                        type: 'Variable',
                        value: { type: 'String', value: 'EmailBody' },
                    },
                    variableValue: {
                        templateTag: '#notificationBody',
                        type: 'String',
                        value: '',
                    },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Update Variable\nValue 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/update_variable_value.svg#Dark',
            },
            svg: { color: '#d13393', fill: '#fff' },
            rect: { fill: '#d13393' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 457, y: 390 },
        angle: 0,
        activityName: 'SendEmailActivity',
        group: 'engineActivities',
        icon: { path: 'email.svg#Dark', color: '#f15a22' },
        id: '7a2dc3a6-d6e3-4133-b559-6be9532a502a',
        z: 2000012,
        name: { type: 'String', value: 'Email 1' },
        stepDescription: { type: 'String', value: '' },
        subject: { type: 'String', value: 'Document not approved' },
        from: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'User', value: 'SubmittedBy' },
                },
            ],
        },
        body: {
            type: 'String',
            value: '<p>&lt;p&gt;&lt;/p&gt;&lt;table style="background-color:#1e4ca1;color:#fff" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding:28px 36px 36px 36px;border-radius:2px;background-color:#1e4ca1;color:#fff;font-size:16px;font-family:Helvetica,Arial,Sans Serif;width:100%;text-align:center" align="center"&gt;&lt;img src="https://www.docusign.net/signing/images/email/docReject-white.png" style="width:75px;height:75px" width="75" height="75" class="CToWUd"&gt;&lt;table width="100%" cellspacing="0" cellpadding="0" border="0"&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="padding-top:24px;font-size:16px;font-family:Helvetica,Arial,Sans Serif;border:none;text-align:center;color:#fff" align="center"&gt;The approval for &lt;%#XmlVariables.Params.Documents.Document.Name%&gt; failed&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt; &lt;br&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td style="color:#000;font-size:16px;font-family:Helvetica,Arial,Sans Serif;background-color:#fff"&gt;&lt;p&gt;&lt;span style="font-size:15px;color:#333;font-family:Helvetica,Arial,Sans Serif;line-height:20px"&gt;The approval request on this document failed. You can resend the document for approval or contact your administrator. &lt;/span&gt;&lt;/p&gt;&lt;/td&gt; &lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;/p&gt;</p>',
        },
        to: {
            type: 'Participant',
            value: [
                {
                    type: 'Variable',
                    value: { type: 'User', value: 'SubmittedBy' },
                },
            ],
        },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Email 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/email.svg#Dark',
            },
            svg: { color: '#f15a22', fill: '#fff' },
            rect: { fill: '#f15a22' },
            designSource: { source: 'WorkflowTemplate' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 174, y: 605 },
        angle: 0,
        activityName: 'UpdateWorkflowOutputActivity',
        group: 'engineActivities',
        icon: {
            path: 'set_workflow_output.svg#Dark',
            color: '#757575',
        },
        id: '1b1f6a09-6c15-4b3e-9e59-a705e47a0977',
        z: 2000013,
        name: { type: 'String', value: 'Set Workflow Output 1' },
        stepDescription: { type: 'String', value: '' },
        outputProperty: { type: 'String', value: 'Approved' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Set Workflow\nOutput 1',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/set_workflow_output.svg#Dark',
            },
            svg: { color: '#757575', fill: '#fff' },
            rect: { fill: '#757575' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 177, y: 181 },
        angle: 0,
        activityName: 'UpdateWorkflowOutputActivity',
        group: 'engineActivities',
        icon: {
            path: 'set_workflow_output.svg#Dark',
            color: '#757575',
        },
        id: '88a79176-4292-40ba-b040-3749ea247604',
        z: 2000014,
        name: { type: 'String', value: 'Set Workflow Output 2' },
        stepDescription: { type: 'String', value: '' },
        outputProperty: { type: 'String', value: 'Rejected' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Set Workflow\nOutput 2',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/set_workflow_output.svg#Dark',
            },
            svg: { color: '#757575', fill: '#fff' },
            rect: { fill: '#757575' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        size: { width: 100, height: 100 },
        content: '',
        type: 'springcm.Step',
        position: { x: 313, y: 601 },
        angle: 0,
        activityName: 'UpdateWorkflowOutputActivity',
        group: 'engineActivities',
        icon: {
            path: 'set_workflow_output.svg#Dark',
            color: '#757575',
        },
        id: 'fd34a7a3-6b3c-4084-ac70-703fbfd42c86',
        z: 2000015,
        name: { type: 'String', value: 'Set Workflow Output 3' },
        stepDescription: { type: 'String', value: '' },
        outputProperty: { type: 'String', value: 'Expired' },
        attrs: {
            '.steptext': {
                'ref-y': '.66',
                'y-alignment': 'middle',
                text: 'Set Workflow\nOutput 3',
                lineHeight: '1.4em',
            },
            '.description': {
                opacity: 0,
                ref: '.step-container',
                'ref-x': 0.5,
                'ref-dy': 0,
            },
            '.descriptionbox': {
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                x: 0,
                y: 0,
            },
            '.descriptiontext': { text: '' },
            use: {
                'xlink:href':
                    '/atlassupport/scripts/jointjs/svg/set_workflow_output.svg#Dark',
            },
            svg: { color: '#757575', fill: '#fff' },
            rect: { fill: '#757575' },
            '.step-container': { 'data-error-state': false },
        },
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'f6b1399e-a2f5-48d0-98c2-356a768dd2c3',
            port: 'e',
        },
        target: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'a51fd42d-1100-40a5-86b3-a9189d30b7f9',
        z: 3000001,
        name: { type: 'String', value: 'Link 11' },
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        vertices: [{ x: 638, y: 541 }],
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '197629ce-c911-4eb4-99f7-ca3ba51da717',
            port: 'e',
        },
        target: {
            id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'f8af92eb-9d74-4ccd-a8b9-fd03740023ab',
        z: 3000004,
        name: { type: 'String', value: 'Link 13' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'e',
        },
        target: {
            id: '4dd099df-014c-49c7-bc1e-bf93297a4a36',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'a35b691a-e2a7-4e65-99c5-531b7022973a',
        z: 3000009,
        name: { type: 'String', value: 'Link 6' },
        vertices: [],
        output: { type: 'String', value: 'true' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'c1db9dc0-0aec-4f51-951a-9de7975089b2',
            port: 'e',
        },
        target: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5409adce-8556-4cec-8cb0-86e991ca17cd',
        z: 3000013,
        name: { type: 'String', value: 'Link 14' },
        vertices: [],
        output: { type: 'String', value: 'success' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'c1db9dc0-0aec-4f51-951a-9de7975089b2',
            port: 's',
        },
        target: {
            id: '7a2dc3a6-d6e3-4133-b559-6be9532a502a',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '3b5ece16-2e8e-43cb-94eb-560964872661',
        z: 3000014,
        name: { type: 'String', value: 'Link 15' },
        vertices: [],
        output: { type: 'String', value: 'failure' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '7a2dc3a6-d6e3-4133-b559-6be9532a502a',
            port: 'e',
        },
        target: {
            id: '1b623b79-be76-4575-879e-c29552f1b4e9',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: 'c00247b8-2608-4ede-8c87-6b0b559ebd5b',
        z: 3000015,
        name: { type: 'String', value: 'Link 10' },
        vertices: [{ x: 636, y: 444 }],
        output: { type: 'String', value: '' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
            port: 's',
        },
        target: {
            id: '1b1f6a09-6c15-4b3e-9e59-a705e47a0977',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6734be48-8435-4321-9f70-990c1ccf06a8',
        z: 3000016,
        name: { type: 'String', value: 'Link 3' },
        vertices: [],
        output: { type: 'String', value: 'approved' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '1b1f6a09-6c15-4b3e-9e59-a705e47a0977',
            port: 's',
        },
        target: {
            id: 'e755ecf9-7110-45a6-a797-3b8299005615',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '92a1984a-1472-4dc5-a06c-142d317fdc8b',
        z: 3000018,
        name: { type: 'String', value: 'Link 16' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
            port: 'n',
        },
        target: {
            id: '88a79176-4292-40ba-b040-3749ea247604',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6c77273c-8ca9-4870-aa20-f21113004973',
        z: 3000019,
        name: { type: 'String', value: 'Link 2' },
        vertices: [],
        output: { type: 'String', value: 'rejected' },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '88a79176-4292-40ba-b040-3749ea247604',
            port: 'n',
        },
        target: {
            id: 'a25e4a95-91f0-4f76-9b07-2b9ed3b1e4b4',
            port: 's',
            selector:
                '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(11)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '3c260ea5-fd97-4dea-b200-430ffc3561f8',
        z: 3000021,
        name: { type: 'String', value: 'Link 17' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: '2d33608d-9042-4bd7-8553-27b60b8a2c99',
            port: 'e',
        },
        target: {
            id: 'fd34a7a3-6b3c-4084-ac70-703fbfd42c86',
            port: 'n',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(2)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '6614e4d5-b9f6-424d-9b29-990f0f04e073',
        z: 3000022,
        name: { type: 'String', value: 'Link 12' },
        vertices: [{ x: 360, y: 581 }],
        output: {
            type: 'Reference',
            value: 'cfe8004e-bb90-4868-8974-c7dbd6482cca',
        },
        description: { type: 'String', value: '' },
        attrs: {},
    },
    {
        type: 'springcm.Link',
        source: {
            id: 'fd34a7a3-6b3c-4084-ac70-703fbfd42c86',
            port: 'e',
        },
        target: {
            id: 'f6b1399e-a2f5-48d0-98c2-356a768dd2c3',
            port: 'w',
            selector: '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)',
        },
        router: {
            name: 'manhattan',
            args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
        },
        id: '5be82723-c621-4778-8e9d-148542063193',
        z: 3000023,
        name: { type: 'String', value: 'Link 18' },
        attrs: {},
    },
];

export const templateDataMapping = {
    CaaSIndexing: caasIndexing,
    CaaSRouting: caasRouting,
    XyzContractManagement: xyzContractManagement,
    InternalApproval: internalApproval,
};
