import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-white bg-red-600 p-2" : "";
  return (
    <div className=" w-screen  h-screen flex gap-3 flex-col justify-center items-center">
      <header>
        <nav>
          <NavLink to="/layout/" className={linkStyle} end>
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink to="/layout/product" className={linkStyle}>
            Product
          </NavLink>{" "}
          |{" "}
          <NavLink to="/layout/detail" className={linkStyle}>
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
