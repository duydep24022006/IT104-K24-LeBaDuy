import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import { saveCart, loadCart } from "./utils/localStorage";

const preloadedState = {
  card: {
    cart: loadCart(),
  },
};

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  const state = store.getState();
  saveCart(state.card.cart);
});
