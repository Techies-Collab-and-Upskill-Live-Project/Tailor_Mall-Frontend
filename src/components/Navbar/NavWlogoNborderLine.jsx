import React from "react";
import logo from "./Assets/logo.png";

const NavWlogoNborderLine = () => {
  return (
    <div className="fixed bg-white top-0 left-0 right-0 flex items-center px-5 md:px-14 py-4 lg:border-b-[1.5px] lg:h-[60px] h-[50px] ">
      <img
        className="md:w-[130px] w-[100px] opacity-0 lg:opacity-100"
        src={logo}
        alt=""
      />
    </div>
  );
};

export default NavWlogoNborderLine;
