import "./Header.css";

import { LogoIcon, MoonIcon } from "../../assets/Icons";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <LogoIcon />
            <span>JS Snippets</span>
          </div>
          <button className="icon">
            <MoonIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
