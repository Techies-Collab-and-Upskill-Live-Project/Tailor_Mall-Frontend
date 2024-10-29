import React, { useState, useEffect, useRef } from "react";
import NavWlogoNborderLine from "../../components/Navbar/NavWlogoNborderLine";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UploadWorkCancel from "./UploadWorkCancel";
import UploadWorkText from "./UploadWorkText";
import UploadWorkCover from "./UploadWorkCover";
import UploadWorkSuccess from "./UploadWorkSuccess";
import UploadWorkCoverEdit from "./UploadWorkCoverEdit";

const UploadWorkForm1 = () => {
  const endOfContentRef = useRef(null);
  const [workPlusOption, SetWorkPlusOption] = useState(false);
  const [isCancelPage, setIsCancelPage] = useState(false);
  const [isTextPage, setIsTextPage] = useState(false);
  const [isCoverPage, setIsCoverPage] = useState(false);
  const [isEditCoverPage, setIsEditCoverPage] = useState(false);
  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentCoverImage, setCurrentCoverImage] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [workDetails, setworkDetails] = useState({
    name: "",
    category: "",
    tags: [],
    content: [],
    coverImage: [],
  });

  const handleSubmitWorkDetails = async () => {
    if (!workDetails.category) {
      return toast.error("Please select a category.");
    }

    try {
      const response = await axios.post(
        `${baseUrl}/portfolio/update/userId`,
        projectUploadDetails
      );

      console.log("Project details submitted successfully:", response.data);
      setProjectUploadDetails({
        name: "",
        category: "",
        tags: [],
        content: [],
        coverImage: [],
      });
      handleToSucessPage();
      toast.success("Project details submitted successfully!");
    } catch (error) {
      console.error("Error submitting project details:", error);
      toast.error("Failed to submit project details. Please try again.");
    }
  };

  useEffect(() => {
    console.log(workDetails);
    console.log(currentCoverImage);
    // console.log("this is the cover Image", workDetails.coverImage);
  }, [workDetails]);

  // Scroll to the end of the content list after updates
  useEffect(() => {
    if (endOfContentRef.current) {
      // Wait for the DOM to render the changes
      setTimeout(() => {
        endOfContentRef.current.scrollIntoView({ behavior: "smooth" });
      }, 1);
    }
  }, [workDetails.content]);

  const navigateTo = useNavigate();

  const handleWorkTitleChange = (e) => {
    setworkDetails({
      ...workDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageTriggerClick = () => {
    SetWorkPlusOption(false);
    const uploadImageInput = document.getElementById("uploadImageInput");
    if (uploadImageInput) {
      uploadImageInput.click(); // Trigger the file input's click event
    }
  };

  const handleImageChange = (e) => {
    const imageFiles = Array.from(e.target.files); // Convert FileList to an array

    // Create image objects with preview URLs
    const newImages = imageFiles.map((file) => ({
      type: "image",
      imageFile: file,
      imagePreview: URL.createObjectURL(file), // Create a preview URL for the file
    }));

    // Update workDetails to include the uploaded image(s)
    setworkDetails((prevDetails) => ({
      ...prevDetails,
      content: [...(prevDetails.content || []), ...newImages], // Spread previous images and add new ones
    }));

    // console.log(newImages);
  };

  const handleGridTriggerClick = () => {
    SetWorkPlusOption(false);
    const uploadGridInput = document.getElementById("uploadGridInput");
    if (uploadGridInput) {
      uploadGridInput.click();
    }
  };

  const handleGridChange = (e) => {
    const gridFiles = Array.from(e.target.files); // Convert FileList to an array

    if (gridFiles.length > 3) {
      toast.error("You can only select up to 3 images.");
      return;
    }

    // Create preview objects for each file
    const newGridImages = gridFiles.map((file) => ({
      preview: URL.createObjectURL(file),
    }));

    // Update workDetails to include the uploaded grids
    setworkDetails((prevDetails) => ({
      ...prevDetails,
      content: [
        ...(prevDetails.content || []),
        { type: "grid", gridFiles, gridPreview: newGridImages },
      ],
    }));

    console.log(newGridImages);
  };

  const handleVideoTriggerClick = () => {
    SetWorkPlusOption(false);
    const uploadVideoInput = document.getElementById("uploadVideoInput");
    if (uploadVideoInput) {
      uploadVideoInput.click();
    }
  };

  const handleVideoChange = (e) => {
    const videoFiles = Array.from(e.target.files);

    // Create new video objects with previews
    const newVideo = videoFiles.map((file) => ({
      type: "video",
      file,
      videoPreview: URL.createObjectURL(file), // Create a preview URL
    }));

    // Update workDetails to include the uploaded video
    setworkDetails((prevDetails) => ({
      ...prevDetails,
      content: [...(prevDetails.content || []), ...newVideo], // Spread previous video and add new ones
    }));

    console.log("Selected videos:", newVideo);
  };

  const handleShowCancelPage = () => {
    if (workDetails.content.length > 0 || workDetails.name.trim()) {
      setIsCancelPage(true);
      return;
    }
    navigateTo("/upload-work");
  };

  const handleCancelUploadWork = () => {
    setworkDetails({ name: "", category: "", tags: [], content: [] });
    navigateTo("/upload-work");
  };

  const handleToUploadWork2 = () => {
    // Check for valid input in workDetails
    if (workDetails?.name.trim() === "") {
      toast.error("Please add a title to proceed.");
    } else if (
      !workDetails.content.some((project) => project.type === "image")
    ) {
      toast.error("Please upload at least one image to continue.");
    } else if (
      !workDetails.content.some((project) => project.type === "text")
    ) {
      toast.error("Please add text content to continue.");
    } else {
      setIsCoverPage(true);
    }
  };

  const handleToTextPage = () => {
    setIsTextPage(true);
    SetWorkPlusOption(false);
  };

  const handleSubmitText = () => {
    const text = currentText.trim();

    if (text) {
      const newTextContent = {
        type: "text",
        text: text,
      };

      setworkDetails((prevContent) => ({
        ...prevContent,
        content: [...prevContent.content, newTextContent],
      }));
      setCurrentText("");
    }

    setIsTextPage(false);
  };

  const handleTextChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleSaveCoverImageChange = () => {
    setworkDetails((prevDetails) => ({
      ...prevDetails,
      coverImage: currentCoverImage,
    }));
    setIsEditCoverPage(false);
  };

  const handleToSucessPage = () => {
    setIsCoverPage(false);
    setIsSuccessPage(true);
  };

  const handleClearSuccessPage = () => {
    setIsSuccessPage(false);
  };

  // This Codes Sets the workDetails Cover Image
  useEffect(() => {
    // Find the first image in content
    const firstImage = workDetails?.content?.find(
      (content) => content.type === "image"
    );

    // Update coverImage only if it's different from the current one
    if (
      firstImage &&
      firstImage.imagePreview !== workDetails?.coverImage?.imagePreview
    ) {
      setworkDetails((prevDetails) => ({
        ...prevDetails,
        coverImage: [firstImage], // Set first image as cover image
      }));
    }
  }, [workDetails.content]);

  // This Codes Sets the current Cover Image
  useEffect(() => {
    // Find the first image in content
    const firstImage = workDetails?.content?.find(
      (content) => content.type === "image" && content.imagePreview
    );

    // If a valid first image is found, set it as the current cover image
    if (firstImage) {
      setCurrentCoverImage([firstImage]);
    }
  }, [workDetails.content]);

  return (
    <>
      <NavWlogoNborderLine />
      <div id="uploadForm" className="flex-col h-full mt-[50px]">
        <div className="lg:z-0 flex w-full flex-col h-full justify-between lg:flex-row lg:gap-x-[50px]">
          <div className=" flex-1 w-full lg:h-full lg:mt-[50px] lg:mb-[100px] mb-[200px]">
            <div className="px-5 sm:px-14 w-full h-full">
              <div
                onClick={() => handleShowCancelPage()}
                className=" py-[5px] px-[30px] max-w-max rounded-full border-[1.5px] border-zinc-300 cursor-pointer"
              >
                <p className="text-[14px] text-zinc-500">Cancle</p>
              </div>
              <div className=" mt-4 py-[5px] border-b border-y-primary-50">
                <input
                  className="w-full px-[10px] border-none outline-none h-[30px] placeholder:md:text-[16px] placeholder:text-[15px] text-16px font-semibold "
                  placeholder="Name your project"
                  name="name"
                  type="text"
                  onChange={handleWorkTitleChange}
                />
              </div>
              <div className="mt-[10px] overflow-y-scroll lg:overflow-auto">
                {workDetails?.content?.length === 0 ? (
                  <div className="hidden lg:flex flex-col lg:mt-[40px] items-center justify-center h-[400px] rounded-[20px] border-dashed border-[1px] border-zinc-600">
                    <p className="text-gray-500 text-[16px]">Create a post</p>
                    <div className="mt-7 flex w-[400px] justify-between">
                      <div className="flex flex-col items-center cursor-pointer">
                        <i className="fa-solid fa-pen-to-square p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                        <p className="mt-[5px] text-[13px] text-gray-500">
                          Text
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer">
                        <i className="fa-solid fa-image p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                        <p className="mt-[5px] text-[13px] text-gray-500">
                          Image
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer">
                        <i className="fa-solid fa-border-all p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                        <p className="mt-[5px] text-[13px] text-gray-500">
                          Photo Grid
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer">
                        <i className="fa-solid fa-circle-play p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                        <p className="mt-[5px] text-[13px] text-gray-500">
                          Video
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer">
                        <i className="fa-solid fa-code p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                        <p className="mt-[5px] text-[13px] text-gray-500">
                          Embed
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" ">
                    {workDetails?.content?.map((cont, index) => (
                      <div key={index} className="my-[20px]">
                        {cont.type === "image" ? (
                          <img
                            src={cont.imagePreview}
                            className="w-full h-full"
                            alt="Image preview"
                          />
                        ) : cont.type === "text" ? (
                          <p className="text-gray-500 text-[16px]">
                            {cont.text}
                          </p>
                        ) : cont.type === "grid" &&
                          Array.isArray(cont.gridPreview) ? (
                          <div className="flex">
                            {cont.gridPreview.map((image, imgIndex) => (
                              <div key={imgIndex} className="flex-1">
                                <img
                                  src={image.preview}
                                  className="h-[190px] md:h-[310px] object-cover w-full"
                                  alt={`Grid Image ${imgIndex + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : cont.type === "video" ? (
                          <div className="w-full">
                            <video width="100%" autoPlay muted>
                              <source
                                src={cont.videoPreview}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
                <div ref={endOfContentRef} />
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-[350px] lg:pr-14 flex flex-col items-center">
            <div className="hidden lg:w-[200px] mt-20 lg:grid grid-cols-2 gap-y-[25px] justify-center items-center">
              <div
                onClick={() => handleToTextPage()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-pen-to-square p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Text</p>
              </div>
              <div
                id="uploadImageTrigger"
                onClick={() => handleImageTriggerClick()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-image p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Image</p>
              </div>
              <div
                id="uploadGridInputTrigger"
                onClick={() => handleGridTriggerClick()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-border-all p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Photo Grid</p>
              </div>
              <div
                id="uploadVideoInputTrigger"
                onClick={() => handleVideoTriggerClick()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-circle-play p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Video</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-solid fa-code p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Embed</p>
              </div>
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              id="uploadImageInput"
              multiple
              className="hidden"
            />
            <input
              type="file"
              onChange={handleGridChange}
              id="uploadGridInput"
              multiple
              className="hidden"
            />
            <input
              type="file"
              accept="video/mp4, video/webm, video/ogg"
              id="uploadVideoInput"
              onChange={handleVideoChange}
              className="hidden"
            />
            <div className="flex flex-col justify-center md:justify-end lg:items-center w-full lg:w-[250px] lg:mt-[20px] fixed bottom-0 lg:static gap-y-[20px]">
              <div className=" lg:hidden flex flex-col justify-center items-end bg-transparent mr-[20px]">
                <div
                  className={`${
                    workPlusOption ? "flex" : "hidden"
                  } flex-col items-center px-[] gap-y-[13px] xl:hidden bg-white p-[10px]`}
                >
                  <div
                    onClick={() => handleToTextPage()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-pen-to-square  text-primary-100 bg-primary-50 px-[13px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Text</p>
                  </div>
                  <div
                    onClick={() => handleImageTriggerClick()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-image  text-primary-100 bg-primary-50 px-[11.5px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Image</p>
                  </div>
                  <div
                    id="uploadGridInputTrigger"
                    onClick={() => handleGridTriggerClick()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-border-all  text-primary-100 bg-primary-50 px-[13px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Grid</p>
                  </div>
                  <div
                    onClick={() => handleVideoTriggerClick()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i class="fa-solid fa-circle-play text-primary-100 bg-primary-50 px-[12.5px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Video</p>
                  </div>
                  <div className="flex flex-col  max-w-max gap-y-[3px]">
                    <i class="fa-solid fa-code text-primary-100 bg-primary-50 px-[10px] py-[11px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Embed</p>
                  </div>
                </div>
                <div
                  onClick={() => SetWorkPlusOption((prev) => !prev)}
                  className={`${
                    workPlusOption ? "bg-white" : "bg-transparent mb-[20px] "
                  } p-[10.5px]`}
                >
                  <i
                    className={`${
                      workPlusOption ? "hidden" : "flex"
                    } fa-solid fa-plus bg-primary-100 text-primary-50 rounded-full px-[13px] py-[12px] cursor-pointer`}
                  ></i>
                  <i
                    className={`${
                      workPlusOption ? "flex" : "hidden"
                    } fa-solid fa-xmark bg-primary-100 text-primary-50 rounded-full px-[14px] py-[12px] cursor-pointer`}
                  ></i>
                </div>
              </div>
              <div
                className={`${
                  workPlusOption ? "hidden" : "flex"
                }  lg:w-full px-5 md:px-10 lg:px-0 py-5 lg:py-0 flex-col md:flex-row lg:flex-col items-center gap-x-[20px] gap-y-[20px] border-t lg:border-none bg-white`}
              >
                <button
                  onClick={() => handleSaveProjectUploadAsDraft()}
                  className={`${
                    workDetails?.content.length > 0 && workDetails.name.trim()
                      ? "flex"
                      : "hidden"
                  } w-full py-3 text-primary-100 text-sm rounded-full justify-center lg:flex lg:mt-[20px] border-[1px] border-primary-100  `}
                >
                  Save as draft
                </button>
                <button
                  onClick={() => handleToUploadWork2()}
                  className=" justify-center bg-primary-100 w-full py-3 text-white text-sm rounded-full border-[1px]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadWorkCancel
        isCancelPage={isCancelPage}
        handleCancelUploadWork={handleCancelUploadWork}
      />
      <UploadWorkText
        isTextPage={isTextPage}
        currentText={currentText}
        handleTextChange={handleTextChange}
        handleSubmitText={handleSubmitText}
      />
      <UploadWorkCover
        isCoverPage={isCoverPage}
        setIsCoverPage={setIsCoverPage}
        workDetails={workDetails}
        tagInputValue={tagInputValue}
        setTagInputValue={setTagInputValue}
        setworkDetails={setworkDetails}
        handleSubmitWorkDetails={handleSubmitWorkDetails}
        setIsEditCoverPage={setIsEditCoverPage}
      />
      <UploadWorkSuccess
        isSuccessPage={isSuccessPage}
        handleClearSuccessPage={handleClearSuccessPage}
      />
      <UploadWorkCoverEdit
        isEditCoverPage={isEditCoverPage}
        setIsEditCoverPage={setIsEditCoverPage}
        workDetails={workDetails}
        currentCoverImage={currentCoverImage}
        setCurrentCoverImage={setCurrentCoverImage}
        handleSaveCoverImageChange={handleSaveCoverImageChange}
      />
    </>
  );
};

export default UploadWorkForm1;
