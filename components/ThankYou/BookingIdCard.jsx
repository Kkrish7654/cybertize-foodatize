import React from 'react'

const BookingIdCard = ({bookingID}) => {
  return (
    <div className='flex flex-col gap-2 bg-white rounded-xl p-4'>
      <p className='text-sm font-bold text-[#515151] '>Booking ID</p>
      <h2 className='font-bold text-black text-xl'>{bookingID}</h2>
    </div>
  )
}

export default BookingIdCard