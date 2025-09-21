import React, { useState } from 'react'
import './App.css'
import ListProduct from './components/ListProduct';
import ShoppingCart from './components/ShoppingCart';
export default function App() {
  const [alert, setalert] = useState<string|null>(null)
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div>
          <ListProduct setAlert={setalert} />
        </div>
        <div>
          <ShoppingCart alert={alert} setAlert={setalert} />
        </div>
      </div>
    </div>
  );
}
