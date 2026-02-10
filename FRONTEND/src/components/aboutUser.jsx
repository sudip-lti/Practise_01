import { Button, Center, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useHref, useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
// import "./App.css"
const AboutUser = () => {
  const [userData, setUserData] = useState({});
  // const{name,email} = userData;
  // const toast = useToast();
  const[modal,setModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    verify();
  }, []);
  const redirectHome =()=>{
    navigate("/");
  }
const verify = async()=>{
  try{
    const getCookie = (name) => {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';');
  
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          const value = cookie.substring(name.length + 1);
          return decodeURIComponent(value);
        }
      }
  
    };
    const token = getCookie('HareKrishna');
    await axios.post("https://sudip-chanda2002.onrender.com/userInfo",{
            data:{ 
                token
             } 
             },
             {
                 withCredentials:true
             })
             .then(response=>{
                 if(response.status===201)
                 {
                  setUserData(response.data);
                 }
                })
  //   console.log("hesuuuuuuuuuuiii");
  //  axios.get("http://localhost:3000/userInfo",{withCredentials:true}).
  //  then(res=>{
  //   setUserData(res.data);
  //  }).catch(err=>console.log(err));

  // // setUserData(res);
  }
  catch(error){
    console.log(error);
  }
}

const handleRazorpay=(data)=>{
  const options ={
    key:import.meta.env.VITE_ID,
    amount:data.amount,
    currency:data.currency,
    name:"EXCELLENCE FITNESS",
    description:"Gym fees payment",
    order_id:data.id,
    handler: function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
      axios.post("https://sudip-chanda2002.onrender.com/api/user/verify",{response:response}).
    then(res=>{
    console.log(res);
      }).catch(err=>console.log(err));
    },


  }
  const rzp1 = new window.Razorpay(options);
  rzp1.open();

}
const handlePayment = async(amount)=>{
 const payAmount ={ amount:amount};
axios.post("https://sudip-chanda2002.onrender.com/api/user/orders",payAmount).
then(res=>{
  console.log(res);
  handleRazorpay(res.data.data);
}).catch(err=>console.log(err));

}

const handleLogout = async()=>{
  axios.get("https://sudip-chanda2002.onrender.com/logout",{withCredentials:true})
  .then(res=>navigate("/")).
  catch(err=>console.log(err));
}

const MonthlyModal =()=>{
  return(
    <div className='mainModal'>
          <MDBRow>
      <MDBCol sm='6'>
        <MDBCard background='secondary'>
          <MDBCardBody>
            <MDBCardTitle>Monthly Package</MDBCardTitle>
            <MDBCardText>
            Your admission fees required.Proper guide will be given.
              <h3>Rs 1500/-</h3>
            </MDBCardText>
            <MDBRow>
            <MDBBtn className='my-3' rippleColor='dark' color='light' onClick={()=>handlePayment(1500)}>PAY</MDBBtn>
            <MDBBtn  rippleColor='dark' color='light' onClick={()=>setModal(false)}>CLOSE</MDBBtn>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard background='info'>
          <MDBCardBody>
            <MDBCardTitle>4-Months Package</MDBCardTitle>
            <MDBCardText>
              No admission fees required.Proper guide will be given.<br></br>
              <h3>Rs 3400/-</h3>
            </MDBCardText>
            <MDBRow>
            <MDBBtn   className='my-3' rippleColor='dark' color='light' onClick={()=>handlePayment(3400)}>PAY</MDBBtn>
            <MDBBtn  rippleColor='dark' color='light' onClick={()=>setModal(false)}>CLOSE</MDBBtn>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

</div>
  )

}

  return (
    <div className='userBody'>
      <div className="main-header">
        <div className="main-header2"><h1 >WELCOME TO EXCELLENCE FITNESS</h1></div>
      <div className="main-header3"><span className='backHome' onClick={()=>redirectHome() }>HOME</span>
      <Button className='logOut' onClick={()=>handleLogout()}>LOG OUT</Button>
      <div className='avtar'>
      {/* <AvatarGroup > */}
         <Avatar bg='teal.500'  src={userData.pic}/>
      {/* </AvatarGroup> */}
      </div>
      </div>
      </div>
      <div className="user-mainInfo">
        <Center><Avatar size='2xl' name='User' src={userData.pic} /></Center>
        <div className="name">Name: {userData.name}</div>
        <div className="email">Email: {userData.email}</div>
        <div className="mobile">Mobile Number: {userData.mobile}</div>
        <Button className='payNow' onClick={()=>setModal(true)}>PAY YOUR FEES</Button>
        {modal && <MonthlyModal ></MonthlyModal>}
        {/* <div className="email">Email: {userData.email}</div> */}
      </div>
      </div>
  )
}

export default AboutUser
// login page -not have a acctount create
