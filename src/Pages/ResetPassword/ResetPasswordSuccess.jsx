import React from "react";
import logo from "./Assets/logo.png";

const ResetPasswordSuccess = () => {
  return (
    <div className=" flex  flex-col h-screen">
      <div className=" px-5 md:px-10 py-4 border-b fixed left-0 right-0 top-0 bg-white ">
        <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
      </div>
      <div className=" mt-[]  px-5 md:px-10 flex flex-col h-full items-center justify-center">
        <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
          Congratulations
        </p>
        <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[500px] text-center text-[14px]">
          Your password reset has been successful. Please turn to login to
          continue.
        </p>
        <button
          onClick={() => navigateTo("/signin")}
          className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 border border-primary-100 hover:bg-white hover:text-primary-100 transition-all duration-300 w-full md:w-[550px] py-[13px] rounded-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
