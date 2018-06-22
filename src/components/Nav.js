import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className={this.props.isHome ? "mainNav" : "mainNav mainNav--fixed"}>
        <ul className="mainNav__list">
          <li className="mainNav__listItem">
            <NavLink
              exact
              className="mainNav__listItemLink"
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="mainNav__listItem">
            <NavLink
              className="mainNav__listItemLink"
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="mainNav__listItem">
            <NavLink
              className="mainNav__listItemLink"
              to="/work"
              activeClassName="active"
            >
              Work
            </NavLink>
          </li>
          <li className="mainNav__listItem--blog">
            <a
              href="https://blog.mateoolarte.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
