import React from "react";

const UploadWorkCoverEdit = ({
  isEditCoverPage,
  setIsEditCoverPage,
  workDetails,
  currentCoverImage,
  setCurrentCoverImage,
  handleSaveCoverImageChange,
}) => {
  if (!isEditCoverPage) return null;
  return (
    <div className="fixed flex items-center justify-center px-[15px] py-[30px] lg:p-8 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 h-screen">
      <div className=" bg-white flex flex-col lg:flex-row overflow-y-scroll lg:overflow-auto p-[30px] rounded-[14px] w-full sm:w-[450px] lg:w-[650px] h-full lg:h-[500px] lg:gap-y-0 gap-y-[100px] gap-x-[30px]">
        <div className="flex-1 flex flex-col items-center">
          <div className="relative lg:overflow-hidden ">
            <div className=" absolute flex flex-col lg:h-full sm:h-[300px] h-[250px] lg:w-full sm:w-[250px] w-[230px]  justify-end p-[15px] top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#009C9C00] via-transparent to-[#003636] rounded-[15px]">
              <p className="font-bold text-[16px] text-white">
                Nicely Curated Suite
              </p>
              <div className="flex items-center mt-[2px] text-white text-[13.5px]">
                <img
                  className="w-[25px] h-[25px] mr-[10px] object-cover rounded-full"
                  src={currentCoverImage[0]?.imagePreview}
                  alt=""
                />
                <p className="text-[13px]">Kemi Adesanya</p>
              </div>
              <div className="w-full flex justify-between mt-[15px]">
                <div className="flex items-center">
                  <i className="fa-regular fa-heart text-white text-[11px] mr-[5px]"></i>
                  <p className="text-white text-[11px]">3k likes</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-eye text-white text-[11px] mr-[5px]"></i>
                  <p className="text-white text-[11px]">4k views</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-bookmark text-white text-[11px] mr-[5px]"></i>
                  <p className="text-white text-[11px]">500 saves</p>
                </div>
              </div>
            </div>
            <img
              className="lg:h-full sm:h-[300px] h-[250px] lg:w-full sm:w-[250px] w-[230px] rounded-[15px] object-cover"
              src={currentCoverImage[0]?.imagePreview}
              alt=""
            />
          </div>
          <div className="w-full flex lg:justify-start justify-center">
            <p className="text-[14px] text-zinc-500 mt-[10px]">
              Cover image review
            </p>
          </div>
        </div>
        <div className="mt-[20px] lg:mt-0 hidden lg:flex justify-between flex-col flex-1 w-full h-full">
          <div className="custom-scrollbar w-full grid grid-cols-2 gap-[10px] overflow-y-auto pr-[10px]">
            {workDetails?.content
              ?.filter((item) => item.type === "image")
              .map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentCoverImage([image])}
                  className="h-full w-full p-[5px] bg-primary-10 cursor-pointer"
                >
                  <img
                    className="w-full h-[120px] object-cover"
                    src={image?.imagePreview}
                    alt="Image preview"
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-between items-center mt-[40px]">
            <p
              onClick={() => setIsEditCoverPage(false)}
              className="text-[14px] cursor-pointer"
            >
              Cancel
            </p>
            <button
              onClick={() => handleSaveCoverImageChange()}
              className="bg-primary-100 text-[14px] w-[180px] py-3 text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-0 "
            >
              Save Changes
            </button>
          </div>
        </div>
        <div className="bg-white w-full flex flex-col sm:flex-row lg:hidden justify-between items-center mt-[40px]">
          <p
            onClick={() => setIsEditCoverPage(false)}
            className="text-[14px] cursor-pointer hidden sm:flex mr-[80px]"
          >
            Cancel
          </p>
          <button
            onClick={() => handleSaveCoverImageChange()}
            className="bg-primary-100 text-[14px]  lg:w-[150px] w-full py-3 text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-[0px] "
          >
            Save Changes
          </button>
          <p
            onClick={() => setIsEditCoverPage(false)}
            className="flex sm:hidden text-[14px] cursor-pointer mt-[20px]"
          >
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadWorkCoverEdit;
