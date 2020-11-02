import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="padding-block">
          <Link to="/">
            <div className="logo">
              <Logo className="logo-img" />
            </div>
          </Link>
            <ul className="list">
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/develop">Development</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
