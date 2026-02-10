import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  InputGroup,
  InputRightElement,
  HStack,
  VStack
} from '@chakra-ui/react';
import axios from 'axios';
// import { useToast } from '@chakra-ui/react'

const LogIn = () => {

  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const navigate = useNavigate();
  const toast= useToast();
  const [show,setShow]= useState(false);
  const handleClick = ()=>{setShow(!show)}; //to show or hide password



  const submitHandler = async()=>{
    try {
      axios.post("https://sudip-chanda2002.onrender.com/api/user/login",{
        data:{
          email,
          password
        }
      },{withCredentials:true}).then(response=>{
        if(response.status === 201){
          toast({
            title: 'login succesfull',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          const setCookie = (name, value, days) => {
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + days);
            const expires = `expires=${expiryDate.toUTCString()}`;
            document.cookie = `${name}=${value}; ${expires}; path=/`;
          };
        
          // Example usage
            const handleButtonClick = () => {
              // console.log(response)
            const token=response.data.token;
            // console.log(token)
            setCookie('HareKrishna', token, 7);
          };
          handleButtonClick();
          navigate("/aboutUser");
        }
        else{
          console.log("user not authorized");
        }
      })
    } catch (error) {
      toast({
        title: 'login failed',
        // description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }
  const bg_image="images/workout2.jpg";
  return (
    <div style={{backgroundImage:'url'+'('+bg_image+')',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}

    >
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'} >
        <Heading fontSize={'4xl'} color={"red.400"}>Log in to your account</Heading>
        <Text fontSize={'2xl'} color={'red.600'}>to enjoy all of our cool services</Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        opacity={0.87}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input type={show?"text":"password"}  onChange={(e)=>{setPassword(e.target.value)}} />
            <InputRightElement width={"4.5rem"}>
             <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>{show?"hide":"Show"}</Button>
             </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              
              <Link href='/signUp' color={'blue.400'}>Not have an account?</Link>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}
              onClick={submitHandler}
              >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </div>
  

  )
}

export default LogIn