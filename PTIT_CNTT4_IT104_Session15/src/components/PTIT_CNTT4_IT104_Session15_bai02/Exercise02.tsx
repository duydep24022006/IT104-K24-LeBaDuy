import React, { Component, createRef } from "react";
interface Exercise02State {
  color: string;
}
export default class Exercise02 extends Component<{}, Exercise02State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#000000",
    };
  }
  private colorRef = createRef<HTMLInputElement>();
  handleSubmit = (even: React.FormEvent<HTMLFormElement>) => {
    even.preventDefault();
    const color = this.colorRef.current?.value || "#000000";
    this.setState({ color });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Color:{this.state.color}</h2>
          <h3>Form</h3>
          <div>
            <label> Màu sắc</label>
            <input type="color" ref={this.colorRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
