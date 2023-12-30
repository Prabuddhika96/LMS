import React from "react";
import { Button, Spin } from "antd";

function Loading() {
  return (
    <div>
      <Spin tip="Loading" spinning={true} size="large" fullscreen />
    </div>
  );
}

export default Loading;
