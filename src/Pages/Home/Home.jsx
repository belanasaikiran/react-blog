import React, { useState } from "react";
import Header from "../../Components/Home/Header/Header";
import SearchBar from "../../Components/Home/SearchBar/SearchBar";
import BlogList from "../../Components/Home/BlogList/BlogList";
import { blogList } from "../../config/data";
import EmptyList from "../../Components/Common/EmptyList/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchkey] = useState("");

  // Search Submit

  // Search for blogs by category
  const handleSearchResults = (event) => {
    event.preventDefault();

    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLocaleLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchkey("");
  };

  return (
    <div>
      {/* Page Header */}

      <Header />

      {/* Search Bar */}

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchResults}
        handleSearchKey={(e) => setSearchkey(e.target.value)}
      />

      {/* Blog List & Empty List */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
