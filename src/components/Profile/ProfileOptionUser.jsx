import React from "react";

const ProfileOptionUser = ({
  isShowWork,
  isShowLikes,
  isShowAbout,
  handleIsShowWork,
  handleIsShowLikes,
  handleIsShowAbout,
}) => {
  return (
    <div className="px-5 sm:px-12 lg:my-[60px] sm:my-[40px] my-[30px]">
      <div className="flex overflow-hidden sm:w-[450px] gap-x-[10px] sm:gap-x-[20px] ">
        <p
          onClick={() => handleIsShowWork()}
          className={`${
            isShowWork ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          WORK
        </p>
        <p
          onClick={() => handleIsShowLikes()}
          className={`${
            isShowLikes ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          LIKES
        </p>
        <p
          onClick={() => handleIsShowAbout()}
          className={`${
            isShowAbout ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          ABOUT
        </p>
      </div>
    </div>
  );
};

export default ProfileOptionUser;
