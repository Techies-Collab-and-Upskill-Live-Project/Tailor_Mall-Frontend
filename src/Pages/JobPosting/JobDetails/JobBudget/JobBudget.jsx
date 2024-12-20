import BudgetTimeline from "./BudgetTimeline";
import JobContainer from "../JobContainer";
import JobButton from "../component/JobButton";
import JobReview from "../JobReview/JobReview";
import JobDraft from "../component/JobDraft";
import PreviousBtn from "../component/PreviousBtn";
import { useContext, useState } from "react";
import { JobContext } from "../../../../Context/JobContext";

const JobBudget = ({jobData, handleJobDataChange, toReview, updateBudget}) => {
  const title = "Budget and Timeline";
  const description =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";

  return (
    <>
      <JobContainer title={title} detail={description}>
        <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border-2 border-primaryGreen-100 lg:w-[90%]">
          <BudgetTimeline jobData={jobData} handleJobDataChange={handleJobDataChange} updateBudget={updateBudget} />
        </div>
      </JobContainer>

      <div className="px-5 py-5 lg:flex lg:border-t lg:bottom-0 lg:fixed lg:border-foundationGrey-100 lg:justify-between lg:w-full">
        <div className="flex py-4 w-full items-center justify-center lg:w-fit">
          <JobDraft />
        </div>

        <div className="flex py-6 px-3 flex-col md:flex-row-reverse items-center md:justify-around gap-6 border-t border-foundationGrey-100 lg:border-none">
          <JobButton handleClick={toReview} />

          <PreviousBtn />
        </div>
      </div>
    </>
  );
};

export default JobBudget;
