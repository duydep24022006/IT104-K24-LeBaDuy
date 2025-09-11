import React, { useEffect, useState } from "react";
import { products } from "../components/data";
import { useSearchParams } from "react-router-dom";

export default function ProductList04() {
  const [input, setInput] = useState("");
    const [params, setParams] = useSearchParams();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    useEffect(() => {
      const q = params.get("name") || "";
      setInput(q);
    }, [params]);
  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      setParams({ name : input });
      
    };
    const query = params.get("name")?.toLowerCase() || "";
    const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-xl"
          value={input}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 p-1 border rounded-[10px]"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="mt-3">
        {filteredProducts.map((item) => (
          <div key={item.id} className="shadow-2xl m-2 p-2">
            <h1>{item.name}</h1>
            <p>{item.price.toLocaleString()} VND</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
