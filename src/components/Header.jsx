import React from "react";
import hero_img from "../images/hero-img.png";
function Header() {
  const list = [
    { name: "Clients", no: "5K" },
    { name: "Running Project", no: "350+" },
    { name: "Running Completed", no: "900+" },
  ];
  return (
    <>
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

      <div className="header_cards">
        {list.map(({name,no})=>(
            <div className="card">
               
                <span>{no}</span>
                <span>{name}</span>
            </div>
        ))}
      </div>
    </>
  );
}

export default Header;
