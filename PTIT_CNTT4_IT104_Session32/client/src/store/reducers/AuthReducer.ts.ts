type User = {
  email: string;
  password: string;
};

type AuthState = {
  registeredUser: User | null;
  loggedInUser: User | null;
};

const initialState: AuthState = {
  registeredUser: null,
  loggedInUser: null,
};

type ActionType =
  | { type: "REGISTER"; payload: User }
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

export const AuthReducer = (
  state: AuthState = initialState,
  action: ActionType
): AuthState => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, registeredUser: action.payload };
    case "LOGIN":
      return { ...state, loggedInUser: action.payload };
    case "LOGOUT":
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
};
