import React, { useState } from "react";

export default function Exercise05() {
  const [input, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Nhập gì đó..."
      />
      <p>{ input}</p>
    </div>
  );
}
