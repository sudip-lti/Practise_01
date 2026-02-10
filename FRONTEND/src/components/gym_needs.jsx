import React, { useState } from 'react'
import { Card, CardBody, HStack,Heading,Stack,Text,Image, Center, } from '@chakra-ui/react'
import Data from './gymNeeds_api'
import "../components/style.css"
const Gym_needs = () => {

  
  // const MouseOver = (e)=>{
  //  e.target.style.background = 'orange';
  // }
  // const MouseOut = (e)=>{
  //  e.target.style.bg = 'white';
  // }
  

  return (
    //using chakra ui
    <>
    <Center>
    <HStack ml="5"   spacing={"35"}>
    {Data.map((data)=>{
      return (<Card  className='cardh' maxW='sm'>
      <CardBody>
        <Image
          src={data.Image}
          
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{data.heading}</Heading>
          <Text>
            {data.info}
          </Text>
        </Stack>
      </CardBody>
      
    
    </Card>
    )
    })}
    </HStack>
    </Center>
    </>

  )
}

export default Gym_needs