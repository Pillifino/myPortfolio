import React from 'react';

// FLex
import { Flex, Image } from '@chakra-ui/react';

import Me from '../Assets/Me.png';
export default function Home() {
  return (
    <Flex 
    flexDirection="column" 
    bg="bg" 
    height={["200vh","200vh","125vh","125vh",]} 
    width="100vw">
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        bg="bg"
        height="50vh"
        width="100%"
      >
        <Flex
          bg="bg"
          width="40vw"
          justify="center"
          alignItems="center"
          // pb="20"
          display={['none', 'none', 'flex', 'flex']}
        >
          <Image
            borderRadius="full"
            boxSize="275"
            src={Me}
            alt="Me"
            border="solid white 2.5px"
          />
        </Flex>
        <Flex
          // bg="Black"
          flexDirection="column"
          height={["150vh","150vh","100vh","100vh",]}
          color="blue"
          width={['100vw', '100vw', '70vw', '70vw']}
          justify="Flex Start"
          alignItems="center"
        >
          <Flex
            // bg="orange"
            width="100%"
            height={["30vh","30vh","20vh","20vh",]}
            alignItems={["end","end","end","end",]}
            pl={['0', '0', '5', '5']}
            fontSize="50"
            // fontWeight="bold"
            // color="blue"
            justifyContent={['center', 'center', 'flex-start', 'flex-start']}
          >
            Dino Dizon
          </Flex>
          <Flex
            // bg="Red"
            flexDirection={["column","column","row","row",]}
            width="100%"
            height="100%"
            pl={['0', '0', '10', '10']}
            fontSize="25"
            // fontWeight="bold"
            color="lightBlue"
            alignItems={["center","center","flex-start","flex-start",]}
            justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-start']}
          >
            <Flex
            height="10vh"
            justify="center"
            bgClip='text' 
            color="lightBlue"
            
            >
              Junior Software Developer
              </Flex>
            {/* Mobile */}
              <Image
                borderRadius="full"
                boxSize="275"
                src={Me}
                alt="Me"
                border="solid white 2.5px"
                display={['flex', 'flex', 'none', 'none']}
              />
          </Flex>
        </Flex>
      </Flex>
      <Flex 
      // bg="yellow"
      mt="11vh"
      height={["100vh","100vh","50vh","50vh",]} 
      width="100%" 
      flexDirection="column">
        <Flex
          color="blue"
          // bg="green"
          height={["100vh","100vh","30vh","30vh",]}
          width="100%"
          alignItems={["flex-end","flex-end","center","center",]}
          pl={['0', '0', '20', '20']}
          fontSize="48"
          // fontWeight="bold"
          justifyContent={['center', 'center', 'flex-start', 'flex-start']}
        >
          About Me
        </Flex>
        <Flex
          color="lightBlue"
          // bg="yellow"
          height={["100vh","100vh","30vh","30vh",]}
          width="100%"
          pl={['5', '5', '32', '32']}
          pr={['5', '5', '0', '0']}
          fontSize="30"
          // fontWeight="bold"
          justifyContent={['center', 'center', 'flex-start', 'flex-start']}
        >
          Hello! My Name Is Dino and I am a Junior Software Developer. Thank you
          for checking out my page (:
        </Flex>
      </Flex>
    </Flex>
  );
}
