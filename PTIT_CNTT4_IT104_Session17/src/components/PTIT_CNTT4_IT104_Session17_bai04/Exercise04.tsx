import React, { useState} from 'react'
type StateType = {
    isButton?: boolean;
}
export default function Exercise04() {
    const [user, setUser] = useState<StateType>({ isButton: false });
    const handleClick = () => {
        setUser({ isButton: !user.isButton });
    }
  return (
    <div>
      <button onClick={handleClick}>{user.isButton ? "hiện" : "ẩn"}</button>
      <h3>{user.isButton ? "Tiêu đề văn bản" : ""}</h3>
    </div>
  );
}
