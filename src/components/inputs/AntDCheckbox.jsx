import { Form, Checkbox } from "antd";
import React from "react";

function AntDCheckbox({ name, rules, options, cols }) {
  return (
    <Form.Item name={name} rules={rules}>
      <Checkbox.Group options={options} />
    </Form.Item>
  );
}

export default AntDCheckbox;
