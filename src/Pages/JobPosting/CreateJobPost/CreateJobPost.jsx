import { useState } from "react";
import BigButton from "../../../components/Button/BigButton";
import JobApplication from "../../JobApplications/JobApplication";
import JobContainer from "../JobDetails/JobContainer";
import JobTitle from "../JobDetails/JobTitle";

const CreateJobPost = () => {
  const [hasStartedPosting, setHasStartedPosting] = useState(false);
  const handleCreateJob = (e) => {
    setHasStartedPosting(true)
  };

  return (
    <>
      {hasStartedPosting ? (
        <JobTitle />
      ) : (
        <div className="flex px-5 py-[60px] md:px-10 flex-col items-start gap-[60px] lg:px-[100px]">
          <div className="flex flex-col lg:flex-row lg:px-5 gap-[60px] items-center justify-center">
            <div className="flex gap-10 flex-col lg:items-center lg:gap-3 w-full">
              <h3 className="text-black text-[28px] font-bold leading-[33.6px] self-stretch md:font-bold">
                Create job posting
              </h3>

              <p className="self-stretch opacity-70 text-black text-justify text-base leading-[22.4px]">
                Risus ut dolor mauris molestie est diam. Massa pellentesque
                tristique vestibulum vivamus scelerisque eu sagittis. Quam
                habitasse aenean fames mauris amet volutpat neque.{" "}
              </p>

              <div className="self-start w-full">
                <button
                  onClick={handleCreateJob}
                  className="rounded-[100px] flex items-center justify-center px-7 py-3 bg-[#008080] h-10 text-[#E6F2F2] text-[12px] w-full leading-4 font-medium md:text-base md:leading-[22.4px] lg:text-[16px] lg:w-fit"
                >
                  Post jobs
                </button>
              </div>
            </div>

            <div className="flex p-5 w-full flex-col self-start items-stretch rounded-2xl border border-foundationGrey-50">
              <div className="flex justify-between py-5 items-center border-t border-foundationGrey-50">
                <h5 className="text-xl leading-[24px] font-medium">
                  Jobs posted
                </h5>

                <h6 className="flex p-[10px] justify-center gap-[10px] rounded-[100px] bg-primaryGreen-50">
                  0
                </h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 self-stretch">
            <h3 className="text-[#000] text-[32px] font-bold leading-normal tracking-[-2.56px]">
              Recent activities
            </h3>
            <h3 className="opacity-70 text-base leading-normal">
              No Recent activities.......
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateJobPost;
