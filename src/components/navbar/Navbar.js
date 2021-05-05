import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <div className="navbar">
        <div className="left-bar">
          <h1>
            My <span>Design</span>
          </h1>
        </div>

        <div className="right-bar">
          <a href="about">About</a>
          <a href="services">Services</a>
          <a href="contact">Contact</a>
          <a href="career">Career</a>
          <a href="works">Works</a>
        </div>
        <div className="icon">
          <i className="fas fa-bars" onClick={handleClick}></i>
        </div>
      </div>
      <div className="icon-navbar">
        {navbar ? (
          <div className="right-bar-second">
            <a href="about">About</a>
            <a href="services">Services</a>
            <a href="contact">Contact</a>
            <a href="career">Career</a>
            <a href="works">Works</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
