'use client'

import Link from 'next/link'
import React from 'react'


const Footer = () => {


  return (  
      <div className='fixed bottom-0 w-full h-[80px] mt-12 flex items-center justify-between p-4 bg-[#23AF00] text-white'>
        <div>
          <h4 className='text-[16px] font-semibold'>1 Item | Rs.340</h4>
          <p className='text-xs'>Extra charges may apply</p>
        </div>
        <div>
          <Link className='text-[18px] font-semibold' href="/cart" >View Cart</Link>
        </div>
      </div>
  )
}

export default Footer