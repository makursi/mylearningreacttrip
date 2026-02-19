//react18 hook
// 用于从外部存储（例如状态管理库、浏览器 API 等）获取状态并在组件中同步显示。
// 场景:1.订阅外部 store 例如(redux,Zustand德语)
//      2.订阅浏览器API 例如(online,storage,location)等
//      3.抽离逻辑，编写自定义hooks
//      4.服务端渲染支持
//https://message163.github.io/react-docs/react/hooks/useSyncExternalStore.html

import { useSyncExternalStore } from "react";

//callback 是React 传给你的一个"通知函数",当调用 callback()时, React 会重新渲染组件更新UI
// const subscribe = (callback: () => void) => {

//   callback();

//   return () => {

//   }
// };

// const getSnapshot = () = >{
//   return data
// }
// const res = useSyncExternalStore(subscribe,getSnapshot)
// 返回 该res 的当前快照 , 在渲染逻辑中使用

//-----------------------------------------
//1.实现useStorage hook 案例
// export default function useStorage(key: any, defaultValue?: any) {
//   const subscribe = (callback: () => void) => {
//     window.addEventListener("storage", (e) => {
//       callback();
//       console.log("触发了localStorge事件", e);
//     });

//     return () => {
//       //返回清理函数, 避免内存泄露
//       window.removeEventListener("storage", callback);
//     };
//   };
//   //获取当前值
//   //当callback()被调用 -> 重新调用 getSnapshot() ->更新组件
//   const getSnapshot = () => {
//     return (
//       (localStorage.getItem(key)
//         ? JSON.parse(localStorage.getItem(key)!)
//         : null) || defaultValue
//     );
//   };

//   const setStorage = (value: any) => {
//     //先保存当前的新值到localStorage
//     localStorage.setItem(key, JSON.stringify(value));
//     // 手动触发storage事件
//     window.dispatchEvent(new StorageEvent("storage"));
//   };
//   const res = useSyncExternalStore(subscribe, getSnapshot);
//   return [res, setStorage];
// }

// 2.订阅history实现路由跳转
//popstate是浏览器原生的事件, 监听页面浏览历史记录变化,例如:用户点击前进后退
//调用 history.pushState() 或 replaceState() 本身不会触发 popstate
//window.dispatchEvent() 手动调用浏览器事件
//history.pushState(state,title,url)/replaceState
//state:附加数据, 通过popstate 事件获取
//title:历史记录的标题
//url:要显示在地址栏的新路径
export default function useHistory() {
  const subscribe = (callback: () => void) => {
    window.addEventListener("popstate", callback);
    window.addEventListener("hashchange", callback);
    return () => {
      window.removeEventListener("popstate", callback);
      window.removeEventListener("hashstate", callback);
    };
  };

  //回调函数返回当前页面的url
  const getSnapshot = () => {
    return window.location.href;
  };

  const push = (path: string) => {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const replace = (path: string) => {
    window.history.replaceState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const res = useSyncExternalStore(subscribe, getSnapshot);

  return [res, push, replace] as const;
}
