import FoodCart from '@/components/Cart/FoodCart'
import Footer from '@/components/Footer/Footer'
import HomeScreen from '@/components/HomeScreen/HomeScreen'
import Login from '@/components/Login/Login'
import Otp from '@/components/Otp/Otp'
import SignupDetails from '@/components/SignupDetails/SignupDetails'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen relative'>
      {/* <Login/> */}
      {/* <Otp/> */}
      {/* <SignupDetails/> */}
      {/* <HomeScreen/> */}
      <FoodCart/>
      <Footer/>
    </div>
  )
}

export default Home