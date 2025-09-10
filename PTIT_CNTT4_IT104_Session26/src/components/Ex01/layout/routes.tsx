import { createBrowserRouter } from "react-router-dom";
import Product from "./pages/Product";

export const routes = createBrowserRouter([
  {
    path: "/product/:id",
    element: <Product/>,
  },
]);
