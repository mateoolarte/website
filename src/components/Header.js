import React, { Component } from "react"
import "../styles/Header.css"
const github = "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/github.svg"
const twitter = "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/twitter.svg"
const email = "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/email.svg"
const logo = "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/logo.svg"

export class Header extends Component {
  render() {
    return <header className={this.props.isHome ? "header" : "header header--fixed"}>
        <a href="/">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div className="contactMe">
          <span>Contact me</span>
          <ul className="contactMe__list">
            <li className="contactMe__listItem">
              <a href="https://twitter.com/mateo_olarte" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li className="contactMe__listItem">
              <a href="https://github.com/mateoolarte" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" />
              </a>
            </li>
            <li className="contactMe__listItem">
              <a href="mailto:mateo.olarte8@gmail.com">
                <img src={email} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>
  }
}
