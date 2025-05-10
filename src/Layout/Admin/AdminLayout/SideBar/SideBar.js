import { FaBuilding, FaBlog, FaCalendarDay, FaStar } from 'react-icons/fa'
import './SideBar.scss'

function Sidebar ({ activeMenu, setActiveMenu, isOpen }) {
  const menu = [
    { key: 'product', label: 'Quản lý phòng', icon: <FaBuilding /> },
    { key: 'blog', label: 'Blog', icon: <FaBlog /> },
    { key: 'datphong', label: 'Quản lý đặt phòng', icon: <FaCalendarDay /> },
    { key: 'danhgia', label: 'Quản lý đánh giá', icon: <FaStar /> }
  ]

  return (
    <aside className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <div className='sidebar-header'>
        <span className='brand'>
          🏨
          <div className='brand-name'>VillaBook</div>
        </span>
      </div>
      <ul className='sidebar-menu'>
        {menu.map(item => (
          <li
            key={item.key}
            className={`${isOpen ? '' : 'activeopen'} ${
              activeMenu === item.key ? 'active' : ''
            }`}
            onClick={() => {
              setActiveMenu(item.key)
            }}
          >
            <span className='icon_admin'>{item.icon}</span>
            {isOpen && <span className='label_admin'>{item.label}</span>}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
