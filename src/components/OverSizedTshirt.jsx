import React, { useEffect, useState } from "react";
import "../styles/nav-links-products.css";
import ProductCard from "./ProductCard";

const OverSizedTshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        console.log("API DATA:", data); // 🔥 debug

        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter products
  const oversizedTshirts = products.filter(
    (product) => product.type === "oversized-tshirt",
  );

  // ✅ Loading state
  if (loading) return <p>Loading products...</p>;

  // ✅ Error state
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="nav-link-products">
      <div className="nav-link-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1982/7331/files/1440_550_copy_3.png?v=1742922059"
          alt="banner"
        />
      </div>

      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>OverSized T-Shirts for Men</p>
        </div>
        <div className="nav-link-products-count">
          <p>{oversizedTshirts.length} items</p>
        </div>
      </div>

      <div className="nav-link-all-products">
        {oversizedTshirts.length > 0 ? (
          oversizedTshirts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default OverSizedTshirt;
