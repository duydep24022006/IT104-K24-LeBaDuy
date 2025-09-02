import React, { useState } from "react";
type Product = {
  id: number;
  name: string;
  description: string;
};
const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];

export default function Search() {
  const [products, setProducts] = useState<Product[]>(data);
  const [input, setInput] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    const keyword = e.target.value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );
    setProducts(filtered);
  };
  return (
    <div>
      <h1>Tìm kiếm sản phẩm</h1>
      <input type="text" value={input} name="input" onChange={handleChange} />
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <hr /> <br />
        </div>
      ))}
    </div>
  );
}
