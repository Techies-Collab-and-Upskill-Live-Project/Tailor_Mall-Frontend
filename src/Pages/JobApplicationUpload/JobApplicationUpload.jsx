import BigButton from "../../components/Button/BigButton";
import info from "./assets/Info-circle.png";
import LetterCard from "./components/LetterCard";
import ProfileCard from "./components/ProfileCard";

const JobApplicationUpload = () => {
  const baseUrl = import.meta.env.VITE_API_ENDPOINT_URL;

  console.log(baseUrl);
  

  return (
    <div className="flex flex-col flex-shrink-0 w-full px-4 gap-8 md:px-10 lg:px-16 lg:gap-11 ">
      <div className="flex py-3 px-4 items-start gap-1 rounded-lg w-fit bg-[#fff2b0]">
        <img src={info} alt="" className="flex-shrink-0" />
        <p className="text-[#535353] md:items-start text-[11px] font-medium leading-[15.4px]">
          Your application will be submitted with your Tailora profile and
          projects
        </p>
      </div>

      {/* <div className="flex gap-6 justify-center flex-col items-center w-full lg:flex-row"> */}
      <div className="flex flex-col lg:items-center lg:flex-row gap-6">
        <ProfileCard />

        {/* <div className="flex lg:w-[60%] flex-col gap-4"> */}
        <LetterCard />
      </div>

      <div className="flex lg:justify-end">
          <button className="rounded-[100px] flex items-center justify-center px-7 py-3 bg-[#008080] h-10 text-[#E6F2F2] text-[12px] w-full leading-4 font-medium md:text-base md:leading-[22.4px] lg:text-[16px] lg:w-fit">
            Send Application
          </button>
        </div>
    </div>
  );
};

export default JobApplicationUpload;
