import React, { Component } from "react";

interface state {
  id: number;
  name: string;
  date: string;
  dress: string;
}
export default class Exercise02 extends Component<object, state> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      name: "Lê Bá Duy",
      date: "24/02/2006",
      dress: "Hà Nội",
    };
  }
  render() {
    return (
      <>
        <div>id:{this.state.id}</div>
        <div> Tên:{this.state.name}</div>
        <div> Ngày sinh:{this.state.date}</div>
        <div> Địa chỉ:{this.state.dress}</div>
      </>
    );
  }
}
