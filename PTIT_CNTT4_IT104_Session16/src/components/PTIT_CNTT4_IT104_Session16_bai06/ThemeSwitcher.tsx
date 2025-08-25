import React, { Component } from "react";

type State = {
  isDarkMode?: boolean;
};
export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: true,
    };
  }
  handleClick = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.isDarkMode ? "black" : "white",
          color: this.state.isDarkMode ? "white" : " black",
          padding: "20px",
        }}
      >
        <h2>chế độ {this.state.isDarkMode ? "sáng" : "tối"} đang bật</h2>
        <button onClick={this.handleClick} className="btn btn-primary">
          Chuyển theme
        </button>
      </div>
    );
  }
}
