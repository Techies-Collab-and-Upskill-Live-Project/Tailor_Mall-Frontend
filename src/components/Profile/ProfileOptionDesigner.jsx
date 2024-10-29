import React from "react";

const ProfileOptionDesigner = ({
  isShowWork,
  isShowDraft,
  isShowSaves,
  isShowLikes,
  isShowAbout,
  isShowJob,
  isShowStats,
  handleIsShowWork,
  handleIsShowDraft,
  handleIsShowSaves,
  handleIsShowLikes,
  handleIsShowAbout,
  handleIsShowJob,
  handleIsShowStats,
}) => {
  return (
    <div className="px-5 sm:px-12 lg:my-[60px] sm:my-[40px] my-[30px]">
      <div className="flex overflow-hidden lg:w-[840px] justify-between">
        <p
          onClick={() => handleIsShowWork()}
          className={`${
            isShowWork ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          WORK
        </p>
        <p
          onClick={() => handleIsShowDraft()}
          className={`${
            isShowDraft ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          DRAFT
        </p>
        <p
          onClick={() => handleIsShowSaves()}
          className={`${
            isShowSaves ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          SAVES
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
        <p
          onClick={() => handleIsShowJob()}
          className={`${
            isShowJob ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer  transition-all duration-100`}
        >
          JOB
        </p>
        <p
          onClick={() => handleIsShowStats()}
          className={`${
            isShowStats ? "bg-primary-50 text-primary-100" : "text-zinc-500"
          } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
        >
          STATS
        </p>
      </div>
    </div>
  );
};

export default ProfileOptionDesigner;
