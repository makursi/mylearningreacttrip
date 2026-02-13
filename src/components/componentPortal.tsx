import { createPortal } from "react-dom";
//一个API将子组件（child）渲染到指定的 DOM 节点（container）
//即使该节点在 React 组件树之外。
// createPortal(children,domNode,key?)
//返回jsx, 可被react渲染到DOM任意位置
const Portal = () => {
  return createPortal(<div>帝师看过龙</div>, document.body);
};

export default Portal;
