import React from "react";
import { withStyles, IconButton, Divider } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import className from "classnames";
import SidebarStyle from "../assets/jss/components/SidebarStyle";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";

import { NavLink } from "react-router-dom";

const Sidebar = props => {
  const { classes, open, handleDrawerClose } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: className(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div>
        <NavLink className="main-anchor" to="/">
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>
        <NavLink className="main-anchor" to="/config">
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
        </NavLink>
      </div>
    </Drawer>
  );
};

export default withStyles(SidebarStyle, { withTheme: true })(Sidebar);
