import React from "react";
import "../styles/topcategories.css";
const TopCategories = () => {
  return (
    <div className="top-categories">
      <div className="top-categories-title">
        <p>top categories</p>
      </div>
      <div className="top-categories-cards">
        <div className="top-categories-card">
          <img
            src="https://veirdo.in/cdn/shop/files/5_1_45b82bbc-f648-4ca5-a2cd-97f50e53be93.jpg?v=1754545700&width=533"
            alt=""
          />
          <p>oversized t-shirts</p>
        </div>
        <div className="top-categories-card">
          <img
            src="https://veirdo.in/cdn/shop/files/1_9802ef80-78e6-423c-8d19-02493dd648da.jpg?v=1736310746&width=533"
            alt=""
          />
          <p>acid wash tshirts</p>
        </div>
        <div className="top-categories-card">
          <img
            src="https://veirdo.in/cdn/shop/files/Artboard_10_1_57909275-2bb3-4c41-9d5b-5c40550c2e9d.jpg?v=1737959985&width=533"
            alt=""
          />
          <p>plus size t-shirts</p>
        </div>
        <div className="top-categories-card">
          <img
            src="https://veirdo.in/cdn/shop/files/01_0002_10_1.jpg?v=1736237253&width=533"
            alt=""
          />
          <p>cargos</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
