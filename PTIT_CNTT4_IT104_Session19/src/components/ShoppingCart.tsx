import React, { useState, useMemo } from "react";

const cartItems = [
  { id: 1, name: "sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "sản phẩm B", price: 200000, quantity: 1 },
];
export default function ShoppingCart() {
  const calculateTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>Name:{item.name}</p>
            <p>Price:{item.price}</p>
            <p>Quantity:{item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>tổng tiền:{calculateTotal}</h2>
    </div>
  );
}
