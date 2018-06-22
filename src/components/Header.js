import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const github =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_brand/assets/github.svg";
const twitter =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_brand/assets/twitter.svg";
const email =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_brand/assets/email.svg";
const logo =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_brand/assets/logo.svg";

function Header(props) {
  return (
    <header className={props.isHome ? "header" : "header header--fixed"}>
      <Link to="/">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <div className="contactMe">
        <span>Contact me</span>
        <ul className="contactMe__list">
          <li className="contactMe__listItem">
            <a
              href="https://twitter.com/mateo_olarte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="contactMe__listItem">
            <a
              href="https://github.com/mateoolarte"
              target="_blank"
              rel="noopener noreferrer"
            >
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
  );
}

export default Header;
