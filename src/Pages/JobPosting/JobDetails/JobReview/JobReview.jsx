import { useContext, useEffect, useState } from "react";
import JobContainer from "../JobContainer";
import JobReviewInfo from "./JobReviewInfo";
import JobDraft from "../component/JobDraft";
import JobButton from "../component/JobButton";
import PreviousBtn from "../component/PreviousBtn";

const JobReview = ({
  jobData,
  requiredSkills,
  loading,
  handleSubmit,
  hasCreatedJob,
}) => {
  const title = "Review";
  const detail =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";
  const [postJob, setPostJob] = useState(true);
  useEffect(() => {
    console.log(hasCreatedJob);
  }, [hasCreatedJob]);

  return (
    <>
      <JobContainer title={title} detail={detail}>

        <JobReviewInfo jobData={jobData} requiredSkills={requiredSkills} />
      </JobContainer>

      <div className="px-5 bg-white py-5 lg:flex lg:border-t lg:bottom-0 lg:fixed lg:border-foundationGrey-100 lg:justify-between lg:w-full">
        <div className="flex py-4 w-full items-center justify-center lg:w-fit">
          <JobDraft />
        </div>

        <div className="flex  py-6 px-3 flex-col md:flex-row-reverse items-center md:justify-around gap-6 border-t border-foundationGrey-100 lg:border-none">
          {/* <JobButton IsDisabled={loading} loadingText="Submitting" /> */}
          <JobButton
            IsDisabled={loading}
            loadingText="Posting"
            handleClick={handleSubmit}
          />

          <PreviousBtn />
        </div>
      </div>

      
    </>
  );
};

export default JobReview;
