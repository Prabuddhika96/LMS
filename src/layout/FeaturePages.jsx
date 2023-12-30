// FeaturePages.jsx
import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SidePanel/SideBar";

function FeaturePages({ Content, title, isActive, handleClick, setIsActive }) {
  return (
    <div className=" bg-blue-700 bg-opacity-10">
      <Header handleClick={handleClick} title={title} isActive={isActive} />
      <div className="flex">
        <SideBar isActive={isActive} setIsActive={setIsActive} />
        <div className={`min-h-screen`}>
          <div className="ml-1 min-h-[500px] ">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePages;
