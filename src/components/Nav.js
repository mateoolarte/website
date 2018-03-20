import React from "react"
import "../styles/Nav.css"

export const Nav = () => {
  return (
    <nav className="mainNav">
      <ul className="mainNav__list">
        <li className="mainNav__listItem"><a href="#about">About me</a></li>
        <li className="mainNav__listItem"><a href="#work">Work</a></li>
        <li className="mainNav__listItem--blog"><a href="/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
      </ul>
    </nav>
  )
}