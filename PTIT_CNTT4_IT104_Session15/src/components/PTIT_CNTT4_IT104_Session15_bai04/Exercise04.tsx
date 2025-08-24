import React, { Component } from "react";

interface StactType {
  range: string;
  flag: number;
}
interface Date {
  date: StactType;
}
export default class Exercise04 extends Component<object, Date> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: {
        range: "",
        flag: 0,
      },
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      date: {
        ...this.state.date,
        [name]: value,
      },
    });
    this.setState((prevState) => ({
      date: {
        ...prevState.date,
        flag: 0,
      },
    }));
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState((prevState) => ({
      date: {
        ...prevState.date,
        flag: 1,
      },
    }));
    
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            tiến độ hoàn thành:
            {this.state.date.flag ? this.state.date.range : ""}%
          </label>{" "}
          <br />
          <input
            type="range"
            name="range"
            onChange={this.handleChange}
            value={this.state.date.range}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
