import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const ResetPasswordSetnew = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const baseUrl = import.meta.env.VITE_API_URL;
  const navigateTo = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmitNewPassword = async () => {
    console.log("New password:", newPassword);
    console.log("Confirm password:", confirmNewPassword);

    if (!newPassword) {
      toast.error("Password is required.");
      return;
    }

    if (!confirmNewPassword) {
      toast.error("Confirm Password is required.");
      return;
    }

    const passwordRequirements =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRequirements.test(newPassword)) {
      toast.error(
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/client/reset/password`, {
        email: email,
        newPassword: newPassword,
        confirmPassword: confirmNewPassword,
      });
      console.log("Password reset successful:", response.data);
      toast.success("Password reset successful!");
      navigateTo("/reset-password/success");
    } catch (error) {
      console.error(
        "Error setting new password:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to reset password. Please try again.");
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className=" px-5 md:px-10 py-4 border-b fixed left-0 right-0 top-0 bg-white ">
        <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
      </div>
      <div className=" my-20  px-5 md:px-10 flex flex-col h-full flex-grow items-center justify-center">
        <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
          Set new password
        </p>
        <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[550px] text-center text-[14px]">
          Set a New Password: Please enter a strong and unique password below to
          secure your account. Ensure it meets the requirements for enhanced
          security.
        </p>
        <div className="mt-7 w-full md:w-[550px]">
          <p className="text-[16px] font-semibold">New password</p>
          <div className="px-3 py-1 flex items-center w-full border rounded-xl">
            <i className="fa-solid fa-lock text-[18px] mr-4 text-stone-500"></i>
            <input
              type="text"
              name="newPassword"
              onChange={handleNewPasswordChange}
              placeholder="Enter your new password..."
              className="mt-1 w-full h-[34px] outline-none px-2 text-[14px]"
            />
          </div>
        </div>
        <div className="mt-7 w-full md:w-[550px]">
          <p className="text-[16px] font-semibold">Confirm password</p>
          <div className="px-3 py-1 flex items-center w-full border rounded-xl">
            <i className="fa-solid fa-lock text-[18px] mr-4 text-stone-500"></i>
            <input
              type="text"
              name="confirmNewPassword"
              onChange={handleConfirmNewPasswordChange}
              placeholder="Enter your new password..."
              className="mt-1 w-full h-[34px] outline-none px-2 text-[14px]"
            />
          </div>
        </div>
        <button
          onClick={() => handleSubmitNewPassword()}
          className="mt-7 text-white text-[13px] sm:text-[15px]  bg-primary-100 border border-primary-100 hover:bg-white hover:text-primary-100 transition-all duration-300 w-full md:w-[550px] py-[13px] rounded-full"
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordSetnew;
