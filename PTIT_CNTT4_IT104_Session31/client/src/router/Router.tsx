import { createBrowserRouter } from "react-router-dom";
import ManagerPost from "../page/ManagerPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerPost/>,
  },

]);
