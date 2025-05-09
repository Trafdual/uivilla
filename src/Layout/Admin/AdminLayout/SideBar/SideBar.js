import { FaTachometerAlt, FaUsers, FaCog, FaAngleLeft } from 'react-icons/fa'
import './SideBar.scss'

function Sidebar ({ activeMenu, setActiveMenu, isOpen, toggleSidebar }) {
  const menu = [
    { key: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { key: 'users', label: 'Người dùng', icon: <FaUsers /> },
    { key: 'settings', label: 'Cài đặt', icon: <FaCog /> }
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
            className={`${isOpen ? '' : 'activeopen'} ${activeMenu === item.key ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.key)}
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
