import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';

export default function Ex10() {
   const router = createBrowserRouter([
     { path: "/", element: <Login /> },
     { path: "/homePage", element: <HomePage /> },
     { path: "*", element: <NotFound /> },
   ]);
   return <RouterProvider router={router} />;
}
