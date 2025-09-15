import axios from "axios";
import React, { useEffect } from "react";

async function getAllStudent() {
  const res = await axios.get("http://localhost:8080/students");
  return res.data;
}

export default function Ex04() {
  useEffect(() => {
    getAllStudent()
      .then((students) => {
        console.log("Danh sách sinh viên:", students);
      })
      .catch((err) => console.error("Lỗi:", err));
  },[]);
  return <div>Ex04</div>;
}
