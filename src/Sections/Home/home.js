
// Nav
import Nav from "../../Components/Nav/nav";

// Image
import { Flex, Image, Text } from '@chakra-ui/react'
// import Background from "../../Assets/Images/background.jpg";

function Home() {
  return (
    <>
      <Nav />
      <Flex
        width="100vw"
        height="120vh"
        position="relative"
      >
        <Image
          src="https://img.freepik.com/free-vector/artificial-intelligence-robots-cyborg-with-infinity-symbol_107791-4668.jpg?w=2000&t=st=1662105252~exp=1662105852~hmac=e164214905de97f4e5ea1c5a2f03a7fc1a3a52fbbf4773b8e4819308cd784635"
          boxSize="xl"
          objectFit="cover"
          h="100%"
          alt='svg image'
          w="100%"
          />

        {/* <AspectRatio w="null" ratio={4 / 3}>
          <Image src={Background} alt='background' objectFit='cover' />
        </AspectRatio> */}
        <Text
          bg="rgba(0,0,0,0.50)"
          border="solid white .8px"
          color="white"
          fontSize="5xl"
          textAlign="center"
          position="absolute"
          top="0"
          bottom="60vh"
          left="0"
          right="0"
          height="fit-content"
          width="fit-content"
          margin="auto"
        >Hello! I'm Dino</Text>
        <Text
          bg="rgba(105,105,105,0.70)"
          border="solid white .8px"
          color="white"
          fontSize="md"
          textAlign="center"
          position="absolute"
          top="0"
          bottom="40vh"
          left="0"
          right="0"
          height="fit-content"
          width="fit-content"
          margin="auto"
        >MERN Stack Engineer</Text>
      </Flex>
    </>
  );
}

export default Home;
