import React, { useState, useEffect } from "react";

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      
    >
      <h2>Phím bạn vừa nhấn:</h2>
      <div
        
      >
        {lastKey ? `[ ${lastKey.toUpperCase()} ]` : "Chưa có phím nào"}
      </div>
    </div>
  );
}
