import React, { Component } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  name: string;
  isCheck: boolean;
};

interface TodoListIndexState {
  todos: Todo[];
  editingTodo?: Todo;
}

const LS_KEY = "todos";

export default class TodoListIndex extends Component<{}, TodoListIndexState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
      editingTodo: undefined,
    };
  }

  componentDidMount() {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Todo[];
        this.setState({ todos: parsed });
      } catch {
        localStorage.removeItem(LS_KEY);
      }
    }
  }

  saveToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  };

  handleAddTodo = (name: string): boolean => {
    const trimmed = name.trim();
    if (!trimmed) {
      alert("Tên công việc không được để trống");
      return false;
    }
    const exists = this.state.todos.some(
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

    const updated = [...this.state.todos, newTodo];
    this.setState({ todos: updated });
    this.saveToLocalStorage(updated);
    return true; 
  };

  handleStartEdit = (todo: Todo) => {
    this.setState({ editingTodo: todo });
  };

  handleUpdateTodo = (name: string): boolean => {
    const { editingTodo, todos } = this.state;
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
    this.setState({ todos: updated, editingTodo: undefined });
    this.saveToLocalStorage(updated);
    return true;
  };

  handleDeleteTodo = (id: number) => {
    const todo = this.state.todos.find((t) => t.id === id);
    const title = todo ? `"${todo.name}"` : "công việc này";
    const ok = window.confirm(`Bạn có chắc muốn xóa ${title}?`);
    if (!ok) return;
    const updated = this.state.todos.filter((t) => t.id !== id);
    this.setState({ todos: updated });

    if (this.state.editingTodo?.id === id) {
      this.setState({ editingTodo: undefined });
    }

    this.saveToLocalStorage(updated);
  };

  handleToggleTodo = (id: number) => {
    const updated = this.state.todos.map((t) =>
      t.id === id ? { ...t, isCheck: !t.isCheck } : t
    );
    this.setState({ todos: updated });
    this.saveToLocalStorage(updated);
  };

  render() {
    const { todos, editingTodo } = this.state;

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
                    onAdd={this.handleAddTodo}
                    onUpdate={this.handleUpdateTodo}
                    editingTodo={editingTodo}
                  />

                  <TodoList
                    todos={todos}
                    onToggle={this.handleToggleTodo}
                    onDelete={this.handleDeleteTodo}
                    onEdit={this.handleStartEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
