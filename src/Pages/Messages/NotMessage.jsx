import { useState } from "react";
import { NavLink } from "react-router-dom";

const Message = ({ MessageData }) => {
  // const [expanded, setExpanded] = useState(true);

  // const handleClick = () => {
  //   closeMenu();
  //   setExpanded((prev) => !prev);
  // };

  return (
    <div className="flex flex-col gap-1 md:items-start self-stretch mt-8">
      {/* <div
      className={`flex flex-col gap-1 md:items-start self-stretch mt-8 ${
        openMenu ? "w-fit z-[9999]" : "w-0 z-0 overflow-hidden transition-all"
      }`}
    > */}
      {MessageData.map((item, index) => (
        <NavLink className="flex py-5 px-3 items-center gap-4 self-stretch bg-white rounded-2xl">
          <div>
            <img className="md:w-[60px] md:h-[60px]" src={item.img} alt="" />
          </div>

          <div
            className="flex flex-col items-center gap-3 dot"
            // className={`overflow-hidden transition-all max-lg:hidden ${
              // !expanded ? "flex flex-col items-center gap-3 dot" : "hidden"
            // }`}
          >
            <div className="flex justify-between items-center self-stretch">
              <h1 className="text-[14px] md:text-base">{item.name}</h1>
              <p className="text-[12px] md:text-[14px]">{item.time}</p>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <p className="text-[12px] md:text-[14px]">{item.detail}</p>

              {item.unread && (
                <p className="flex items-center bg-primary-50 rounded-full w-5 p-1 h-5 justify-center text-[12px]">
                  {item.unread}
                </p>
              )}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Message;
