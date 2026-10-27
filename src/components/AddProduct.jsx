import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ addProduct }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    specification: "",
    rating: "",
    price: "",
    quantity: ""
  });

  const [error, setError] = useState("");

  function update(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  function submit(event) {
    event.preventDefault();

    const emptyField = Object.values(form).some(
      (value) => String(value).trim() === ""
    );

    if (emptyField) {
      setError("Please fill in all fields.");
      return;
    }

    addProduct(form);
    navigate("/");
  }

  return (
    <main className="container">
      <section className="form-card">
        <h1>Add New Product</h1>
        <p>Fill in all fields before submitting.</p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={submit}>
          <label>
            Feature Image
            <input
              value={form.image}
              onChange={(event) => update("image", event.target.value)}
              placeholder="Image URL"
            />
          </label>

          <label>
            Product Name
            <input
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
            />
          </label>

          <label>
            Category
            <input
              value={form.category}
              onChange={(event) => update("category", event.target.value)}
            />
          </label>

          <label>
            Description
            <textarea
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
            />
          </label>

          <label>
            Product Specification
            <textarea
              value={form.specification}
              onChange={(event) => update("specification", event.target.value)}
            />
          </label>

          <label>
            Rating
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={form.rating}
              onChange={(event) => update("rating", event.target.value)}
            />
          </label>

          <label>
            Price
            <input
              type="number"
              min="0"
              value={form.price}
              onChange={(event) => update("price", event.target.value)}
            />
          </label>

          <label>
            Quantity
            <input
              type="number"
              min="0"
              value={form.quantity}
              onChange={(event) => update("quantity", event.target.value)}
            />
          </label>

          <button className="button" type="submit">
            Add Product
          </button>
        </form>
      </section>
    </main>
  );
}

export default AddProduct;