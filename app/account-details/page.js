import React from 'react'
import Link from 'next/link'
import UserDetails from '@/components/Account/UserDetails'
import ButtonSuccess from '@/components/Buttons/ButtonSuccess'

const Index = () => {
  return (
    <>
    <div className='p-[20px] mt-12'>
    <div className='flex items-center justify-between mb-2'>
      <h4 className='font-bold mb-2'>My Account</h4>
      <Link className="text-[#5C5C5C] underline underline-offset-1" href="">Edit</Link>
    </div>
    <div className='flex flex-col gap-2'>
    <UserDetails title="Name" text="Mithun Das"/>
    <UserDetails title="Phone" text="+91 9223365588"/>
     <UserDetails title="Email" text="mithun@thecybertize.com"/>
    </div>

    <div className='mt-4'>
      <ButtonSuccess text="Update Details" link=""/>
    </div>
  </div>
       <img className='absolute bottom-0 right-0' src='./image/spoon.png' alt='spoon'/>
    </>
  )
}

export default Index