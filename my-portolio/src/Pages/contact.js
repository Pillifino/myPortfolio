import { Flex, Text, Link } from '@chakra-ui/react'

// Icons
import { Icon } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'


import React from 'react'

export default function Contact() {
  return (
    <Flex
      bg="bg"
      h="90vh"
      width="100vw"
      alignItems="end"
    >
      <Flex
        height={["100%", "100%", "80%", "80%",]}
        width="100vw"
        bg="bgAccent"
        borderTop={["none", "none", "solid white .5px", "solid white .5px",]}
        justify="center"
        alignContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex
          height="50%"
          width="100%"
          // bg="red"
          flexDirection="column"
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Text
            fontSize="30"
            color="blue"
          // bg="yellow"
          >
            Contact Me
          </Text>
          <Text
            fontSize="22"
            color="lightBlue"
          // bg="yellow"
          >
            dinodizon073100@gmail.com
          </Text>
          <Text
            fontSize="22"
            color="lightBlue"
          // bg="yellow"
          >
            253 282 3180
          </Text>
        </Flex>
        <Flex
          height="50%"
          width="100%"
          // bg="green"
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {/* Icons */}
          <Flex
            alignContent="center"
            Justify="center"
          >
            <Link href="https://github.com/Pillifino" target="_blank">
              <Icon as={FaGithub} boxSize="5em" color="#92A4B0" _hover={{ color: "blue" }} transition=".3s" />
            </Link>
          </Flex>
          <Flex>
            <Link href='https://www.linkedin.com/in/berrnarddinodizon/' target="_blank">
              <Icon as={FaLinkedin} boxSize="5em" color="#92A4B0" _hover={{ color: "blue" }} transition=".3s" />
            </Link>
          </Flex>
          <Flex>
            <Link href='https://twitter.com/Devsea_Dino' target="_blank">
              <Icon as={FaTwitter} boxSize="5em" transform={{boxSize: "6em"}} color="#92A4B0" _hover={{ color: "blue" }} transition=".3s" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
