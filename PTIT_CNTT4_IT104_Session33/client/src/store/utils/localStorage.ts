export const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCart = (cart: any) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {}
};
