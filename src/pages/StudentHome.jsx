import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteName } from "../constants/RouteName";
import FeaturePages from "../layout/FeaturePages";
import AssignmentThread from "./Student/Assignment/AssignmentThread";
import TimeTable from "./Student/TimeTable/TimeTable";
import EventCalender from "./Student/EventCalender/EventCalender";
import PersonalNotes from "./Student/PersonalNotes/PersonalNotes";
import Notices from "./Student/Notices/Notices";
import Courses from "./Student/Courses/Courses";
import Profile from "./Student/Profile/Profile";

function StudentHome({ isActive, handleClick, setIsActive }) {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <FeaturePages
              Content={TimeTable}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.AssignmentThread}
          element={
            <FeaturePages
              Content={AssignmentThread}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.EventCalender}
          element={
            <FeaturePages
              Content={EventCalender}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.PersonalNotes}
          element={
            <FeaturePages
              Content={PersonalNotes}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.Notices}
          element={
            <FeaturePages
              Content={Notices}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.Courses}
          element={
            <FeaturePages
              Content={Courses}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path={RouteName.EditProfile}
          element={
            <FeaturePages
              Content={Profile}
              handleClick={handleClick}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
      </Routes>
    </>
  );
}

export default StudentHome;
