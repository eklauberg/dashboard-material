import React from "react";
import { Sidebar, Appbar } from "../../components";
import { withStyles } from "@material-ui/core";

import AppStyle from "../../assets/jss/views/AppStyle";
import { AppRouter } from "../../routes";
import { Switch } from "react-router";
import BaseView from "../BaseView";
import AppController from "./controller";
class App extends BaseView {
  constructor(props) {
    super(props, AppController);
    this.state = {
      open: true
    };
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Appbar
          open={open}
          handleDrawerOpen={this.controller.handleDrawerOpen}
        />
        <Sidebar
          open={open}
          handleDrawerClose={this.controller.handleDrawerClose}
        />
        <Switch>
          <AppRouter />
        </Switch>
      </div>
    );
  }
}

export default withStyles(AppStyle)(App);
