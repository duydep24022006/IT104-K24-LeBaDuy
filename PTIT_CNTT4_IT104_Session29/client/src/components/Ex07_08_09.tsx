import axios from "axios";
import { Pencil, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
async function getAllStudent() {
  const res = await axios.get("http://localhost:8080/students");
  return res.data;
}

export default function Ex07_08_09() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    getAllStudent()
      .then((students) => {
        console.log("Danh sách sinh viên:", students);
        setStudents(students);
      })
      .catch((err) => console.error("Lỗi:", err));
  });
   const totalRecords = students.length;
   const totalPages = Math.ceil(totalRecords / recordsPerPage);
   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = students.slice(indexOfFirstRecord, indexOfLastRecord);
    const goToPage = (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/students/${id}`)
          .then(() => {
            Swal.fire("Đã xóa!", "Sinh viên đã bị xóa.", "success");
          })
          .catch(() => {
            Swal.fire("Lỗi!", "Không thể xóa sinh viên.", "error");
          });
      }
    });
  };
  return (
    <div className="p-4">
      <div className="bg-blue-900 text-white px-4 py-2 rounded-t-md flex justify-between items-center">
        <h2 className="font-bold text-lg">Quản lý sinh viên</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md flex items-center gap-1">
          <Plus size={18} /> Thêm mới sinh viên
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 w-10">
              <input type="checkbox" />
            </th>
            <th className="border px-2 py-1">Tên sinh viên</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Địa chỉ</th>
            <th className="border px-2 py-1">Số điện thoại</th>
            <th className="border px-2 py-1">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((s) => (
            <tr key={s.id} className="">
              <td className="border px-2 py-1 ">
                <input type="checkbox" />
              </td>
              <td className="border px-2 py-1">{s.student_name}</td>
              <td className="border px-2 py-1">{s.email}</td>
              <td className="border px-2 py-1">{s.address}</td>
              <td className="border px-2 py-1">{s.phone}</td>
              <td className="border px-2 py-1">
                <div className="flex justify-center gap-2">
                  <Pencil
                    size={18}
                    className="text-yellow-500 cursor-pointer hover:text-yellow-600"
                  />
                  <Trash2
                    size={18}
                    className="text-red-500 cursor-pointer hover:text-red-600"
                    onClick={() => handleDelete(s.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center p-2 border border-t-0 border-gray-300 rounded-b-md text-sm">
        <span>
          Hiển thị {currentRecords.length}/10 bản ghi
        </span>
        <div className="flex items-center gap-2 mt-3">
          <button
            className="px-3 py-1 border rounded"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Trước
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
}
