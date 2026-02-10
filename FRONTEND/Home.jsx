import React from 'react'
import Header from "./src/components/header"
import Mid from './src/components/mid'
import About from './src/components/About'
import Gym_needs from './src/components/gym_needs'
import Footer from './src/components/footer'


const Home = () => {
  return (
    <div>
  <Header ></Header>
  <Mid></Mid>
  <About></About>
  <Gym_needs></Gym_needs>
  <Footer></Footer>



    </div>
  )
}

export default Home