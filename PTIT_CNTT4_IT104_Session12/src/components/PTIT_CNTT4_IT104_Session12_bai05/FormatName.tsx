import React from 'react'

const user = {
  firstName: "Lê Bá",
  lastName: "Duy",

};
export default function FormatName() {
  return (
      <div>Họ và tên: {user.firstName} { user.lastName}</div>
  )
}
