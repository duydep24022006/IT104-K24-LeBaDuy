import React, { Component } from "react";

interface Prop {
  theme?: string;
  language?: string;
}
interface State {
  states: Prop;
}
export default class Exercise07 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      states: {
        theme: "dark",
        language: "vietnamese",
      },
    };
  }
  render() {
    return (
      <div
        style={{
          backgroundColor:
            this.state.states.theme === "light" ? "white" : "black",
          color: this.state.states.theme === "light" ? "black" : "white",
          padding: "20px",
        }}
      >
        <h2>Nền: {this.state.states.theme === "light" ? "Sáng" : "Tối"}</h2>
        <h2>
          Ngôn ngữ: {this.state.states.language === "light" ? "Tiếng anh" : "Tiếng Việt"}
        </h2>
      </div>
    );
  }
}
