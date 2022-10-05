import React, { useState } from "react";
import Header from "../../Components/Home/Header/Header";
import SearchBar from "../../Components/Home/SearchBar/SearchBar";
import blogList from "../../Components/BlogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [SearchKey, setSearchKey] = useState("");

  //Search handle for blogs
  const handleSearchResult = (event) => {
    event.preventDefault();

    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLocaleLowerCase().includes(SearchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear Search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* header */}
      <Header />

      {/* SearchBar */}
      <SearchBar
        value={SearchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchResult}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blogs */}
    </div>
  );
};

export default Home;
