"use client"

import React, { useState } from 'react'
import OTPInput from 'react-otp-input';
import ButtonSuccess from '../Buttons/ButtonSuccess';
import Link from 'next/link';
import OtpInputs from './OtpInput';

const Otp = () => {

  const [otp, setOtp] = useState('');

  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-6'>
      <div>
        <h1 className='font-bold text-black text-[24px]'>OTP</h1>
        <h4 className='text-[#4A4A4A] text-[18px] font-medium tracking-wide'>Enter the OTP we’ve sent</h4>
      </div>

      <form className='flex flex-col gap-4'>
        <OtpInputs/>
        
        <Link className='text-sm underline' href="">Resend OTP</Link>
      
      
      </form>
      <Link href="/signup-details" >
        <button className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] `}>   
            Continue   
        </button>
      </Link>
    </div>
  )
}

export default Otp