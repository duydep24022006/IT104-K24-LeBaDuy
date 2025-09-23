import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../utils/types";

export type UserState = {
  users: User[];
};
const initialState: UserState = {
  users: [
    {
      id: 1,
      fullName: "Lê Văn A",
      favorites: true,
    },
    {
      id: 2,
      fullName: "Lê Văn B",
      favorites: false,
    },
    {
      id: 3,
      fullName: "Lê Văn C",
      favorites: true,
    },
  ],
};

const listFavoritesUser = createSlice({
  name: "Mode",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.favorites = !user.favorites;
      }
    },
  },
});
export const { toggleFavorite } = listFavoritesUser.actions;
export default listFavoritesUser.reducer;
