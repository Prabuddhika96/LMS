import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteName } from "../constants/RouteName";
import FeaturePages from "../layout/FeaturePages";
import AssignmentThread from "./Student/Assignment/AssignmentThread";
import TimeTable from "./Student/TimeTable/TimeTable";
import EventCalender from "./Student/EventCalender/EventCalender";
import PersonalNotes from "./Student/PersonalNotes/PersonalNotes";

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
      </Routes>
    </>
  );
}

export default StudentHome;
