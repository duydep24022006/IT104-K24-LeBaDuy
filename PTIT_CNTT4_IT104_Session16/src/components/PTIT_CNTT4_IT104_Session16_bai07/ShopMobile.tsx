import React, { Component } from "react";
import NavBar from "./components/NavBar";
import CartItem from "./components/CartItem";
import CartDropdown from "./components/CartDropdown";
import { products, type Product } from "./product.data";
import Swal from "sweetalert2";
type CartProduct = Product & { cartQuantity: number };

type State = {
  products: Product[];
  cart: CartProduct[];
  showCart: boolean;
};

export default class ShopMobile extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: products,
      cart: JSON.parse(localStorage.getItem("cart") || "[]"),
      showCart: false,
    };
  }

  saveCart = (cart: CartProduct[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  addToCart = (product: Product) => {
    const { cart } = this.state;
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      if (exist.cartQuantity < (product.quantity || 0)) {
        exist.cartQuantity++;
        this.saveCart([...cart]);
      } else {
        Swal.fire({
          title: "Số lượng sản phẩm trong kho không đủ",
          showClass: {
            popup: `animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      }
    } else {
      this.saveCart([...cart, { ...product, cartQuantity: 1 }]);
    }
  };

  handleIncrease = (id: number) => {
    const { cart, products } = this.state;
    const item = cart.find((p) => p.id === id);
    const product = products.find((p) => p.id === id);

    if (item && product) {
      if (item.cartQuantity < (product.quantity || 0)) {
        item.cartQuantity++;
        this.saveCart([...cart]);
      } else {
        alert("Số lượng sản phẩm trong kho không đủ");
      }
    }
  };

  handleDecrease = (id: number) => {
    const { cart } = this.state;
    const item = cart.find((p) => p.id === id);

    if (item) {
      if (item.cartQuantity > 1) {
        item.cartQuantity--;
        this.saveCart([...cart]);
      } else {
        this.handleRemove(id);
      }
    }
  };

  handleRemove = (id: number) => {
    const newCart = this.state.cart.filter((p) => p.id !== id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveCart(newCart); 
        Swal.fire({
          title: "Deleted!",
          text: "Sản phẩm đã được xóa khỏi giỏ hàng.",
          icon: "success",
        });
      }
    });
  };

  toggleCart = () => {
    this.setState((prev) => ({ showCart: !prev.showCart }));
  };

  render() {
    const { products, cart, showCart } = this.state;

    return (
      <div className="static">
        <div>
          <NavBar toggleCart={this.toggleCart} cartCount={cart.length} />
        </div>

        {showCart && (
          <CartDropdown
            cart={cart}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onRemove={this.handleRemove}
          />
        )}

        <CartItem products={this.state.products} onAddToCart={this.addToCart} />
      </div>
    );
  }
}
