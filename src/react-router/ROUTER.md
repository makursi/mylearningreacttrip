React-router 是 React的路由库, 作用就是，根据不同的URL，匹配不同的组件，然后进行渲染。这样就可以实现在单页面应用中跳转页面。

# React-router 中的设计模式

1.  框架模式
2.  数据模式
3.  声明模式

# React-router 中的路由模式

1. createBrowserRouter
2. createHashRouter
3. createMemoryRouter
4. createStaticRouter

**各路由模式的区别和应用场景**
https://message163.github.io/react-docs/react/router/mode.html

# React-router 中的路由

1.  嵌套路由
2.  布局路由
3.  索引路由
4.  前缀路由
5.  动态路由:
    使用 useParams hook 获取动态路由参数

总感觉这个路由设计好像是有个人喝了点酒, 然后看一步想一步设计出来的....

# React-router 中的参数传递

参数传递指的是在路由跳转时，将参数传递给目标路由。

作用:将数据附加在 URL 上，目标路由组件在加载时读取这些参数，并据此渲染对应的内容。

1.  Query方式 (/user?name=xiaoman)

    适用于：传递可选的查询参数
    特点：灵活多变，支持多参数
    限制：URL可能较长，参数公开可见

2.  Params方式 (/user/:id)

    适用于：传递必要的路径参数（如ID）
    特点：符合 RESTful 规范，刷新不丢失
    限制：只能传字符串，参数显示在URL中

3.  State 方式

    适用于：传递复杂数据结构  
    特点：支持任意类型数据，参数不显示在URL
    限制：刷新可能丢失，不利于分享

    **选择建议：必要参数用 Params，筛选条件用 Query，临时数据用 State。**
    //1. 获取参数

            import { useSearchParams } from 'react-router'
            const [searchParams, setSearchParams] = useSearchParams()
            console.log(searchParams.get('id')) //获取id参数

            //2. 获取参数
            import { useLocation } from 'react-router'
            const { search } = useLocation()
            console.log(search) //获取search参数 ?id=123

# React-router 中的懒加载

什么是懒加载
**懒加载是一种优化技术，用于延迟加载组件，直到需要时才加载。这样可以减少初始加载时间，提高页面性能。**

懒加载组件打包后,会被打包为一个独立文件, 从而减少主包的大小
