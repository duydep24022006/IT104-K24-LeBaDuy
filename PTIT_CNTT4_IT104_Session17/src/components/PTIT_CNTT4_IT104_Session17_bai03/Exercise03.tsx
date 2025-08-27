import React, { useState} from 'react'
type StateType = {
    isButton?: boolean;
}
export default function Exercise03() {
    const [user, setUser] = useState<StateType>({ isButton: false });
    const handleClick = () => {
        setUser({ isButton: !user.isButton });
    }
  return (
      <div>
          <h3 style={{ color:  user.isButton ? "red" : "black"  }}>Tiêu đề văn bản</h3>
          <button onClick={handleClick}>Thay đổi màu văn bản</button>
    </div>
  )
}
