import React from 'react'
import ButtonSuccess from '../Buttons/ButtonSuccess'
import InputText from '../Buttons/InputText'

const SignupDetails = () => {
  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-6'>
    <div>
      <h1 className='font-bold text-black text-[24px]'>Just a few details</h1>
      <h4 className='text-[#4A4A4A] text-[18px] font-medium tracking-wide'>Since you’re new we need to know</h4>
    </div>

    <form className='flex flex-col gap-4'>
      <div>
        <label htmlFor="fullName">Your full name</label>
        <InputText/>
      </div>
      
      <div>
        <label htmlFor="email">Your Email address</label>
        <InputText/>
      </div>  

    </form>
    <Link href="/home" >
        <button className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00]`}>   
            Continue   
        </button>
    </Link>

  </div>
  )
}

export default SignupDetails