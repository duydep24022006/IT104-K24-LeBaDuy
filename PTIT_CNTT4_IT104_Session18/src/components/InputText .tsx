import React, { useState, useReducer } from "react";
type State = {
  text: string;
};

type Action = {
  type: "SET_TEXT";
  payload: string;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
export default function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };
    return <div>
        <h2>{state.text}</h2>
        <input type="text" onChange={handleChange} value={state.text} />
  </div>;
}
