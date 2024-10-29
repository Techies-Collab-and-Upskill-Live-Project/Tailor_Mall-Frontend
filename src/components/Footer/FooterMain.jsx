import React from "react";
import logo from "./Assets/logo.png";

export const FooterMain = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col px-5 py-[40px] items-center justify-between border-b">
      <div className=" md:px-[50px] lg:px-0 flex flex-col lg:flex-row  items-center lg:justify-between w-full pb-[20px]">
        <div>
          <img
            className="lg:w-[140px]  md:w-[130px] w-[125px] cursor-pointer lg:mr-[30px]"
            src={logo}
            alt=""
          />
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] lg:gap-0 lg:justify-between leading-8 w-full lg:w-[680px] mt-[30px] lg:mt-0 lg:mr-[30px]">
          <p className="text-center w-[130px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Hire Talent
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Inspiration
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Promotion
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Advertisement
          </p>
          <p className=" text-center w-[110px] lg:w-max lg:hidden lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Community
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            About
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            FAQ
          </p>
          <p className="text-center w-[110px] lg:w-max lg:flex lg:text-[15px] text-[14px] font-semibold cursor-pointer">
            Support
          </p>
        </div>
        <div className="flex lg:justify-between gap-x-[20px] lg:gap-x-0 lg:w-[190px] mt-[20px] lg:mt-0">
          <i className="fa-brands fa-instagram flex text-[15px] lg:text-[14px] bg-zinc-100 text-black lg:px-[10px] lg:py-[9px] px-[10px] py-[9px] rounded-full cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter flex text-[15px] lg:text-[14px] bg-zinc-100 text-black lg:px-[9px] lg:py-[9px] px-[9px] py-[9px] rounded-full cursor-pointer"></i>
          <i className="fa-brands fa-facebook flex text-[15px] lg:text-[14px] bg-zinc-100 text-black lg:px-[10px] lg:py-[9px] px-[10px] py-[9px] rounded-full cursor-pointer"></i>
          <i className="fa-brands fa-youtube flex text-[15px] lg:text-[14px] bg-zinc-100 text-black lg:px-[8px] lg:py-[9px] px-[8px] py-[9px] rounded-full cursor-pointer"></i>
          <i className="fa-brands fa-tiktok flex text-[15px] lg:text-[14px] bg-zinc-100 text-black lg:px-[10px] lg:py-[9px] px-[10px] py-[9px] rounded-full cursor-pointer"></i>
        </div>
      </div>
      <div className="flex w-full lg:px-[110px]">
        <div className="flex flex-col sm:flex-row gap-y-[20px] w-full items-center sm:justify-between border-t-[1.5px] pt-[20px]">
          <div>
            <p className="text-[14px] text-gray-500">
              &#169; {currentYear} Tailora
            </p>
          </div>

          <div className="flex justify-between w-full sm:w-[300px]">
            <p className="text-[14px] text-gray-500 cursor-pointer">
              Term of use
            </p>
            <p className="text-[14px] text-gray-500 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-[14px] text-gray-500 cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
