//useRef用于处理DOM元素或需要在组件渲染之间保持持久性数据
//参数是ref对象的初始值
//返回值为一个对象值,其中对象的属性指向传入的初始值
// https://message163.github.io/react-docs/react/hooks/useRef.html
import { useRef, useState } from "react";
//使用useRef操作DOM
// export default function UseRefChoria() {
//   let num = useRef(0);
//   let [count, setCount] = useState(0);
//   const handleClick = () => {
//     //setCount()不会立即改变count的值, 要等到下一次组件重新渲染时,count才会变成新值
//     setCount(count + 1); //请求 React：下次渲染时把 count 变成 1
//     num.current = count; //此时 count 还是 0！所以 num.current = 0
//     console.log(num.current); //输出0
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>增加</button>
//       <div>
//         {count}:{num.current}
//       </div>
//     </div>
//   );
// }

//计数器案例

function UseRefChoria() {
  console.log("render");
  let timer = useRef<NodeJS.Timeout | null>(null);
  let [count, setCount] = useState(0);
  const handleClick = () => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 300);
  };
  const handleEnd = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };
  return (
    <div>
      <button onClick={handleClick}>开始计数</button>
      <button onClick={handleEnd}>结束计数</button>
      <div>{count}</div>
    </div>
  );
}

export default UseRefChoria;

// 注意事项
// 组件在重新渲染的时候，useRef的值不会被重新初始化。

// 改变 ref.current 属性时，React 不会重新渲染组件。React 不知道它何时会发生改变，因为 ref 是一个普通的 JavaScript 对象。

// useRef的值不能作为useEffect等其他hooks的依赖项，因为它并不是一个响应式状态。

// useRef不能直接获取子组件的实例，需要使用forwardRef。
