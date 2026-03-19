import React from "react";
import "../styles/btn.css";

const Btn = ({ children,onClick }) => {
  return (
    <>
      <div className="page-btn">
        <button onClick={onClick}>{children}</button>
      </div>
    </>
  );
};

export default Btn;
