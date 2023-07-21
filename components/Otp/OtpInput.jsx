import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OtpInputs = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));

  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    setOtp((prevOTP) => {
      const updatedOTP = [...prevOTP];
      updatedOTP[index] = value;
      return updatedOTP;
    });

    if (value.length === 1 && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const router = useRouter();

  const inputRefs = Array(5).fill().map((_, index) => React.createRef());

  const validationSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("OTP:", values.otp);
      router.push("/signup-details");
    },
  });

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
            onChange={(e) => handleOtpChange(e, index)}
            onBlur={formik.handleBlur}
            value={otp[index]}
          />
        ))}
      </div>

      <Link className="text-sm underline" href="">
        Resend OTP
      </Link>

      {formik.touched.otp && formik.errors.otp && (
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
