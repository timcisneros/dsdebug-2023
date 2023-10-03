import { useEffect, forwardRef } from 'react';
import { Console, Hook, Unhook } from 'console-feed';
import { Box } from '@chakra-ui/react';

const LogsContainer = forwardRef(({ logs, setLogs }, ref) => {
    // Custom log filter function to check if the log includes 'dsdebug-log' as the first element
    const logFilter = (log) => {
        // Check if the log is an array and not empty
        if (Array.isArray(log.data) && log.data.length > 0) {
            const firstElement = log.data[0];
            // Check if the first element contains 'dsdebug-log'
            if (
                typeof firstElement === 'string' &&
                firstElement.includes('dsdebug-log')
            ) {
                // Remove the first element from the log data
                const filteredData = log.data.slice(1);
                // Create a new log object without the first element
                const filteredLog = { ...log, data: filteredData };
                // Add the filtered log to the logs state
                setLogs((currLogs) => [...currLogs, filteredLog]);
                return false; // Do not display the log in the <Console /> component
            }
        }
        return false; // Filter out logs that do not meet the criteria
    };

    // run once!
    useEffect(() => {
        const hookedConsole = Hook(
            window.console,
            (log) => {
                // Apply custom filter using logFilter function
                if (logFilter(log)) {
                    setLogs((currLogs) => [...currLogs, log]);
                }
            },
            false
        );

        // Log runs only on component mount (initialization)
        console.log('dsdebug-log', 'dsdebug console version 1.0');
        return () => Unhook(hookedConsole);
    }, []);

    return (
        <Box ref={ref}>
            <Console logs={logs} variant="dark" />
        </Box>
    );
});

export default LogsContainer;
