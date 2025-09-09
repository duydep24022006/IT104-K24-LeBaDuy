import React from "react";
import Button from "react-bootstrap/Button";
import { Pencil, Trash2 } from "lucide-react";

type Task = {
  id?: string;
  tilte?: string;
  isStatus?: boolean;
};
export default function LT2() {
    const 
  return (
    <div className="flex flex-col justify-center items-center m-5 shadow-2xl rounded-2xl w-screen p-10">
      <h1>Danh sách công việc</h1>
      <div className="w-[80%] flex gap-5 justify-center mb-3">
        <input
          type="text"
          className="border-1 border-gray-200 rounded-[5px] w-[70%]"
        />
        <Button variant="primary">Thêm</Button>
      </div>
      <div>
        <p className="text-red-600 w-[100%]">không đc bỏ trống</p>
      </div>
      <div className="flex w-[64%]  justify-between">
        <div className="flex gap-3">
          <input type="checkbox" />
          <label htmlFor="">Code</label>
        </div>
        <div className=" flex gap-3">
          <Pencil
            size="18"
            className="text-orange-400 hover:text-orange-600 cursor-pointer"
          />
          <Trash2
            size="18"
            className="text-red-400 hover:text-red-600 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <p className="flex items-center w-[910px] h-10 bg-gray-200 mt-4 p-2">
          Công việc đã hoàn thành: 0/4
        </p>
      </div>
    </div>
  );
}
