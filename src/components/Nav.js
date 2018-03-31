import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Nav.css"

const Nav = (props) => {
  return <nav className={props.isHome ? "mainNav" : "mainNav mainNav--fixed"}>
      <ul className="mainNav__list">
        <li className="mainNav__listItem">
          <NavLink exact className="mainNav__listItemLink" to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="mainNav__listItem">
          <NavLink className="mainNav__listItemLink" to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="mainNav__listItem">
          <NavLink className="mainNav__listItemLink" to="/work" activeClassName="active">
            Work
          </NavLink>
        </li>
        <li className="mainNav__listItem--blog">
          <a href="/blog/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
      </ul>
    </nav>
}

export { Nav }