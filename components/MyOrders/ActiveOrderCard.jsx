import Link from 'next/link'
import React from 'react'

const ActiveOrderCard = ({bookingID, items, amount, customStyle}) => {
  return (
    <div className={`w-full h-auto bg-white rounded-2xl p-4 flex flex-col gap-4 ${customStyle}`}>
    <div className='flex items-center justify-between gap-2'>
    <div className='flex flex-col gap-2'>
      <p className='font-semibold'>Booking Id</p>
      <p className='font-semibold'>Items</p>
      <p className='font-semibold'>Amount</p>
    </div>

    <div className='flex flex-col gap-2 font-semibold'>
      {/* for booking id */}
      <p>{bookingID}</p>

      {/* number of items */}
      <p>{items} items</p>

      {/*  for amount */}
      <p>Rs. {amount}</p>
    </div>
   
    </div>
    <div className='text-center'>
      <Link className='font-semibold underline underline-offset-1' href="booking-details">View details</Link>
    </div>
  </div>
 
  )
}

export default ActiveOrderCard