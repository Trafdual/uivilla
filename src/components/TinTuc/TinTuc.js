import React from 'react';
import { Link } from 'react-router-dom';
import './TinTuc.scss';

const TinTuc = ({ image, title, date, description,titlekhongdau }) => {
  return (
    <div className="news-item">
      <div className="news-image">
        <img src={`http://localhost:8080/${image}`} alt={title} />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p className="news-description">{description}</p>
        <Link to={`/chitietblog/${titlekhongdau}`} className="news-link">
        Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default TinTuc;
