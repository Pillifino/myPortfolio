import React from 'react';
// Icons
import { HamburgerIcon } from '@chakra-ui/icons';
// Menu
import { IconButton } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

// Flex
import { Flex, Container, Spacer, Text, Center } from '@chakra-ui/react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'


// Routing
import { Link } from 'react-router-dom';

export default function NavTabs() {
  return (
    <>
      {/* Desktop */}
      <Flex
        w="100vw"
        bg="bg"
        height="20vh"
        justify="center"
        display={['none', 'none', 'flex', 'flex']}
      // borderBottom="solid 2px white"
      >
        <Center>
          <Container w="50" mt="10" ml="5">
            <Text
              fontSize="60"
              bgClip='text'
              bgGradient='linear(to-l, lightBlue, blue )'
            // fontWeight="bold"
            >
              My Portfolio
            </Text>
          </Container>
        </Center>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Center>
          <Text fontSize="17px" color="lightBlue" fontWeight="bold">
            <Link to="/">About Me</Link>
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Text fontSize="17px" color="lightBlue" fontWeight="bold">
            <Link to="/portfolio">Portfolio</Link>
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Text fontSize="17px" color="lightBlue" fontWeight="bold">
            <Link to="/contact">Contact</Link>
          </Text>
        </Center>
        <Spacer />
        <Center>
          <a
            href="https://docs.google.com/document/d/19xUT6AwsZzYQk5hlu_MLfYr8GBda5V838qbV14bdfVE/edit?usp=sharing"
            target="_blank">
            <Text align="center" fontSize="17px" color="lightBlue" fontWeight="bold">
              Resume
            </Text>
          </a>
        </Center>
        <Spacer />
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>

      {/* Mobile */}
      <Flex
        w="100vw"
        bg="bg"
        height="10vh"
        justify="Space-between"
        align="center"
        display={['flex', 'flex', 'none', 'none']}
        borderBottom="solid .5px white"
      >
        {/* Title */}
        <Center>
          <Container w="100%">
            <Text fontSize="45" color="blue">
              My Portfolio
            </Text>
          </Container>
        </Center>
        {/* Menu */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon boxSize="2em" />}
            variant='none'
            display={["flex", "flex", "none", "none",]}
            color="blue"
            border="none"
            mr="3.5"
          />
          <MenuList
            bg="#2F3337"
          >
            <Link to="/">
              <MenuItem w="97vw" bg="#2F3337" color="blue">
                About Me
              </MenuItem>
            </Link>
            <Link to="/portfolio">
              <MenuItem w="97vw" bg="#2F3337" color="blue">
                Portfolio
              </MenuItem>
            </Link>
            <Link to="/contact">
              <MenuItem w="97vw" bg="#2F3337" color="blue">
                Contact
              </MenuItem>
            </Link>
            <a href='https://docs.google.com/document/d/19xUT6AwsZzYQk5hlu_MLfYr8GBda5V838qbV14bdfVE/edit?usp=sharing'
            target="_blank"
            >
              <MenuItem w="97vw" bg="#2F3337" color="blue">
                Resume
              </MenuItem>
            </a>
          </MenuList>
        </Menu>
        {/* <IconButton
          background="none"
          color="white"
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
        /> */}
      </Flex>
    </>
  );
}
