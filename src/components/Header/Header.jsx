// Header.jsx
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

function Header({ handleClick, title, isActive }) {
  return (
    <div className="sticky top-0 z-50 navbar shadow-md ">
      <div className="flex w-full h-16 justify-between items-center bg-white">
        <div className="flex items-center px-3 justify-start gap-3 h-full bg-[#6673fc] text-white w-[200px]">
          <span
            className="text-3xl text-white cursor-pointer top-5"
            onClick={handleClick}
          >
            {isActive ? (
              <HiMenu size={35} className="px-1 mx-auto bi bi-filter-left" />
            ) : (
              <BiMenuAltLeft size={35} className="px-1 bi bi-filter-left" />
            )}
          </span>
          <span className="text-2xl flex justify-center font-bold">LMS</span>
        </div>

        <span className="text-2xl font-bold">{title}</span>
      </div>
    </div>
  );
}

export default Header;
