import { createBrowserRouter } from "react-router";

//引入路由组件
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Layout from "../layouts/index";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default router;
