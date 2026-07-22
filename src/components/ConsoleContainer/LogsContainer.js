import { forwardRef, useEffect } from 'react';
import { Box, Code, Collapsible, Flex, Stack, Text } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

const consoleMethods = ['log', 'info', 'warn', 'error'];

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

const getObjectDetails = (value) => {
    if (value instanceof Date) {
        return { summary: value.toISOString(), entries: [] };
    }

    if (value instanceof Error) {
        return {
            summary: `${value.name}: ${value.message}`,
            entries: [
                ['message', value.message],
                ['stack', value.stack],
            ],
        };
    }

    try {
        const entries = Object.entries(value);
        const summary = Array.isArray(value)
            ? `Array(${value.length})`
            : `${value.constructor?.name || 'Object'} {${entries.length}}`;
        return { summary, entries };
    } catch {
        return { summary: String(value), entries: [] };
    }
};

const ConsoleValue = ({ value, depth = 0 }) => {
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

    const { summary, entries } = getObjectDetails(value);

    if (!entries.length || depth >= 8) {
        return (
            <Code color="inherit" background="transparent" fontFamily="inherit" fontSize="inherit">
                {summary}
            </Code>
        );
    }

    return (
        <Collapsible.Root lazyMount unmountOnExit>
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
                <Stack gap={0.5} paddingY={0.5}>
                    {entries.map(([key, childValue]) => (
                        <Flex key={key} alignItems="flex-start" gap={1} minWidth={0}>
                            <Text as="span" color="purple.200" flexShrink={0}>
                                {key}:
                            </Text>
                            <ConsoleValue value={childValue} depth={depth + 1} />
                        </Flex>
                    ))}
                </Stack>
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

const LogsContainer = forwardRef(({ logs, setLogs }, ref) => {
    useEffect(() => {
        const originalMethods = Object.fromEntries(
            consoleMethods.map((method) => [method, window.console[method]])
        );

        consoleMethods.forEach((method) => {
            window.console[method] = (...args) => {
                originalMethods[method](...args);
                if (typeof args[0] === 'string' && args[0].includes('dsdebug-log')) {
                    setLogs((currentLogs) => [
                        ...currentLogs,
                        { method, data: args.slice(1), timestamp: Date.now() },
                    ]);
                }
            };
        });

        window.console.log('dsdebug-log', 'dsdebug console version 1.0');

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
});

LogsContainer.displayName = 'LogsContainer';

export default LogsContainer;
