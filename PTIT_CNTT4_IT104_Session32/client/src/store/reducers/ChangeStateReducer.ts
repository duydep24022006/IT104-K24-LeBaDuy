const initialState = "Rikkei Academy";

type ActionType = {
  type: "Change_State";
  payload?: unknown;
};
export const ChangeStateReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "Change_State":
      return (state = "RikkeiSoft");
    default:
      return state;
  }
};
