import React, { Component, ChangeEvent } from "react";

interface FormState {
  price: string;
  productCode: string;
  productName: string;
  quantity: string;
}
export default class Form extends Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      price: "",
      productCode: "",
      productName: "",
      quantity: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    console.log(product);
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "20px auto" }}>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label> <br />
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Tên sản phẩm</label> <br />
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Giá</label> <br />
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Số lượng</label> <br />
            <input
              type="number"
              min={0}
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary" style={{width:"190px"}}>
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}
