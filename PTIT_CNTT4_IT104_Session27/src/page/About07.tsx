import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About07() {
        const navigate = useNavigate();
    
  return (
    <div>
          <h1>About</h1>
          <p>Trang giới thiệu</p>
          <p className='text-blue-500 ' onClick={()=>navigate("/")}>Quay về trang chủ</p>
    </div>
  );
}
