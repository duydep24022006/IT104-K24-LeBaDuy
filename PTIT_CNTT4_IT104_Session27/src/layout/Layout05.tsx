import React from "react";
import SideBar from "../page/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout05() {
  return (
    <div className="flex ">
      <SideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
