//https://message163.github.io/react-docs/react/hooks/useLayoutEffect.html

import React, { useLayoutEffect, useEffect, useState } from "react";

// useLayoutEffect 是 React 中的一个 Hook，用于在浏览器重新绘制屏幕之前触发。与 useEffect 类似。
// 用法:
// useLayoutEffect(() => {
//   // 副作用代码
//   return () => {
//     // 清理代码
//   };
// }, [dependencies]);

// 参数
// setup：Effect处理函数,可以返回一个清理函数。组件挂载时执行setup,依赖项更新时先执行cleanup再执行setup,组件卸载时执行cleanup。

// dependencies(可选)：setup中使用到的响应式值列表(props、state等)。必须以数组形式编写如[dep1, dep2]。不传则每次重渲染都执行Effect。

//与useEffect hook 的区别:
//1.  执行时机:浏览器完成布局和绘制之前执行副作用
//2.  执行方式:同步执行
//3.  DOM渲染:阻塞DOM渲染

//1.测试DOM阻塞
// export default function UseEffectLayout() {
//   const [count, setCount] = useState(0);

//非阻塞DOM
// useEffect(() => {
//   for (let i = 0; i < 10; i++) {
//     setCount((count) => count + 1);
//   }
// }, [count]);

//阻塞DOM
// useLayoutEffect(() => {
//   for (let i = 0; i < 3; i++) {
//     setCount((count) => count + 1);
//   }
// }, [count]);
//   return (
//     <>
//       <h1>app</h1>
//       {Array.from({ length: count }).map((_, index) => {
//         <div key={index}>{index}</div>;
//       })}
//     </>
//   );
// }

//2. 测试同步异步渲染

// export default function UseEffectLayout() {
//   // 使用useEffect 实现动画效果, 异步渲染会有过渡的动画
//   useEffect(() => {
//     const app1 = document.getElementById("app1") as HTMLDivElement;
//     app1.style.transition = "opacity 3s";
//     app1.style.opacity = "1";
//   }, []);

//   // 使用useEffectlayout 实现动画效果, 同步渲染不会有过渡的动画
//   useLayoutEffect(() => {
//     const app2 = document.getElementById("app2") as HTMLDivElement;
//     app2.style.transition = "opacity 3s";
//     app2.style.opacity = "1";
//   }, []);
//   return (
//     <>
//       <div>
//         <div id="app1" style={{ opacity: 0 }}>
//           app1
//         </div>
//         <div id="app2" style={{ opacity: 0 }}>
//           app2
//         </div>
//       </div>
//     </>
//   );
// }
