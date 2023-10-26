import { useState } from 'react';
import { useNode } from '../../contexts/NodeContext';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

const dataMapping = {
    // ... your mappings ...
};

const RenderInputs = ({
    obj,
    path = '',
    dataMapping,
    handleUpdateNode,
    data,
    nodeId,
}) => {
    const findMappedName = (path) => {
        for (const key in dataMapping) {
            const regex = new RegExp(
                '^' + key.replace(/\./g, '\\.').replace(/\*/g, '[0-9]+') + '$'
            );
            if (regex.test(path)) return dataMapping[key];
        }
        return null;
    };

    const handleInputChange = (e, path) => {
        const paths = path.split('.');
        const nodeId = paths.shift(); // Remove nodeId from paths

        let updatedData = [...data.cells];
        let nodeToUpdate = updatedData.find((cell) => cell.id === nodeId);

        if (!nodeToUpdate) {
            console.error('dsdebug-log', `No node found with ID: ${nodeId}`);
            return;
        }

        let currentObj = nodeToUpdate;

        console.log('dsdebug-log', 'test', currentObj);

        paths.forEach((segment, index) => {
            if (!currentObj[segment] && index !== paths.length - 1) {
                console.error(
                    'dsdebug-log',
                    `Path segment ${segment} leads to undefined object. Full path: ${path}`
                );
                return;
            }

            if (index === paths.length - 1) {
                currentObj[segment] = e.target.value;
            } else {
                currentObj = currentObj[segment];
            }
        });

        handleUpdateNode(updatedData);
    };

    if (Array.isArray(obj)) {
        return obj.map((item, index) => (
            <RenderInputs
                key={index}
                obj={item}
                path={`${path}.${index}`}
                dataMapping={dataMapping}
                handleUpdateNode={handleUpdateNode}
                data={data}
                nodeId={nodeId}
            />
        ));
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).map((key) => (
            <RenderInputs
                key={key}
                obj={obj[key]}
                path={`${path}.${key}`}
                dataMapping={dataMapping}
                handleUpdateNode={handleUpdateNode}
                data={data}
                nodeId={nodeId}
            />
        ));
    } else if (path.endsWith('.value')) {
        const customName = findMappedName(path) || path;
        return (
            <FormControl key={path}>
                <FormLabel htmlFor={path}>{customName}</FormLabel>
                <Input
                    id={path}
                    type="text"
                    defaultValue={
                        typeof obj === 'string' ? obj : JSON.stringify(obj)
                    }
                    onChange={(e) => handleInputChange(e, path)}
                />
            </FormControl>
        );
    }

    return null;
};

const Panel = () => {
    const { selectedNodes, handleUpdateNode, data, setData } = useNode(); // Assuming you have access to setData from your context

    // Create a copy of the data.cells array to work with in the component's state
    const [cellData, setCellData] = useState([...data.cells]);

    // Define a function to update the cell data
    const updateCellData = (updatedData) => {
        setCellData(updatedData);
        setData({ ...data, cells: updatedData }); // Update the context's data with the new cell data
    };

    return (
        <Box position={'relative'} p={4}>
            {selectedNodes.map((node) => {
                const nodeId = node.id;

                return (
                    <RenderInputs
                        key={nodeId}
                        obj={node}
                        path={nodeId}
                        dataMapping={dataMapping}
                        handleUpdateNode={updateCellData} // Pass the update function
                        data={{ ...data, cells: cellData }} // Pass the updated cell data
                        nodeId={nodeId}
                    />
                );
            })}
        </Box>
    );
};

export default Panel;
