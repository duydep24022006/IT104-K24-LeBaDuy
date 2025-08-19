import React from "react";
import "./main.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function AdminIndex() {
  return (
    <div className="index">
      <Header />
      <div className="mainIndex">
        <div className="left">
          <Menu />
        </div>
        <div className="rigth">
          <div className="header">
            <Main />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
