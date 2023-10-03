import { useState, useMemo, memo } from 'react';
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    IconButton,
} from '@chakra-ui/react';
import { Resizable } from 'react-resizable';
import StepList from './Steps/StepList';
import CollapsibleTree from './Variables/CollapsibleTree';
import Search from './Search';
import { varDataMapping } from './Variables/varData';
import TemplateList from './Steps/TemplateList';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SidePanel = ({ definedVariables }) => {
    // State to control the width of the SidePanel
    const [panelWidth, setPanelWidth] = useState(350);
    const [isPanelOpen, setIsPanelOpen] = useState(true);

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
                <Search definedVariables={definedVariables} />
                {definedVariables ? (
                    definedVariables.map((definedVariable, index) => (
                        <div key={index}>
                            <CollapsibleTree
                                definedVariable={definedVariable}
                                icon={
                                    varDataMapping[
                                        definedVariable.value.displayType
                                    ].icon
                                }
                            />
                        </div>
                    ))
                ) : (
                    <div>No Variables</div>
                )}
            </>
        );
    }, [definedVariables]);

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
                    icon={
                        isPanelOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />
                    }
                    onClick={handleToggleResize}
                />
                {/* {isPanelOpen && ( */}
                <Resizable
                    width={isPanelOpen ? panelWidth : 0}
                    height={Infinity} // Set to Infinity to allow vertical resizing if needed
                    onResize={handleResize}
                    minConstraints={[120, Infinity]} // Set the minimum width for the SidePanel
                    maxConstraints={[400, Infinity]} // Set the maximum width for the SidePanel
                    resizeHandles={['e']} // Enable the east (right) handle for horizontal resizing
                    axis="x" // Allow horizontal resizing only
                >
                    <Box
                        width={`${panelWidth}px`}
                        borderRight={isPanelOpen ? '1px solid #ccc' : 0}
                    >
                        <Tabs isFitted overflow="hidden">
                            <TabList>
                                <Tab>Steps</Tab>
                                <Tab>Variables</Tab>
                            </TabList>
                            <TabPanels
                                flex="1"
                                display="flex"
                                flexDirection="column"
                                height="calc(100vh - 90px)"
                            >
                                <TabPanel overflowY="scroll" height="100vh">
                                    <TemplateList />
                                    <StepList />
                                </TabPanel>
                                <TabPanel overflowY="scroll" height="100vh">
                                    {collapsibleTreeComponent}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Resizable>
                {/* )} */}
            </Box>
        </>
    );
};

export default memo(SidePanel);
