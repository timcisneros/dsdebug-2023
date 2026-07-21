import { forwardRef, useEffect } from 'react';
import { Box, Code, Stack, Text } from '@chakra-ui/react';

const consoleMethods = ['log', 'info', 'warn', 'error'];

const formatValue = (value) => {
    if (typeof value === 'string') return value;
    try {
        return JSON.stringify(value, null, 2);
    } catch {
        return String(value);
    }
};

const logColors = {
    error: 'red.300',
    warn: 'yellow.300',
    info: 'blue.200',
    log: 'gray.100',
};

const LogsContainer = forwardRef(({ logs, setLogs }, ref) => {
    useEffect(() => {
        const originalMethods = Object.fromEntries(
            consoleMethods.map((method) => [method, window.console[method]])
        );

        consoleMethods.forEach((method) => {
            window.console[method] = (...args) => {
                originalMethods[method](...args);
                if (
                    typeof args[0] === 'string' &&
                    args[0].includes('dsdebug-log')
                ) {
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
        <Stack ref={ref} gap={1} padding={2} fontSize="sm">
            {logs.map((log, logIndex) => (
                <Box
                    key={`${log.timestamp}-${log.method}-${logIndex}`}
                    color={logColors[log.method]}
                >
                    <Text as="span" fontWeight="bold" marginEnd={2}>
                        {log.method}
                    </Text>
                    {log.data.map((value, index) => (
                        <Code
                            key={index}
                            color="inherit"
                            background="transparent"
                            whiteSpace="pre-wrap"
                            marginEnd={2}
                        >
                            {formatValue(value)}
                        </Code>
                    ))}
                </Box>
            ))}
        </Stack>
    );
});

LogsContainer.displayName = 'LogsContainer';

export default LogsContainer;
