import React from 'react';
import {
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import myNewTheme from './Styles/theme';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Container/>
    </ChakraProvider>
  );
}

export default App;
