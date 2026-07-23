import { throwIfCommandAborted } from './commandRuntime.js';
import { parseFiniteNumberArgument } from './commandConsistency.js';
import { getPropertyPathValue } from './propertyPath.js';

const asItems = (input) =>
    Array.isArray(input) ? input : typeof input === 'undefined' ? [] : [input];
const processingBatchSize = 250;
const yieldToBrowser = () =>
    new Promise((resolve) => globalThis.setTimeout(resolve, 0));

export const parsePipelineValue = (value, actualValue) => {
    if (typeof actualValue === 'string') return value;
    if (typeof actualValue === 'number') {
        const numericValue = parseFiniteNumberArgument(value);
        return numericValue.ok ? numericValue.value : value;
    }
    if (typeof actualValue === 'boolean') {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
    }
    if (actualValue === null) return value === 'null' ? null : value;
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'null') return null;
    const numericValue = parseFiniteNumberArgument(value);
    if (numericValue.ok) return numericValue.value;
    return value;
};

const compareValues = (actualValue, operator, expectedValue) => {
    switch (operator) {
        case '=':
            return actualValue === expectedValue;
        case '!=':
            return actualValue !== expectedValue;
        case '>':
            return actualValue > expectedValue;
        case '>=':
            return actualValue >= expectedValue;
        case '<':
            return actualValue < expectedValue;
        case '<=':
            return actualValue <= expectedValue;
        case 'contains':
            return String(actualValue).includes(String(expectedValue));
        case 'starts-with':
            return String(actualValue).startsWith(String(expectedValue));
        case 'ends-with':
            return String(actualValue).endsWith(String(expectedValue));
        default:
            return false;
    }
};

const logOutput = (output) => {
    console.log('dsdebug-log', output);
    return { ok: true, value: output };
};

const requireInput = (input, commandName) => {
    if (typeof input !== 'undefined') return true;
    console.error(
        'dsdebug-log',
        `'${commandName}' requires pipeline input.`
    );
    return false;
};

export const filterPipeline = async (
    input,
    property,
    operator,
    expected,
    ...extraArgs
) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'filter')) return { ok: false };
    const normalizedOperator = operator?.toLowerCase();
    const hasExpectedValue = typeof expected !== 'undefined';
    if (
        !property ||
        !operator ||
        extraArgs.length > 0 ||
        (normalizedOperator === 'exists' && hasExpectedValue) ||
        (normalizedOperator !== 'exists' && !hasExpectedValue)
    ) {
        console.error(
            'dsdebug-log',
            "Usage: <command> | filter <property|.> <operator> [value]. Value is omitted only for exists."
        );
        return { ok: false };
    }

    const supportedOperators = new Set([
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'contains',
        'starts-with',
        'ends-with',
        'exists',
    ]);
    if (!supportedOperators.has(normalizedOperator)) {
        console.error('dsdebug-log', `Unknown filter operator '${operator}'.`);
        return { ok: false };
    }

    const inputItems = asItems(input);
    const output = [];
    for (let index = 0; index < inputItems.length; index++) {
        if (index > 0 && index % processingBatchSize === 0) {
            await yieldToBrowser();
        }
        throwIfCommandAborted();
        const item = inputItems[index];
        const actualValue = getPropertyPathValue(item, property);
        const expectedValue = parsePipelineValue(expected, actualValue);
        if (normalizedOperator === 'exists') {
            if (typeof actualValue !== 'undefined') output.push(item);
        } else if (
            compareValues(actualValue, normalizedOperator, expectedValue)
        ) {
            output.push(item);
        }
    }
    return logOutput(output);
};

export const countPipeline = (input, ...args) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'count')) return { ok: false };
    if (args.length > 0) {
        console.error('dsdebug-log', 'Usage: <command> | count');
        return { ok: false };
    }
    return logOutput(asItems(input).length);
};

const parseLimit = (value, commandName) => {
    const result =
        typeof value === 'undefined'
            ? { ok: true, value: 10 }
            : parseFiniteNumberArgument(value);
    if (!result.ok || !Number.isInteger(result.value) || result.value < 0) {
        console.error(
            'dsdebug-log',
            `${commandName} requires a non-negative integer.`
        );
        return null;
    }
    return result.value;
};

export const headPipeline = (input, value, ...extraArgs) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'head')) return { ok: false };
    if (extraArgs.length > 0) {
        console.error('dsdebug-log', 'Usage: <command> | head [count]');
        return { ok: false };
    }
    const limit = parseLimit(value, 'head');
    if (limit === null) return { ok: false };
    return logOutput(asItems(input).slice(0, limit));
};

export const tailPipeline = (input, value, ...extraArgs) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'tail')) return { ok: false };
    if (extraArgs.length > 0) {
        console.error('dsdebug-log', 'Usage: <command> | tail [count]');
        return { ok: false };
    }
    const limit = parseLimit(value, 'tail');
    if (limit === null) return { ok: false };
    return logOutput(limit === 0 ? [] : asItems(input).slice(-limit));
};

export const sortPipeline = (input, property, ...extraArgs) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'sort')) return { ok: false };
    if (!property || extraArgs.length > 0) {
        console.error('dsdebug-log', 'Usage: <command> | sort <property|.>');
        return { ok: false };
    }

    const output = [...asItems(input)].sort((left, right) => {
        throwIfCommandAborted();
        const leftValue = getPropertyPathValue(left, property);
        const rightValue = getPropertyPathValue(right, property);
        if (leftValue === rightValue) return 0;
        if (typeof leftValue === 'undefined') return 1;
        if (typeof rightValue === 'undefined') return -1;
        return String(leftValue).localeCompare(String(rightValue), undefined, {
            numeric: true,
            sensitivity: 'base',
        });
    });
    return logOutput(output);
};

export const uniquePipeline = async (input, property, ...extraArgs) => {
    throwIfCommandAborted();
    if (!requireInput(input, 'unique')) return { ok: false };
    if (extraArgs.length > 0) {
        console.error('dsdebug-log', 'Usage: <command> | unique [property|.]');
        return { ok: false };
    }
    const seen = new Set();
    const inputItems = asItems(input);
    const output = [];
    for (let index = 0; index < inputItems.length; index++) {
        if (index > 0 && index % processingBatchSize === 0) {
            await yieldToBrowser();
        }
        throwIfCommandAborted();
        const item = inputItems[index];
        const value = property
            ? getPropertyPathValue(item, property)
            : item;
        const key =
            value && typeof value === 'object'
                ? JSON.stringify(value)
                : `${typeof value}:${String(value)}`;
        if (!seen.has(key)) {
            seen.add(key);
            output.push(item);
        }
    }
    return logOutput(output);
};
