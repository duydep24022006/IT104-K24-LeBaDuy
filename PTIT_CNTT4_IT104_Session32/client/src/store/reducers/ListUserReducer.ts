const initialState = [
  {
    id: 1,
    name: "Nguyen Van A",
    date: "01/01/2000",
    address: "Ha Noi",
    male: "Nam",
  },
  {
    id: 2,
    name: "Nguyen Van A",
    date: "01/01/2000",
    address: "Ha Noi",
    male: "Nam",
  },
];
type ActionType = {
  type: string;
  payload?: unknown;
};
export const ListUserReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_LIST_USER":
      return action.payload;
    default:
      return state;
  }
};
