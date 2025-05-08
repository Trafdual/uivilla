import React from 'react';
import './TinTuc.scss';

const TinTuc = ({ image, title, date, description, linkText }) => {
  return (
    <div className="news-item">
      <div className="news-image">
        <img src={image} alt={title} />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p className="news-description">{description}</p>
        <a href="#" className="news-link">{linkText}</a>
      </div>
    </div>
  );
};

export default TinTuc;