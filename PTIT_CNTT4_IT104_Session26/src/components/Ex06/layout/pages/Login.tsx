import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";

type State = {
  name?: string;
  password?: string;
  role?: "admin" | "user" | "";
};
const data = [
  {
    name: "admin",
    password: "12345678",
    role: "admin",
  },
  {
    name: "user",
    password: "12345678",
    role: "user",
  },
];
export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState<State>({
    name: "",
    password: "",
    role: "",
  });
   localStorage.setItem("isLogin", "false");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, password, role } = user;

    const userForm = data.find(
      (u) => u.name === name && u.password === password && u.role === role
    );

    if (userForm) {
      localStorage.setItem("isLogin", "true");
       setRedirect(true);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
   if (redirect) {
     return <Navigate to="/account" replace />;
   }
  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h4 className="text-center mb-4">Đăng nhập</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nhập tên đăng nhập"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            value={user.role}
            onChange={(e) =>
              setUser({ ...user, role: e.target.value as "admin" | "user" })
            }
            required
          >
            <option value="">-- Chọn quyền --</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}
