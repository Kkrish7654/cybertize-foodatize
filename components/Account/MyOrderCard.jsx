import React from 'react'

const MyOrderCard = () => {
  return (
    <div className='flex items-center justify-between px-2 bg-white rounded-xl p-6'>
      <div>
        <p className='text-sm font-semibold text-[#616C71]'>My Orders</p>
        <p className='text-sm font-semibold text-[#E9923E]'>Current & Completed Orders</p>
      </div>

      <div>
        <img src="./image/cutlery1.png" alt="icon" />
      </div>
    </div>
  )
}

export default MyOrderCard