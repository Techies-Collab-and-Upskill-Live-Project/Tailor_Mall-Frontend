import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileJobs = ({ profileJobs, isShowJob }) => {
  const navigateTo = useNavigate();

  return (
    <div
      className={`${
        isShowJob ? "flex" : "hidden"
      } flex gap-x-[20px] gap-y-[20px] mb-[250px]`}
    >
      <div className=" flex flex-col w-full">
        <div
          onClick={() => navigateTo("/designer-profile/pending-application")}
          className="flex lg:w-[600px] w-full lg:h-[80px] h-[70px] items-center justify-between cursor-pointer hover:bg-primary-10 px-[5px]"
        >
          <p className="lg:text-[16px] sm:text-[15px] text-[14px] font-semibold">
            Pending Application
          </p>
          <i class="fa-solid fa-angle-right text-[16px]"></i>
        </div>
        <div className="flex lg:w-[600px] w-full lg:h-[80px] h-[70px] items-center justify-between border-t cursor-pointer hover:bg-primary-10 px-[5px]">
          <p className="lg:text-[16px] sm:text-[15px] text-[14px] font-semibold">
            Messages
          </p>
          <i class="fa-solid fa-angle-right text-[16px]"></i>
        </div>
        <div
          onClick={() => navigateTo("/designer-profile/done-jobs")}
          className="flex lg:w-[600px] w-full lg:h-[80px] h-[70px] items-center justify-between border-t cursor-pointer hover:bg-primary-10 px-[5px]"
        >
          <p className="lg:text-[16px] sm:text-[15px] text-[14px] font-semibold">
            Done Jobs
          </p>
          <i class="fa-solid fa-angle-right text-[16px]"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileJobs;
