import React from "react";

import Header from "./components/sharedComponent/header";
import { Counter } from "./features/counter/counter";
import Award from "./pages/award/award";

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
      {/* <Counter /> */}
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/reactjs" />} />
        <Route path="/:type" element={<Blog />} />
        <Route path="/:type/:id" element={<BlogDetail />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </Router>
  );
}

export default App;
