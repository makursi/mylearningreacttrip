//组件通行
//https://message163.github.io/react-docs/react/components/communication.html
import React from "react";
import { C } from "vue-router/dist/router-CWoNjPRp.mjs";

//React.FC(function components)是函数式组件, TS使用的一个范型.
//定义默认值
//Props 接口
//父辈组件
// interface Props {
//   id: number;
//   name: string;
//   arr: number[];
// }
// export default function ComponentProps() {
//   //子辈组件
//   //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
//   const Son: React.FC<Props> = ({ name = "李狗蛋", id, arr }) => {
//     return (
//       <>
//         <ul>
//           <li>{name}</li>
//           <li>{id}</li>
//           <li>{arr}</li>
//         </ul>
//       </>
//     );
//   };

//   return (
//     <>
//       <Son id={1} arr={[1, 2, 3]}></Son>
//     </>
//   );
// }
//*----------------------------------

//2.使用defaultProps设置默认值

// const defaultProps = {
//   name: "李狗蛋",
//   id: 1,
//   arr: [1, 2, 3],
// };
// export default function ComponentProps() {
//   //子辈组件
//   //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
//   const Son: React.FC<Props> = (props) => {
//     const { name, id, arr } = { ...defaultProps, ...props };
//     return (
//       <>
//         <div>
//           <ul>
//             <li>{name}</li>
//             <li>{id}</li>
//             <li>{arr}</li>
//           </ul>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       <Son></Son>
//     </>
//   );
// }

//*------------------------
//3.使用React.children特殊值
// interface Props {
//   children: React.ReactNode;
// }
// export default function ComponentProps() {
//   //子辈组件
//   //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
//   const Son: React.FC<Props> = (props) => {
//     return (
//       <>
//         <h1>{props.children}</h1>
//       </>
//     );
//   };

//   return (
//     <>
//       <Son>
//         <div>i am your father</div>
//       </Son>
//     </>
//   );
// }
//----------------

//子组件向父组件传值
// export default function ComponentProps() {
//   const dragonsee = (params: string) => {
//     console.log("帝师说他见过", params);
//   };
//   interface Props {
//     sponsbob: (params: string) => void;
//     children: React.ReactNode;
//   }
//   //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
//   //子组件接收函数, 在对应的事件中调用函数
//   const Son: React.FC<Props> = (props) => {
//     return (
//       <>
//         <button
//           onClick={() => {
//             props.sponsbob("龙");
//           }}
//         >
//           click
//         </button>
//       </>
//     );
//   };

//   return (
//     <>
//       <Son sponsbob={dragonsee}></Son>
//     </>
//   );
// }
//--------------------

//兄弟组件通信
//发布-订阅前端架构模式
declare global {
  interface Event {
    params: any;
  }
}
const Son: React.FC = (props) => {
  const event = new Event("on-card"); //添加到事件中心

  const clickTap = () => {
    console.log(event);
    event.params = { name: "我见过龙" };
    window.dispatchEvent(event); //派发事件
  };
  return (
    <>
      <button onClick={clickTap}>派发事件</button>
    </>
  );
};

const Brother = () => {
  window.addEventListener("on-card", (event) => {
    console.log(event.params, "触发了");
  });
  return (
    <>
      <div></div>
    </>
  );
};
export default function ComponentProps() {
  //React.FC<Props> 是 “Function Component” 的 TypeScript 类型别名，全称是 React.FunctionComponent<Props>。
  //子组件接收函数, 在对应的事件中调用函数

  return (
    <>
      <Son></Son>
      <Brother></Brother>
    </>
  );
}
