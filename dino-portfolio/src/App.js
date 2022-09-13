import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import  Container  from './Components/Container/container';

import myNewTheme from './Styles/theme';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Container/>
    </ChakraProvider>
  );
}

export default App;
