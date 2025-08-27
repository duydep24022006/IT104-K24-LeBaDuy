import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  name: string;
  isCheck: boolean;
};

const LS_KEY = "todos";

export default function TodoListIndex() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Todo[];
        setTodos(parsed);
      } catch {
        localStorage.removeItem(LS_KEY);
      }
    }
  }, []);

  const saveToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  };

  const handleAddTodo = (name: string): boolean => {
    const trimmed = name.trim();
    if (!trimmed) {
      alert("Tên công việc không được để trống");
      return false;
    }
    const exists = todos.some(
      (t) => t.name.trim().toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) {
      alert("Tên công việc đã tồn tại");
      return false;
    }

    const newTodo: Todo = {
      id: Date.now(),
      name: trimmed,
      isCheck: false,
    };

    const updated = [...todos, newTodo];
    setTodos(updated);
    saveToLocalStorage(updated);
    return true;
  };

  const handleStartEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleUpdateTodo = (name: string): boolean => {
    if (!editingTodo) return false;

    const trimmed = name.trim();
    if (!trimmed) {
      alert("Tên công việc không được để trống");
      return false;
    }

    const dup = todos.some(
      (t) =>
        t.id !== editingTodo.id &&
        t.name.trim().toLowerCase() === trimmed.toLowerCase()
    );
    if (dup) {
      alert("Tên công việc đã tồn tại");
      return false;
    }

    const updated = todos.map((t) =>
      t.id === editingTodo.id ? { ...t, name: trimmed } : t
    );
    setTodos(updated);
    setEditingTodo(undefined);
    saveToLocalStorage(updated);
    return true;
  };

  const handleDeleteTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    const title = todo ? `"${todo.name}"` : "công việc này";
    const ok = window.confirm(`Bạn có chắc muốn xóa ${title}?`);
    if (!ok) return;

    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    if (editingTodo?.id === id) {
      setEditingTodo(undefined);
    }

    saveToLocalStorage(updated);
  };

  const handleToggleTodo = (id: number) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, isCheck: !t.isCheck } : t
    );
    setTodos(updated);
    saveToLocalStorage(updated);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
                  Quản lý công việc
                </h3>

                <AddTodoForm
                  onAdd={handleAddTodo}
                  onUpdate={handleUpdateTodo}
                  editingTodo={editingTodo}
                />

                <TodoList
                  todos={todos}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                  onEdit={handleStartEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
