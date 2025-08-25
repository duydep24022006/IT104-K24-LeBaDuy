import React, { Component } from "react";
import type { Product } from "../product.data"; 

type Props = {
  product: Product;
  onAddToCart: (p: Product) => void;
};

export default class CartButton extends Component<Props> {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onAddToCart(product)} 
      >
        <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
      </button>
    );
  }
}
