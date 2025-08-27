import React from "react";
import type { Todo } from "../TodoListIndex";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  if (!todos.length) {
    return <p className="text-center text-muted">Chưa có công việc nào.</p>;
  }

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <div>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={todo.isCheck}
                  onChange={() => onToggle(todo.id)}
                />
                {todo.isCheck ? <s>{todo.name}</s> : todo.name}
              </div>
              <div>
                <button
                  className="btn btn-link text-info p-0 me-3"
                  title="Sửa công việc"
                  onClick={() => onEdit(todo)}
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="btn btn-link text-danger p-0"
                  title="Xóa công việc"
                  onClick={() => onDelete(todo.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
