import React from "react";
import { Empty, Button } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";

export default function EmptyComponent() {
  return (
    <Empty
      image={
        <CarryOutOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
      }
      imageStyle={{
        height: 30,
      }}
      description={
        <span style={{ fontSize: "16px" }}>You are free for now!!</span>
      }
    ></Empty>
  );
}
