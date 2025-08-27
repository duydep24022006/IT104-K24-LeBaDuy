import React, { useReducer } from "react";

type Action = { type: "increment" };

export default function Increase() {
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
    </div>
  );
}
