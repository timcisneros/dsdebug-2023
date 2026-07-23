let activeSignal = null;
let suppressStdout = false;
const consoleEntryMarker = Symbol('dsdebug.console-entry');

const createConsoleEntry = (values, initiallyExpandedValueIndexes = []) => ({
    marker: consoleEntryMarker,
    values,
    initiallyExpandedValueIndexes,
});

export const readConsoleEntry = (args) => {
    const entry = args[0];
    if (entry?.marker !== consoleEntryMarker) {
        return { values: args, initiallyExpandedValueIndexes: [] };
    }
    return {
        values: entry.values,
        initiallyExpandedValueIndexes: entry.initiallyExpandedValueIndexes,
    };
};

export const beginCommandExecution = (signal) => {
    activeSignal = signal;
};

export const finishCommandExecution = () => {
    activeSignal = null;
    suppressStdout = false;
};

export const setStdoutSuppressed = (suppressed) => {
    suppressStdout = suppressed;
};

export const shouldDisplayConsoleEntry = (method) =>
    !suppressStdout || method === 'error' || method === 'warn';

export const writeConsoleControl = (...values) => {
    const wasSuppressed = suppressStdout;
    suppressStdout = false;
    console.log('dsdebug-log', ...values);
    suppressStdout = wasSuppressed;
};

export const writeExpandedConsoleControl = (...values) => {
    const wasSuppressed = suppressStdout;
    suppressStdout = false;
    console.log(
        'dsdebug-log',
        createConsoleEntry(values, values.map((_, index) => index))
    );
    suppressStdout = wasSuppressed;
};

export const throwIfCommandAborted = () => {
    if (!activeSignal?.aborted) return;
    throw new DOMException('Command execution canceled.', 'AbortError');
};
