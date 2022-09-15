
// import ContactBackground from "../../Assets/Images/contact.jpg"

import { Flex, Image, Text, Box } from "@chakra-ui/react"
import RateCard from '../../Components/Ratecard/rateCard'

// Hook Form
import HookForm from "../../Components/HookForm/hookForm"


function Contact() {
  return (
    <>
      <Flex
        bg="white"
        h="100vh"
        w="100vw"
        position="relative"
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src="https://img.freepik.com/free-vector/purple-fluid-background-frame_53876-99020.jpg?w=1800&t=st=1662105523~exp=1662106123~hmac=9bab992927adef5a1f3c9623f8359cc21a8ffc9ebb5cf96b5e141819d131a655"
          boxSize="xl"
          objectFit="cover"
          h="100%"
          alt='svg image'
          w="100%"
        />
        <Flex
          // bg="green"
          flexDirection="column"
          position="absolute"
          justify="center"
          alignItems="center"
          h="100%"
          w="80%"
          pt="7vh"
        >
          <Text
            // bg="blue"
            w="100%"
            fontSize="4xl"
            color="white"
          >
            Contact Me
          </Text>
          {/* Form */}
          {/* <FormControl
            // bg="red"
            h="60%"
          >
            <Input
              color="white"
              placeholder="First Name"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Last Name"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Email"
              type='email'
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Phone Number"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Message"
              bg="black"
              opacity=".5"
              w="100%"
              h="60%"
              borderRadius="20px"
            />
          </FormControl> */}
          <Box p>
            <HookForm />
          </Box>
          <RateCard />
        </Flex>
      </Flex>
    </>
  )
}

export default Contact
