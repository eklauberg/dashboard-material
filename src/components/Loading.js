import React from "react";
import { withStyles, LinearProgress } from "@material-ui/core";
import LoadingStyle from "../assets/jss/components/LoadingStyle";

const Loading = props => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <LinearProgress />
    </main>
  );
};
export default withStyles(LoadingStyle)(Loading);
