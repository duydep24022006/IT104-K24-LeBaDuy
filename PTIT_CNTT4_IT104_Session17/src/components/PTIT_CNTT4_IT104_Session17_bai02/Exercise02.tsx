import React,{useState} from 'react'

type User = {
    id?: number;
    name?: string;
    price?: number;
    quantity?:number
}
export default function Exercise02() {
    const [user,setUser]=useState<User>({id:1,name:"cola",price:1000,quantity:10})
    return (
      <div>
        <h2>Thông tin sản phẩm</h2>
        <p>id:{user.id}</p>
        <p>name:{user.name}</p>
        <p>price:{user.price}</p>
        <p>quantity:{user.quantity}</p>
      </div>
    );
}
