import React from "react";
import { useState, useEffect } from "react";
import FloatIndex from "../../pages/floatingCard/floatIndex";
import Navbar from "../indivitualsComponent/navbar";

const Header = ({ showSidebar, isSideBarOpen }) => {
  const isOpen = false;
  useEffect(() => {}, []);
  return (
    <div className="">
      <div className="fixed top-0 z-10 w-full bg-white">
        <div className="max-w-7xl mx-auto p-4 pb-0 ">
          <Navbar />
        </div>
      </div>

      <div className=" w-full fixed right-2 bottom-2 z-10">
        <FloatIndex />
      </div>
    </div>
  );
};

export default Header;
