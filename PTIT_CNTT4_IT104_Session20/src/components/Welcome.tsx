import React, { useState,useEffect } from "react";

export default function Welcome() {
  const [valueStr, setValueStr] = useState<string>("");
      useEffect(() => {
          console.log("component đa đc render lần đầu!");
          setValueStr("Chào mùng bạn đến với ứng dụng của chúng tôi");
    }, []);
    
    return <div>
        <h2>{valueStr}</h2>
  </div>;
}