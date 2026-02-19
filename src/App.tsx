import "./App.css";
//方块组件
// import Mystatehook from "./hooks/useStateChoria";
// import ComponentProps from "./components/componentProps";
// import Portal from "./components/componentPortal";
// import Modal from "./components/componentPortal";
//异步组件
// import Suspenseuse from "./components/async/componentSuspense";
//异步数据
// import Card from "./components/async/asyncCard";
// import React, { useRef, useState, Suspense, lazy } from "react";
// import { Skeleton } from "./components/async/conponentAsyncData";
// import UseMyReducerHook from "./hooks/useReducerChoria";
// import TodoList from "./hooks/useImmerChoria";
import useStorage from "./hooks/useSyncExternalStore";

function App() {
  const [count, setCount] = useStorage("data", 1);

  return (
    <>
      <h1>练习案例</h1>
      {/* 案例引用 */}
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        设置count
      </button>
    </>
  );
}
export default App;
