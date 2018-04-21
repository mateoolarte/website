import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cover from "./Cover";
import About from "./About";
import Work from "./Work";
import SingleWork from "./SingleWork";
import withTracker from "./withTracker";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="wrapper">
          <Switch>
            <Route path="/" exact component={withTracker(Cover)} />
            <Route path="/about" component={withTracker(About)} />
            <Route path="/work" component={withTracker(Work)} />
            <Route path="/project/:title" component={withTracker(SingleWork)} />
          </Switch>
        </section>
      </Router>
    );
  }
}
