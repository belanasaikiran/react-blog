import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing data from files
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";

const App = () => (
  <div className="font-[montserrat]  px-0 m-0">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
