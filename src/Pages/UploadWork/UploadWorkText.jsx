import React from "react";

const UploadWorkText = ({
  isTextPage,
  currentText,
  handleSubmitText,
  handleTextChange,
}) => {
  return (
    <div
      className={`${
        isTextPage ? "flex" : "hidden"
      }  fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 justify-center items-center h-screen px-[20px] `}
    >
      <div className="flex flex-col p-[20px] sm:p-[25px] rounded-[10px] bg-white w-full md:h-[300px] md:w-[550px]">
        <textarea
          className="w-full outline-none rounded-[10px] p-[15px] border-[1.5px] h-[260px] md:h-[200px] resize-none text-[14px] md:text-[16px] placeholder:text-[]"
          placeholder="Say something about your project ..."
          value={currentText}
          onChange={handleTextChange}
        ></textarea>
        <div className="flex justify-end mt-[20px]">
          <button
            onClick={() => handleSubmitText()}
            className="bg-primary-100 text-white text-[13px] px-[50px] py-[7px] rounded-full"
          >
            Add Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadWorkText;
