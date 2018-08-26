import React from "react";
import { withStyles } from "@material-ui/core";
import PageStyle from "../assets/jss/components/PageStyle";
const Page = props => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {props.children}
    </main>
  );
};
export default withStyles(PageStyle)(Page);
