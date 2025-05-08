import ContactPage from '../Layout/DefaultLayout/ContactPage/Contactpage'
import { TrangChuLayout } from '../Layout/TrangChuLayout'

const publicRoutes = [{ path: '/', component: TrangChuLayout },{ path: '/lienhe', component: ContactPage }]
const privateRoutes = []
export { publicRoutes, privateRoutes }
