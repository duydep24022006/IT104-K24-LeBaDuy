import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { User } from "../utils/types";
import { HeartOutlined } from "@ant-design/icons";
import { toggleFavorite } from "../store/slices/listFavoritesUser";

export default function ListFavoritesUser() {
  const result = useSelector((data: any) => data.listFavoritesUser.users);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        <b>List Favorites User</b>
      </h2>
      {result.map((user: User) => (
        <div key={user.id}>
          <p>UserName:{user.fullName} </p>
          <p>
            Favotites:
            <HeartOutlined
              style={{ color: user.favorites ? "red" : "gray" }}
              onClick={() => dispatch(toggleFavorite(user.id))}
            />
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
