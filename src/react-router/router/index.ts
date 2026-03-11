import { createBrowserRouter } from "react-router";
//引入获取路由参数的hook

//引入路由组件
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Layout from "../layouts/index";

//懒加载模组
const sleep = (message: number) =>
  new Promise((resolve) => setTimeout(resolve, message));
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
        // path: "home/:id",
        path: "home",
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
        lazy: async () => {
          await sleep(2000);
          const Component = await import("../pages/About/about");
          console.log(Component);

          return {
            Component: Component.default,
          };
        },
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
