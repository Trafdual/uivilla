import './DanhGia.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

function DanhGia () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  const data = [
    {
      avatar:
        'https://socavilla.vn/wp-content/uploads/2022/06/8207229e62ec8db2d4fd.jpg',
      name: 'Diệu nhi',
      content:
        'Mới đi  trải nghiệm xong, phòng nghỉ mới sạch đẹp, bể bơi rộng, không khí trong sạch mát mẻ thư giãn sau những ngày làm việc căng thẳng'
    },
    {
      avatar:
        'https://socavilla.vn/wp-content/uploads/2022/06/4f0d2f222789c8d79198.jpg',
      name: 'Quang Huy',
      content:
        'Có cả quầy Bar caffe, tổ chim trên cây ngồi uống trà, rất thoải mái mới lạ hơn chỗ khác.Bể bơi đẹp mê, chủ nhà và phục vụ rất thân thiện, hỏi han.'
    }
  ]

  return (
    <div className='div_danhgia'>
      <div className='div_thienduong_overlay'></div>
      <div className='div_danhgia_tong'>
        <h2>Khách Hàng Đánh Giá</h2>
        <Slider {...settings} className='div_danhgia_slider'>
          {data.map((src, index) => (
            <div className='div_danhgia_slider_item'>
              <p>{src.content}</p>
              <div className='div_danhgia_slider_item_avatar'>
                <img src={src.avatar} alt='' />
                <h3>{src.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default DanhGia
