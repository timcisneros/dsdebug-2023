import { useState, useEffect, useMemo, memo } from 'react';
import {
    Box,
    Tabs,
    IconButton,
} from '@chakra-ui/react';
import { Resizable } from 'react-resizable';
import StepList from './Steps/StepList';
import CollapsibleTree from './Variables/CollapsibleTree';
import Search from './Search';
import TemplateList from './Steps/TemplateList';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { useNode } from '../../contexts/NodeContext';
// import { findVariables } from '../../utils/jsonUtils';

const SidePanel = ({
    definedVariables,
    data,
    setData,
}) => {
    // State to control the width of the SidePanel
    const [panelWidth, setPanelWidth] = useState(350);
    const [isPanelOpen, setIsPanelOpen] = useState(true);

    // const [variables, setVariables] = useState([]);

    // useEffect(() => {
    //     try {
    //         const jsonData = data.cells;
    //         const foundVariables = findVariables(jsonData);
    //         setVariables(foundVariables);
    //         // Rest of your code
    //     } catch (error) {
    //         console.error('dsdebug-log', 'Invalid JSON data:', error);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     console.log('dsdebug-log', 'variables', variables);
    // }, [variables]);

    // Function to handle the resizing of the SidePanel
    const handleResize = (e, { size }) => {
        setPanelWidth(size.width);
    };

    const handleToggleResize = () => {
        setIsPanelOpen((prevPanelOpen) => !prevPanelOpen);
        setPanelWidth(isPanelOpen ? 0 : 350);
    };

    const collapsibleTreeComponent = useMemo(() => {
        return (
            <>
                {definedVariables ? (
                    definedVariables.map((definedVariable, index) => (
                        <div key={index}>
                            <CollapsibleTree
                                definedVariable={definedVariable}
                                data={data}
                                setData={setData}
                                definedVariables={definedVariables}
                            />
                        </div>
                    ))
                ) : (
                    <div>No Variables</div>
                )}
            </>
        );
    }, [definedVariables, data, setData]);

    return (
        <>
            <Box position="relative">
                <IconButton
                    size="lg"
                    width="42px"
                    height="42px"
                    position="absolute"
                    left="100%"
                    border="1px solid #cccccc"
                    borderTop="none"
                    borderLeft="none"
                    borderRadius="0"
                    borderBottomRightRadius={20}
                    zIndex="1"
                    onClick={handleToggleResize}
                >
                    {isPanelOpen ? <FiChevronLeft /> : <FiChevronRight />}
                </IconButton>
                {/* {isPanelOpen && ( */}
                <Resizable
                    width={isPanelOpen ? panelWidth : 0}
                    height={Infinity} // Set to Infinity to allow vertical resizing if needed
                    onResize={handleResize}
                    minConstraints={[120, Infinity]} // Set the minimum width for the SidePanel
                    maxConstraints={[455, Infinity]} // Set the maximum width for the SidePanel
                    resizeHandles={['e']} // Enable the east (right) handle for horizontal resizing
                    axis="x" // Allow horizontal resizing only
                >
                    <Box
                        width={`${panelWidth}px`}
                        borderRight={isPanelOpen ? '1px solid #ccc' : 0}
                    >
                        <Tabs.Root defaultValue="steps" fitted overflow="hidden">
                            <Tabs.List>
                                <Tabs.Trigger value="steps">Steps</Tabs.Trigger>
                                <Tabs.Trigger value="variables">
                                    Variables
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Box
                                flex="1"
                                display="flex"
                                flexDirection="column"
                                height="calc(100vh - 90px)"
                            >
                                <Tabs.Content
                                    value="steps"
                                    overflowY="scroll"
                                    height="100vh"
                                >
                                    <TemplateList />
                                    <StepList />
                                </Tabs.Content>
                                <Tabs.Content
                                    value="variables"
                                    overflowY="scroll"
                                    height="100vh"
                                >
                                    <Search
                                        definedVariables={definedVariables}
                                    />
                                    <p>Variables: {definedVariables?.length}</p>
                                    {collapsibleTreeComponent}
                                </Tabs.Content>
                            </Box>
                        </Tabs.Root>
                    </Box>
                </Resizable>
                {/* )} */}
            </Box>
        </>
    );
};

export default memo(SidePanel);
