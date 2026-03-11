// import "./App.css";

//引入路由
import router from "./react-router/router/index";

import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <h1>使用案例</h1>

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
