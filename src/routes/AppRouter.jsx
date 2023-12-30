import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteName } from "../constants/RouteName";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FeaturePages from "../layout/FeaturePages";

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
            path={RouteName.Home}
            element={
              <FeaturePages
                Content={Home}
                handleClick={handleClick}
                isActive={isActive}
                setIsActive={setIsActive}
                title={"Settings"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
