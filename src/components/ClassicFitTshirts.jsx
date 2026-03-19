import React from "react";
import "../styles/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const ClassicFitTshirts = () => {
  const ClassicFitTshirt = allProducts.filter(
    (product) => product.type === "classic-fit-tshirts"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1982/7331/files/1440_550_copy_5.png?v=1748001869"
          alt=""
        />
      </div>
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Classic Fit T-Shirts</p>
        </div>
        <div className="nav-link-products-count">
          <p>{ClassicFitTshirt.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {ClassicFitTshirt.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ClassicFitTshirts;
