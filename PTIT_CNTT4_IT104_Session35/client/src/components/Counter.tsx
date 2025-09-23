import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetCouter } from "../store/slices/countSlice";

export default function Counter() {
  const result = useSelector((data: any) => data.couter.count);
  const dispatch = useDispatch();
  const incerment = () => {
    dispatch(increment());
  };
  const decerment = () => {
    dispatch(decrement());
  };
  const reset = () => {
    dispatch(resetCouter());
  };
  return (
    <div>
      <h2> counter:{result}</h2>
      <button onClick={() => incerment()}>increase</button>
      <button onClick={() => decerment()}>decrease</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
