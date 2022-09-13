import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import Container from './Components/Container/container';
import  myNewTheme  from './Styles/theme';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Container/>
    </ChakraProvider>
  );
}

export default App;
