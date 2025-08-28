import React, { useState } from "react";

const Data: string[] = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
];

export default function RandomQuote() {
  const [quote, setQuote] = useState<string>("");
  const [randomNumber, setRandomNum] = useState<number>(0);
  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * Data.length));
  };
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    handleRandomNum();
    setQuote(Data[randomNumber]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Câu nói truyền cảm hứng hôm nay</h2>
        <h3>{quote}</h3>
        <button type="submit"> Lấy câu nói mới</button>
      </form>
    </div>
  );
}
