import React, { Component } from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="padding-block">

        <Router>
          <Link to="/">
            <div className="logo">
              <Logo className="logo-img" />
            </div>
          </Link>
        </Router>
        <Router>
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
            </ul>

          {/* <Switch>
            <Route path="/about">
              <Portfolio />
            </Route>
            <Route path="/users">
              <About />
            </Route>
            <Route path="/">
              <Contact />
            </Route>
          </Switch> */}
        </Router>
        </div>

      </div>
    );
  }
}

export default Header;
