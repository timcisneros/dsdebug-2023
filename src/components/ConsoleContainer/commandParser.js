const operatorCharacters = new Set([';', '&', '|', '\n', '\r']);

const tokenizeCommandLine = (input) => {
    const tokens = [];
    let currentWord = '';
    let quote = null;
    let escaping = false;
    let wordStarted = false;

    const finishWord = () => {
        if (!wordStarted) return;
        tokens.push({ type: 'word', value: currentWord });
        currentWord = '';
        wordStarted = false;
    };

    for (let index = 0; index < input.length; index++) {
        const character = input[index];

        if (quote === "'") {
            if (character === "'") quote = null;
            else currentWord += character;
            wordStarted = true;
            continue;
        }

        if (quote === '"') {
            if (character === '"') {
                quote = null;
            } else if (character === '\\') {
                const nextCharacter = input[index + 1];
                if (nextCharacter === '\n' || nextCharacter === '\r') {
                    if (nextCharacter === '\r' && input[index + 2] === '\n') {
                        index++;
                    }
                    index++;
                } else if (['"', '\\', '$', '`'].includes(nextCharacter)) {
                    currentWord += nextCharacter;
                    index++;
                } else {
                    currentWord += character;
                }
            } else {
                currentWord += character;
            }
            wordStarted = true;
            continue;
        }

        if (escaping) {
            if (character === '\n' || character === '\r') {
                if (character === '\r' && input[index + 1] === '\n') index++;
                escaping = false;
                continue;
            }
            currentWord += character;
            wordStarted = true;
            escaping = false;
            continue;
        }

        if (character === '\\') {
            escaping = true;
            continue;
        }

        if (character === '"' || character === "'") {
            quote = character;
            wordStarted = true;
            continue;
        }

        if (character === '#' && !wordStarted) {
            while (
                index + 1 < input.length &&
                input[index + 1] !== '\n' &&
                input[index + 1] !== '\r'
            ) {
                index++;
            }
            continue;
        }

        if (/\s/.test(character) && character !== '\n' && character !== '\r') {
            finishWord();
            continue;
        }

        if (operatorCharacters.has(character)) {
            finishWord();

            if (character === '\n' || character === '\r' || character === ';') {
                if (character === '\r' && input[index + 1] === '\n') index++;
                const previousToken = tokens.at(-1);
                if (
                    character !== ';' &&
                    previousToken?.type === 'operator' &&
                    ['&&', '||', '|'].includes(previousToken.value)
                ) {
                    continue;
                }
                tokens.push({ type: 'operator', value: ';' });
                continue;
            }

            const pair = `${character}${input[index + 1] ?? ''}`;
            if (pair === '&&' || pair === '||') {
                tokens.push({ type: 'operator', value: pair });
                index++;
                continue;
            }

            if (character === '|') {
                tokens.push({ type: 'operator', value: '|' });
                continue;
            }

            throw new Error("Use '&&' to conditionally run another command; background jobs are not supported.");
        }

        currentWord += character;
        wordStarted = true;
    }

    if (escaping) throw new Error('Command cannot end with an escape character.');
    if (quote) throw new Error(`Missing closing ${quote} quote.`);

    finishWord();
    return tokens;
};

const createCommand = (words) => ({
    name: words[0].toLowerCase(),
    args: words.slice(1),
});

export const parseCommandLine = (input) => {
    const tokens = tokenizeCommandLine(input);
    const groups = [];
    let connector = null;
    let pipeline = [];
    let words = [];

    const finishCommand = (operator) => {
        if (words.length === 0) {
            if (operator === ';') return false;
            throw new Error(`Missing command before '${operator}'.`);
        }
        pipeline.push(createCommand(words));
        words = [];
        return true;
    };

    const finishGroup = (nextConnector) => {
        if (pipeline.length === 0) return;
        groups.push({ connector, pipeline });
        connector = nextConnector;
        pipeline = [];
    };

    for (const token of tokens) {
        if (token.type === 'word') {
            words.push(token.value);
            continue;
        }

        if (token.value === '|') {
            finishCommand('|');
            continue;
        }

        const commandFinished = finishCommand(token.value);
        if (commandFinished || pipeline.length > 0) {
            finishGroup(token.value === ';' ? 'sequence' : token.value);
        }
    }

    if (words.length > 0) {
        finishCommand('end of input');
        finishGroup(null);
    } else if (pipeline.length > 0) {
        throw new Error("Missing command after '|'.");
    } else if (connector === '&&' || connector === '||') {
        throw new Error(`Missing command after '${connector}'.`);
    }

    return groups;
};

export const getActiveCommand = (input) => {
    let segmentStart = 0;
    let hasPipelineInput = false;
    let pipelinePrefixEnd = null;
    let quote = null;
    let escaping = false;
    let inComment = false;
    let segmentWordStarted = false;
    let segmentHasCommand = false;

    for (let index = 0; index < input.length; index++) {
        const character = input[index];
        if (inComment) {
            if (character === '\n' || character === '\r') {
                if (character === '\r' && input[index + 1] === '\n') index++;
                inComment = false;
                segmentWordStarted = false;
                segmentStart = index + 1;
                if (!(hasPipelineInput && !segmentHasCommand)) {
                    hasPipelineInput = false;
                    pipelinePrefixEnd = null;
                }
                segmentHasCommand = false;
            }
            continue;
        }
        if (quote === "'") {
            if (character === "'") quote = null;
            segmentWordStarted = true;
            segmentHasCommand = true;
            continue;
        }
        if (quote === '"') {
            if (character === '"') quote = null;
            else if (character === '\\') {
                const nextCharacter = input[index + 1];
                if (
                    nextCharacter === '\n' ||
                    nextCharacter === '\r' ||
                    ['"', '\\', '$', '`'].includes(nextCharacter)
                ) {
                    if (nextCharacter === '\r' && input[index + 2] === '\n') {
                        index++;
                    }
                    index++;
                }
            }
            segmentWordStarted = true;
            segmentHasCommand = true;
            continue;
        }
        if (escaping) {
            escaping = false;
            if (character === '\n' || character === '\r') {
                if (character === '\r' && input[index + 1] === '\n') index++;
                continue;
            }
            segmentWordStarted = true;
            segmentHasCommand = true;
            continue;
        }
        if (character === '\\') {
            escaping = true;
            continue;
        }
        if (character === '"' || character === "'") {
            quote = character;
            segmentWordStarted = true;
            segmentHasCommand = true;
            continue;
        }
        if (character === '#' && !segmentWordStarted) {
            inComment = true;
            continue;
        }
        if (/\s/.test(character) && character !== '\n' && character !== '\r') {
            segmentWordStarted = false;
            continue;
        }
        if (character === ';' || character === '\n' || character === '\r') {
            segmentStart = index + 1;
            if (!(hasPipelineInput && !segmentHasCommand)) {
                hasPipelineInput = false;
                pipelinePrefixEnd = null;
            }
            segmentWordStarted = false;
            segmentHasCommand = false;
            continue;
        }
        const pair = `${character}${input[index + 1] ?? ''}`;
        if (pair === '&&' || pair === '||') {
            segmentStart = index + 2;
            hasPipelineInput = false;
            pipelinePrefixEnd = null;
            segmentWordStarted = false;
            segmentHasCommand = false;
            index++;
        } else if (character === '|') {
            pipelinePrefixEnd = index;
            segmentStart = index + 1;
            hasPipelineInput = true;
            segmentWordStarted = false;
            segmentHasCommand = false;
        } else {
            segmentWordStarted = true;
            segmentHasCommand = true;
        }
    }

    let pipelineCommands = [];
    if (hasPipelineInput && pipelinePrefixEnd !== null) {
        try {
            const parsedPrefix = parseCommandLine(
                input.slice(0, pipelinePrefixEnd)
            );
            pipelineCommands = parsedPrefix.at(-1)?.pipeline ?? [];
        } catch {
            pipelineCommands = [];
        }
    }

    if (inComment) {
        return {
            segment: input.slice(segmentStart),
            value: '',
            words: [''],
            commandName: '',
            hasPipelineInput: false,
            pipelineCommands: [],
            argumentIndex: -1,
            completingCommand: true,
            inComment: true,
            token: '',
            tokenStart: input.length,
        };
    }

    const segment = input.slice(segmentStart);
    const words = [];
    let currentWord = '';
    let currentWordStart = input.length;
    let wordStarted = false;
    quote = null;
    escaping = false;

    const finishWord = () => {
        if (!wordStarted) return;
        words.push(currentWord);
        currentWord = '';
        wordStarted = false;
    };

    for (let index = segmentStart; index < input.length; index++) {
        const character = input[index];
        if (quote === "'") {
            if (character === "'") quote = null;
            else currentWord += character;
            wordStarted = true;
            continue;
        }
        if (quote === '"') {
            if (character === '"') {
                quote = null;
            } else if (character === '\\') {
                const nextCharacter = input[index + 1];
                if (nextCharacter === '\n' || nextCharacter === '\r') {
                    if (nextCharacter === '\r' && input[index + 2] === '\n') {
                        index++;
                    }
                    index++;
                } else if (['"', '\\', '$', '`'].includes(nextCharacter)) {
                    currentWord += nextCharacter;
                    index++;
                } else {
                    currentWord += character;
                }
            } else {
                currentWord += character;
            }
            wordStarted = true;
            continue;
        }
        if (escaping) {
            if (character === '\n' || character === '\r') {
                if (character === '\r' && input[index + 1] === '\n') index++;
                escaping = false;
                continue;
            }
            currentWord += character;
            wordStarted = true;
            escaping = false;
            continue;
        }
        if (character === '\\') {
            if (!wordStarted) currentWordStart = index;
            escaping = true;
            continue;
        }
        if (character === '"' || character === "'") {
            if (!wordStarted) currentWordStart = index;
            wordStarted = true;
            quote = character;
            continue;
        }
        if (/\s/.test(character)) {
            finishWord();
            continue;
        }
        if (!wordStarted) currentWordStart = index;
        wordStarted = true;
        currentWord += character;
    }

    if (wordStarted) words.push(currentWord);
    else {
        words.push('');
        currentWordStart = input.length;
    }

    const token = words.at(-1) ?? '';
    const completingCommand = words.length <= 1;
    return {
        segment,
        value: segment.trimStart(),
        words,
        commandName: words[0]?.toLowerCase() ?? '',
        hasPipelineInput,
        pipelineCommands,
        argumentIndex: completingCommand ? -1 : words.length - 2,
        completingCommand,
        inComment: false,
        token,
        tokenStart: currentWordStart,
    };
};

export const getCommandContinuation = (input) => {
    try {
        parseCommandLine(input);
        return null;
    } catch (error) {
        if (error.message.startsWith('Missing closing')) return 'quote';
        if (error.message === 'Command cannot end with an escape character.') {
            return 'escape';
        }
        if (
            error.message === "Missing command after '|'." ||
            error.message.startsWith("Missing command after '&&'") ||
            error.message.startsWith("Missing command after '||'")
        ) {
            return 'operator';
        }
        return null;
    }
};
