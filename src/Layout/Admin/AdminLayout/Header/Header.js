import './Header.scss'
import { FaBars } from 'react-icons/fa'

function Header ({ toggleSidebar }) {
  return (
    <header className='admin-header'>
      <div className='left'>
        <FaBars className='menu-icon' onClick={toggleSidebar} />
        <input type='text' placeholder='Tìm kiếm booking...' />
      </div>
      <div className='right'>
        <span className='avatar'>👤</span>
      </div>
    </header>
  )
}

export default Header
