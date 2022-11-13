import React, { useEffect, useRef } from "react";

function NavBar() {
  const list = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Projects" },
    { name: "Blog" },
  ];
  const scrollNav = useRef();
  const showMenu = useRef();
  const showLogin = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        scrollNav.current.classList.add("header_shrink");
      } else {
        scrollNav.current.classList.remove("header_shrink");
      }
    });

    // return () => window.removeEventListener("scroll");
  }, []);
  const showMenuList = () => {
    showMenu.current.classList.toggle("show_menu");
    showLogin.current.classList.toggle("show_login");
  };
  return (
    <div ref={scrollNav} className="navbar_conatiner">
      <div className="logo">
        {" "}
        <span>Dencey</span>
      </div>
      <nav ref={showMenu}>
        {list.map(({ name }) => (
          <li>
            <a href="">{name}</a>
          </li>
        ))}
      </nav>
      <div className="login_icon" ref={showLogin}>
        <i class="ri-login-box-line"></i>
        <span>Login</span>
      </div>

      <div className="mobile_menu" onClick={showMenuList}>
        <i class="ri-menu-line"></i>
      </div>
    </div>
  );
}

export default NavBar;
