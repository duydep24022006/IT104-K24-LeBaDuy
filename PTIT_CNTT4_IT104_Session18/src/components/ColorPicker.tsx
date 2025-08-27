import React,{useState,useCallback} from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState<string>("#FFFFFF" );
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor( e.target.value );
    },[])
  return (
      <div>
          <h2>Màu người dùng chọn:</h2> <br />
          <input type="color" value={color} name='color' onChange={handleChange} />
          <h3>Màu hiển thị</h3>
          <div style={{ border: "bray", background: color, width: "100px", height: "50px" }}>
              
          </div>
    </div>
  )
}
