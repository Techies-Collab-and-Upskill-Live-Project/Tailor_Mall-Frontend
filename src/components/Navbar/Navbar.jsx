import menu from "./Assets/fi_menu (1).png";
import search from "./Assets/fi_search.png";
import person from "./Assets/person.png";
import icon from "./Assets/fi_chevron-down.png";
import filter from "./Assets/Filter.png";
import logo from "../../assets/Tailoralogo.png"

const Navbar = () => {
  return (
    <div className="shadow-sm bg-[#fff]">
      <nav className="border-b px-6 border-[#bcbcbc] flex items-center justify-between self-stretch md:px-10">
        <div className="flex gap-1 justify-between items-center">
          <img src={menu} className="w-6 h-6 flex-shrink-0" alt="" />
        <img src={logo} alt="" />
        </div>

        <div className="flex gap-[19px] px-6 py-5 items-center justify-between self-stretch">
          <img src={search} className="w-6 h-6" alt="" />
          <img src={person} className="w-8 h-8" alt="" />
        </div>
      </nav>

      <div className="flex py-[20px] px-6 items-center justify-between md:px-10 ">
        <div className="flex justify-center items-center h-[42px] w-[120px] rounded-[36px] gap-3 border-[0.75px] border-[#bcbcbc]">
          <p className="text-sm leading-[16.8px] font-medium">For you</p>
          <img src={icon} className="h-3 w-3 flex-shrink-0" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center gap-[8.75] h-[42px] w-[42px] rounded-[87.5px] border-[0.88px]">
          <img src={filter} className="w-[21px] h-[21px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
