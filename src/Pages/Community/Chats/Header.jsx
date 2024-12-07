import dp from "../assets/img2.png";
import search from "../assets/fi_search (2).png";
import sidebar from "../assets/Sidebar.png";
import hamburger from "../assets/hammenu.png";
import { useOutletContext } from "react-router";

const Header = () => {
  const [openSideMenu, setOpenSideMenu] = useOutletContext();

  return (
    // className="sticky border border-red-700 top-[29px] lg:top-[88px] z-[99] w-full lg:h-[88px] bg-white flex justify-between pl-[32px] pr-[24px] py-[24px] text-[16px] font-[500] leading-[16px] tracking-[-0.64px] text-[#7B7C7C] "
    <div className="flex sticky z-[90] py-1 mt-[70px] md:mt-0 md:pt-0 px-4 items-center justify-between gap-4 border-b border-b-foundationGrey-50 bg-[#fff]">
      <div className="flex items-center flex-shrink-0 gap-2">
        <img src={dp} alt="" />

        <div className="gap-2">
          <h3 className="text-sm">Chukwu Blessed</h3>

          <p className="text-[12px]">online</p>
        </div>
      </div>

      <div className="flex flex-shrink-0 gap-2 items-center">
        <img
          className="w-[20px] h-[22px] flex items-center"
          src={search}
          alt=""
        />
        <img
          className="w-[20px] h-[22px] flex items-center"
          onClick={setOpenSideMenu((prev) => prev)}
          src={sidebar}
          alt=""
        />
        <div className="flex items-center flex-shrink-0">
          <img className="w-[15px] h-[25px]" src={hamburger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
