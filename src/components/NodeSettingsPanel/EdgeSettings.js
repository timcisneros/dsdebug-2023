import { useState } from 'react';
import { Box, Field, NativeSelect } from '@chakra-ui/react';
import { useWorkflowActions } from '../../contexts/NodeContext';
import { stepDataMapping } from '../SidePanel/Steps/StepData';

const EdgeSettings = ({ selectedEdge, sourceNode }) => {
    const { setData } = useWorkflowActions();
    const [editedLabel, setEditedLabel] = useState(selectedEdge?.label ?? '');
    const outputData = sourceNode
        ? stepDataMapping[sourceNode.data.activityName]?.outputData ?? []
        : [];

    if (!selectedEdge || outputData.length === 0) return null;

    const handleSaveChanges = () => {
        setData((currentData) => ({
            ...currentData,
            cells: currentData.cells.map((cell) =>
                cell.id === selectedEdge.id
                    ? {
                          ...cell,
                          output: {
                              ...cell.output,
                              value: editedLabel,
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
                            value={editedLabel}
                            onChange={(event) =>
                                setEditedLabel(event.target.value)
                            }
                            onBlur={handleSaveChanges}
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
