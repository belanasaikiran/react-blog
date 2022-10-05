import React from "react";
import "./BlogItem.css";
import Chip from "../../../Common/Chip/Chip";

import { Link } from "react-router-dom";
const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    Category,
    cover,
  },
}) => (
  <div className="blogItem-wrap">
    <img src={cover} alt="cover" className="blogItem-cover" />

    <Chip label={Category} />
    <h3> {title}</h3>
    <p className="blogItem-desc">{description}</p>

    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avator" />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        →
      </Link>
    </footer>
  </div>
);

export default BlogItem;
