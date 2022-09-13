
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Link, Icon, Spacer, Flex, Text } from '@chakra-ui/react'
function Footer() {
  return (
    <div>
      <Flex
        // bg="red"
        h="60vh"
        w="80vw"
        justify="flex-end"
        alignItems="flex-end"
        flexDirection="column"
        pb="10vh"
      >
        <Flex
        // bg="green"
        h="5vh"
        w="15vw"
        >
          <Link href="https://github.com/Pillifino" target="_blank">
            <Icon as={FaGithub} boxSize="1.5em" color="White" _hover={{ boxSize: "1.8em" }} transition=".3s" />
          </Link>
          <Spacer />
          <Link href='https://www.linkedin.com/in/berrnarddinodizon/' target="_blank">
            <Icon as={FaLinkedin} boxSize="1.5em" color="White" _hover={{ boxSize: "1.8em" }} transition=".3s" />
          </Link>
          <Spacer />
          <Link href='https://twitter.com/Devsea_Dino' target="_blank">
            <Icon as={FaTwitter} boxSize="1.5em" transform={{ boxSize: "6em" }} color="White" _hover={{ boxSize: "1.8em" }} transition=".3s" />
          </Link>
        </Flex>
        <Flex>
          <Text
          color="white"
          >Copy Right 2022 All Reserved</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default Footer
