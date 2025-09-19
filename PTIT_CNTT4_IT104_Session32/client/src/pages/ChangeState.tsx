import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const changeState = useSelector((state) => state.changeState);
    const dispatch = useDispatch();
    const handleChangeState = () => {
        dispatch({ type: "Change_State" });
    }
    return (
      <div>
        <h2>{changeState}</h2>
        <button onClick={handleChangeState}>Change state</button>
      </div>
    );
}
