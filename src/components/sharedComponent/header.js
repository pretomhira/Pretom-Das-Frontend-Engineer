import React from "react";
import { useState, useEffect } from "react";
import FloatIndex from "../../pages/floatingCard/floatIndex";
import Navbar from "../indivitualsComponent/navbar";

const Header = ({ showSidebar, isSideBarOpen }) => {
  const isOpen = false;
  useEffect(() => {}, []);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-4 pb-0 border-b-2 border-gray-400 ">
        <Navbar />
      </div>

      <div className=" w-2/5 h-36 fixed right-2 bottom-2">
        <FloatIndex />
      </div>
    </div>
  );
};

export default Header;
