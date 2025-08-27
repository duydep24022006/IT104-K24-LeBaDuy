import React, { useState } from 'react'

export default function Checkbox() {
    const options = ["Đi chơi", "Code", "bơi lội", "nhảy"]
    const [select, setbox] = useState<string[]>([]);
    const handleChange = (option: string) => {
      if (select.includes(option)) {
        setbox(select.filter((item) => item !== option));
      } else {
        setbox([...select, option]);
      }
    };
  return (
    <div>
      <h4>Sở thích:{JSON.stringify(select)}</h4>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              checked={select.includes(option)}
              onChange={() => handleChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}
