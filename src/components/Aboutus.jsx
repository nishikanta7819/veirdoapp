import React from "react";
import "../styles/aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-us-top">
        <div className="about-us-text">
          <div className="about-us-text-heading">
            <p>about us</p>
          </div>
          <div className="about-us-text-para">
            <p>
              Be bold, be you, be Veirdo! The coolest streetwear brand for Gen-Z
              is here! Veirdo is all about standing out in the crowd, expressing
              yourself with creativity and making an uber stylish statement.
            </p>
          </div>
        </div>
        <div className="about-us-img">
          <img
            src="https://veirdo.in/cdn/shop/files/1_1_d64e47da-3937-4108-bcdc-c35b77c49686.png?v=1707820466&width=533"
            alt=""
          />
          <img
            src="https://veirdo.in/cdn/shop/files/3_4_04c128ea-5d2b-493e-a4cf-34ba6e791134.png?v=1707820474&width=533"
            alt=""
          />
          <img
            src="https://veirdo.in/cdn/shop/files/2_1_719a1499-75ee-476b-ad06-0ad9172512fb.png?v=1707820474&width=533"
            alt=""
          />
        </div>
      </div>
      <div className="about-us-bottom">
        <div className="about-us-bottom-text1">
          <p>We are </p>
        </div>
        <div className="about-us-bottom-text2">
          <h3>bold</h3>
          <p>But never curt</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
