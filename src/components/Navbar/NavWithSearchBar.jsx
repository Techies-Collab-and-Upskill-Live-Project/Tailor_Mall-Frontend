import React from "react";
import logo from "./Assets/logo.png";
import profileImg from "./Assets/myLove.jpg";

const NavWithSearchBar = () => {
  return (
    <div className="z-[99] flex sticky top-0 right-0 left-0 bg-white px-5 sm:px-12 lg:py-[17px] py-[15px] items-center justify-between border-b lg:gap-x-[150px]">
      <div className="flex flex-1 gap-x-[18px] lg:justify-between items-center">
        <i className="fa-solid fa-bars lg:hidden text-[22px]"></i>
        <img className="lg:w-[130px] w-[115px]" src={logo} alt="" />
        <p className="hidden lg:flex text-[14px] font-semibold">Jobs</p>
        <p className="hidden lg:flex text-[14px] font-semibold">Community</p>
        <div className="hidden lg:flex items-center px-[15px] py-[4px] rounded-full border">
          <i className="fa-solid fa-magnifying-glass text-[15px] mr-[10px] text-zinc-300"></i>
          <input
            className="outline-none border-none w-[250px] h-[28px] text-[13px] placeholder:text-zinc-300"
            type="text"
            placeholder="Search for project, user etc"
          />
        </div>
      </div>
      <div className="flex lg:w-[360px] justify-between items-center">
        <div>
          <button className="hidden lg:flex bg-primary-100 text-white px-[35px] py-[10px] text-[14px] rounded-full cursor-pointer">
            Share work
          </button>
        </div>
        <i className="fa-regular fa-envelope hidden lg:flex text-[15px] bg-zinc-100 text-zinc-700 px-[12px] py-[12px] rounded-full"></i>
        <i className="fa-regular fa-bell hidden lg:flex text-[15px]  bg-zinc-100 text-zinc-700 px-[13px] py-[12px] rounded-full"></i>
        <i className="fa-solid fa-magnifying-glass mr-[18px] flex lg:hidden text-[22px]"></i>
        <img
          src={profileImg}
          className="lg:w-[40px] w-[34px] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavWithSearchBar;
