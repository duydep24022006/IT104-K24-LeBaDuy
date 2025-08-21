import React, { Component, createRef } from "react";

interface FormState {
  email: string;
  password: string;
  error: string;
}


export default class LoginForm extends Component<unknown, FormState> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: unknown) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const adminExists = users.some(
      (u: any) => u.email === "admin123@gmail.com"
    );
    if (!adminExists) {
      const newUser = { email: "admin123@gmail.com", password: "12345678" };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
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
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({
        error: "Email và Mật khẩu không được để trống",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = users.some((user: any) => user.email === email);
    const passwordExists = users.some(
      (user: any) => user.password === password
    );

    if (emailExists) {
      if (passwordExists) {
        this.setState({ error: "đăng nhập thành công" });
        return;
      }
      this.setState({ error: "Email hoặc mật khẩu không đúng" });
      return;
    }

    this.setState({
      email: "",
      password: "",
      error: "",
    });

    this.nameInputRef.current?.focus();
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>Đăng nhập tài khoản</h2>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
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
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "190px" }}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }
}
