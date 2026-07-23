import {
    getPipelineArguments,
    normalizeCommandResult,
} from './commandRegistry.js';

export const executeParsedCommands = async ({
    commandRegistry,
    executeCommand,
    onError,
    onStatus,
    parsedCommands,
    setOutputSuppressed,
    throwIfAborted,
}) => {
    let previousSucceeded = true;
    let executionStatus = 0;

    const setStatus = (status) => {
        executionStatus = status;
        onStatus(status);
    };

    for (const commandGroup of parsedCommands) {
        throwIfAborted();
        if (
            (commandGroup.connector === '&&' && !previousSucceeded) ||
            (commandGroup.connector === '||' && previousSucceeded)
        ) {
            continue;
        }

        let pipelineValue;
        previousSucceeded = true;

        for (let index = 0; index < commandGroup.pipeline.length; index++) {
            throwIfAborted();
            const parsedCommand = commandGroup.pipeline[index];
            const command = commandRegistry.get(parsedCommand.name);
            if (!command?.execute) {
                onError(`Command not found: ${parsedCommand.name}`);
                previousSucceeded = false;
                pipelineValue = [];
                setStatus(127);
                continue;
            }

            if (
                index > 0 &&
                !command.acceptsInput &&
                !command.acceptsStructuredInput
            ) {
                onError(
                    `Command '${parsedCommand.name}' does not accept pipeline input.`
                );
                previousSucceeded = false;
                pipelineValue = [];
                setStatus(2);
                continue;
            }

            const forwardedPipelineValue =
                typeof pipelineValue === 'undefined' ? [] : pipelineValue;
            const pipelineArgs =
                index > 0
                    ? command.acceptsStructuredInput
                        ? [forwardedPipelineValue]
                        : getPipelineArguments(forwardedPipelineValue)
                    : command.acceptsStructuredInput
                      ? [undefined]
                      : [];
            const isIntermediate = index < commandGroup.pipeline.length - 1;

            try {
                setOutputSuppressed(isIntermediate);
                const commandResult = await executeCommand(command, [
                    ...pipelineArgs,
                    ...parsedCommand.args,
                ]);
                const result = normalizeCommandResult(commandResult);
                previousSucceeded = result.ok;
                pipelineValue = result.value;
                setStatus(result.ok ? 0 : 1);
            } catch (error) {
                if (error.name === 'AbortError') throw error;
                onError(
                    `Command '${parsedCommand.name}' failed: ${error.message}`
                );
                previousSucceeded = false;
                pipelineValue = [];
                setStatus(1);
            } finally {
                setOutputSuppressed(false);
            }
        }
    }

    return executionStatus;
};
