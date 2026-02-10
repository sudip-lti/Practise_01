import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "../components/style.css"
const Header = () => {
  const navigate = useNavigate();
  const[showMap,setShowMap] = useState(false)
  const Map = ()=>{
    return(
    <>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.869286216254!2d88.41065667368265!3d22.471545836669556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273acd48f3d1f%3A0xd6e95f17cf9e4c2!2sExcellence%20Fitness!5e0!3m2!1sen!2sin!4v1687416513981!5m2!1sen!2sin" style={{height: 250,width:250}}  referrerpolicy="no-referrer-when-downgrade"></iframe>
    <Button onClick={()=>setShowMap(false)}>CLOSE</Button>
      </>
    )
  }




  return (
    <div className="header-bg">  
        <div className="heading1">
            Excellence Fitness
        </div>
        <div className="heading2">
            {/* <form method="post" action="homeScreen"> */}
             {/* <a href ="#home" >HOME</a> */}
             <a onClick={()=>setShowMap(true)}>FIND OUR GYM</a>
             {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.869286216254!2d88.41065667368265!3d22.471545836669556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273acd48f3d1f%3A0xd6e95f17cf9e4c2!2sExcellence%20Fitness!5e0!3m2!1sen!2sin!4v1687416513981!5m2!1sen!2sin"   style={{height:450,width:600}} referrerpolicy="no-referrer-when-downgrade"></iframe> */}

             {showMap && <Map></Map>}
             <a onClick={()=>navigate("/contactUs")}>CONTACT US</a>
             <button name="button" onClick={()=>{navigate("/logIn")}} value="userLogIn"> LOG IN</button> 
            {/* </form>   */}
         </div>
    </div>
  )
}

export default Header