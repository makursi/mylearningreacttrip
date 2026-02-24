//在子组件暴露句柄
//人话:父组件可以调用子组件的方法，或者访问子组件的属性。
//相当于Vue的defineExpose
import { useState, forwardRef, useImperativeHandle, useRef } from "react";
// interface ChildRef {
//   name: string;
//   count: number;
//   addCount: () => void;
//   subCount: () => void;
// }

//在 JavaScript/TypeScript 中，用 _ 命名参数是一种常见约定，表示“这个参数我不用，但语法上必须存在”。
// const Child = forwardRef<ChildRef>((_, ref) => {
// const [count, setCount] = useState(0);
//重点
//在这个hook中暴露,方法和属性,根据依赖项中的状态发生改变而执行回调, 如果没有依赖项, 则只执行一次
//   useImperativeHandle(ref, () => {
//     return {
//       name: "child",
//       count,
//       addCount: () => setCount(count + 1),
//       subCount: () => setCount(count - 1),
//     };
//   }, [count]);
//   return (
//     <div>
//       <h3>我是子组件</h3>
//       <div>count:{count}</div>
//       <button onClick={() => setCount(count + 1)}>增加</button>
//       <button onClick={() => setCount(count - 1)}>减少</button>
//     </div>
//   );
// });

//React19版本,子组件无需使用forwardRef
// export default function UseImperativeHandle() {
//   const childRef = useRef<ChildRef>(null);
//   const showRefInfo = () => {
//     console.log(childRef.current);
//   };
//   return (
//     <>
//       <div>
//         <h1>父组件</h1>

//         <div>
//           <button
//             onClick={() => {
//               showRefInfo();
//             }}
//           >
//             获取子组件信息
//           </button>
//           <button
//             onClick={() => {
//               childRef.current!.addCount();
//             }}
//           >
//             增加1
//           </button>
//           <button
//             onClick={() => {
//               childRef.current!.subCount();
//             }}
//           >
//             减少1
//           </button>
//           <hr />
//           <Child ref={childRef}></Child>
//         </div>
//       </div>
//     </>
//   );
// }

//执行时机, 第三个参数案例
// interface childRef {
//   name: string;
//   validate: () => string | true;
//   reset: () => void;
// }

// export function Child({ ref }: { ref: React.Ref<childRef> }) {
//   //定义表单
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });

//   //定义校验和重置的方法
//   const validate = () => {
//     if (!form.username) {
//       return "用户名称不能为空";
//     }
//     if (!form.password) {
//       return "用户密码不能为空";
//     }
//     if (!form.email) {
//       return "用户邮箱不能为空";
//     }
//   };

//   const reset = () => {
//     setForm({
//       username: "",
//       password: "",
//       email: "",
//     });
//   };

//   useImperativeHandle(ref, () => {
//     return {
//       name: "child",
//       validate,
//       reset,
//     };
//   });

//   return (
//     <>
//       <h3>我是子组件</h3>
//       <input
//         type="text"
//         placeholder="输入用户名称"
//         onChange={(e) => {
//           setForm({ ...form, username: e.target.value });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="输入用户密码"
//         onChange={(e) => {
//           setForm({ ...form, password: e.target.value });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="输入用户邮箱"
//         onChange={(e) => {
//           setForm({ ...form, email: e.target.value });
//         }}
//       />
//     </>
//   );
// }

// export default function UseImperativeHandle() {
//   const childRef = useRef<childRef>(null);

//   //展示子组件信息的方法
//   const showRefInfo: () => void = () => {
//     console.log(childRef.current);
//   };

//   const submit = () => {
//     const res = childRef.current?.validate();
//     console.log(res);
//   };
//   return (
//     <>
//       <div>
//         <h2>我是父组件</h2>
//         <div>
//           <button onClick={showRefInfo}>获取子组件信息</button>
//           <button onClick={() => submit()}>校验子组件</button>
//           <button onClick={() => childRef.current?.reset()}>重置</button>
//         </div>

//         <Child ref={childRef}></Child>
//       </div>
//     </>
//   );
// }
