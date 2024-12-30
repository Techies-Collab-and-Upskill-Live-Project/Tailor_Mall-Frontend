import React, { useState } from "react";
import img from "./assets/comm.png";
import Navbar from "../../components/Navbar/Navbar";

const CommunityAdmin = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`bg-gray-100 border-r w-64 p-4 
          lg:block 
          ${isMobileSidebarOpen ? "block" : "hidden"} 
          fixed top-0 left-0 h-full z-50 lg:relative`}
        >
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden text-gray-500 mb-4"
          >
            Close
          </button>
          <h1 className="text-lg font-bold mb-4">Community</h1>
          <ul>
            {[
              "Fashion enthusiasts",
              "Tailor talk",
              "Designer’s Hub",
              "Fashion Forward",
              "Design connect",
              "Couture chic",
              "Tailor’s circle",
            ].map((item, index) => (
              <div className="flex items-center gap-3">
                <img src={img} alt="" />
                <li
                  key={index}
                  className="flex justify-between items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                >
                  <span className="text-[14px]">{item}</span>
                  <span className="text-sm text-gray-400">
                    {index === 0
                      ? "09:47 PM"
                      : new Date().toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Community</h1>
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden bg-teal-500 text-white p-2 rounded-md"
            >
              Open Sidebar
            </button>
          </div>
          <div className="bg-white h-full border rounded-md shadow-md">
            {/* Placeholder for main content */}
            <p className="p-4 text-gray-500">
              Select a conversation to view messages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityAdmin;
