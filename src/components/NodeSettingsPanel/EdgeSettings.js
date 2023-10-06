import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox,
    Text,
    Textarea,
    RadioGroup,
    Radio,
    HStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Badge,
    useToast,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { useNode } from '../../contexts/NodeContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon } from '@chakra-ui/icons';

const NodeSettingsPanel = () => {
    const { selectedEdge, data, setData } = useNode();
    const [editedEdge, setEditedEdge] = useState(null);

    const toastId = 'error-toast';

    // May be a better way to update the node side panel when selection changes
    useEffect(() => {
        setEditedEdge(selectedEdge);
    }, [selectedEdge]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'output') {
            // Create a copy of the editedEdge and update the label
            const updatedEdge = {
                ...editedEdge,
                label: value,
            };
            setEditedEdge(updatedEdge); // Update the editedEdge state
        }
    };

    const handleUpdateEdge = () => {
        // Create a copy of your data to avoid directly mutating it
        const updatedData = { ...data };

        // Find the index of the selected edge in your data
        const edgeIndex = updatedData.cells.findIndex(
            (edge) => edge.id === selectedEdge.id
        );

        if (edgeIndex !== -1) {
            // Update the label of the selected edge
            updatedData.cells[edgeIndex].output.value = editedEdge.label;

            // Update your global data with the modified copy
            setData(updatedData);

            // // Display a success message
            // toast({
            //     position: 'top-right',
            //     title: 'Success',
            //     description: 'Edge label updated',
            //     status: 'success',
            //     duration: 9000,
            //     isClosable: true,
            // });
        }
    };

    // useEffect(() => {
    //     console.log('dsdebug-log', 'Updated editedNode:', selectedEdge[0]);
    // }, [editedNode]);

    const toast = useToast();

    const handleSaveChanges = () => {
        handleUpdateEdge(editedEdge);
    };
    try {
        return (
            <Box
                w="20rem"
                backgroundColor="#fff"
                borderLeft="1px solid #ccc"
                overflowY="auto"
                paddingTop={50}
            >
                <Box position={'relative'} p={4}>
                    {/* Set a fixed height to enable scrolling */}
                    <FormControl>
                        Edge ID: {selectedEdge.id}
                        <FormLabel>Output</FormLabel>
                        <Select
                            backgroundColor="#fff"
                            name="output"
                            value={editedEdge?.label}
                            onChange={handleInputChange}
                            onBlur={handleSaveChanges}
                            placeholder=" "
                        >
                            <option value="Success">Success</option>
                            <option value="Failure">Failure</option>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        );
    } catch (error) {
        if (!toast.isActive(toastId)) {
            toast({
                toastId,
                position: 'top-right',
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
                containerStyle: {
                    // marginTop: '55px',
                },
            });
        }
    }
};

export default NodeSettingsPanel;
