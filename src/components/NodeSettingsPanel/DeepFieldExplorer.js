import { useState, useEffect, memo } from 'react';
import {
    Input,
    VStack,
    FormControl,
    FormLabel,
    Checkbox,
    Select,
    Box,
} from '@chakra-ui/react';
import { useNode } from '../../contexts/NodeContext';

const startActivityFilterKeys = {
    width: true,
    height: true,
    id: true,
    style: true,
    data: {
        name: true,
        workflowName: false,
        definedVariables: true,
        size: true,
        content: true,
        angle: true,
        activityName: true,
        group: true,
        icon: true,
        z: true,
        attrs: true,
        '*': {
            type: true,
            '*': {
                '*': {
                    type: true,
                    '*': {
                        type: true,
                    },
                },
            },
        },
    },
    position: true,
    type: true,
    selectable: true,
    selected: true,
    positionAbsolute: true,
};

const filterKeys = {
    width: true,
    height: true,
    id: true,
    style: true,
    data: {
        icon: true,
        color: true,
        attrs: true,
        size: true,
        content: true,
        angle: true,
        activityName: true,
        group: true,
        z: true,
        // variableUpdates: true,
        errorState: true,
        // definedVariables: true,
        // workflowName: true,
        '*': {
            type: true,
            '*': {
                type: true,
                returnType: true,
                additionalCode: true,
                '*': {
                    type: true,
                    '*': {
                        type: true,
                        '*': {
                            type: true,
                            returnType: true,
                            additionalCode: true,
                            '*': {
                                type: true,
                                '*': {
                                    // For metadata (attributes) steps
                                    setName: true,
                                    groupName: true,
                                    '*': {
                                        type: true,
                                        '*': {
                                            returnType: true,
                                            additionalCode: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    position: true,
    type: true,
    selectable: true,
    selected: true,
    positionAbsolute: true,
};

const displayNameMapping = {
    'data.name.value': {
        displayName: 'Step Name',
        type: 'String',
        required: true,
    },
    'data.stepDescription.value': {
        displayName: 'Step Description',
        type: 'String',
        placeholder: 'Enter a description for this step',
    },
    'data.workflowName.value': {
        displayName: 'Workflow Name',
    },
    'data.sendNotification.value': {
        displayName: 'Send Notification',
        type: 'Bool',
    },
    'data.trackActivity.value': {
        displayName: 'Track Activity',
        type: 'Bool',
    },
    'data.documents.value': {
        displayName: 'Document(s)',
        placeholder: 'Select the document(s) to add to the list',
        required: true,
    },
    'data.users.value': {
        displayName: 'User(s)',
        placeholder: 'Select the watchlist user(s)',
    },
    'data.whatId.value': {
        displayName: 'Salesforce Object Id',
        placeholder: 'Enter the salesforce object id',
        required: true,
    },
    'data.subject.value': {
        displayName: 'Activity History Subject',
        placeholder: 'Enter a subject for the activity',
    },
    'data.description.value': {
        displayName: 'Activity History Description',
        placeholder: 'Enter a description for the activity',
    },
    'data.ownerId.value': {
        displayName: 'Salesforce Object Owner Id',
        placeholder: 'Enter the salesforce object owner id',
    },
    'data.contactId.value': {
        displayName: 'Salesforce Object Contact Id',
        placeholder: 'Enter the salesforce object contact id',
    },
    'data.dueDate.value': {
        displayName: 'Task Due Date',
        placeholder: 'Enter a due date for the task',
    },
    'data.targetDocument.value': {
        displayName: 'Document',
        placeholder: 'Enter the salesforce object id',
    },
    'data.textSourceType.value': {
        displayName: 'Select Text Source',
    },
    'data.sourceText.value': {
        displayName: 'Text',
        placeholder: 'Enter the text to append',
    },

    'data.notifyOnException.value': {
        displayName: 'Notify On Exception?',
        type: 'Bool',
    },
    'data.action.value': {
        displayName: 'Action',
        type: 'Choice',
        choices: [
            { displayName: 'Move', value: 'move' },
            { displayName: 'Copy', value: 'copy' },
        ],
    },
    'data.documents.value.*.value.value': {
        displayName: 'Document(s)',
    },
    'data.variableUpdates.value.*.variableToConfigure.value.value': {
        displayName: 'Variable',
    },
    'data.variableUpdates.value.*.variableValue.value': {
        displayName: 'Value',
    },
    'data.variableUpdates.value.*.variableValue.value.value': {
        displayName: 'Variable',
    },
    'data.variableUpdates.value.*.variableValue.value.code': {
        displayName: 'Value',
    },
    'data.newDocumentName.value.code': {
        displayName: 'New Document Name',
    },
    'data.fieldValue.value.code': {
        displayName: 'Value',
    },
    'data.status.value': {
        displayName: 'Status',
        type: 'Choice',
        choices: [
            { displayName: '', value: '' },
            { displayName: 'In Progress', value: 'move' },
            { displayName: 'Not Started', value: 'copy' },
            { displayName: 'Completed', value: 'move' },
            { displayName: 'Waiting on someone else', value: 'copy' },
            { displayName: 'Deferred', value: 'move' },
        ],
    },
    'data.sourceDocument.value.*.value.value': {
        displayName: 'Source Document',
    },
    'data.targetFolder.value.*.value.value': {
        displayName: 'Target Folder',
    },
    'data.metadata.value.*.metadataToConfigure.value.*.value.name': {
        displayName: 'Metadata',
    },
    'data.metadata.value.*.metadataToConfigure.value.*.value.setName': {
        displayName: 'Value',
    },
    'data.metadata.value.*.variableValue.value.value': {
        displayName: 'Value',
    },
    'data.notifiers.value.*.value.value': {
        displayName: 'Notifications',
    },
    // Add other mappings as needed
};

const DeepFieldExplorer = ({ data }) => {
    const { handleUpdateNode } = useNode();
    const [fields, setFields] = useState([]);
    const [editedNode, setEditedNode] = useState(data);
    const [displayHiddenFields, setDisplayHiddenFields] = useState(false);

    const isFiltered = (key, currentPath) => {
        const usingFilter =
            data.data.activityName === 'StartActivity'
                ? startActivityFilterKeys
                : filterKeys;

        let obj = usingFilter;
        for (let part of currentPath) {
            if (obj[part]) {
                obj = obj[part];
            } else if (obj['*']) {
                // Check if wildcard exists at this level, if it does it will filter any property for all keys at this level
                obj = obj['*'];
            } else {
                obj = null;
                break;
            }
        }

        return obj && (obj[key] === true || obj === true);
    };

    useEffect(() => {
        const findDeepestFields = (obj, currentPath = []) => {
            let deepestFields = [];

            for (const key in obj) {
                if (!displayHiddenFields && isFiltered(key, currentPath)) {
                    continue;
                }

                const newPath = currentPath.concat(key);

                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    // Special handling for the "type" and "value" structure
                    if (
                        obj[key].hasOwnProperty('type') &&
                        obj[key].hasOwnProperty('value')
                    ) {
                        deepestFields.push({
                            path: newPath.join('.') + '.value',
                            value: obj[key].value,
                        });
                        // We've added the ".value", so continue to next key
                        continue;
                    }
                    // If not a special "type" & "value" structure, continue exploring deeper fields
                    deepestFields = deepestFields.concat(
                        findDeepestFields(obj[key], newPath)
                    );
                } else {
                    const path = newPath.join('.');
                    deepestFields.push({ path, value: obj[key] });
                }
            }

            return deepestFields;
        };

        const deepestFields = findDeepestFields(data);
        setFields(deepestFields);
    }, [data, displayHiddenFields]);

    const getDisplayName = (path) => {
        for (const key in displayNameMapping) {
            if (matchPathWithWildcard(key, path)) {
                return displayNameMapping[key].displayName;
            }
        }
        return path; // default if no matching displayName is found
    };

    const matchPathWithWildcard = (pattern, path) => {
        const patternParts = pattern.split('.');
        const pathParts = path.split('.');

        if (patternParts.length !== pathParts.length) {
            return false;
        }

        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i] !== '*' && patternParts[i] !== pathParts[i]) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        setEditedNode(data); // Whenever the data prop changes, set it to editedNode
    }, [data]);

    const handleInputChange = (path, newValue) => {
        let updatedNode = JSON.parse(JSON.stringify(editedNode)); // Deep clone editedNode

        const pathParts = path.split('.');
        let obj = updatedNode;

        // Traverse to the parent object of the value we want to change
        for (let i = 0; i < pathParts.length - 1; i++) {
            obj = obj[pathParts[i]];
        }

        // Change the value
        obj[pathParts[pathParts.length - 1]] = newValue;

        // Update the editedNode state
        setEditedNode(updatedNode);

        // Update the node immediately without waiting for a save action
        handleUpdateNode(updatedNode);
    };

    return (
        <Box px={4} pb={4}>
            <Checkbox
                isChecked={displayHiddenFields}
                onChange={(e) => setDisplayHiddenFields(!displayHiddenFields)}
                pb={4}
            >
                Hidden Fields
            </Checkbox>
            <VStack spacing={4}>
                {fields.map((field) => {
                    const fieldType = displayNameMapping[field.path]?.type;
                    const inputValue = getNestedValue(editedNode, field.path);
                    return (
                        <FormControl
                            isRequired={
                                displayNameMapping[field.path]?.required
                            }
                            key={field.path}
                        >
                            <FormLabel>{getDisplayName(field.path)}</FormLabel>
                            {fieldType === 'Bool' ? (
                                <Checkbox
                                    isChecked={inputValue}
                                    onChange={(e) =>
                                        handleInputChange(
                                            field.path,
                                            e.target.checked
                                        )
                                    }
                                />
                            ) : fieldType === 'Choice' ? (
                                <Select
                                    value={inputValue}
                                    onChange={(e) =>
                                        handleInputChange(
                                            field.path,
                                            e.target.value
                                        )
                                    }
                                >
                                    {displayNameMapping[field.path].choices.map(
                                        (choice) => (
                                            <option
                                                key={choice.value}
                                                value={choice.value}
                                            >
                                                {choice.displayName}
                                            </option>
                                        )
                                    )}
                                </Select>
                            ) : (
                                <Input
                                    placeholder={
                                        displayNameMapping[field.path]
                                            ?.placeholder || ''
                                    }
                                    onChange={(e) =>
                                        handleInputChange(
                                            field.path,
                                            e.target.value
                                        )
                                    }
                                    value={inputValue}
                                    size="md"
                                />
                            )}
                        </FormControl>
                    );
                })}
            </VStack>
        </Box>
    );
};

const getNestedValue = (obj, path) => {
    const pathParts = path.split('.');
    for (let part of pathParts) {
        if (obj && obj.hasOwnProperty(part)) {
            obj = obj[part];
        } else {
            return undefined;
        }
    }
    return obj;
};

export default memo(DeepFieldExplorer);
