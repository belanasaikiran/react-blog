import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import { Link } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, [id]);
  return (
    <div className="my-4 px-80">
      <Link to="/" className="text-3xl text-cyan-700 font-semibold">
        &#8592; <span> Go Back </span>
      </Link>

      {blog ? (
        <div className="mt-20">
          <header className="">
            <h1 className="text-center text-6xl font-bold text-sky-600">
              {" "}
              {blog.title}
            </h1>
            <p className="text-center py-8 text-lg text-gray-600">
              Published {blog.createdAt}
            </p>

            <div className="grid grid-cols-3 align-center gap-4  pb-4 px-60">
              {blog.subCategory.map((subCategory, index) => (
                <div className="bg-orange-600 mx-4 text-center py-2 rounded text-white">
                  {subCategory}
                </div>
              ))}
            </div>
          </header>

          {/* /image */}
          <img src={blog.cover} alt="cover" className="w-[100%]" />
          <p className="text-xl py-4">{blog.description}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Blog;
