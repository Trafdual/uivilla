import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./ChiTietBlog.scss";
import ListBlog from "./ListBlog";

const BlogDetail = () => {
  const { tieude_khongdau } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/getchitietblog/${tieude_khongdau}`) 
      .then((response) => response.json())
      .then((data) => {
        console.log("Blog detail data:", data);
        setBlog(data);
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [tieude_khongdau]); 

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <h1>{blog.tieude_blog}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.noidung }} />
      </div>
      <div className="category-sidebar">
        <ListBlog/>

      </div>
    </div>
  );
};

export default BlogDetail;
