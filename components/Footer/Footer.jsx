import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full h-[80px] flex items-center justify-between p-4 bg-[#23AF00] text-white'>
        <div>
          <h4 className='text-lg font-semibold'>1 Item | Rs.340</h4>
          <p className='text-sm'>Extra charges may apply</p>
        </div>
        <div>
          <Link className='text-lg font-semibold' href="" >View Cart</Link>
        </div>
    </div>
  )
}

export default Footer