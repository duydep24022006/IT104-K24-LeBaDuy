import React, { useState } from "react";
type Post = {
  id: number;
  title: string;
  description: string;
  isStatus: boolean;
};
const Data = [
  {
    id: 1,
    title: "React",
    description: "Hướng dẫn sử dụng react",
    isStatus: false,
  },
  {
    id: 2,
    title: "CSS",
    description: "Hướng dẫn sử dụng react",
    isStatus: false,
  },
  {
    id: 3,
    title: "Java",
    description: "Hướng dẫn sử dụng react",
    isStatus: false,
  },
  {
    id: 4,
    title: "C++",
    description: "Hướng dẫn sử dụng react",
    isStatus: false,
  },
];
export default function ArticleTracker() {
  const [tasks, setTasks] = useState<Post[]>(Data);
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isStatus: !task.isStatus } : task
      )
    );
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <h3>chưa đọc</h3>
      <ul>
        {tasks.map((task) => (
          <div>
            {task.isStatus === false && (
              <li key={task.id}>
                {task.title}
                <button onClick={() => toggleTask(task.id)}>
                  {task.isStatus ? " Đánh dấu đã đọc" : " Đánh dấu chưa đọc"}
                </button>
              </li>
            )}
          </div>
        ))}
      </ul>
      <h3>Đã đọc</h3>
      <ul>
        {tasks.map((task) => (
          <div>
            {task.isStatus === true && (
              <li key={task.id}>
                {task.title}
                <button onClick={() => toggleTask(task.id)}>
                  {task.isStatus ? " Đánh dấu đã đọc" : " Đánh dấu chưa đọc"}
                </button>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
