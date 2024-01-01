import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteName } from "../constants/RouteName";
import FeaturePages from "../layout/FeaturePages";
import AssignmentThread from "./Student/Assignment/AssignmentThread";
import TimeTable from "./Student/TimeTable/TimeTable";
import EventCalender from "./Student/EventCalender/EventCalender";

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
      </Routes>
    </>
  );
}

export default StudentHome;
