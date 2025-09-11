import { createBrowserRouter } from "react-router-dom";
import ListProducts from "./layout/pages/ListProduct";
import ProductDeatil from "./layout/pages/ProductDeatil";

export const routes = createBrowserRouter([
    {
        path:"/list-product",
        element:<ListProducts/>
    },
    {
        path:"/product-detail/:id",
        element:<ProductDeatil/>
    }
])