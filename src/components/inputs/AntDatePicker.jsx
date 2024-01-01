import React from "react";
import { DatePicker, Space } from "antd";

const AntDatePicker = ({
  name,
  rules,
  className,
  value,
  placeholder,
  size = 12,
  label,
  type,
  styles,
}) => {
  const { RangePicker } = DatePicker;
  return (
    <div className="w-full">
      <span className="text-[15px] text-white my-4">{label}</span>
      <Space direction="vertical" size={size}>
        <RangePicker
          style={
            styles
              ? styles
              : {
                  backgroundColor: "#3a3a3a",
                  borderRadius: "50px",
                  border: "none",
                }
          }
        />
      </Space>
    </div>
  );
};

export default AntDatePicker;
