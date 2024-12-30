import { useState } from "react";
import { MessageData } from "../../../Messages/MessageData";
import search from "../../assets/fi_search (2).png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // <div className="hidden border pt-[110px] md:flex w-max h-screen z-[20] px-4">
    <div
      className="px-5 pt-10 inline-flex flex-col items-center justify-center flex-start gap-6 flex-shrink-0 lg:px-5"
      // className="lg:w-[310px] fixed top-[6.7%] md:w-[150px] lg:top-[7.6%] left-0 z-[99] md:px-4 lg:px-4 border-r-2 lg:shrink-0 h-screen  bg-white max-lg:pt-[54px] flex lg:flex-col max-lg:justify-center"
    >
      {/* <div className="items-center">
        <img src={search} alt="" />
      </div> */}
      {/* <Filter /> */}
      <div className={`flex w-full flex-col gap-10 items-start`}>
        {MessageData.map((item, index) => (
          <div
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#fff]"
            key={index}
          >
            <img src={item.img} className="w-[60px] h-[60px]" alt="" />

            <div className="hidden lg:flex dot flex-col gap-2 dot">
              <div className="flex justify-between items-center self-stretch">
                <p className="text-[14px] leading-[22.4px]">{item.name}</p>
                <p className="text-grey-50 opacity-[0.38] text-[12px] leading-[14.4px]">
                  {item.time}
                </p>
              </div>

              <div className="flex justify-between items-center self-stretch">
                <p className="text-[14px] text-grey-50 leading-[19.6px]">
                  Hey! I’m looking to get a suit...
                </p>

                {item.unread && (
                  <p className="flex items-center bg-primary-50 rounded-full w-5 p-1 h-5 justify-center text-[12px]">
                    {item.unread}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
