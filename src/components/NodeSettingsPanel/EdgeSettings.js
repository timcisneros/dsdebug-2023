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
import { stepDataMapping } from '../SidePanel/Steps/StepData';

const NodeSettingsPanel = () => {
    const { selectedEdge, data, setData } = useNode();
    const [sourceStep, setSourceStep] = useState();
    const [editedEdge, setEditedEdge] = useState(null);

    const toastId = 'error-toast';

    // May be a better way to update the node side panel when selection changes
    useEffect(() => {
        setEditedEdge(selectedEdge);
        setSourceStep(
            data.cells.find((step) => selectedEdge.source === step.id)
        );
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
                    {sourceStep &&
                        stepDataMapping[sourceStep.activityName].outputData
                            .length > 0 && (
                            <FormControl>
                                {/* Edge ID: {selectedEdge.id} */}
                                <FormLabel>Output</FormLabel>
                                <Select
                                    backgroundColor="#fff"
                                    name="output"
                                    value={editedEdge?.label}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                    placeholder=" "
                                >
                                    {stepDataMapping[
                                        sourceStep.activityName
                                    ].outputData.map((output, index) => (
                                        <option key={index} value={output}>
                                            {output}
                                        </option>
                                    ))}
                                </Select>
                                {/* <option value="Success">Success</option>
                            <option value="Failure">Failure</option>
                            <option value="Timed Out">Timed Out</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Cancel">Cancel</option>
                            <option value="Timeout - Action">
                                Timeout - Action
                            </option>
                            <option value="ActionCompleted">
                                ActionCompleted
                            </option>
                            <option value="ActionRejected">
                                ActionRejected
                            </option>
                            <option value="Compare Timeout">
                                Compare Timeout
                            </option>
                            <option value="No Version">No Version</option>
                            <option value="Action Canceled">
                                Action Canceled
                            </option>
                            <option value="Action Completed">
                                Action Completed
                            </option>
                            <option value="Failure Reminder Not Found">
                                Failure Reminder Not Found
                            </option>
                            <option value="Conditional Success">
                                Conditional Success
                            </option>
                            <option value="Match">Match</option>
                            <option value="No Match">No Match</option>
                            <option value="Has Attachments">
                                Has Attachments
                            </option>
                            <option value="No Attachments">
                                No Attachments
                            </option>
                            <option value="Found">Found</option>
                            <option value="Not Found">Not Found</option>
                            <option value="Step">Step</option>
                            <option value="Loop End">Loop End</option>
                            <option value="Response Failure">
                                Response Failure
                            </option>
                            <option value="Webservice Execution Failed">
                                Webservice Execution Failed
                            </option>
                            <option value="Next Step">Next Step</option>
                            <option value="Not Enough Resources">
                                Not Enough Resources
                            </option>
                            <option value="Action Executed">
                                Action Executed
                            </option>
                            <option
                                value="Action Completed - External Review Rejected by
                                Sender"
                            >
                                Action Completed - External Review Rejected by
                                Sender
                            </option>
                            <option
                                value="Action Completed - External Review Sent by
                                Sender"
                            >
                                Action Completed - External Review Sent by
                                Sender
                            </option>
                            <option value="Canceled">Canceled</option>
                            <option
                                value="Action Completed - Sent by
                                Sender"
                            >
                                Action Completed - Sent by Sender
                            </option>
                            <option
                                value="Action Completed - Rejected by
                                Sender"
                            >
                                Action Completed - Rejected by Sender
                            </option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                            <option value="Duplicate Reminder">
                                Duplicate Reminder
                            </option>
                            <option value="Cancelled - Invalid Recipient">
                                Cancelled - Invalid Recipient
                            </option>
                            <option value="Cancelled - Manual Override">
                                Cancelled - Manual Override
                            </option>
                            <option value="Complete without Document">
                                Complete without Document
                            </option>
                            <option value="Complete with Document">
                                Complete with Document
                            </option>
                            <option value="Expired">Expired</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Signed">Signed</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Updated">Updated</option>
                            <option value="Set">Set</option>
                            <option value="Not Set">Not Set</option>
                            <option value="Not Updated">Not Updated</option>
                            <option value="Signalled">Signalled</option>
                            <option value="Child Workflow Aborted">
                                Child Workflow Aborted
                            </option>
                            <option value="Child Workflow Failure">
                                Child Workflow Failure
                            </option> */}
                            </FormControl>
                        )}
                </Box>
            </Box>
        );
    } catch (error) {
        // if (!toast.isActive(toastId)) {
        //     toast({
        //         toastId,
        //         position: 'top-right',
        //         title: 'Error',
        //         description: error.message,
        //         status: 'error',
        //         duration: 9000,
        //         isClosable: true,
        //         containerStyle: {
        //             // marginTop: '55px',
        //         },
        //     });
        // }
    }
};

export default NodeSettingsPanel;
