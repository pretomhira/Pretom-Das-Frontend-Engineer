import React from "react";

import Header from "./components/sharedComponent/header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/nav_pages/home";
import Blog from "./pages/nav_pages/blog";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:type" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
