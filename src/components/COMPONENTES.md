在在 React 17 之前：必须导入 Reac
因为 JSX 会被编译成 React.createElement(...)

```
import React from "react";

```

# React对象包含重要方法及属性:

1. React.createElement() --->手动创建 React 元素（JSX 编译后的底层调用）
2. React.Fragment ---> <></> 的等价写法，用于包裹多个元素
3. React.useState, useEffect 等 ---> 所有 Hooks 都挂载在 React 上（但通常直接从 'react' 导入）
4. React.memo() ---> 优化函数组件，避免不必要的重渲染
5. React.forwardRef() ---> 转发 ref 到子组件
6. React.Children ---> 操作 props.children 的工具集

# 受控组件和非受控组件

1. 受控组价的数据源来自于React state, 非受控组件的值是DOM本身
2. 获取值: 受控组件直接读取state, 非受控组件通过ref读DOM元素身上的值
