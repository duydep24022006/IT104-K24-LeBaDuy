import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout01() {
  return (
    <div>
      <nav className="bg-blue-500 w-screen h-20 flex gap-6 justify-center items-center text-3xl">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `!no-underline ${isActive ? "!text-red-500" : "text-white"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            `!no-underline ${isActive ? "!text-red-500" : "text-white"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            `!no-underline ${isActive ? "!text-red-500" : "text-white"}`
          }
        >
          Contact
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
