// import { useState } from "react";
// import Search from "../Community/SearchCommunity";
// import Navbar from "../../components/Navbar/Navbar";
// import useActive from "../../Hooks/useActive";
// import { toDisplay } from "./CommunityData";
// import Message from "../Messages/Message";
// import CommunityMessage from "../Messages/CommunityMessage";
// import Chat from "../Community/Chats/Chat";
// import DisplayMessage from "./DisplayMessage";

// const Messaging = () => {
//   const { active, onActive } = useActive();
//   const [showSideMenu, setShowSideMenu] = useState(false);
//   const [showChat, setShowChat] = useState(false);

//   return (
//     <>
//       <Navbar text="Share work" />

//       <div className="">
//         {!showChat ? (
//           <div className="flex">
//             <div className="py-5 mt-[60px] lg:px-3 md:border-r-[1.5px] border-foundationGrey-50">
//               <DisplayMessage showChat={showChat} setShowChat={setShowChat} />
//             </div>

//             <div className="hidden md:flex flex-1">
//               <Chat showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
//             </div>
//           </div>
//         ) : (
//           <Chat showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
//         )}
//       </div>

//       {/* <div className={`md:flex ${showChat ? "border-t border-red-500" : ""}`}>
//         <div className="py-5 mt-[60px] lg:px-3 md:border-r-[1.5px] border-foundationGrey-50">
//           <DisplayMessage showChat={showChat} setShowChat={setShowChat} />
//         </div>

//         <div
//           className={`hidden w-full md:flex lg:flex-1 ${
//             showChat ? "lg:flex-1" : "hidden"
//           }`}
//         >
//           <Chat />
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Messaging;

import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useActive from "../../Hooks/useActive";
import DisplayMessage from "./DisplayMessage";
import Chat from "../Community/Chats/Chat";
import SideMenu from "../SideMenu/SideMenu";

const Messaging = () => {
  const { active, onActive } = useActive();
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Navbar text="Share work" />

      <div className="flex">
        <div className={`${showChat ? "hidden md:flex" : "flex"} py-5 mt-[60px] lg:px-3 md:border-r-[1.5px] border-foundationGrey-5`}>
          <DisplayMessage showChat={showChat} setShowChat={setShowChat} />
        </div>

        <div className={`flex-1 ${!showChat ? "hidden md:flex" : "flex"}`}>
          <Chat showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
        </div>

        <div className={`hidden ${showSideMenu ? "md:flex" : ""}`}>
          <SideMenu showSideMenu={showSideMenu} />
        </div>
      </div>
    </>
  );
};

export default Messaging;
