// 在 React 中，状态（state）是不可变的（immutable）。
// 这意味着：你不能直接修改对象或数组，而必须创建一个全新的副本。
import { useImmer } from "use-immer";
// import { useState } from "react";
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

// 1.处理嵌套对象
// 定义一个嵌套对象
// interface User {
//   name: string;
//   age: number;
//   profile: {
//     avatar: string;
//     bio: string;
//     preferences: {
//       theme: "light" | "dark";
//       notification: boolean;
//     };
//   };
// }

// export default function UseProfile() {
//   const [user, setUser] = useImmer<User>({
//     name: "帝师",
//     age: 25,
//     profile: {
//       avatar: "/avatar.jpg",
//       bio: "龙之监视者",
//       preferences: {
//         theme: "light",
//         notifications: true,
//       },
//     },
//   });

//   function updateBio(newBio: string) {
//     setUser((draft) => {
//       draft.profile.bio = newBio;
//     });
//   }

//   const updateTheme = () => {
//     setUser((draft) => {
//       draft.profile.preferences.theme = "dark";
//     });
//   };

//   return (
//     <>
//       <div>
//         <h2>主播名字:{user.name}</h2>
//         <p>年龄:{user.age}</p>
//         <p>个人简介:{user.profile.bio}</p>
//         <p>主题:{user.profile.preferences.theme}</p>
//         <button
//           onClick={() => {
//             updateBio("帝师好龙");
//           }}
//         >
//           点击送龙
//         </button>
//         <button onClick={updateTheme}>切换主题</button>
//       </div>
//     </>
//   );
// }
//draft:草稿
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
// 2.处理数组
const TodoList = () => {
  const [todos, setTodos] = useImmer<Todo[]>([]);

  //可以直接使用数组的push 和pop方法, 而不是使用slice创建副本修改和fliter过滤数组
  const addTodo = (text: string) => {
    setTodos((draft) => {
      draft.push({
        id: Date.now(),
        text,
        completed: false,
      });
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((draft) => {
      //Array.prototype.find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
      const todo = draft.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
  };

  const removeTodo = (id: number) => {
    setTodos((draft) => {
      //Array.prototype.findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
      const index = draft.findIndex((t) => t.id === id);
      if (index > -1) {
        //Array.prototype.splice() 方法就地移除或者替换已存在的元素和/或添加新的元素。传入startIndex,deleteCount,item<T>
        draft.splice(index, 1);
      }
    });
  };

  const clearCompleted = () => {
    setTodos((draft) => {
      return draft.filter((todo) => !todo.completed);
    });
  };

  return (
    <>
      <div className="todo-list">
        <div className="add-todo">
          <label htmlFor="todo">
            添加待办
            <input
              type="text"
              placeholder="please input text"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  addTodo(e.currentTarget.value.trim());
                  e.currentTarget.value = "";
                }
              }}
            />
          </label>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => removeTodo(todo.id)}>删除</button>
              </li>
            ))}
          </ul>
        </div>

        {todos.some((t) => t.completed) && (
          <button onClick={clearCompleted}>清除已完成</button>
        )}
      </div>
    </>
  );
};

export default TodoList;
