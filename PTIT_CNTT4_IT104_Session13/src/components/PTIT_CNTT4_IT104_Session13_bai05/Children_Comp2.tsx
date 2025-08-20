import React, { Component } from "react";

interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
}
interface Props {
  product: Product;
}
export default class Children_Comp2 extends Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <>
        <h2>Dữ liệu trong component con</h2>
        <p>id:{product.id}</p>
        <p>Product name:{product.name}</p>
        <p>Price:{product.price}</p>
        <p>Quantity:{product.quantity}</p>
      </>
    );
  }
}
