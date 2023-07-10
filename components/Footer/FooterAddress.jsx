'use client'

import Link from 'next/link'
import React from 'react'


const FooterAddres = () => {

  return (  
      <div className='fixed bottom-0 w-full h-[80px] mt-12 flex items-center justify-between p-4 bg-[#23AF00] text-white'>
        <div className='w-full'>
          <h4 className='text-[16px] font-semibold'>1 Item | Rs.340</h4>
          <p className='text-xs'>Extra charges may apply</p>
        </div>
        <div className='text-left pl-8 ml-12'>
        <Link className='text-[17px] font-semibold' href="/address-select">
          <span className="whitespace-nowrap">Proceed to</span> <br className="hidden" /><span className="whitespace-nowrap">Checkout</span>
        </Link>
        </div>
      </div>
  )
}

export default FooterAddres