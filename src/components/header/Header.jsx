import React from "react";
import "./header.scss";
import { logo } from "../../assets";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="container m-5 d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar">
            <ul className="navlist d-flex gap-3">
              <li className="list_item ">
                <a className="list_item_a" href="/">
                  Home
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_a" href="/about">
                  About
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_a" href="/contact">
                  Services
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_a" href="/contact">
                  Articles
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_a" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="cart ms-5 d-flex gap-1 align-items-center justify-content-center">
              <p className="catr_count">Cart(0)</p>
              <button className="header_btn mb-3 rounded-4 btn btn-primary">
                Get a free quote
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
