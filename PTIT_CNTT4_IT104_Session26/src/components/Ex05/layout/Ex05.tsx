import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router";

export default function Ex05() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
