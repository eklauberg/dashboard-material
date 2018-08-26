import React from "react";
import { withStyles } from "@material-ui/core";
import MaterialAppbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import className from "classnames";
import AppbarStyle from "../assets/jss/components/AppbarStyle";

const Appbar = props => {
  const { classes, open, handleDrawerOpen } = props;

  return (
    <MaterialAppbar
      position="absolute"
      className={className(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={className(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MaterialAppbar>
  );
};

export default withStyles(AppbarStyle)(Appbar);
