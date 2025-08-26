import React, { Component } from "react";

type Props = {
  cartCount: number;
  toggleCart: () => void; 
};

export default class NavBar extends Component<Props> {
  render() {
    const { cartCount, toggleCart } = this.props;

    return (
      <div className="flex flex-row bg-orange-500 text-white py-2 px-4 items-center justify-between">
        <div className="flex flex-row gap-6">
          <p className="cursor-pointer hover:underline">Trang chủ</p>
          <p className="cursor-pointer hover:underline">Danh sách sản phẩm</p>
        </div>

        <div className="relative cursor-pointer" onClick={toggleCart}>
          <i className="fa-solid fa-cart-shopping text-xl"></i>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    );
  }
}
