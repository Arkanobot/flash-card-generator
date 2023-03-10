import React from "react";
//assets
import logo from "../assets/logo.png";

function Header() {
  // header component for displaying logo
  return (
    <div className="header bg-white shadow-grey shadow-lg">
      <img className="w-32" src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
