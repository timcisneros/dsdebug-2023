import React, { useState, useEffect } from 'react';
import { useNode } from '../../contexts/NodeContext';
import { Box, Input, Text, FormControl, FormLabel } from '@chakra-ui/react';

const dataMapping = {
    // ... your mappings ...
};

const RenderInputs = ({
    obj,
    path = '',
    dataMapping,
    handleUpdateNode,
    data,
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
        const nodeId = paths.shift();

        console.log('dsdebug-log', nodeId);
        console.log('dsdebug-log', obj);

        let updatedData = [...data.cells];
        let nodeToUpdate = updatedData.find((cell) => cell.id === nodeId);

        if (!nodeToUpdate) {
            console.error(`No node found with ID: ${nodeId}`);
            return;
        }

        let currentObj = nodeToUpdate;

        paths.forEach((segment, index) => {
            if (!currentObj[segment] && index !== paths.length - 1) {
                console.error(
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
                path={`${path}.${index}`} // Adjusted this line
                dataMapping={dataMapping}
                handleUpdateNode={handleUpdateNode}
                data={data}
            />
        ));
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).map((key) => (
            <RenderInputs
                key={key}
                obj={obj[key]}
                path={`${path}.${key}`} // Adjusted this line
                dataMapping={dataMapping}
                handleUpdateNode={handleUpdateNode}
                data={data}
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
    const { selectedNodes, handleUpdateNode, data } = useNode();

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
                        handleUpdateNode={handleUpdateNode}
                        data={data}
                    />
                );
            })}
        </Box>
    );
};

export default Panel;
