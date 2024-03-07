import React from 'react'
import Footer from '../components/common/Footer'
import Workout from '../components/core/home/Workout'
import Motivation from '../components/core/home/Motivation'
import Founder from '../components/core/about/Founder'
import UpperPart from '../components/core/home/UpperPart'
const Home = () => {
  return (
    <div className='relative'>
        <UpperPart/>
        <Workout/>
        <Founder/>
        <Motivation/>  
        <Footer/> 
        
    </div>
  )
}

export default Home