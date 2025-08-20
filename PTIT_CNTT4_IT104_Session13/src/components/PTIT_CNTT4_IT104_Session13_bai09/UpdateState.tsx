import React, { Component } from "react";

interface state {
  name?: string;
}
export default class UpdateState extends Component<object, state> {
  constructor(props: object) {
    super(props);
    this.state = { name: "Rikkei Academy" };
  }
  handleClick = () => {
    this.setState({ name: "Rikkei Soft" });
  };
  render() {
    return (
      <>
        <h2>Tên công ty:{this.state.name}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}
