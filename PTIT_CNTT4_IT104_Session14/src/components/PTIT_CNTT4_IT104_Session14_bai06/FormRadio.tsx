import React, { Component, type ChangeEvent } from "react";

interface FormState {
  gender: string;
  submittedGender: string;
}

export default class FormRadio extends Component<unknown, FormState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      gender: "",
      submittedGender: "",
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      this.setState({
        submittedGender: this.state.gender,
      });
    console.log("Giới tính đã chọn:", this.state.gender);
  };
  render() {
    return (
      <div>
        <h2>Giới tính:{this.state.submittedGender}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            <label>Nam</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            <label>Nữ</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            <label>Khác</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
