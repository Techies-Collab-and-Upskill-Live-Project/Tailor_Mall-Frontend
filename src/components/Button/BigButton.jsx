import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const BigButton = ({ text, submit, className, to, IsDisabled, loadingText }) => {
  return (
    <button
      disabled={IsDisabled}
      onClick={submit}
      to={to}
      className={`rounded-[100px] flex items-center justify-center px-3 bg-primary-100 h-10 text-primaryGreen-50 text-[12px] leading-4 font-medium md:text-base md:leading-[16.8px] lg:text-[16px] md:w-full ${className}`}
    >
      <Link type="submit">
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
          <span className="text-center">{text}</span>
        )}
      </Link>
    </button>
  );
};

export default BigButton;
