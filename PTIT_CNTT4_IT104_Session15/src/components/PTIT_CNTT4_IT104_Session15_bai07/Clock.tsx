import React, { Component } from "react";

interface ClockState {
  time: Date;
}

export default class Clock extends Component<{}, ClockState> {
  private timeId?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount(): void {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>
          Thời gian hiện tại: {time.getHours().toString().padStart(2, "0")} :
          {time.getMinutes().toString().padStart(2, "0")} :
          {time.getSeconds().toString().padStart(2, "0")}
        </h2>
      </div>
    );
  }
}
