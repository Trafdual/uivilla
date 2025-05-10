import ContactPage from '../Layout/DefaultLayout/ContactPage/Contactpage'
import TinTucPage from '../Layout/DefaultLayout/TinTucPage/TinTucPage'
import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { LoginLayout } from '../Layout/Admin/LoginLayout'
import { AdminLayout } from '../Layout/Admin/AdminLayout'
// import { RegisterLayout } from '../Layout/Admin/RegisterLayout'
import TienIchPage from '../Layout/DefaultLayout/TienIchPage/TienIchPage'
import PagePhong from '../Layout/DefaultLayout/PagePhong/PagePhong'
import MenuDoAn from '../Layout/DefaultLayout/MenuDoAn/MenuDoAn'
import VeChungToi from '../Layout/DefaultLayout/VeChungToi/VeChungToi'
import VillaMainBranch from '../Layout/DefaultLayout/ChiTiet/ChiTiet'
import BlogDetail from '../Layout/DefaultLayout/ChiTietBlog/ChiTietBlog'

const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/lienhe', component: ContactPage },
  { path: '/tintuc', component: TinTucPage },
  { path: '/vechungtoi', component: VeChungToi },
  { path: '/danhsachphong', component: PagePhong },
  { path: '/chitietphong/:namekhongdau', component: VillaMainBranch },
  { path: '/chitietblog/:tieude_khongdau', component: BlogDetail },
  { path: '/menu', component: MenuDoAn },
  { path: '/login', component: LoginLayout, layout: null },
  { path: '/admin', component: AdminLayout, layout: null },
  // { path: '/register', component: RegisterLayout, layout: null },
  { path: '/tienich', component: TienIchPage},
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
