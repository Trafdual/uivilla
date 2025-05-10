import { useEffect, useState } from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'
import './AdminLayout.scss'

function AdminLayout () {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    const loggedIn = !!sessionStorage.getItem('dangnhap')
    setIsLoggedIn(loggedIn)
    if (!loggedIn) {
      window.location.href = '/login'
    }
  }, [])

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className='admin-layout'>
      <SideBar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className={`admin-main ${sidebarOpen ? '' : 'expand'}`}>
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className='admin-content'>
          <h2>{activeMenu.toUpperCase()}</h2>
          <div className='admin-card'>
            <h3>Chào mừng đến VillaBook Admin</h3>
            <p>
              Bạn đang ở mục <strong>{activeMenu}</strong>.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
