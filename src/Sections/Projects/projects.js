import { Container, Flex, Image, Link } from '@chakra-ui/react'

import image1 from '../../Assets/Images/collabarray.jpg'
import image2 from '../../Assets/Images/eshop.jpg'
import image3 from '../../Assets/Images/noteTaker.jpg'
import image4 from '../../Assets/Images/teamProfile.jpg'

const projects = [
  {
    number: 1,
    image: image1,
    link: "https://collabarray.herokuapp.com/Search"
  },
  {
    number: 2,
    image: image2,
    link: "https://www.youtube.com/watch?v=R5NlXv3OmSA"
  },
  {
    number: 3,
    image: image3,
    link: "https://agile-cliffs-17930.herokuapp.com/"
  },
  {
    number: 4,
    image: image4,
    link: "https://user-images.githubusercontent.com/98142990/166129984-c6f92dad-c0b2-46bf-b372-23791c157c23.mp4"
  },
]

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
          height={["100%","100%","100%","100%",]}
          maxWidth="80%"
          position="relative"
        >
          {projects.map((item, index)=> {
            return (
              <Link href={item.link} target={"_blank"}
              // bg="red"
              // border="solid white 1px"
              w={["100%","100%","50%","50%",]}
              >
              <Image 
              key={index}
              src={item.image}
              w="100%"
              h={["25vh","30vh","45vh","45vh",]}
              p="2"
              borderRadius="25px"
              filter='auto' 
              opacity=".6"
              _hover={{ blur: "0px", opacity:"1"}}
              transition=".8s"
              >
              </Image>
              </Link>
            );
          })}
        </Container>
      </Flex>
    </div>
  )
}

export default Projects
