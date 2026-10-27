import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import productsData from "./data";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState({});

  function addToCart(id) {
    setCart((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1
    }));
  }

  function removeFromCart(id) {
    setCart((current) => {
      const next = { ...current };

      if (!next[id]) {
        return next;
      }

      next[id]--;

      if (next[id] <= 0) {
        delete next[id];
      }

      return next;
    });
  }

  function addProduct(product) {
    setProducts((current) => [
      ...current,
      {
        ...product,
        id: Date.now(),
        price: Number(product.price),
        rating: Number(product.rating),
        quantity: Number(product.quantity)
      }
    ]);
  }

  const cartCount = Object.values(cart).reduce((total, value) => total + value, 0);

  return (
    <>
      <Header cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/add"
          element={<AddProduct addProduct={addProduct} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;