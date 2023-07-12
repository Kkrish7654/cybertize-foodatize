'use client'

import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <nav className='py-[16px] px-[18px] flex gap-2 items-center justify-between shadow-lg shadow-[#ebebeb] bg-white'>
      <div className='flex items-center gap-2'>
      <div>
        <img onClick={() => window.history.back()} src="./image/backk.png" alt="go back" />
      </div>
      
      <Link href="/home">
      <div className='flex gap-2 items-end'>
        <div>
          <img className='w-[35px] h-[33px]' src="./image/delivery-man.png" alt="logo"/>
        </div>
        <div className=''>
          <img src="./image/Foodatize.png" alt="logo-title" />
          <p className='text-[10px] tracking-tight'>by EP Group</p>
        </div>
      </div>
      </Link>
      </div>
     
     
          <div className='flex gap-2'>
          <div className='flex flex-col gap-1 items-center'>
            <img src='./image/whatsapp.png' alt='whatsapp'/>
            <span className='text-xs'>Support</span>
          </div>
          <Link href="/my-orders">
          <div className='flex flex-col gap-1 items-center'>
            
            <img src='./image/user.png' alt='whatsapp'/>
            <span className='text-xs'>Account</span>
          </div>
          </Link>

        </div>
  
     
    </nav>
  )
}

export default Header