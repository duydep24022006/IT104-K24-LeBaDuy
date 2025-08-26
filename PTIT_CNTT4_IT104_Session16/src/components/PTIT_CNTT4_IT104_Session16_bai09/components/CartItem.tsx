import React, { Component } from "react";
import CartButton from "./CartButton";

export type Product = {
  id?: number;
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
};

type CartItemProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default class CartItem extends Component<CartItemProps> {
  render() {
    const { products, onAddToCart } = this.props;

    return (
      <div className="flex flex-row gap-4 flex-wrap mt-4 ml-20 z-0">
        {products.map((item) => (
          <div
            key={item.id}
            className="shadow p-2 rounded-md text-center w-[300px] h-[350px] leading-normal bg-white"
          >
            <img
              src={item.image}
              alt="ảnh đang tải"
              className="w-[150px] h-[200px] mb-2 mx-auto "
            />
            <p className="font-bold">{item.name}</p>
            <p className="text-green-600">
              {item.price?.toLocaleString("vi-VN") + "₫"}
            </p>
            <CartButton product={item} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    );
  }
}
