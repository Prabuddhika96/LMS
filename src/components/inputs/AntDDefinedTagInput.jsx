import React from "react";
import { Form, Select, Space } from "antd";
// import type { SelectProps } from "antd";

// const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const inputStyle = {
  fontSize: "16px",
  borderRadius: "8px",
  height: "50px",
  alignItems: "center",
};

function AntDDefinedTagInput({
  name,
  rules,
  className,
  value,
  placeholder,
  size,
  label,
  type,
}) {
  return (
    <div className="w-full">
      <span className="text-[15px] text-white my-4">{label}</span>
      <Form.Item name={name} rules={rules}>
        <Select
          mode="multiple"
          allowClear
          placeholder={placeholder}
          style={inputStyle}
          //   defaultValue={["a10", "c12"]}
          //   onChange={handleChange}
          options={options}
        />
      </Form.Item>
    </div>
  );
}

export default AntDDefinedTagInput;
