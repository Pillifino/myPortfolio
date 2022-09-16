import { Flex, Heading, Spacer, Text, Icon, IconButton, Link, color } from '@chakra-ui/react'

// Icons stuff
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'


function Nav() {

  return (
    <div>
      <Flex
        bg="Black"
        w="100%"
        h="12vh"
        position="fixed"
        justify="space-evenly"
        pl={["0", "0", "10", "10"]}
        pr={["0", "0", "10", "10"]}
        zIndex="100"
        display={["none", "flex", "flex", "flex"]}
      >
        {/* Logo & Sections */}
        <Flex
          // bg="red"
          h="100%"
          w="65%"
          alignItems="center"
        >
          <Heading
            color="white"
          >
            My Portfolio
          </Heading>
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            <Link href='#home' style={{ textDecoration: "none" }} _hover={{fontSize:"1.3em"}} transition=".5s">
              Home
            </Link>
          </Text>
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            <Link href='#skills' style={{ textDecoration: "none" }} _hover={{fontSize:"1.3em"}} transition=".5s">
              Skills
            </Link>
          </Text>
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            <Link href='#projects' style={{ textDecoration: "none" }} _hover={{fontSize:"1.3em"}} transition=".5s">
              Projects
            </Link>
          </Text>
        </Flex>
        {/* Contact */}
        <Flex
          // bg="blue"
          h="100%"
          w="35%"
          alignItems="center"
          pt="2"
          pl="20"
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
          <Spacer />
          <Link
            href='#contact'
            border="solid white 1px"
            h="75%"
            w="50%"
            pt="1.5vh"
            textAlign="center"
            _hover={{bg:"white", color:"black"}} 
            transition=".5s"
            color="white"
          >
            Let's Connect
          </Link>
        </Flex>
      </Flex>
      {/* Mobile */}
      <Flex
        bg="Black"
        w="100%"
        h="12vh"
        position="fixed"
        justify="space-between"
        alignItems="center"
        pl={["5", "5", "0", "0"]}
        pr={["5", "5", "0", "0"]}
        zIndex="100"
        display={["flex", "flex", "flex", "none"]}
      >
        <Heading
          color="white"
        >
          My Portfolio
        </Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<AiOutlineMenu size="2em" />}
            variant='none'
            border="none"
            color="white"
          // color="white"
          />
          <MenuList>
            <Link href='#home' style={{ textDecoration: "none" }}>
              <MenuItem>
                Home
              </MenuItem>
            </Link>
            <Link href='#skills' style={{ textDecoration: "none" }}>
              <MenuItem>
                Skills
              </MenuItem>
            </Link>
            <Link href='#projects' style={{ textDecoration: "none" }}>
              <MenuItem>
                Projects
              </MenuItem>
            </Link>
            <Link href='#contact' style={{ textDecoration: "none" }}>
              <MenuItem>
                Contact Me
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </div>
  )
}

export default Nav
