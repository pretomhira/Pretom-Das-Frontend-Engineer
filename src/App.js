import React from "react";

import Header from "./components/sharedComponent/header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from "./pages/nav_pages/blog";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/:type" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
