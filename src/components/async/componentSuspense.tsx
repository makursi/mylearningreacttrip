//https://message163.github.io/react-docs/react/components/suspense.html
//使用suspense 进行异步组件加载
import React, { lazy, Suspense } from "react";

const AsyncComponent = lazy(() => import("./conponentSuspenseAsync"));
export default function Suspenseuse(): React.FC {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <AsyncComponent></AsyncComponent>
      </Suspense>
    </>
  );
}
