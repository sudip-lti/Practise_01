import React from 'react'
import "../App.css"
import { Image,Box, Flex, Divider} from '@chakra-ui/react'
const About = () => {
  return (
  <>
    <span className='about'>WHY EXCELLENCE FITNESS?</span>
  <div className='about-sec'>
  <Box  w='820px' height='380px'>
    
    <Flex direction="row" alignItems={"center"} h={"60%"} width={"100%"} justifyContent={"center"}  >
    <Image  bg="black" ml={"4rem"} mr={"4rem"} boxSize='50px' src="https://img7.hkrtcdn.com/19552/bnr_1955146_o.png" alt='Muscle Building'/>
    <Image  bg="black" ml={"4rem"} mr={"4rem"} boxSize='50px' src="https://img5.hkrtcdn.com/19552/bnr_1955134_o.png" alt='Muscle Building'/>
    <Image bg="black" ml={"4rem"} mr={"4rem"} boxSize='50px' src="https://img9.hkrtcdn.com/19552/bnr_1955148_o.png" alt='Muscle Building'/>
    </Flex>
    <center><button>VIST HERE</button></center>
  
</Box>
  
  </div>
  </>
  )
}

export default About