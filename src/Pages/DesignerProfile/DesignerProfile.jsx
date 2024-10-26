import React, { useState } from "react";
import logo from "./Assets/logo.png";
import profileImg from "./Assets/myLove.jpg";
import profileBackg from "./Assets/profileBackg.svg";
import { IoLocationOutline } from "react-icons/io5";
import NavWithSearchBar from "../../components/Navbar/NavWithSearchBar";
import { GoPencil } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { FooterMain } from "../../components/Footer/FooterMain";
import { Socials } from "../../components/Footer/FooterData";
import StatsChart from "./StatChart";

const DesignerProfile = () => {
  const [isShowWork, setIsShowWork] = useState(true);
  const [isShowDraft, setIsShowDraft] = useState(false);
  const [isShowSaves, setIsShowSaves] = useState(false);
  const [isShowLikes, setIsShowLikes] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isShowStats, setShowStats] = useState(false);
  const [statusProjectView, setStatusProjectView] = useState("200");
  const [statusProjectComment, setStatusProjectComment] = useState("426");
  const [statusProjectAppriciation, setStatusProjectAppriciation] =
    useState("802");
  const [statusProjectSave, setStatusProjectSave] = useState("244");

  const startCount = 1;
  const duration = 2000;

  const statsCountAnimator = (start, end, duration, elementId) => {
    const increment = end > start ? 1 : null;
    const range = Math.abs(end - start);
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;

    const timer = setInterval(() => {
      current += increment;
      document.getElementById(elementId).textContent = current;

      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const handleStatsAnimator = () => {
    const viewCountElementId = "viewCount";
    const commentCountElementId = "commentCount";
    const appriciationCountElementId = "appriciationCount";
    const savesCountElementId = "savesCount";

    statsCountAnimator(
      startCount,
      statusProjectView,
      duration,
      viewCountElementId
    );

    statsCountAnimator(
      startCount,
      statusProjectComment,
      duration,
      commentCountElementId
    );

    statsCountAnimator(
      startCount,
      statusProjectAppriciation,
      duration,
      appriciationCountElementId
    );

    statsCountAnimator(
      startCount,
      statusProjectSave,
      duration,
      savesCountElementId
    );
  };

  const designerProfileOption = [
    "Suit-making",
    "Fabric Selection",
    "Children wear",
    "Wedding wears",
    "Fashion Illustration",
    "Sport kit",
  ];

  const handleIsShowWork = () => {
    setIsShowWork(true);
    setIsShowDraft(false);
    setIsShowSaves(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setShowStats(false);
  };

  const handleIsShowDraft = () => {
    setIsShowDraft(true);
    setIsShowWork(false);
    setIsShowSaves(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setShowStats(false);
  };

  const handleIsShowSaves = () => {
    setIsShowSaves(true);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setShowStats(false);
  };

  const handleIsShowLikes = () => {
    setIsShowLikes(true);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowAbout(false);
    setShowStats(false);
  };

  const handleIsShowAbout = () => {
    setIsShowAbout(true);
    setIsShowLikes(false);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setShowStats(false);
  };

  const handleIsShowStats = () => {
    setShowStats(true);
    setIsShowAbout(false);
    setIsShowLikes(false);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    handleStatsAnimator();
  };

  return (
    <div>
      <NavWithSearchBar />
      <div className="mt-[10px] relative ">
        <div className="relative">
          <div>
            <img
              src={profileBackg}
              className="lg:h-[300px] sm:h-[175px] h-[120px] w-full object-cover"
              alt="Background"
            />
          </div>

          <div className="absolute bottom-0  left-[70px] sm:left-[105px] lg:left-[150px] transform -translate-x-1/2 translate-y-1/2 px-5 md:px-14">
            <img
              src={profileImg}
              className="lg:w-[200px] sm:w-[120px] w-[100px] rounded-full border-4 border-white"
              alt="Profile"
            />
          </div>
        </div>
        <div className="mt-[70px] sm:mt-[85px] md:mt-[100px] lg:mt-0 px-5 sm:px-12">
          <div className="flex items-center justify-between lg:mt-[30px]">
            <div className="w-full md:w-[420px] lg:ml-[250px] flex flex-col">
              <div className="flex items-center justify-between border-b-[1.5px] pb-[7px]">
                <div>
                  <p className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px]">
                    Gifty Sackey
                  </p>
                  <p className=" text-[12px] sm:text-[13px] md:text-[14px] text-zinc-500">
                    Fashion designer
                  </p>
                </div>
                <div className=" flex gap-x-[30px] md:hidden ">
                  <div className="bg-primary-10 p-[5.5px] sm:p-[8px] lg:p-[10px] sm:text-[16px]  lg:text-[22px] text-primary-100 rounded-full">
                    <GoPencil />
                  </div>
                  <div className="bg-primary-10 p-[5.5px]  sm:p-[8px] lg:p-[10px] lg:text-[22px] text-primary-100 rounded-full">
                    <IoMdLink />
                  </div>
                </div>
              </div>
              <div className="flex pt-[7px] items-center">
                <IoLocationOutline className="text-[16px] mr-[5px] text-zinc-500" />
                <p className=" text-[12px] sm:text-[13px] md:text-[14px] text-zinc-500">
                  Accra, Ghana
                </p>
              </div>
            </div>
            <div className=" hidden gap-x-[30px] md:flex ">
              <div className="bg-primary-10 px-[10px] py-[10px] text-[22px] text-primary-100 rounded-full">
                <GoPencil />
              </div>
              <div className="bg-primary-10 px-[10px] py-[10px] text-[22px] text-primary-100 rounded-full">
                <IoMdLink />
              </div>
            </div>
          </div>
          {/* <div className=" lg:hidden flex sm:w-full md:w-[420px] gap-x-[20px] md:gap-x-0 mt-[30px] justify-between">
            <div className="w-full md:max-w-max">
              <button className="bg-primary-100 border border-primary-100 flex justify-center items-center text-white w-full md:w-[200px] h-[38px] text-[14px] rounded-full">
                Message
              </button>
            </div>
            <div className="w-full md:max-w-max">
              <button className="border border-primary-100 flex justify-center items-center text-primary-100 w-full md:w-[200px] h-[38px] text-[14px] rounded-full">
                Follow
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="px-5 sm:px-12 lg:my-[60px] sm:my-[40px] my-[30px]">
        <div className="flex overflow-hidden lg:w-[880px] justify-between">
          <p
            onClick={() => handleIsShowWork()}
            className={`${
              isShowWork ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            WORK
          </p>
          <p
            onClick={() => handleIsShowDraft()}
            className={`${
              isShowDraft ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            DRAFT
          </p>
          <p
            onClick={() => handleIsShowSaves()}
            className={`${
              isShowSaves ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            SAVES
          </p>
          <p
            onClick={() => handleIsShowLikes()}
            className={`${
              isShowLikes ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            LIKES
          </p>
          <p
            onClick={() => handleIsShowAbout()}
            className={`${
              isShowAbout ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            ABOUT
          </p>
          <p className="px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-zinc-500 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer">
            JOB
          </p>
          <p
            onClick={() => handleIsShowStats()}
            className={`${
              isShowStats ? "bg-primary-50 text-primary-100" : "text-zinc-500"
            } px-[16px] md:px-[36px] py-[5px] hover:bg-primary-50 hover:text-primary-100 text-[12px] sm:text-[13px] md:text-[14px] rounded-full cursor-pointer transition-all duration-100`}
          >
            STATS
          </p>
        </div>
      </div>
      <div className=" px-5 sm:px-12 ">
        <div
          className={`${
            isShowWork ? "grid" : "hidden"
          } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px] gap-y-[20px] mb-[250px]`}
        >
          {designerProfileOption.map((option) => (
            <div className="">
              <img
                className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
                src={profileImg}
              />
              <div className="flex justify-end gap-x-[18px] mt-[12px]">
                <div className="flex items-center">
                  <i className="fa-regular fa-comment lg:text-[11px] text-[13px] mr-[5px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular  fa-thumbs-up lg:text-[11px] text-[13px] mr-[5px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular  fa-eye lg:text-[11px] text-[13px] mr-[4px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            isShowDraft ? "grid" : "hidden"
          } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px]  gap-y-[20px] mb-[250px]`}
        >
          {designerProfileOption.map((option) => (
            <div className="">
              <img
                className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
                src={profileImg}
              />
            </div>
          ))}
        </div>
        <div
          className={`${
            isShowSaves ? "grid" : "hidden"
          } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px] gap-y-[20px] mb-[250px]`}
        >
          {designerProfileOption.map((option) => (
            <div className="">
              <img
                className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
                src={profileImg}
              />
              <div className="flex justify-end gap-x-[18px] mt-[12px]">
                <div className="flex items-center">
                  <i className="fa-regular  fa-thumbs-up lg:text-[11px] text-[13px] mr-[5px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular  fa-eye lg:text-[11px] text-[13px] mr-[4px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            isShowLikes ? "grid" : "hidden"
          } lg:grid-cols-5 sm:grid-cols-2 gap-x-[20px] gap-y-[20px] mb-[250px]`}
        >
          {designerProfileOption.map((option) => (
            <div className="">
              <img
                className=" md:h-[350px] lg:h-[290px] w-full object-cover rounded-[8px]"
                src={profileImg}
              />
              <div className="flex justify-end gap-x-[18px] mt-[12px]">
                <div className="flex items-center">
                  <i className="fa-regular  fa-thumbs-up lg:text-[11px] text-[13px] mr-[5px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular  fa-eye lg:text-[11px] text-[13px] mr-[4px]"></i>
                  <p className="lg:text-[11px] text-[13px]">12</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            isShowAbout ? "grid" : "hidden"
          } flex gap-x-[20px] gap-y-[20px] mb-[250px]`}
        >
          <div className="w-full border-b">
            <div className="flex items-center w-full justify-between">
              <p className="lg:text-[20px] sm:text-[18px] font-bold">My bio</p>
              <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
                <GoPencil />
              </div>
            </div>
            <div className="mt-[20px] mb-[30px]">
              <p className=" text-[14px] sm:text-[15px] lg:w-[750px] text-zinc-500">
                As a passionate fashion designer with over 5 years of
                experience, I specialize in creating bespoke garments that blend
                elegance with functionality. From school uniforms to custom
                evening wear, I bring creativity and attention to detail in
                every stitch. I thrive on collaborating with clients to bring
                their vision to life, ensuring a perfect balance of style and
                comfort.
              </p>
            </div>
          </div>
          <div className="w-full border-b">
            <div className="flex items-center w-full justify-between">
              <p className="lg:text-[20px] sm:text-[18px] font-bold">Skills</p>
              <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
                <GoPencil />
              </div>
            </div>
            <div className="mt-[20px] mb-[30px] flex flex-wrap lg:w-[750px] gap-[16px] ">
              {designerProfileOption.map((option, index) => (
                <div key={index}>
                  <p className="text-primary-100 bg-primary-10 text-[12px] sm:text-[14px] px-[24px] py-[5px] rounded-full">
                    {option}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b">
            <div className="flex items-center w-full justify-between">
              <p className="lg:text-[20px] sm:text-[18px] font-bold">Socials</p>
              <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
                <GoPencil />
              </div>
            </div>
            <div className="mt-[20px] mb-[30px]">
              <p className=" text-[14px] sm:text-[15px] lg:w-[750px] text-zinc-500">
                Share a brief story about who you are, your passion, and what
                makes your work unique. A strong bio helps you stand out and
                connect with potential clients and collaborators...
              </p>
            </div>
          </div>
          <div className="w-full border-b">
            <div className="flex items-center w-full justify-between">
              <p className="lg:text-[20px] sm:text-[18px] font-bold">
                Employment history
              </p>
              <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
                <GoPencil />
              </div>
            </div>
            <div className="mt-[20px] mb-[30px] lg:w-[750px]">
              {designerProfileOption.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    index !== designerProfileOption.length - 1
                      ? "border-b"
                      : "border-b-0"
                  }  lg:pl-[30px] mt-[20px]`}
                >
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-[15px] font-semibold">{option}</p>
                    <p className="text-[12px] text-zinc-500">
                      June 2017 – December 2019
                    </p>
                  </div>
                  <div className="mt-[12px] mb-[40px]">
                    <p className="text-[12px] font-semibold text-zinc-500">
                      Urban Threads Fashion Studio – Accra, Ghana
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b">
            <div className="flex items-center w-full justify-between">
              <p className="lg:text-[20px] sm:text-[18px] font-bold">
                Education
              </p>
              <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
                <GoPencil />
              </div>
            </div>
            <div className="mt-[20px] mb-[30px] lg:w-[750px]">
              {designerProfileOption.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    index !== designerProfileOption.length - 1
                      ? "border-b"
                      : "border-b-0"
                  }  lg:pl-[30px] mt-[20px]`}
                >
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-[15px] font-semibold">{option}</p>
                    <p className="text-[12px] text-zinc-500">
                      June 2017 – December 2019
                    </p>
                  </div>
                  <div className="mt-[12px] mb-[40px]">
                    <p className="text-[12px] font-semibold text-zinc-500">
                      Urban Threads Fashion Studio – Accra, Ghana
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${
            isShowStats ? "grid" : "hidden"
          }  gap-x-[0px] gap-y-[20px] mb-[250px]`}
        >
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-x-[20px] sm:gap-x-[15px] gap-x-[10px] gap-y-[10px]">
            <div className="bg-primary-10 h-[130px] sm:h-full flex flex-col lg:py-[20px] px-[5px] items-center justify-center rounded-[20px]">
              <div className="">
                <p
                  id="viewCount"
                  className="lg:text-[60px] sm:text-[48px] text-[40px] font-bold text-primary-100"
                >
                  0
                </p>
              </div>
              <div className="flex items-center mt-[5px]">
                <div className="flex justify-center items-center bg-primary-50 max-h-max lg:p-[6px] sm:p-[5px] p-[3px] rounded-full lg:mr-[10px] mr-[7px]">
                  <i className="fa-regular fa-eye lg:text-[12px] text-[8px] text-primary-100 "></i>
                </div>
                <p className="lg:text-[15px] sm:text-[12px] text-[10px]">
                  Project views
                </p>
              </div>
            </div>
            <div className="bg-primary-10 h-[130px] sm:h-full flex flex-col py-[20px] px-[5px] items-center justify-center rounded-[20px]">
              <div className="">
                <p
                  id="commentCount"
                  className="lg:text-[60px] sm:text-[48px] text-[40px] font-bold text-primary-100"
                >
                  0
                </p>
              </div>
              <div className="flex items-center mt-[5px]">
                <div className="flex justify-center items-center bg-primary-50 max-h-max lg:p-[6px] sm:p-[5px] p-[3px] rounded-full lg:mr-[10px] mr-[7px]">
                  <i className="fa-regular fa-comment lg:text-[12px] text-[8px] text-primary-100 "></i>
                </div>
                <p className="lg:text-[15px] sm:text-[12px] text-[10px]">
                  Project Comments
                </p>
              </div>
            </div>
            <div className="bg-primary-10 h-[130px] sm:h-full flex flex-col py-[20px] px-[5px] items-center justify-center rounded-[20px]">
              <div className="">
                <p
                  id="appriciationCount"
                  className="lg:text-[60px] sm:text-[48px] text-[40px] font-bold text-primary-100"
                >
                  0
                </p>
              </div>
              <div className="flex items-center mt-[5px]">
                <div className="flex justify-center items-center bg-primary-50 max-h-max lg:p-[6px] sm:p-[5px] p-[3px] rounded-full lg:mr-[10px] mr-[7px]">
                  <i className="fa-regular fa-thumbs-up lg:text-[12px] text-[8px] text-primary-100 "></i>
                </div>
                <p className="lg:text-[15px] sm:text-[12px] text-[10px]">
                  Appreciations
                </p>
              </div>
            </div>
            <div className="bg-primary-10 h-[130px] sm:h-full flex flex-col py-[20px] px-[5px] items-center justify-center rounded-[20px]">
              <div className="">
                <p
                  id="savesCount"
                  className="lg:text-[60px] sm:text-[48px] text-[40px] font-bold text-primary-100"
                >
                  0
                </p>
              </div>
              <div className="flex items-center mt-[5px]">
                <div className="flex justify-center items-center bg-primary-50 max-h-max lg:p-[6px] sm:p-[5px] p-[3px] rounded-full lg:mr-[10px] mr-[7px]">
                  <i className="fa-regular fa-bookmark lg:text-[12px] text-[8px] text-primary-100 "></i>
                </div>
                <p className="lg:text-[15px] sm:text-[12px] text-[10px]">
                  Saves
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px] lg:px-[20px] sm:px-[15px] px-[10px] lg:py-[30px] sm:py-[20px] py-[15px] border border-primary-50 rounded-[10px]">
            <div className="flex justify-between">
              <div className="lg:px-[15px] sm:px-[10px] px-[5px] py-[4px] border border-primary-100 rounded-full">
                <select
                  className="lg:w-[160px] sm:w-[130px] w-[120px] border-none outline-none lg:text-[15px] sm:text-[13.5px] text-[12px] text-primary-100"
                  name=""
                  id=""
                >
                  <option value="">Project views</option>
                </select>
              </div>
              <div className="lg:px-[15px] sm:px-[10px] px-[5px] py-[4px] border border-primary-100 rounded-full">
                <select
                  className="lg:w-[120px] sm:w-[100px] w-[90px] border-none outline-none lg:text-[15px] sm:text-[13.5px] text-[12px] text-primary-100"
                  name=""
                  id=""
                >
                  <option value="">Monthly</option>
                </select>
              </div>
            </div>
            <div className="mt-[40px]">{/* <StatsChart /> */}</div>
          </div>
          <div className="mt-[10px] sm:mt-[20px] lg:mt-[30px] lg:px-[20px] px-[10px] lg:py-[30px]  py-[15px] border border-primary-50 rounded-[10px]">
            <div className="lg:mt-[20px] sm:mt-[10px] flex place-items-center">
              <i class="fa-solid fa-chart-simple text-primary-100 bg-primary-10 px-[6.5px] sm:px-[9px] lg:px-[10px] py-[6px] sm:py-[8.5px] lg:py-[9px] lg:text-[10px] sm:text-[9px] text-[8px] rounded-full mr-[10px]"></i>
              <p className="font-bold lg:text-[20px] sm:text-[17px] text-[14px] text-zinc-600">
                Project perfomance
              </p>
            </div>
            <div className="mt-[30px] flex items-center p-[10px] sm:p-[15px]">
              <div className="flex-1">
                <p className=" text-[11px] lg:text-[13px] text-zinc-600">
                  Projects
                </p>
              </div>
              <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center ">
                <p className=" hidden sm:flex text-[11px] lg:text-[13px] text-zinc-600">
                  Views
                </p>
                <div className="flex sm:hidden justify-center items-center bg-primary-10 max-h-max  p-[5px] rounded-full">
                  <i className="fa-regular fa-eye text-[10px] text-primary-100 "></i>
                </div>
              </div>
              <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                <p className="hidden sm:flex text-[11px] lg:text-[13px] text-zinc-600">
                  Likes
                </p>
                <div className="flex sm:hidden justify-center items-center bg-primary-10 max-h-max  p-[5px] rounded-full">
                  <i className="fa-regular fa-thumbs-up text-[10px] text-primary-100 "></i>
                </div>
              </div>
              <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                <p className="hidden sm:flex text-[11px] lg:text-[13px] text-zinc-600">
                  Comments
                </p>
                <div className="flex sm:hidden justify-center items-center bg-primary-10 max-h-max  p-[5px] rounded-full">
                  <i className="fa-regular fa-comment text-[10px] text-primary-100 "></i>
                </div>
              </div>
              <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                <p className="hidden sm:flex text-[11px] lg:text-[13px] text-zinc-600">
                  Saves
                </p>
                <div className="flex sm:hidden justify-center items-center bg-primary-10 max-h-max  px-[6px] py-[5px]  rounded-full">
                  <i className="fa-regular fa-bookmark text-[10px] text-primary-100 "></i>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              {designerProfileOption.map((option) => (
                <div className="mt-[10px] flex items-center bg-primary-10 rounded-[10px] p-[10px] sm:p-[15px]">
                  <div className="flex flex-1 ">
                    <div className="sm:mr-[20px]">
                      <img
                        className="w-[50px] sm:w-[70px] lg:w-[90px] h-[60px] sm:h-[90px] lg:h-[110px] object-cover rounded-[7px]"
                        src={profileImg}
                        alt=""
                      />
                    </div>
                    <div className=" hidden sm:flex flex-col justify-center">
                      <p className="font-semibold text-[12px] lg:text-[14px]">
                        Project Name
                      </p>
                      <p className="mt-[10px]  lg:mt-[15px] text-[11px] lg:text-[13px] text-zinc-500">
                        Date Posted
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-zinc-600">
                      100
                    </p>
                  </div>
                  <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-zinc-600">
                      100
                    </p>
                  </div>
                  <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-zinc-600">
                      100
                    </p>
                  </div>
                  <div className="lg:w-[130px] sm:w-[80px] w-[45px] flex justify-center">
                    <p className=" text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-zinc-600">
                      100
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[10px] sm:mt-[20px] lg:mt-[30px] flex flex-col lg:flex-row lg:gap-x-[20px] sm:gap-y-[40px] lg:gap-y-[0px]">
            <div className=" flex-1 lg:px-[20px] sm:px-[15px] px-[10px] lg:py-[30px] sm:py-[20px] py-[15px] border border-primary-50 rounded-[10px]">
              <div className="flex">
                <i class="fa-solid fa-location-dot text-primary-100 bg-primary-10 px-[6.5px] sm:px-[9px] lg:px-[10px] py-[6px] sm:py-[8.5px] lg:py-[8px] lg:text-[16px] sm:text-[9px] text-[8px] rounded-full mr-[10px]"></i>
                <p className="font-bold lg:text-[20px] sm:text-[17px] text-[14px] text-zinc-600">
                  Views by location
                </p>
              </div>
              <div className=" mt-[15px] lg:mt-[20px]">
                <p className="lg:text-[16px] sm:text-[14px] text-[12px]">
                  30,000 views
                </p>
              </div>
              <div>
                {designerProfileOption.map((option) => (
                  <div className="mt-[30px] flex justify-between items-center">
                    <div>
                      <p className="font-bold lg:text-[16px] sm:text-[14px] text-[12px]">
                        Loooong Country
                        <small className="ml-[8px] lg:text-[16px] sm:text-[14px] text-[12px] font-normal">
                          30,000 views
                        </small>
                      </p>
                    </div>
                    <div className="flex items-center ">
                      <p className="mr-[10px] lg:text-[16px] sm:text-[14px] text-[12px] text-primary-100">
                        60&#37;
                      </p>
                      <progress
                        value={80}
                        max="100"
                        className="styleProgress hidden sm:flex sm:h-[12px] lg:h-[15px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[30px] sm:mt-[0px] lg:mt-[0px]  flex flex-col sm:flex-row lg:w-[560px] w-full sm:gap-x-[20px] gap-y-[30px] ">
              <div className=" flex-1 lg:px-[20px] sm:px-[15px] px-[10px] lg:py-[30px] sm:py-[20px] py-[15px] border border-primary-50 rounded-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <i class="fa-solid fa-tag text-primary-100 bg-primary-10 px-[6.5px] sm:px-[9px] lg:px-[9px] py-[6px] sm:py-[8.5px] lg:py-[8px] lg:text-[16px] sm:text-[9px] text-[8px] rounded-full mr-[10px]"></i>
                    <p className="font-bold lg:text-[20px] sm:text-[17px] text-[14px] text-zinc-600">
                      Tags
                    </p>
                  </div>
                  <div>
                    <p className="lg:text-[16px] sm:text-[14px] text-[12px]">
                      views
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] flex flex-col gap-y-[25px]">
                  {designerProfileOption.map((option) => (
                    <div className="flex justify-between">
                      <p className="font-bold lg:text-[16px] sm:text-[14px] text-[12px]">
                        Loooong Country
                      </p>
                      <p className="lg:text-[16px] sm:text-[14px] text-[12px] text-primary-100">
                        30,000
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 lg:px-[20px] sm:px-[15px] px-[10px] lg:py-[30px] sm:py-[20px] py-[15px] border border-primary-50 rounded-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <i class="fa-solid fa-list text-primary-100 bg-primary-10 px-[6.5px] sm:px-[9px] lg:px-[9px] py-[6px] sm:py-[8.5px] lg:py-[8px] lg:text-[16px] sm:text-[9px] text-[8px] rounded-full mr-[10px]"></i>
                    <p className="font-bold lg:text-[20px] sm:text-[17px] text-[14px] text-zinc-600">
                      Categories
                    </p>
                  </div>
                  <div>
                    <p className="lg:text-[16px] sm:text-[14px] text-[12px]">
                      views
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] flex flex-col gap-y-[25px]">
                  {designerProfileOption.map((option) => (
                    <div className="flex justify-between">
                      <p className="font-bold lg:text-[16px] sm:text-[14px] text-[12px]">
                        Loooong Country
                      </p>
                      <p className="lg:text-[16px] sm:text-[14px] text-[12px] text-primary-100">
                        30,000
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterMain />
      </div>
    </div>
  );
};

export default DesignerProfile;
