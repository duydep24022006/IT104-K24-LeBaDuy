import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/components/router";
import Ex10 from "./components/components/Ex10";
import Ex07 from "./components/components/Ex07";
import Layout from "./components/components/Layout";

export default function App() {
  return (
    <div>
      <React.StrictMode>
      <RouterProvider router={router} />
      {/* <Ex07 /> */}
      {/* <Ex10 /> */}
      </React.StrictMode>
    </div>
  );
}
