import React from "react";
import profileImg from "./Assets/profileImg.svg";
import profileBackg from "./Assets/profileBackg.svg";
import { GoPencil } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const ProfileHeadDesigner = () => {
  return (
    <div className="mt-[64px] relative ">
      <div className="relative">
        <div>
          <img
            src={profileBackg}
            className="lg:h-[300px] sm:h-[175px] h-[120px] w-full object-cover"
            alt="Background"
          />
        </div>

        <div className="absolute bottom-0  left-[70px] sm:left-[105px] lg:left-[150px] transform -translate-x-1/2 translate-y-1/2 px-5 md:px-14">
          <img
            src={profileImg}
            className="lg:w-[200px] sm:w-[120px] w-[100px] rounded-full border-4 border-white"
            alt="Profile"
          />
        </div>
      </div>
      <div className="mt-[70px] sm:mt-[85px] md:mt-[100px] lg:mt-0 px-5 sm:px-12">
        <div className="flex items-center justify-between lg:mt-[30px]">
          <div className="w-full md:w-[420px] lg:ml-[250px] flex flex-col">
            <div className="flex items-center justify-between border-b-[1.5px] pb-[7px]">
              <div>
                <p className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px]">
                  Gifty Sackey
                </p>
                <p className=" text-[12px] sm:text-[13px] md:text-[14px] text-zinc-500">
                  Fashion designer
                </p>
              </div>
              <div className=" flex gap-x-[30px] md:hidden ">
                <div className="bg-primary-10 p-[5.5px] sm:p-[8px] lg:p-[10px] sm:text-[16px]  lg:text-[22px] text-primary-100 rounded-full">
                  <GoPencil />
                </div>
                <div className="bg-primary-10 p-[5.5px]  sm:p-[8px] lg:p-[10px] lg:text-[22px] text-primary-100 rounded-full">
                  <IoMdLink />
                </div>
              </div>
            </div>
            <div className="flex pt-[7px] items-center">
              <IoLocationOutline className="text-[16px] mr-[5px] text-zinc-500" />
              <p className=" text-[12px] sm:text-[13px] md:text-[14px] text-zinc-500">
                Accra, Ghana
              </p>
            </div>
          </div>
          <div className=" hidden gap-x-[30px] md:flex ">
            <div className="bg-primary-10 px-[10px] py-[10px] text-[22px] text-primary-100 rounded-full">
              <GoPencil />
            </div>
            <div className="bg-primary-10 px-[10px] py-[10px] text-[22px] text-primary-100 rounded-full">
              <IoMdLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeadDesigner;
