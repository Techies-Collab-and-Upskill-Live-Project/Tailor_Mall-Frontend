import React from "react";
import ReactDOM from "react-dom";

const UploadProjectCoverPage = ({
  isUploadProjectCoverPageOn,
  setIsUploadProjectCoverPageOn,
  coverContent,
  tagInputValue,
  handleTagInputChange,
  uploadProjectTagSugesstion,
  handleAddTagSuggestion,
  setUploadProjectCoverChangePage,
  setUploadProjectSuccess,
  projectUploadDetails,
  setProjectUploadDetails,
  handleSubmitProjectUploadDetails,
}) => {
  if (!isUploadProjectCoverPageOn) return null;

  const handleCategoryChange = (e) => {
    setProjectUploadDetails({
      ...projectUploadDetails,
      [e.target.name]: e.target.value,
    });
  };

  return ReactDOM.createPortal(
    <>
      <div className=" hidden lg:flex fixed top-0 bottom-0 left-0 right-0 bg-white lg:bg-black lg:bg-opacity-40 lg:justify-center lg:items-center lg:h-full  lg:overflow-visible mb-[200px]"></div>

      <div className="fixed bg-white top-0 bottom-0 lg:top-[50%] lg:left-[50%] transform lg:-translate-x-1/2 lg:-translate-y-1/2  pt-[40px] lg:pt-0 grid lg:rounded-[14px] p-[20px] md:px-[150px] lg:p-[35px] w-full lg:w-[800px] h-screen lg:h-[500px] items-center">
        <div className="fixed top-0 right-0 left-0 px-[20px] py-[30px] bg-white lg:hidden flex-1 justify-start flex">
          <button
            onClick={() => setIsUploadProjectCoverPageOn(false)}
            className="w-[110px]  border border-zinc-500 hover:border-primary-100 py-[9px] text-black text-sm rounded-full justify-center"
          >
            cancel
          </button>
        </div>

        <div className="box-border h-[100%] overflow-y-scroll lg:overflow-y-hidden flex justify-center mt-[80px] lg:mt-[70px] flex-col lg:flex-row">
          {/* Left Section: Cover Image */}
          <div className="flex justify-center mt-[500px] lg:mt-0 lg:justify-start lg:flex-1">
            <div className="w-[230px]">
              <img
                className="w-full h-[310px] object-cover rounded-[15px]"
                src={coverContent?.imagePreview}
                alt="Cover"
              />
              <div className="w-full flex justify-between mt-[10px]">
                <p className="text-[14px] text-zinc-500">Cover Image</p>
                <p
                  onClick={() => setUploadProjectCoverChangePage(true)}
                  className="text-[14px] cursor-pointer text-primary-100"
                >
                  Edit
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col lg:mb-0 lg:flex-1 mt-[40px] lg:mt-0 h-full">
            {/* Category Selection */}
            <div>
              <p className="font-semibold text-[15px]">Category</p>
              <select
                name="category"
                onChange={handleCategoryChange}
                className="mt-[5px] text-[15px] w-full h-[32px] border-[1.5px] rounded-[7px] outline-none px-[5px]"
              >
                <option value="">Select Category</option>
                <option value="Art">Art</option>
                <option value="Photography">Photography</option>
                <option value="Design">Design</option>
              </select>
            </div>

            {/* Tags */}
            <div className="mt-[25px] w-full">
              <p className="font-semibold text-[15px]">Add tags</p>
              <p className="text-[13px] mt-[10px] text-zinc-600">
                This enhances the chances of your project being seen in search.
              </p>
              <input
                className="h-[32px] border-[1.5px] w-full outline-none rounded-[7px] mt-[5px] px-[10px] text-[14px]"
                type="text"
                name="tags"
                value={tagInputValue}
                onChange={handleTagInputChange}
              />
              <p className="mt-[8px] text-[14px] text-zinc-600">Suggestions:</p>
              <div className="flex flex-wrap lg:justify-start gap-[10px] mt-[5px]">
                {uploadProjectTagSugesstion.map((suggestion, index) => (
                  <p
                    key={index}
                    onClick={() => handleAddTagSuggestion(suggestion)}
                    className="px-[18px] py-[6px] rounded-full text-[11px] text-primary-100 bg-primary-10 cursor-pointer"
                  >
                    {suggestion}
                  </p>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div className="mt-[25px] pb-[300px] lg:mb-0">
              <p className="font-semibold text-[15px]">
                Collaboration (optional)
              </p>
              <p className="text-[13px] mt-[5px] text-zinc-600">
                You can add co-owners here (username)
              </p>
              <input
                className="h-[32px] border-[1.5px] w-full outline-none rounded-[7px] mt-[5px] px-[10px] text-[15px]"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className=" fixed bg-white bottom-0  py-5 px-5 md:px-[35px]  border-t lg:border-t-0 lg:mt-[30px] w-full flex justify-between items-center">
          <div className=" lg:flex flex-1 justify-start hidden">
            <p
              onClick={() => setIsUploadProjectCoverPageOn(false)}
              className="text-black text-[14px] cursor-pointer"
            >
              Cancel
            </p>
          </div>
          <div className="flex flex-1 items-center flex-col sm:flex-row lg:w-[350px] w-full justify-center gap-x-[20px]">
            <button className="flex w-full py-3 text-primary-100 text-sm rounded-full justify-center border-[1px] border-primary-100 ">
              Save as draft
            </button>
            <button
              onClick={() => handleSubmitProjectUploadDetails()}
              className="bg-primary-100 text-[14px] w-full py-3 text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-0 "
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("rootTwo")
  );
};

export default UploadProjectCoverPage;
