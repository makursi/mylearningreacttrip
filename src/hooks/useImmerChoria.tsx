// 在 React 中，状态（state）是不可变的（immutable）。
// 这意味着：你不能直接修改对象或数组，而必须创建一个全新的副本。
import { useImmer } from "use-immer";
import { useState } from "react";
// export default function useMyHookImmer() {
//   const [count, setCount] = useImmer(0);

//   return (
//     <>
//       <h1>计数器案例--useImmer</h1>
//       <button
//         onClick={() => {
//           setCount((draft) => draft - 1);
//         }}
//       >
//         Sub
//       </button>
//       <span>{count}</span>
//       <button
//         onClick={() => {
//           setCount((draft) => draft + 1);
//         }}
//       >
//         Add
//       </button>
//     </>
//   );
// }

// interface User {
//   name: string;
//   age: number;
// }

// export default function useProfile() {
//   const [user, setUser] = useState<User>({
//     name: "帝师",
//     age: 28,
//   });

//   const updateUserName = () => {
//     //在使用useState hook 去更新状态对象时, 需要对对象的其他属性进行复制,然后更新对应的属性
//     //这个操作在对嵌套对象的属性修改时就会非常繁琐
//     setUser({
//       ...user,
//       name: "龙",
//     });
//   };
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <span>{user.age}</span>
//       <button onClick={updateUserName}>Update Name</button>
//     </>
//   );
// }
