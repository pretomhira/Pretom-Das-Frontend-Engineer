import React from "react";
import { NavLink } from "react-router-dom";
import { refresh } from "../../redux/tools/movieSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between">
      <nav className="flex flex-row gap-5">
        <NavLink
          to="/reactjs"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          ReactJs
        </NavLink>
        <NavLink
          to="/frontend"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          Frontend
        </NavLink>
        <NavLink
          to="/webDev"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          Web Dev
        </NavLink>
        <NavLink
          to="/javaScript"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          JavaScript
        </NavLink>
        <NavLink
          to="/opensource"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          Open Source
        </NavLink>
        <NavLink
          to="/coding"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to="/tutorial"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2 hover:text-gray-900"
          }
        >
          Learn Javascript
        </NavLink>
        <NavLink
          to="/award"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold py-2 px-4 bg-yellow-500 rounded-lg mx-4"
              : "text-white text-lg py-2 px-4 hover:text-gray-900 bg-yellow-500  rounded-lg mx-4 "
          }
        >
          Award
        </NavLink>
      </nav>
      <div>
        <svg
          onClick={() => dispatch(refresh())}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 border-[1px] bg-white border-gray-500/20 drop-shadow-none hover:drop-shadow-2xl shadow-none hover:shadow-lg p-2 rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
    </div>
  );
}
