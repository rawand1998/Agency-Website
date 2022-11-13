import React from "react";
import hero_img from "../images/hero-img.png";
function Header() {
  return (
    <div className="header_container">
      <div className="header_content">
        <h2>
          We`re create perfect <br />
          digiatl profuct to <br />
          <span>promot your brand</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <div className="header_btns">
          <a href="">Get Start Now</a>
          <a href="">Dawnload Now</a>
        </div>
      </div>

      <div className="hero_img">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
