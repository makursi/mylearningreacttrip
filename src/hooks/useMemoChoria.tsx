//useMemo 是React 提供的一个性能优化 Hook。
//useMemo 的主要功能：避免在每次渲染时执行复杂的计算和对象重建。通过记忆上一次的计算结果，仅当依赖项变化时才会重新计算

//1. React.Memo的使用
//React Memo是一个 React API，用于优化性能。它通过记忆上一次的渲染结果，仅当 props 发生变化时才会重新渲染, 避免重新渲染。
import React, { useMemo, useState } from "react";

//案例1. React.memo 的使用
//定义Card卡片组件
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// interface CardProps {
//   user: User;
// }

// //只有当父组件User状态更新时,才会更新
// //父组件的另一个状态search作为Card组件的非Props值发生变化时,并不会导致子组件Card重新渲染
// const Card = React.memo(function ({ user }: CardProps) {
//   //定义卡片样式
//   console.log("Card组件重新渲染");

//   const styles = {
//     backgroundColor: "lightblue",
//     padding: "20px",
//     borderRadius: "10px",
//     margin: "10px",
//   };

//   return (
//     <>
//       <div style={styles}>
//         <span>{user.name}</span>
//         <p>{user.age}</p>
//         <p>{user.email}</p>
//       </div>
//     </>
//   );
// });
// export default function UseMemo() {
//   //父组件定义状态
//   const [user, setUser] = useState<User>({
//     name: "帝师",
//     age: 18,
//     email: "我见过龙",
//   });

//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <h1>父组件</h1>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       <div>
//         <button
//           onClick={() =>
//             setUser({
//               name: "李四",
//               age: Math.random() * 100,
//               email: "lisi@example.com",
//             })
//           }
//         >
//           更新user
//         </button>
//       </div>
//       <Card user={user}></Card>
//     </>
//   );
// }

//2.  useMemo hook 的使用
// 参数:1. 一个返回目标缓存的值的回调函数
//参数: 2. 依赖项数组,当依赖项中的状态发生改变时, 调用回调函数
//案例: 购物车
// const UseMemo = () => {
//   const [goods, setGoods] = useState([
//     { id: 1, name: "苹果", price: 10, count: 1 },
//     { id: 2, name: "香蕉", price: 20, count: 1 },
//     { id: 3, name: "橘子", price: 30, count: 1 },
//   ]);
//   const [search, setSearch] = useState("");

//   const handleAdd = (id: number) => {
//     setGoods(
//       goods.map((item) =>
//         item.id === id ? { ...item, count: item.count + 1 } : item,
//       ),
//     );
//   };
//   const handleSub = (id: number) => {
//     setGoods(
//       goods.map((item) =>
//         item.id === id ? { ...item, count: item.count - 1 } : item,
//       ),
//     );
//   };

//   // 当使用useMemo时
//   const total = useMemo(() => {
//     console.log("total");
//     //例如很复杂的计算逻辑
//     return goods.reduce((total, item) => total + item.price * item.count, 0);
//   }, [goods]);
//   return (
//     <>
//       <div>
//         <h1>父组件</h1>
//         {/* 这个例子没有使用 useMemo 进行缓存，所以每次 search 发生变化， total
//         都会重新计算 */}
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <table>
//           <thead>
//             <tr>
//               <th>商品名称</th>
//               <th>商品价格</th>
//               <th>商品数量</th>
//             </tr>
//           </thead>
//           <tbody>
//             {goods.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.price * item.count}</td>
//                 <td>
//                   <button onClick={() => handleSub(item.id)}>sub</button>
//                   <span>{item.count}</span>
//                   <button onClick={() => handleAdd(item.id)}>add</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h2>total更新到了 : {total}</h2>
//       </div>
//     </>
//   );
// };

// export default UseMemo;
// useMemo在缓存复杂计算结果时, 使用useMemo 会避免重复计算问题,以及缓存问题
//
