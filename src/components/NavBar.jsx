import React from "react";

function NavBar() {
  const list = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Projects" },
    { name: "Blog" },
  ];
  return (
    <div className="navbar_conatiner">
      <div className="logo">
        {" "}
        <span>Dencey</span>
      </div>
      <nav>
        {list.map(({ name }) => (
          <li>
            <a href="">{name}</a>
          </li>
        ))}
      </nav>
      <div className="login_icon">
        <i class="ri-login-box-line"></i>
        <span>Login</span>
      </div>
    </div>
  );
}

export default NavBar;
