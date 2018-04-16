import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Header from "./Header";
import Nav from "./Nav";
import Cover from "./Cover";
import About from "./About";
import Work from "./Work";
import SingleWork from "./SingleWork";

export function fireTracking(nextState) {
  const { pathname } = nextState.location; // this gives you the next URL

  ReactGA.pageview(pathname);
}
function HomePage() {
  return (
    <Route
      path="/"
      onEnter={fireTracking}
      exact
      render={props => (
        <div>
          <Header isHome={true} />
          <Nav isHome={true} />
          <Cover />
        </div>
      )}
    />
  );
}
function AboutPage() {
  return (
    <Route
      path="/about"
      onEnter={fireTracking}
      render={props => {
        return (
          <div>
            <Header isHome={false} />
            <Nav isHome={false} />
            <About />
          </div>
        );
      }}
    />
  );
}
function WorkPage() {
  return (
    <Route
      path="/work"
      onEnter={fireTracking}
      render={props => {
        return (
          <div>
            <Header isHome={false} />
            <Nav isHome={false} />
            <Work />
          </div>
        );
      }}
    />
  );
}
function SingleWorkPage() {
  return (
    <Route
      path="/project/:title"
      onEnter={fireTracking}
      render={props => {
        return (
          <div>
            <Header isHome={false} />
            <Nav isHome={false} />
            <SingleWork {...props} />
          </div>
        );
      }}
    />
  );
}
class App extends Component {
  render() {
    return (
      <Router>
        <section className="wrapper">
          <HomePage />
          <AboutPage />
          <WorkPage />
          <SingleWorkPage />
          {/* <Page404 /> */}
        </section>
      </Router>
    );
  }
}
ReactGA.initialize("UA-60678906-1");

export default App;
