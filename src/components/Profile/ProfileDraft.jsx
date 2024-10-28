import React from "react";
import profileImg from "./Assets/myLove.jpg";

const ProfileDraft = ({ profileDraft, isShowDraft }) => {
  return (
    <div
      className={`${
        isShowDraft ? "grid" : "hidden"
      } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px]  gap-y-[20px] mb-[250px]`}
    >
      {profileDraft?.map((draft, index) => (
        <div key={index} className="">
          <img
            className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
            src={profileImg}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileDraft;
