import { createBrowserRouter } from "react-router";

//引入路由组件
import About from "../pages/About/about";
import Home from "../pages/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default router;
