import React, { useState } from "react";

type User = {
  name: string;
  email: string;
  isStatus: boolean;
};
export default function Ex2() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    isStatus: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
        [name]: value,
        isStatus: false
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      isStatus: true,
    }));
  };
  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} /> <br />
        <input type="text" name="email" value={user.email} onChange={handleChange} /> <br />
        <button type="submit"> Gửi</button>
      </form>
      {user.isStatus && (
        <div>
          <h3>Tên:{user.name}</h3>
          <h3>Email:{user.email}</h3>
        </div>
      )}
    </div>
  );
}
