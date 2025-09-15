import React, { useEffect } from "react";
import axios from "axios";

async function getAllProduct() {
  let res = await axios.get("http://localhost:8080/products");
  return res.data;
}

export default function Ex02() {
  useEffect(() => {
    getAllProduct()
      .then((products) => {
        console.log("Danh sách sản phẩm:", products);
      })
      .catch((err) => console.error("Lỗi:", err));
  }, []);

  return <div>Console.log</div>;
}
