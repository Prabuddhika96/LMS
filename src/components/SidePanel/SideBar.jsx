import React, { useEffect, useRef, useState } from "react";

function SideBar({ isActive, navData, setIsActive }) {
  const [iconClicked, setIconClicked] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState();

  const popRef = useRef(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      const handleClickOutside = (event) => {
        if (popRef.current && !popRef.current.contains(event.target)) {
          setIsActive(false);
        }
      };
      if (isActive) {
        window.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`duration-500 !bg-white sidebar z-40 navbar fixed overflow-y-auto text-center shadow h-screen max-sm:z-[100] max-sm:mt-0 ${
          isActive
            ? "left-0 p-2 w-[200px] !overflow-visible max-sm:w-[100px] "
            : " md:left-[0px] left-[20px] p-2 w-[50px] "
        }`}
        ref={popRef}
      >
        {/* Rest of your content */}
      </div>
    </>
  );
}

export default SideBar;
