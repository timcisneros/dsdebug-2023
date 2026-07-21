import { createContext, useContext, useState } from 'react';
import initialData from '../../data/New Workflow.json';

const getNodePositions = (data) =>
    Object.fromEntries(
        data.cells
            .filter((cell) => cell.type !== 'springcm.Link')
            .map((cell) => [cell.id, cell.position ?? { x: 0, y: 0 }])
    );

// Create a new context for Node
const NodeContext = createContext();

// Create a custom hook to access the selectedNodes context
export const useNode = () => {
    return useContext(NodeContext);
};

// Create the NodeProvider component to wrap your main component and manage the state of selectedNodes
export const NodeProvider = ({ children }) => {
    const [selectedNodes, setSelectedNodes] = useState(null);
    const [selectedEdge, setSelectedEdge] = useState(null);
    const [data, setData] = useState(initialData);
    const [newNodesAdded, setNewNodesAdded] = useState(false);
    const [iterateVars, setIterateVars] = useState(false);
    // useState to store defaultNodePositions and setDefaultNodePositions
    const [defaultNodePositions, setDefaultNodePositions] = useState(() =>
        getNodePositions(initialData)
    );

    const [isVisible, setIsVisible] = useState(true);

    const handleToggleVisibility = () => {
        setIsVisible((prevVisible) => !prevVisible); // Toggle the isVisible state
    };

    const startActivity = data.cells.find(
        (cell) => cell.activityName === 'StartActivity'
    );
    const definedVariables = startActivity?.definedVariables?.value ?? null;
    const workflowName = startActivity?.workflowName ?? null;

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
            if (existingVar && iterateVars) {
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
                // Create a new object with the updated name
                templateVar = {
                    ...templateVar,
                    value: {
                        ...templateVar.value,
                        name: newName,
                    },
                };
            }
            // Only push if not found in existingVariables, or if found and iterateVars is true
            if (!existingVar || (existingVar && iterateVars)) {
                mergedVariables.push(templateVar);
            }
        });
        return mergedVariables;
    };

    const handleUpdateNode = (editedNode) => {
        const nodeIndex = data.cells.findIndex(
            (item) => item.id === editedNode?.id
        );

        if (nodeIndex !== -1) {
            // Create a new copy of data to avoid directly mutating the state
            let updatedData = { ...data };

            // Merge the properties of the editedNode with the existing node data
            updatedData.cells[nodeIndex] = {
                ...updatedData.cells[nodeIndex],
                ...editedNode.data,
            };

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
                selectedEdge,
                setSelectedEdge,
                handleUpdateNode,
                workflowName,
                generateUniqueName,
                definedVariables,
                mergeDefinedVariables,
                startActivity,
                newNodesAdded,
                setNewNodesAdded,
                defaultNodePositions,
                setDefaultNodePositions,
                iterateVars,
                setIterateVars,
                isVisible,
                handleToggleVisibility,
            }}
        >
            {children}
        </NodeContext.Provider>
    );
};
