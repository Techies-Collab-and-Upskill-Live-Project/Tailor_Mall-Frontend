import React from "react";
import NavWlogoNborderLine from "../../components/Navbar/NavWlogoNborderLine";
import { useNavigate } from "react-router-dom";

const UploadWorkHome = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <NavWlogoNborderLine />
      <div className=" px-5 md:px-10 flex flex-col h-screen flex-grow items-center justify-center">
        <p className="font-bold text-[25px] sm:text-[30px] md:text-[50px]">
          Upload work
        </p>
        <p className="text-secondary mt-2 sm:mt-5 w-full sm:w-[550px] text-center text-[14px]">
          Upload Your Tailoring Creations to Showcase Your Skills and Attract
          Clients or Collaborators Looking for Unique Fashion Talent
        </p>
        <div className=" w-full justify-center mt-[25px] lg:mt-2 sm:mt-5 flex md:flex-row flex-col gap-y-[20px] gap-x-[20px]">
          <button className="text-primary-100 md:w-[250px] py-3 border border-white hover:border-primary-100 md:mr-3 text-sm rounded-full ">
            Skip
          </button>
          <button
            onClick={() => navigateTo("/upload-work-1")}
            className="bg-primary-100 md:w-[250px] py-3 text-primary-50 text-sm rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadWorkHome;
