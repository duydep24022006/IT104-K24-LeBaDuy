import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const registeredUser = useSelector((state: any) => state.auth.registeredUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (location.state) {
      const { email, password } = location.state as {
        email: string;
        password: string;
      };
      setEmail(email);
      setPassword(password);
    }
  }, [location.state]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      dispatch({ type: "LOGIN", payload: { email, password } });
      alert("Đăng nhập thành công!");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

   return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <form
         onSubmit={handleLogin}
         className="bg-white shadow-lg rounded-xl p-8 w-96"
       >
         <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>

         <label className="block mb-2 text-sm font-medium">Email</label>
         <input
           type="text"
           className="w-full p-2 mb-4 border rounded-md focus:ring focus:ring-green-300"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Nhập email"
           required
         />

         <label className="block mb-2 text-sm font-medium">Mật khẩu</label>
         <input
           type="password"
           className="w-full p-2 mb-6 border rounded-md focus:ring focus:ring-green-300"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Nhập mật khẩu"
           required
         />

         <button
           type="submit"
           className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
         >
           Đăng nhập
         </button>
       </form>
     </div>
   );
}
