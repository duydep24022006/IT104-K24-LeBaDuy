import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };

const initialState: State = {
  loading: false,
  success: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tên hoặc mật khẩu!" });
      }
    }, 1500);
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h2> Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          disabled={state.loading}
        >
          Đăng nhập
        </button>
      </form>

      {state.loading && <p> Đang đăng nhập...</p>}
      {state.success && (
        <p style={{ color: "green" }}>Đăng nhập thành công!</p>
      )}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
