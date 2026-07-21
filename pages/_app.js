import '../styles/globals.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { NodeProvider } from '../src/contexts/NodeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FieldCacheProvider } from '../src/contexts/FieldCacheContext';
import { Toaster } from '../src/components/ui/toaster';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <Toaster />
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
