import React, { Component } from "react";

interface EmailState {
  email?: string;
}
export default class Exercise01 extends Component<unknown, EmailState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
    };
      console.log(user);

  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Form</h2>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
