import React from "react";

const userInfo = {
  fullName: "Nguyễn Văn A",
  gender: "Nam",
  birthDate: "06/03/2024",
  email: "nva@gmail.com",
  address: "Thanh Xuân, Hà Nội",
};

export default function UserInfo() {
  return (
    <>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên:{userInfo.fullName}</li>
        <li> Giới tính:{userInfo.gender}</li>
        <li>Ngày sinh:{userInfo.birthDate}</li>
        <li>Email:{userInfo.email}</li>
        <li>Địa chỉ:{userInfo.address}</li>
      </ul>
    </>
  );
}
