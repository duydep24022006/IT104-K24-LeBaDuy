import { RouterProvider } from "react-router-dom";
import { routes } from "./Router";

export default function App() {
  return (
    <div>
     <RouterProvider router={routes} />
    </div>
  );
}
