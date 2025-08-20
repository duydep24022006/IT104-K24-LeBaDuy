import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

export default class Parent_Comp extends Component {
  render() {
    return (
      <>
        <h2>Họ và tên bên component cha: Lê Bá Duy</h2>
        <Children_Comp companyName="Lê Bá  Duy" />
      </>
    );
  }
}
