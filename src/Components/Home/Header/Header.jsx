import React from "react";

const Header = () => (
  <div>
    <div className="text-center w-[10]">
      <h1 className="text-3xl font-semibold   text-center box-decoration-slice bg-gradient-to-r from-sky-600 to-red-500 text-white px-2">
        Saikiran Belana's Blog
      </h1>
      <div className="text-2xl font-bold text-sky-700 my-2 ">
        <span className="text-gray-400">"</span>Built with React{" "}
        <span className="text-gray-400">"</span>{" "}
      </div>

      <p className="text-gray-400 font-semibold text-[0.8rem]">
        An Awesome Blog blog page built with React and Tailwind CSS
      </p>
    </div>
  </div>
);

export default Header;
