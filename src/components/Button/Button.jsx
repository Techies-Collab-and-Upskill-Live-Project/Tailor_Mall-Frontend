import { FaGoogle } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const ButtonLink = ({ isMain }) => {
  return (
    <div>
      <Link 
       className={`px-4 py-2 rounded-3xl text-[6px] md:text-base ${
        isMain ? "bg-blue-900 text-white" : "border border-black text-black"
      }`}
      >
        <FaGoogle className="inline" />
        <span className="hidden">Signup with facebook </span>
      </Link>
    </div>
  );
};

export default ButtonLink;
