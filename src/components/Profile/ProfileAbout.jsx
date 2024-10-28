import React from "react";
import { GoPencil } from "react-icons/go";


const ProfileAbout = ({ profileAbout, isShowAbout }) => {
  return (
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
            As a passionate fashion designer with over 5 years of experience, I
            specialize in creating bespoke garments that blend elegance with
            functionality. From school uniforms to custom evening wear, I bring
            creativity and attention to detail in every stitch. I thrive on
            collaborating with clients to bring their vision to life, ensuring a
            perfect balance of style and comfort.
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
          {profileAbout?.map((option, index) => (
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
            Share a brief story about who you are, your passion, and what makes
            your work unique. A strong bio helps you stand out and connect with
            potential clients and collaborators...
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
          {profileAbout?.map((option, index) => (
            <div
              key={index}
              className={`${
                index !== profileAbout?.length - 1
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
          <p className="lg:text-[20px] sm:text-[18px] font-bold">Education</p>
          <div className="bg-zinc-100 p-[10px] sm:p-[12px] text-[14px] md:text-[16px] text-black rounded-full cursor-pointer">
            <GoPencil />
          </div>
        </div>
        <div className="mt-[20px] mb-[30px] lg:w-[750px]">
          {profileAbout?.map((option, index) => (
            <div
              key={index}
              className={`${
                index !== profileAbout?.length - 1
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
  );
};

export default ProfileAbout;
