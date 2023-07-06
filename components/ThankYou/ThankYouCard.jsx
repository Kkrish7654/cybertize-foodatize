import React from 'react'

// using in thank you page
const ThankYouCard = () => {
  return (
    <div className='flex flex-col items-center gap-4 bg-white rounded-xl p-4'>
      <div className='text-center'>
        <h1 className='font-bold text-[25px] text-[#3F3F3F]'>Thank you</h1>
        <h4 className='font-bold text-[16px] text-black'>Your order has been placed</h4>
      </div>
     <hr className='bg-black h-[1px] w-[100px]'/>
      <div className='text-center'>
        <p>We will confirm your order soon, till then stay hungry stay foolish!</p>
      </div>
    </div>
  )
}

export default ThankYouCard