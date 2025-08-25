import React, { Component } from "react";
type StateType = {
  colorButton: string;
  nameButton: string;
};
type ColorList = {
  stateType: StateType[];
};
export default class ButtonStyle extends Component<{}, ColorList> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stateType: [
        { colorButton: "blue", nameButton: "Primary" },
        { colorButton: "gray", nameButton: "Secondary" },
        { colorButton: "green", nameButton: "Success" },
        { colorButton: "yellow", nameButton: "Waring" },
        { colorButton: "red", nameButton: "Danger" },
        { colorButton: "cyan", nameButton: "Info" },
        { colorButton: "white", nameButton: "Light" },
        { colorButton: "black", nameButton: "Dark" },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.stateType.map((but, index) => (
          <button
            key={index}
            style={{
              backgroundColor: but.colorButton,
              borderRadius: "8px",
              padding: "10px",
              margin: "5px",
              color: "white",
            }}
          >
            {but.nameButton}
          </button>
        ))}
      </div>
    );
  }
}
