import BigButton from "../../components/Button/BigButton";
import img from "./assets/Frame322.png";

const JobModal = ({postedJob}) => {
  return (
    <>
      <div className="flex bg-white flex-col absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[400px] h-[400px]">
        <div>
          <img src={img} className="w-full" alt="" />
        </div>
        <div className="flex w-full pt-5 px-10 pb-5 flex-col items-center gap-8 self-stretch">
          <div className="flex flex-col items-center gap-2">
            <h6 className="text-center text-2xl font-bold leading-[28.8px]">
              Hurray!!!
            </h6>
            <p className="text-secondary text-center text-base leading-[22.4px]">
              You have created your job posting successfully
            </p>
          </div>

          <BigButton text="Continue" submit={postedJob}  className="w-full" />
        </div>
      </div>

      {/* <div className="relative w-8 h-8 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
    hello
    
    </div> */}
    </>
  );
};

export default JobModal;
