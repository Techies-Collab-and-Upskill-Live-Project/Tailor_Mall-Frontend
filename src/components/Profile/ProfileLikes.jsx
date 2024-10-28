import React from "react";
import projectImg from "./Assets/projectImg.svg";

const ProfileLikes = ({ profileLikes, isShowLikes }) => {
  return (
    <div
      className={`${
        isShowLikes ? "grid" : "hidden"
      } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px] gap-y-[20px] mb-[250px]`}
    >
      {profileLikes?.map((option, index) => (
        <div key={index} className="">
          <img
            className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
            src={projectImg}
          />
          <div className="flex justify-end gap-x-[18px] mt-[12px]">
            <div className="flex items-center">
              <i className="fa-regular  fa-thumbs-up lg:text-[11px] text-[13px] mr-[5px]"></i>
              <p className="lg:text-[11px] text-[13px]">12</p>
            </div>
            <div className="flex items-center">
              <i className="fa-regular  fa-eye lg:text-[11px] text-[13px] mr-[4px]"></i>
              <p className="lg:text-[11px] text-[13px]">12</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileLikes;
