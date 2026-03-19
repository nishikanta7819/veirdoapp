import React, { useEffect, useState, useRef } from "react";
import ProductDisplay from "./ProductDisplay";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionRef = useRef(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/products?bestseller=true")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div ref={sectionRef}>
      <ProductDisplay
        products={products}
        title="our bestsellers"
        btnText={showAll ? "show less" : "see more bestsellers"}
        onBtnClick={() => {
          setShowAll((prev) => {
            if (prev && sectionRef.current) {
              sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }
            return !prev;
          });
        }}
        limit={showAll ? undefined : 4}
      />
    </div>
  );
};

export default BestSellers;
