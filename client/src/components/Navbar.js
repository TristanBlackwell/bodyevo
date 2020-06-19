import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import evoLogo from "../images/evoLogo.png";

class Navbar extends Component {
  render() {
    return (
      <nav role="navigation">
        <div className="nav-wrapper container">
          <NavLink
            to="/"
            exact
            id="logo-container"
            href="./index.html"
            className="brand-logo"
          >
            <img src={evoLogo} alt="logo" className="logo" />
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/ourGym">Gym/Memberships</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/evoMassage">Evo massage</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/pg/BodyEvoFitnessStudio/posts/?ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <NavLink to="/ourGym">Gym/Memberships</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/evoMassage">Evo massage</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/pg/BodyEvoFitnessStudio/posts/?ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
                className="fa fa-facebook"
              >
                <span>Find us on Facebook</span>
              </a>
            </li>
          </ul>
          <a href="/#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
