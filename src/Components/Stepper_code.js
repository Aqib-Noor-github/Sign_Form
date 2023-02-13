import React from "react";
import {
  UnlockOutlined,
  UserOutlined,
  CameraOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "./stepper_code.css";
import { Steps } from "antd";

function Stepper_code({ currentStep }) {

  return (
    <>
      <Steps
        className="stepper"
        current={currentStep - 1}
        items={[
          {
            title: "Account info",

            icon: <UnlockOutlined />,
          },
          {
            title: "personal Info",

            icon: <UserOutlined />,
          },
          {
            title: "Images",
            icon: <CameraOutlined />,
          },
          {
            title: "finish",

            icon: <CheckOutlined />,
          },
        ]}
      />
    </>
  );
}

export default Stepper_code;
