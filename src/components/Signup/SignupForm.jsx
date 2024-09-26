import ButtonLink from "../Button/Button";
import Mail from "../../assets/fi_mail.png";
import BigButton from "../Button/BigButton";
import Google from "../../assets/Google.png";
import facebook from "../../assets/Facebook.png";
import password from "../../assets/fi_lock.png";
import logo from "../../assets/Tailoralogo.png"
import { useState } from "react";
import { toast } from "sonner";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const SignupForm = ({
  handleSignup,
  handleChange,
  signupDetails,
  errorMessage,
  psswdError,
  isLoading
}) => {
  return (
    <div className="flex flex-col gap-4 py-6 md:gap-8 md:py-[54px] px-[20px]">
    <img src={logo} className="lg:hidden w-[200px] self-center" alt="" />
      <h5 className="font-bold text-xl text-[#000000] md:text-[28px] leading-8">
        Create an account
      </h5>
      {/* </div> */}

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="flex gap-3 self-stretch md:gap-8 lg:gap-4">
          <ButtonLink img={Google} />
          <ButtonLink isMain img={facebook} />
        </div>
        <div className="flex p-2 md:gap-8">
          <div className="border-t-[0.5px] w-[122px] border-black md:w-[287px] lg:w-full self-center"></div>
          <p className="mx-2 text-base font-normal text-[#bcbcbc] md:text-xl leading-6">
            OR
          </p>
          <div className="border-t-[0.5px] w-[122px] border-black md:w-[287px] lg:w-full self-center"></div>
        </div>

        <form action="" className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Work email
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={Mail} alt="" />
                <input
                  name="email"
                  value={signupDetails.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="example@gmail.com"
                  className="border-none w-full outline-none"
                />
                {}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label htmlFor="" className="font-medium text-black">
                Country of Residence
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12 justify-between">
                <select
                  name="country"
                  id=""
                  className="flex justify-between border-none outline-none"
                  onChange={handleChange}
                  value={signupDetails.country}
                >
                  Select your country of Residence
                  <option value="nigeria">Nigeria</option>
                  <option value="france">France</option>
                  <option value="india">India</option>
                  <option value="italy">Italy</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Phone Number
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={Mail} alt="" />
                <input
                  name="phoneNo"
                  value={signupDetails.phoneNo}
                  type="text"
                  placeholder="+234 81371125987"
                  className="border-none outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Password
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={password} alt="" />
                <input
                  name="password"
                  value={signupDetails.password}
                  type="text"
                  placeholder="Enter your password"
                  className="border-none outline-none"
                  onChange={handleChange}
                />
              </div>

              {/* {errorMessage && (
                <div className="flex flex-col px-[12px]">
                  <div className="flex items-center gap-x-[8px]">
                    {psswdError?.length ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                          stroke="#D42620"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#D42620"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#0F973D"
                        />
                        <path
                          d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                          stroke="#0F973D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <p
                      className={`${
                        psswdError?.length ? "text-[#D42620]" : "text-[#0F973D]"
                      }  text-[10px] leading-[23.6px] font-[400] `}
                    >
                      Password must contain at least 8 characters
                    </p>
                  </div>
                  <div className="flex items-center gap-x-[8px]">
                    {psswdError?.test ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                          stroke="#D42620"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#D42620"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#0F973D"
                        />
                        <path
                          d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                          stroke="#0F973D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <p
                      className={`${
                        psswdError?.test ? "text-[#D42620]" : "text-[#0F973D]"
                      } text-[10px] leading-[23.6px] font-[400] `}
                    >
                      Password must contain a number or symbol
                    </p>
                  </div>
                  <div className="flex items-center gap-x-[8px]">
                    {psswdError?.uppercase ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                          stroke="#D42620"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#D42620"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                          stroke="#0F973D"
                        />
                        <path
                          d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                          stroke="#0F973D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <p
                      className={`${
                        psswdError?.uppercase
                          ? "text-error-2"
                          : "text-[#0F973D]"
                      } text-[10px] leading-[23.6px] font-[400] `}
                    >
                      Password must contain an uppercase letter
                    </p>
                  </div>
                </div>
              )} */}
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label htmlFor="" className="font-medium text-black">
                Where did you hear of this platform?
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12 justify-between">
                <select
                  name="platform"
                  id=""
                  className="flex justify-between border-none outline-none"
                  onChange={handleChange}
                  value={signupDetails.platform}
                >
                  Where did you hear of this platform?
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                </select>
              </div>
            </div>
          </div>

          <BigButton IsDisabled={isLoading} loadingText="Signing Up" submit={handleSignup} text="Create an account" />
          <div>
          <div className="flex mt-2 flex-col gap-2">
              <p className="text-center text-base font-normal text-[#535353]">
                Already have an account?
                <Link to="/signin" className="ml-1 text-[#008080] block md:inline">
                  Log in
                </Link>
              </p>
            </div>

          </div>

        </form>


      </div>
    </div>
  );
};

export default SignupForm;
