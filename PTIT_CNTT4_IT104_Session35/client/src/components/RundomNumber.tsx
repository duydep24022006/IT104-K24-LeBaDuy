import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rundomNumber } from "../store/slices/rundomSlice";

export default function RundomNumber() {
    const result = useSelector((data: any) => data.rundom.numberList);
    console.log(result);
    
  const dispatch = useDispatch();
    const rundom = () => {
      
    dispatch(rundomNumber());
  };
  return (
    <div>
      <h2>[{result.join(", ")}]</h2>
      <button onClick={() => rundom()}>RundomNumber</button>
    </div>
  );
}
