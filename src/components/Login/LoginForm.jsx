import React from "react";
import { Form } from "antd";
import AntDInputField from "../inputs/AntDInputField";

function LoginForm() {
  const onFinish = (values) => {
    const finalObj = {};
    console.log(finalObj);
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        className="p-6 bg-white rounded-md shadow-md w-10/12"
      >
        <p className="text-center text-2xl uppercase font-bold">Login</p>
        <AntDInputField
          label={"User Name"}
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your user name!",
            },
          ]}
          placeholder={"User name"}
        />

        <AntDInputField
          label={"Password"}
          name="password"
          type={"password"}
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
          placeholder={"Password"}
        />

        <Form.Item>
          <button
            className="px-4 py-2 mt-3 bg-blue-600 w-full text-white rounded-md hover:bg-blue-500 duration-200 ease-in-out"
            type="submit"
          >
            Login
          </button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginForm;
