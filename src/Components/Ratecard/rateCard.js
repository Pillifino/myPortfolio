
import { useRef } from 'react'

import { Flex, Text, Button, Spacer } from '@chakra-ui/react'

import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

import { useInView } from "framer-motion"


function RateCard() {
  const ref = useRef(null)
  const isInView = useInView(ref,{ once: true })
  return (
    <div>
      <Flex
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatey(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        position="relative"
        top="15vh"
        zIndex="99"
        h="35vh"
        w="80vw"
        boxShadow='lg'
        borderRadius="40px"
        color="white"
        bg='white'
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text
          textAlign="center"
          pt="5vh"
          height="25vh"
          w="100%"
          h="50%"
          color="black"
          fontSize="3xl">
          Rate My Portfolio!
        </Text>
        {/* Rate Buttons */}
        <Flex
          // bg="green"
          w="100%"
          h="50%"
          justify="center"
          alignItems="center"
        >
          <Spacer />
          <Spacer />
          <Button
            // colorScheme='dark'
            bg="white"
            w="30%"
            h="60%"
            color="bgAccent"
            border="solid black 2px"
          >
            <AiFillLike size="2em" />
          </Button>
          <Spacer />
          <Button
            // colorScheme='blue'
            bg="bgAccent"
            w="30%"
            h="60%"
          >
            <AiOutlineLike size="2em" />
          </Button>
          <Spacer />
          <Spacer />
        </Flex>
      </Flex>
    </div>
  )
}

export default RateCard
