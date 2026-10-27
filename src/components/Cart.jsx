import React from "react";

function Cart({
  products,
  cart,
  addToCart,
  removeFromCart
}) {
  const items = products.filter(
    (product) => cart[product.id]
  );

  const total = items.reduce(
    (sum, product) =>
      sum + product.price * cart[product.id],
    0
  );

  return (
    <main className="container">
      <h1>Cart</h1>

      {items.length === 0 ? (
        <div className="empty">No products in cart.</div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />

                <div>
                  <h2>{product.name}</h2>

                  <p>
                    Price: ₱{product.price.toLocaleString()}
                  </p>

                  <p>
                    Quantity: {cart[product.id]}
                  </p>

                  <p>
                    Subtotal: ₱
                    {(product.price * cart[product.id]).toLocaleString()}
                  </p>

                  <div className="actions">
                    <button
                      className="small-button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>

                    <button
                      className="small-button"
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="total-box">
            <span>Overall Total</span>
            <strong>₱{total.toLocaleString()}</strong>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;