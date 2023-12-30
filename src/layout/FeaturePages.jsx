// FeaturePages.jsx
import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SidePanel/SideBar";

function FeaturePages({ Content, title, isActive, handleClick, setIsActive }) {
  return (
    <div className=" bg-blue-700 bg-opacity-10">
      <Header handleClick={handleClick} title={title} isActive={isActive} />
      <div className="flex">
        <div className="max-sm:absolute ">
          <SideBar isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className={`min-h-screen max-sm:ml-[80px]`}>
          <div className="p-5 min-h-[500px] ">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePages;
