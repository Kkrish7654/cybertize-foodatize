import React from 'react'
import InputText from '../Buttons/InputText'
import ButtonSuccess from '../Buttons/ButtonSuccess'

const Login = () => {
  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-6'>
      <div>
        <h1 className='font-bold text-black text-[24px]'>Login / Signup</h1>
        <h4 className='text-[#4A4A4A] text-[18px] font-medium tracking-wide'>Continue with Mobile Number</h4>
      </div>

      <form action="" className='flex flex-col gap-1'>
        <h4 className='text-[#4A4A4A] text-[18px] font-medium tracking-wide'>Enter 10 digit mobile number</h4>
        <InputText/>
        <ButtonSuccess text="Continue" customStyle="mt-6" link="/otp"/>

      </form>

    </div>
  )
}

export default Login