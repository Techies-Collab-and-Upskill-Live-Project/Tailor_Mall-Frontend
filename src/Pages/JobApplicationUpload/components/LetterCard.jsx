import { useState } from "react";

const LetterCard = () => {
  const [jobDetails, setJobDetails] = useState("");  

  

  const handleChange = (e) => {
    console.log(e.target.value);

    setJobDetails(e.target.value);
  };

  const SendApplication = (e) => {
    console.log(jobDetails);
  };
  
  return (
    <div className="inline-flex w-full py-[22px] px-4 flex-col gap-[10px] rounded-2xl border border-primary-50 bg-white">
      <div className="flex flex-col w-full items-center gap-8">
        <div className="flex flex-col w-full items-start gap-2">
          <div className="flex flex-col w-full items-start gap-2">
            <p className="text-base leading-[22.4px] font-medium self-stretch">
              Write Cover letter
            </p>

            <div className="flex flex-col justify-center items-start gap-2 self-stretch rounded-lg">
              <textarea
                name=""
                onChange={handleChange}
                value={jobDetails}
                className="flex px-8 items-center gap-2 outline-none w-full h-[168px] py-3 border border-foundationGrey-50 rounded-lg"
                id=""
              ></textarea>
            </div>
          </div>

          <p className="text-secondary text-[12px] leading-[14.4px] text-right self-stretch">
            0/1000 characters
          </p>
        </div>

        <div className="flex flex-col content-end gap-4 self-stretch">
          <h5 className="text-[#000] text-base font-medium leading-[22.4px]">
            Files and documents
          </h5>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <button className="flex py-3 px-0 content-center items-center gap-5 rounded-[100px]">
                <span className="text-primary-100 text-[14px] font-medium leading-[16.8px] underline">
                  Upload
                </span>
              </button>

              <p className="text-[12px] text-secondary leading-[14.4px]">
                Cover letter or other required documents
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-secondary">
                You may attach up to 5 files under the size of 10MB each.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterCard;
