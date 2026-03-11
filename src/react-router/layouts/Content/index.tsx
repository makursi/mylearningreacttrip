//使用状态优化useNavigation
import { Outlet, useNavigation } from "react-router";
import { Alert, Spin } from "antd";
export default function Content() {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading ? (
        <Spin size="large" description="loading...">
          <Alert description="choriachoriachoria" title="加载中" type="info" />
        </Spin>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

//这样做的目的:
// 例如 about 是一个懒加载的组件，在切换到 about 路由时，展示的还是上一个路由的组件，
// 直到懒加载的组件加载完成，才会展示新的组件，
// 这样用户会感觉页面卡顿，用户体验不好。
