import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SetupProfile = () => {
  const [create, setCreate] = useState(true);
  const [setup, setSetup] = useState(false);
  const [personal, setPersonal] = useState(true);
  const [about, setAbout] = useState(false);
  const [social, setSocial] = useState(false);
  const [experience, setExperience] = useState(false);
  const [experienceForm, setExperienceForm] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: "",
    location: "",
    tailoringSkills: "",
    yearOfExperience: "",
    businessName: "",
    aboutMe: "",
    instagramLink: "",
    twitterLink: "",
    facebookLink: "",
    experienceRole: "",
    experienceType: "",
    experienceOrganization: "",
    experienceStartMonth: "",
    experienceStartYear: "",
    experienceThroughMonth: "",
    experienceThroughYear: "",
    experienceStillInRole: "",
    experienceDescription: "",
  });

  const handleProfileDetailsChange = (e) => {
    setProfileDetails({ ...profileDetails, [e.target.name]: e.target.value });
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleProfileDetailsSubmit = async () => {
    console.log(profileDetails);
    try {
      const response = await axios.post(`${baseUrl}/`, profileDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const setupFocus = () => {
    setCreate(false);
    setSetup(true);
  };

  const personalFocus = () => {
    setPersonal(true);
    setAbout(false);
    setSocial(false);
    setExperience(false);
    setExperienceForm(false);
  };

  const aboutFocus = () => {
    setAbout(true);
    setPersonal(false);
    setSocial(false);
    setExperience(false);
    setExperienceForm(false);
  };

  const socialFocus = () => {
    setSocial(true);
    setAbout(false);
    setPersonal(false);
    setExperience(false);
    setExperienceForm(false);
  };

  const experienceFocus = () => {
    setExperience(true);
    setSocial(false);
    setAbout(false);
    setPersonal(false);
    setExperienceForm(false);
  };

  const experienceFormFocus = () => {
    setExperienceForm(true);
    setExperience(false);
    setSocial(false);
    setAbout(false);
    setPersonal(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];

  const allYear = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    // Generate an array of years from 2000 to the current year
    for (let year = 2000; year <= currentYear; year++) {
      years.push(year);
    }
  };

  allYear();

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const navigateTo = useNavigate();

  return (
    <div className="flex">
      <div className={`${create ? "flex" : "hidden"} w-full flex-col h-full`}>
        <div className=" px-5 md:px-10 py-4 border-b ">
          <img className="md:w-[140px] w-[100px]" src={logo} alt="" />
        </div>
        <div className=" px-5 md:px-10 my-20 flex flex-col h-full flex-grow items-center justify-center">
          <p className="font-bold text-[20px] sm:text-[30px] md:text-[50px]">
            Next,
          </p>
          <p className="text-secondary mt-2 sm:mt-5 w-full sm:w-[550px] text-center text-[14px]">
            We would like to get to know more about you. Follow the next steps
            to create a professional profile.
          </p>
          <button
            onClick={() => setupFocus()}
            className="mt-7 text-white text-[13px] sm:text-[15px] bg-primary-100 w-full md:w-[550px] py-[13px] rounded-full"
          >
            Get Started
          </button>
          <p className="mt-7 text-[13px] sm:text-[14px] text-secondary w-full sm:w-[400px] text-center">
            This will take a few minutes. Your progress will automatically be
            saved.
          </p>
        </div>
      </div>
      <div className={`${setup ? "flex" : "hidden"} w-full`}>
        <div className="w-[400px] px-10 py-4 hidden lg:flex md:flex-col ">
          <div>
            <img className="w-[140px]" src={logo} alt="" />
          </div>
          <div
            className={`${
              personal ? "bg-primary-200" : "bg-white"
            } rounded-[8px] pl-5 py-[15px] mt-10 flex items-center cursor-pointer transition-all duration-200`}
            onClick={() => personalFocus()}
          >
            <i
              className={`fa-regular fa-user ${
                personal ? " text-primary-50" : "text-black"
              } text-[14px] mr-3`}
            ></i>
            <p
              className={`${
                personal ? " text-primary-50" : "black"
              }  text-[14px]`}
            >
              Personal info
            </p>
          </div>
          <div
            className={`${
              about ? "bg-primary-200" : "bg-white"
            } rounded-[8px] pl-5 py-[15px] mt-3 flex items-center cursor-pointer transition-all duration-200`}
            onClick={() => aboutFocus()}
          >
            <i
              className={`  ${
                about ? " text-primary-50" : "text-black"
              }  fa-regular fa-circle-question text-[14px] mr-3`}
            ></i>
            <p
              className={` ${
                about ? " text-primary-50" : "text-black"
              }  text-[14px]`}
            >
              About me
            </p>
          </div>
          <div
            className={`${
              social ? "bg-primary-200" : "bg-white"
            } rounded-[8px] pl-5 py-[15px] mt-3 flex items-center cursor-pointer  transition-all duration-200`}
            onClick={() => socialFocus()}
          >
            <i
              className={` ${
                social ? " text-primary-50" : "text-black"
              }  fa-solid fa-globe text-[14px] mr-3`}
            ></i>
            <p
              className={` ${
                social ? " text-primary-50" : "text-black"
              }  text-[14px]`}
            >
              Social links
            </p>
          </div>
          <div
            className={`${
              experience || experienceForm ? "bg-primary-200" : "bg-white"
            } rounded-[8px] pl-5 py-[15px] mt-3 flex items-center cursor-pointer transition-all duration-200`}
            onClick={() => experienceFocus()}
          >
            <i
              className={`  ${
                experience || experienceForm ? " text-primary-50" : "text-black"
              }  fa-solid fa-award text-[14px] mr-3`}
            ></i>
            <p
              className={` ${
                experience || experienceForm ? " text-primary-50" : "text-black"
              }  text-[14px]`}
            >
              Work experience
            </p>
          </div>
        </div>
        <div
          className={` ${
            personal ? "flex" : "hidden"
          } w-full border-l h-full flex-col justify-between transition-all duration-200`}
        >
          <div className=" px-5 md:px-10 py-4 border-b ">
            <img
              className="md:w-[140px] w-[100px] md:opacity-0"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex flex-col py-8 h-full">
            <div className=" px-5 md:px-10 ">
              <div className="w-full">
                <p className="font-bold text-[20px] md:text-[24px]">
                  Personal info
                </p>
                <p className="text-[14px] w-full md:w-[550px] text-secondary">
                  Provide your personal details to help build a complete
                  profile.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-medium text-[14.5px]">
                  Name<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="name"
                  onChange={handleProfileDetailsChange}
                  className="mt-1 w-full md:w-[500px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                />
              </div>
              <div className="mt-6">
                <p className="font-medium text-[14.5px]">
                  Location<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="location"
                  onChange={handleProfileDetailsChange}
                  className=" mt-1 w-full md:w-[500px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                />
              </div>
              <div className="mt-6">
                <p className="font-medium text-[14.5px]">Tailoring Skills</p>
                <input
                  type="text"
                  name="tailoringSkills"
                  onChange={handleProfileDetailsChange}
                  className=" mt-1 w-full md:w-[500px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                />
              </div>
              <div className="mt-6">
                <p className="font-medium text-[14.5px]">Year of experience</p>
                <select
                  name="yearOfExperience"
                  onChange={handleProfileDetailsChange}
                  className=" mt-1 w-full md:w-[500px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                >
                  <option value="" className="text-[14.5px] ">
                    Select your year of experience
                  </option>
                  <option value="1 Year">A year</option>
                  <option value="2 Years">2 years</option>
                  <option value="3 Years">3 years</option>
                  <option value="4 Years">4 years</option>
                  <option value="5 Years">5 years</option>
                  <option value="6 Years">6 years</option>
                  <option value="7 Years">7 years</option>
                  <option value="8 Years">8 years</option>
                  <option value="9 Years">9 years</option>
                  <option value="10 Years">10 years</option>
                  <option value="11 Years">11 years</option>
                  <option value="12 Years">12 years</option>
                  <option value="13 Years">13 years</option>
                  <option value="14 Years">14 years</option>
                  <option value="15 Years">15 years</option>
                  <option value="More than 15 years">More than 15 years</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" px-5 md:px-10 py-5 flex justify-center md:justify-end border-t">
            <button
              onClick={() => aboutFocus()}
              className="bg-primary-100 w-full md:w-[160px] py-3 text-primary-50 text-sm rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className={` ${
            about ? "flex" : "hidden"
          } w-full border-l h-full flex-col justify-between transition-all duration-200`}
        >
          <div className="px-5 md:px-10 py-4 border-b ">
            <img className="md:w-[140px] w-[100px] md:opacity-0" src={logo} />
          </div>
          <div className="flex flex-col">
            <div className="px-5 md:px-10 pt-8 pb-20">
              <div className="w-full">
                <p className="font-bold text-[20px] md:text-[24px]">About Me</p>
                <p className="text-[14px] w-full lg:w-[550px] text-secondary">
                  Share a brief overview of your passion, experience, and what
                  drives your creativity.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-medium text-[14.5px]">
                  Business Name &#40;Optional&#41;
                </p>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleProfileDetailsChange}
                  className="mt-1 w-full lg:w-[500px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                />
              </div>
              <div className="mt-6">
                <p className="font-medium text-[14.5px]">
                  Description about me
                </p>
                <textarea
                  name="aboutMe"
                  onChange={handleProfileDetailsChange}
                  className="mt-1 w-full lg:w-[500px] h-[130px] rounded-md border-[1.5px] outline-none px-2 py-[5px] text-[13px] resize-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 py-5 flex justify-center md:justify-end border-t">
            <button
              onClick={() => socialFocus()}
              className="bg-primary-100 w-full md:w-[160px] py-3 text-primary-50 text-sm rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className={`${
            social ? "flex" : "hidden"
          } w-full border-l h-full flex-col justify-between transition-all duration-200`}
        >
          <div className="px-5 md:px-10 py-4 border-b">
            <img className="md:w-[140px] w-[100px] md:opacity-0" src={logo} />
          </div>
          <div className="flex flex-col">
            <div className="px-5 md:px-10 py-8">
              <div className="w-full">
                <p className="font-bold text-[20px] md:text-[24px]">
                  Connect your social media accounts
                </p>
                <p className="text-[14px] w-ful md:w-[550px] text-secondary">
                  Link your social profiles to enhance your visibility and
                  showcase your work.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <i className="fa-brands fa-instagram mr-3 bg-primary-50 text-primary-100 px-[8px] py-[6px] rounded-full text-[16px]"></i>
                  <p className="font-medium text-[14.5px]">Instagram</p>
                </div>
                <input
                  type="text"
                  name="instagramLink"
                  onChange={handleProfileDetailsChange}
                  className="mt-3 w-full lg:w-[300px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  placeholder="Enter your instagram url.."
                />
              </div>
              <div className="mt-10">
                <div className="flex items-center">
                  <i className="fa-brands fa-x-twitter mr-3 bg-primary-50 text-primary-100 px-[6px] py-[6px] rounded-full text-[16px]"></i>
                  <p className="font-medium text-[14.5px]">
                    X &#40;Twitter&#41;
                  </p>
                </div>
                <input
                  type="text"
                  name="twitterLink"
                  onChange={handleProfileDetailsChange}
                  className="mt-3 w-full lg:w-[300px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  placeholder="Enter your twitter url.."
                />
              </div>
              <div className="mt-10">
                <div className="flex items-center">
                  <i className="fa-brands fa-facebook-f mr-3 bg-primary-50 text-primary-100 px-[10px] py-[6px] rounded-full text-[14px]"></i>
                  <p className="font-medium text-[14.5px]">Facebook</p>
                </div>
                <input
                  type="text"
                  name="facebookLink"
                  onChange={handleProfileDetailsChange}
                  className="mt-3 w-full lg:w-[300px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  placeholder="Enter your facebook url.."
                />
              </div>
              <div className="mt-10 mb-32">
                <div className="flex items-center">
                  <i className="fa-brands fa-tiktok mr-3 bg-primary-50 text-primary-100 px-[8px] py-[7px] rounded-full text-[14px]"></i>
                  <p className="font-medium text-[14.5px]">TikTok</p>
                </div>
                <input
                  type="text"
                  name="tiktokLink"
                  onChange={handleProfileDetailsChange}
                  className="mt-3 w-full lg:w-[300px] h-[34px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  placeholder="Enter your tiktok url.."
                />
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 py-5 flex flex-col sm:flex-row justify-center sm:justify-between lg:justify-end border-t">
            <button
              onClick={() => experienceFocus()}
              className="text-primary-100 border-primary-100 w-full lg:w-[160px] py-3 hover:bg-primary-100 hover:text-primary-50 sm:mr-3 text-sm rounded-full "
            >
              Skip
            </button>
            <button
              onClick={() => experienceFocus()}
              className="bg-primary-100 w-full lg:w-[160px] mt-4 sm:mt-0 lg:mt-0 text-primary-50 py-3 text-sm rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className={`${
            experience ? "flex" : "hidden"
          } w-full border-l h-full flex-col justify-between transition-all duration-200`}
        >
          <div className="px-5 md:px-10 py-4 border-b ">
            <img className="md:w-[140px] w-[100px] md:opacity-0" src={logo} />
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-col">
              <div className="px-5 md:px-10  pt-8 pb-44">
                <div className=" w-full">
                  <p className="font-bold text-[20px] md:text-[24px]">
                    Previous work experience
                  </p>
                  <p className="text-[14px] w-full lg:w-[550px] text-secondary">
                    Adding your work experience helps potential clients and
                    collaborators understand your background and the unique
                    skills you bring to every project.
                  </p>
                </div>
                <div className="mt-5 px-5 py-3 w-full lg:w-[550px] border-t">
                  <p className="text-[14px] text-secondary">
                    No work experience added
                  </p>
                </div>
              </div>
              <div className="px-5 md:px-10 h-[60px] sm:h-[100px] bg-blue-30 flex justify-end items-start ">
                <i
                  onClick={() => experienceFormFocus()}
                  className="fa-solid fa-plus bottom-[100px] bg-primary-100 text-primary-50 rounded-full px-[7px] py-[6px] sm:px-[12px] sm:py-[11px] cursor-pointer "
                ></i>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 py-5 flex flex-col sm:flex-row justify-center sm:justify-between lg:justify-end border-t">
            <button
              onClick={() => handleProfileDetailsSubmit()}
              className="text-primary-100 border-primary-100 w-full lg:w-[160px] py-3 hover:bg-primary-100 hover:text-primary-50 sm:mr-3 text-sm rounded-full"
            >
              Skip
            </button>
            <button
              onClick={() => handleProfileDetailsSubmit()}
              className="bg-primary-100 w-full lg:w-[160px] mt-4 sm:mt-0 lg:mt-0 text-primary-50 py-3 text-sm rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className={`${
            experienceForm ? "flex" : "hidden"
          } w-full border-l h-full flex-col transition-all duration-200`}
        >
          <div className="flex flex-col">
            <div className="px-5 md:px-10">
              <div className="mt-4 w-full">
                <p className="font-bold text-[20px] md:text-[24px]">
                  Work experience
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="mt-3 w-full sm:mr-4">
                  <div className="flex items-center">
                    <p className="font-medium text-[14.5px]">Role</p>
                  </div>
                  <input
                    type="text"
                    name="experienceRole"
                    onChange={handleProfileDetailsChange}
                    className="mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                    placeholder="Eg. Tailor"
                  />
                </div>
                <div className="mt-6 sm:mt-3 w-full">
                  <div className="flex items-center">
                    <p className="font-medium text-[14.5px]">Employment Type</p>
                  </div>
                  <select
                    name="experienceType"
                    onChange={handleProfileDetailsChange}
                    className=" mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      className="text-[14.5px] text-gray-500"
                    >
                      Select the employment type
                    </option>
                    <option value="">Hello</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <p className="font-medium text-[14.5px]">Organisation</p>
                </div>
                <input
                  type="text"
                  name="experienceOrganization"
                  onChange={handleProfileDetailsChange}
                  className="mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  placeholder="Name of the organisation"
                />
              </div>
              <div className="mt-6 w-full">
                <div className="flex items-center">
                  <p className="font-medium text-[14.5px]">Start date</p>
                </div>
                <div className="flex">
                  <select
                    name="experienceStartMonth"
                    onChange={handleProfileDetailsChange}
                    className="mr-3 sm:mr-4 mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  >
                    <option value="" disabled selected hidden>
                      Start month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="experienceStartYear"
                    onChange={handleProfileDetailsChange}
                    className=" mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  >
                    <option value="" disabled selected hidden>
                      Start year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6 w-full">
                <div className="flex items-center">
                  <p className="font-medium text-[14.5px]">Through date</p>
                </div>
                <div className="flex">
                  <select
                    name="experienceThroughMonth"
                    onChange={handleProfileDetailsChange}
                    className=" mr-3 sm:mr-4 mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  >
                    <option value="" disabled selected hidden>
                      Through month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="experienceThroughYear"
                    onChange={handleProfileDetailsChange}
                    className=" mt-1 w-full h-[36px] rounded-md border-[1.5px] outline-none px-2 text-[13px]"
                  >
                    <option value="" disabled selected hidden>
                      Through year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex mt-6 items-center">
                <input
                  name="experienceStillInRole"
                  onChange={handleProfileDetailsChange}
                  className="mr-[10px]"
                  type="checkbox"
                />
                <p className="text-sm">I'm currently still in this role</p>
              </div>
              <div className="mt-6">
                <p className="font-medium text-[14.5px]">Description</p>
                <textarea
                  name="experienceDescription"
                  onChange={handleProfileDetailsChange}
                  className="mt-1 w-full h-[130px] rounded-md border-[1.5px] outline-none px-2 py-[5px] text-[13px] resize-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 py-5 mt-6 flex flex-col sm:flex-row justify-center sm:justify-between lg:justify-end">
            <button
              onClick={() => experienceFocus()}
              className="text-primary-100 hover:bg-primary-100 hover:text-primary-50 w-full lg:w-[160px] py-3 sm:mr-3 text-sm rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={() => experienceFocus()}
              className="bg-primary-100 w-full lg:w-[160px] mt-4 sm:mt-0 lg:mt-0 text-primary-50 py-3 text-sm rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
