import { createContext, useContext, useEffect, useState } from 'react';
import initialData from '../../data/New Workflow.json';

// Create a new context for Node
const NodeContext = createContext();

// Create a custom hook to access the selectedNodes context
export const useNode = () => {
    return useContext(NodeContext);
};

// Create the NodeProvider component to wrap your main component and manage the state of selectedNodes
export const NodeProvider = ({ children }) => {
    const [selectedNodes, setSelectedNodes] = useState(null);
    const [data, setData] = useState(initialData);
    const [startActivity, setStartActivity] = useState(null);
    const [definedVariables, setDefinedVariables] = useState(null);
    const [workflowName, setWorkflowName] = useState(null);
    const [newNodesAdded, setNewNodesAdded] = useState(false);
    // useState to store defaultNodePositions and setDefaultNodePositions
    const [defaultNodePositions, setDefaultNodePositions] = useState(null);

    useEffect(() => {
        if (startActivity) {
            setDefinedVariables(startActivity.definedVariables.value);
            setWorkflowName(startActivity.workflowName);
        }
    }, [startActivity, data]);

    const generateUniqueName = (baseName, existingNames) => {
        let newName = baseName;
        let iterator = 1;
        while (existingNames.includes(newName)) {
            newName = `${baseName} ${iterator}`;
            iterator++;
        }
        return newName;
    };

    // Function to merge definedVariables with templateDefinedVariables
    const mergeDefinedVariables = (existingVariables, templateVariables) => {
        const mergedVariables = existingVariables.slice();

        templateVariables.forEach((templateVar) => {
            // Check if the variable name is one of the excluded names
            const isExcludedVariable = !templateVar.value.deletable;

            // If the variable is excluded, skip the merging process for it
            if (isExcludedVariable) {
                return;
            }

            const existingVar = mergedVariables.find(
                (existingVar) =>
                    existingVar.value.name === templateVar.value.name
            );

            if (existingVar) {
                let newName = `${templateVar.value.name}_1`;
                let iterator = 2;

                while (
                    mergedVariables.some(
                        (varItem) => varItem.value.name === newName
                    )
                ) {
                    newName = `${templateVar.value.name}_${iterator}`;
                    iterator++;
                }

                // Create a new object with the updated name to avoid modifying the templateVar directly
                templateVar = {
                    ...templateVar,
                    value: {
                        ...templateVar.value,
                        name: newName,
                    },
                };
            }

            mergedVariables.push(templateVar);
        });

        return mergedVariables;
    };

    const handleUpdateNode = (editedNode) => {
        // Find the index of the node in data.cells with the matching id
        const nodeIndex = data.cells.findIndex(
            (item) => item.id === editedNode.id
        );

        if (nodeIndex !== -1) {
            // Create a new copy of data to avoid directly mutating the state
            let updatedData = { ...data };

            // Create a filtered copy of editedNode.data with undefined properties removed
            const filteredEditedData = Object.entries(editedNode.data).reduce(
                (result, [key, value]) => {
                    if (value !== undefined) {
                        result[key] = value;
                    }
                    return result;
                },
                {}
            );

            // Merge the properties of the filteredEditedData with the existing node data
            updatedData.cells[nodeIndex] = {
                ...updatedData.cells[nodeIndex],
                ...filteredEditedData,
            };

            // console.log(
            //     'dsdebug-log',
            //     '- Node Updated',
            //     updatedData.cells[nodeIndex]
            // );

            // Set the updated data back to the state
            setData(updatedData);
        }
    };

    return (
        <NodeContext.Provider
            value={{
                data,
                setData,
                selectedNodes,
                setSelectedNodes,
                handleUpdateNode,
                workflowName,
                setWorkflowName,
                generateUniqueName,
                definedVariables,
                setDefinedVariables,
                mergeDefinedVariables,
                startActivity,
                setStartActivity,
                newNodesAdded,
                setNewNodesAdded,
                defaultNodePositions,
                setDefaultNodePositions,
            }}
        >
            {children}
        </NodeContext.Provider>
    );
};
