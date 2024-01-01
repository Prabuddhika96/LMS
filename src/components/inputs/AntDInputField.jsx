import { Form, Input } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React from "react";

const inputStyle = {
  fontSize: "16px",
  borderRadius: "8px",
  height: "40px",
  alignItems: "center",
};

function AntDInputField({
  name,
  rules,
  className,
  value,
  placeholder,
  size,
  label,
  type,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputType =
    type === "password" ? (passwordVisible ? "text" : "password") : "text";

  return (
    <div className="w-full">
      <span className="text-base my-2">{label}</span>
      <Form.Item name={name} rules={rules}>
        <Input
          type={inputType}
          placeholder={placeholder}
          style={inputStyle}
          defaultValue={value}
          suffix={
            type === "password" && (
              <div
                onClick={togglePasswordVisibility}
                style={{
                  cursor: "pointer",
                }}
              >
                {passwordVisible ? (
                  <EyeTwoTone className="text-lg" />
                ) : (
                  <EyeInvisibleOutlined className="text-lg" />
                )}
              </div>
            )
          }
        />
      </Form.Item>
    </div>
  );
}

export default AntDInputField;
