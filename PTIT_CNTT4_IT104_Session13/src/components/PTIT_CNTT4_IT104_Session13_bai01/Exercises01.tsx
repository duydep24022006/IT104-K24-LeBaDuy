import React, { Component } from "react";

interface state {
  name: string;
}
export default class Exercises01 extends Component<object, state> {
  constructor(props: object) {
    super(props);
    this.state = { name: "Lê Bá Duy" };
  }
  render() {
    return <div>Họ và Tên:{this.state.name}</div>;
  }
}
