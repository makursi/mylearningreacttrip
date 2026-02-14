<!-- 介绍react 中的核心原理:vdom, fiber ,diff算法,requestidlecallback -->

我见过龙:https://message163.github.io/react-docs/react/principle/vdom.html

# 1.虚拟DOM

Virtual DOM 就是用JavaScript对象去描述一个DOM结构, 不操作真实DOM
对UI的更新在虚拟DOM中进行,然后在高效的同步到真实DOM中

优点: 1.性能提升,不直接操作DOM 2. 跨平台, 使用js对象描述DOM对象结构, 映射不同渲染目标
