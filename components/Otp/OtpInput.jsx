'use client'

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";

const OtpInputs = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const {phone} = useAppContext();
  const new_otp = otp.join('')
  const router = useRouter();
  const [otpError, setOtpError] = useState(true)

  //Start Otp API
  const handleOtp = async() => {
    try{
      const response = await axios({
        method:"POST",
        url:"/foodDeliveryProject/public/api/user/otp-verification",
        data:{
          phone_number:phone,
          phone_otp:new_otp
        }
      })
  
      router.push("/signup-details");
      setOtpError(!otpError)
    console.log(response);
  
    }catch(err){
      console.error(err)
    }
  
    }
     // End Otp API

  const handleChange = (input, index) => {
    const value = event.target.value;
  
    if (value.length <= 1) {
      setOtp((prevOTP) => {
        const updatedOTP = [...prevOTP];
        updatedOTP[index] = value;
        return updatedOTP;
      });
    }
  
    if (value.length === 1 && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
    .matches(/^\d{5}$/, "must be 5 digits")
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const new_otp = otp.join('')
      console.log("OTP:", values.otp);
      handleOtp()
    },
  });

  const inputRefs = Array(5)
    .fill()
    .map((_, index) => React.createRef());

  const isButtonDisabled = !otp.every((value) => value !== "");

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div className="flex justify-start items-center">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength="1"
            className="border border-green-500 p-4 mx-1 text-center w-[50px] h-[50px]"
            name="otp"
            onChange={(event) => {
              handleChange(event, index);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.otp[index]}
          />
        ))}
      </div>

      <Link className="text-sm underline" href="">
        Resend OTP
      </Link>
      
      {!otpError && formik.touched.otp && formik.errors.otp && (
        <div className="text-red-500">{formik.errors.otp}</div>
      )}
      <button
        type="submit"
        className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00]`}
        disabled={isButtonDisabled}
      >
         {formik.isSubmitting ? 'Loading...' : 'Continue'}
      </button>
      
    </form>
  );
};

export default OtpInputs;