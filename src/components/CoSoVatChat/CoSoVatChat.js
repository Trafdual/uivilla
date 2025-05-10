// src/components/AmenitiesSection.jsx
import React from "react";
import "./CoSoVatChat.scss";
const CoSoVatChat = () => {
  const amenities = [
    {
      icon: "/tivi.png",
    },
    {
      icon: "/giuong.png",
    },
    {
      icon: "/food.png",
    },
  ];

  return (
    <div className="amenities-section">
      <div className="cosovatchat">
        <div className="amenities-content">
        <h1>Cơ sở vật chất</h1>
        <p>
          Một trong những yếu tố hàng đầu định hình chuyến nghỉ dưỡng của bạn trở
          nên trọn vẹn, thoải mái chính là việc lựa chọn một khách sạn cao cấp để
          lưu trú trong suốt chuyến đi.
        </p>
        <p>
          Một trong những yếu tố hàng đầu định hình chuyến nghỉ dưỡng của bạn trở
          nên trọn vẹn, thoải mái chính là việc lựa chọn một khách sạn cao cấp để
          lưu trú trong suốt chuyến đi.
        </p>
      </div>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <img
            src={amenity.icon}
            key={index}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CoSoVatChat;
