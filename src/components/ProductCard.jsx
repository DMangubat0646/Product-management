import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  cartQuantity,
  addToCart,
  removeFromCart
}) {
  const subtotal = product.price * cartQuantity;

  return (
    <article className="card">
      <img src={product.image} alt={product.name} />

      <div className="card-body">
        <span className="category">{product.category}</span>

        <h2>{product.name}</h2>

        <p className="description">{product.description}</p>

        <p className="price">₱{product.price.toLocaleString()}</p>

        <p>Rating: {product.rating}</p>

        {product.quantity < 5 && (
          <p className="low-stock">Low Stock</p>
        )}

        <p>Quantity: {product.quantity}</p>
        <p>Cart Quantity: {cartQuantity}</p>

        <p>
          Subtotal: <strong>₱{subtotal.toLocaleString()}</strong>
        </p>

        <div className="actions">
          <button
            className="small-button"
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>

          <button
            className="button"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>

          <button
            className="small-button"
            onClick={() => addToCart(product.id)}
          >
            +
          </button>
        </div>

        <Link className="details-link" to={`/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;