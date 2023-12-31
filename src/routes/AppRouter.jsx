import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteName } from "../constants/RouteName";
import StudentHome from "../pages/StudentHome";
import Login from "../pages/Login";
import FeaturePages from "../layout/FeaturePages";
import AssignmentThread from "../pages/Student/Assignment/AssignmentThread";

function AppRouter() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteName.Login} element={<Login />} />
          <Route
            path={RouteName.StudentHome}
            element={
              <StudentHome
                handleClick={handleClick}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
