import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cover from "./Cover";
import About from "./About";
import Work from "./Work";
import SingleWork from "./SingleWork";
import withTracker from "./withTracker";

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={100}>
              <Switch location={location}>
                <Route exact path="/" component={withTracker(Cover)} />
                <Route path="/about" component={withTracker(About)} />
                <Route path="/work" component={withTracker(Work)} />
                <Route
                  path="/project/:title"
                  component={withTracker(SingleWork)}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
