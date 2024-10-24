import { useContext } from "react";
import BigButton from "../../../../components/Button/BigButton";
import { JobContext } from "../../../../Context/JobContext";

const JobButton = ({handleClick}) => {
  return (
    <button type="submit" onClick={handleClick} className="flex py-3 px-4 justify-center items-center dot rounded-[100px] bg-primary-100 w-full lg:w-[350px]">
      <span className="text-base text-white leading-[22.4px]">Next</span>
    </button>
  );
};

export default JobButton;
