import React, { useEffect, useRef, useState } from "react";

export default function Ex6() {
    const [isStatus, setIsStatus] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
    
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isStatus]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsStatus(!isStatus);
        if (inputRef.current) {
          inputRef.current.focus();
        }
    }
    return (
      <div>
        <h2>Ứng dụng React với Madal và Focus input</h2>
        <form onSubmit={handleSubmit}>
          <button type="submit"> Mở Modal</button>
        </form>
        {isStatus && (
          <div>
            <h2>Đăng nhập</h2>
            <input type="text"  ref={inputRef} name="input" />
          </div>
        )}
      </div>
    );
}
