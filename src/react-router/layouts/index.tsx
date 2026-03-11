import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
//从ant-design 引入 Layout 组件重命名为 AntdLayout 引入
import { Layout as AntdLayout } from "antd";

export default function Layout() {
  return (
    <AntdLayout>
      <AntdLayout.Sider>
        <Menu></Menu>
      </AntdLayout.Sider>

      <AntdLayout>
        <Header></Header>
        <AntdLayout.Content>
          <Content></Content>
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
}
