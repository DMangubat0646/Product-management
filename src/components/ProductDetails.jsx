import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({
  products,
  cart,
  addToCart,
  removeFromCart
}) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="container">
        <h1>Product not found</h1>
        <Link className="back-link" to="/">
          ← Back to Products
        </Link>
      </main>
    );
  }

  const cartQuantity = cart[product.id] || 0;
  const subtotal = product.price * cartQuantity;

  return (
    <main className="container">
      <Link className="back-link" to="/">
        ← Back to Products
      </Link>

      <section className="details">
        <img src={product.image} alt={product.name} />

        <div>
          <span className="category">{product.category}</span>

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <p>
            <strong>Product Specification:</strong>{" "}
            {product.specification}
          </p>

          <p>
            <strong>Rating:</strong> {product.rating}
          </p>

          <p className="price">
            ₱{product.price.toLocaleString()}
          </p>

          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>

          {product.quantity < 5 && (
            <p className="low-stock">Low Stock</p>
          )}

          <p>
            <strong>Cart Quantity:</strong> {cartQuantity}
          </p>

          <p>
            <strong>Subtotal:</strong> ₱{subtotal.toLocaleString()}
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
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;