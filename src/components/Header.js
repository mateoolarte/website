import React, { Component } from "react"
import "../styles/Header.css"
import logo from "../images/logo.svg"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import email from "../images/email.svg"

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="/">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div className="contactMe">
          <span>Contact me</span>
          <ul className="contactMe__list">
            <li className="contactMe__listItem">
              <a href="https://twitter.com/mateo_olarte" target="_blank" rel="noopener noreferrer">
                <img src={ twitter } alt=""/>
              </a>
            </li>
            <li className="contactMe__listItem">
              <a href="https://github.com/mateoolarte" target="_blank" rel="noopener noreferrer">
                <img src={ github } alt=""/>
              </a>
            </li>
            <li className="contactMe__listItem">
              <a href="mailto:mateo.olarte8@gmail.com">
                <img src={ email } alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
