import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: '12px', color: "white" }} />;

const Button = ({ label, handleSubmit, classes, loading }) => {
  return (
    <button onClick={handleSubmit} className={classes}>
      {loading ? <Spin indicator={antIcon} /> : label}
    </button>
  );
};

export default Button;
