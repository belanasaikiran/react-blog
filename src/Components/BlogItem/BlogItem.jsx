import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
  },
}) => {
  return (
    <div className="py-10">
      <img src={cover} alt="cover" className="w-full h-[280px] object-cover" />
      <div className="px-2">
        <h3 className="text-sky-900 font-bold text-3xl blogList-head">
          {title}
        </h3>
        <p className="text-lg  rounded  text-cyan-700  font-semibold">
          {category}
        </p>

        <p className=" py-2 text-base relative max-h-30 overflow-hidden after:content-['...']">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src={authorAvatar}
            alt="avatar"
            className="w-[50px] h-[50px] object-cover rounded-full mr-2"
          />

          <div>
            <h3 className="font-semibold text-sky-900 text-xl">{authorName}</h3>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link
          to={`/blog/${id}`}
          className="font-bold text-sky-800 mr-4 text-4xl"
        >
          →
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
