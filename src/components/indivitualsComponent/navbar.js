import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          ReactJs
        </NavLink>
        <NavLink
          to="/frontend"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          {" "}
          Frontend
        </NavLink>
        <NavLink
          to="/webDev"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          Web Dev
        </NavLink>
        <NavLink
          to="/javaScript"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          JavaScript
        </NavLink>
        <NavLink
          to="/opensource"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          Open Source
        </NavLink>
        <NavLink
          to="/programming"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to="/learn"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
        >
          Learn Javascript
        </NavLink>
      </nav>
    </div>
  );
}
