// FeaturePages.jsx
import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SidePanel/SideBar";

function FeaturePages({ Content, title, isActive, handleClick, setIsActive }) {
  return (
    <div className=" bg-blue-700 bg-opacity-10">
      <Header handleClick={handleClick} title={title} isActive={isActive} />
      <SideBar
        isActive={isActive}
        // navData={contentNavData}
        setIsActive={setIsActive}
      />
      <div
        className={`min-h-screen ${
          isActive
            ? "md:pl-[100px] !pl-[200px] duration-500 p-2 ml-3 max-sm:pl-0 max-sm:ml-2 max-sm:mt-2"
            : "pl-0 duration-500 p-2 ml-8 max-sm:pl-0 max-sm:ml-2  "
        }`}
      >
        <div className="ml-1 min-h-[500px] ">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default FeaturePages;
