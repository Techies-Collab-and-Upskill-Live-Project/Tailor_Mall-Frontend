import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import Chat from "../Chats/Chat";
import SideMenu from "../../SideMenu/SideMenu";
import { useEffect, useState } from "react";
import CommunitySideMenu from "../../SideMenu/CommunitySideMenu";

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
        <div className="md:hidden">
          <SideMenu />
          {/* {SideMenu ? <SideMenu /> : <Chat />} */}
          {/* <SideMenu /> */}
          {/* <CommunitySideMenu /> */}
        </div>

        <div className="w-full h-full hidden md:flex">
          <div className="border-r mt-[50px] lg:mt-[80px] h-screen border-foundationGrey-50 bg-[#fff]">
            <Sidebar />
          </div>

          <div className="h-full flex-1 overflow-hidden">
            <Outlet context={[openSideMenu, setOpenSideMenu, showSideMenu]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
