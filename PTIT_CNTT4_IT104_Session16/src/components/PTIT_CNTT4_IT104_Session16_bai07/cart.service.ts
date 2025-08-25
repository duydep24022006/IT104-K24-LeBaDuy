import type { Product } from "./product.data";
import Swal from "sweetalert2";
const CART_KEY = "cart";

export function getCart(): (Product & { cartQuantity: number })[] {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCart(cart: (Product & { cartQuantity: number })[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product) {
  let cart = getCart();

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    if (existing.cartQuantity < product.quantity) {
      existing.cartQuantity += 1;
    } else {
      Swal.fire({
        title: "Số lượng sản phẩm trong kho không đủ",
        showClass: {
          popup: `
      animate__animated
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
      return;
    }
  } else {
    cart.push({ ...product, cartQuantity: 1 });
  }
  saveCart(cart);
}
