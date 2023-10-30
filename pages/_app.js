import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { NodeProvider } from '../src/contexts/NodeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FieldCacheProvider } from '../src/contexts/FieldCacheContext';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <DndProvider backend={HTML5Backend}>
                <FieldCacheProvider>
                    <NodeProvider>
                        <Component {...pageProps} />
                    </NodeProvider>
                </FieldCacheProvider>
            </DndProvider>
        </ChakraProvider>
    );
}

export default MyApp;
