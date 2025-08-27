import React, { useState, useReducer, useEffect } from "react";


type Todo = {
  id: number;
  name: string;
};

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  LOAD_TODOS: "LOAD_TODOS",
} as const;

type Action =
  | { type: typeof ACTIONS.LOAD_TODOS; payload: Todo[] }
  | { type: typeof ACTIONS.ADD_TODO; payload: string }
  | { type: typeof ACTIONS.DELETE_TODO; payload: number };


const STORAGE_KEY = "todos";

function loadTodos(): Todo[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}


const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ACTIONS.LOAD_TODOS:
      return action.payload;

    case ACTIONS.ADD_TODO:
      return [...state, { id: Date.now(), name: action.payload }];

    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};


export default function Exercise07() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const saved = loadTodos();
    dispatch({ type: ACTIONS.LOAD_TODOS, payload: saved });
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: input });
    setInput("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div style={{ margin: "50px auto", width: "300px" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "6px",
            }}
          >
            <span>{todo.name}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
