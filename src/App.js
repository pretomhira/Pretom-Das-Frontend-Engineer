import React from "react";

import Header from "./components/sharedComponent/header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactJs from "./pages/nav_pages/reactJs";
import Frontend from "./pages/nav_pages/frontend";
import WebDev from "./pages/nav_pages/webDev";
import JavaScript from "./pages/nav_pages/javaScript";
import OpenSoure from "./pages/nav_pages/opensource";
import Programming from "./pages/nav_pages/programming";
import Learn from "./pages/nav_pages/learn_javascript";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ReactJs />} />
        <Route path="/reactjs" element={<ReactJs />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/webDev" element={<WebDev />} />
        <Route path="/javaScript" element={<JavaScript />} />
        <Route path="/opensource" element={<OpenSoure />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;
