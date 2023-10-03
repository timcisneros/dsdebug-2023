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
} from '@chakra-ui/react';
import { useNode } from '../../contexts/NodeContext';

const NodeSettingsPanel = () => {
    const { selectedNodes, handleUpdateNode } = useNode();
    const [editedNode, setEditedNode] = useState(selectedNodes[0]);

    const toastId = 'error-toast';

    // useEffect(() => {
    //     setEditedNode(selectedNodes[0]);
    // }, [selectedNodes]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
    };

    const toast = useToast();

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
                {selectedNodes.map((editedNode) => (
                    <Box position={'relative'} p={4} key={editedNode.id}>
                        <FormControl>
                            <FormLabel
                                borderLeft={`3px solid ${editedNode.data.icon.color}`}
                                backgroundColor={`${editedNode.data.icon.color}0D`}
                                padding={2}
                                overflow="hidden"
                                whiteSpace="nowrap"
                                width="100%"
                            >
                                <Text fontSize="lg">
                                    {editedNode.data.activityName}
                                </Text>
                            </FormLabel>
                        </FormControl>
                        {/* Conditionally render the FormControl for Name */}
                        {editedNode.data.name && (
                            <FormControl>
                                <FormLabel>Step Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="name"
                                    value={
                                        editedNode.data.name.value ||
                                        editedNode.data.name ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.stepDescription && (
                            <FormControl>
                                <FormLabel>Step Description</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    placeholder="Enter a description for this step"
                                    name="stepDescription"
                                    value={
                                        editedNode.data.stepDescription.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.whatId && (
                            <FormControl>
                                <FormLabel>Salesforce Object Id</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="whatId"
                                    value={editedNode.data.whatId.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.ownerId && (
                            <FormControl>
                                <FormLabel>
                                    Salesforce Object Owner Id
                                </FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="ownerId"
                                    value={editedNode.data.ownerId.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.contactId && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.activityDisplayName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.stageName && (
                            <FormControl>
                                <FormLabel>Stage Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="stageName"
                                    value={
                                        editedNode.data.stageName.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.formdocument && (
                            <FormControl>
                                <FormLabel>Form Document</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="formdocument"
                                    value={editedNode.data.formdocument || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.documents && (
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
                                        editedNode.data.documents.value[0] ||
                                        ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.query && (
                            <FormControl>
                                <FormLabel>Search Text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="query"
                                    value={editedNode.data.query.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.exactMatch && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.checkedOutDocument && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.revisionDocument && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.users && (
                            <FormControl>
                                <FormLabel>User(s)</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="users"
                                    value={editedNode.data.users.value[0] || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.action && (
                            <FormControl>
                                <FormLabel>Action</FormLabel>
                                <RadioGroup
                                    name="action"
                                    value={editedNode.data.action.value || ''}
                                    onChange={handleInputChange}
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
                        {editedNode.data.documentName && (
                            <FormControl>
                                <FormLabel>Document Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="documentName"
                                    value={
                                        editedNode.data.documentName.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sourceDocument && (
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
                                />
                            </FormControl>
                        )}
                        {/* Adding ? made it show but display undefined fix this later */}
                        {editedNode.data.sender && (
                            <FormControl>
                                <FormLabel>From</FormLabel>
                                <Text>
                                    {`${editedNode.data.sender.value.length} ${editedNode.data.sender.value[0]?.type} Selected` ||
                                        ''}
                                </Text>
                            </FormControl>
                        )}
                        {/* 'Adding ? made it show but display undefined fix this later' */}
                        {editedNode.data.recipient && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Text>
                                    {`${editedNode.data.recipient.value.length} ${editedNode.data.recipient.value[0]?.type} Selected` ||
                                        ''}
                                </Text>
                            </FormControl>
                        )}
                        {editedNode.data.from && (
                            <FormControl>
                                <FormLabel>From</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="from"
                                    value={editedNode.data.from.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.fromDisplayName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.to && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="to"
                                    value={editedNode.data.to.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.cclink && (
                            <FormControl>
                                <FormLabel>CC</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="cclink"
                                    value={editedNode.data.cclink.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.bcclink && (
                            <FormControl>
                                <FormLabel>BCC</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="bcclink"
                                    value={editedNode.data.bcclink.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.subject && (
                            <FormControl>
                                <FormLabel>Subject</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="subject"
                                    value={editedNode.data.subject.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.body && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="body"
                                    value={editedNode.data.body.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.notes && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="notes"
                                    value={editedNode.data.notes.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.note && (
                            <FormControl>
                                <FormLabel>Body</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="note"
                                    value={editedNode.data.note.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.includeSignature && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.hideDueDateFromEmail && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.addMySignatureToThisEmail && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sendOutNotifications && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.emailAppearance && (
                            <FormControl>
                                <FormLabel>Email Appearance</FormLabel>
                                <RadioGroup
                                    name="emailAppearance"
                                    value={
                                        editedNode.data.emailAppearance.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
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
                        {editedNode.data.expirationDays && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.dateFormat && (
                            <FormControl>
                                <FormLabel>Date Format</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="dateFormat"
                                    value={
                                        editedNode.data.dateFormat.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.suppressSenderEmails && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.keywords && (
                            <FormControl>
                                <FormLabel>Document Keywords</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="keywords"
                                    value={editedNode.data.keywords.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.targetFolder && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.notifyOnException && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.newFolder && (
                            <FormControl>
                                <FormLabel>New Folder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="newFolder"
                                    value={
                                        editedNode.data.newFolder.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.description && (
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    backgroundColor="#fff"
                                    name="description"
                                    value={
                                        editedNode.data.description.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.dueDate && (
                            <FormControl>
                                <FormLabel>Task Due Date</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="dueDate"
                                    value={
                                        editedNode.data.description.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.status && (
                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="status"
                                    value={editedNode.data.status.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}

                        {editedNode.data.fieldId && (
                            <FormControl>
                                <FormLabel>Field Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fieldId"
                                    value={editedNode.data.fieldId.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.fieldId && (
                            <FormControl>
                                <FormLabel>Search Field Value</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="fieldValue"
                                    value={
                                        editedNode.data.fieldValue.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.variableUpdates && (
                            <Box
                                borderWidth="1px"
                                p={4}
                                my={4}
                                rounded="md"
                                backgroundColor="#f0f0f0f0"
                            >
                                {editedNode.data.variableUpdates.value.map(
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
                                            />
                                        </FormControl>
                                    )
                                )}
                            </Box>
                        )}
                        {editedNode.data.metadata && (
                            <Box
                                borderWidth="1px"
                                p={4}
                                my={4}
                                rounded="md"
                                backgroundColor="#f0f0f0f0"
                            >
                                {editedNode.data.metadata.value.map(
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
                                            />
                                        </FormControl>
                                    )
                                )}
                            </Box>
                        )}
                        {/* TODO: Update to show the conditions instead of just count them */}
                        {editedNode.data.decisions &&
                            editedNode.data.decisions.value.decisions.map(
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
                                            />
                                        </FormControl>
                                    </React.Fragment>
                                )
                            )}
                        {/* Render Else Output */}
                        {editedNode.data.decisions && (
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
                                />
                            </FormControl>
                        )}

                        {editedNode.data.sourceFolder && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.parentFolder && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.returnExisting && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.inheritLimitedAttributeGroups && (
                            <FormControl>
                                <FormLabel>
                                    Inherit the parent folder's attribute groups
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.newFolderName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.limitedAttributeGroups && (
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
                                />
                            </FormControl>
                        )}

                        {editedNode.data.outputType && (
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
                        {editedNode.data.deleteOriginals && (
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
                                />
                            </FormControl>
                        )}

                        {editedNode.data.sendNotification && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.trackActivity && (
                            <FormControl>
                                <FormLabel>Track Activity</FormLabel>
                                <Checkbox
                                    backgroundColor="#fff"
                                    name="trackActivity"
                                    isChecked={
                                        editedNode.data.trackActivity.value ||
                                        false
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.targetDocument && (
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
                        {editedNode.data.textSourceType && (
                            <FormControl>
                                <FormLabel>Select Text Source</FormLabel>
                                <RadioGroup
                                    name="textSourceType"
                                    value={
                                        editedNode.data.textSourceType.value ||
                                        ''
                                    }
                                    onChange={handleInputChange}
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
                        {editedNode.data.sourceText && (
                            <FormControl>
                                <FormLabel>Text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sourceText"
                                    value={
                                        editedNode.data.sourceText.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}

                        {editedNode.data.checkoutDocuments && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.compareVersion && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.assigneeType && (
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
                        {editedNode.data.assignedUsers && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.trackedNames && (
                            <FormControl>
                                <FormLabel>Tracked Names</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="trackedNames"
                                    value={
                                        editedNode.data.trackedNames.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {/* Need "Who needs to respond?" */}
                        {editedNode.data.requiredCompletion && (
                            <FormControl>
                                <FormLabel>Who needs to respond?</FormLabel>

                                <RadioGroup
                                    name="requiredCompletion"
                                    value={
                                        editedNode.data.requiredCompletion
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
                                >
                                    <HStack spacing={4}>
                                        {editedNode.data.requiredCompletion
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

                        {editedNode.data.assignedUsersInOrder && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.instructions && (
                            <FormControl>
                                <FormLabel>Instructions</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="instructions"
                                    value={
                                        editedNode.data.instructions.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.recipients && (
                            <FormControl>
                                <FormLabel>To</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="recipients"
                                    value={
                                        editedNode.data.recipients.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputs && (
                            <FormControl>
                                <FormLabel>Options</FormLabel>
                                <Text>{`${editedNode.data.outputs.value.length} Option(s) Configured`}</Text>
                            </FormControl>
                        )}
                        {editedNode.data.approveText && (
                            <FormControl>
                                <FormLabel>Approve button text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="approveText"
                                    value={
                                        editedNode.data.approveText.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.rejectText && (
                            <FormControl>
                                <FormLabel>Reject button text</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="rejectText"
                                    value={
                                        editedNode.data.rejectText.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.addCustomAction && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.allowComment && (
                            <FormControl>
                                <FormLabel>Comments</FormLabel>
                                <Select
                                    backgroundColor="#fff"
                                    name="allowComment"
                                    value={
                                        editedNode.data.allowComment.value || ''
                                    }
                                    onChange={handleInputChange}
                                    placeholder="Make a selection"
                                >
                                    <option value="Required">
                                        Comments are required
                                    </option>
                                    <option value="Yes">
                                        Comments are optional
                                    </option>
                                    <option value="No">
                                        Don't show the comment field
                                    </option>
                                </Select>
                            </FormControl>
                        )}
                        {editedNode.data.configurationName && (
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
                                />
                            </FormControl>
                        )}
                        {/* {editedNode.data.dataSource && (
                    <FormControl>
                        <FormLabel>Input XML</FormLabel>
                        <Input backgroundColor="#fff"
                            name="dataSource"
                            value={editedNode.data.dataSource || ''}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                )} */}
                        {editedNode.data.sourceType && (
                            <FormControl>
                                <FormLabel>Source</FormLabel>
                                <Select
                                    backgroundColor="#fff"
                                    name="sourceType"
                                    value={editedNode.data.sourceType.value}
                                    onChange={handleInputChange}
                                    placeholder="Make a selection"
                                >
                                    <option value="Salesforce">
                                        Salesforce
                                    </option>
                                    <option value="SpringCM">SpringCM</option>
                                </Select>
                            </FormControl>
                        )}
                        {editedNode.data.objectType && (
                            <FormControl>
                                <FormLabel>Salesforce Object Type</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectType"
                                    value={
                                        editedNode.data.objectType.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.docLauncherConfigName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.configTemplateName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.objectId && (
                            <FormControl>
                                <FormLabel>Salesforce Object ID</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectId"
                                    value={editedNode.data.objectId.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.entityType && (
                            <FormControl>
                                <FormLabel>Select Input Variable</FormLabel>
                                <RadioGroup
                                    name="entityType"
                                    value={
                                        editedNode.data.entityType.value || ''
                                    }
                                    onChange={handleInputChange}
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
                        {editedNode.data.updateValues?.value.map(
                            (value, index) => (
                                <Box
                                    borderWidth="1px"
                                    p={4}
                                    my={4}
                                    rounded="md"
                                    backgroundColor="#f0f0f0f0"
                                >
                                    <FormControl key={index}>
                                        <FormLabel>Target Identifier</FormLabel>
                                        <Input
                                            backgroundColor="#fff"
                                            name={`updateValues[${index}]`}
                                            value={value.inputName || ''}
                                            onChange={handleInputChange}
                                        />
                                        <FormLabel>Value</FormLabel>
                                        <Input
                                            backgroundColor="#fff"
                                            name={`updateValues[${index}]`}
                                            value={value.inputValue || ''}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                </Box>
                            )
                        )}
                        {editedNode.data.objectName && (
                            <FormControl>
                                <FormLabel>Salesforce Folder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="objectName"
                                    value={
                                        editedNode.data.objectName.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.trackingDocuments && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfPath && (
                            <FormControl>
                                <FormLabel>Salesforce Folder Path</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfPath"
                                    value={editedNode.data.sfPath.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.waitForNextStep && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.notificationFromAddress && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.notificationSubject && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.notificationBody && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.timeout && (
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
                        {editedNode.data.timeout && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.timeoutWarningFromStepExecution && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.requiredApprovalCount && (
                            <FormControl>
                                <FormLabel>
                                    What should trigger an 'approved' output?
                                </FormLabel>
                                <RadioGroup
                                    name="assigneeType"
                                    value={
                                        editedNode.data.requiredApprovalCount
                                            .value || ''
                                    }
                                    onChange={handleInputChange}
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
                        {editedNode.data.revisedDocumentProperty && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sourceDocumentCompareProperty && (
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
                        {editedNode.data.conversionType && (
                            <FormControl>
                                <FormLabel>Conversion Type</FormLabel>
                                <RadioGroup
                                    name="conversionType"
                                    value={editedNode.data.conversionType.value}
                                    onChange={handleInputChange}
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
                        {editedNode.data.jsonToXmlVariable && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputVariable && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.resultDocumentTypeProperty && (
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
                                >
                                    <HStack spacing={4}>
                                        {editedNode.data
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
                        {editedNode.data.resultDocumentNameProperty && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.resultDocumentFolderProperty && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.linkName && (
                            <FormControl>
                                <FormLabel>Link Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="linkName"
                                    value={editedNode.data.linkName.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.linkURL && (
                            <FormControl>
                                <FormLabel>Link URL</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="linkURL"
                                    value={editedNode.data.linkURL.value || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.linkDescription && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.salesForceObjectType && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.fieldValues && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfdcAccountId && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfdcAccountName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfdcObjectId && (
                            <FormControl>
                                <FormLabel>Salesforce Object id</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="sfdcObjectId"
                                    value={
                                        editedNode.data.sfdcObjectId.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfdcObjectName && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.sfdcObjectType && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.delimiter && (
                            <FormControl>
                                <FormLabel>Delimiter</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="delimiter"
                                    value={
                                        editedNode.data.delimiter.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.selectConfigurationDocument && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.reminderName && (
                            <FormControl>
                                <FormLabel>Reminder Name</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderName"
                                    value={
                                        editedNode.data.reminderName.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.reminderDate && (
                            <FormControl>
                                <FormLabel>Reminder Date</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderDate"
                                    value={
                                        editedNode.data.reminderDate.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.reminderTime && (
                            <FormControl>
                                <FormLabel>Reminder Hour</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="reminderTime"
                                    value={
                                        editedNode.data.reminderTime.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}

                        {/* Outputs */}
                        {editedNode.data.outputXmlDocument && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputXmlVariable && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputIdVariable && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputDocumentsProperty && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputDecision && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputFolders && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputDocuments && (
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
                        {editedNode.data.outputComments && (
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
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputXml && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputXml"
                                    value={
                                        editedNode.data.outputXml.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                        {editedNode.data.outputXML && (
                            <FormControl>
                                <FormLabel>Output</FormLabel>
                                <Input
                                    backgroundColor="#fff"
                                    name="outputXML"
                                    value={
                                        editedNode.data.outputXML.value || ''
                                    }
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}

                        <Button
                            mt={4}
                            colorScheme="teal"
                            onClick={handleSaveChanges}
                        >
                            Save Changes
                        </Button>
                    </Box>
                ))}
            </>
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
                    marginTop: '55px',
                },
            });
        }
    }
};

export default NodeSettingsPanel;
