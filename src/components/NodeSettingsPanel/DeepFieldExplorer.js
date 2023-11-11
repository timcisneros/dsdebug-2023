import { useState, useEffect, memo } from 'react';
import {
    Input,
    VStack,
    FormControl,
    FormLabel,
    Checkbox,
    Select,
    Box,
    HStack,
    Radio,
    FormErrorMessage,
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
    StartActivity: [
        {
            path: 'data.workflowName.value',
            config: {
                displayName: 'Workflow Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sendNotification.value',
            config: {
                displayName: 'Send Notification',
                type: 'Bool',
            },
        },
        {
            path: 'data.trackActivity.value',
            config: {
                displayName: 'Track Activity',
                type: 'Bool',
            },
        },
    ],
    AddWatchedDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'User(s)',
                type: 'String',
                required: true,
            },
        },
    ],
    AddSalesForceActivityHistoryActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.whatId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Activity History Subject',
                type: 'String',
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Activity History Description',
                type: 'String',
            },
        },
    ],
    AddSalesForceTaskActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.whatId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.ownerId.value',
            config: {
                displayName: 'Salesforce Object Owner Id',
                type: 'String',
            },
        },
        {
            path: 'data.contactId.value',
            config: {
                displayName: 'Salesforce Object Contact Id',
                type: 'String',
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Activity History Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Activity History Description',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.dueDate.value',
            config: {
                displayName: 'Task Due Date',
                type: 'String',
            },
        },
        {
            path: 'data.status.value',
            config: {
                displayName: 'Status',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'In Progress', value: '1' },
                    { displayName: 'Not Started', value: '2' },
                    { displayName: 'Completed', value: '3' },
                    { displayName: 'Waiting on someone else', value: '4' },
                    { displayName: 'Deferred', value: '5' },
                ],
            },
        },
    ],
    AppendTextDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.targetDocument.value',
            config: {
                displayName: 'Document',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.textSourceType.value',
            config: {
                displayName: 'Select Text Source',
                type: 'Radio',
                choices: [
                    { displayName: 'Text', value: 'text' },
                    { displayName: 'Variable', value: 'variable' },
                ],
            },
        },
        {
            path: 'data.sourceText.value',
            config: {
                displayName: 'Text',
                required: true,
            },
        },
    ],
    ApproveDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                required: true,
            },
        },
        {
            path: 'data.checkoutDocuments.value',
            config: {
                displayName: 'Checkout the document?',
                type: 'Bool',
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare this document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    { displayName: 'Assign to a task group', value: 'group' },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
            },
        },
    ],
    default: [
        // {
        //     path: 'data.name.value',
        //     config: {
        //         displayName: 'Step Name',
        //         type: 'String',
        //         required: true,
        //     },
        // },
        // {
        //     path: 'data.stepDescription.value',
        //     config: {
        //         displayName: 'Step Description',
        //         type: 'String',
        //         placeholder: 'Enter a description for this step',
        //     },
        // },
        // {
        //     path: 'data.workflowName.value',
        //     config: {
        //         displayName: 'Workflow Name',
        //     },
        // },
        // {
        //     path: 'data.sendNotification.value',
        //     config: {
        //         displayName: 'Send Notification',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.trackActivity.value',
        //     config: {
        //         displayName: 'Track Activity',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.documents.value',
        //     config: {
        //         displayName: 'Document(s)',
        //         placeholder: 'Select the document(s) to add to the list',
        //         required: true,
        //     },
        // },
        // {
        //     path: 'data.users.value',
        //     config: {
        //         displayName: 'User(s)',
        //         placeholder: 'Select the watchlist user(s)',
        //     },
        // },
        // {
        //     path: 'data.whatId.value',
        //     config: {
        //         displayName: 'Salesforce Object Id',
        //         placeholder: 'Enter the salesforce object id',
        //         required: true,
        //     },
        // },
        // {
        //     path: 'data.subject.value',
        //     config: {
        //         displayName: 'Activity History Subject',
        //         placeholder: 'Enter a subject for the activity',
        //     },
        // },
        // {
        //     path: 'data.description.value',
        //     config: {
        //         displayName: 'Activity History Description',
        //         placeholder: 'Enter a description for the activity',
        //     },
        // },
        // {
        //     path: 'data.ownerId.value',
        //     config: {
        //         displayName: 'Salesforce Object Owner Id',
        //         placeholder: 'Enter the salesforce object owner id',
        //     },
        // },
        // {
        //     path: 'data.contactId.value',
        //     config: {
        //         displayName: 'Salesforce Object Contact Id',
        //         placeholder: 'Enter the salesforce object contact id',
        //     },
        // },
        // {
        //     path: 'data.dueDate.value',
        //     config: {
        //         displayName: 'Task Due Date',
        //         placeholder: 'Enter a due date for the task',
        //     },
        // },
        // {
        //     path: 'data.targetDocument.value',
        //     config: {
        //         displayName: 'Document',
        //         placeholder: 'Enter the salesforce object id',
        //     },
        // },
        // {
        //     path: 'data.textSourceType.value',
        //     config: {
        //         displayName: 'Select Text Source',
        //         type: 'Radio',
        //         choices: [
        //             { displayName: 'Text', value: 'text' },
        //             { displayName: 'Variable', value: 'variable' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.sourceText.value',
        //     config: {
        //         displayName: 'Text',
        //         placeholder: 'Enter the text to append',
        //     },
        // },
        // {
        //     path: 'data.activityDisplayName.value',
        //     config: {
        //         displayName: 'Display Name',
        //     },
        // },
        // {
        //     path: 'data.stageName.value',
        //     config: {
        //         displayName: 'Stage Name',
        //     },
        // },
        // {
        //     path: 'data.checkoutDocuments.value',
        //     config: {
        //         displayName: 'Checkout the document?',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.compareVersion.value',
        //     config: {
        //         displayName: 'Compare this document with another version',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.assigneeType.value',
        //     config: {
        //         displayName: 'Assign to a user or task group',
        //         type: 'Radio',
        //         choices: [
        //             { displayName: 'Assign to a user', value: 'user' },
        //             { displayName: 'Assign to a task group', value: 'group' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.outputXml.value.value',
        //     config: {
        //         displayName: 'Output',
        //     },
        // },
        // {
        //     // Temporary until I figure out how to nest it into the value array
        //     'data.outputXml.value': {
        //         displayName: 'Output',
        //     },
        // },
        // {
        //     path: 'data.instructions.value',
        //     config: {
        //         displayName: 'Instructions',
        //     },
        // },
        // {
        //     path: 'data.limittogroups.value',
        //     config: {
        //         displayName: 'User group',
        //     },
        // },
        // {
        //     path: 'data.allowedchoices.value',
        //     config: {
        //         displayName: 'How many users can be selected?',
        //         type: 'Radio',
        //         choices: [
        //             { displayName: 'Any number of users', value: 'ZeroOrMore' },
        //             { displayName: 'Only one user', value: '2' },
        //             { displayName: 'At least one user', value: '3' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.enableActionRejectedButton.value',
        //     config: {
        //         displayName: 'Enable ActionRejected button',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.addCustomAction.value',
        //     config: {
        //         displayName: 'Add a custom action',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.allowComment.value',
        //     config: {
        //         displayName: 'Comments',
        //         type: 'Choice',
        //         choices: [
        //             { displayName: 'Comments are required', value: '1' },
        //             { displayName: 'Comments are optional', value: 'Yes' },
        //             { displayName: "Don't show the comment field", value: '2' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.waitForNextStep.value',
        //     config: {
        //         displayName: 'Link to next step',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.notifyOnException.value',
        //     config: {
        //         displayName: 'Notify On Exception?',
        //         type: 'Bool',
        //     },
        // },
        // {
        //     path: 'data.action.value',
        //     config: {
        //         displayName: 'Action',
        //         type: 'Choice',
        //         choices: [
        //             { displayName: 'Move', value: 'move' },
        //             { displayName: 'Copy', value: 'copy' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.documents.value.*.value.value',
        //     config: {
        //         displayName: 'Document(s)',
        //     },
        // },
        // {
        //     path: 'data.targetDocument.value.*.value.value',
        //     config: {
        //         displayName: 'Document',
        //     },
        // },
        // {
        //     path: 'data.variableUpdates.value.*.variableToConfigure.value.value',
        //     config: {
        //         displayName: 'Variable',
        //     },
        // },
        // {
        //     path: 'data.variableUpdates.value.*.variableValue.value',
        //     config: {
        //         displayName: 'Value',
        //     },
        // },
        // {
        //     path: 'data.variableUpdates.value.*.variableValue.value.value',
        //     config: {
        //         displayName: 'Variable',
        //     },
        // },
        // {
        //     path: 'data.variableUpdates.value.*.variableValue.value.code',
        //     config: {
        //         displayName: 'Value',
        //     },
        // },
        // {
        //     path: 'data.newDocumentName.value.code',
        //     config: {
        //         displayName: 'New Document Name',
        //     },
        // },
        // {
        //     path: 'data.fieldValue.value.code',
        //     config: {
        //         displayName: 'Value',
        //     },
        // },
        // {
        //     path: 'data.status.value',
        //     config: {
        //         displayName: 'Status',
        //         type: 'Choice',
        //         choices: [
        //             { displayName: '', value: '' },
        //             { displayName: 'In Progress', value: 'move1' },
        //             { displayName: 'Not Started', value: 'copy1' },
        //             { displayName: 'Completed', value: 'move2' },
        //             { displayName: 'Waiting on someone else', value: 'copy2' },
        //             { displayName: 'Deferred', value: 'move3' },
        //         ],
        //     },
        // },
        // {
        //     path: 'data.sourceDocument.value.*.value.value',
        //     config: {
        //         displayName: 'Source Document',
        //     },
        // },
        // {
        //     path: 'data.targetFolder.value.*.value.value',
        //     config: {
        //         displayName: 'Target Folder',
        //     },
        // },
        // {
        //     path: 'data.metadata.value.*.metadataToConfigure.value.*.value.name',
        //     config: {
        //         displayName: 'Metadata',
        //     },
        // },
        // {
        //     path: 'data.metadata.value.*.metadataToConfigure.value.*.value.setName',
        //     config: {
        //         displayName: 'Value',
        //     },
        // },
        // {
        //     path: 'data.metadata.value.*.variableValue.value.value',
        //     config: {
        //         displayName: 'Value',
        //     },
        // },
        // {
        //     path: 'data.notifiers.value.*.value.value',
        //     config: {
        //         displayName: 'Notifications',
        //     },
        // },
    ],
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

    // useEffect(() => {
    //     const findDeepestFields = (obj, currentPath = []) => {
    //         let deepestFields = [];

    //         for (const key in obj) {
    //             if (!displayHiddenFields && isFiltered(key, currentPath)) {
    //                 continue;
    //             }

    //             const newPath = currentPath.concat(key);

    //             if (typeof obj[key] === 'object' && obj[key] !== null) {
    //                 // Special handling for the "type" and "value" structure
    //                 if (
    //                     1 === 2
    //                     // obj[key].hasOwnProperty('type') &&
    //                     // obj[key].hasOwnProperty('value')
    //                 ) {
    //                     deepestFields.push({
    //                         path: newPath.join('.') + '.value',
    //                         value: obj[key].value,
    //                     });
    //                     // We've added the ".value", so continue to next key
    //                     continue;
    //                 }
    //                 // If not a special "type" & "value" structure, continue exploring deeper fields
    //                 deepestFields = deepestFields.concat(
    //                     findDeepestFields(obj[key], newPath)
    //                 );
    //             } else {
    //                 const path = newPath.join('.');
    //                 deepestFields.push({ path, value: obj[key] });
    //             }
    //         }

    //         return deepestFields;
    //     };

    //     const deepestFields = findDeepestFields(data);
    //     setFields(deepestFields);
    // }, [data, displayHiddenFields]);

    const findDeepestFields = (obj, currentPath = []) => {
        let deepestFields = [];

        for (const key in obj) {
            if (!displayHiddenFields && isFiltered(key, currentPath)) {
                continue;
            }

            const newPath = currentPath.concat(key);

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // Check if the object has a "type" but no "value"
                // if (
                //     obj[key].hasOwnProperty('type') &&
                //     !obj[key].hasOwnProperty('value')
                // ) {
                //     // Assign an empty array to the "value" key
                //     obj[key].value = [];
                //     deepestFields.push({
                //         path: newPath.join('.') + '.value',
                //         value: [], // Assign an empty array as the default value
                //     });
                // }
                // Check if the object has a "value" key that is an empty array
                if (
                    obj[key].hasOwnProperty('value') &&
                    Array.isArray(obj[key].value) &&
                    obj[key].value.length === 0
                ) {
                    // Add a blank string value for the "value" key
                    deepestFields.push({
                        path: newPath.join('.') + '.value',
                        value: '', // Set a blank string as the default value
                    });
                } else {
                    // Continue exploring deeper fields
                    deepestFields = deepestFields.concat(
                        findDeepestFields(obj[key], newPath)
                    );
                }
            } else {
                const path = newPath.join('.');
                deepestFields.push({ path, value: obj[key] });
            }
        }

        return deepestFields;
    };

    useEffect(() => {
        const currentActivityName = data.data.activityName || 'default';
        const activityFieldsConfig =
            displayNameMapping[currentActivityName] ||
            displayNameMapping['default'];

        let deepestFields = findDeepestFields(data);

        // Apply activity-specific configurations to deepestFields
        const fieldsForActivity = deepestFields.map((field) => {
            try {
                const fieldConfig = activityFieldsConfig.find((config) =>
                    matchPathWithWildcard(config.path, field.path)
                );
                return {
                    ...field,
                    config: fieldConfig ? fieldConfig.config : {},
                };
            } catch (err) {
                console.log('dsdebug-log', err.message);
            }
        });

        setFields(fieldsForActivity);
    }, [data, displayHiddenFields]);

    const getDisplayName = (path, activityName) => {
        const activityFieldsConfig =
            displayNameMapping[activityName] || displayNameMapping['default'];

        const fieldConfig = activityFieldsConfig.find((config) =>
            matchPathWithWildcard(config.path, path)
        );
        return fieldConfig &&
            fieldConfig.config &&
            fieldConfig.config.displayName
            ? fieldConfig.config.displayName
            : path;
    };

    const matchPathWithWildcard = (pattern, path) => {
        // Check if pattern is undefined
        if (!pattern) return false;

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
                    const { config, value } = field;
                    const fieldType = config.type;
                    const inputValue = getNestedValue(editedNode, field.path);
                    const currentActivityName =
                        data.data.activityName || 'default';

                    const isError = config.required && inputValue === '';

                    return (
                        <FormControl
                            isRequired={config.required}
                            key={field.path}
                            isInvalid={isError}
                        >
                            <FormLabel>
                                {getDisplayName(
                                    field.path,
                                    currentActivityName
                                )}
                            </FormLabel>
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
                                    {config.choices.map((choice) => (
                                        <option
                                            key={choice.value}
                                            value={choice.value}
                                        >
                                            {choice.displayName}
                                        </option>
                                    ))}
                                </Select>
                            ) : fieldType === 'Radio' ? (
                                <HStack>
                                    {config.choices.map((choice) => (
                                        <Radio
                                            key={choice.value}
                                            value={choice.value}
                                            isChecked={
                                                inputValue === choice.value
                                            }
                                            onChange={(e) =>
                                                handleInputChange(
                                                    field.path,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {choice.displayName}
                                        </Radio>
                                    ))}
                                </HStack>
                            ) : (
                                <Input
                                    placeholder={config?.placeholder || ''}
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
                            {isError && (
                                <FormErrorMessage>
                                    This field is required.
                                </FormErrorMessage>
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
