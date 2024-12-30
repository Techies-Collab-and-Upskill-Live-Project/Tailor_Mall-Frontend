import plus from "../assets/fi_plus.png";
import send from "../assets/fi_send.png";

const ChatInput = ({handleChatChange, handleChatSubmit, chatText}) => {
  return (
    <div className="flex sticky bottom-0 w-full pt-4 px-6 pb-6 flex-col items-start gap-[10px] bg-white mt-5 chatinput ">
      <div className="flex items-center gap-3 self-stretch">
        <div className="flex items-center gap-3 dot">
          <div className="flex items-center py-3 px-[14px] gap-[10px] rounded-[100px] bg-primary-10">
            <img className="w-6 h-6" src={plus} alt="" />
          </div>

          <input type="text" name="text" value={chatText} onChange={handleChatChange} placeholder="Type your message..."  className="rounded-lg text-[12px] bg-primary-300 border-none outline-none py-4 px-3 w-full" />
        </div>

        <div onClick={handleChatSubmit} className="flex items-center p-2 gap-[10px] rounded-[100px] bg-primary-100">
            <img className="w-4 h-4" src={send} alt="" />
          </div>
      </div>
    </div>
  );
};

export default ChatInput;
