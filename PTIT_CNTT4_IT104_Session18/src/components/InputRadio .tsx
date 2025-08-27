import React, { useState, useReducer } from "react";
type State = {
  text: string;
};

type Action = {
  type: "SET_RADIO";
  payload: string;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_RADIO":
      return { ...state, text: action.payload };

    default:
      return state;
  }
};
export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_RADIO", payload: e.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="radio"
          onChange={handleChange}
          value="Nam"
          name="gender"
        />
        <label htmlFor="">Nam</label> <br />
        <input
          type="radio"
          value="Nữ"
          onChange={handleChange}
          name="gender"
        />
        <label htmlFor="">Nữ</label> <br />
        <input
          type="radio"
          value="Khác"
          onChange={handleChange}
          name="gender"
        />
        <label htmlFor="">Khác</label> <br />
        <h2>Selected gender:{state.text}</h2>
      </form>
    </div>
  );
}
