import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "REGISTER", payload: { email, password } });

    navigate("/login", { state: { email, password } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded-md focus:ring focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email"
          required
        />

        <label className="block mb-2 text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          className="w-full p-2 mb-6 border rounded-md focus:ring focus:ring-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
