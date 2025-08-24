import React, { Component } from "react";

interface StactType {
  date: string;
  flag: number;
}
interface Date {
  date: StactType;
}
export default class Exercise03 extends Component<object, Date> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: {
        date: "",
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
            ngày sinh:{this.state.date.flag ? this.state.date.date : ""}
          </label> <br />
          <input
            type="date"
            name="date"
            onChange={this.handleChange}
            value={this.state.date.date}
          /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
