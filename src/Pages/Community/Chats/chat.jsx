import { useOutletContext } from "react-router";
import SideMenu from "../../SideMenu/SideMenu";
import ChatArea from "./ChatArea";
import Header from "./Header";
import MessageArea from "./MessageArea";
import { useState } from "react";

const Chat = ({showSideMenu, setShowSideMenu}) => {
  // const [show, setShow] = useState(false)
  const [show, setShow] = useState(true);

  return (
    <div className="w-full">
      {show ? (
        <div className="flex-1 w-full mt-[70px] lg:mt-[80px]">
          <Header showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />

          <ChatArea />
        </div>
      ) : (
        <SideMenu />
      )}
    </div>
    // <div>Hello</div>
  );
};

export default Chat;
