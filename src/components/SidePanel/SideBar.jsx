import React, { useEffect, useRef, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

function SideBar({ isActive, navData, setIsActive }) {
  const [iconClicked, setIconClicked] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState();

  const popRef = useRef(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      const handleClickOutside = (event) => {
        if (popRef.current && !popRef.current.contains(event.target)) {
          setIsActive(false);
        }
      };
      if (isActive) {
        window.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isActive]);

  return (
    <div
      className={`${
        isActive ? `w-[200px]` : `w-[80px]`
      } h-screen duration-500 bg-white`}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={!isActive}
        items={items}
      />
    </div>
  );
}

export default SideBar;