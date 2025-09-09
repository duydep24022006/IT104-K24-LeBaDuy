import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import HomeMa from "../pages/HomeMa";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/layout",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomeMa></HomeMa>,
      },
    
      {
        path: "product",
        element: <Product></Product>,
      },
      {
        path: "detail",
        element: <Detail></Detail>,
      },
    ],
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/homePage",
    element: <HomePage></HomePage>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
