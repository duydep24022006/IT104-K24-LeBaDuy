import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home07() {
    const navigate = useNavigate();
  return (
    <div>
          <h1>Trang chủ</h1>
          <p>đây là trang chủ</p>
          <button onClick={()=>navigate("/about")} className="bg-fuchsia-600 p-2 ">About</button>
    </div>
  );
}
