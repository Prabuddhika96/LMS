import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function LoadingSpin({ fontSize = 24, color }) {
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: fontSize, color: color }}
      spin
      rev={undefined}
    />
  );
  return <Spin indicator={antIcon} />;
}

export default LoadingSpin;
