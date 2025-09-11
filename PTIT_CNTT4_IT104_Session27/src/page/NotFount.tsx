import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFount() {
        const navigate = useNavigate();
    
  return (
    <div>
      <h1>Trang bạn tìm ko tồn tại</h1>
      <button onClick={() => navigate("/")} className="p-2 bg-blue-500 m-2">
        Quay về trang chủ
      </button>
      <button onClick={() => navigate(-1)} className="p-2 bg-blue-500">
        Quay lại
      </button>
    </div>
  );
}
