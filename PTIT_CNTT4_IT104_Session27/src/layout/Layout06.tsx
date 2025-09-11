import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout06() {
  return (
    <div className="flex flex-col">
      <nav className="flex gap-4 p-4 bg-gray-100">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Detail
        </NavLink>
      </nav>
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
