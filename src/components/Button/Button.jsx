
import googleIcon from "../../assets/Google.png"
import { Link, NavLink } from "react-router-dom";

const ButtonLink = ({ isMain, img }) => {
  // const [active, setActive] = useState(null);

  // const onActive = (index) => {
  //   setActive(index);
  // };

  // onClick={() => onActive(index)}
  // key={index}
  // className={`flex flex-col gap-[6px] border p-5 w-[300px] md:w-fit rounded-3xl transition duration-300 ${
  //   active === index
  //     ? "border-blue-500 bg-blue-400"
  //     : "border-[#BCBCBC]"
  // }`}
  return (
    // <div className="">
    //   <button
    //    className={`px-8 py-2 w-[140px] rounded-[100px] text-[6px] md:text-base flex items-center justify-center dot md:w-full md:py-4 md:px-8 md:gap-[52px] lg:p-4 md:h-12 lg:gap-3 ${
    //     isMain ? "bg-[#1877f2] text-white" : "border border-[#bcbcbc] text-black"
    //   }`}
    //   >
    //     <img src={img} className="inline w-5 h-5" />
    //     <span className="hidden md:block md:text-base lg:text-[10px]">Signup with facebook </span>
    //   </button>
    // </div>

    <button className={`flex p-4 justify-center items-center gap-3 dot rounded-[100px] ${isMain ? "bg-[#1877fc] text-wrap text-white" : "border border-[#bcbcbc]"}`}
    >
      <img src={img} className="w-5 h-5" alt="" />
      <span className="hidden md:flex text-base leading-[22.4px] lg:text-[14px]" >{isMain ? "Signup with Facebook" : "Signup with Google"}</span>
    </button>
  );
};

export default ButtonLink;
