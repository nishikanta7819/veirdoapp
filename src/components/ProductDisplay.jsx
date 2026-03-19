import React from "react";
import ProductCard from "./ProductCard";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import "../styles/productDisplay.css";

const ProductDisplay = ({
  products = [],
  title = "",
  filterFn = () => true,
  btnText = "",
  onBtnClick = () => {},
  onAddToCart,
  limit,
}) => {
  // ✅ SAFETY FIX
  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = limit
    ? safeProducts.filter(filterFn).slice(0, limit)
    : safeProducts.filter(filterFn);

  return (
    <div className="product-section">
      <div className="product-section-title">
        <p>{title}</p>
      </div>

      <div className="product-section-cards">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>

      {btnText && (
        <div className="product-section-btn">
          <Btn onClick={onBtnClick}>{btnText}</Btn>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
