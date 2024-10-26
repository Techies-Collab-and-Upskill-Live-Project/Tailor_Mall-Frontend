import React, { useState, useEffect, useRef } from "react";
import logo from "./Assets/logo.png";
import { CiText } from "react-icons/ci";
import successImg from "./Assets/successImg.svg";
import { toast } from "sonner";
import NavWlogoNborderLine from "../../components/Navbar/NavWlogoNborderLine";
import axios from "axios";
import UploadProjectCoverPage from "./pages/UploadProjectCoverPage";
import ProjectCoverChangePage from "./pages/ProjectCoverChangePage";

const UploadProject = () => {
  const [uploadProjectHomePage, setUploadProjectHomePage] = useState(true);
  const [uploadProjectFormPage, setUploadProjectFormPage] = useState(false);
  const [uploadProjectCoverPage, setUploadProjectCoverPage] = useState(false);
  const [uploadProjectCancelPage, setUploadProjectCancelPage] = useState(false);
  const [uploadProjectPlusOption, setUploadProjectPlusOption] = useState(false);
  const [uploadProjectTextScreen, setUploadProjectTextScreen] = useState(false);
  const [uploadProjectCoverChangePage, setUploadProjectCoverChangePage] =
    useState(false);
  const [uploadProjectSuccess, setUploadProjectSuccess] = useState(false);
  const [textScreenCurrentText, setTextScreenCurrentText] = useState("");
  const [projectTitle, setprojectTitle] = useState("");
  const [projectContent, setProjectContent] = useState([]);
  const [projectCoverContent, setProjectCoverContent] = useState([]);
  const [projectUploadTags, setProjectUploadTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomTranslate, setZoomTranslate] = useState({ x: 0, y: 0 });
  const [uploadedImages, setUploadedImages] = useState([]);
  const [projectCoverImageChange, setProjectCoverImageChange] = useState([]);
  const endOfContentRef = useRef(null);
  const [projectCategory, setProjectCategory] = useState("");
  const [projectUploadDetails, setProjectUploadDetails] = useState({
    name: "",
    category: "",
    tags: [],
    content: [],
  });

  useEffect(() => {
    console.log(projectUploadDetails);
  }, [projectUploadDetails]);

  const baseUrl = import.meta.env.VITE_API_URL;

  //I need the userId Here to finish the job
  const handleSubmitProjectUploadDetails = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/portfolio/update/userId`,
        projectUploadDetails
      );

      console.log("Project details submitted successfully:", response.data);
      setProjectUploadDetails({
        name: "",
        category: "",
        content: [],
        tags: [],
      });
      handleToUploadProjectSucessPage();
      toast.success("Project details submitted successfully!");
    } catch (error) {
      console.error("Error submitting project details:", error);
      toast.error("Failed to submit project details. Please try again.");
    }
  };

  const handleToUploadProjectSucessPage = () => {
    setUploadProjectCoverPage(false);
    setUploadProjectSuccess(true);
  };

  const handleToUploadProjectFormPage = () => {
    setUploadProjectFormPage(true);
    setUploadProjectHomePage(false);
  };

  const handleToUploadProjectCoverPage = () => {
    const checkIfImageIsUploaded = projectContent.some(
      (project) => project.type === "image"
    );

    if (projectContent.length === 0 || !projectUploadDetails.name.trim()) {
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
    setProjectUploadDetails({
      ...projectUploadDetails,
      [e.target.name]: e.target.value,
    });
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
      setProjectUploadDetails((prevContent) => ({
        ...prevContent,
        content: [...prevContent.content, newTextContent],
      }));
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
    const imageFiles = Array.from(e.target.files); // Convert FileList to an array

    // Create image objects with preview URLs
    const newImages = imageFiles.map((file) => ({
      type: "image",
      imageFile: file,
      imagePreview: URL.createObjectURL(file), // Create a preview URL for the file
    }));

    // Update projectContent state
    setProjectContent((prevContent) => {
      const updatedContent = [...prevContent, ...newImages];

      // Also update projectUploadDetails to include the new images in the content field
      setProjectUploadDetails((prevDetails) => ({
        ...prevDetails,
        content: updatedContent, // Update content with the merged array
      }));

      return updatedContent;
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

    if (gridFiles.length > 3) {
      toast.error("You can only select up to 3 images.");
      return;
    }

    // Create preview objects for each file
    const newGridImages = gridFiles.map((file) => ({
      preview: URL.createObjectURL(file),
    }));

    // Update projectContent state
    setProjectContent((prevContent) => {
      const updatedContent = [
        ...prevContent,
        { type: "grid", gridFiles, gridPreview: newGridImages },
      ];

      // Also update projectUploadDetails to include the new grid in the content field
      setProjectUploadDetails((prevDetails) => ({
        ...prevDetails,
        content: updatedContent,
      }));

      return updatedContent;
    });

    console.log(newGridImages);
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

    // Create new video objects with previews
    const newVideo = videoFiles.map((file) => ({
      type: "video",
      file,
      videoPreview: URL.createObjectURL(file), // Create a preview URL
    }));

    // Update projectContent state
    setProjectContent((prevContent) => {
      const updatedContent = [...prevContent, ...newVideo];

      // Also update projectUploadDetails to include the new video in the content field
      setProjectUploadDetails((prevDetails) => ({
        ...prevDetails,
        content: updatedContent,
      }));

      return updatedContent;
    });

    console.log("Selected videos:", newVideo);
  };

  useEffect(() => {
    const firstImage = projectContent.find(
      (content) => content.type === "image"
    );
    if (firstImage) {
      setProjectCoverContent(firstImage);
      setProjectCoverImageChange(firstImage);
    }
  }, [projectContent]);

  useEffect(() => {
    const newUploadedImages = projectContent.filter(
      (content) => content.type === "image"
    );

    setUploadedImages((prevImages) => {
      const imageUrls = prevImages.map((img) => img.imagePreview);
      const filteredImages = newUploadedImages.filter(
        (img) => !imageUrls.includes(img.imagePreview)
      );

      console.log("Prev Images:", prevImages);
      console.log("New Images to Add:", filteredImages);

      return [...prevImages, ...filteredImages];
    });
  }, [projectContent]);

  // Scroll to the end of the content list after updates
  useEffect(() => {
    if (endOfContentRef.current) {
      // Wait for the DOM to render the changes
      setTimeout(() => {
        endOfContentRef.current.scrollIntoView({ behavior: "smooth" });
      }, 1);
    }
  }, [projectContent]);

  const handleProjectCoverImageChange = () => {
    setProjectCoverContent(projectCoverImageChange);
    setUploadProjectCoverChangePage(false);
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

    // Update the `tagInputValue` to include the new tag if not already present
    setTagInputValue((prevTags) => {
      const tagArray = prevTags.trim() ? prevTags.split(" ") : [];

      if (!tagArray.includes(formattedTag)) {
        tagArray.push(formattedTag);
      }

      // Update `projectUploadDetails.tags` with the new tag if it's not already included
      setProjectUploadDetails((prevDetails) => ({
        ...prevDetails,
        tags: prevDetails.tags.includes(formattedTag)
          ? prevDetails.tags
          : [...prevDetails.tags, formattedTag],
      }));

      // Return the updated tags as a space-separated string for `tagInputValue`
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
    setProjectUploadDetails({
      ...projectUploadDetails,
      [e.target.name]: tags,
    });

    setProjectUploadTags(tags);
  };

  // console.log(projectCoverContent);
  // console.log(projectUploadTags);
  // console.log("uploaded Images:", uploadedImages);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.1, 1));
  };

  const handleZoomChange = (event) => {
    setZoomScale(parseFloat(event.target.value));
  };

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
        } flex-col h-full `}
      >
        <NavWlogoNborderLine />
        <div className="lg:z-0 flex w-full flex-col h-full justify-between lg:flex-row lg:gap-x-[50px]">
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
                  name="name"
                  type="text"
                  onChange={handleUploadProjectTitleChange}
                />
              </div>
              <div className="mt-[10px] overflow-y-scroll lg:overflow-auto ">
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
                {/* This div acts as the scroll target */}
                <div ref={endOfContentRef} />
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
              multiple
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
                  onClick={() => handleSaveProjectUploadAsDraft()}
                  className={`${
                    projectContent.length > 0 ? "flex" : "hidden"
                  } w-full py-3 text-primary-100 text-sm rounded-full justify-center lg:flex lg:mt-[20px] border-[1px] border-primary-100  `}
                >
                  Save as draft
                </button>
                <button
                  onClick={() => handleToUploadProjectCoverPage()}
                  className=" justify-center bg-primary-100 w-full py-3 text-white text-sm rounded-full border-[1px]"
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
        <div className="flex flex-col p-[20px] sm:p-[25px] rounded-[10px] bg-white w-full md:h-[300px] md:w-[550px]">
          <textarea
            className="w-full outline-none rounded-[10px] p-[15px] border-[1.5px] h-[260px] md:h-[200px] resize-none text-[14px] md:text-[16px] placeholder:text-[]"
            placeholder="Say something about your project ..."
            value={textScreenCurrentText}
            onChange={handleUploadTextContentChange}
          ></textarea>
          <div className="flex justify-end mt-[20px]">
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
            <button className="bg-primary-100 text-white text-[12px] w-full py-3 rounded-full cursor-pointer">
              Save to Draft
            </button>
          </div>
          <div className="mt-[10px] w-full">
            <button
              onClick={() => handleCancelProjectUpload()}
              className=" text-red-500 text-[12px] w-full py-3 rounded-full cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <UploadProjectCoverPage
        isUploadProjectCoverPageOn={uploadProjectCoverPage}
        tagInputValue={tagInputValue}
        setIsUploadProjectCoverPageOn={setUploadProjectCoverPage}
        coverContent={projectCoverContent}
        handleTagInputChange={handleTagInputChange}
        uploadProjectTagSugesstion={uploadProjectTagSugesstion}
        handleAddTagSuggestion={handleAddTagSuggestion}
        setUploadProjectCoverChangePage={setUploadProjectCoverChangePage}
        setUploadProjectSuccess={setUploadProjectSuccess}
        projectCategory={projectCategory}
        setProjectCategory={setProjectCategory}
        projectUploadDetails={projectUploadDetails}
        setProjectUploadDetails={setProjectUploadDetails}
        handleSubmitProjectUploadDetails={handleSubmitProjectUploadDetails}
      />
      <ProjectCoverChangePage
        isUploadProjectCoverChangePageOn={uploadProjectCoverChangePage}
        setIsUploadProjectCoverChangePageOn={setUploadProjectCoverChangePage}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        zoomScale={zoomScale}
        setZoomScale={setZoomScale}
        zoomTranslate={zoomTranslate}
        setZoomTranslate={setZoomTranslate}
        uploadedImages={uploadedImages}
        handleZoomChange={handleZoomChange}
        projectCoverContent={projectCoverContent}
        setProjectCoverContent={setProjectCoverContent}
        handleProjectCoverImageChange={handleProjectCoverImageChange}
        projectCoverImageChange={projectCoverImageChange}
        setProjectCoverImageChange={setProjectCoverImageChange}
      />
      <div
        className={`${
          uploadProjectSuccess ? "flex" : "hidden"
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
                onClick={() => setUploadProjectSuccess(false)}
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
    </div>
  );
};

export default UploadProject;
