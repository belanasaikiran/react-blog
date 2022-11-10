import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
