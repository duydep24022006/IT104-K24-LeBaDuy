// src/routes/AppRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import ListUser from "../pages/ListUser";
import Counter from "../pages/Counter";
import RandomNumber from "../pages/RandomNumber";
import ChangeState from "../pages/ChangeState";
import ThemeMode from "../pages/ThemeMode";
import RegisterForm from "../pages/RegisterForm";
import LoginForm from "../pages/LoginForm";

export const router = createBrowserRouter([
  { path: "/", element: <Profile /> },
  { path: "/users", element: <ListUser /> },
  { path: "/counter", element: <Counter /> },
  { path: "/random", element: <RandomNumber /> },
  { path: "/change", element: <ChangeState /> },
  { path: "/theme", element: <ThemeMode /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "/login", element: <LoginForm /> },
]);
