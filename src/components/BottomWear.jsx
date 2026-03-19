import React from 'react'
import "../styles/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const BottomWear = () => {
    const BottomWear = allProducts.filter(
    (product) => product.type === "cargos"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1982/7331/files/Centre_stage_banners-16.png?v=1737117460"
          alt=""
        />
      </div>
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Cargo Pants for Men</p>
        </div>
        <div className="nav-link-products-count">
          <p>{BottomWear.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {BottomWear.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  )
}

export default BottomWear