import Chervon from "../../assets/fi_chevron-dow.png";
import mark from "../../assets/fi_check.png";
import checked from "../../assets/fi_checked.png";

import { useContext } from "react";
import { JobContext } from "../../../../Context/JobContext";

const JobProgress = () => {
  // const { isDescription } = useContext(JobContext);
  return (
    <div className="flex flex-col justify-center gap-6 self-stretch rounded-xl">
      <div className="flex justify-between items-center self-stretch">
        <div
          className="flex justify-cer gap-[29px] self-stretch"
          style={{ flex: "1 0 0" }}
        >
          <input type="range" />

          <p className="text-secondary text-[14px] leading-[16.8px]">
            0% complete
          </p>
        </div>

        <img src={Chervon} alt="" />
      </div>

      <div className="flex p-6 flex-col gap-4 self-stretch rounded-2xl bg-primaryGreen-50">
        <div className="flex gap-4">
          <p className="text-secondary text-base leading-[22.4px]">
            Basic job details
          </p>

          {/* <img className="w-5 h-5 bg-primary-100"  src={mark} alt="" /> */}
          <img
            className="w-5 h-5"
            //  src={isDescription ? mark : checked}
            // src={isDescription ? checked : mark}
            src={mark}
            alt=""
          />
        </div>
        <div className="flex gap-4">
          <p className="text-secondary text-[14px] md:text-base leading-[22.4px]">
            Job description & requirements
          </p>

          <img className="w-5 h-5" src={mark} alt="" />
        </div>
        <div className="flex gap-4">
          <p className="text-secondary text-base leading-[22.4px]">
            Basic job details
          </p>

          <img className="w-5 h-5" src={mark} alt="" />
        </div>
        <div className="flex gap-4">
          <p className="text-secondary text-base leading-[22.4px]">
            Basic job details
          </p>

          <img className="w-5 h-5" src={mark} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobProgress;
