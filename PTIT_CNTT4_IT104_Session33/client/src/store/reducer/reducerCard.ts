type Action = {
  type: string;
  payload: { id: number };
};

const initialState = {
  cart: [
    { id: 1, title: "Cake", price: 10, quantity: 3 },
    { id: 2, title: "Hamburger", price: 15, quantity: 5 },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id !== action.payload.id
            
        ),
      };
    default:
      return state;
  }
};
