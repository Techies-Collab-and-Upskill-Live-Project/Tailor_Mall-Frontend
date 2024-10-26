import React from "react";
import ReactDOM from "react-dom";
import placeHolder from "../Assets/placeHolder.jpg";

const ProjectCoverChangePage = ({
  isUploadProjectCoverChangePageOn,
  setIsUploadProjectCoverChangePageOn,
  handleZoomIn,
  handleZoomOut,
  zoomScale,
  setZoomScale,
  zoomTranslate,
  setZoomTranslate,
  uploadedImages,
  handleZoomChange,
  projectCoverContent,
  setProjectCoverContent,
  projectCoverImageChange,
  handleProjectCoverImageChange,
  setProjectCoverImageChange,
}) => {
  if (!isUploadProjectCoverChangePageOn) return null;



  return ReactDOM.createPortal(
    <>
      <div className="fixed  p-10 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 h-full overflow-visible">
        <div className="fixed flex flex-col lg:flex-row overflow-y-scroll lg:overflow-y-visible top-[30px] sm:top-[50px] bottom-[40px] lg:top-[50%] lg:left-[50%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white pt-[40px] lg:pt-0 rounded-[14px] px-[20px] xl:p-[35px] w-[300px] sm:w-[450px] lg:w-[650px] h-full lg:h-[500px] items-center gap-x-[40px]">
          <div className=" flex-1 w-full h-full">
            <div className="relative overflow-hidden h-[350px]">
              <div className="absolute flex flex-col justify-end p-[15px] top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#009C9C00] via-transparent to-[#003636] rounded-[15px]">
                <p className="font-bold text-[16px] text-white">
                  Nicely Curated Suite
                </p>
                <div className="flex items-center mt-[2px] text-white text-[13.5px]">
                  <img
                    className="w-[25px] h-[25px] mr-[10px] object-cover rounded-full"
                    src={projectCoverImageChange?.imagePreview}
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
                className="h-full w-full rounded-[15px] object-cover"
                src={projectCoverImageChange?.imagePreview}
                alt=""
              />
            </div>
            <p className="text-[14px] text-zinc-500 mt-[10px]">
              Cover image review
            </p>
          </div>
          <div className=" mt-[50px] lg:mt-0 hidden lg:flex justify-between flex-col flex-1 w-full h-full">
            <div className="custom-scrollbar w-full grid grid-cols-2 gap-[10px] overflow-y-scroll pr-[10px]">
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setProjectCoverImageChange(image)}
                  className="h-full w-full p-[5px] bg-primary-10 cursor-pointer"
                >
                  <img
                    className="w-full h-[120px] object-cover"
                    src={image?.imagePreview}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <p
                onClick={() => setIsUploadProjectCoverChangePageOn(false)}
                className="text-[14px] cursor-pointer"
              >
                Cancel
              </p>
              <button
                onClick={() => handleProjectCoverImageChange()}
                className="bg-primary-100 text-[14px] w-[150px] py-[8px] text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-0 "
              >
                Save Changes
              </button>
            </div>
          </div>
          <div className=" flex lg:hidden justify-between items-center mt-[40px]">
            <p
              onClick={() => setIsUploadProjectCoverChangePageOn(false)}
              className="text-[14px] cursor-pointer"
            >
              Cancel
            </p>
            <button
              onClick={() => handleProjectCoverImageChange()}
              className="bg-primary-100 text-[14px] w-[150px] py-[8px] text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-0 "
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("rootTwo")
  );
};

export default ProjectCoverChangePage;
