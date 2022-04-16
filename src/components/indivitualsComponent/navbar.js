import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  type_reactjs,
  type_frontend,
  type_webdev,
  type_javascript,
  type_opensource,
  type_programming,
  type_learnjavascript,
} from "../../actions/intro";

export default function Navbar() {
  const sub_reddit_type = useSelector((state) => state.subreddit);
  const dispatch = useDispatch();

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
          onClick={() => {
            dispatch(type_reactjs("reactjs"));
          }}
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
          onClick={() => {
            dispatch(type_frontend());
          }}
        >
          Frontend
        </NavLink>
        <NavLink
          to="/webDev"
          className={({ isActive }) =>
            isActive
              ? "text-black text-lg font-bold pb-4 border-b-2 border-black px-2"
              : "text-gray-500 text-lg pb-4 px-2"
          }
          onClick={() => {
            dispatch(type_webdev());
          }}
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
          onClick={() => {
            dispatch(type_javascript());
          }}
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
          onClick={() => {
            dispatch(type_opensource());
          }}
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
          onClick={() => {
            dispatch(type_programming());
          }}
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
          onClick={() => {
            dispatch(type_learnjavascript());
          }}
        >
          Learn Javascript
        </NavLink>
      </nav>
    </div>
  );
}
