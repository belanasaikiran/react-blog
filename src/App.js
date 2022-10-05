import React from "react";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
