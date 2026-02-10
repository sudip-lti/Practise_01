import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { Button } from '@chakra-ui/react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBFile
}
from 'mdb-react-ui-kit';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
function SignUp() {

  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[confirm,setConfirm] = useState();
  const[mobile,setMobile] = useState();
  const[pic ,setPic] = useState();
  const toast= useToast();
  const[loading,setLoading] = useState(false);

  
  const navigate = useNavigate(); 
  const submitHandler = async()=>{

    if(!name||!email||!password||!confirm||!mobile){
      toast({
        title: 'Please enter the fields!',
        // description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
}
if(password!=confirm){
  toast({
      title: 'password does not match',
      // description: "We've created your account for you.",
      status: 'warning',
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  }
  try {
    const su = await fetch("https://sudip-chanda2002.onrender.com/api/user",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name,email,password,mobile,pic
      })
    })
    toast({
      title: 'registration succesfull',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    navigate("/logIn")
    const data = await su.json();
    localStorage.setItem("userInfo",JSON.stringify(data));
  } catch (error) {
    console.log(error);
    toast({
      title: 'something went wrong',
      status:"error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  }
  }
  const postDetails=async(pic)=>{
    if(pic===undefined){
        toast({
            title:"Please Select an Image",
            status:"warning",
            duration:2500,
            isClosable:true,
            position:"bottom",
        });
        // setLoading(false)
        return;
    }
    if(pic.type==="image/jpeg" || pic.type==="image/png"){
      setLoading(true);
      const data=new FormData();
      data.append("file",pic);
      data.append("upload_preset","GYM APP");
      data.append("cloud_name","dk8gskv6u");
      try{
        const response= await fetch("https://api.cloudinary.com/v1_1/dk8gskv6u/image/upload",{
          method:"post",
          body:data,
         });
      // console.log(response);
      const info = await response.json();
      // console.log(info.url.toString());
    setPic(info.url.toString());
    setLoading(false);

      
    }
    catch(err){
      console.log(err);
    }
  }
  else{
    toast({
      title:pic.type +" is not supported",
      status:"warning",
      duration:2500,
      isClosable:true,
      position:"bottom",
    });
  }
}
  return (
    <MDBContainer fluid className='hello'>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6'   className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} id='form1' type='text' className='w-100'/>
              {/* <div><h3>Name:{name}</h3></div> */}
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' onChange={(e)=>{setEmail(e.target.value)}} id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size='lg' />
                <MDBInput label='Mobile Number' onChange={(e)=>{setMobile(e.target.value)}} id='form2' type='number'/>
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' onChange={(e)=>{setPassword(e.target.value)}}id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Confirm Password' onChange={(e)=>{setConfirm(e.target.value)}} id='form4' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="image me-3" size='lg' />
                <MDBFile onChange={(e)=>postDetails(e.target.files[0])}  />
              </div>

              

              <Button isLoading={loading} onClick={()=>submitHandler()}>Register</Button>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage  style={{borderRadius: '5px'}} src='../images/body3.jpg' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;
