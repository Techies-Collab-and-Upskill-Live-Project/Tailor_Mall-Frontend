import { Link } from "react-router-dom";
import search from "../assets/fi_search.png";
import JobContainer from "./JobContainer";
import JobDraft from "./component/JobDraft";

const JobDescription = () => {
  const title = "Job Description & requirements";
  const description =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";

  return (
    <JobContainer title={title} detail={description}>
      <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border-2 border-primaryGreen-100 lg:w-[90%]">
      <div className="flex flex-col items-start gap-8 self-stretch">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="self-stretch text-xl leading-6">Job description</p>

            <div className="flex h-[140px] flex-col justify-center items-center gap-2 self-stretch rounded-xl">
              <textarea
                className="flex px-4 items-center gap-2 dot self-stretch rounded-xl outline-none border border-foundationGrey-50"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          <p className="self-stretch text-right text-secondary text-[14px] leading-[16.8px]">
            0/1000 characters
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 self-stretch">
          <h4 className="self-stretch text-xl leading-6">Skills required</h4>

          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex justify-center items-center gap-2 self-stretch rounded-lg h-12 border border-foundationGrey-50">
              <img src={search} alt="" />
              <input type="text" className="outline-none" />
            </div>

            <div className="flex flex-col items-start gap-4 self-stretch">
              <p className="text-secondary text-base leading-5">
                Add 4 to 5 skills best results
              </p>

              <div className="flex items-start content-start gap-[10px] self-stretch flex-wrap">
                <p className="flex items-center p-5 justify-center gap-[10px] rounded-[100px] bg-success-50 text-primary-100 text-[14px] leading-5">
                  Embiodery
                </p>
                <p className="flex items-center p-5 justify-center gap-[10px] rounded-[100px] bg-success-50 text-primary-100 text-[14px] leading-5">
                  Embiodery
                </p>
                <p className="flex items-center p-5 justify-center gap-[10px] rounded-[100px] bg-success-50 text-primary-100 text-[14px] leading-5">
                  Embiodery
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start gap-4">
          <h5 className="self-stretch text-xl font-medium leading-5">
            Applicants qualification
          </h5>

          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <input type="radio" className="w-4 h-4" />
              <label
                htmlFor=""
                className="text-secondary text-base leading-[22.4px]"
              >
                Beginner
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" className="w-4 h-4" />
              <label
                htmlFor=""
                className="text-secondary text-base leading-[22.4px]"
              >
                Intermediate
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start gap-4 self-stretch">
            <h6 className="text-black text-xl leading-6 self-stretch font-semibold">
              Files and documents
            </h6>

            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex gap-2">
                <Link className="text-primary-100 px-3 text-base font-medium leading-[22.4px] underline">
                  Upload
                </Link>
                <p className="text-secondary text-base leading-[22.4px]">
                  documents or project files
                </p>
              </div>

              <p className="text-secondary text-base leading-[16.8px]">
                You may attach up to 5 files under the size of 10 MB each.
                Include work samples or other documents to help a designer
                better understand the services you want
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </JobContainer>
  );
};

export default JobDescription;
