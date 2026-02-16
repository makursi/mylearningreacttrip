import { useReducer } from "react";

//1.计数器案例
// export default function useMyReducerHook() {
//   // const [state, dispatch] = useReducer(reducer, initialArg, ini()?);
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count++ };
//       case "decrement":
//         return { count: state.count-- };
//       default:
//         throw new Error();
//     }
//   }
//   return (
//     <>
//       <h1>计数器</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>add</button>
//       <h2>{state.count}</h2>
//       <button onClick={() => dispatch({ type: "decrement" })}>sub</button>
//     </>
//   );
// }

//购物车案例
export default function useMyReducerHook() {
  // const [state, dispatch] = useReducer(reducer, initialArg, ini()?);
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count++ };
      case "decrement":
        return { count: state.count-- };
      default:
        throw new Error();
    }
  }
  return (
    <>
      <h1>计数器</h1>
      <button onClick={() => dispatch({ type: "increment" })}>add</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>sub</button>
    </>
  );
}
