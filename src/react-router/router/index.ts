import { createBrowserRouter } from "react-router";
//引入获取路由参数的hook

//引入路由组件
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Layout from "../layouts/index";
const router = createBrowserRouter([
  {
    //第二种:布局路由
    //忽略path路由对象属性
    path: "/",
    //第四种:前缀路由
    //只设置path 而不设置 Component
    Component: Layout,
    //第一种:嵌套路由
    children: [
      {
        //第五种:动态路由
        //使用useParams 去获取路由参数
        path: "home/:id",
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  // {
  //   //第三种: 索引路由
  //   // index: true,
  //   path: "/home",
  //   Component: Home,
  // },
  // {
  //   path: "/about",
  //   Component: About,
  // },
]);

export default router;
