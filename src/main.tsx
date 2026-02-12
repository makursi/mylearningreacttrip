import { StrictMode } from "react";
//StrictMode 是一个用于突出显示应用程序中潜在问题的开发工具。它不会在生产环境中渲染任何可见 UI，但会在开发模式下启用额外的检查和警告。
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//获取 HTML 中 id 为 "root" 的 DOM 元素（! 表示“断言非空”）,创建 React 根容器并渲染应用
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
