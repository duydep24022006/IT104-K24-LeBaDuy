import React from "react";
import { Alert } from "antd";
export default function Ex05() {
  return (
    <div>
      <Alert message="Thêm mới tài khoản thành công" type="success" closable />{" "}
      <br />
      <Alert message="Thêm mới tài khoản thất bại" type="error" closable />{" "}
      <br />
      <Alert message="tên không được để trống" type="warning" closable /> <br />
    </div>
  );
}
