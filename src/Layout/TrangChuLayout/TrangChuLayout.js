import './TrangChuLayout.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FormDatPhong } from './FormDatPhong'
import { GioiThieu } from './GioiThieu'
import { ListPhong } from './ListPhong'
import { ThienDuong } from './ThienDuong'
import { ThuVien } from './ThuVien'
import { DanhGia } from './DanhGia'
import ListTinTuc from './ListTinTuc/ListTinTuc'
import ListTienIch from './ListTienIch/ListTienIch'

const images = ['/banner.jpg', '/banner2.jpg', '/banner3.jpg']

function TrangChuLayout () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />
  }

  return (
    <>
      <div className='trang-chu-layout'>
        <section className='section-banner-tong'>
          <div className='elementor-menu-container1'>
            <div className='elementor_banner1'>
              <div className='elementor-widget-wrap1'>
                <div className='elementor-widget-container'>
                  <div className='n2_section'>
                    <div className='n2_section_ss'>
                      <div className='n2-ss-slider-1'>
                        <Slider {...settings} className='n2-ss-slider-2'>
                          {images.map((src, index) => (
                            <div
                              key={index}
                              className='n2-ss-slide-backgrounds'
                            >
                              <div className='n2-ss-slide-background'>
                                <div>
                                  <div
                                    className='n2-ss-slide-image'
                                    style={{ backgroundImage: `url(${src})` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FormDatPhong />
      </div>
      <GioiThieu />
      <ListPhong />
      <ListTienIch/>
      <ThienDuong />
      <ThuVien />
      <DanhGia />
      <ListTinTuc />

    </>
  )
}

export default TrangChuLayout
