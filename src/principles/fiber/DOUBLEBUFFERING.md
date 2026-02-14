# 引入一个计算机图形学的概念:Double Buffer技术

假设如果使用canvas绘制动画, 每一帧绘制前都会调用ctx.claerReact清除上一帧动画.
如果当前帧画面计算量过大, 那么清除上一帧的画面的时间和绘制当前帧画面之间的时间之和就会很大

会导致画面出现白屏

Double Buffer技术旨在通过在内存中创建元素, 使用复杂逻辑去消除当前帧画面的元素, 然后将内存中的canvas元素一次性添加到当前帧画面

"边擦边画(❌) 画好了在亮出来(✅)"

# React current fiber tree 和 work-in-progress fiber tree 的工作流程:

fiber tree的数据结构为链表结构的树,每个节点代表一个组件或DOM元素

1.  初始状态下:current 的指针会指向树A(当前用户显示的页面), work-in-progress指向树B(空数据 || 上一帧画面的旧数据)
2.  setState触发更新时: React 复用树 A 的节点，在树 B 上构建新 UI
    所有 diff、reconcile、副作用标记都在 WIP Tree（树 B） 上进行
    用户仍在看着树A, 不受影响
