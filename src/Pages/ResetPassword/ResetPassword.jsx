import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [reset, setReset] = useState(true);
  const [verify, setVerify] = useState(false);
  const [password, setPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [codes, setCodes] = useState(Array(5).fill(""));

  const baseUrl = import.meta.env.VITE_API_URL;

  const resetFocus = () => {
    setReset(false);
    setVerify(true);
    setPassword(false);
    setSuccess(false);
  };

  const verifyFocus = () => {
    setPassword(true);
    setVerify(false);
    setReset(false);
    setSuccess(false);
  };

  const passwordFocus = () => {
    setSuccess(true);
    setPassword(false);
    setVerify(false);
    setReset(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitResetPasswordEmail = async () => {
    console.log(email);
    resetFocus();

    // try {
    //   const response = await axios.post(`${baseUrl}/client/send-otp`, {
    //     email: email,
    //     type: "email",
    //   });
    //   console.log("Response:", response.data);
    //   resetFocus();
    // } catch (error) {
    //   console.error("Error:", error);

    //   const message = error.response?.data?.message || "Failed to send OTP.";
    //   toast.error(message);
    // }
  };

  const handleCodesChange = (index, event) => {
    const newCodes = [...codes];
    newCodes[index] = event.target.value;
    setCodes(newCodes);

    if (event.target.value.length === 1 && index < 4) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleSubmitVerificationCodes = async () => {
    verifyFocus();

    const verificationCode = codes.join("");

    // if (verificationCode.length < 5) {
    //   toast.error("Please fill all code fields.");
    //   return;
    // }

    // console.log("Verification Code:", verificationCode);

    // try {
    //   const response = await axios.post(`${baseUrl}/client/verify/otp`, {
    //     userDetails: email,
    //     otp: verificationCode,
    //   });
    //   console.log("Response:", response.data);
    //   verifyFocus();
    // } catch (error) {
    //   console.error("Error:", error);

    //   const message =
    //     error.response?.data?.message ||
    //     "Something went wrong. Please try again.";
    //   toast.error(message);
    // }
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmitNewPassword = async () => {
    console.log(newPassword);

    passwordFocus();

    // const passwordRequirements =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // if (!newPassword) {
    //   toast.error("Password is required.");
    //   return;
    // }

    // if (!passwordRequirements.test(newPassword)) {
    //   toast.error(
    //     "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
    //   );
    //   return;
    // }

    // if (newPassword !== confirmNewPassword) {
    //   toast.error("Passwords do not match.");
    //   return;
    // }

    // try {
    //   const response = await axios.post(`${baseUrl}/client/reset/password`, {
    //     email: email,
    //     newPassword: newPassword,
    //     confirmPassword: confirmNewPassword,
    //   });
    //   console.log("Password reset successful:", response.data);
    //   toast.success("Password reset successful!");
    //   passwordFocus(); // Focus or reset the password field as needed
    // } catch (error) {
    //   console.error(
    //     "Error setting new password:",
    //     error.response ? error.response.data : error.message
    //   );
    //   toast.error("Failed to reset password. Please try again.");
    // }
  };

  const navigateTo = useNavigate();

  return (
    <div>
      <div className={`${reset ? "flex" : "hidden"} flex-col h-full`}>
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
              <i className="fa-regular fa-envelope mr-4 text-stone-500"></i>
              <input
                type="text"
                name="email"
                onChange={handleEmailChange}
                placeholder="example@gmail.com"
                className="mt-1 w-full h-[34px] outline-none px-2 text-[14px]"
              />
            </div>
          </div>
          <button
            onClick={() => handleSubmitResetPasswordEmail()}
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 w-full md:w-[550px] py-[13px] rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
      <div className={`${verify ? "flex" : "hidden"} flex-col h-full`}>
        <div className=" px-5 md:px-10 py-4 border-b ">
          <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
        </div>
        <div className=" px-5 md:px-10 my-20 flex flex-col h-full flex-grow items-center justify-center">
          <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
            Verification code
          </p>
          <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[550px] text-center text-[14px]">
            Please enter the verification code sent to your email. This will
            help us verify your identity and allow you to reset your password.
          </p>
          <div className="mt-7">
            {codes.map((code, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={code}
                onChange={(event) => handleCodesChange(index, event)}
                className=" w-[40px] sm:w-[45px] sm:h-[45px] h-[40px] mx-2 text-center border-zinc-300 border rounded-md outline-none font-bold text-[18px] sm:text-[22px]"
              />
            ))}
          </div>
          <button
            onClick={() => handleSubmitVerificationCodes()}
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 w-full md:w-[550px] py-[13px] rounded-full"
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
      <div className={`${password ? "flex" : "hidden"} flex-col h-full`}>
        <div className=" px-5 md:px-10 py-4 border-b ">
          <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
        </div>
        <div className=" my-20  px-5 md:px-10 flex flex-col h-full flex-grow items-center justify-center">
          <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
            Set new password
          </p>
          <p className="text-secondary mt-2 sm:mt-0 w-full sm:w-[550px] text-center text-[14px]">
            Set a New Password: Please enter a strong and unique password below
            to secure your account. Ensure it meets the requirements for
            enhanced security.
          </p>
          <div className="mt-7 w-full md:w-[550px]">
            <p className="text-[16px] font-semibold">New password</p>
            <div className="px-3 py-1 flex items-center w-full border rounded-xl">
              <i className="fa-solid fa-lock mr-4 text-stone-500"></i>
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
              <i className="fa-solid fa-lock mr-4 text-stone-500"></i>
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
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 w-full md:w-[550px] py-[13px] rounded-full"
          >
            Reset password
          </button>
        </div>
      </div>
      <div className={`${success ? "flex" : "hidden"} flex-col h-screen`}>
        <div className=" px-5 md:px-10 py-4 border-b ">
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
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 w-full md:w-[550px] py-[13px] rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
