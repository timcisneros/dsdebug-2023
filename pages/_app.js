import '../styles/globals.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { NodeProvider } from '../src/contexts/NodeContext';
import { Toaster } from '../src/components/ui/toaster';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <Toaster />
            <NodeProvider>
                <Component {...pageProps} />
            </NodeProvider>
        </ChakraProvider>
    );
}

export default MyApp;
