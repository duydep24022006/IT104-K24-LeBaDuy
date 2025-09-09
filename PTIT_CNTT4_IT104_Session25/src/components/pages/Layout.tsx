import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-white bg-red-600 p-2" : "";
  return (
    <div className=" w-screen  h-screen flex gap-3 flex-col justify-center items-center">
      <header>
        <nav>
          <NavLink to="/" className={linkStyle} end>
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink to="/product" className={linkStyle}>
            Product
          </NavLink>{" "}
          |{" "}
          <NavLink to="/detail" className={linkStyle}>
            Detail
          </NavLink>{" "}
          |{" "}
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
