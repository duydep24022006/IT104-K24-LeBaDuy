import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import type { Todo } from "../TodoListIndex";

interface AddTodoFormProps {
  onAdd: (name: string) => boolean;
  onUpdate: (name: string) => boolean;
  editingTodo?: Todo;
}

export default function AddTodoForm({
  onAdd,
  onUpdate,
  editingTodo,
}: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInputValue(editingTodo.name);
    } else {
      setInputValue("");
    }
  }, [editingTodo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ok = editingTodo ? onUpdate(inputValue) : onAdd(inputValue);
    if (ok) {
      setInputValue("");
    }
  };

  const isEditing = !!editingTodo;

  return (
    <>
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active">Tất cả công việc</a>
        </li>
      </ul>

      <form
        className="d-flex justify-content-center align-items-center mb-4"
        onSubmit={handleSubmit}
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            id="todo-input"
            className="form-control"
            value={inputValue}
            onChange={handleChange}
            placeholder="Nhập tên công việc"
          />
          <label className="form-label" htmlFor="todo-input">
            {isEditing ? "Cập nhật công việc" : "Thêm công việc"}
          </label>
        </div>
        <button type="submit" className="btn btn-info ms-2">
          {isEditing ? "Cập nhật" : "Thêm"}
        </button>
      </form>
    </>
  );
}
