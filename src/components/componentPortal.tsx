//https://message163.github.io/react-docs/react/components/createPortal.html
import "./index.css";
import { createPortal } from "react-dom";
//一个API将子组件（child）渲染到指定的 DOM 节点（container）
//即使该节点在 React 组件树之外。
// createPortal(children,domNode,key?)
//返回jsx, 可被react渲染到DOM任意位置
// const Portal = () => {
//   return createPortal(<div>帝师看过龙</div>, document.body);
// };

// export default Portal;

//使用portal封装弹框组件

const Modal = () => {
  return createPortal(
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">标题</div>
      </div>
      <div className="modal-content">
        <h1>Modal</h1>
      </div>
      <div className="modal-footer">
        <button className="modal-close-button">关闭</button>
        <button className="modal-confirm-button">确定</button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
