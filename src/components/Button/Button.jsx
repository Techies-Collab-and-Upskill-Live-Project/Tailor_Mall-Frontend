
import googleIcon from "../../assets/Google.png"
import { Link, NavLink } from "react-router-dom";

const ButtonLink = ({ isMain, img }) => {
  return (
    <div className="">
      <Link 
       className={`px-8 py-2 w-[140px] rounded-[100px] text-[6px] md:text-base flex items-center justify-center dot md:w-full md:py-4 md:px-8 md:gap-[52px] lg:p-4 md:h-12 lg:gap-3 ${
        isMain ? "bg-[#1877f2] text-white" : "border border-[#bcbcbc] text-black"
      }`}
      >
        <img src={img} className="inline w-5 h-5" />
        <span className="hidden md:block md:text-base lg:text-[10px]">Signup with facebook </span>
      </Link>
    </div>
  );
};

export default ButtonLink;
