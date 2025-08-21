import React, { Component, createRef } from "react";

interface FormState {
  studentName: string;
  email: string;
  password: string;
  phone: string;
  error: string;
}

export default class RegisterForm extends Component<unknown, FormState> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: unknown) {
    super(props);
    this.state = {
      studentName: "",
      email: "",
      password: "",
      phone: "",
      error: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { studentName, email, password, phone } = this.state;

    if (!studentName || !email || !password) {
      this.setState({
        error: "Tên sinh viên, Email và Mật khẩu không được để trống",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = users.some((user: any) => user.email === email);
    if (emailExists) {
      this.setState({ error: "Email đã tồn tại, vui lòng chọn email khác" });
      return;
    }

    const newUser = { studentName, email, password, phone };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      studentName: "",
      email: "",
      password: "",
      phone: "",
      error: "",
    });

    alert("Đăng ký tài khoản thành công");
    this.nameInputRef.current?.focus();
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>Đăng ký tài khoản</h2>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên sinh viên</label> <br />
            <input
              type="text"
              name="studentName"
              value={this.state.studentName}
              onChange={this.handleChange}
              ref={this.nameInputRef}
            />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Mật khẩu</label> <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Số điện thoại</label> <br />
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "190px" }}
          >
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}
