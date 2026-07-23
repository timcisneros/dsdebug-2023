import { Box, Field, NativeSelect } from '@chakra-ui/react';
import { useWorkflowActions } from '../../contexts/NodeContext';
import { stepDataMapping } from '../SidePanel/Steps/StepData';

const EdgeSettings = ({ selectedEdge, sourceNode }) => {
    const { setData } = useWorkflowActions();
    const outputData = sourceNode
        ? stepDataMapping[sourceNode.data.activityName]?.outputData ?? []
        : [];

    if (!selectedEdge || outputData.length === 0) return null;

    const handleLabelChange = (nextLabel) => {
        setData((currentData) => ({
            ...currentData,
            cells: currentData.cells.map((cell) =>
                cell.id === selectedEdge.id
                    ? {
                          ...cell,
                          output: {
                              ...cell.output,
                              value: nextLabel,
                          },
                      }
                    : cell
            ),
        }));
    };

    return (
        <Box
            w="20rem"
            backgroundColor="#fff"
            borderLeft="1px solid #ccc"
            overflowY="auto"
            paddingTop={50}
        >
            <Box position="relative" p={4}>
                <Field.Root>
                    <Field.Label>Link Output</Field.Label>
                    <NativeSelect.Root backgroundColor="#fff">
                        <NativeSelect.Field
                            name="output"
                            value={selectedEdge.label ?? ''}
                            onChange={(event) =>
                                handleLabelChange(event.target.value)
                            }
                        >
                            <option value="" />
                            {outputData.map((output) => (
                                <option key={output} value={output}>
                                    {output}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>
            </Box>
        </Box>
    );
};

export default EdgeSettings;
