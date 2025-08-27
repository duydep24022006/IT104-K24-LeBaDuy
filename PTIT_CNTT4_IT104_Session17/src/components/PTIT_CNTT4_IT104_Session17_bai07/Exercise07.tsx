import React, { useState } from "react";

export default function Exercise07() {
  const [input, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>Thành phố:{input}</p>
      <select name="dress" id="" onChange={handleChange}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Hà Ninh">Hà Ninh</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Ninh Bình">Ninh Bình</option>
      </select>
    </div>
  );
}
