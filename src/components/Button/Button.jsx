
import googleIcon from "../../assets/Google.png"
import { Link, NavLink } from "react-router-dom";

const ButtonLink = ({ isMain }) => {
  return (
    <div className="">
      <Link 
       className={`px-8 py-2 w-[140px] rounded-[100px] text-[6px] md:text-base flex items-center justify-center md:p-4 md:w-[324.5px] lg:w-[220.5px] md:gap-1 lg:p-4 ${
        isMain ? "bg-[#1877f2] text-white" : "border border-[#bcbcbc] text-black"
      }`}
      >
        <img src={googleIcon} className="inline w-5 h-5" />
        <span className="hidden md:block md:text-base">Signup with facebook </span>
      </Link>
    </div>
  );
};

export default ButtonLink;
