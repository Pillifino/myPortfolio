import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      hello world
    </ChakraProvider>
  );
}

export default App;
