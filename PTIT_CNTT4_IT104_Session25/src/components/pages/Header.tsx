import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const baseClass = "px-4 py-2 rounded-md no-underline transition";
  const activeClass = "bg-red-600 text-white";

  return (
    <nav className="flex space-x-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Product
      </NavLink>

      <NavLink
        to="/detail"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Detail
      </NavLink>
    </nav>
  );
}

