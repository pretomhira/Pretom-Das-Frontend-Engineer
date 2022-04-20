import React, { useEffect } from "react";
import loading from "./assets/loading.png";

import Header from "./components/sharedComponent/header";

import Award from "./pages/award/award";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Blog from "./pages/nav_pages/blog";
import BlogDetail from "./pages/nav_pages/blogDetail";
import { useSelector } from "react-redux";

function App() {
  const refresh = useSelector((state) => state.movies.refresh);

  const refreshAnimate = () => {
    document.querySelector("#refresh").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector("#refresh").classList.add("hidden");
    }, 1000);
    console.log(refresh);
  };
  useEffect(() => {
    refreshAnimate();
  }, [refresh]);
  return (
    <Router>
      <Header />
      <div className="relative">
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/reactjs" />} />
          <Route path="/:type" element={<Blog />} />
          <Route path="/:type/:id" element={<BlogDetail />} />
          <Route path="/award" element={<Award />} />
        </Routes>
        <div
          id="refresh"
          className="hidden absolute top-0 left-0 w-full h-screen bg-white/40"
        >
          <div className="flex flex-row justify-center h-full">
            <div className="flex flex-col justify-center">
              <img className="w-10 h-10 animate-spin" src={loading} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
