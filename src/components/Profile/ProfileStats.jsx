import React, { useState, useContext, useRef, useEffect } from "react";
import projectImg from "./Assets/projectImg.svg";
import ProfileStatChart from "./ProfileStatChart";
import { userProfileContext } from "../../App";

const ProfileStats = ({ profileStats, isShowStats }) => {
  const { userProfile, setUserProfile } = useContext(userProfileContext);
  const statRef = useRef(null);

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

  useEffect(() => {
    // Define the observer
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Component is in view!");
          handleStatsAnimator(); // Trigger the animation function
          statsObserver.unobserve(entry.target); // Unobserve to trigger only once if desired
        }
      });
    });

    // Observe the element
    if (statRef.current) {
      statsObserver.observe(statRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (statRef.current) {
        statsObserver.unobserve(statRef.current);
      }
    };
  }, [handleStatsAnimator]);

  return (
    <div
      className={`${
        isShowStats ? "grid" : "hidden"
      }  gap-x-[0px] gap-y-[20px] mb-[250px]`}
    >
      <div
        ref={statRef}
        className="statCounts grid md:grid-cols-4 grid-cols-2 lg:gap-x-[20px] sm:gap-x-[15px] gap-x-[10px] gap-y-[10px]"
      >
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
            <p className="lg:text-[15px] sm:text-[12px] text-[10px]">Saves</p>
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
        <div className="mt-[40px]">
          <ProfileStatChart />
        </div>
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
          {profileStats?.map((option) => (
            <div className="mt-[10px] flex items-center bg-primary-10 rounded-[10px] p-[10px] sm:p-[15px]">
              <div className="flex flex-1 ">
                <div className="sm:mr-[20px]">
                  <img
                    className="w-[50px] sm:w-[70px] lg:w-[90px] h-[60px] sm:h-[90px] lg:h-[110px] object-cover rounded-[7px]"
                    src={projectImg}
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
            {profileStats.map((option, index) => (
              <div
                key={index}
                className="mt-[30px] flex justify-between items-center"
              >
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
              {profileStats.map((option, index) => (
                <div key={index} className="flex justify-between">
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
              {profileStats.map((option, index) => (
                <div key={index} className="flex justify-between">
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
  );
};

export default ProfileStats;
