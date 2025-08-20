import React, { Component } from 'react'
interface state {
  Data?: string;
}
export default class Input extends Component<object, state> {
  constructor(props: object) {
    super(props);
    this.state = {
      Data: "",
    };
  }
  handleChange = (even: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ Data : even.target.value });
  };
  render() {
    return (
      <div>
        <h2>Dữ liệu: {this.state.Data}</h2>
        <input
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
