import { extendTheme } from '@chakra-ui/react';
import "@fontsource/fredoka-one"
// import "@fontsource/bakbak-one"

 const myNewTheme = extendTheme({
  colors: {
    bg: '#1A1A1A',
    bgAccent:"#202020",
    myPurple:"#E8DBFF"
  },
  fonts: {
    heading: 'Fredoka One',
    body: 'Fredoka One',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple"
      }
    }
  }
});

export default myNewTheme