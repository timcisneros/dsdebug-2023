import { useState, useEffect, memo } from 'react';
import {
    Input,
    VStack,
    FormControl,
    FormLabel,
    Checkbox,
} from '@chakra-ui/react';
import { useNode } from '../../contexts/NodeContext';

const filterKeys = {
    width: true,
    height: true,
    id: true,
    style: true,
    data: {
        icon: true,
        name: {
            type: true,
        },
        color: true,
        attrs: true,
        size: true,
        content: true,
        angle: true,
        activityName: true,
        group: true,
        z: true,
        name: {
            type: true,
        },
        stepDescription: {
            type: true,
        },
        notifyOnException: {
            type: true,
        },
        variableUpdates: true,
        status: {
            type: true,
            value: {
                returnType: true,
            },
        },
        errorState: true,
        activityDisplayName: {
            type: true,
        },
        definedVariables: true,
        workflowName: true,
        sendNotification: {
            type: true,
        },
        trackActivity: {
            type: true,
        },
    },
    position: true,
    type: true,
    selectable: true,
    selected: true,
    positionAbsolute: true,
};

const displayNameMapping = {
    'data.name.value': { displayName: 'Step Name', type: 'String' },
    'data.stepDescription.value': {
        displayName: 'Step Description',
        type: 'String',
    },
    'data.sendNotification.value': {
        displayName: 'Send Notification',
        type: 'Bool',
    },
    'data.trackActivity.value': {
        displayName: 'Track Activity',
        type: 'Bool',
    },
    // Add other mappings as needed
};

const DeepFieldExplorer = ({ data }) => {
    const { handleUpdateNode } = useNode();
    const [fields, setFields] = useState([]);
    const [editedNode, setEditedNode] = useState(data);

    const isFiltered = (key, currentPath) => {
        let obj = filterKeys;
        for (let part of currentPath) {
            if (obj[part]) {
                obj = obj[part];
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
                if (isFiltered(key, currentPath)) {
                    continue;
                }

                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    deepestFields = deepestFields.concat(
                        findDeepestFields(obj[key], currentPath.concat(key))
                    );
                } else {
                    const path = [...currentPath, key].join('.');
                    deepestFields.push({ path, value: obj[key] });
                }
            }

            return deepestFields;
        };

        const deepestFields = findDeepestFields(data);
        setFields(deepestFields);
    }, [data]);

    const getDisplayName = (path) => {
        return displayNameMapping[path]?.displayName || path;
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
        <VStack spacing={4} px={4} pb={4}>
            {fields.map((field) => {
                const fieldType = displayNameMapping[field.path]?.type;
                const inputValue = getNestedValue(editedNode, field.path);
                return (
                    <FormControl key={field.path}>
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
                        ) : (
                            <Input
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
