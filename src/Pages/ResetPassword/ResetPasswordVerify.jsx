import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const ResetPasswordVerify = () => {
  const [codes, setCodes] = useState(Array(5).fill(""));

  const baseUrl = import.meta.env.VITE_API_URL;

  const navigateTo = useNavigate();

  const handleCodesChange = (index, event) => {
    const value = event.target.value;

    // Ensure the input is a single digit or character
    if (value.length > 1 || isNaN(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value.length === 1 && index < 4) {
      // Move to the next input if a valid character is entered
      document.getElementById(`code-input-${index + 1}`).focus();
    } else if (value === "" && index > 0) {
      // Move to the previous input if the current input is cleared
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const handleSubmitVerificationCodes = async () => {
    const verificationCode = codes.join("");

    if (verificationCode.length < 5) {
      toast.error("Please fill all code fields.");
      return;
    }

    console.log("Verification Code:", verificationCode);

    try {
      const response = await axios.post(`${baseUrl}/client/verify/otp`, {
        userDetails: email,
        otp: verificationCode,
      });
      console.log("Response:", response.data);
      navigateTo("/reset-password/update");
    } catch (error) {
      console.error("Error:", error);

      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className=" px-5 md:px-10 py-4 border-b fixed left-0 right-0 top-0 bg-white ">
        <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
      </div>
      <div className=" px-5 md:px-10 my-20 flex flex-col h-full flex-grow items-center justify-center">
        <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
          Verification code
        </p>
        <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[550px] text-center text-[14px]">
          Please enter the verification code sent to your email. This will help
          us verify your identity and allow you to reset your password.
        </p>
        <div className="mt-7">
          {codes.map((code, index) => (
            <input
              id={`code-input-${index}`}
              value={codes[index] || ""}
              onChange={(event) => handleCodesChange(index, event)}
              maxLength={1} // Prevents typing more than one character
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault(); // Blocks non-numeric input
                }
              }}
              className=" w-[40px] sm:w-[45px] sm:h-[45px] h-[40px] mx-2 text-center border-zinc-300 border rounded-md outline-none font-bold text-[18px] sm:text-[22px]"
            />
          ))}
        </div>
        <button
          onClick={() => handleSubmitVerificationCodes()}
          className="mt-7 text-white text-[13px] sm:text-[15px]  bg-primary-100 border border-primary-100 hover:bg-white hover:text-primary-100 transition-all duration-300 w-full md:w-[550px] py-[13px] rounded-full"
        >
          Verify
        </button>
        <div className="mt-3">
          <p className="text-[14px] text-secondary ">
            Didn’t receive code?
            <span className=" ml-[8px] text-[14px] text-primary-100 cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordVerify;
