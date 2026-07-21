import { Toaster as ChakraToaster, createToaster } from '@chakra-ui/react';

export const toaster = createToaster({ placement: 'top-end' });

export const Toaster = () => <ChakraToaster toaster={toaster} />;
