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
    const { selectedNodes, handleUpdateNode } = useNode();
    const [editedNode, setEditedNode] = useState(null);

    const toastId = 'error-toast';

    // May be a better way to update the node side panel when selection changes
    useEffect(() => {
        setEditedNode(selectedNodes[0]);
    }, [selectedNodes]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log('dsdebug-log', 'Name:', name);
        // console.log('dsdebug-log', 'Value:', value);
        // console.log('dsdebug-log', 'Previous editedNode:', editedNode);
        if (value !== '') {
            setEditedNode((prevEditedNode) => ({
                ...prevEditedNode,
                data: {
                    ...prevEditedNode.data,
                    [name]: {
                        ...prevEditedNode.data[name],
                        value,
                    },
                },
            }));
        } else {
            setEditedNode((prevEditedNode) => ({
                ...prevEditedNode,
                data: {
                    ...prevEditedNode.data,
                    [name]: {
                        ...prevEditedNode.data[name],
                        value: '',
                    },
                },
            }));
        }
    };

    // useEffect(() => {
    //     console.log('dsdebug-log', 'Updated editedNode:', selectedNodes[0]);
    // }, [editedNode]);

    const toast = useToast();

    const toastMessageId = 'copy';
    const handleShowCopyMessage = () => {
        if (!toast.isActive(toastMessageId)) {
            toast({
                toastMessageId,
                position: 'top-right',
                description: 'Copied to clipboard',
                status: 'success',
                duration: 9000,
                isClosable: true,
                containerStyle: {
                    // marginTop: '55px',
                },
            });
        }
    };

    const handleSaveChanges = () => {
        handleUpdateNode(editedNode);
    };
    try {
        return (
            <>
                {selectedNodes.length > 1 && (
                    <Badge ml={4} colorScheme="gray" mb={4}>
                        {selectedNodes.length} items selected
                    </Badge>
                )}
                {selectedNodes.map((selectedNode) => (
                    <Box position={'relative'} p={4} key={selectedNode.id}>
                        <FormControl>
                            <Flex alignItems="center" mb={2}>
                                <Badge
                                    width="100%"
                                    textOverflow="ellipsis"
                                    overflow="hidden"
                                    colorScheme="white"
                                    color="#999999"
                                >
                                    <CopyToClipboard text={selectedNode.id}>
                                        <IconButton
                                            icon={<CopyIcon />}
                                            variant="ghost"
                                            onClick={handleShowCopyMessage}
                                            size="xs"
                                            color="#999999"
                                        />
                                    </CopyToClipboard>
                                    ID: {selectedNode.id}
                                </Badge>
                            </Flex>
                            <FormLabel
                                borderLeft={`3px solid ${selectedNode.data.icon.color}`}
                                backgroundColor={`${selectedNode.data.icon.color}0D`}
                                // padding={2}
                                width="100%"
                            >
                                <Flex alignItems="center">
                                    <CopyToClipboard
                                        text={selectedNode.data.activityName}
                                    >
                                        <IconButton
                                            icon={<CopyIcon />}
                                            variant="ghost"
                                            onClick={handleShowCopyMessage}
                                        />
                                    </CopyToClipboard>
                                    <Text
                                        fontSize="lg"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                        textOverflow="ellipsis"
                                    >
                                        {selectedNode.data.activityName}
                                    </Text>
                                </Flex>
                            </FormLabel>
                        </FormControl>
                        {/* Conditionally render the FormControl for Name */}
                        {selectedNode.data.name && (
                            <FormControl>
                                <FormLabel>Step Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    placeholder="Step Name"
                                    name="name"
                                    value={editedNode.data.name?.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.stepDescription && (
                            <FormControl>
                                <FormLabel>Step Description</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    placeholder="Enter a description for this step"
                                    name="stepDescription"
                                    value={
                                        editedNode.data.stepDescription
                                            ?.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.whatId && (
                            <FormControl>
                                <FormLabel>Salesforce Object Id</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="whatId"
                                    value={editedNode.data.whatId.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.ownerId && (
                            <FormControl>
                                <FormLabel>
                                    Salesforce Object Owner Id
                                </FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="ownerId"
                                    value={editedNode.data.ownerId.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.contactId && (
                            <FormControl>
                                <FormLabel>
                                    Salesforce Object Contact Id
                                </FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="contactId"
                                    value={
                                        editedNode.data.contactId.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.activityDisplayName && (
                            <FormControl>
                                <FormLabel>Display Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="activityDisplayName"
                                    value={
                                        editedNode.data.activityDisplayName
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.stageName && (
                            <FormControl>
                                <FormLabel>Stage Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="stageName"
                                    value={
                                        editedNode.data.stageName.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.formdocument && (
                            <FormControl>
                                <FormLabel>Form Document</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="formdocument"
                                    value={editedNode.data.formdocument || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.documents && (
                            <FormControl>
                                <FormLabel>Document(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="documents"
                                    value={
                                        editedNode.data.documents?.value[0]
                                            ?.value?.value ||
                                        editedNode.data.documents?.value[0]
                                            ?.value ||
                                        editedNode.data.documents?.value[0] ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.query && (
                            <FormControl>
                                <FormLabel>Search Text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="query"
                                    value={editedNode.data.query.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.exactMatch && (
                            <FormControl>
                                <FormLabel>Exact Match?</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="exactMatch"
                                    isChecked={
                                        editedNode.data.exactMatch.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.checkedOutDocument && (
                            <FormControl>
                                <FormLabel>Checked Out Document</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="checkedOutDocument"
                                    value={
                                        editedNode.data.checkedOutDocument
                                            .value[0] || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.revisionDocument && (
                            <FormControl>
                                <FormLabel>Document to Check In</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="revisionDocument"
                                    value={
                                        editedNode.data.revisionDocument
                                            .value[0] || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.users && (
                            <FormControl>
                                <FormLabel>User(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="users"
                                    value={editedNode.data.users.value[0] || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.action && (
                            <FormControl>
                                <FormLabel>Action</FormLabel>
                                <RadioGroup
                                    name="action"
                                    value={editedNode.data.action.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="move"
                                        >
                                            Move
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="copy"
                                        >
                                            Copy
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.documentName && (
                            <FormControl>
                                <FormLabel>Document Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="documentName"
                                    value={
                                        editedNode.data.documentName.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sourceDocument && (
                            <FormControl>
                                <FormLabel>Source Document</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sourceDocument"
                                    value={
                                        editedNode.data.sourceDocument.value[0]
                                            ?.value.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {/* Adding ? made it show but display undefined fix this later */}
                        {selectedNode.data.sender && (
                            <FormControl>
                                <FormLabel>From</FormLabel>
                                <Text>
                                    {`${selectedNode.data.sender.value.length} ${selectedNode.data.sender.value[0]?.type} Selected` ||
                                        ''}
                                </Text>
                            </FormControl>
                        )}
                        {/* 'Adding ? made it show but display undefined fix this later' */}
                        {selectedNode.data.recipient && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Text>
                                    {`${selectedNode.data.recipient.value.length} ${selectedNode.data.recipient.value[0]?.type} Selected` ||
                                        ''}
                                </Text>
                            </FormControl>
                        )}
                        {selectedNode.data.from && (
                            <FormControl>
                                <FormLabel>From</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="from"
                                    value={editedNode.data.from.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.fromDisplayName && (
                            <FormControl>
                                <FormLabel>From</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fromDisplayName"
                                    value={
                                        editedNode.data.fromDisplayName.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.to && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="to"
                                    value={editedNode.data.to.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.cclink && (
                            <FormControl>
                                <FormLabel>CC</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="cclink"
                                    value={editedNode.data.cclink.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.bcclink && (
                            <FormControl>
                                <FormLabel>BCC</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="bcclink"
                                    value={editedNode.data.bcclink.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.subject && (
                            <FormControl>
                                <FormLabel>Subject</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="subject"
                                    value={editedNode.data.subject.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.body && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="body"
                                    value={editedNode.data.body.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.notes && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="notes"
                                    value={editedNode.data.notes.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.note && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="note"
                                    value={editedNode.data.note.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.includeSignature && (
                            <FormControl>
                                <FormLabel>
                                    Include Signature to Email?
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="includeSignature"
                                    isChecked={
                                        editedNode.data.includeSignature
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.hideDueDateFromEmail && (
                            <FormControl>
                                <FormLabel>
                                    Hide due date from recipient
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="hideDueDateFromEmail"
                                    isChecked={
                                        editedNode.data.hideDueDateFromEmail
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.addMySignatureToThisEmail && (
                            <FormControl>
                                <FormLabel>Add signature to email?</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="addMySignatureToThisEmail"
                                    isChecked={
                                        editedNode.data
                                            .addMySignatureToThisEmail.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sendOutNotifications && (
                            <FormControl>
                                <FormLabel>Send out Notifications?</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="sendOutNotifications"
                                    isChecked={
                                        editedNode.data.sendOutNotifications
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.emailAppearance && (
                            <FormControl>
                                <FormLabel>Email Appearance</FormLabel>
                                <RadioGroup
                                    name="emailAppearance"
                                    value={
                                        editedNode.data.emailAppearance.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio backgroundColor="#fff" value={0}>
                                            Use branded HTML email template
                                        </Radio>
                                        <Radio backgroundColor="#fff" value={1}>
                                            Use standard text email
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.expirationDays && (
                            <FormControl>
                                <FormLabel>Expiration Days</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="expirationDays"
                                    value={
                                        editedNode.data.expirationDays.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.dateFormat && (
                            <FormControl>
                                <FormLabel>Date Format</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="dateFormat"
                                    value={
                                        editedNode.data.dateFormat.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.suppressSenderEmails && (
                            <FormControl>
                                <FormLabel>
                                    Supress emails to sender on completion?
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="suppressSenderEmails"
                                    isChecked={
                                        editedNode.data.suppressSenderEmails
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.keywords && (
                            <FormControl>
                                <FormLabel>Document Keywords</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="keywords"
                                    value={editedNode.data.keywords.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.targetFolder && (
                            <FormControl>
                                <FormLabel>Target Folder</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="targetFolder"
                                    value={
                                        editedNode.data.targetFolder.value[0]
                                            ?.value.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.notifyOnException && (
                            <FormControl>
                                <FormLabel>Notify On Error</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="notifyOnException"
                                    isChecked={
                                        editedNode.data.notifyOnException
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.newFolder && (
                            <FormControl>
                                <FormLabel>New Folder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="newFolder"
                                    value={
                                        editedNode.data.newFolder.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.description && (
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="description"
                                    value={
                                        editedNode.data.description.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.dueDate && (
                            <FormControl>
                                <FormLabel>Task Due Date</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="dueDate"
                                    value={editedNode.data.dueDate.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.status && (
                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="status"
                                    value={editedNode.data.status.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.fieldId && (
                            <FormControl>
                                <FormLabel>Field Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fieldId"
                                    value={editedNode.data.fieldId.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.fieldId && (
                            <FormControl>
                                <FormLabel>Search Field Value</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fieldValue"
                                    value={
                                        editedNode.data.fieldValue.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.variableUpdates && (
                            <Box
                                borderWidth="1px"
                                p={4}
                                my={4}
                                rounded="md"
                                backgroundColor="#f0f0f0f0"
                            >
                                {selectedNode.data.variableUpdates.value.map(
                                    (variable, index) => (
                                        <FormControl key={index}>
                                            <FormLabel>Variable</FormLabel>
                                            <Input
                                                backgroundColor="#fff"
                                                name={`variableConfigure.value[${index}]`}
                                                value={
                                                    variable.variableToConfigure
                                                        .value.value || ''
                                                }
                                                onChange={handleInputChange}
                                                onBlur={handleSaveChanges}
                                            />
                                            <FormLabel>Value</FormLabel>
                                            <Input
                                                backgroundColor="#fff"
                                                name={`variableUpdates.value[${index}].variableValue.value.value`}
                                                value={
                                                    variable.variableValue.value
                                                        .value ||
                                                    variable.variableValue
                                                        .value ||
                                                    ''
                                                }
                                                onChange={handleInputChange}
                                                onBlur={handleSaveChanges}
                                            />
                                        </FormControl>
                                    )
                                )}
                            </Box>
                        )}
                        {selectedNode.data.metadata && (
                            <Box
                                borderWidth="1px"
                                p={4}
                                my={4}
                                rounded="md"
                                backgroundColor="#f0f0f0f0"
                            >
                                {selectedNode.data.metadata.value.map(
                                    (metadata, index) => (
                                        <FormControl key={index}>
                                            <FormLabel>Attribute</FormLabel>
                                            <Input
                                                backgroundColor="#fff"
                                                name={`metadataToConfigure[${index}]`}
                                                value={
                                                    metadata.metadataToConfigure
                                                        .value[0].value.name ||
                                                    ''
                                                }
                                                onChange={handleInputChange}
                                                onBlur={handleSaveChanges}
                                            />
                                            <FormLabel>Value</FormLabel>
                                            <Input
                                                backgroundColor="#fff"
                                                name={`metadataUpdates.value[${index}].metadataValie.value.value`}
                                                value={
                                                    metadata.variableValue.value
                                                        .value || ''
                                                }
                                                onChange={handleInputChange}
                                                onBlur={handleSaveChanges}
                                            />
                                        </FormControl>
                                    )
                                )}
                            </Box>
                        )}
                        {/* TODO: Update to show the conditions instead of just count them */}
                        {selectedNode.data.decisions &&
                            selectedNode.data.decisions.value.decisions.map(
                                (decision, index) => (
                                    <React.Fragment key={index}>
                                        <FormControl>
                                            <FormLabel>Condition</FormLabel>
                                            <Text>{`${decision.condition.conditions?.length} Condition(s) set`}</Text>
                                            <FormLabel>
                                                {decision.output.type}
                                            </FormLabel>
                                            <Input
                                                backgroundColor="#fff"
                                                name={`decisionsOutput-${decision}-${index}`}
                                                value={
                                                    decision.output.value.name
                                                }
                                                onChange={handleInputChange}
                                                onBlur={handleSaveChanges}
                                            />
                                        </FormControl>
                                    </React.Fragment>
                                )
                            )}
                        {/* Render Else Output */}
                        {selectedNode.data.decisions && (
                            <FormControl>
                                <FormLabel>Else</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="decisions"
                                    value={
                                        editedNode.data.decisions.value
                                            .elseOutput.value.name
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.sourceFolder && (
                            <FormControl>
                                <FormLabel>Folder</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sourceFolder"
                                    value={
                                        editedNode.data.sourceFolder.value[0]
                                            ?.value.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.parentFolder && (
                            <FormControl>
                                <FormLabel>Parent Folder</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="parentFolder"
                                    value={
                                        editedNode.data.parentFolder.value[0]
                                            ?.value.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.returnExisting && (
                            <FormControl>
                                <FormLabel>
                                    Use Folder If It Already Exists
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="returnExisting"
                                    isChecked={
                                        editedNode.data.returnExisting.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.inheritLimitedAttributeGroups && (
                            <FormControl>
                                <FormLabel>
                                    Inherit the parent folder&apos;s attribute
                                    groups
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="inheritLimitedAttributeGroups"
                                    isChecked={
                                        editedNode.data
                                            .inheritLimitedAttributeGroups
                                            ?.value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.newFolderName && (
                            <FormControl>
                                <FormLabel>Folder name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="newFolderName"
                                    value={
                                        editedNode.data.newFolderName.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.limitedAttributeGroups && (
                            <FormControl>
                                <FormLabel>Add Attribute Groups</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="limitedAttributeGroups"
                                    value={
                                        editedNode.data.limitedAttributeGroups
                                            .value?.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.outputType && (
                            <FormControl>
                                <FormLabel>
                                    Output combined documents as...
                                </FormLabel>
                                <RadioGroup
                                    name="outputType"
                                    value={
                                        editedNode.data.outputType.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="Pdf"
                                        >
                                            PDF
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="Word"
                                        >
                                            Word (.docx)
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.deleteOriginals && (
                            <FormControl>
                                <FormLabel>
                                    Delete the original documents after
                                    combining them.
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="deleteOriginals"
                                    isChecked={
                                        editedNode.data.deleteOriginals.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.sendNotification && (
                            <FormControl>
                                <FormLabel>Send Notification</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="sendNotification"
                                    isChecked={
                                        editedNode.data.sendNotification
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.trackActivity && (
                            <FormControl>
                                <FormLabel>Track Activity</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="trackActivity"
                                    isChecked={
                                        editedNode.data.trackActivity.value
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.targetDocument && (
                            <Input
                                backgroundColor="#fff"
                                Form
                                name="Document"
                                value={
                                    editedNode.data.targetDocument.value[0] ||
                                    ''
                                }
                                handleInputChange={handleInputChange}
                            />
                        )}
                        {selectedNode.data.textSourceType && (
                            <FormControl>
                                <FormLabel>Select Text Source</FormLabel>
                                <RadioGroup
                                    name="textSourceType"
                                    value={
                                        editedNode.data.textSourceType.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="text"
                                        >
                                            Text
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="variable"
                                        >
                                            Variable
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.sourceText && (
                            <FormControl>
                                <FormLabel>Text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sourceText"
                                    value={
                                        editedNode.data.sourceText.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {selectedNode.data.checkoutDocuments && (
                            <FormControl>
                                <FormLabel>Checkout the document?</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="checkoutDocuments"
                                    isChecked={
                                        editedNode.data.checkoutDocuments
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.compareVersion && (
                            <FormControl>
                                <FormLabel>
                                    Compare this document with another version
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="compareVersion"
                                    isChecked={
                                        editedNode.data.compareVersion.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.assigneeType && (
                            <FormControl>
                                <FormLabel>
                                    Assign to a user or task group?
                                </FormLabel>
                                <RadioGroup
                                    name="assigneeType"
                                    value={
                                        editedNode.data.assigneeType.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="user"
                                        >
                                            Assign to a user
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="workerpool"
                                        >
                                            Assign to a task group
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.assignedUsers && (
                            <FormControl>
                                <FormLabel>Assignee(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="assignedUsers"
                                    value={
                                        editedNode.data.assignedUsers
                                            .value[0] || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.trackedNames && (
                            <FormControl>
                                <FormLabel>Tracked Names</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="trackedNames"
                                    value={
                                        editedNode.data.trackedNames.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {/* Need "Who needs to respond?" */}
                        {selectedNode.data.requiredCompletion && (
                            <FormControl>
                                <FormLabel>Who needs to respond?</FormLabel>

                                <RadioGroup
                                    name="requiredCompletion"
                                    value={
                                        editedNode.data.requiredCompletion
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        {selectedNode.data.requiredCompletion
                                            .value === 0 ? (
                                            <Radio
                                                backgroundColor="#fff"
                                                value={0}
                                            >
                                                Any one assignee
                                            </Radio>
                                        ) : (
                                            <Radio
                                                backgroundColor="#fff"
                                                value={1}
                                            >
                                                Any one assignee
                                            </Radio>
                                        )}
                                        <Radio
                                            backgroundColor="#fff"
                                            value={100}
                                        >
                                            All of the assignees
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}

                        {selectedNode.data.assignedUsersInOrder && (
                            <FormControl>
                                <FormLabel>Assign tasks in order?</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="assignedUsersInOrder"
                                    isChecked={
                                        editedNode.data.assignedUsersInOrder
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.instructions && (
                            <FormControl>
                                <FormLabel>Instructions</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="instructions"
                                    value={
                                        editedNode.data.instructions.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.recipients && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="recipients"
                                    value={
                                        editedNode.data.recipients.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputs && (
                            <FormControl>
                                <FormLabel>Options</FormLabel>
                                <Text>{`${selectedNode.data.outputs.value.length} Option(s) Configured`}</Text>
                            </FormControl>
                        )}
                        {selectedNode.data.approveText && (
                            <FormControl>
                                <FormLabel>Approve button text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="approveText"
                                    value={
                                        editedNode.data.approveText.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.rejectText && (
                            <FormControl>
                                <FormLabel>Reject button text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="rejectText"
                                    value={
                                        editedNode.data.rejectText.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.addCustomAction && (
                            <FormControl>
                                <FormLabel>Add a custom action</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="addCustomAction"
                                    isChecked={
                                        editedNode.data.addCustomAction.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.allowComment && (
                            <FormControl>
                                <FormLabel>Comments</FormLabel>
                                <Select
                                    backgroundColor="#fff"
                                    name="allowComment"
                                    value={
                                        editedNode.data.allowComment.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                    placeholder="Make a selection"
                                >
                                    <option value="Required">
                                        Comments are required
                                    </option>
                                    <option value="Yes">
                                        Comments are optional
                                    </option>
                                    <option value="No">
                                        Don&apos;t show the comment field
                                    </option>
                                </Select>
                            </FormControl>
                        )}
                        {selectedNode.data.configurationName && (
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="configurationName"
                                    value={
                                        editedNode.data.configurationName
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {/* {selectedNode.data.dataSource && (
                    <FormControl>
                        <FormLabel>Input XML</FormLabel>
                        <Input backgroundColor="#fff"
                            name="dataSource"
                            value={editedNode.data.dataSource || ''}
                            onChange={handleInputChange}
                                    onBlur={handleSaveChanges}                        />
                    </FormControl>
                )} */}
                        {selectedNode.data.sourceType && (
                            <FormControl>
                                <FormLabel>Source</FormLabel>
                                <Select
                                    backgroundColor="#fff"
                                    name="sourceType"
                                    value={editedNode.data.sourceType.value}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                    placeholder="Make a selection"
                                >
                                    <option value="Salesforce">
                                        Salesforce
                                    </option>
                                    <option value="SpringCM">SpringCM</option>
                                </Select>
                            </FormControl>
                        )}
                        {selectedNode.data.objectType && (
                            <FormControl>
                                <FormLabel>Salesforce Object Type</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectType"
                                    value={
                                        editedNode.data.objectType.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.docLauncherConfigName && (
                            <FormControl>
                                <FormLabel>
                                    Document Generation Configuration Name
                                </FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="docLauncherConfigName"
                                    value={
                                        editedNode.data.docLauncherConfigName
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.configTemplateName && (
                            <FormControl>
                                <FormLabel>Document Template Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="configTemplateName"
                                    value={
                                        editedNode.data.configTemplateName
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.objectId && (
                            <FormControl>
                                <FormLabel>Salesforce Object ID</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectId"
                                    value={editedNode.data.objectId.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.entityType && (
                            <FormControl>
                                <FormLabel>Select Input Variable</FormLabel>
                                <RadioGroup
                                    name="entityType"
                                    value={
                                        editedNode.data.entityType.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="variable"
                                        >
                                            Update Value(s)
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="xml"
                                        >
                                            Variable
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.updateValues?.value.map(
                            (value, index) => (
                                <Box
                                    key={index}
                                    borderWidth="1px"
                                    p={4}
                                    my={4}
                                    rounded="md"
                                    backgroundColor="#f0f0f0f0"
                                >
                                    <FormControl>
                                        <FormLabel>Target Identifier</FormLabel>
                                        <Input
                                            backgroundColor="#fff"
                                            name={`updateValues[${index}]`}
                                            value={value.inputName || ''}
                                            onChange={handleInputChange}
                                            onBlur={handleSaveChanges}
                                        />
                                        <FormLabel>Value</FormLabel>
                                        <Input
                                            backgroundColor="#fff"
                                            name={`updateValues[${index}]`}
                                            value={value.inputValue || ''}
                                            onChange={handleInputChange}
                                            onBlur={handleSaveChanges}
                                        />
                                    </FormControl>
                                </Box>
                            )
                        )}
                        {selectedNode.data.objectName && (
                            <FormControl>
                                <FormLabel>Salesforce Folder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectName"
                                    value={
                                        editedNode.data.objectName.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.trackingDocuments && (
                            <FormControl>
                                <FormLabel>Tracking Document(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="trackingDocuments"
                                    value={
                                        editedNode.data.trackingDocuments
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfPath && (
                            <FormControl>
                                <FormLabel>Salesforce Folder Path</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfPath"
                                    value={editedNode.data.sfPath.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.waitForNextStep && (
                            <FormControl>
                                <FormLabel>Link to next step</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="waitForNextStep"
                                    isChecked={
                                        editedNode.data.waitForNextStep.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.notificationFromAddress && (
                            <FormControl>
                                <FormLabel>Email sender</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="notificationFromAddress"
                                    value={
                                        editedNode.data.notificationFromAddress
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.notificationSubject && (
                            <FormControl>
                                <FormLabel>Email subject</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="notificationSubject"
                                    value={
                                        editedNode.data.notificationSubject
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.notificationBody && (
                            <FormControl>
                                <FormLabel>Email Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="notificationBody"
                                    value={
                                        editedNode.data.notificationBody
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.timeout && (
                            <FormControl>
                                <FormLabel>Action will timeout in:</FormLabel>
                                <NumberInput
                                    name="timeout"
                                    value={
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.months ||
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.weeks ||
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.days ||
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.hours ||
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.minutes ||
                                        editedNode.data.timeout.value[0]
                                            ?.initial.value[0]?.seconds ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <NumberInputField backgroundColor="#fff" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                <Select
                                    backgroundColor="#fff"
                                    name="calendar"
                                    value={
                                        editedNode.data.timeout.value[0]
                                            ?.calendar
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                    placeholder="Make a selection"
                                >
                                    <option value="months">months</option>
                                    <option value="weeks">weeks</option>
                                    <option value="days">days</option>
                                    <option value="hours">hours</option>
                                    <option value="minutes">minutes</option>
                                    <option value="seconds">seconds</option>
                                </Select>
                            </FormControl>
                        )}
                        {selectedNode.data.timeout && (
                            <FormControl>
                                <FormLabel>Use business days only</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="businessHour"
                                    isChecked={
                                        editedNode.data.timeout.value[0]
                                            ?.calendar?.value ===
                                            'Business Hour' || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.timeoutWarningFromStepExecution && (
                            <FormControl>
                                <FormLabel>
                                    Send reminder after execution?
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="timeoutWarningFromStepExecution"
                                    isChecked={
                                        editedNode.data
                                            .timeoutWarningFromStepExecution
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.requiredApprovalCount && (
                            <FormControl>
                                <FormLabel>
                                    What should trigger an &apos;approved&apos;
                                    output?
                                </FormLabel>
                                <RadioGroup
                                    name="assigneeType"
                                    value={
                                        editedNode.data.requiredApprovalCount
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio backgroundColor="#fff" value={0}>
                                            If any of the respondents approve
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value={100}
                                        >
                                            If all of the respondents approve
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.revisedDocumentProperty && (
                            <FormControl>
                                <FormLabel>Document</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="revisedDocumentProperty"
                                    value={
                                        editedNode.data.revisedDocumentProperty
                                            .value[0]?.value.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sourceDocumentCompareProperty && (
                            <FormControl>
                                <FormLabel>
                                    Compare Current Document Version With
                                </FormLabel>
                                <RadioGroup
                                    name="sourceDocumentCompareProperty"
                                    value={
                                        editedNode.data
                                            .sourceDocumentCompareProperty.value
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio backgroundColor="#fff" value={1}>
                                            Previous Version
                                        </Radio>
                                        <Radio backgroundColor="#fff" value={0}>
                                            First Version
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.conversionType && (
                            <FormControl>
                                <FormLabel>Conversion Type</FormLabel>
                                <RadioGroup
                                    name="conversionType"
                                    value={editedNode.data.conversionType.value}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="jsonToXml"
                                        >
                                            JSON to XML
                                        </Radio>
                                        <Radio
                                            backgroundColor="#fff"
                                            value="xmlToJson"
                                        >
                                            XML to JSON
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.jsonToXmlVariable && (
                            <FormControl>
                                <FormLabel>Variable</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="jsonToXmlVariable"
                                    value={
                                        editedNode.data.jsonToXmlVariable
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputVariable && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputVariable"
                                    value={
                                        editedNode.data.outputVariable.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.resultDocumentTypeProperty && (
                            <FormControl>
                                <FormLabel>
                                    Compare Current Document Version With
                                </FormLabel>
                                <RadioGroup
                                    name="resultDocumentTypeProperty"
                                    value={
                                        editedNode.data
                                            .resultDocumentTypeProperty.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                >
                                    <HStack spacing={4}>
                                        {selectedNode.data
                                            .resultDocumentTypeProperty
                                            .value === 'New Version' ? (
                                            <Radio
                                                backgroundColor="#fff"
                                                value="New Version"
                                            >
                                                New Version
                                            </Radio>
                                        ) : (
                                            <Radio
                                                backgroundColor="#fff"
                                                value="Version"
                                            >
                                                New Version
                                            </Radio>
                                        )}
                                        <Radio
                                            backgroundColor="#fff"
                                            value="New Document"
                                        >
                                            New Document
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                        )}
                        {selectedNode.data.resultDocumentNameProperty && (
                            <FormControl>
                                <FormLabel>New Document Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="resultDocumentNameProperty"
                                    value={
                                        editedNode.data
                                            .resultDocumentNameProperty.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.resultDocumentFolderProperty && (
                            <FormControl>
                                <FormLabel>Folder Destination</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="resultDocumentFolderProperty"
                                    value={
                                        editedNode.data
                                            .resultDocumentFolderProperty
                                            .value[0] || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.linkName && (
                            <FormControl>
                                <FormLabel>Link Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="linkName"
                                    value={editedNode.data.linkName.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.linkURL && (
                            <FormControl>
                                <FormLabel>Link URL</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="linkURL"
                                    value={editedNode.data.linkURL.value || ''}
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.linkDescription && (
                            <FormControl>
                                <FormLabel>Link Description</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="linkDescription"
                                    value={
                                        editedNode.data.linkDescription.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.salesForceObjectType && (
                            <FormControl>
                                <FormLabel>Salesforce Object Type</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="salesForceObjectType"
                                    value={
                                        editedNode.data.salesForceObjectType
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.fieldValues && (
                            <FormControl>
                                <FormLabel>Salesforce Field(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fieldValues"
                                    value={
                                        editedNode.data.fieldValues.value[0] ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfdcAccountId && (
                            <FormControl>
                                <FormLabel>Salesforce Account id</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcAccountId"
                                    value={
                                        editedNode.data.sfdcAccountId.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfdcAccountName && (
                            <FormControl>
                                <FormLabel>Salesforce Account Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcAccountName"
                                    value={
                                        editedNode.data.sfdcAccountName.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfdcObjectId && (
                            <FormControl>
                                <FormLabel>Salesforce Object id</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcObjectId"
                                    value={
                                        editedNode.data.sfdcObjectId.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfdcObjectName && (
                            <FormControl>
                                <FormLabel>Salesforce Object Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcObjectName"
                                    value={
                                        editedNode.data.sfdcObjectName.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.sfdcObjectType && (
                            <FormControl>
                                <FormLabel>Salesforce Object Type</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcObjectType"
                                    value={
                                        editedNode.data.sfdcObjectType.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.delimiter && (
                            <FormControl>
                                <FormLabel>Delimiter</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="delimiter"
                                    value={
                                        editedNode.data.delimiter.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.selectConfigurationDocument && (
                            <FormControl>
                                <FormLabel>
                                    Select a Configuration Document?
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="selectConfigurationDocument"
                                    isChecked={
                                        editedNode.data
                                            .selectConfigurationDocument
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.reminderName && (
                            <FormControl>
                                <FormLabel>Reminder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderName"
                                    value={
                                        editedNode.data.reminderName.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.reminderDate && (
                            <FormControl>
                                <FormLabel>Reminder Date</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderDate"
                                    value={
                                        editedNode.data.reminderDate.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.reminderTime && (
                            <FormControl>
                                <FormLabel>Reminder Hour</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderTime"
                                    value={
                                        editedNode.data.reminderTime.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {/* Outputs */}
                        {selectedNode.data.outputXmlDocument && (
                            <FormControl>
                                <FormLabel>
                                    Store document(s) in a variable
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="outputXmlDocument"
                                    isChecked={
                                        editedNode.data.outputXmlDocument
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputXmlVariable && (
                            <FormControl>
                                <FormLabel>
                                    Store configuration in a variable
                                </FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="outputXmlVariable"
                                    isChecked={
                                        editedNode.data.outputXmlVariable
                                            .value || false
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputIdVariable && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputIdVariable"
                                    value={
                                        editedNode.data.outputIdVariable
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputDocumentsProperty && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputDocumentsProperty"
                                    value={
                                        editedNode.data.outputDocumentsProperty
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputDecision && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputDecision"
                                    value={
                                        editedNode.data.outputDecision.value
                                            ?.value
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputFolders && (
                            <FormControl>
                                <FormLabel>Output Variable</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputFolders"
                                    value={
                                        editedNode.data.outputFolders.value
                                            ?.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputDocuments && (
                            <Input
                                backgroundColor="#fff"
                                Form
                                name="Output Documents"
                                value={
                                    editedNode.data.outputDocuments.value
                                        ?.value || ''
                                }
                                handleInputChange={handleInputChange}
                            />
                        )}
                        {selectedNode.data.outputComments && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputComments"
                                    value={
                                        editedNode.data.outputComments.value
                                            ?.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputXml && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputXml"
                                    value={
                                        editedNode.data.outputXml.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}
                        {selectedNode.data.outputXML && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputXML"
                                    value={
                                        editedNode.data.outputXML.value || ''
                                    }
                                    onChange={handleInputChange}
                                    onBlur={handleSaveChanges}
                                />
                            </FormControl>
                        )}

                        {/* <Button
                            mt={4}
                            colorScheme="teal"
                            onClick={handleSaveChanges}
                        >
                            Save Changes
                        </Button> */}
                    </Box>
                ))}
            </>
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
