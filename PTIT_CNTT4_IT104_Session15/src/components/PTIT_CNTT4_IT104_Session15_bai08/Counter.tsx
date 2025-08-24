import React, { Component } from "react";

interface CounterState {
  count: number;
}
export default class Counter extends Component<{}, CounterState> {
  private countId?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(): void {
    this.countId = window.setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 10) {
          return { count: 0 };
        }
        return { count: prevState.count + 1 };
      });
    }, 1000);
  }
  componentWillUnmount(): void {
    if (this.countId) {
      clearInterval(this.countId);
    }
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
