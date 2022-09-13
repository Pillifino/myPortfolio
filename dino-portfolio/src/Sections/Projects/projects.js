import { Container, Flex, Image } from '@chakra-ui/react'

import images from '../../images'

function Projects() {
  return (
    <div>
      <Flex
        bg="black"
        w="100vw"
        height="90vh"
        justify="center"
        alignItems="center"
      >
        <Container
          // bg="white"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          height="60%"
          maxWidth="80%"
          position="relative"
        >
          {images.map((image)=> {
            return (
              <Image 
              src={image}
              w="45%"
              h="45%"
              borderRadius="25px"
              filter='auto' 
              blur='2px'
              opacity=".8"
              _hover={{ blur: "0px", opacity:"1"}}
              transition=".8s"
              >
              </Image>
            );
          })}
        </Container>
      </Flex>
    </div>
  )
}

export default Projects
