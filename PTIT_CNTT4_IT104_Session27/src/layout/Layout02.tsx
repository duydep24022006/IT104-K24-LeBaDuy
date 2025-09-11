import React from "react";
import Header from "../page/Header";
import { Outlet } from "react-router-dom";

export default function Layout02() {
    return <div>
        <nav>
            <Header/>
        </nav>
        <div className="mt-3">
            <Outlet/>
        </div>
  </div>;
}
