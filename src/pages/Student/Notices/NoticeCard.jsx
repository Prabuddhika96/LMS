import React from "react";
import { Card } from "antd";

function NoticeCard({ notice }) {
  return (
    <>
      <Card
        type="inner"
        title={notice.title}
        className="my-3 hover:shadow-lg duration-200 ease-in-out"
      >
        {notice.notice}
      </Card>
    </>
  );
}

export default NoticeCard;
