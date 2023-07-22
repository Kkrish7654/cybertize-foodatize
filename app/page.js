'use client'

import React from 'react'
import Login from '@/components/Login/Login'
import { AppProvider } from '@/context/AppContext'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Index = () => {

  const router = useRouter()

   // handle Login Cookies /
   const token = Cookies.get("token");
   useEffect(() => {
    

    if (token) {
      router.push("/home")
    }
  }, []);

  // End Login Cookies //

  return (
  
      <div className='min-h-screen relative'>
        <Login/>
      </div>
 
   
  )
}

export default Index