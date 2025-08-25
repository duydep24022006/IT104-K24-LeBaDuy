import React, { Component } from "react";
type Counter = {
  count?: number;
};
export default class ClickCounter extends Component<{}, Counter> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleCount = () => {
    this.setState((prevState) => ({
      count: (prevState.count ?? 0) + 1,
    }));
  };
  render() {
    return (
      <div>
        <h2>count:{this.state.count}</h2>
        <button type="submit" onClick={this.handleCount}>
          click me
        </button>
      </div>
    );
  }
}
