import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../assets/images/avatar.png";
import { Button, Popover, Space } from "antd";

const content = (
  <div>
    <p className="cursor-pointer">Content</p>
    <p className="cursor-pointer">Logout</p>
  </div>
);

const content1 = (
  <div className="flex justify-start items-center gap-1 cursor-pointer hover:bg-slate-300 duration-200 ease-in-out">
    <img src={avatar} alt="" height={"35px"} width={"35px"} />
    <p className="font-bold">Jhon</p>
  </div>
);

function Header({ handleClick, title, isActive }) {
  return (
    <div className="sticky top-0 z-50 navbar shadow-md pr-3  bg-white">
      <div className="flex w-full h-16 justify-between items-center">
        <div
          className={`flex items-center px-3 justify-start gap-3 w-[80px]  pl-6 h-full bg-[var(--main-blue)] text-white duration-500 ${
            isActive ? `sm:w-[200px]` : ``
          }`}
        >
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

          {isActive && (
            <span className="text-2xl flex max-sm:hidden justify-center duration-500  font-bold">
              LMS
            </span>
          )}
        </div>

        <div className="flex justify-end items-center gap-3">
          <Popover content={content} title={"Notification"} trigger="click">
            <div className="h-[55px]">
              <IoNotifications className="text-xl h-full" />
            </div>
          </Popover>

          <Popover content={content} title={content1} trigger="click">
            <div className="flex justify-end items-center gap-1 cursor-pointer hover:bg-slate-300 p-3 duration-200 ease-in-out">
              <img src={avatar} alt="" height={"35px"} width={"35px"} />
              <p className="font-bold">Jhon</p>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;
