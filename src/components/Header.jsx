import React from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          Product Shop
        </Link>

        <nav>
          <Link to="/">Products</Link>
          <Link to="/add">Add Product</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;