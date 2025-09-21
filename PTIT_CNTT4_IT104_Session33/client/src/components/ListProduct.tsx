import React, { useState } from "react";
import bread from "../image/bread.jpg";
import pizza from "../image/pizza.jpg";
import hamburger from "../image/Hamburger.jpg";
import cake from "../image/Cake.jpg";
import type { Product } from "../interface/interface";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  setAlert: React.Dispatch<React.SetStateAction<string | null>>;
};

const data = [
  {
    id: 1,
    title: "Pizza",
    image: pizza,
    content: "pizza",
    quantity: 30,
    price: 30,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "hamburger",
    quantity: 20,
    price: 35,
  },
  {
    id: 3,
    title: "Bread",
    image: bread,
    content: "bread",
    quantity: 15,
    price: 30,
  },
  {
    id: 4,
    title: "Cake",
    image: cake,
    content: "cake",
    quantity: 12,
    price: 31,
  },
];
export default function ProductList({ setAlert }: Props) {
  const [products, setProducts] = useState<Product[]>(data);
  const result = useSelector((data: any) => {
    return data.card.cart;
  });
  const dispatch = useDispatch();
  const addCart = (item: Product) => {
    const cartResult = result.some((i: Product) => i.id === item.id);
    if (cartResult) {
      dispatch({
        type: "INCREMENT",
        payload: item,
      });
    } else {
      setAlert("add");
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: 1 },
      });
    }
  };
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {products.map((item: Product, index) => {
                return (
                  <div key={index}>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src={item.image}
                            alt="pizza"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">{item.title}</h4>
                        <p>{item.content}</p>
                        <input
                          name="quantity-product-1"
                          type="number"
                          defaultValue={item.quantity}
                        />
                        <a
                          data-product={1}
                          className="price"
                          onClick={() => addCart(item)}

                        >
                          {item.price} USD{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
