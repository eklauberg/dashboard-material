import React, { Component } from "react";
import { Sidebar, Appbar } from "./../components";
import { withStyles } from "@material-ui/core";

import AppStyle from "../assets/jss/views/AppStyle";
import { AppRouter } from "../routes";
import { Switch } from "react-router";
class App extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Appbar open={open} handleDrawerOpen={this.handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={this.handleDrawerClose} />
        <Switch>
          <AppRouter />
        </Switch>
      </div>
    );
  }
}

export default withStyles(AppStyle)(App);
