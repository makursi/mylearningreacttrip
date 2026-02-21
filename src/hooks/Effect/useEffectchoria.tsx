//https://message163.github.io/react-docs/react/hooks/useEffect.html
// useEffect(setup, dependencies?)
// 参数:
//1.    setup：Effect处理函数,可以返回一个清理函数。组件挂载时执行setup,依赖项更新时先执行cleanup再执行setup,组件卸载时执行cleanup。
//2.    dependencies(可选)：setup中使用到的响应式值列表(props、state等)。必须以数组形式编写如[dep1, dep2]。不传则每次重渲染都执行Effect。

//使用副作用函数能做的事情useEffect都能做，例如操作DOM、网络请求、计时器等等。
import { useEffect, useState } from "react";

//1.基本使用
//操作DOM
// export default function UseEffectChoria() {
//   const data = document.getElementById("data");
//   console.log(data);
//   useEffect(() => {
//     const data = document.getElementById("data");
//     console.log(data);
//   }, []);
//   return (
//     <>
//       <div id="data">帝师见过我的龙</div>
//     </>
//   );
// }

//网络请求 使用pokemon api
//组件挂载时施行 -> 类似于componentDidMount;

// export default function UseEffectChoria() {
//   useEffect(() => {

//     const result = fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(
//       (res) => console.log(res),
//     );
//   }, []);
//   return <></>;
// }

//组件更新时执行
// export default function UseEffectChoria() {
//   const [count, setCount] = useState(0);
//   const [long, setLong] = useState("");

//   //依赖项:监视当前需要更新的状态, 当依赖项数组中的状态更新时执行相关状态的逻辑,例如如果不点击long的按钮, 日志不会出现long状态的更新
//    当依赖项为空数组时，useEffect的副作用函数只会执行一次，也就是组件挂载时执行。->类似于componentDidUpdate + componentDidMount
//   useEffect(() => {
//     console.log("组件更新时执行了", count, long);
//   }, [count, long]);

//   // 当点击button更新count,long 状态,并使React重新渲染组件时,会输出日志
//   return (
//     <>
//       <div>
//         <span>{count}</span>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           change
//         </button>
//       </div>

//       <div>
//         <span>{long}</span>
//         <button
//           onClick={() => {
//             setLong("帝师见过我龙");
//           }}
//         >
//           change
//         </button>
//       </div>
//     </>
//   );
// }

//组件卸载时更新
//useEffect的副作用函数可以返回一个清理函数，当组件卸载时，useEffect的副作用函数就会执行清理函数。类似于componentWillUnmount

// export default function UseEffectChoria() {
//   function Child(props: { name: string }) {
//     useEffect(() => {
//       console.log("render", props.name);

//       return () => {
//         //返回清理函数,组件卸载时执行
//         console.log("unmount", props.name);
//       };
//     }, [props.name]);
//     return (
//       <>
//         <div>
//           <h3>Child: {props.name}</h3>
//         </div>
//       </>
//     );
//   }
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState("");
//   return (
//     <>
//       <div id="data">
//         <div>
//           <h3>父组件</h3>
//           <input
//             type="text"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               setShow(!show);
//             }}
//           >
//             显示/隐藏
//           </button>
//           <hr />
//           <h3>子组件</h3>
//           {show && <Child name={name} />}
//         </div>
//       </div>
//     </>
//   );
// }

//日志输出:

//mount
//unmount
//mount

//看起来像是“刚挂载就卸载又挂载”，很奇怪？
//问题原因: React 的 reconciliation（协调）机制 + key 缺失 ,没有给Child组件指定key

// React 18+ 开启了 Strict Mode（默认在 create-react-app / Vite 中开启）
// Strict Mode 会在开发环境下故意 double-invoking（双重调用）某些函数，包括：
// 1.构造函数
// 2.useEffect
// 3.useMemo
// 4.自定义 Hooks

// 所以实际执行流程是：
// 第一次 mount：
// 执行 useEffect → console.log("render abc")
// 立即执行 cleanup（模拟卸载）→ console.log("unmount abc")
// 第二次 mount（真正保留的）：
// 再次执行 useEffect → console.log("render abc")
//短时间内触发了两次更新

//真实案例: 使用jsonplaceholder公共接口获取用户数据
// interface UserData {
//   name: string;
//   email: string;
//   username: string;
//   phone: string;
//   website: string;
// }

// const defaultData: UserData = {
//   name: "帝师",
//   email: "sbExample.com",
//   username: "龙",
//   phone: "1302332325",
//   website: "bilibll.com",
// };
// export default function UseEffectChoria() {
//   const [userId, setUserId] = useState(1); // 假设初始用户ID为1
//   const [userData, setUserData] = useState<UserData | null>(defaultData);

//   //使用useEffect 发送请求获取目标id 信息
//   useEffect(() => {
//     try {
//       const fetchUserData = async () => {
//         const userdata = await fetch(
//           `https://jsonplaceholder.typicode.com/users/${userId}`,
//         );

//         if (!userdata) {
//           console.log("服务器响应失败");
//           return;
//         }
//         const data = await userdata.json();

//         setUserData(data);
//       };
//       fetchUserData();
//     } catch (error) {
//       console.log(error);
//     }
//   }, [userId]);
//   //传用户id
//   function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
//     setUserId(parseInt(event.target.value));
//   }
//   return (
//     <>
//       <div>
//         <h1>用户信息</h1>

//         <label htmlFor="">
//           <input type="number" onChange={handlechange} value={userId} />
//         </label>
//         <div>
//           <h2>用户信息</h2>
//           <p>{userData.name}</p>
//           <p>{userData.username}</p>
//           <p>{userData.phone}</p>
//           <p>{userData.website}</p>
//         </div>
//       </div>
//     </>
//   );
// }
