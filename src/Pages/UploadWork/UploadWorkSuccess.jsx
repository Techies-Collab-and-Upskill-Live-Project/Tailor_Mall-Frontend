import React from "react";
import successImg from "./Assets/successImg.svg";

const UploadWorkSuccess = ({ isSuccessPage, handleClearSuccessPage }) => {
  return (
    <div
      className={`${
        isSuccessPage ? "flex" : "hidden"
      }  fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 justify-center items-center h-screen`}
    >
      <div className=" bg-white flex flex-col rounded-[20px] w-[300px] h-[400px]">
        <img src={successImg} alt="" />
        <div className=" flex flex-col items-center px-[30px] py-[20px]">
          <p className="font-bold text-[18px]">Hurray!!!</p>
          <p className="text-[13px] text-center text-zinc-500">
            You have uploaded your project succesfully
          </p>
          <div className="flex flex-col mt-[10px] gap-y-[10px] w-full">
            <button
              onClick={() => handleClearSuccessPage()}
              className="bg-primary-100 text-white px-full py-3 text-[13px] rounded-full"
            >
              Dismiss
            </button>
            <button className="bg-white text-primary-100 px-full py-3 text-[13px] rounded-full">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadWorkSuccess;
