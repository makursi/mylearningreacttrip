import { Menu as AntdMenu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import type { MenuProps } from "antd";

export default function Menu() {
  const navigate = useNavigate();
  const handleClick: MenuProps["onClick"] = (info) => {
    navigate(info.key); // 点击菜单项时，导航到对应的页面
  };

  const menuItems = [
    {
      key: "/home",
      label: "Home",
      icon: <AppstoreOutlined></AppstoreOutlined>,
    },
    {
      key: "/about",
      label: "About",
      icon: <AppstoreOutlined></AppstoreOutlined>,
    },
  ];
  //配置菜单项
  return <AntdMenu onClick={handleClick} items={menuItems}></AntdMenu>;
}
