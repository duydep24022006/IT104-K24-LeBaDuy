import React from 'react'
import CustomLink from '../pages/CustomLink';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Ex07() {
   const router = createBrowserRouter([
       { path: "/", element: <CustomLink /> },
       { path: "/homePage", element: <HomePage /> },
       { path: "*", element: <NotFound /> },
     ]);
     return <RouterProvider router={router} />;
}
