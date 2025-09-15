import axios from "axios";
import React, { useEffect } from "react";
async function getStudentById(id: number) {
  try {
    const res = await axios.get(`http://localhost:8080/students/${id}`);
    if (res.data) {
      console.log("Thông tin sinh viên:", res.data);
    } else {
      console.log("Không tìm thấy bản ghi");
    }
  } catch (error) {
    console.log("Không tìm thấy bản ghi");
  }
}
export default function Ex05() {
  useEffect(() => {
    getStudentById(3);
  });

  return <div>Ex05</div>;
}
