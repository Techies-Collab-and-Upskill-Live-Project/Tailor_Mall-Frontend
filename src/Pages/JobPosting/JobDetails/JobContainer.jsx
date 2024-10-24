import { Link } from "react-router-dom";
import BigButton from "../../../components/Button/BigButton";
import JobButton from "./component/JobButton";
import JobDraft from "./component/JobDraft";
import JobProgress from "./component/JobProgress";
import { useContext } from "react";
import { JobContext } from "../../../Context/JobContext";

const JobContainer = ({ title, detail, children }) => {

  return (
    <>
      <div className="px-5 py-5 lg:px-[60px] xl:px-[100px] lg:flex lg:pt-[100px] lg:pb-[200px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 2xl:gap-32">
          <div className="flex flex-col gap-10 py-10 lg:w-[70%] lg:py-0">
            <div className="flex gap-4 flex-col">
              <h3 className="text-[#111] text-[28px] font-bold leading-[33.6px] tracking-[-1.12px]">
                {title}
              </h3>

              <p className="text-secondary text-base leading-5">{detail}</p>
            </div>

            <JobProgress />
          </div>

          {children}
        </div>
      </div>

      {/* <div className="flex flex-col lg:hidden lg:border-t lg:border-foundationGrey-100 lg:fixed lg:w-full lg:bottom-0 lg:justify-between lg:px-0 lg:items-center">
        <div className="px-5 py-5 lg:py-0 lg:px-0 lg:flex w-full">
          <BigButton
            className="border border-primary-100 bg-transparent w-full text-primary-100"
            text="Save as draft"
          />
        </div>

        <JobButton />
      </div>

      <div className="hidden w-full lg:block fixed bg-white bottom-0 border-t border-foundationGrey-100">
        <div className="w-full flex justify-between py-8 px-[100px]">
          <BigButton
            text="Save to draft"
            className="lg:w-fit bg-transparent border border-primary-100 text-primary-100"
          />

          <div
            className="flex items-center gap-8 flex-row-reverse
          
          
          "
          >
            <BigButton
              text="Next"
              submit={handleNextPage}
              className="lg:w-[300px]"
            />

            <Link className="text-primary-100 text-base leading-[22.4px] text-center">
              Previous
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default JobContainer;
