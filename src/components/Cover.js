import React, { Fragment } from "react";

import Header from "./Header";
import Nav from "./Nav";

import "../styles/Cover.css";

export default function Cover({ match }) {
  return (
    <Fragment>
      <Header isHome={ match.url === "/" ? true : false } />
      <Nav isHome={ match.url === "/" ? true : false } />
      <section className="cover">
        <div className="cover__box">
          <h2 className="cover__title">Hi, I'm Mateo Olarte</h2>
          <h1 className="cover__subtitle">Fullstack & UX Developer</h1>
        </div>
      </section>
    </Fragment>
  );
}
