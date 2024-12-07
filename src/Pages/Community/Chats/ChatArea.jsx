import { receive1, media, receive2, send1 } from "./chatAreaData";
import suit from "../assets/suit.png";
import tick from "../assets/tick.png";
import ChatInput from "./ChatInput";
import { useState } from "react";

const ChatArea = () => {
  const messages = [
    {
      text: "Hey! I’m looking to get a suit tailored and wanted to check if you can help. Sending a couple of ideas below",
      type: "received",
      time: "09:47 PM",
    },
    {
      img: suit,
      type: "received",
    },
    {
      text: "Hi! Yes, I can definitely help you. Do you have a specific occasion in mind?",
      type: "sent",
      time: "09:47 PM",
    },
    {
      text: "It’s for a wedding. I’m leaning towards the samples I sent, but with some tweaks. ",
      type: "received",
      time: "09:47 PM",
    },
    {
      text: "Hi! Yes, I can definitely help you. Do you have a specific occasion in mind?",
      type: "sent",
      time: "09:47 PM",
    },
    {
      text: "It’s for a wedding. I’m leaning towards the samples I sent, but with some tweaks. ",
      type: "received",
      time: "09:47 PM",
    },
    {
      text: "Hi! Yes, I can definitely help you. Do you have a specific occasion in mind?",
      type: "sent",
      time: "09:47 PM",
    },
    {
      text: "It’s for a wedding. I’m leaning towards the samples I sent, but with some tweaks. ",
      type: "received",
      time: "09:47 PM",
    },
    {
      text: "Hi! Yes, I can definitely help you. Do you have a specific occasion in mind?",
      type: "sent",
      time: "09:47 PM",
    },
    {
      text: "It’s for a wedding. I’m leaning towards the samples I sent, but with some tweaks. ",
      type: "received",
      time: "09:47 PM",
    },
    {
      text: "Hi! Yes, I can definitely help you. Do you have a specific occasion in mind?",
      type: "sent",
      time: "09:47 PM",
    },
    {
      text: "It’s for a wedding. I’m leaning towards the samples I sent, but with some tweaks. ",
      type: "received",
      time: "09:47 PM",
    },
  ];
  
  const [chatText, setChatText] = useState("");
  const handleChatChange = (e) => {
    setChatText(e.target.value);

    console.log(chatText);
  };

  const handleChatSubmit = () => {
    console.log(chatText);

    setChatText(" ");
  };

  return (
    <div className="bg-[#F9FBFB] w-full h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto space-y-4 p-4">
        {messages.map((message, index) => (
          <div key={index}>
            {message.text && (
              <div
                key={index}
                className={`flex ${
                  message.type === "received" ? "justify-start" : "justify-end"
                }`}
              >
                <div className="flex flex-col items-center justify-center w-[300px] bg-white py-4 px-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[0px]">
                  <p className="text-[12px] text-grey-50">{message.text}</p>
                  <div className="flex items-center gap-2 self-end">
                    <p className="text-[12px] text-grey-50">{message.time}</p>

                    <img src={tick} alt="" />
                  </div>
                </div>
              </div>
            )}

            {message.img && (
              <div className="flex gap-3">
                <img className="rounded-lg" src={message.img} alt="" />
                <img className="rounded-lg" src={message.img} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>

      <ChatInput
        handleChatChange={handleChatChange}
        chatText={chatText}
        handleChatSubmit={handleChatSubmit}
      />
    </div>
  );
};

export default ChatArea;
