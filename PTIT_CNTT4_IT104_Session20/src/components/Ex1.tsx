import React,{useState} from 'react'

export default function Ex1() {
    const [input, setInput] = useState<string>("");
    const [error, setError] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        if (input.length>=5) {
            setError("chuỗi nhập vào dài hơn 5 ký tự");
        } else {
            setError("");
        }
    }
    return (
      <div>
          <h2>Kiểm tra dộ dài nhập chuỗi vào</h2>
            <input type="text" value={ input} onChange={handleChange} />
            <h3 style={{ color:"red" }}>{ error}</h3>
    </div>
  )
}
