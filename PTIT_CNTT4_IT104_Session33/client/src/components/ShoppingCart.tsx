import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../interface/interface";
type Props = {
  alert: string | null;
  setAlert: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ShoppingCart({ alert, setAlert }: Props) {
  const result = useSelector((data: any) => {
    return data.card.cart;
  });
  const dispatch = useDispatch();
  const increase = (item: Product) => {
    dispatch({
      type: "INCREMENT",
      payload: item,
    });
  };
  const decrease = (item: Product) => {
    dispatch({
      type: "DECREMENT",
      payload: item,
    });
  };
  const deleteCart = (item: Product) => {
    setAlert("delete");
    dispatch({
      type: "DELETE_TO_CART",
      payload: item,
    });
  };
    useEffect(() => {
      if (alert) {
        const timer = setTimeout(() => setAlert(null), 2000);
        return () => clearTimeout(timer);
      }
    }, [alert]);
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              {result.length === 0 ? (
                <b>Empty product in your cart</b>
              ) : (
                <table className="table">
                  <thead>
                    {result.map((item: Product, index: number) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.title}</td>
                          <td>{item.price} USD</td>
                          <td>
                            <button onClick={() => decrease(item)}>-</button>
                            <span>
                              {item.quantity}
                              <button onClick={() => increase(item)}>+</button>
                            </span>
                          </td>
                          <td>
                            <a
                              className="label label-info update-cart-item"
                              data-product=""
                            >
                              Update
                            </a>
                            <a
                              className="label label-danger delete-cart-item"
                              data-product=""
                              onClick={() => deleteCart(item)}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </thead>
                  <tfoot id="my-cart-footer">
                    <tr>
                      <td colSpan={4}>
                        There are <b>{result.length}</b> items in your shopping
                        cart.
                      </td>
                      <td colSpan={2} className="total-price text-left">
                        {result.reduce((acc: any, item: any) => {
                          return acc + item.price * item.quantity;
                        }, 0)}{" "}
                        USD
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
          {alert === "add" && (
            <div
              className="alert alert-success"
              role="alert"
              id="mnotification"
              onAnimationEnd={() => setAlert(null)}
            >
              Add to cart successfully
            </div>
          )}
          {alert === "delete" && (
            <div
              className="alert alert-danger"
              role="alert"
              id="mnotification"
              onAnimationEnd={() => setAlert(null)}
            >
              Delete cart successfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
