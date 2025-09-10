// import React from 'react'
// import Button from 'react-bootstrap/Button';

import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

export default function ProductDeatil() {
  const { id } = useParams();
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
  const check = Products.find((t) => t.id.toString() === id);

  return (
    <>
      {check ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={check.image} />
          <Card.Body>
            <Card.Title>{check.name}</Card.Title>
            <Card.Text>
              <span>{check.price}</span> VND
            </Card.Text>
            {/* <NavLink to={`/product-detail/${p.id}`}><Button variant="primary">Xem chi tiết</Button></NavLink> */}
          </Card.Body>
        </Card>
      ) : (
        <h2>Khong tim thay san pham</h2>
      )}
    </>
  );
}
