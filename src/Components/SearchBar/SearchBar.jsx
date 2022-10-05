import React from "react";

const SearchBar = ({ value, clearSearch, handleSearchKey, formSubmit }) => {
  return (
    <div className="w-fit mx-auto my-auto  rounded p-4">
      <form onSubmit={formSubmit} className=" bg-gray-100 flex items-center ">
        <input
          className="bg-gray-100 outline-none border-none px-2"
          type="text"
          onChange={handleSearchKey}
          value={value}
          placeholder=" Search By Category"
        />
        {value && (
          <span className="text-black p-4 cursor-pointer" onClick={clearSearch}>
            X
          </span>
        )}
        <button className="bg-blue-700 text-white rounded outline-none border-none  my-2 mr-2 px-2">
          {" "}
          GO{" "}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
