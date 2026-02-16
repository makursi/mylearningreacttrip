// 在 React 中，状态（state）是不可变的（immutable）。
// 这意味着：你不能直接修改对象或数组，而必须创建一个全新的副本。
import { useImmer } from "use-immer";

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
