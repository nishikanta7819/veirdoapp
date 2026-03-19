import React from "react";
import "../styles/merch.css";
import Btn from "./Btn";

const Merch = () => {
  return (
    <div className="merch">
      <div className="merch-title">
        <p>geeks assemble!</p>
      </div>
      {/* <div className="merch-cards">
        <img src="" alt="" />
      </div> */}
      <div className="merch-btn">
        <Btn>see all merch</Btn>
      </div>
    </div>
  );
};

export default Merch;
