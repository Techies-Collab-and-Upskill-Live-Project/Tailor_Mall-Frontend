import NavWithSearchBar from "../../components/Navbar/NavWithSearchBar";
import Search from "../../components/Search/Search";
import Message from "./Message";
import { MessageData } from "./MessageData";

const Messages = () => {
  return (
    <div className="">
      <NavWithSearchBar />

      <div className="lg:mt-[100px] mt-[90px] mb-[120px] px-5 md:px-10 lg:w-[400px]">
        <Search />

        <div className="flex items-center">
          <div className="flex py-3 px-9 justify-center items-center gap-[10px] rounded-[100px] bg-primary-50">
            <p className="text-primary-100 text-base leading-[22.4px] font-medium">
              Messages
            </p>
          </div>
          <div className="flex py-3 px-9 justify-center items-center gap-[10px] rounded-[100px]">
            <p className="text-secondary text-base leading-[22.4px] font-medium">
              Community
            </p>
          </div>
        </div>

        <Message MessageData={MessageData} />
      </div>
    </div>
  );
};

export default Messages;
