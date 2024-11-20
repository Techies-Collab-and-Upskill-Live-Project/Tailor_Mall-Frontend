import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const baseUrl = import.meta.env.VITE_API_URL;
  const navigateTo = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitResetPasswordEmail = async () => {
    console.log("Email entered:", email);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please provide an email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/client/send-otp`, {
        email,
        type: "email",
      });

      console.log("OTP sent successfully:", response.data);
      navigateTo("/reset-password/verify");
    } catch (error) {
      console.error("Error sending OTP:", error);

      const message =
        error.response?.data?.message ||
        "Failed to send OTP. Please try again.";
      toast.error(message);
    }
  };

  return (
    <div>
      <div className="flex flex-col h-full">
        <div className=" px-5 md:px-10 py-4 border-b ">
          <img className="md:w-[130px] w-[100px]" src={logo} alt="" />
        </div>
        <div className=" px-5 md:px-10 my-20 flex flex-col h-full flex-grow items-center justify-center">
          <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
            Reset password
          </p>
          <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[550px] text-center text-[14px]">
            Forgot your password? Enter your email, and we'll send you a code to
            reset it. Use the code to create a new password and regain access to
            your account
          </p>
          <div className="mt-7 w-full md:w-[550px]">
            <p className="text-[16px] font-semibold">Email</p>
            <div className="px-3 py-1 flex items-center w-full border rounded-xl">
              <i className="fa-regular fa-envelope text-[17px] mr-2 text-stone-500"></i>
              <input
                type="text"
                name="email"
                onChange={handleEmailChange}
                placeholder="example@gmail.com"
                className="mt-1 w-full h-[34px] outline-none px-2 text-[15px]"
              />
            </div>
          </div>
          <button
            onClick={() => handleSubmitResetPasswordEmail()}
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 border border-primary-100 hover:bg-white hover:text-primary-100 transition-all duration-300 w-full md:w-[550px] py-[13px] rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
