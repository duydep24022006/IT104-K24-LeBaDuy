import React, { Component } from 'react'

interface PropType{
    companyName:string
}
export default class Children_Comp extends Component<PropType> {
  render() {
    return (
      <>
            <h2>Họ và tên bên component con:{ this.props.companyName}</h2>
      </>
    );
  }
}
