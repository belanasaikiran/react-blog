import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import BlogList from "../../Components/BlogList/BlogList";
import { blogList } from "../../config/data";
import Empty from "../../Components/Empty";
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
      <div className="xl:mx-40">
        {!blogs.length ? <Empty /> : <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
