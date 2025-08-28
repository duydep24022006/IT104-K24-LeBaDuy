import React, { useState } from "react";
type State = {
  name?: string;
  email?: string;
};
export default function Form() {
  const [user, setUser] = useState<State>({ name: "", email: "" });
  const [error, setError] = useState<State>({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
       setUser((prev) => ({
         ...prev,
         [name]: value,
       }));
    if (!value.trim()) {
      setError((prev) => ({
        ...prev,
        [name]: `${name} không đc bỏ  trống`,
      }));
    } else if (name == "email") {
      if (!value.includes("@") || value.indexOf("@") == 0) {
        setError((prev) => ({
          ...prev,
          [name]: `${name} không đúng định dạng`,
        }));
      } else {
        setError((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    } else {
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      error.email !== "" ||
      error.name !== "" ||
      user.email == "" ||
      user.name == ""
    ) {
      alert("vui lòng sửa lỗi trước khi gửi");
      return;
    }
    alert("Gửi thành công!");
  };
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Form đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Gửi
        </button>
      </form>
    </div>
  );
}
