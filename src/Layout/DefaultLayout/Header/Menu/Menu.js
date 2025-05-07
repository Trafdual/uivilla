/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Menu.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function Menu () {
  const location = useLocation()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const menus = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Về chúng tôi', link: '/vect' },
    { name: 'Danh sách phòng', link: '/dsp' },
    { name: 'Menu đồ ăn', link: '/menu' },
    { name: 'Tiện ích', link: '/ti' },
    { name: 'Liên hệ', link: '/lh' }
  ]

  return (
    <section className='elementor-section'>
      <div className='elementor-menu-container'>
        <div className='elementor-menu-row'>
          <div className='elementor-menu-item_icon'>
            <div className='elementor-column-wrap'>
              <div className='elementor-widget-container'>
                <a href='#'>
                  <img
                    src='https://socavilla.vn/wp-content/uploads/2020/11/SOCA-Logo-Copy.png'
                    alt='logo'
                    className='menu-logo'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='elementor-menu-menubar'>
            <div className='elementor-column-populated'>
              <div className='elementor-widget-wrap'>
                <div className='elementor-element-populated'>
                  <div className='elementor__container'>
                    <div
                      className='elementor-menu-icon'
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                      <div className='elementor-menu-icon-bar'>
                        <FontAwesomeIcon icon={faBars} />
                      </div>
                    </div>
                    <nav
                      className={`menu_laptop_bar ${
                        showMobileMenu ? 'menu_mobile_open' : ''
                      }`}
                    >
                      <ul className='menu_ul_laptop'>
                        {menus.map((menu, index) => (
                          <li key={index}>
                            <a
                              href={menu.link}
                              className={`menu_a_laptop${
                                location.pathname === menu.link
                                  ? ' menu_a_active'
                                  : ''
                              }`}
                              onClick={() => setShowMobileMenu(false)}
                            >
                              {menu.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
