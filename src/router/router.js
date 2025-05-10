import ContactPage from "../Layout/DefaultLayout/ContactPage/Contactpage";
import MenuDoAn from "../Layout/DefaultLayout/MenuDoAn/MenuDoAn";
import TinTucPage from "../Layout/DefaultLayout/TinTucPage/TinTucPage";
import { TrangChuLayout } from "../Layout/TrangChuLayout";

const publicRoutes = [
  { path: "/", component: TrangChuLayout },
  { path: "/lienhe", component: ContactPage },
  { path: "/tintuc", component: TinTucPage },
  { path: "/menu", component: MenuDoAn },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
