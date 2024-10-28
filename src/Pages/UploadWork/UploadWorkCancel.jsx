import React from "react";

const UploadWorkCancel = ({ isCancelPage, handleCancelUploadWork }) => {
  return (
    <div
      className={`${
        isCancelPage ? "flex" : "hidden"
      }  fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 justify-center items-center h-screen`}
    >
      <div className="bg-white py-[25px] px-[35px] flex flex-col justify-center items-center rounded-[20px]">
        <p className="font-extrabold text-[14px] lg:text-[15px] w-[200px] lg:w-[230px] md:w-[250px] text-center leading-5 md:leading-6">
          Are you sure you want to close
        </p>
        <p className="w-[200px] md:w-[250px] lg:w-[230px] text-center text-[12px] mt-[5px] text-zinc-500">
          Your progress will be lost if you close without saving
        </p>
        <div className="mt-[10px] w-full">
          <button className="bg-primary-100 text-white text-[12px] w-full py-3 rounded-full cursor-pointer">
            Save to Draft
          </button>
        </div>
        <div className="mt-[10px] w-full">
          <button
            onClick={() => handleCancelUploadWork()}
            className=" text-red-500 text-[12px] w-full py-3 rounded-full cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadWorkCancel;
