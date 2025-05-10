import React from "react";
import './MenuDoAn.scss';

const MenuDoAn = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <img src="/lienhe.jpg" alt="Header Image" className="header-image" />
        <h1>Menu Đồ Ăn</h1>
      </div>
      <div className="menu-page">
        <h1>Thực đơn nhà hàng</h1>
        <div className="menu-container">
          <img src="/6e1e6b3f4a63893dd072-768x512.jpg" alt="Menu 1" className="menu-image" />
          <img src="/6e1e6b3f4a63893dd072-768x512.jpg" alt="Menu 2" className="menu-image" />
        </div>
      </div>
      <div className="menu-page">
        <h1>Thực đơn nướng BBQ</h1>
        <div className="menu-container2">
          <img src="/6e1e6b3f4a63893dd072-768x512.jpg" alt="Menu BBQ" className="menu-image" />
        </div>
      </div>
    </div>
  );
};

export default MenuDoAn;