import React from "react";
import logo from "../../applelogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          <li className="gnb-item">
            <Link to="/menu1">menu1</Link>
          </li>
          <li className="gnb-item">
            <Link to="/menu2">menu2</Link>
          </li>
          <li className="gnb-item">
            <Link to="/menu3">menu3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
