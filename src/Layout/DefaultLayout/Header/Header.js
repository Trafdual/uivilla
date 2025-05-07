/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from './Menu'
import { useMediaQuery } from 'react-responsive'

const IsMobile = () => {
  return useMediaQuery({ query: '(max-width: 767px)' })
}

function Header () {
  const isMobile = IsMobile()

  return (
    <header className='header__container'>
      <div className='header__content'>
        <div className='header__content_inner'>
          <div className='header__content_inner_wrap'>
            {!isMobile && (
              <section className='header_inner_wrap_section'>
                <div className='header_inner_wrap_section_inner'>
                  <div className='header_inner_wrap_section_row'>
                    <div className='header_inner_wrap_section_col'>
                      <div className='header_section_col_inner'>
                        <div className='header_section_col_inner_address'>
                          <div className='elementor-widget-container'>
                            <div className='elementor-icon-box-wrapper'>
                              <div className='elementor-icon-box-icon'>
                                <span className='elementor-icon'>
                                  <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className='icon_loca'
                                  />
                                </span>
                              </div>
                              <div className='elementor-icon-box-container'>
                                <p className='elementor-icon-box-description'>
                                  <a href='https://goo.gl/maps/nSnzmkZcxUzCEupm9'>
                                    Thôn Bơn, Xã Vân Hòa, Huyện Ba Vì, Hà Nội{' '}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='header_inner_wrap_section_col w_33'></div>
                    <div className='header_inner_wrap_section_col'>
                      <div className='header_section_col_inner'>
                        <div className='header_section_col_inner_address'>
                          <div className='elementor-widget-container'>
                            <div className='elementor-icon-box-wrapper'>
                              <div className='elementor-icon-box-icon'>
                                <span className='elementor-icon'>
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className='icon_loca'
                                  />
                                </span>
                              </div>
                              <div className='elementor-icon-box-container'>
                                <p
                                  className='elementor-icon-box-description'
                                  style={{ textAlign: 'right' }}
                                >
                                  Hotline:{' '}
                                  <a href='tel: 0989.90.1212'>
                                    0989.90.1212 / 0989.59.0606
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
