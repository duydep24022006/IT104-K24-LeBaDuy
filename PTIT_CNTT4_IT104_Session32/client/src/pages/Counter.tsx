import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch=useDispatch();
    const handleIncrease = () => {
        dispatch({ type: "INCREASE" });
    }
    const handleDecrease = () => {
        dispatch({ type: "DECREASE" });
    }
    return (
      <div>
        <div>Counter:{counter}</div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    );
}
