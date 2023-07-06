import BillDetails from '@/components/Checkout/BillDetails'
import PayCard from '@/components/Checkout/PayCard'
import React from 'react'

const Index = () => {
  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
      <div><h4 className='font-bold'>Checkout</h4></div>
      <div>
          <p className='font-semibold text-[#666666] mb-3 ml-4'>Bill Details</p>
          <BillDetails/>
      </div>

      <div className='mt-6'>
        <p className='font-semibold text-[#666666] mb-3 ml-4'>Select Payment Method</p>
        <div className='flex flex-col gap-4'>
          <PayCard title='Pay on Delivery' text='Cash / PhonePe / Gpay / UPI'/>
          <PayCard title='Pay now' text='Online Payment via Card / UPI / Gpay / PhonePe'/>
        </div>
      </div>
    </div>
  )
}

export default Index