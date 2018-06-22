import React, { Component, Fragment } from "react";

import Header from "./Header";
import Nav from "./Nav";

import "../styles/Cover.css";

export default class Cover extends Component {
  constructor() {
    super();

    this.state = {
      transition: false
    };
  }

  componentDidMount() {
    this.setState({
      transition: true
    });

    setTimeout(
      () =>
        this.setState({
          transition: false
        }),
      0
    );
  }

  render() {
    return (
      <Fragment>
        <Header isHome={this.props.match.url === "/" ? true : false} />
        <Nav isHome={this.props.match.url === "/" ? true : false} />
        <section className="cover">
          <div className={`cover__box ${this.state.transition ? "enter" : ""}`}>
            <h2 className="cover__title">Hi, I'm Mateo Olarte</h2>
            <h1 className="cover__subtitle">Fullstack & UX Developer</h1>
          </div>
        </section>
      </Fragment>
    );
  }
}
