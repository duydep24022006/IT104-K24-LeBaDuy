import React, { Component } from "react";
type User = {
  name: string;
  email: string;
  age: string;
};
type State = {
  user: User;
  error: string;
  check: boolean;
};
export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        age: "",
      },
      error: "",
      check: false,
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
      error: "",
      check: false,
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.state.user.name.trim()) {
      this.setState(() => ({
        error: "Tên không đc bỏ trống",
      }));
      return;
    }
    if (!this.state.user.email.trim().includes("@")) {
      this.setState(() => ({
        error: "Email không hợp lệ",
      }));
      return;
    }
    if (Number(this.state.user.age.trim()) < 0) {
      this.setState(() => ({
        error: "Tuổi không đc âm",
      }));
      return;
    }
    this.setState((pre) => ({
      user: {
        ...pre.user,
      },
      check: true,
    }));
  };
  handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      user: {
        name: "",
        email: "",
        age: "",
      },

      error: "",
      check: false,
    });
  };
  render() {
    let content;
    if (!this.state.error && this.state.check) {
      content = (
        <div>
          <h2>Thông tin người dùng</h2>
          <p>Họ tên:{this.state.user.name}</p>
          <p>Email:{this.state.user.email}</p>
          <p>Tuổi:{this.state.user.age}</p>
        </div>
      );
    } else {
      content = <p style={{ color: "red" }}>{this.state.error}</p>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Nhập thông tin người </h1>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Họ Tên"
            value={this.state.user.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={this.state.user.age}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleSubmit2}>
            Xóa tất cả
          </button>
          <div> {content}</div>
        </form>
      </div>
    );
  }
}
