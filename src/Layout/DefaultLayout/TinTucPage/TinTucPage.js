import React from "react";
import TinTuc from "../../../components/TinTuc/TinTuc";
import './TinTucPage.scss';
const newsData = [
    {
      image: '/tintuc/286556677_154589970441187_5711837541125460676_n.jpg',
      title: 'Tất tần tật kinh nghiệm du lịch Ba Vì 2 ngày 1 đêm từ A-Z',
      date: '17/06/2022',
      description: 'Là một địa điểm du lịch không quá xa trung tâm Hà Nội, Ba Vì',
      linkText: 'ĐỌC THÊM',
    },
    {
      image: '/tintuc/vuonquocgia.jpg',
      title: 'Mùa hoa dã quỳ Ba Vì nở vào tháng mấy? Địa điểm ngắm hoa dã quỳ đẹp nhất',
      date: '17/06/2022',
      description: 'Hoa Dã Quỳ tại Ba Vì chi nở rộ trong khoảng 10 ngày đến 2',
      linkText: 'ĐỌC THÊM',
    },
    {
      image: '/tintuc/hoa-da-quy-ba-vi.jpg',
      title: '7 món đặc sản nhất định phải thử khi đến Ba Vì',
      date: '17/06/2022',
      description: 'Nếm ăn món gà đồi ngon khi đến Ba Vì? Dưới đây là top 7 Đặc',
      linkText: 'ĐỌC THÊM',
    },
  ];
const TinTucPage = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <img src="/KTT08640.jpg" alt="Header Image" className="header-image" />
        <h1>Tin tức</h1>
      </div>
      <div className="news-list">
        {newsData.map((news, index) => (
          <TinTuc
            key={index}
            image={news.image}
            title={news.title}
            date={news.date}
            description={news.description}
            linkText={news.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default TinTucPage;