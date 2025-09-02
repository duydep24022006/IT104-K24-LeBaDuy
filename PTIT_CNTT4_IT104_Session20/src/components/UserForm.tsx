import React, { useReducer, useState } from "react";

type User = {
  name: string;
  email: string;
};
const initialState: User = {
  name: "",
  email: "",
};
function reducer(state: User, action: { type: string; payload: string }): User {
  switch (action.type) {
      case "SET_NAME":
          return {
              ...state, name: action.payload
          }
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

      default:
          return state;
  }
}
export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>User information From</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <hr /> <br />
      <h2>Thông tin người dùng</h2>
      <h3>Tên:{state.name === "" ? "(Chưa nhập)" : state.name}</h3>
      <h3>Email:{state.email === "" ? "(Chưa nhập)" : state.email}</h3>
    </div>
  );
}
