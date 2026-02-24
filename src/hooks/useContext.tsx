// import { React, useContext } from "react";
//创建上下文
// const themeText = React.createContext({ theme: "light" });
// const child = () => {
//   //使用
//   const themeContext = useContext(themeText);
//   return (
//     <>
//       <h1>{themeContext.theme}</h1>
//     </>
//   );
// };

// export default function useContext() {
//   return (
//     <themeText.Provider value={{ theme: "light" }}>
//       <Child></Child>
//     </themeText.Provider>
//   );
// }

// import React, { useContext, useState } from 'react';
// const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);
// interface ThemeContextType {
//    theme: string;
//    setTheme: (theme: string) => void;
// }

// const Child = () => {
//    const themeContext = useContext(ThemeContext);
//    const styles = {
//       backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
//       border: '1px solid red',
//       width: 100 + 'px',
//       height: 100 + 'px',
//       color: themeContext.theme === 'light' ? 'black' : 'white'
//    }
//    return <div>
//       <div style={styles}>
//          child
//       </div>
//    </div>
// }

// const Parent = () => {
//    const themeContext = useContext(ThemeContext);
//    const styles = {
//       backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
//       border: '1px solid red',
//       width: 100 + 'px',
//       height: 100 + 'px',
//       color: themeContext.theme === 'light' ? 'black' : 'white'
//    }
//    return <div>
//       <div style={styles}>
//          Parent
//       </div>
//       <Child />
//    </div>
// }
// function App() {
//    const [theme, setTheme] = useState('light');
//    return (
//       <div>
//          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换主题</button>

//          <ThemeContext value={{ theme, setTheme }}>
//             <Parent />
//          <ThemeContext>
//       </div >
//    );
// }
// 因为父组件和子组件使用的是一个上下文, 所以当更新状态theme时, 将会更新styles对象中的theme属性值
//当下一次组件更新时,子组件和父组件都会根据theme进行更新
// export default App;
