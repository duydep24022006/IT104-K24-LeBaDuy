import React, { useState, useRef, type ChangeEvent } from "react";

export default function RenderCounter() {
  const [Input, setInput] = useState<string>("");
  const count = useRef<number>(0);
  const handleChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    count.current++;
  };
    return (
      <div>
        <label htmlFor="">Input: </label>
        <input type="text" value={Input} name="input" onChange={handleChang} />
        <h3>componnent da render :{count.current} lần</h3>
      </div>
    );
}
