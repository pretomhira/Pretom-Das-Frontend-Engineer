import React from "react";

import Header from "./components/sharedComponent/header";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Blog from "./pages/nav_pages/blog";
import BlogDetail from "./pages/nav_pages/blogDetail";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/reactjs" />} />
        <Route path="/:type" element={<Blog />} />
        <Route path="/:type/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
