import { useReducer } from "react";

// useReducer 返回一个由两个值组成的数组：
//[state,dispatch]

// 其中state是useReducer()中的initialState函数初始化后返回的值, dispatch函数被用于在事件中去调用对应的reducer函数
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
  const initialData = [
    { name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
    { name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
    { name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false },
  ];
  //定义initialData的数据类型
  type List = typeof initialData;
  interface Action {
    type: "ADD" | "SUB" | "DELETE" | "EDIT" | "UPDATE_NAME";
    id: number;
    newName?: string;
  }
  const [data, dispatch] = useReducer(reducer, initialData);

  function reducer(state: List, action: Action) {
    const item = state.find((item) => item.id === action.id);
    switch (action.type) {
      case "ADD":
        item.count++;
        return [...state];
      case "SUB":
        item.count--;
        return [...state];
      case "DELETE":
        return state.filter((item) => item.id !== action.id);
      case "EDIT":
        item.isEdit = !item.isEdit;
        return [...state];
      case "UPDATE_NAME":
        item.name = action.newName!;
        return [...state];
      default:
        return state;
    }
  }
  return (
    <>
      <h1>购物车案例</h1>
      <table cellPadding={0} cellSpacing={0} width={600} border={1}>
        <thead>
          <tr>
            <th>物品</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td align="center">
                    {item.isEdit ? (
                      <input
                        onBlur={(e) => dispatch({ type: "EDIT", id: item.id })}
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_NAME",
                            id: item.id,
                            newName: e.target.value,
                          })
                        }
                        value={item.name}
                      ></input>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </td>
                  <td align="center">{item.price * item.count}</td>
                  <td align="center">
                    <button
                      onClick={() => {
                        dispatch({ type: "SUB", id: item.id });
                      }}
                    >
                      SUB
                    </button>
                    <span>{item.count}</span>
                    <button
                      onClick={() => {
                        dispatch({ type: "ADD", id: item.id });
                      }}
                    >
                      ADD
                    </button>
                  </td>
                  <td align="center">
                    <button
                      onClick={() => {
                        dispatch({ type: "EDIT", id: item.id });
                      }}
                    >
                      编辑
                    </button>
                    <span>{item.count}</span>
                    <button
                      onClick={() => {
                        dispatch({ type: "DELETE", id: item.id });
                      }}
                    >
                      删除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}></td>
              <td align="center">
                总价:
                {data.reduce((prev, next) => prev + next.price * next.count, 0)}
              </td>
            </tr>
          </tfoot>
        </thead>
      </table>
    </>
  );
}
