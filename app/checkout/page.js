import BillDetails from '@/components/Checkout/BillDetails'
import React from 'react'

const Index = () => {
  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
      <div><h4 className='font-bold'>Checkout</h4></div>
      <div>
          <p className='font-semibold text-[#666666] mb-3'>Bill Details</p>
          <BillDetails/>
      </div>
    </div>
  )
}

export default Index