import { Form, Radio } from "antd";
import React from "react";

function AntDRadio({
  name,
  rules,
  className,
  value,
  placeholder,
  size,
  label,
  type,
  options,
  defaultValue,
}) {
  return (
    <div className="w-full">
      <Form.Item name={name} rules={rules}>
        <Radio.Group defaultValue={defaultValue}>
          {options.map((option, i) => (
            <Radio
              value={option.value}
              key={i}
              style={{ display: "block" }}
              className="text-white accent-red-600"
            >
              <span className="text-xl">{option.label}</span>
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </div>
  );
}

export default AntDRadio;
