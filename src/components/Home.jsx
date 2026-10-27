import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Home({ products, cart, addToCart, removeFromCart }) {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const total = products.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0
  );

  return (
    <main className="container">
      <section className="page-heading">
        <div>
          <h1>Product List</h1>
          <p>View and manage products.</p>
        </div>

        <Link className="button" to="/add">
          Add New Product
        </Link>
      </section>

      <div className="filter">
        <label htmlFor="category">Category:</label>

        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartQuantity={cart[product.id] || 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </section>

      <div className="total-box">
        <span>Overall Total</span>
        <strong>₱{total.toLocaleString()}</strong>
      </div>
    </main>
  );
}

export default Home;