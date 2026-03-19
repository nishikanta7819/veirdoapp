import React from "react";
import "../styles/productcard.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log("Add to cart:", product);
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product?.image} alt={product?.title || "product"} />
      </div>

      <div className="product-card-price">
        <div className="discounted-price">₹{product?.discountPrice}</div>

        <div className="original-price">
          <p>₹{product?.originalPrice}</p>
        </div>

        <div className="price-off">{product?.discountText}</div>
      </div>

      <div className="product-card-desc">
        <p>{product?.title}</p>
      </div>

      <div className="product-btn">
        <div className="add-to-cart" onClick={handleAddToCart}>
          <p>Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
