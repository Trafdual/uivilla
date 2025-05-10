import React, { useState, useEffect } from 'react';
import './ListTinTuc.scss';
import TinTuc from '../../../components/TinTuc/TinTuc';

const ListTinTuc = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getblog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);
  return (
    <div className="news-page">
      <div className="news-header">
        <h4>TIN TỨC</h4>
        <div className="news-header-line"></div>
        <h1>Tin tức mới nhất</h1>
      </div>
      <div className="news-list">
        {blogs.slice(0, 2).map((news) => (
          <TinTuc
            image={news.img_blog}
            title={news.tieude_blog}
            date={news.ngaydang}
            titlekhongdau={news.tieude_khongdau}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTinTuc;