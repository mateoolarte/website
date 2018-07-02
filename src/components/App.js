import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cover from "./Cover";
import About from "./About";
import Work from "./Work";
import SingleWork from "./SingleWork";
import Page404 from "./404";
import withTracker from "./withTracker";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withTracker(Cover)} />
        <Route path="/about" component={withTracker(About)} />
        <Route path="/work" component={withTracker(Work)} />
        <Route path="/project/:title" component={withTracker(SingleWork)} />
        <Route component={withTracker(Page404)} />
      </Switch>
    </Router>
  );
}
