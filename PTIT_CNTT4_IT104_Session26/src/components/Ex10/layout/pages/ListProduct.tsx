import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

import { Input, Space } from "antd";

function ListProducts() {
  const Products = [
    {
      id: 1,
      name: "Iphone 15 pro max",
      price: 13,
      image:
        "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2023_9_13_638301983422003341_VN_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg",
    },
    {
      id: 2,
      name: "Redmi note 13 pro",
      price: 13,
      image:
        "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/10/vivo-x200-pro-mini-xanh-la.jpg.webp",
    },
    {
      id: 3,
      name: "Oppo X200 pro mini",
      price: 13,
      image:
        "https://www.duchuymobile.com/images/detailed/69/redmi-note-13-pro-5g.jpg",
    },
  ];
  const [seacrchParam, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setSearchParams({ name: inputValue });
  };
  const keyword = seacrchParam.get("name")?.toLowerCase().trim() || "";

  const search = Products.filter((p) => p.name.toLowerCase().includes(keyword));

  return (
    <>
      {search.map((p) => (
        <div key={p.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>
                <span>{p.price}</span> VND
              </Card.Text>
              <NavLink to={`/product-detail/${p.id}`}>
                <Button variant="primary">Xem chi tiết</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      ))}
      <Space.Compact style={{ width: "100%" }}>
        <Input value={inputValue} onChange={handleChange} />
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Space.Compact>

      <div style={{ display: "flex", gap: 10 }}>
        {Products.map((p) => (
          <div key={p.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                  <span>{p.price}</span> VND
                </Card.Text>
                <NavLink to={`/product-detail/${p.id}`}>
                  <Button variant="primary">Xem chi tiết</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProducts;

