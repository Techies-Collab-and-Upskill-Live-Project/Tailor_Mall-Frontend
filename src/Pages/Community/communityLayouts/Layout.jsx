import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import Chat from "../Chats/chat";
import SideMenu from "../../SideMenu/SideMenu";
import { useEffect, useState } from "react";

const Layout = () => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  
  const showSideMenu = () => {
    setOpenSideMenu((prev) => !prev);

    console.log(openSideMenu);
  };

  return (
    <>
      <Navbar text="post jobs" />
      <div className="w-full relative flex lg:flex-row flex-col transition-all duration-500 h-screen">
        <div className="md:hidden border border-red-600">
          {/* {SideMenu ? <SideMenu /> : <Chat />} */}
          <Chat />
        </div>

        <div className="w-full h-full hidden mt-[50px] lg:mt-[100px] md:flex">
          <div className="border-r h-screen border-foundationGrey-50 bg-[#fff]">
            <Sidebar />
          </div>

          <div className="h-full flex-1 mt-[50px] lg:mt-[100px] overflow-y-auto">
            <Outlet context={[openSideMenu, setOpenSideMenu, showSideMenu]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
