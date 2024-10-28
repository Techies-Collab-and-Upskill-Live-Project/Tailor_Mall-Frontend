import React, { useContext } from "react";
import NavWithSearchBar from "../Navbar/NavWithSearchBar";
import { FooterMain } from "../Footer/FooterMain";
import { LuFilter } from "react-icons/lu";
import { userProfileContext } from "../../App";

const ProfileDoneJobs = () => {
  const { userProfile, setUserProfile } = useContext(userProfileContext);

  return (
    <div>
      <NavWithSearchBar />
      <div className="px-5 sm:px-12 lg:my-[120px] mt-[90px] mb-[120px] flex gap-x-[60px] w-full">
        <div className="flex-1">
          <div className="hidden lg:flex mb-[25px]">
            <p className=" text-[22px] font-bold">Done Jobs</p>
          </div>
          <div className="flex lg:hidden gap-x-[30px] items-center mb-[25px]">
            <div className="flex flex-1 items-center px-[20px] py-[10px] border rounded-full">
              <i class="fa-solid fa-magnifying-glass text-zinc-300 text-[15px] mr-[15px]"></i>
              <input
                className="w-full placeholder:text-[14px] placeholder:text-zinc-300 py-[2px] outline-none border-none"
                placeholder="Search for jobs"
                type="text"
              />
            </div>
            <div className="flex text-zinc-400 text-[20px] px-[15px] py-[15px] border rounded-full">
              <LuFilter />
            </div>
          </div>
          <div className=" flex flex-col lg:mt-[50px] gap-y-[40px]">
            {userProfile?.map((option, index) => (
              <div
                key={index}
                className="sm:px-[25px] lg:py-[25px] py-[30px] px-[15px] lg:mt-0 border-[1.5px] border-primary-50 rounded-[15px]"
              >
                <div className="lg:hidden flex items-center justify-between">
                  <div>
                    <p className="text-[13px]"> Client Name</p>
                    <img src="" alt="" />
                  </div>
                  <i class="fa-regular fa-bookmark text-[12px] text-primary-100 px-[7px] py-[7px] bg-primary-10 rounded-full"></i>
                </div>
                <p className=" mt-[10px] lg:mt-0 text-[18px] font-semibold text-primary-100">
                  Job Name
                </p>
                <div className="mt-[4px] flex gap-x-[5px] text-[13px] ">
                  <p>Category </p>
                  <p>&#8226;</p>
                  <p>Payment Type</p>
                  <p>&#8226;</p>
                  <p>Price</p>
                </div>
                <p className="mt-[20px] lg:text-[15px] text-[14px] application-two-lines ">
                  Figma ipsum component variant main layer. Content content
                  asset ipsum pencil strikethrough. Clip blur reesizing
                  prototype prototype scrolling. Project group subtract team
                  plugin selection polygon. Blur line figma strikethrough
                  content. Figma ipsum component variant main layer. Content
                  content asset ipsum pencil strikethrough. Clip blur reesizing
                  prototype prototype scrolling. Project group subtract team
                  plugin selection polygon. Blur line figma strikethrough
                  content.
                </p>

                <div className="mt-[30px] flex flex-wrap gap-[15px]">
                  {userProfile?.map((option, index) => (
                    <p className="px-[20px] py-[4px] bg-primary-10 w-max rounded-full text-[13px] text-primary-100">
                      {option}
                    </p>
                  ))}
                </div>
                <div className="mt-[20px] flex sm:w-[400px] w-full flex-wrap gap-[15px] justify-between">
                  <div className="flex gap-x-[10px] items-center">
                    <i class="fa-solid fa-location-dot text-[14px] text-primary-100"></i>
                    <p className="text-[14px]">Location</p>
                  </div>
                  <p className="text-[14px]">Experience Level</p>
                  <p className="text-[14px]">Posted 00/00/00</p>
                </div>
                <div className="mt-[30px]">
                  <button className="text-[13px] sm:w-[230px] w-full py-[10px] rounded-full bg-primary-100 text-white">
                    Continue Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col max-h-max w-[300px] px-[20px] py-[25px] border-[1.5px] border-primary-50 rounded-[15px]">
          <p className="font-bold text-[18px]">Filter</p>
          <div className="mt-[15px] border-t-[1.5px] py-[15px]">
            <p className="text-[17px] font-semibold text-zinc-500">
              Categories
            </p>
            <div className="mt-[15px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Category</p>
            </div>
            <div className="mt-[10px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Category</p>
            </div>
            <div className="mt-[10px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Category</p>
            </div>
            <div className="mt-[10px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Category</p>
            </div>
            <div className="mt-[10px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Category</p>
            </div>
          </div>
          <p className="mt-[15px] font-bold text-[18px]">Sort</p>
          <div className="mt-[15px] border-t-[1.5px] py-[15px]">
            <p className="text-[17px] font-semibold text-zinc-500">
              Date posted
            </p>
            <div className="mt-[15px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Ascending</p>
            </div>
            <div className="mt-[10px] flex gap-x-[14px] items-center">
              <input className="appCateCheckBox" type="checkbox" />
              <p className="text-[15px] text-zinc-500">Descending</p>
            </div>
          </div>
          <div className="w-full mt-[20px]">
            <button className="w-full py-[10px] rounded-full border-[1.5px] border-primary-100 text-primary-100 text-[15px] font-semibold">
              Apply filter
            </button>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default ProfileDoneJobs;
