import axios from "axios";
import React, { useEffect } from "react";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
type CreateStudentDTO = Omit<Student, "id" | "created_at">;

async function createStudent(student: CreateStudentDTO): Promise<Stdent> {
  const res = await axios.post("http://localhost:8080/students", {
    ...student,
    created_at: new Date().toISOString,
  });
  return res.data;
}
export default function Ex06() {
    useEffect(() => {
        const newStudent: CreateStudentDTO = {
            student_name: "Nguyễn Văn F",
            email: "f@example.com",
            address: "Huế",
            phone: "0911222333",
            status: true,
        };
        createStudent(newStudent)
          .then((student) => {
            console.log("Đã thêm sinh viên:", student);
          })
          .catch((err) => console.error("Lỗi khi thêm:", err));
  },[])
  return <div>Ex06</div>;
}
