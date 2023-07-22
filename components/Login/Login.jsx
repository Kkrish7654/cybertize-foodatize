"use client";

import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import UseAxios from "../hooks/UseAxios";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";

const Login = () => {
  const { phone, setPhone } = useAppContext();
  const [myPhone, setMyPhone] = useState("");

 

  //Start signup API
  const handleSignUp = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/foodDeliveryProject/public/api/user/register-users",
        data: {
          phone_number: myPhone,
        },
      });

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  // End signup API
  // API end

  const router = useRouter();

  // form validation using formik yup
  const initialValues = {
    number: "",
  };

  // validating number
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^\d{10}$/, "Number must be exactly 10 digits long")
      .required("Phone Number is required")
      .max(10, "Must be 10 digits"),
  });

  const handleSubmit = (values) => {
    // Perform form submission
    setMyPhone(values);
    console.log(values);
    router.push("/otp");
  };
  // end //

  return (
    <div className="p-[18px] py-[28px] flex flex-col gap-6">
      <div>
        <h1 className="font-bold text-black text-[24px]">Login / Signup</h1>
        <h4 className="text-[#4A4A4A] text-[18px] font-medium tracking-wide">
          Continue with Mobile Number
        </h4>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, isSubmitting, isValidating }) => (
          <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
            <h4 className="text-[#4A4A4A] text-[18px] font-medium tracking-wide">
              Enter 10 digit mobile number
            </h4>
            <ErrorMessage
              className="text-sm text-red-600"
              name="number"
              component="div"
            />
            <Field
              onChange={(e) => {
                handleChange(e);
                setPhone(e.target.value);
                setMyPhone(e.target.value);
              }}
              value={myPhone}
              name="number"
              type="tel"
              maxLength="10"
              className={`w-full p-[10px] border-[1px] border-[#23AF00]`}
            />

            <button
              onClick={handleSignUp}
              type="submit"
              disabled={isSubmitting || isValidating}
              className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] mt-8 `}
            >
              {isSubmitting ? "Loading..." : "Continue"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
