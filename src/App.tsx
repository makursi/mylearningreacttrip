import "./App.css";
//方块组件
// import Mystatehook from "./hooks/useStateChoria";
// import ComponentProps from "./components/componentProps";
// import Portal from "./components/componentPortal";
// import Modal from "./components/componentPortal";
//异步组件
// import Suspenseuse from "./components/async/componentSuspense";
//异步数据
import Card from "./components/async/asyncCard";
import React, { useRef, useState, Suspense, lazy } from "react";
import { Skeleton } from "./components/async/conponentAsyncData";
//
function App() {
  return (
    <>
      <h1>练习案例</h1>
      {/* 案例引用 */}
      <div>
        <Suspense fallback={<Skeleton></Skeleton>}>
          <Card></Card>
        </Suspense>
      </div>
    </>
  );
}
export default App;
