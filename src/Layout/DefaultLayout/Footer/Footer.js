import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Về chúng tôi</h3>
          <p className="p">
          <FontAwesomeIcon icon={faLocationDot} /> Địa chỉ: Socca Villa - Thôn Bơn - Xã Văn Hòa<br />
            - Huyện Ba Vì - Hà Nội<br />
            VPGD: Công ty TNHH Công Nghệ Nhất Sạch,<br />
            <FontAwesomeIcon icon={faLocationDot} /> ĐC: Số 3 ngõ 12 Trần Quý Kiên - Dịch Vọng - Cầu Giấy - Hà Nội
          </p>
          <p className="p">
          <FontAwesomeIcon icon={faPhone} /> Điện thoại: 0989.90.1212 / 0989.59.0606<br />
          <FontAwesomeIcon icon={faEnvelope} /> Email: soccavillabooking@gmail.com
          </p>
        </div>
        <div className="follow-us">
          <h3>Đăng ký</h3>
          <p>Đăng ký để nhận những thông tin mới nhất từ chúng tôi</p>
          <div className="email-input">
            <input type="email" placeholder="Địa chỉ Email" />
            <button>Gửi</button>
          </div>
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i>
          </a>
        </div>
        </div>
        <div className="map-section">
          <h3>Chỉ đường</h3>
          <div className="map-container">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134433.15847470792!2d106.96030134515784!3d20.967358468324235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a583896d6e359%3A0xe60e88af13062a43!2zTsO6aSBCw6BpIFRoxqE!5e1!3m2!1svi!2sus!4v1746693501238!5m2!1svi!2sus"
              width="100%"
              height="200px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
