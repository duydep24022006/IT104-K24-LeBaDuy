const initialState = true

type ActionType = {
  type: string;
  payload?: unknown;
};
export const ThemeModeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_MODE":
      return state = !state
    default:
      return state;
  }
};
