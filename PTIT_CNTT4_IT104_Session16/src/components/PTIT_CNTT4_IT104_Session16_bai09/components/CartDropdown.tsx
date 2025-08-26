import React, { Component } from "react";
import CartDropItem from "./CartDropItem";
import type { Product } from "../product.data";

type CartProduct = Product & { cartQuantity: number };

type Props = {
  cart: CartProduct[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

export default class CartDropdown extends Component<Props> {
  render() {
    const { cart, onIncrease, onDecrease, onRemove } = this.props;

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );

    return (
      <div className="z-50 bg-black text-white w-[400px] h-[500px] absolute top-20 right-10 rounded-md p-4 overflow-y-auto">
        <div className="mb-2">
          <p className="font-bold">Cart</p>
        </div>
        <hr className="border-gray-600" />

        {cart.length === 0 ? (
          <p className="mt-4 text-center">Giỏ hàng trống</p>
        ) : (
          cart.map((item) => (
            <CartDropItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))
        )}

        <hr className="border-gray-600 mt-2" />
        <div className="mt-3 flex justify-between">
          <p>Tổng tiền:</p>
          <p className="font-bold">{total.toLocaleString()} ₫</p>
        </div>
      </div>
    );
  }
}
