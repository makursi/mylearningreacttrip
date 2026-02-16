const React = {
  //es6新建方法方式
  createElement(type, props = {}, ...children) {
    return {
      type,
      props: {
        //使用 展开运算符 ...children 收集所有子元素（JSX 编译后会传多个参数）
        // 对每个 child 判断：
        // 如果是 对象（即另一个虚拟节点）→ 直接保留
        // 如果是 原始值（如字符串 "帝师"）→ 调用 createTextElement 包装成文本节点
        ...props,
        children: children.map((child) =>
          typeof child === "object" ? child : this.createTextElement(child),
        ),
      },
    };
  },

  //DOM中, 文本是Text节点 , 和Element 节点不同.虚拟DOM 也需要区分
  createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  },
};

const vdom = React.createElement("div", { id: 1 }, "我见过龙");
// 等价于: const vdom = () => {
//   return <div id={1}>我见过龙</div>;
// };

//相当于手写JSX
/* <div id={1}>
  <span>帝师</span>
</div>; */
console.log(vdom);
