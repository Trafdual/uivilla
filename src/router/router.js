import ContactPage from "../Layout/DefaultLayout/ContactPage/Contactpage";
import TinTucPage from "../Layout/DefaultLayout/TinTucPage/TinTucPage";
import { TrangChuLayout } from "../Layout/TrangChuLayout";
import { LoginLayout } from "../Layout/Admin/LoginLayout";

const publicRoutes = [
  { path: "/", component: TrangChuLayout },
  { path: "/lienhe", component: ContactPage },
  { path: "/tintuc", component: TinTucPage },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
