import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import ConfigStyle from "../assets/jss/views/ConfigStyle";
import { Page } from "../components";

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Page>
        <Typography noWrap>{"Config"}</Typography>
      </Page>
    );
  }
}
export default withStyles(ConfigStyle)(Dashboard);
