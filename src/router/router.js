import ContactPage from '../Layout/DefaultLayout/ContactPage/Contactpage'
import TinTucPage from '../Layout/DefaultLayout/TinTucPage/TinTucPage'
import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { LoginLayout } from '../Layout/Admin/LoginLayout'
import { AdminLayout } from '../Layout/Admin/AdminLayout'
// import { RegisterLayout } from '../Layout/Admin/RegisterLayout'

const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/lienhe', component: ContactPage },
  { path: '/tintuc', component: TinTucPage },
  { path: '/login', component: LoginLayout, layout: null },
  { path: '/admin', component: AdminLayout, layout: null },
  // { path: '/register', component: RegisterLayout, layout: null },
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
