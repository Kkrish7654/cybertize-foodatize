import AccountDetailsCard from '@/components/Account/AccountDetailsCard'
import MyOrderCard from '@/components/Account/MyOrderCard'
import React from 'react'

const Index = () => {
  return (
    <>
    <div className='p-[20px] mt-12'>
      <h4 className='font-bold mb-2'>My Account</h4>
      <div className='flex flex-col gap-2'>
        <div>
          <MyOrderCard/>
        </div>
        <div>
          <AccountDetailsCard/>
        </div>
      </div>
    </div>
       <img className='absolute bottom-0 right-0' src='./image/spoon.png' alt='spoon'/>
       </>
  )
}

export default Index