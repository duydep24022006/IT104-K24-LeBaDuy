import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";
import {
  addTask,
  deleteCompleted,
  deleteTaskId,
  editCompletedTask,
  getAllTask,
  getCompleted,
  getItnProgress,
  type Task,
} from "./Data";
import Swal from "sweetalert2";

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    getAllTask()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((err) => console.error("Lỗi:", err))
      .finally(() => {
        const elapsed = Date.now() - startTime;
        const remaining = 2000 - elapsed;
        setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
      });
  }, []);

  useEffect(() => {
    if (filter === "all") {
      getAllTask()
        .then((tasks) => {
          setTasks(tasks);
        })
        .catch((err) => console.error("Lỗi:", err));
    } else if (filter === "completed") {
      getCompleted()
        .then((tasks) => {
          setTasks(tasks);
        })
        .catch((err) => console.error("Lỗi:", err));
    } else {
      getItnProgress()
        .then((tasks) => {
          setTasks(tasks);
        })
        .catch((err) => console.error("Lỗi:", err));
    }
  }, [tasks]);

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
        deleteTaskId(id)
          .then(() => {
            Swal.fire("Đã xóa!", "Công việc đã bị xóa.", "success");
          })
          .catch(() => {
            Swal.fire("Lỗi!", "Không thể xóa công việc.", "error");
          });
      }
    });
  };

  const handleCompleted = () => {
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
        deleteCompleted()
          .then(() => {
            Swal.fire("Đã xóa!", "Công việc đã bị xóa.", "success");
          })
          .catch(() => {
            Swal.fire("Lỗi!", "Không thể xóa công việc.", "error");
          });
      }
    });
  };
  const handleToggle = async (id: number, completed: boolean) => {
    try {
      const updated = await editCompletedTask(id, !completed);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: updated.completed } : task
        )
      );
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    setError("");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }

    try {
      const newTask = await addTask({ title: task, completed: false });

      setTasks((prev) => [...prev, newTask]);
      setTask("");
      setError("");
    } catch {
      setError("Không thể thêm công việc!");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-center mb-4">Quản lý công việc</h1>
      <TodoForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        task={task}
      />
      <TodoFilters filter={filter} onFilterChange={setFilter} />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <ul className="space-y-2 mb-4 flex flex-col p-2 max-h-60 overflow-y-auto">
          {tasks.map((task) => (
            <TodoItem
              task={task}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      )}
      <TodoActions handleComplete={handleCompleted} />
    </div>
  );
}
