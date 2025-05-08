import React from "react";
import "./ContactPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <img src="/lienhe.jpg" alt="Header Image" className="header-image" />
        <h1>Liên hệ</h1>
        <h2>THÔNG TIN LIÊN HỆ</h2>
        <div className="header-line"></div>
        <h3>KHÁCH SẠN SOCAVILLA HOTEL</h3>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="address-component">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="address-info">
              <h3>Địa chỉ</h3>
              <p>
                Socca Villa - Thôn Bơn - Xã Văn Hòa
                <br />- Huyện Ba Vì - Hà Nội
              </p>
            </div>
          </div>
          <div className="address-component">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="address-info">
              <h3>Điện thoại</h3>
              <p>0989.90.1212</p>
            </div>
          </div>
          <div className="address-component">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="address-info">
              <h3>Email</h3>
              <p>soccavillabooking@gmail.com</p>
            </div>
          </div>
          <div className="address-component">
            <div className="icon">
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div className="address-info">
              <h3>Website</h3>
              <p>
                <a href="https://socavilla.vn" target="_blank" rel="noopener noreferrer">
                  https://socavilla.vn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="form-and-feed">
          <div className="contact-form">
            <h3>Đề lại thông tin</h3>
            <div className="form-group">
              <label>Ngày nhận phòng</label>
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="form-group">
              <label>Ngày trả phòng</label>
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="form-group">
              <label>Thực đơn</label>
              <select>
                <option>Thực đơn</option>
              </select>
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="tel" placeholder="Số điện thoại" />
            </div>
            <button>Đặt phòng</button>
          </div>
          <div className="facebook-feed">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsocavilla&tabs=timeline&width=430&height=430&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="430px"
              height="430px"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;