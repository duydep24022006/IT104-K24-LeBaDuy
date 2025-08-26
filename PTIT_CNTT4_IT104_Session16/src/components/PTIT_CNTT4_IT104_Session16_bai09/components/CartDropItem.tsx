
import React, { Component } from "react";
import type { Product } from "../product.data";

type CartProduct = Product & { cartQuantity: number };

type Props = {
  item: CartProduct;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

export default class CartDropItem extends Component<Props> {
  render() {
    const { item, onIncrease, onDecrease, onRemove } = this.props;

    return (
      <div className="flex items-center justify-between border-b border-gray-600 py-3 text-white">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-md object-cover"
        />

        <span className="flex-1 ml-3">{item.name}</span>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onIncrease(item.id)}
            className="px-2 py-1 bg-gray-700 hover:bg-gray-500 rounded"
          >
            +
          </button>
          <span>{item.cartQuantity}</span>
          <button
            onClick={() => onDecrease(item.id)}
            className="px-2 py-1 bg-gray-700 hover:bg-gray-500 rounded"
          >
            -
          </button>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="ml-3 text-red-400 hover:text-red-600"
        >
          <i className="fas fa-trash"></i> 
        </button>
      </div>
    );
  }
}
