import React from "react";
import RandomQuote from "./components/RandomQuote";
import ShoppingCart from "./components/ShoppingCart";
import RenderCounter from "./components/RenderCounter";
import Form from "./components/Form";
import KeyTracker from "./components/KeyTracker.tsx";
import ScrollToSection from "./components/ScrollToSection.tsx";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div>
      <ShoppingCart /> <br /> <hr /> <br />
      <RenderCounter /> <br /> <hr /> <br />
      <Form /> <br /> <hr /> <br />
      <RandomQuote /> <br /> <hr /> <br />
      <KeyTracker /> <br /> <hr /> <br />
      <ScrollToSection /> <br /> <hr /> <br />
      <LoginForm/> <br /> <hr /> <br />
    </div>
  );
}
