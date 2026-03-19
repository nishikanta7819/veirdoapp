import React, { useEffect, useState } from "react";
import "../styles/nav-links-products.css";
import ProductCard from "./ProductCard";

const PoloTShirts = () => {
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
      const poloTshirts = products.filter(
        (product) => product.type === "polo-tshirts"
      );
    
      // ✅ Loading state
      if (loading) return <p>Loading products...</p>;
    
      // ✅ Error state
      if (error) return <p>Error: {error}</p>;
    
  return (
    <div className="nav-link-products">
      <div className="nav-link-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1982/7331/files/Artboard_3_-_2026-01-31T120013.174.jpg?v=1769841146"
          alt="banner"
        />
      </div>

      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Men's Polo T-Shirts</p>
        </div>
        <div className="nav-link-products-count">
          <p>{poloTshirts.length} items</p>
        </div>
      </div>

      <div className="nav-link-all-products">
        {poloTshirts.length > 0 ? (
          poloTshirts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default PoloTShirts;
