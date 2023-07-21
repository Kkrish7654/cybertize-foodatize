'use client'

import React from 'react'
import Login from '@/components/Login/Login'
import { AppProvider } from '@/context/AppContext'

const Index = () => {
  return (
  
      <div className='min-h-screen relative'>
        <Login/>
      </div>
 
   
  )
}

export default Index