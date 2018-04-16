import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/404.css";

function Content404({ location }) {
  return (
    <section className="page404">
      <h1 className="page404__title">404</h1>
      <h2 className="page404__subtitle">Upps...</h2>
      <h3 className="page404__description">
        <strong>{location.pathname}</strong> is not found or available
      </h3>
      <NavLink to="/" className="btn">Go Home</NavLink>
    </section>
  );
}

export default Content404;
