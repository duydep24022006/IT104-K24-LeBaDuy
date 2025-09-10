import { createBrowserRouter } from "react-router-dom";
import Student from "./pages/Student";

export const routes = createBrowserRouter([
  {
    path: "/student",
    element: <Student />,
  },
]);
