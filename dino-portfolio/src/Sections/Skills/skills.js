

// Chakra
import { Flex } from '@chakra-ui/react'

import SkillCard from '../../Components/Skillcard/skillcard'

function Skills() {
  return (
    <div>
      <Flex
        // bg="green"
        width="100vw"
        height="50vh"
        justify="center"
      >
          <SkillCard />
      </Flex>
    </div>
  )
}

export default Skills
