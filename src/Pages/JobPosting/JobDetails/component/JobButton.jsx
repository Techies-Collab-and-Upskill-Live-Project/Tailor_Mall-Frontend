import { useContext } from "react";
import BigButton from "../../../../components/Button/BigButton";
import { JobContext } from "../../../../Context/JobContext";
import { Oval } from "react-loader-spinner";

const JobButton = ({ handleClick, IsDisabled, loadingText }) => {
  return (
    <button
      disabled={IsDisabled}
      type="submit"
      onClick={handleClick}
      className="flex py-3 px-4 text-white justify-center items-center dot rounded-[100px] bg-primary-100 w-full lg:w-[350px]"
    >
      {IsDisabled ? (
        <div className="flex justify-center space-x-2">
          <span>{loadingText}</span>
          <Oval
            height={20}
            width={20}
            color="white"
            secondaryColor="white"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <span className="text-base text-white leading-[22.4px]">Next</span>
        // <span className="text-center">{text}</span>
      )}
    </button>
  );
};

export default JobButton;
