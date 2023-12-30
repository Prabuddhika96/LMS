import { Form, Input } from "antd";
import React from "react";

function AntDTextArea({ name, rules, value, placeholder, label, rows }) {
  return (
    <>
      <span className="text-[15px] text-white my-4">{label}</span>
      <Form.Item name={name} rules={rules}>
        <Input.TextArea
          placeholder={placeholder}
          rows={rows ? rows : 4}
          defaultValue={value}
        />
      </Form.Item>
    </>
  );
}

export default AntDTextArea;
