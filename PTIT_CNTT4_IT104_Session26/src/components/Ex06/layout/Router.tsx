import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import Account from "./pages/Account";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <PrivateRouter element={<Account></Account>}></PrivateRouter>,
  },
]);
