

// Components
import Footer from "../Footer/footer";
// Sections
import Home from "../../Sections/Home/home";
import Skills from "../../Sections/Skills/skills";
import Projects from "../../Sections/Projects/projects";
import Contact from "../../Sections/Contact/contact";

// Chakra
import { Flex } from "@chakra-ui/react";

// Smooth Scroll

function Container() {
  return (
    <>
        <section id="home"><Home /></section>
        <Flex
          bg="black"
          height={["350vh", "350vh", "300vh", "300vh",]}
          w="100vw"
          justify="center"
        >
          <Flex
            // bg="red"
            width="100vw"
            justify="flex-start"
            alignItems="center"
            flexDirection="column"
          >
            <section id="skills"><Skills /></section>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            {/* <div id="contact"><HookForm /></div> */}
            <Footer />
          </Flex>
        </Flex>
    </>
  );
}

export default Container;
