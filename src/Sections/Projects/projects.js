import { Container, Flex, Image } from '@chakra-ui/react'

import images from '../../images'

function Projects() {
  return (
    <div>
      <Flex
        bg="black"
        w="100vw"
        height={["120vh","120vh","90vh","90vh",]}
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
          height={["100%","100%","80%","80%",]}
          maxWidth="80%"
          position="relative"
        >
          {images.map((image)=> {
            return (
              <Image 
              src={image}
              w={["100%","100%","50%","50%",]}
              h={["25%","25%","45%","45%",]}
              p="2"
              borderRadius="25px"
              filter='auto' 
              opacity=".6"
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
