import React, { Component } from 'react'
type StateType={
    IsStatus?: boolean
}
export default class LoginStatus extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            IsStatus: true
        }
    }
    handleClick = () => {
        this.setState((prev) => ({ IsStatus: !prev.IsStatus }));
}
  render() {
    return (
        <div>
            <h2>{this.state.IsStatus ? "Xin chào,User" : "Vui lòng đang nhập để tiếp tục"}</h2>
            <button type="submit" onClick={this.handleClick}>{ this.state.IsStatus ? "Đăng xuất" : "Đăng nhập"}</button>
      </div>
    )
  }
}
