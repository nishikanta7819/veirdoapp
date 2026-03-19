import React from "react";
import "../styles/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const HoodiesSweatshirts = () => {
  const HoodiesSweatshirts = allProducts.filter(
    (product) => product.type === "hoodies"
  );
  return (
    <div className="nav-link-products">
        <div className="nav-link-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1982/7331/files/Artboard_1_copy_a7277561-4d03-44e6-a20e-3e438ce678bf.png?v=1737783671"
          alt=""
        />
      </div>
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Hoodies & Sweatshirts</p>
        </div>
        <div className="nav-link-products-count">
          <p>{HoodiesSweatshirts.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {HoodiesSweatshirts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default HoodiesSweatshirts;
