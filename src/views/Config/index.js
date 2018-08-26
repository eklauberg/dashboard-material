import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import ConfigStyle from "../../assets/jss/views/ConfigStyle";
import { Page } from "../../components";
import BaseView from "../BaseView";
import ConfigController from "./controller";

class Dashboard extends BaseView {
  constructor(props) {
    super(props, ConfigController);
  }

  render() {
    return (
      <Page>
        <Typography noWrap>{"Config"}</Typography>
      </Page>
    );
  }
}
export default withStyles(ConfigStyle)(Dashboard);
