import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tasks } from "../components/data";

export default function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const taskFind = tasks.find((item) => item.id === Number(id));

  return (
    <div>
          <h1>{taskFind?.title}</h1>
          <p>{taskFind?.description}</p>
          <button onClick={() => navigate(-1)} className="bg-blue-500 text-white">Quay lại</button>
    </div>
  );
}
