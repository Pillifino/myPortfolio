import { extendTheme } from '@chakra-ui/react';
// import "@fontsource/fredoka-one"
import "@fontsource/bakbak-one"


 const myNewTheme = extendTheme({
  colors: {
    bg: '#23262D',
    bgAccent:"#1A1B22",
    blue: '#50F7FF',
    lightBlue: '#8EF7FF',
    accent: "#61AEB5",
  },
  fonts: {
    heading: 'Bakbak One',
    body: 'Bakbak One',
  },
});

export default myNewTheme