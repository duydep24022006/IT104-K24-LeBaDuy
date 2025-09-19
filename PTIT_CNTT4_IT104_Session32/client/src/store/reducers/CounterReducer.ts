const initialState = 0;

type ActionType = {
  type: string;
  payload?: unknown;
};
export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};
