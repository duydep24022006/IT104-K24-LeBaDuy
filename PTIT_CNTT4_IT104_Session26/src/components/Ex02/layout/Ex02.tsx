import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "../../Ex03/layout/routes";

export default function Ex02() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}
