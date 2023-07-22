"use client";

import React, { useState } from "react";
import ButtonSuccess from "../Buttons/ButtonSuccess";
import InputText from "../Buttons/InputText";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import UseAxios from "../hooks/UseAxios";
import axios from "axios";
import Cookies from "js-cookie";

const SignupDetails = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Start signup API
  const handleSingUp = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: "https://cms.cybertize.in/foodDeliveryProject/public/api/user/save-basic-info/5",
        data: {
          name: name,
          email: email,
        },
      });

      // store login info in cookies
      if(response) {
        const data = await response.data
        const token = data.data.token

        console.log(token);

        // set cookies for toke
        Cookies.set('token', token)
        router.push("/home"); // Navigate to the next page
      }
      // end login cookies
    
    } catch (error) {
      console.error("ERROR ", error);
    }
  };
  // End signUp APO

  // Form Signup validation

  const initialValues = {
    fullName: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    handleSingUp();
    setSubmitting(true);
    // Simulate an async operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitting(false);
    
  };

  // end validation

  return (
    <div className="p-[18px] py-[28px] flex flex-col gap-6">
      <div>
        <h1 className="font-bold text-black text-[24px]">Just a few details</h1>
        <h4 className="text-[#4A4A4A] text-[18px] font-medium tracking-wide">
          Since you’re new we need to know
        </h4>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, isSubmitting, isValidating }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="fullName">Your full name</label>
              <ErrorMessage
                className="text-sm text-red-600"
                name="fullName"
                component="div"
              />
              <Field
                onChange={(e) => {
                  setName(e.target.value);
                  handleChange(e);
                }}
                value={name}
                name="fullName"
                type="text"
                className={`w-full p-[10px] border-[1px] border-[#23AF00]`}
              />
            </div>

            <div>
              <label htmlFor="email">Your Email address</label>
              <ErrorMessage
                className="text-sm text-red-600"
                name="email"
                component="div"
              />
              <Field
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleChange(e);
                }}
                value={email}
                name="email"
                type="email"
                className={`w-full p-[10px] border-[1px] border-[#23AF00]`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isValidating}
              className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] `}
            >
              {isSubmitting ? "Loading..." : "Signup"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignupDetails;
