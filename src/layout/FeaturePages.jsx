// FeaturePages.jsx
import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SidePanel/SideBar";
import { getItem } from "../utils/getItem";
import {
  ContainerOutlined,
  DesktopOutlined,
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
          className={`min-h-[90vh] duration-500 w-full ${
            isActive
              ? `max-sm:pl-[70px] sm:pl-[200px]`
              : `max-sm:pl-[70px] sm:pl-[80px]`
          } `}
        >
          <div className="px-5 py-5 min-h-[90vh] w-full">
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
  getItem(
    "Event Calender",
    "13",
    <PieChartOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", RouteName.EventCalender)
  ),
  getItem(
    "Personal Notes",
    "14",
    <DesktopOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", RouteName.PersonalNotes)
  ),
  getItem(
    "Notices",
    "15",
    <ContainerOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", RouteName.Notices)
  ),
  getItem(
    "Courses",
    "16",
    <ContainerOutlined />,
    null,
    null,
    RouteName.StudentHome.replace("/*", RouteName.Courses)
  ),
];
