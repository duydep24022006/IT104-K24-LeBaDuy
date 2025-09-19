import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function RandomNumber() {
     const randomNumber = useSelector((state) => state.randomNumber);
    const dispatch = useDispatch();
    const handleRundom = () => {
        dispatch({ type: "GENERATE_RANDOM" });
    }
  return (
    <div>
          <h2>{randomNumber}</h2>
          <button onClick={handleRundom}>Random</button>
    </div>
  );
}
