import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Errors = {
  username?: string;
  email?: string;
  password?: string;
};

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const validateForm = (): Errors => {
    const newErrors: Errors = {};

    if (!username) {
      newErrors.username = "Vui lòng nhập tên người dùng!";
    } else if (username.length < 3) {
      newErrors.username = "Tên người dùng phải có ít nhất 3 ký tự!";
    }

    if (!email) {
      newErrors.email = "Vui lòng nhập email!";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Email không hợp lệ!";
      }
    }

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu!";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      newErrors.password = "Mật khẩu phải chứa cả chữ và số!";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = storedUsers.some(
      (user: { email: string }) => user.email === email
    );
    if (emailExists) {
      setErrors({ email: "Email đã tồn tại, vui lòng chọn email khác!" });
      return;
    }

    const newUser = { username, email, password };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] p-6 bg-white rounded-2xl shadow-md shadow-black/10 border border-slate-200 font-sans"
      >
        <div className="text-[22px] font-semibold text-slate-800 mb-6 text-center tracking-tight">
          Create account
        </div>

        <div className="mb-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4 relative flex items-center">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="w-full h-10 px-3 pr-9 text-sm border border-slate-300 rounded-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 p-1 text-slate-400 hover:text-blue-500 transition"
          >
            {showPassword ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path
                  strokeWidth="1.5"
                  stroke="currentColor"
                  d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                />
                <circle
                  strokeWidth="1.5"
                  stroke="currentColor"
                  r="3"
                  cy="12"
                  cx="12"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M3 3L21 21M9.88 9.88A3 3 0 0112 9c1.66 0 3 1.34 3 3a3 3 0 01-.88 2.12M6.73 6.73C4.59 7.78 3 12 3 12s3 7 9 7a8.96 8.96 0 004.27-1.07M17.27 17.27C19.41 16.22 21 12 21 12s-3-7-9-7c-1.05 0-2.05.19-2.97.54"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full h-10 mt-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
        >
          Create an account
        </button>

        <div className="mt-4 text-center text-sm">
          <Link to={"/login"} className="hover:text-slate-800 transition">
            Already have an account?{" "}
            <span className="text-blue-500 font-medium hover:text-blue-700">
              Login
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
