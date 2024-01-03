import React from "react";
import { Menu } from "antd";
import avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import AntDTooltop from "../Tooltip/AntDTooltop";
import { RouteName } from "../../constants/RouteName";
import { MdOutlineEdit } from "react-icons/md";

function SideBar({ isActive, items }) {
  const navigate = useNavigate();

  const handleMenuSelect = (item) => {
    if (item.item.props.route) {
      navigate(item.item.props.route);
    }
  };

  return (
    <div
      className={`shadow-md fixed ${
        isActive ? `w-[200px]` : `w-[80px]`
      } h-[90vh] overflow-y-scroll duration-500 bg-white`}
    >
      {isActive && (
        <div className="duration-500 flex justify-center items-center py-3">
          <div className="text-center">
            <img src={avatar} alt="" height={"90px"} width={"90px"} />
            <p className="text-lg">Jhon</p>
            <p className="text-sm text-gray-400">Student</p>
            <AntDTooltop
              title="Edit Profile"
              Content={
                <p
                  className="text-base text-[var(--main-blue)] flex justify-center cursor-pointer"
                  onClick={() => {
                    navigate(
                      RouteName.StudentHome.replace("/*", RouteName.EditProfile)
                    );
                  }}
                >
                  <MdOutlineEdit />
                </p>
              }
            />
          </div>
        </div>
      )}
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={!isActive}
        items={items}
        onSelect={handleMenuSelect}
      />
    </div>
  );
}

export default SideBar;
