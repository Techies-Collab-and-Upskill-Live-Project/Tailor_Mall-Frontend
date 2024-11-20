import { useContext } from "react";
import { JobContext } from "../../../../Context/JobContext";
import JobContainer from "../JobContainer";
import { TitleData } from "./TitleData";
import BigButton from "../../../../components/Button/BigButton";
import JobButton from "../component/JobButton";
import { Link } from "react-router-dom";
import JobDraft from "../component/JobDraft";
import PreviousBtn from "../component/PreviousBtn";

const JobTitleTest = ({ handleJobDataChange, jobData, toDescription }) => {
  const title = "Basic Job Detail";
  const description =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";

  return (
    <>
      <JobContainer title={title} detail={description}>
        <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border-2 border-primaryGreen-100 lg:w-[90%]">
          <div className="flex flex-col items-start gap-8 self-stretch">
            <div className="flex flex-col gap-2 self-stretch">
              <div className="flex flex-col gap-2 self-stretch">
                <label className="self-stretch text-xl leading-6" htmlFor="">
                  Job title
                </label>
                <input
                  name="title"
                  value={jobData.title}
                  onChange={handleJobDataChange}
                  type="text"
                  className="flex flex-col justify-center gap-2 self-stretch rounded-xl px-3 border border-foundationGrey-50 h-10 outline-none"
                />
              </div>
              <p className="text-base text-center  md:text-left font-light">
                eg. Freelance Fashion designer for Custom Evening Gown
              </p>
            </div>

            <div className="flex flex-col gap-2 self-stretch">
              <label className="self-stretch text-xl leading-6" htmlFor="">
                Job category
              </label>
              <div className="flex flex-col justify-center gap-2 self-stretch rounded-xl p-3 border border-foundationGrey-50 h-12 outline-none">
                <select
                  name="category"
                  id=""
                  className="flex justify-between border-none outline-none"
                    onChange={handleJobDataChange}
                    value={jobData.category}
                >
                  <option value=""></option>
                  <option value="fashion">fashion</option>
                  <option value="needlework">needlework</option>
                  <option value="fashion">fashion</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4 self-stretch">
              <p className="self-stretch text-xl leading-6">job type</p>

              <div className="flex gap-2 flex-col">
                {TitleData.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      name="jobType"
                      value={option.value}
                      onChange={handleJobDataChange}
                      type="radio"
                    />
                    <label
                      htmlFor=""
                      className="text-base leading-[22.4px] text-secondary"
                    >
                      {option.jobType}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </JobContainer>

      <div className="px-5 py-5 lg:flex lg:border-t lg:bottom-0 lg:fixed lg:border-foundationGrey-100 lg:justify-between lg:w-full bg-white">
        <div className="flex py-4 w-full items-center justify-center lg:w-fit">
          <JobDraft />
        </div>

        <div className="flex py-6 px-3 flex-col md:flex-row-reverse items-center md:justify-around gap-6 border-t border-foundationGrey-100 lg:border-none">
          <JobButton handleClick={toDescription} />

          <PreviousBtn />
        </div>
      </div>
    </>
  );
};

export default JobTitleTest;
