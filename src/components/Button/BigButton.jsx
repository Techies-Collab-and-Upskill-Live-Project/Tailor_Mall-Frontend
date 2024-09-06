import { Link } from "react-router-dom";

const BigButton = ({ text, submit, className, to }) => {
  return (
    <button
      onClick={submit}
      className={`rounded-[100px] flex items-center justify-center px-[12px] bg-[#008080] h-10 text-[#E6F2F2] text-[12px] leading-4 font-medium md:text-base md:leading-[16.8px] lg:text-[16px] md:w-full ${className}`}
    >
      <Link to={to}>
        <span className="text-center"> {text} </span>
      </Link>
    </button>
  );
};

export default BigButton;
