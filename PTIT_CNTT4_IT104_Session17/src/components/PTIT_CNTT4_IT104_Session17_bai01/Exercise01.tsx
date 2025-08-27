import React, { useState } from 'react'

export default function Exercise01() {
    const [name, setName] = useState<string>("Lê Bá Duy");
  return (
      <div>
          <h2>Họ và Tên:{name }</h2>
      </div>
  )
}
