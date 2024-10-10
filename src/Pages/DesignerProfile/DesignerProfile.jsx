import React from "react";
import logo from "./Assets/logo.png";
import profileImg from "./Assets/myLove.jpg";
import profileBackg from "./Assets/profileBackg.svg";
import { IoLocationOutline } from "react-icons/io5";

const DesignerProfile = () => {
  return (
    <div>
      <div className="flex lg:px-[70px] px-[40px] lg:py-[15px] py-[10px] items-center justify-between border-b-[1.5px]">
        <div className="flex items-center gap-x-[30px]">
          <i className="fa-solid fa-bars lg:hidden text-[18px]"></i>
          <img className="lg:w-[130px] w-[110px]" src={logo} alt="" />
          <p className="hidden lg:flex text-[15px] font-semibold">Jobs</p>
          <p className="hidden lg:flex text-[15px] font-semibold">Community</p>
          <div className="hidden lg:flex items-center px-[15px] py-[3px] rounded-full border-[1.5px]">
            <i className="fa-solid fa-magnifying-glass mr-[15px] text-zinc-300"></i>
            <input
              className="outline-none border-none w-[250px] h-[28px] text-[14px] placeholder:text-zinc-300"
              type="text"
              placeholder="Search for project, user etc"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button className="mr-[30px] hidden lg:flex bg-primary-100 text-white px-[40px] py-[8px] text-[14px] rounded-full cursor-pointer">
              Share work
            </button>
          </div>
          <i className="fa-regular fa-envelope mr-[30px] hidden lg:flex text-[15px] bg-zinc-100 text-zinc-700 px-[12px] py-[12px] rounded-full"></i>
          <i className="fa-regular fa-bell mr-[30px] hidden lg:flex text-[15px]  bg-zinc-100 text-zinc-700 px-[13px] py-[12px] rounded-full"></i>
          <i className="fa-solid fa-magnifying-glass mr-[20px] flex lg:hidden text-[22px]"></i>
          <img
            src={profileImg}
            className="lg:w-[50px] w-[40px] rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[10px] relative">
        <div className="">
          <img
            src={profileBackg}
            className=" lg:h-[250px] w-full object-cover"
          />
        </div>
        <div className="lg:px-[70px] px-[40px] flex items-center justify-between h-[150px] bg-blue-200">
          <div className="w-[350px] ml-[250px] hidden lg:flex lg:flex-col">
            <div className="border-b-[1.5px] pb-[5px]">
              <p className="font-semibold text-[26px]">Gifty Sackey</p>
              <p className="text-[14px] text-zinc-500">Fashion designer</p>
            </div>
            <div className="flex pt-[5px] items-center">
              <IoLocationOutline className="text-[17px] mr-[5px] text-zinc-500" />
              <p className="text-[14px] text-zinc-500">Accra, Ghana</p>
            </div>
          </div>
          <div className="gap-x-[30px] hidden lg:flex ">
            <i className="fa-solid fa-pen bg-primary-50 px-[10px] py-[10px] text-[20px] text-primary-100 rounded-full"></i>
            <i className="fa-solid fa-link  bg-primary-50 px-[8px] py-[10px] text-[20px] text-primary-100 rounded-full"></i>
          </div>
        </div>
        <div className="rounded-full border-[7px] border-white fixed lg:top-[230px] lg:left-[70px] top-[200px] left-[40px]">
          <img
            src={profileImg}
            className="lg:w-[200px] w-[150px] rounded-full pb-100px "
          />
        </div>
      </div>
    </div>
  );
};

export default DesignerProfile;
