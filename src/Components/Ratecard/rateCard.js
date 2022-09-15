import React from 'react'

import { useRef } from 'react'

import { Flex, Text, Button, Spacer, ModalContent, Modal, ModalOverlay, ModalCloseButton, useDisclosure, ModalHeader } from '@chakra-ui/react'

import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

import { useInView } from "framer-motion"


function RateCard() {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  // In View
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
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
            onClick={() => handleSizeClick("xl")}
            bg="white"
            w="30%"
            h="60%"
            color="bgAccent"
            border="solid black 2px"
          >
            <AiFillLike size="2em" />
          </Button>
          {/* Modal */}
          <Modal isOpen={isOpen} size="xl" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                alignSelf="center"
              > I knew you'd say that!</ModalHeader>
              <ModalCloseButton />
            </ModalContent>
          </Modal>
          <Spacer />
          <Button
            onClick={() => handleSizeClick("xl")}
            bg="bgAccent"
            w="30%"
            h="60%"
          >
            {/* Modal */}
            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  alignSelf="center"
                > I knew you'd say that!</ModalHeader>
                <ModalCloseButton />
              </ModalContent>
            </Modal>
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
