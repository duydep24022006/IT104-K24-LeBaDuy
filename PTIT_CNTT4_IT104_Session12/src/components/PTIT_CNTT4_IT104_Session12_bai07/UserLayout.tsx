import React from "react";
import './main.css'
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

export default function UserLayout() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="main">
        <div className="left">
          <Menu text="Menu" bgColor="green" />
        </div>
        <div className="between">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="rigth">
          <Menu text="Article" bgColor="blue" />
        </div>
      </div>
    </div>
  );
}
