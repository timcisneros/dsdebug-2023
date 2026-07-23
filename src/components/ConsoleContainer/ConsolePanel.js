import { forwardRef, memo } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { Resizable } from 'react-resizable';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SvgIcon from '../ui/SvgIcon';
import ConsoleCommandLine from './ConsoleCommandLine';
import LogsContainer from './LogsContainer';

const focusConsoleOutput = (event) => {
    if (event.isPrimary && event.button === 0) {
        event.currentTarget.focus({ preventScroll: true });
    }
};

const ConsoleResizeHandle = forwardRef(function ConsoleResizeHandle(
    { handleAxis: _handleAxis, ...dragHandleProps },
    ref
) {
    return (
        <Box
            {...dragHandleProps}
            ref={ref}
            role="separator"
            aria-label="Resize console"
            aria-orientation="horizontal"
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            width="40px"
            height="24px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="ns-resize"
            touchAction="none"
            userSelect="none"
            zIndex={2}
        >
            <SvgIcon color="#fff" src="step-images/more-horizontal.svg" />
        </Box>
    );
});

const ConsolePanel = memo(function ConsolePanel({
    commandHistory,
    commandInputRef,
    focusCommandInput,
    getCompletions,
    handleCancelCommand,
    handleCommandSubmit,
    handleResize,
    handleResizeStop,
    inputVisible,
    isExpanded,
    logs,
    logsEndRef,
    maxConsoleHeight,
    onClear,
    setCommandHistory,
    setLogs,
    splitHeight,
    toggleContainerHeight,
}) {
    return (
        <Resizable
            width={0}
            height={splitHeight}
            onResize={handleResize}
            onResizeStop={handleResizeStop}
            minConstraints={[0, 24]}
            maxConstraints={[0, maxConsoleHeight]}
            resizeHandles={['n']}
            axis="y"
            handle={<ConsoleResizeHandle />}
        >
            <Box
                w="100%"
                h="100%"
                backgroundColor="#212121"
                display="flex"
                flexDirection="column"
                position="relative"
                paddingTop="24px"
                minHeight="0"
                overflow="hidden"
            >
                <IconButton
                    zIndex={1}
                    position="absolute"
                    top="0"
                    right="10px"
                    onClick={toggleContainerHeight}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    variant="unstyled"
                    color="white"
                    size="xs"
                >
                    {isExpanded ? <FiChevronDown /> : <FiChevronUp />}
                </IconButton>
                <Box
                    data-console-input-region
                    flex="1"
                    minHeight="0"
                    display="flex"
                    flexDirection="column"
                    visibility={inputVisible ? 'visible' : 'hidden'}
                    pointerEvents={inputVisible ? 'auto' : 'none'}
                >
                    <Box
                        borderTop="1px solid #2C2C2C"
                        width="100%"
                        flex="1"
                        minHeight="0"
                        overflowY="scroll"
                        className="console"
                        role="region"
                        aria-label="Console output"
                        tabIndex={0}
                        userSelect="text"
                        _focusVisible={{ outline: '1px solid #4A5568' }}
                        onPointerDown={focusConsoleOutput}
                    >
                        <LogsContainer
                            ref={logsEndRef}
                            logs={logs}
                            setLogs={setLogs}
                        />
                    </Box>
                    <Box
                        width="100%"
                        flexShrink={0}
                        backgroundColor="#212121"
                        borderTop="1px solid #2c2c2c"
                        onClick={focusCommandInput}
                    >
                        <ConsoleCommandLine
                            commandHistory={commandHistory}
                            getCompletions={getCompletions}
                            inputRef={commandInputRef}
                            onCancel={handleCancelCommand}
                            onClear={onClear}
                            onSubmitCommand={handleCommandSubmit}
                            setCommandHistory={setCommandHistory}
                        />
                    </Box>
                </Box>
            </Box>
        </Resizable>
    );
});

export default ConsolePanel;
