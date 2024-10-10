import React from "react";
import logo from "./Assets/logo.png";

const NavWlogoNborderLine = () => {
  return (
    <div>
      <div className=" flex items-center px-5 md:px-14 py-4 lg:border-b-[1.5px] w-full h-[60px] ">
        <img
          className="md:w-[130px] w-[100px] opacity-0 lg:opacity-100"
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavWlogoNborderLine;
