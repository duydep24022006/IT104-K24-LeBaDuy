import React, { useState } from "react";

export default function Exercise06() {
  const [input, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Nhập gì đó..."
      />
      <p>{ input.length}</p>
    </div>
  );
}