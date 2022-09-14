
import { useRef } from 'react'

import { Flex, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useInView } from "framer-motion"


function SkillCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div>
      <Flex ref={ref}
        style={{
          transform: isInView ? "none" : "translatey(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        position="relative"
        bottom="20vh"
        zIndex="99"
        h="100%"
        w="80vw"
        boxShadow='lg'
        borderRadius="40px"
        color="white"
        bg='bgAccent'
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text
          textAlign="center"
          pt="5vh"
          height="25vh"
          w="100%"
          fontSize="2xl">
          Skills
        </Text>
        <Flex
          // bg="white"
          w="100%"
          h="60%"
          justify="space-evenly"
          align="center"
        >
          <Flex
          // bg="green"
          flexDirection="column"
          h="100%"
          justify="space-evenly"
          >
            <CircularProgress size="90px" value={90} color='blue.300'>
              <CircularProgressLabel>90%</CircularProgressLabel>
            </CircularProgress>
            <Text
            // bg="blue"
            h="100%"
            justify="center"
            align="center"
            >
              Front End
            </Text>
          </Flex>
          <Flex
          // bg="green"
          flexDirection="column"
          h="100%"
          justify="space-evenly"
          >
            <CircularProgress size="90px" value={75} color='blue.300'>
              <CircularProgressLabel>75%</CircularProgressLabel>
            </CircularProgress>
            <Text
            // bg="blue"
            h="100%"
            justify="center"
            align="center"
            >
              Back End
            </Text>
          </Flex>
          <Flex
          // bg="green"
          flexDirection="column"
          h="100%"
          justify="space-evenly"
          >
            <CircularProgress size="90px" value={95} color='blue.300'>
              <CircularProgressLabel>95%</CircularProgressLabel>
            </CircularProgress>
            <Text
            // bg="blue"
            h="100%"
            justify="center"
            align="center"
            >
              UX/UI
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default SkillCard
