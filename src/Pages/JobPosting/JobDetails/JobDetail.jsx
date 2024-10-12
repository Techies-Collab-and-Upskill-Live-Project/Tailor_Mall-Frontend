import Chervon from "../assets/fi_chevron-dow.png";
import mark from "../assets/fi_check.png";
import BigButton from "../../../components/Button/BigButton";
import JobTitle from "./JobTitle";
import JobDescription from "./JobDescription";

const JobDetail = () => {
  return (
    <>
      <div className="px-5 py-5">
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col">
              <h3 className="text-[#111] text-[28px] font-bold leading-[33.6px] tracking-[-1.12px]">
                Basic Job details
              </h3>

              <p className="text-secondary text-base leading-5">
                Risus ut dolor mauris molestie est diam. Massa pellentesque
                tristique vestibulum vivamus scelerisque eu sagittis. Quam
                habitasse aenean fames mauris amet volutpat neque.{" "}
              </p>
            </div>

            
          </div>

          <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border border-primaryGreen-100">
            {/* <JobTitle /> */}
            <JobDescription />
          </div>
        </div>

      
      </div>
    </>
  );
};

export default JobDetail;
