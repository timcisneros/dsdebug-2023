import { memo, useRef, useState } from 'react';
import { Box, Textarea } from '@chakra-ui/react';
import { getActiveCommand, getCommandContinuation } from './commandParser';
import {
    getHistoryNavigation,
    shouldNavigateHistoryWithArrow,
} from './commandConsistency';
import {
    writeConsoleControl,
    writeExpandedConsoleControl,
} from './commandRuntime';

const commandTextareaStyle = { fieldSizing: 'content' };

const formatCompletion = (value) =>
    /^[A-Za-z0-9_.:/-]+$/.test(value)
        ? value
        : `"${value.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`;

const ConsoleCommandLine = memo(function ConsoleCommandLine({
    commandHistory,
    getCompletions,
    inputRef,
    onCancel,
    onClear,
    onSubmitCommand,
    setCommandHistory,
}) {
    const [inputValue, setInputValue] = useState('');
    const [commandIndex, setCommandIndex] = useState(-1);
    const [isContinuing, setIsContinuing] = useState(false);
    const historyDraftRef = useRef('');

    const updateInputValue = (nextValue, nextCursor) => {
        setInputValue(nextValue);
        setIsContinuing(
            nextValue.includes('\n') ||
                Boolean(getCommandContinuation(nextValue))
        );
        requestAnimationFrame(() => {
            inputRef.current?.setSelectionRange(nextCursor, nextCursor);
        });
    };

    const removeInputRange = (start, end) => {
        updateInputValue(
            `${inputValue.slice(0, start)}${inputValue.slice(end)}`,
            start
        );
    };

    const deletePreviousWord = (inputElement) => {
        const cursorStart = inputElement.selectionStart;
        const cursorEnd = inputElement.selectionEnd;
        if (cursorStart !== cursorEnd) {
            removeInputRange(cursorStart, cursorEnd);
            return;
        }

        const lineStart = inputValue.lastIndexOf('\n', cursorStart - 1) + 1;
        let wordStart = cursorStart;
        while (
            wordStart > lineStart &&
            /[ \t]/.test(inputValue[wordStart - 1])
        ) {
            wordStart--;
        }
        while (
            wordStart > lineStart &&
            !/[ \t]/.test(inputValue[wordStart - 1])
        ) {
            wordStart--;
        }
        removeInputRange(wordStart, cursorStart);
    };

    const navigateHistory = (direction) => {
        if (commandHistory.length === 0) return;
        const navigation = getHistoryNavigation({
            currentIndex: commandIndex,
            currentValue: inputValue,
            direction,
            draft: historyDraftRef.current,
            history: commandHistory,
        });
        historyDraftRef.current = navigation.draft;
        setCommandIndex(navigation.index);
        updateInputValue(navigation.value, navigation.value.length);
    };

    const submitCurrentCommand = async () => {
        if (!inputValue.trim()) return;

        const submittedCommand = inputValue;
        setCommandHistory((currentHistory) => {
            const nextHistory = [...currentHistory, submittedCommand];
            setCommandIndex(nextHistory.length);
            return nextHistory;
        });
        setInputValue('');
        setIsContinuing(false);
        historyDraftRef.current = '';
        writeConsoleControl(`$ ${submittedCommand}`);
        await onSubmitCommand(submittedCommand);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        void submitCurrentCommand();
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key.toLowerCase() === 'a') {
            event.preventDefault();
            const cursor = event.currentTarget.selectionStart;
            const lineStart = inputValue.lastIndexOf('\n', cursor - 1) + 1;
            event.currentTarget.setSelectionRange(lineStart, lineStart);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'e') {
            event.preventDefault();
            const cursor = event.currentTarget.selectionEnd;
            const nextNewline = inputValue.indexOf('\n', cursor);
            const lineEnd =
                nextNewline === -1 ? inputValue.length : nextNewline;
            event.currentTarget.setSelectionRange(lineEnd, lineEnd);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'p') {
            event.preventDefault();
            navigateHistory(-1);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'n') {
            event.preventDefault();
            navigateHistory(1);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'u') {
            event.preventDefault();
            const cursor = event.currentTarget.selectionStart;
            const lineStart = inputValue.lastIndexOf('\n', cursor - 1) + 1;
            removeInputRange(lineStart, cursor);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            const cursor = event.currentTarget.selectionStart;
            const nextNewline = inputValue.indexOf('\n', cursor);
            const lineEnd =
                nextNewline === -1 ? inputValue.length : nextNewline;
            removeInputRange(cursor, lineEnd);
            return;
        }

        if (
            (event.ctrlKey && event.key.toLowerCase() === 'w') ||
            (event.key === 'Backspace' &&
                (event.ctrlKey || event.altKey) &&
                !event.metaKey)
        ) {
            event.preventDefault();
            deletePreviousWord(event.currentTarget);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'c') {
            event.preventDefault();
            onCancel();
            setInputValue('');
            setIsContinuing(false);
            historyDraftRef.current = '';
            setCommandIndex(commandHistory.length);
            writeConsoleControl('^C');
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'l') {
            event.preventDefault();
            onClear();
            return;
        }

        if (event.key === 'Enter') {
            if (event.shiftKey) {
                setIsContinuing(true);
                return;
            }
            if (getCommandContinuation(inputValue)) {
                setIsContinuing(true);
                return;
            }
            event.preventDefault();
            void submitCurrentCommand();
            return;
        }

        if (event.key === 'Tab') {
            event.preventDefault();
            if (event.currentTarget.selectionStart !== inputValue.length) return;
            const activeCommand = getActiveCommand(inputValue);
            const completions = getCompletions(activeCommand);
            if (completions.length === 0) return;

            let completion = completions[0];
            if (completions.length > 1) {
                completion = completions.reduce((prefix, candidate) => {
                    let index = 0;
                    while (
                        index < prefix.length &&
                        prefix[index].toLowerCase() ===
                            candidate[index]?.toLowerCase()
                    ) {
                        index++;
                    }
                    return prefix.slice(0, index);
                });
                if (completion.length <= activeCommand.token.length) {
                    writeExpandedConsoleControl(completions);
                    return;
                }
            }
            const formattedCompletion = formatCompletion(completion);
            const appendSpace =
                activeCommand.completingCommand || completions.length === 1;
            const completedValue = `${inputValue.slice(
                0,
                activeCommand.tokenStart
            )}${formattedCompletion}${appendSpace ? ' ' : ''}`;
            updateInputValue(completedValue, completedValue.length);
            return;
        }

        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

        const historyCursor =
            event.key === 'ArrowUp'
                ? event.currentTarget.selectionStart
                : event.currentTarget.selectionEnd;
        if (
            !shouldNavigateHistoryWithArrow(
                inputValue,
                event.key,
                historyCursor
            )
        ) {
            return;
        }

        event.preventDefault();
        navigateHistory(event.key === 'ArrowUp' ? -1 : 1);
    };

    return (
        <Box as="form" width="100%" onSubmit={handleSubmit}>
            <Box
                position="relative"
                width="100%"
                backgroundColor="#212121"
            >
                <Box
                    aria-hidden="true"
                    position="absolute"
                    top="9px"
                    left="12px"
                    zIndex={1}
                    color="gray.300"
                    fontFamily="Consolas,Lucida Console,Courier New,monospace"
                    fontSize="12px"
                    lineHeight="18px"
                    pointerEvents="none"
                >
                    {isContinuing ? '>' : '$'}
                </Box>
                <Textarea
                    ref={inputRef}
                    className="console console-command-input"
                    rows={1}
                    spellCheck="false"
                    placeholder="type 'help' for commands"
                    fontFamily="Consolas,Lucida Console,Courier New,monospace"
                    fontSize="12px"
                    color="#fff"
                    backgroundColor="transparent"
                    variant="unstyled"
                    width="100%"
                    minHeight="36px"
                    maxHeight="120px"
                    resize="none"
                    overflowY="auto"
                    paddingInlineStart="32px"
                    paddingInlineEnd="12px"
                    paddingY="9px"
                    lineHeight="18px"
                    css={commandTextareaStyle}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        const nextValue = event.target.value;
                        setInputValue(nextValue);
                        setIsContinuing(
                            nextValue.includes('\n') ||
                                Boolean(getCommandContinuation(nextValue))
                        );
                    }}
                    _placeholder={{ color: 'gray.500' }}
                />
            </Box>
        </Box>
    );
});

export default ConsoleCommandLine;
