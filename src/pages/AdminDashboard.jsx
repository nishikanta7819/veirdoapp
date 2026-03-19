import { useState, useEffect } from "react";
import "../styles/adminDashboard.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [product, setProduct] = useState({
    image: "",
    title: "",
    originalPrice: "",
    discountPrice: "",
    type: "",
    bestseller: false,
    newarrivals: false,
    centrestage: false,
  });

  const API = "http://localhost:5000/api/products";

  // ✅ Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Add or Update Product
  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API}/${editingId}` : API;

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          originalPrice: Number(product.originalPrice),
          discountPrice: Number(product.discountPrice),
        }),
      });

      setMessage(editingId ? "Product updated ✅" : "Product added ✅");

      setEditingId(null);
      setProduct({
        image: "",
        title: "",
        originalPrice: "",
        discountPrice: "",
        type: "",
        bestseller: false,
        newarrivals: false,
        centrestage: false,
      });

      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
      setMessage("Error saving product ❌");
    }
  };

  // ✅ Delete Product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      setMessage("Product deleted ❌");
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // ✅ Edit Product
  const handleEdit = (p) => {
    setProduct({
      image: p.image,
      title: p.title,
      originalPrice: p.originalPrice,
      discountPrice: p.discountPrice,
      type: p.type || "",
      bestseller: p.bestseller || false,
      newarrivals: p.newarrivals || false,
      centrestage: p.centrestage || false,
    });

    setEditingId(p._id);
  };

  return (
    <div className="admin">
      <h2>Admin Dashboard</h2>

      {message && <p className="message">{message}</p>}

      {/* ✅ Form */}
      <form className="adminForm" onSubmit={addProduct}>
        <input
          className="inputs"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          className="inputs"
          name="title"
          placeholder="Product Title"
          value={product.title}
          onChange={handleChange}
        />

        <input
          className="inputs"
          name="originalPrice"
          placeholder="Original Price"
          value={product.originalPrice}
          onChange={handleChange}
        />

        <input
          className="inputs"
          name="discountPrice"
          placeholder="Discount Price"
          value={product.discountPrice}
          onChange={handleChange}
        />

        {/* ✅ Product Type */}
        <div className="select-wrapper">
          <select
            className="custom-select"
            name="type"
            value={product.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="oversized-tshirt">Oversized T-shirt</option>
            <option value="cargos">Cargos</option>
            <option value="hoodies">Hoodies</option>
            <option value="polo-tshirts">Polo T-shirts</option>
            <option value="classic-fit-tshirts">Classic Fit T-shirts</option>
          </select>
        </div>

        {/* ✅ Toggle Buttons */}
        <div className="toggle-group">
          <label>
            Bestseller
            <input
              type="checkbox"
              name="bestseller"
              checked={product.bestseller}
              onChange={handleChange}
            />
          </label>

          <label>
            New Arrival
            <input
              type="checkbox"
              name="newarrivals"
              checked={product.newarrivals}
              onChange={handleChange}
            />
          </label>

          <label>
            Centre Stage
            <input
              type="checkbox"
              name="centrestage"
              checked={product.centrestage}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* ✅ Product List */}
      <h3>All Products</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="allProducts">
          <div className="allProductsData">
            {products.map((p) => (
              <div key={p._id} className="productItem">
                <img src={p.image} alt={p.title} width="100" />

                <div className="productPrice">
                  <p className="discountPrice">
                    ₹{p.discountPrice?.toLocaleString("en-IN")}
                  </p>
                  <p className="originalPrice">
                    ₹{p.originalPrice?.toLocaleString("en-IN")}
                  </p>

                  <p className="discountText">
                    {p.originalPrice > 0
                      ? `${Math.round(
                          ((p.originalPrice - p.discountPrice) /
                            p.originalPrice) *
                            100,
                        )}% off`
                      : "No discount"}
                  </p>
                </div>

                <h4>{p.title}</h4>

                {/* ✅ Type */}
                <p className="productType">{p.type}</p>

                {/* ✅ Tags */}
                <div className="tags">
                  {p.bestseller && (
                    <span>
                      Bestseller<span className="btn"></span>
                    </span>
                  )}
                  {p.newarrivals && (
                    <span>
                      New arrival<span className="btn"></span>
                    </span>
                  )}
                  {p.centrestage && (
                    <span>
                      Centre stage<span className="btn"></span>
                    </span>
                  )}
                </div>

                <div className="productBtns">
                  <button className="edit" onClick={() => handleEdit(p)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteProduct(p._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
