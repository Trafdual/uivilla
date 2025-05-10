import { useEffect, useState } from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'
import './AdminLayout.scss'
import { SanPhamLayout } from '../SanPhamLayout'
import { BlogLayout } from '../BlogLayout'
function AdminLayout () {
  const [activeMenu, setActiveMenu] = useState('product')
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
          {activeMenu === 'product' && <SanPhamLayout />}
          {activeMenu === 'blog' && <BlogLayout />}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
