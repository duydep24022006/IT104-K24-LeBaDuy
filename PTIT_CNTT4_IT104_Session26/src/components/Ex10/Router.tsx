import { createBrowserRouter } from "react-router-dom";

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