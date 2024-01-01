import React from "react";
import { Form, Select } from "antd";
// import type { SelectProps } from "antd";
import SubHeading from "../Text/SubHeading";

const inputStyle = {
  fontSize: "16px",
  borderRadius: "8px",
  height: "50px",
  alignItems: "center",
};

// const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

function AntDCustomTagInput({
  name,
  rules,
  className,
  value,
  placeholder,
  size,
  smallLabel,
  label,
  type,
  labelClassname,
}) {
  return (
    <div className="w-full">
      {smallLabel ? (
        <span
          className={`text-[15px] text-white my-4 ${
            labelClassname && labelClassname
          }`}
        >
          {label}
        </span>
      ) : (
        <SubHeading
          text={label}
          className={`mb-2 ${labelClassname && labelClassname}`}
        />
      )}
      <Form.Item name={name} rules={rules}>
        <Select
          mode="tags"
          placeholder={placeholder}
          style={inputStyle}
          options={options}
          className={className && className}
        />
      </Form.Item>
    </div>
  );
}

export default AntDCustomTagInput;
