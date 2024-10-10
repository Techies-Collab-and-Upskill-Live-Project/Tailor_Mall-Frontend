import React, { useState, useEffect } from "react";
import logo from "./Assets/logo.png";
import { CiText } from "react-icons/ci";
import successImg from "./Assets/successImg.svg";
import { toast } from "sonner";
import NavWlogoNborderLine from "../../components/Navbar/NavWlogoNborderLine";
import axios from "axios";

const UploadProject = () => {
  const [uploadProjectHomePage, setUploadProjectHomePage] = useState(true);
  const [uploadProjectFormPage, setUploadProjectFormPage] = useState(false);
  const [uploadProjectCoverPage, setUploadProjectCoverPage] = useState(false);
  const [uploadProjectCancelPage, setUploadProjectCancelPage] = useState(false);
  const [uploadProjectPlusOption, setUploadProjectPlusOption] = useState(false);
  const [uploadProjectTextScreen, setUploadProjectTextScreen] = useState(false);
  const [uploadProjectCoverChangePage, setUploadProjectCoverChangePage] =
    useState(false);
  const [textScreenCurrentText, setTextScreenCurrentText] = useState("");
  const [projectTitle, setprojectTitle] = useState("");
  const [projectContent, setProjectContent] = useState([]);
  const [projectCoverContent, setProjectCoverContent] = useState([]);
  const [projectUploadTags, setProjectUploadTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");

  const handleToUploadProjectFormPage = () => {
    setUploadProjectFormPage(true);
    setUploadProjectHomePage(false);
  };

  const handleToUploadProjectCoverPage = () => {
    const checkIfImageIsUploaded = projectContent.find(
      (project) => project.type === "image"
    );

    if (projectContent.length === 0 || !projectTitle.trim()) {
      toast.error("Please upload content and add a title to continue.");
    } else if (!checkIfImageIsUploaded) {
      toast.error("Please upload at least one image to continue.");
    } else {
      setUploadProjectCoverPage(true);
    }
  };

  const handleToCancelProjectUploadPage = () => {
    if (projectContent.length > 0 || projectTitle.trim()) {
      setUploadProjectCancelPage(true);
      return;
    }

    setUploadProjectHomePage(true);
    setUploadProjectFormPage(false);
  };

  const handleCancelProjectUpload = () => {
    setprojectTitle("");
    setProjectContent([]);
    setProjectCoverContent([]);
    setUploadProjectHomePage(true);
    setUploadProjectFormPage(false);
    setUploadProjectCancelPage(false);
  };

  const handleToUploadTextScreenPage = () => {
    setUploadProjectTextScreen(true);
    setUploadProjectPlusOption(false);
  };

  const handleUploadProjectTitleChange = (e) => {
    setprojectTitle(e.target.value);
  };

  const handleUploadTextContentChange = (e) => {
    setTextScreenCurrentText(e.target.value);
  };

  const handleSubmitUploadTextContent = () => {
    const text = textScreenCurrentText.trim();

    if (text) {
      const newTextContent = {
        type: "text",
        text: text,
      };

      setProjectContent((prevContent) => [...prevContent, newTextContent]);
      setTextScreenCurrentText("");
    }

    // close the upload text screen (even if input is empty)
    setUploadProjectTextScreen(false);
  };

  const handleUploadProjectImageTriggerClick = () => {
    setUploadProjectPlusOption(false);
    const uploadImageInput = document.getElementById("uploadImageInput");
    if (uploadImageInput) {
      uploadImageInput.click(); // Trigger the file input's click event
    }
  };

  const handleUploadProjectImageChange = (e) => {
    const imageFile = Array.from(e.target.files); // Convert FileList to an array
    console.log(imageFile);

    const newImages = imageFile.map((file) => ({
      type: "image",
      imageFile,
      imagePreview: URL.createObjectURL(file), // Create a preview URL for the file
    }));

    setProjectContent((prevContent) => {
      if (prevContent.length === 0) {
        return newImages; // If no images have been selected yet, just set the new files
      } else {
        return [...prevContent, ...newImages]; // Append new files to the existing ones
      }
    });

    console.log(newImages);
  };

  const handleUploadProjectGridTriggerClick = () => {
    setUploadProjectPlusOption(false);
    const uploadGridInput = document.getElementById("uploadGridInput");
    if (uploadGridInput) {
      uploadGridInput.click();
    }
  };

  const handleUploadProjectGridChange = (e) => {
    const gridFiles = Array.from(e.target.files); // Convert FileList to an array
    console.log(gridFiles);

    if (gridFiles.length > 3) {
      toast.error("You can only select up to 3 images.");
      return;
    }

    const newGridImages = gridFiles.map((file) => ({
      preview: URL.createObjectURL(file),
    }));

    setProjectContent((prevContent) => [
      ...prevContent,
      { type: "grid", gridFiles, gridPreview: newGridImages },
    ]);

    console.log(projectContent);
  };

  const handleUploadProjectVideoTriggerClick = () => {
    setUploadProjectPlusOption(false);
    const uploadVideoInput = document.getElementById("uploadVideoInput");
    if (uploadVideoInput) {
      uploadVideoInput.click();
    }
  };

  const handleUploadProjectVideoChange = (e) => {
    const videoFiles = Array.from(e.target.files);

    const newVideo = videoFiles.map((file) => ({
      type: "video",
      videoFiles,
      videoPreview: URL.createObjectURL(file),
    }));

    setProjectContent((prevContent) => {
      return [...prevContent, ...newVideo];
    });

    console.log("Selected videos:", newVideo);
  };

  useEffect(() => {
    const firstImage = projectContent.find(
      (content) => content.type === "image"
    );
    if (firstImage) {
      setProjectCoverContent(firstImage);
    }
  }, [projectContent]);

  const handleToUploadProjectSucessPage = () => {
    setReadyToUpload(false);
    setUploadSuccess(true);
  };

  //Undone//: Page Commin Soon
  const handleCoverPictureChange = (newCoverImage) => {
    // Check if the selected image exists and is valid
    if (newCoverImage && newCoverImage.type === "image") {
      setCoverPicture(newCoverImage); // Update the cover picture with the selected image
      setShowCoverSelection(false); // Close the modal/dialog for image selection
    }
  };

  const handleSaveProjectUploadAsDraft = async () => {
    if (projectTitle.trim() === "" || projectContent.length < 1) {
      toast.error(
        "Please provide a title and upload content to save as a draft."
      );
      return;
    }

    const uploadProjectDraft = {
      content: "uploadUprojectDraft",
      uploadProjectTitle: projectTitle,
      uploadProjectContent: projectContent,
      uploadProjectCoverImage: projectCoverContent,
      uploadProjectTags: projectUploadTags,
    };

    try {
      const response = await axios.post("/api/drafts", uploadProjectDraft);
      // Handle the response as needed
      toast.success("Draft saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("Failed to save draft. Please try again.");
    }
  };

  const uploadProjectTagSugesstion = [
    "#Designs",
    "#FashionCollab",
    "#StyleShowcase",
  ];

  const handleAddTagSuggestion = (suggestedTag) => {
    const formattedTag = suggestedTag.startsWith("#")
      ? suggestedTag
      : `#${suggestedTag}`;

    // Update the state to include the new tag if it's not already in the list
    setTagInputValue((prevTags) => {
      // Split current input into an array of tags
      const tagArray = prevTags.trim() ? prevTags.split(" ") : [];

      // Add the new tag if it's not already in the array
      if (!tagArray.includes(formattedTag)) {
        tagArray.push(formattedTag);
      }

      // Return the updated array of tags as a space-separated string
      return tagArray.join(" ");
    });
  };

  const handleTagInputChange = (e) => {
    const input = e.target.value;

    // Split by spaces to handle multiple tags
    const tags = input
      .split(" ")
      .filter((tag) => tag.trim() !== "") // Filter out any empty tags
      .map((tag) => (tag.startsWith("#") ? tag : `#${tag.trim()}`)); // Ensure every tag starts with '#'

    // Set the text input value (whatever user is typing)
    setTagInputValue(input);

    // Update the projectUploadTags state
    setProjectUploadTags(tags);
  };

  console.log(projectContent);
  console.log(projectTitle);
  console.log(projectCoverContent);
  console.log(projectUploadTags);

  return (
    <div className="relative h-full">
      <div
        className={`${
          uploadProjectHomePage ? "flex" : "hidden"
        } w-full flex-col h-[100vh]`}
      >
        <NavWlogoNborderLine />
        <div className=" px-5 md:px-10 my-20 flex flex-col h-full flex-grow items-center justify-center">
          <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
            Upload work
          </p>
          <p className="text-secondary mt-2 sm:mt-5 w-full sm:w-[550px] text-center text-[14px]">
            Upload Your Tailoring Creations to Showcase Your Skills and Attract
            Clients or Collaborators Looking for Unique Fashion Talent
          </p>
          <div className="mt-2 sm:mt-5 flex md:flex-row flex-col gap-y-[20px] gap-x-[20px]">
            <button className="text-primary-100 w-[250px] py-3 border border-white hover:border-primary-100 md:mr-3 text-sm rounded-full ">
              Skip
            </button>
            <button
              onClick={() => handleToUploadProjectFormPage()}
              className="bg-primary-100 w-[250px] py-3 text-primary-50 text-sm rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div
        id="uploadForm"
        className={`${
          uploadProjectFormPage ? "flex" : "hidden"
        } flex-col h-full z-0`}
      >
        <NavWlogoNborderLine />
        <div className=" flex w-full flex-col h-full justify-between lg:flex-row lg:gap-x-[50px]">
          <div className=" flex-1 w-full lg:h-full lg:mt-[50px] lg:mb-[100px] mb-[200px]">
            <div className="px-5 md:pl-14 w-full h-full">
              <div
                onClick={() => handleToCancelProjectUploadPage()}
                className=" py-[5px] px-[30px] max-w-max rounded-full border-[1.5px] border-zinc-300 cursor-pointer"
              >
                <p className="text-[14px] text-zinc-500">Cancle</p>
              </div>
              <div className=" mt-4 py-[5px] border-b border-y-primary-50">
                <input
                  className="w-full px-[10px] border-none outline-none h-[30px] placeholder:md:text-[16px] placeholder:text-[15px] text-16px font-semibold "
                  placeholder="Name your project"
                  value={projectTitle}
                  type="text"
                  onChange={handleUploadProjectTitleChange}
                />
              </div>
              <div className="mt-[10px] overflow-y-scroll lg:overflow-auto">
                {projectContent.length === 0 ? (
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
                  <div className="">
                    {projectContent.map((content, index) => (
                      <div key={index} className="my-[20px]">
                        {content.type === "image" ? (
                          <img
                            src={content.imagePreview}
                            className="w-full h-full"
                            alt="preview"
                          />
                        ) : content.type === "text" ? (
                          <p className="text-gray-500 text-[16px]">
                            {content.text}
                          </p>
                        ) : content.type === "grid" &&
                          Array.isArray(content.gridPreview) ? (
                          <div className="flex">
                            {content.gridPreview.map((image, imgIndex) => (
                              <div key={imgIndex} className="flex-1">
                                <img
                                  src={image.preview}
                                  className=" h-[190px] md:h-[310px] object-cover w-full"
                                  alt={`Grid Image ${imgIndex + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : content.type === "video" ? (
                          <div className="w-full">
                            <video width="100%" autoPlay muted>
                              <source
                                src={content.videoPreview}
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
              </div>
            </div>
          </div>

          <div className=" w-full lg:w-[350px] lg:pr-14 flex flex-col items-center">
            <div className="hidden lg:w-[200px] mt-20 lg:grid grid-cols-2 gap-y-[25px] justify-center items-center">
              <div
                onClick={() => handleToUploadTextScreenPage()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-pen-to-square p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Text</p>
              </div>
              <div
                id="uploadImageTrigger"
                onClick={() => handleUploadProjectImageTriggerClick()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-image p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Image</p>
              </div>
              <div
                id="uploadGridInputTrigger"
                onClick={() => handleUploadProjectGridTriggerClick()}
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fa-solid fa-border-all p-[12px] rounded-[10px] text-[20px] text-primary-100 bg-primary-50"></i>
                <p className="mt-[5px] text-[13px] text-gray-500">Photo Grid</p>
              </div>
              <div
                id="uploadVideoInputTrigger"
                onClick={() => handleUploadProjectVideoTriggerClick()}
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
              onChange={handleUploadProjectImageChange}
              id="uploadImageInput"
              className="hidden"
            />
            <input
              type="file"
              onChange={handleUploadProjectGridChange}
              id="uploadGridInput"
              multiple
              className="hidden"
            />
            <input
              type="file"
              accept="video/mp4, video/webm, video/ogg"
              id="uploadVideoInput"
              onChange={handleUploadProjectVideoChange}
              className="hidden"
            />

            <div className="flex flex-col justify-center md:justify-end lg:items-center w-full lg:w-[250px] lg:mt-[20px] fixed bottom-0 lg:static gap-y-[20px]">
              <div className=" lg:hidden flex flex-col justify-center items-end bg-transparent mr-[20px]">
                <div
                  className={`${
                    uploadProjectPlusOption ? "flex" : "hidden"
                  } flex-col items-center px-[] gap-y-[13px] xl:hidden bg-white p-[10px]`}
                >
                  <div
                    onClick={() => handleToUploadTextScreenPage()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-pen-to-square  text-primary-100 bg-primary-50 px-[13px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Text</p>
                  </div>
                  <div
                    onClick={() => handleUploadProjectImageTriggerClick()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-image  text-primary-100 bg-primary-50 px-[11.5px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Image</p>
                  </div>
                  <div
                    id="uploadGridInputTrigger"
                    onClick={() => handleUploadProjectGridTriggerClick()}
                    className="flex flex-col justify-center items-center max-w-max gap-y-[3px]"
                  >
                    <i className="fa-solid fa-border-all  text-primary-100 bg-primary-50 px-[13px] py-[11.5px] text-[15px] rounded-[12px]"></i>
                    <p className="text-[12px]">Grid</p>
                  </div>
                  <div
                    onClick={() => handleUploadProjectVideoTriggerClick()}
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
                  onClick={() => setUploadProjectPlusOption((prev) => !prev)}
                  className={`${
                    uploadProjectPlusOption
                      ? "bg-white"
                      : "bg-transparent mb-[20px] "
                  } p-[10.5px]`}
                >
                  <i
                    className={`${
                      uploadProjectPlusOption ? "hidden" : "flex"
                    } fa-solid fa-plus bg-primary-100 text-primary-50 rounded-full px-[13px] py-[12px] cursor-pointer`}
                  ></i>
                  <i
                    className={`${
                      uploadProjectPlusOption ? "flex" : "hidden"
                    } fa-solid fa-xmark bg-primary-100 text-primary-50 rounded-full px-[14px] py-[12px] cursor-pointer`}
                  ></i>
                </div>
              </div>
              <div
                className={`${
                  uploadProjectPlusOption ? "hidden" : "flex"
                }  lg:w-full px-5 md:px-10 lg:px-0 py-5 lg:py-0 flex-col md:flex-row lg:flex-col items-center gap-x-[20px] gap-y-[20px] border-t lg:border-none bg-white`}
              >
                <button
                  className={`${
                    projectContent.length > 0 ? "flex" : "hidden"
                  } w-full py-3 text-primary-100 text-sm rounded-full justify-center lg:flex lg:mt-[20px] border-[1px] border-primary-100  `}
                >
                  Save as draft
                </button>
                <button
                  onClick={() => handleToUploadProjectCoverPage()}
                  className=" justify-center bg-primary-100 w-full py-3 text-primary-50 text-sm rounded-full border-[1px]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          uploadProjectTextScreen ? "flex" : "hidden"
        }  fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 justify-center items-center h-screen px-[20px] `}
      >
        <div className="flex flex-col justify-between p-[25px] rounded-[10px] bg-white w-full h-[370px] md:h-[300px] md:w-[550px]">
          <textarea
            className="w-full outline-none rounded-[10px] p-[15px] border-[1.5px] h-[260px] md:h-[200px] resize-none text-[14px] md:text-[16px] placeholder:text-[]"
            placeholder="Say something about your project ..."
            value={textScreenCurrentText}
            onChange={handleUploadTextContentChange}
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={() => handleSubmitUploadTextContent()}
              className="bg-primary-100 text-white text-[13px] px-[50px] py-[7px] rounded-full"
            >
              Add Text
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          uploadProjectCancelPage ? "flex" : "hidden"
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
            <button className="bg-primary-100 text-white text-[12px] w-full py-[8px] rounded-full cursor-pointer">
              Save to Draft
            </button>
          </div>
          <div className="mt-[10px] w-full">
            <button
              onClick={() => handleCancelProjectUpload()}
              className=" text-red-500 text-[12px] w-full py-[8px] rounded-full cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          uploadProjectCoverPage ? "flex" : "hidden"
        } absolute lg:fixed top-0 bottom-0 left-0 right-0 bg-white lg:bg-black lg:bg-opacity-40 lg:justify-center lg:items-center lg:h-full overflow-y lg:overflow-visible mb-[200px] `}
      >
        <div className="bg-white grid rounded-[14px] px-[20px] xl:p-[35px] w-full lg:w-[800px] lg:h-[500px] items-center">
          <div className=" lg:hidden flex-1 justify-start flex">
            <button
              onClick={() => setUploadProjectCoverPage(false)}
              className="w-[130px] bg-black border border-white hover:border-primary-100 py-[10px] text-black text-sm rounded-full justify-center"
            >
              cancel
            </button>
          </div>
          <div className=" box-border flex justify-cente mt-[30px] lg:mt-0 flex-col lg:flex-row">
            <div className=" justify-center lg:justify-normal lg:flex-1 flex">
              <div className="w-[230px]">
                <img
                  className="w-full h-[310px] object-cover rounded-[15px]"
                  src={projectCoverContent?.imagePreview}
                  alt=""
                />
                <div className="w-full flex justify-between mt-[10px]">
                  <p className="text-[14px] text-zinc-500">Cover Image</p>
                  <p
                    onClick={() => setUploadProjectCoverChangePage(true)}
                    className="text-[14px] cursor-pointer"
                  >
                    Edit
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:mb-0 lg:flex-1 mt-[40px] lg:mt-0 h-full">
              <div>
                <p className="font-semibold text-[15px]">Category</p>
                <select
                  className=" mt-[5px] w-full h-[32px] border-[1.5px] rounded-[7px] outline-none px-[5px]"
                  name=""
                  id=""
                >
                  <option value="Select"></option>
                  <option value="Select"></option>
                </select>
              </div>
              <div className="mt-[25px] w-full">
                <p className="font-semibold text-[15px]">Add tags</p>
                <p className="text-[13px] mt-[5px] text-zinc-600">
                  This enhances the chances of your project been seen from
                  search
                </p>
                <input
                  className="h-[32px] border-[1.5px] w-full outline-none rounded-[7px] mt-[5px] px-[10px] text-[14px]"
                  type="text"
                  value={tagInputValue}
                  onChange={handleTagInputChange}
                />
                <p className="mt-[8px] text-[14px] text-zinc-600">
                  Suggestions:
                </p>
                <div className=" flex justify-between sm:justify-normal gap-[15px] mt-[5px] gap-x-[5px]">
                  {uploadProjectTagSugesstion.map((sugestions, index) => (
                    <p
                      key={index}
                      onClick={() => handleAddTagSuggestion(sugestions)}
                      className="px-[18px] py-[6px] rounded-full text-[11px] text-primary-100 bg-primary-10 cursor-pointer"
                    >
                      {sugestions}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-[25px]">
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
          <div className="fixed bottom-0 right-0 left-0 lg:static py-[25px] px-[20px] md:px-[35px] lg:px-0 lg:py-0 border-t lg:border-t-0 lg:mt-[30px] w-full flex justify-between items-center bg-white">
            <div className=" lg:flex flex-1 justify-start hidden">
              <p
                onClick={() => setUploadProjectCoverPage(false)}
                className="text-black text-[14px] cursor-pointer"
              >
                Cancel
              </p>
            </div>
            <div className="flex flex-1 items-center flex-col sm:flex-row lg:w-[350px] w-full justify-center gap-x-[20px]">
              <button className="flex w-full py-[10px] text-primary-100 text-sm rounded-full justify-center border-[1px] border-primary-100 ">
                Save as draft
              </button>
              <button
                onClick={() => handleToUploadProjectSucessPage()}
                className="bg-primary-100 text-[14px] w-full py-[10px] text-white text-sm rounded-full border-[1px] mt-[20px] sm:mt-0 "
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          uploadProjectCoverChangePage ? "flex" : "hidden"
        } absolute lg:fixed top-0 bottom-0 left-0 right-0  bg-white lg:bg-black lg:bg-opacity-40 lg:justify-center lg:items-center lg:h-full overflow-y lg:overflow-visible mb-[200px] `}
      >
        {/* <div className="bg-white grid rounded-[14px] mx-[40px] px-[20px] xl:p-[35px] w-full lg:w-[650px] lg:h-[500px] items-center"></div> */}
      </div>
      {/* <div
        className={`${
          uploadSuccess ? "flex" : "hidden"
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
              <button className="bg-primary-100 text-white px-full py-[8px] text-[13px] rounded-full">
                Dismiss
              </button>
              <button className="bg-white text-primary-100 px-full py-[8px] text-[13px] rounded-full">
                Share
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UploadProject;
