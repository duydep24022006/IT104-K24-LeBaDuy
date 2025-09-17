import React from "react";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading: React.FC = () => {
  
  return (
      <Flex align="center" gap="middle">
        <div className="w-screen h-screen flex justify-center items-center">
          <Spin indicator={<LoadingOutlined  style={{ fontSize: 48 }} spin />} />
        </div>
      </Flex>
  );
};

export default Loading;
