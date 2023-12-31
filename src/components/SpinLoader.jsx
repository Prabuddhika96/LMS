import React from "react";
import { Spin } from "antd";

function SpinLoader() {
  return (
    <Spin
      tip="Loading"
      size="large"
      className="flex justify-center items-center h-screen"
    >
      <div className="p-[50px] bg-[rgba(0, 0, 0, 0.05)] rounded-[4px h-screen" />
    </Spin>
  );
}

export default SpinLoader;
