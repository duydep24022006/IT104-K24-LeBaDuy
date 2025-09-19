import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <h2>Thong tin cá nhân</h2>
      <p>id:{profile.id}</p>
      <p>Họ và tên:{profile.name}</p>
      <p>giới tính:{profile.male}</p>
      <p>Ngày sinh:{profile.date}</p>
      <p>Địa chỉ:{profile.address}</p>
    </div>
  );
}
