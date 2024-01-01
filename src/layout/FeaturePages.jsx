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
import { RouteName } from "../constants/RouteName";

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
          className={`min-h-screen duration-500 w-full ${
            isActive
              ? `max-sm:pl-[70px] sm:pl-[200px]`
              : `max-sm:pl-[70px] sm:pl-[80px]`
          } `}
        >
          <div className="px-5 py-5 min-h-screen w-full">
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
  getItem(
    "Time Table",
    "1",
    <CalendarOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", "")
  ),
  getItem("Assignments", "sub1", <MdOutlineAssignment />, [
    getItem(
      "Assignment 1",
      "2",
      null,
      null,
      null,
      RouteName.StudentHome.replace("/*", RouteName.AssignmentThread)
    ),
    getItem(
      "Assignment 2",
      "3",
      null,
      null,
      null,
      RouteName.StudentHome.replace("/*", RouteName.AssignmentThread)
    ),
    getItem(
      "Assignment 3",
      "4",
      null,
      null,
      null,
      RouteName.StudentHome.replace("/*", RouteName.AssignmentThread)
    ),
    getItem(
      "Assignment 4",
      "5",
      null,
      null,
      null,
      RouteName.StudentHome.replace("/*", RouteName.AssignmentThread)
    ),
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
  getItem(
    "Event Calender",
    "13",
    <PieChartOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", RouteName.EventCalender)
  ),
  getItem("Option 2", "14", <DesktopOutlined />),
  getItem("Option 3", "15", <ContainerOutlined />),
];
