import { useOutletContext } from "react-router";
import SideMenu from "../../SideMenu/SideMenu";
import ChatArea from "./ChatArea";
import Header from "./Header";
import MessageArea from "./MessageArea";

const Chat = () => {
  return (
    <>
      <div className="flex-1 w-full">
        <Header />

        <ChatArea />
        {/* <MessageArea /> */}
      </div>
    </>
  );
};

export default Chat;
