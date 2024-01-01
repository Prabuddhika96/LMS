import React from "react";
import { Form, Select } from "antd";
import SubHeading from "../Text/SubHeading";

const inputStyle = {
  fontSize: "16px",
  borderRadius: "8px",
  height: "50px",
  alignItems: "center",
};

function AntDSelectWithSearch({
  name,
  rules,
  className,
  value,
  placeholder,
  size,
  label,
  type,
  options, // Receive options as a prop
}) {
  return (
    <div className="w-full">
      {label && <SubHeading text={label} className={"mb-2"} />}
      <Form.Item name={name} rules={rules}>
        <Select
          showSearch
          style={inputStyle}
          placeholder={placeholder}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
          }
          filterSort={(optionA: any, optionB: any) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={options} // Use the options prop here
        />
      </Form.Item>
    </div>
  );
}

export default AntDSelectWithSearch;

// const options = [
//   {
//     value: "1",
//     label: "Not Identified",
//   },
//   {
//     value: "2",
//     label: "Closed",
//   },
//   {
//     value: "3",
//     label: "Communicated",
//   },
//   {
//     value: "4",
//     label: "Identified",
//   },
//   {
//     value: "5",
//     label: "Resolved",
//   },
//   {
//     value: "6",
//     label: "Cancelled",
//   },
// ];
