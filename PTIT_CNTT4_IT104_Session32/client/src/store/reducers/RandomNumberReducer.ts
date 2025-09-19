type ActionType = {
  type: "GENERATE_RANDOM"; 
  payload?: unknown;
};
export const RandomNumberReducer = (
  state = Math.random()*1000,
  action: ActionType
) => {
  switch (action.type) {
    case "GENERATE_RANDOM":
      return Math.random()*1000;

    default:
      return state;
  }
};
