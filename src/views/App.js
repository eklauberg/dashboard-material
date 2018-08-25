import React, { Component } from "react";
import { Sidebar, Appbar } from "./../components";
import { withStyles } from "@material-ui/core";

import AppStyle from "../assets/jss/dashboard/views/AppStyle";
import Typography from "@material-ui/core/Typography";

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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>
            {"You think water moves fast? You should see ice."}
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(AppStyle)(App);
