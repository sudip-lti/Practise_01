import { useState } from 'react'
import './App.css'
import Home from '../Home'
import {Route,Routes} from "react-router-dom"
import SignUp from './components/signUp'
import AboutUsers from './components/aboutUser'
import LogIn from './components/LogIn'
import ContactUs from './components/contactUs'



function App() {
  return (
 <div className="main">
  
  <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/signUp' element={<SignUp></SignUp>}></Route>
  <Route path='/logIn' element={<LogIn></LogIn>}></Route>
  <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
  <Route path='/aboutUser' element={<AboutUsers></AboutUsers>}></Route>
  </Routes>
 </div>
  
  )
}

export default App
