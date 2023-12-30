import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../assets/images/avatar.png";

function Header({ handleClick, title, isActive }) {
  return (
    <div className="sticky top-0 z-50 navbar shadow-md pr-3  bg-white">
      <div className="flex w-full h-16 justify-between items-center">
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

        <div className="flex justify-end items-center gap-3">
          <IoNotifications className="text-xl" />
          <img src={avatar} alt="" height={"35px"} width={"35px"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
