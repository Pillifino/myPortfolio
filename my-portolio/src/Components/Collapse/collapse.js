import React from "react"

import { Text, Flex, Image, Box, Link } from "@chakra-ui/react"

// Images
import One from "../../Assets/collabarray.jpg"
import Two from "../../Assets/eshop.jpg"
import Three from "../../Assets/noteTaker.jpg"
import Four from "../../Assets/teamProfile.jpg"

export default function CollapseEx() {
  // const { isOpen, onToggle } = useDisclosure()
  const projects = [
    {
      ID: 1,
      title: "Collabarray",
      image: One,
      description: "This was my final project in the coding camp. It's a place for coders to collaborate on original project ideas or join other teams that may need their skillsets! (Currently fixing my profile page but menu bar will allow you to view the other pages for now)",
      link: "https://collabarray.herokuapp.com/"
    },
    {
      ID: 2,
      title: "E-Commerce Backend",
      image: Two,
      description: "Backend project that focuses on Express, MySql, and insomnia to showcase understanding of CRUD operations. Watch the video!",
      link: "https://www.youtube.com/watch?v=R5NlXv3OmSA"
    },
    {
      ID: 3,
      title: "Express Note Taker",
      image: Three,
      description: "A note taker that allows us to save and delete notes. Try it out!",
      link: "https://agile-cliffs-17930.herokuapp.com/"
    },
    {
      ID: 4,
      title: "Team Profile Generator",
      image: Four,
      description: "Application that runs in Node that takes in information about employees in order to build a team profile. Watch the video!",
      link: "https://user-images.githubusercontent.com/98142990/166129984-c6f92dad-c0b2-46bf-b372-23791c157c23.mp4"
    },
  ]

  return (
    <>
      <Flex
        flexDirection="column"
        bg="bg"
        // bg="yellow"
        height={["350vh", "350vh", "525vh", "525vh",]}
        width="100vw"
        alignItems="center"
        pt="10"
      >
        <Flex
          flexDirection="column"
          // bg="bg"
          // bg="red"// Testing
          height={["100%", "100%", "100%", "100%",]}
          width="80%"
          justifyContent="space between"
          alignContent="center"
        >
          {Object.values(projects).map((projects, ID) => {
            return (
              <Flex
                flexDirection={["column", "column", "column", "column",]}
                alignItems="center"
                justifyContent="center"
                key={ID}
                alignSelf="center"
                width="80%"
                // height="100%"
                // bg="green"
              >
                {/* Title */}
                <Text
                  color="blue"
                  fontSize={['3xl','3xl','5xl','5xl',]}
                  // bg="yellow"
                >
                  {projects.title}
                </Text>
                {/* Description */}
                <Text
                  color="lightBlue"
                  fontSize={["sm","sm","md","md",]}
                  mb="5"
                >
                  {projects.description}
                </Text>
                {/* Image */}
                <Box
                  // bg="gray"
                  boxSize='200px'
                  width="100vw"
                  align="center"
                  height={["50vh","50vh","100vh","100vh",]}
                >
                <Link href={projects.link} target="_blank">
                <Image
                  src={projects.image}
                  alt='Projects'
                  width={['80%','80%','80%','80%',]}
                  maxHeight="100%"
                  border="solid .5px white"
                />
                </Link>
              </Box>
              </Flex>
        );
          })}
      </Flex>
    </Flex>
    </>
  )
}