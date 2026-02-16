//react受控组件
//https://message163.github.io/react-docs/react/components/controlled.html

//受控组件一般是指表单元素，表单的数据由React的 State 管理.
//更新数据时，需要手动调用setState()方法，更新数据。

// import React, { useState } from "react";
// const ComponentControlled: React.FC = () => {
//   const [value, setValue] = useState("");
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//   return (
//     <>
//       <h1>受控组件</h1>
//       {/* React 支持所有原生dom事件 */}
//       <input type="text" value={value} onChange={handleChange} />
//       <p>{value}</p>
//     </>
//   );
// };

// export default ComponentControlled;

//非受控组件
//非受控组件指的是该表单元素不受React的State管
//表单的数据由DOM管理。通过useRef()来获取表单元素的值。

// import React, { useRef } from "react";
// const ComponentControlled: React.FC = () => {
//   const value = "帝师";
//   const inputRef = useRef<HTMLInputElement>(null);
//   const handleChange = () => {
//     console.log(inputRef.current?.value);
//   };
//   return (
//     <>
//       <h1>非受控组件</h1>
//       {/* React 支持所有原生dom事件 , ref 和 defaultValue 都是 React 为 DOM 元素（如 <input>、<textarea> 等）提供的特殊属性（props），它们最终会作用于底层的真实 DOM 元素，但行为和原生 HTML 有所不同。*/}
//       <input
//         type="text"
//         onChange={handleChange}
//         defaultValue={value}
//         ref={inputRef}
//       />
//       <p>{value}</p>
//     </>
//   );
// };

// export default ComponentControlled;
