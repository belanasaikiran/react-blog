import React from "react";
import "./BlogList.css";
// import Blog from "../../../Pages/Blog/";
import BlogItem from "./BlogItem/BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
