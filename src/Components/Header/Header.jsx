import React from "react";

const Header = () => (
  <div>
    <div className="text-center w-[10]">
      <h1 className="text-5xl font-semibold   text-center box-decoration-slice bg-gradient-to-r from-sky-600 to-red-500 text-white px-2 py-10">
        Saikiran Belana's Blog
      </h1>
      <div className="text-4xl font-bold text-sky-700 my-2 ">
        <span className="text-gray-400">"</span>Built with React{" "}
        <span className="text-gray-400">"</span>{" "}
      </div>

      <p className="text-gray-400 font-semibold text-[1.2rem]">
        An Awesome blog page built with React and Tailwind CSS
      </p>
    </div>
  </div>
);

export default Header;
