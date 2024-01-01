import React from "react";
import { Form, Select } from "antd";
import SubHeading from "../Text/SubHeading";

const { Option } = Select;

const inputStyle = {
  fontSize: "16px",
  borderRadius: "8px",
  height: "50px",
  alignItems: "center",
};

function AntDSelect({ name, label, options, placeholder }) {
  return (
    <>
      {/* <span className="text-[15px] text-white my-4">{label}</span> */}
      <SubHeading text={label} className={"mb-2"} />
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: `Please select ${label.toLowerCase()}!`,
          },
        ]}
      >
        <Select placeholder={placeholder} style={inputStyle}>
          {options.map((option: any) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
}

export default AntDSelect;
