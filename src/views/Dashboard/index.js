import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { Page } from "../../components";
import DashboardStyle from "../../assets/jss/views/DashboardStyle";
import BaseView from "../BaseView";
import DashboardController from "./controller";

class Dashboard extends BaseView {
  constructor(props) {
    super(props, DashboardController);
  }

  render() {
    return (
      <Page>
        <Typography noWrap>
          {"You think water moves fast? You should see ice."}
        </Typography>
      </Page>
    );
  }
}
export default withStyles(DashboardStyle)(Dashboard);
