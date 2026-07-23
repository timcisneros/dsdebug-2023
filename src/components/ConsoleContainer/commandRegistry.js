export const commandDefinitions = [
    {
        name: 'help',
        usage: '[command [action]]',
        description: 'Show commands or explain one command',
    },
    {
        name: 'clear',
        description: 'Clear the console',
    },
    {
        name: 'history',
        usage: '[clear]',
        description: 'Show command history',
    },
    {
        name: 'status',
        description: 'Show the most recently executed command status',
    },
    {
        name: 'undo',
        description: 'Undo the previous workflow change',
    },
    {
        name: 'redo',
        description: 'Redo the next workflow change',
    },
    {
        name: 'filter',
        usage: '<property|.> <operator> [value]',
        description: "Filter input; omit value for exists and use '.' for primitives",
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'count',
        description: 'Count pipeline items',
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'head',
        usage: '[count]',
        description: 'Return the first pipeline items',
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'tail',
        usage: '[count]',
        description: 'Return the last pipeline items',
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'sort',
        usage: '<property|.>',
        description: "Sort pipeline input; use '.' for primitive values",
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'unique',
        usage: '[property|.]',
        description: "Remove duplicates; omit property or use '.' for primitives",
        acceptsStructuredInput: true,
        requiresPipelineInput: true,
    },
    {
        name: 'node',
        usage: '<action> ...',
        description: 'List, create, inspect, or change workflow steps',
        acceptsStructuredInput: true,
        subcommands: [
            { name: 'types', description: 'List available activity types' },
            { name: 'list', usage: '[property ...]', description: 'List workflow nodes' },
            { name: 'create', usage: '<activityName> [x y]', description: 'Create a grid-aligned node' },
            { name: 'duplicate', usage: '<id|alias> [x y]', description: 'Duplicate a node on the grid' },
            { name: 'delete', usage: '<id|alias> [...]', description: 'Delete nodes', pipelineInput: 'node collections containing id' },
            { name: 'update', usage: '<id|alias> <property> <value>', description: 'Update a leaf string, number, or boolean node property' },
            { name: 'move', usage: '<id|alias> <x> <y>', description: 'Move a node on the grid' },
            { name: 'select', usage: '<id|alias> [...]', description: 'Select nodes', pipelineInput: 'node collections containing id' },
            { name: 'validate', usage: '[id|alias]', description: 'Validate one or all nodes' },
            { name: 'trace', usage: '<id|alias> [upstream|downstream|both]', description: 'Trace connected paths' },
        ],
    },
    {
        name: 'link',
        usage: '<action> ...',
        description: 'List, create, select, or change workflow links',
        acceptsStructuredInput: true,
        subcommands: [
            { name: 'list', usage: '[property ...]', description: 'List workflow links' },
            { name: 'create', usage: '<sourceId|alias> <targetId|alias>', description: 'Connect a right-side output to a left-side input' },
            { name: 'delete', usage: '<id|alias> [...]', description: 'Delete links', pipelineInput: 'link collections containing id' },
            { name: 'update', usage: '<id|alias> <property> <value>', description: 'Update a leaf string, number, or boolean link property' },
            { name: 'select', usage: '<id|alias>', description: 'Select one link', pipelineInput: 'a single-link collection containing id' },
        ],
    },
    {
        name: 'variable',
        usage: '<action> ...',
        description: 'Manage variables and inspect their references',
        subcommands: [
            { name: 'list', description: 'List workflow variables' },
            { name: 'create', usage: '<name> [type]', description: 'Create a variable; type defaults to Text' },
            { name: 'rename', usage: '<oldName> <newName>', description: 'Rename it and update references' },
            { name: 'delete', usage: '<name>', description: 'Delete an unreferenced variable' },
            { name: 'references', usage: '<name>', description: 'List variable references' },
        ],
    },
    {
        name: 'template',
        usage: '<list|apply|variable-mode> ...',
        description: 'List templates or apply one to the workflow',
        subcommands: [
            { name: 'list', description: 'List built-in and uploaded templates' },
            { name: 'apply', usage: '<name> [x y]', description: 'Create workflow items from a template' },
            { name: 'variable-mode', usage: '[merge|unique]', description: 'Show or set template variable merging' },
        ],
    },
    {
        name: 'alias',
        usage: '<list|create|delete> ...',
        description: 'Manage friendly names for workflow items',
        acceptsStructuredInput: true,
        subcommands: [
            { name: 'list', description: 'List aliases and whether their items are active' },
            { name: 'create', usage: '<itemId> <name>', description: 'Create an alias', pipelineInput: 'a single item containing id' },
            { name: 'delete', usage: '<name>', description: 'Delete an alias' },
        ],
    },
    {
        name: 'workflow',
        usage: '<repair-start|validate>',
        description: 'Manage or validate the whole workflow',
        subcommands: [
            { name: 'repair-start', description: 'Recreate a missing start activity' },
            { name: 'validate', description: 'Validate workflow graph structure' },
        ],
    },
    {
        name: 'canvas',
        usage: '<deselect|fit|zoom|minimap|reset> ...',
        description: 'Control the workflow canvas view',
        subcommands: [
            { name: 'deselect', description: 'Clear the canvas selection' },
            { name: 'fit', description: 'Fit the workflow in the viewport' },
            { name: 'zoom', usage: '<in|out|0.1-2>', description: 'Change the zoom level' },
            { name: 'minimap', usage: '<on|off|toggle>', description: 'Control the minimap' },
            { name: 'reset', description: 'Restore imported node positions' },
        ],
    },
    {
        name: 'true',
        description: 'Return a successful status',
    },
    {
        name: 'false',
        description: 'Return a failed status',
    },
];

export const getCommandCompletionNames = (
    hasPipelineInput = false,
    includePipelineOnly = false
) =>
    commandDefinitions
        .filter(
            (definition) =>
                hasPipelineInput
                    ? definition.acceptsInput ||
                      definition.acceptsStructuredInput
                    : includePipelineOnly || !definition.requiresPipelineInput
        )
        .map(({ name }) => name);

export const isPipelineInputPresent = (pipelineInput) =>
    typeof pipelineInput !== 'undefined';

export const getSubcommandCompletionNames = (
    commandName,
    hasPipelineInput = false
) =>
    commandDefinitions
        .find(({ name }) => name === commandName)
        ?.subcommands?.filter(
            (subcommand) => !hasPipelineInput || subcommand.pipelineInput
        )
        .map(({ name }) => name) ?? [];

export const doesSubcommandAcceptPipelineInput = (
    commandName,
    subcommandName
) =>
    commandDefinitions
        .find(({ name }) => name === commandName)
        ?.subcommands?.some(
            ({ name, pipelineInput }) =>
                name === subcommandName && Boolean(pipelineInput)
        ) ?? false;

export const getPipelineActionError = (
    commandName,
    subcommandName,
    pipelineInput
) => {
    if (!isPipelineInputPresent(pipelineInput)) return null;
    if (!subcommandName) {
        return `${commandName} requires an action that accepts pipeline input. Use 'help ${commandName}'.`;
    }
    const subcommandExists = commandDefinitions
        .find(({ name }) => name === commandName)
        ?.subcommands?.some(({ name }) => name === subcommandName);
    if (!subcommandExists) return null;
    return doesSubcommandAcceptPipelineInput(commandName, subcommandName)
        ? null
        : `${commandName} ${subcommandName} does not accept pipeline input.`;
};

export const commandExamples = [
    {
        label: 'Sequence',
        command: 'node types; node list id',
    },
    {
        label: 'Conditional',
        command: 'node create SearchActivity 0 0 | alias create search && node select search',
    },
    {
        label: 'Select all',
        command: 'node list id | node select',
    },
    {
        label: 'Filter',
        command: 'node list | filter activityName = SearchActivity | count',
    },
];

export const commandHelpSections = [
    {
        title: 'Resources',
        commands: ['node', 'link', 'variable', 'template', 'alias', 'workflow'],
    },
    {
        title: 'Canvas',
        commands: ['canvas'],
    },
    {
        title: 'Pipeline',
        commands: ['filter', 'count', 'head', 'tail', 'sort', 'unique'],
    },
    {
        title: 'Console',
        commands: [
            'help',
            'clear',
            'history',
            'status',
            'undo',
            'redo',
            'true',
            'false',
        ],
    },
];

export const createCommandRegistry = (handlers) =>
    new Map(
        commandDefinitions.map((definition) => [
            definition.name,
            {
                ...definition,
                execute: handlers[definition.name],
            },
        ])
    );

export const formatCommandHelp = (
    { name, usage, description },
    commandWidth = 0
) => {
    const command = `${name}${usage ? ` ${usage}` : ''}`;
    return `${command.padEnd(commandWidth)}  ${description}`;
};

export const normalizeCommandResult = (result) => {
    if (result && typeof result === 'object' && 'ok' in result) return result;
    if (result === false) return { ok: false };
    return { ok: true, value: result };
};

export const getPipelineArguments = (value) => {
    if (typeof value === 'undefined') return [];
    const values = Array.isArray(value) ? value : [value];

    return values.flatMap((item) => {
        if (item === null || typeof item === 'undefined') return [];
        if (typeof item === 'object') {
            if ('id' in item) return [String(item.id)];
            return [JSON.stringify(item)];
        }
        return [String(item)];
    });
};
