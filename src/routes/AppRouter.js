import React, { Component } from "react";
import { Route } from "react-router";
import { Dashboard, Config } from "../views";

class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Dashboard} />
        <Route path="/config" component={Config} />
      </React.Fragment>
    );
  }
}

export default AppRouter;
