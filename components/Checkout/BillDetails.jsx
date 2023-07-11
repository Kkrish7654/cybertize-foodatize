import React from 'react'

const BillDetails = () => {
  return (
    <div className='w-full h-auto bg-white rounded-2xl p-4 flex flex-col gap-8'>
      <div className='flex items-center justify-between gap-2'>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>Item Total</p>
        <p className='font-semibold underline underline-offset-2'>Delivery Fee (3.2 Km)</p>
        <p className='font-semibold'>GST (18%)</p>
      </div>

      <div className='flex flex-col gap-2 font-semibold'>
        {/* for item total */}
        <p>Rs.40</p>

        {/* for delivery fee */}
        <p>Rs.439</p>

        {/*  for GST */}
        <p>Rs.37.94</p>
      </div>
      </div>

      <hr className='h-[1px] bg-slate-600' />

      <div className='flex items-center justify-between'>
        <p className='font-semibold'>To Pay</p>
        <p className='font-semibold'>Rs.517</p>
      </div>
    </div>
   

    
  )
}

export default BillDetails