import React from "react";
import { Tooltip } from "antd";

function AntDTooltop({ Content, title }) {
  return <Tooltip title={title}>{Content}</Tooltip>;
}

export default AntDTooltop;
