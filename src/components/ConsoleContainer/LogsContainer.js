import { forwardRef, memo, useEffect, useState } from 'react';
import {
    Button,
    Code,
    Collapsible,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

const consoleMethods = ['log', 'info', 'warn', 'error'];
const maxConsoleEntries = 500;
const maxConsoleRetentionWeight = 5000;
const expandedEntryBatchSize = 200;

const logColors = {
    error: 'red.300',
    warn: 'yellow.300',
    info: 'blue.200',
    log: 'gray.100',
};

const formatPrimitive = (value) => {
    if (typeof value === 'string') return value;
    if (typeof value === 'undefined') return 'undefined';
    if (typeof value === 'bigint') return `${value}n`;
    if (typeof value === 'symbol' || typeof value === 'function') {
        return String(value);
    }

    return JSON.stringify(value);
};

const getObjectSummary = (value) => {
    if (value instanceof Date) {
        return value.toISOString();
    }

    if (value instanceof Error) {
        return `${value.name}: ${value.message}`;
    }

    return Array.isArray(value)
        ? `Array(${value.length})`
        : value.constructor?.name || 'Object';
};

const getObjectEntries = (value, limit) => {
    if (value instanceof Error) {
        return {
            entries: [
                ['message', value.message],
                ['stack', value.stack],
            ],
            total: 2,
        };
    }

    if (Array.isArray(value)) {
        const entryCount = Math.min(value.length, limit);
        return {
            entries: Array.from({ length: entryCount }, (_, index) => [
                index,
                value[index],
            ]),
            total: value.length,
        };
    }

    try {
        const keys = Object.keys(value);
        return {
            entries: keys.slice(0, limit).map((key) => [key, value[key]]),
            total: keys.length,
        };
    } catch {
        return { entries: [], total: 0 };
    }
};

const getRetentionWeight = (values) =>
    values.reduce((weight, value) => {
        if (Array.isArray(value)) {
            return weight + Math.min(value.length + 1, 1000);
        }
        if (typeof value === 'string') {
            return weight + Math.max(1, Math.ceil(value.length / 256));
        }
        return weight + (value && typeof value === 'object' ? 5 : 1);
    }, 1);

const retainRecentLogs = (logs) => {
    const retainedLogs = [];
    let retainedWeight = 0;

    for (let index = logs.length - 1; index >= 0; index--) {
        const log = logs[index];
        const nextWeight = retainedWeight + log.retentionWeight;
        if (
            retainedLogs.length > 0 &&
            (retainedLogs.length >= maxConsoleEntries ||
                nextWeight > maxConsoleRetentionWeight)
        ) {
            break;
        }
        retainedLogs.push(log);
        retainedWeight = nextWeight;
    }

    return retainedLogs.reverse();
};

const ConsoleValue = memo(function ConsoleValue({ value, depth = 0 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [entryLimit, setEntryLimit] = useState(expandedEntryBatchSize);

    if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
        return (
            <Code
                color="inherit"
                background="transparent"
                whiteSpace="pre-wrap"
                fontFamily="inherit"
                fontSize="inherit"
            >
                {formatPrimitive(value)}
            </Code>
        );
    }

    const summary = getObjectSummary(value);

    if (value instanceof Date || depth >= 8) {
        return (
            <Code color="inherit" background="transparent" fontFamily="inherit" fontSize="inherit">
                {summary}
            </Code>
        );
    }

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={({ open }) => setIsOpen(open)}
            lazyMount
            unmountOnExit
        >
            <Collapsible.Trigger
                display="inline-flex"
                alignItems="center"
                gap={1}
                color="inherit"
                cursor="pointer"
                fontFamily="inherit"
                fontSize="inherit"
                _hover={{ color: 'white' }}
                css={{
                    '&[data-state=open] > svg': {
                        transform: 'rotate(90deg)',
                    },
                }}
            >
                <FiChevronRight style={{ transition: 'transform 120ms ease' }} />
                <Text as="span">{summary}</Text>
            </Collapsible.Trigger>
            <Collapsible.Content
                marginStart={2}
                paddingStart={3}
                borderLeft="1px solid"
                borderColor="whiteAlpha.300"
            >
                {isOpen && (
                    <ConsoleEntries
                        value={value}
                        depth={depth}
                        entryLimit={entryLimit}
                        onShowMore={() =>
                            setEntryLimit(
                                (currentLimit) =>
                                    currentLimit + expandedEntryBatchSize
                            )
                        }
                    />
                )}
            </Collapsible.Content>
        </Collapsible.Root>
    );
});

const ConsoleEntries = memo(function ConsoleEntries({
    value,
    depth,
    entryLimit,
    onShowMore,
}) {
    const { entries, total } = getObjectEntries(value, entryLimit);

    return (
        <Stack gap={0.5} paddingY={0.5}>
            {entries.map(([key, childValue]) => (
                <Flex key={key} alignItems="flex-start" gap={1} minWidth={0}>
                    <Text as="span" color="purple.200" flexShrink={0}>
                        {key}:
                    </Text>
                    <ConsoleValue value={childValue} depth={depth + 1} />
                </Flex>
            ))}
            {entries.length < total && (
                <Button
                    alignSelf="flex-start"
                    size="xs"
                    variant="ghost"
                    color="blue.200"
                    onClick={onShowMore}
                >
                    Show {Math.min(expandedEntryBatchSize, total - entries.length)} more
                </Button>
            )}
        </Stack>
    );
});

const LogsContainer = memo(forwardRef(({ logs, setLogs }, ref) => {
    useEffect(() => {
        const originalMethods = Object.fromEntries(
            consoleMethods.map((method) => [method, window.console[method]])
        );

        consoleMethods.forEach((method) => {
            window.console[method] = (...args) => {
                originalMethods[method](...args);
                if (typeof args[0] === 'string' && args[0].includes('dsdebug-log')) {
                    setLogs((currentLogs) => {
                        const nextLogs = [
                            ...currentLogs,
                            {
                                method,
                                data: args.slice(1),
                                timestamp: Date.now(),
                                retentionWeight: getRetentionWeight(
                                    args.slice(1)
                                ),
                            },
                        ];
                        return retainRecentLogs(nextLogs);
                    });
                }
            };
        });

        window.console.log('dsdebug-log', 'DSDebug console ready.');

        return () => {
            consoleMethods.forEach((method) => {
                window.console[method] = originalMethods[method];
            });
        };
    }, [setLogs]);

    return (
        <Stack
            ref={ref}
            gap={1}
            paddingX={3}
            paddingY={2}
            fontFamily="Consolas, Lucida Console, Courier New, monospace"
            fontSize="12px"
        >
            {logs.map((log, logIndex) => (
                <Flex
                    key={`${log.timestamp}-${log.method}-${logIndex}`}
                    color={logColors[log.method]}
                    alignItems="flex-start"
                    gap={2}
                    minWidth={0}
                >
                    {log.data.map((value, index) => (
                        <ConsoleValue key={index} value={value} />
                    ))}
                </Flex>
            ))}
        </Stack>
    );
}));

LogsContainer.displayName = 'LogsContainer';

export default LogsContainer;
