import React from "react";
import { Tooltip } from "antd";

function ToolTip({ Content, title }) {
  return <Tooltip title={title}>{Content}</Tooltip>;
}

export default ToolTip;
