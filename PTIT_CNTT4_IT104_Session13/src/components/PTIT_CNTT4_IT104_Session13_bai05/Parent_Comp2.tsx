import React, { Component } from "react";
import Children_Comp2 from "./Children_Comp2";

interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
}

interface Prop {
  product: Product;
}
export default class Parent_Comp2 extends Component<object, Prop> {
  constructor(props: object) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: 12000,
        quantity: 6,
      },
    };
  }
  render() {
    return (
      <>
        <Children_Comp2 product={this.state.product} />
      </>
    );
  }
}
