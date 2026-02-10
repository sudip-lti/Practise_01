import React, { useState } from 'react'
import "../App.css"
// import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SignUp from './signUp';
const Mid = () => {
  const navigate = useNavigate();
  const [text,setText] = useState("LET'S GET STARTED");
  const mouseEnter = ()=>{
    setText("SIGN UP");
   }
    const mouseLeave = ()=>{
      setText("LET'S GET STARTED")
    }
  return (
    <div className="mid">
      <div className="midP-container">
   <p className="mid-head1">PUSH PASS</p>
   <p className='mid-head2'>YOUR LIMITS</p>
   <p className='mid-head3' >BE A CHAMPION</p>
   
   <button className='mid-head4' onClick={()=>{navigate("/signUp")}} onMouseEnter={()=>mouseEnter()} onMouseLeave={()=>mouseLeave()}>{text}</button>
   </div>
  
  </div>
  )
}

export default Mid