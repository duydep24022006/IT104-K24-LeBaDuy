import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const loggedInUser = useSelector((state: any) => state.auth.loggedInUser);

  useEffect(() => {
    console.log("User đã đăng nhập:", loggedInUser);
  }, [loggedInUser]);
    return <RouterProvider router={router} />;
}
