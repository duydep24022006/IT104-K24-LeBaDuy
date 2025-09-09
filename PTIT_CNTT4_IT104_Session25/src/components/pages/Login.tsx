import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
useEffect(() => {
  const sampleUser = {
    email: "nva@gmail.com",
    password: "123456",
    name: "Nguyen Van A",
  };
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(sampleUser));
  }
}, []);
 const handleLogin = (e: React.FormEvent) => {
   e.preventDefault();

   const userData = JSON.parse(localStorage.getItem("user") || "{}");

   if (userData.email === email && userData.password === password) {
     localStorage.setItem("currentUser", JSON.stringify(userData));

     navigate("/homePage");
   } else {
     alert("Sai email hoặc mật khẩu!");
   }
 };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-[400px] p-6 bg-white rounded-2xl shadow-md shadow-black/10 border border-slate-200 font-sans"
      >
        {/* Title */}
        <div className="text-[22px] font-semibold text-slate-800 mb-6 text-center tracking-tight">
          Login account
        </div>

        {/* Email */}
        <div className="mb-4">
          <div className="relative flex items-center">
            <svg
              className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="1.5"
                stroke="currentColor"
                d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
              />
            </svg>
            <input
              required
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-9 text-sm border border-slate-300 rounded-lg bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="relative flex items-center">
            <svg
              className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="1.5"
                stroke="currentColor"
                d="M12 10V14M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6 8 8 6Z"
              />
            </svg>
            <input
              required
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-9 pr-9 text-sm border border-slate-300 rounded-lg bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition"
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
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="relative rounded w-full h-10 mt-2 bg-blue-500 text-white text-sm font-medium overflow-hidden transition hover:bg-blue-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 "
        >
          <span className="relative z-10 rounded-[10px]">Login an Account</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
        </button>

        {/* Footer */}
        <div className="mt-4 text-center text-sm">
          <Link
            to={"/register"}
            className="text-slate-500 hover:text-slate-800 transition"
          >
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
