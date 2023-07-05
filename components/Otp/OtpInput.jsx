import React, { useState } from "react";

const OtpInputs = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));

  const handleChange = (input, index) => {
    const value = event.target.value;

    console.log(value);

    setOtp((prevOTP) => {
      const updatedOTP = [...prevOTP];
      updatedOTP[index] = value;
      return updatedOTP;
    });

    if (value.length === 1 && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("OTP:", otp.join(""));
  // };

  const inputRefs = Array(5)
    .fill()
    .map((_, index) => React.createRef());

  return (
    <div className="flex justify-start items-center">
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="text"
          maxLength="1"
          className="border border-green-500 p-4 mx-1 text-center w-[50px] h-[50px]"
          onChange={(event) => handleChange(event, index)}
        />
      ))}
    </div>
  );
};

export default OtpInputs;
