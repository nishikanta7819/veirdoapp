import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";

const CategoryPage = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "http://localhost:5000/api/products";

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = API_BASE;

    const queryMap = {
      bestseller: "bestseller=true",
      newarrivals: "newarrivals=true",
      centrestage: "centrestage=true",
      "oversized-tshirts": "type=oversized-tshirts",
      cargos: "type=cargos",
      hoodies: "type=hoodies",
      "polo-tshirts": "type=polo-tshirts",
      "classic-fit-tshirts": "type=classic-fit-tshirts",
    };

    if (queryMap[category]) {
      url += `?${queryMap[category]}`;
    } else {
      setError("Invalid category");
      setLoading(false);
      return;
    }

    fetch(url)
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
        setError("Something went wrong");
        setLoading(false);
      });
  }, [category]);

  // 🔄 Better Title Formatting
  const formatTitle = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProductDisplay
      products={products}
      title={formatTitle(category)}
      btnText=""
    />
  );
};

export default CategoryPage;
