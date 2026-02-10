import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { color } from 'framer-motion';

function ContactUs() {
  const [queries,setQueries] =useState(true);
  const [bgColor, setBgColor] = useState("#0D74FF");
  const handleClick = ()=>{
    // setQueries(true);
    if(queries)
    setBgColor("red");
  
  
  };


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fouyhde', 'template_3ks8p0n', form.current, 'tw3rhVM0QIFKj8LhX')
      .then((result) => {
          console.log(result.text);
          // e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          // m={{ sm: 4, md: 16, lg: 10 }}
          m={{ sm: 3, md: 10, lg: 7}}
          p={{ sm: 5, md: 5, lg: 8 }}
          // p={{ sm: 5, md: 5, lg: 16 }}
          >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}>
                        +91-8697308693
                      </Button>
                      <Button
                      
                      onClick={()=>handleClick()}
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}>
                        Send me a quaries
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}>
                        Kolkata, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form ref={form}>
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                          />
                          <Input type="text" size="md"  name="user_name" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                          />
                          <Input type="text" size="md" name="user_email"  />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea name="message"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          style={{background: bgColor}}
                          variant="solid"
                          // bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={sendEmail}
                          >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactUs