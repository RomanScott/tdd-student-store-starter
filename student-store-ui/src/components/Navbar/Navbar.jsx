import * as React from "react";
import "./Navbar.css";
import Logo from "../Core/Logo";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Logo />

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu has-text-center">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/#about" className="navbar-item">
            About
          </a>
          <a href="/#contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
