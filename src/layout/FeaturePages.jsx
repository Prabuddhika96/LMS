// FeaturePages.jsx
import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SidePanel/SideBar";
import { getItem } from "../utils/getItem";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  CalendarOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { MdOutlineAssignment } from "react-icons/md";

function FeaturePages({ Content, title, isActive, handleClick, setIsActive }) {
  return (
    <div className=" bg-blue-700 bg-opacity-10">
      <Header handleClick={handleClick} title={title} isActive={isActive} />
      <div className="flex">
        <div className="max-sm:absolute ">
          <SideBar
            isActive={isActive}
            setIsActive={setIsActive}
            items={studentItems}
          />
        </div>
        <div
          className={`min-h-screen max-sm:ml-[80px] duration-500 ${
            isActive ? `pl-[200px]` : `pl-[80px]`
          } `}
        >
          <div className="p-5 min-h-[500px] ">
            <Content
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePages;

const studentItems = [
  getItem("Time Table", "1", <CalendarOutlined />),
  getItem("Assignments", "sub1", <MdOutlineAssignment />, [
    getItem("Assignment 1", "2"),
    getItem("Assignment 2", "3"),
    getItem("Assignment 3", "4"),
    getItem("Assignment 4", "5"),
  ]),

  getItem("Navigation One1", "sub2", <MailOutlined />, [
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub3", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub4", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
  getItem("Option 9", "13", <PieChartOutlined />),
  getItem("Option 2", "14", <DesktopOutlined />),
  getItem("Option 3", "15", <ContainerOutlined />),
];
