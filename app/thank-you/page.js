import BookingIdCard from '@/components/ThankYou/BookingIdCard'
import CallCard from '@/components/ThankYou/CallCard'
import ThankYouCard from '@/components/ThankYou/ThankYouCard'
import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div className='px-[20px] py-[28px] flex flex-col gap-4'>
      <div className='flex justify-center items-center mt-4 mb-4'>
        <img src='./image/healthy-eating.png' alt='healthy eating'/>
      </div>

      <div className='flex flex-col gap-4'>
        <ThankYouCard/>

        <BookingIdCard bookingID="#FDT00198989"/>

        <CallCard/>
      </div>

      <div className='text-center mt-8'>
        <Link className='text-center text-[18px] underline
         text-black font-semibold underline-offset-2' href="/home">Back to home</Link>
      </div>
    </div>
  )
}

export default Index