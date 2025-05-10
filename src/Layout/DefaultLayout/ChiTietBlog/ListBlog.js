import React, { useEffect, useState } from "react";
import "./ListBlog.scss"; 

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getblog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="news-list-detail">
      <div className="news-header-detail">TIN TỨC MỚI</div>
      <ul className="news-items-detail">
        {blogs.slice(0, 2).map((blog) => (
          <li key={blog._id} className="news-item-detail">
            <div className="news-thumbnail">
              <img src={blog.img_blog} alt={blog.tieude_blog} />
            </div>
            <a
              href={`/chitietblog/${blog.tieude_khongdau}`}
              className="news-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {blog.tieude_blog}
            </a>
            <p>{blog.ngaydang}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlog;
