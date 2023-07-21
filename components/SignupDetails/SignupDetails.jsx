'use client'

import React from 'react'
import ButtonSuccess from '../Buttons/ButtonSuccess'
import InputText from '../Buttons/InputText'
import Link from 'next/link'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import UseAxios from '../hooks/UseAxios';
import axios from 'axios'


const SignupDetails = () => {

  const router = useRouter()

  const initialValues = {
    fullName:'',
    email:''
  }
  
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  });
  
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // Simulate an async operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitting(false);
    router.push('/home'); // Navigate to the next page
  };



  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-6'>
    <div>
      <h1 className='font-bold text-black text-[24px]'>Just a few details</h1>
      <h4 className='text-[#4A4A4A] text-[18px] font-medium tracking-wide'>Since you’re new we need to know</h4>
    </div>

    <Formik initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting, isValidating }) => (

    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div>
        <label htmlFor="fullName">Your full name</label>
        <ErrorMessage className='text-sm text-red-600' name="fullName" component="div" />
        <Field
            name="fullName"      
            type='text'
            className={`w-full p-[10px] border-[1px] border-[#23AF00]`}
          />

      </div>
      
      <div>
        <label htmlFor="email">Your Email address</label>
        <ErrorMessage className='text-sm text-red-600' name="email" component="div" />
        <Field
            name="email"      
            type='email'
            className={`w-full p-[10px] border-[1px] border-[#23AF00]`}
          />

      </div>  
      <button
            type="submit"
            disabled={isSubmitting || isValidating}
            className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] `}
  
          >
            {isSubmitting ? 'Loading...' : 'Signup'}
          </button>

    </form>
      )}
    </Formik>
    

  </div>
  )
}

export default SignupDetails