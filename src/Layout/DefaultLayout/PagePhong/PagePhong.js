
import './PagePhong.scss';
import { ListPhongCPN } from '../../../components/ListPhongCPN';

const PagePhong = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <img src="/KTT08640.jpg" alt="Header Image" className="header-image" />
        <h1>Danh sách phòng</h1>
      </div>
      <div className="news-list">
      <ListPhongCPN />
      </div>
    </div>
  );
};

export default PagePhong;