import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import type { Task } from "./Data";

type Props = {
  task: Task;
  handleDelete: (id: number) => void;
  handleToggle: (id: number, completed: boolean) => void;
};
export default function TodoItem({ task, handleDelete, handleToggle }: Props) {
  return (
    <li className="flex justify-between items-center border px-3 py-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task.id,task.completed)}
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>
      <div className="flex gap-2">
        <Pencil size={18} className="text-warning cursor-pointer" />
        <Trash2
          size={18}
          className="text-danger cursor-pointer"
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </li>
  );
}
