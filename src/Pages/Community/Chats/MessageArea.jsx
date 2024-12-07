import React from "react";

const MessageArea = () => {
  const messages = [
    {
      text: "Hey! I’m looking to get a suit tailored and wanted to check if you can help. Sending a couple of ideas below",
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
    // {
    //   text: "",
    //   type: "received",
    //   time: "09:47 PM",
    // },
  ];

  return (
    <div className="bg-gray-100 h-screen flex flex-col p-4">
      <div className="flex-grow overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "received" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.type === "received"
                  ? "bg-blue-200 text-gray-900"
                  : "bg-green-300 text-gray-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default MessageArea;
