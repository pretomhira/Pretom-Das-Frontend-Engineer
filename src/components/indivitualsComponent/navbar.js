import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { refresh } from "../../redux/tools/movieSlice";
import { useDispatch } from "react-redux";
import github from "../../assets/github.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState("hidden md:flex");
  const handleClick = () => {
    setShow((s) => (s == "hidden" ? "block" : "hidden"));
  };
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <nav
        className={`${show} flex flex-col md:flex-row gap-x-5 text-center md:text-left `}
      >
        <NavLink
          to="/reactjs"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          ReactJs
        </NavLink>
        <NavLink
          to="/frontend"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          Frontend
        </NavLink>
        <NavLink
          to="/webDev"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          Web Dev
        </NavLink>
        <NavLink
          to="/javaScript"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          JavaScript
        </NavLink>
        <NavLink
          to="/opensource"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          Open Source
        </NavLink>
        <NavLink
          to="/coding"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to="/tutorial"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold p-2 px-3 border-b-2 border-black"
              : "text-gray-500 text-lg p-2 px-3 border-b-[1px] border-gray-500/50 md:border-b-0 drop-shadow-lg shadow-none hover:shadow-lg rounded-none md:rounded-lg hover:text-gray-900 hover:drop-shadow-lg"
          }
        >
          Learn Javascript
        </NavLink>
        <NavLink
          to="/award"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold py-2 my-2 md:my-0 px-4 bg-yellow-500 rounded-lg mx-4"
              : "text-white text-lg py-2 my-2 md:my-0 px-4 hover:text-gray-900 bg-yellow-500  rounded-lg mx-4 "
          }
        >
          Award
        </NavLink>
        <div
          onClick={handleClick}
          className="w-full h-screen bg-white/5   block md:hidden"
        ></div>
      </nav>
      <div className="flex justify-center md:justify-end flex-row gap-x-4 py-2 border-b-2 border-gray-500/50 md:border-b-0">
        <div>
          <svg
            onClick={() => dispatch(refresh())}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 border-[1px] bg-white border-gray-500/20 drop-shadow-none hover:drop-shadow-2xl shadow-none hover:shadow-lg p-2 px-3 rounded-full"
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
        <div>
          <ExternalLink href="https://github.com/pretomhira/Pretom-Das-Frontend-Engineer">
            <img
              className="w-10 h-10 rounded-full drop-shadow-none hover:drop-shadow-lg hover:shadow-lg"
              src={github}
            ></img>
          </ExternalLink>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
            class="p-2 border-[1px] border-gray-500/20 rounded-lg h-10 w-10 cursor-pointer md:hidden block shadow-none drop-shadow-none hover:shadow-lg hover:drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
