import BigButton from "../../components/Button/BigButton";
import img from "./assets/Frame322.png"

const JobModal = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="w-full">
        <img src={img} className="w-full" alt="" />
      </div>

      <div className="flex w-full pt-5 px-10 pb-5 flex-col items-center gap-8 self-stretch">
        <div className="flex flex-col items-center gap-2">
            <h6 className="text-center text-2xl font-bold leading-[28.8px]">Hurray!!!</h6>
            <p className="text-secondary text-center text-base leading-[22.4px]">You have created your job posting successfully</p>
        </div>

        <BigButton text="Continue" className="w-full" />
      </div>
    </div>
  );
};

export default JobModal;
