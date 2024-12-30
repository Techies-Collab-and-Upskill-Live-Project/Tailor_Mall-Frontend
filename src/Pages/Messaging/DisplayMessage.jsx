import { useState } from "react";
import Search from "../Community/SearchCommunity";
import { toDisplay } from "./CommunityData";
import Message from "../Messages/Message";
import CommunityMessage from "../Messages/CommunityMessage";
import useActive from "../../Hooks/useActive";

const DisplayMessage = ({showChat, setShowChat}) => {
    const { active, onActive } = useActive()

  return (
    <div className={`p-5 md:my-4  ${showChat} ? "w-[100px]" : "hidden"`}>
      <Search showChat={showChat} />

      <div className={`flex items-center my-8 ${showChat ? "hidden" : "flex"}`}>
        {toDisplay.map((item, index) => (
          <div
            key={index}
            onClick={() => onActive(index)}
            className={`flex py-3 px-9 justify-center text-[14px] lg:text-base items-center gap-[10px] rounded-[100px] lg:px-3 ${
              active === index
                ? "bg-primary-10 text-primary-100"
                : "bg-transparent text-secondary"
            }`}
          >
            <p className="text-secondary text-[14px] leading-[22.4px]">
              {item}
            </p>
          </div>
        ))}
      </div>

      {active === 0 ? (
        <Message showChat={showChat} setShowChat={setShowChat} />
      ) : (
        <CommunityMessage />
      )}
    </div>
  );
};

export default DisplayMessage;
