import React from "react";
import {
  withStyles,
  Typography,
  Grid,
  Paper,
  LinearProgress
} from "@material-ui/core";
import { Page } from "../../components";
import DashboardStyle from "../../assets/jss/views/DashboardStyle";
import BaseView from "../BaseView";
import DashboardController from "./controller";
import Loading from "../../components/Loading";

class Dashboard extends BaseView {
  constructor(props) {
    super(props, DashboardController);
    this.state = {
      history: {},
      realtime: {}
    };
  }

  componentDidMount() {
    this.controller.init();
  }

  componentWillUnmount() {
    this.controller.unmount();
  }

  dashboardRender() {
    return (
      <Page>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>oi</Paper>
          </Grid>
        </Grid>
      </Page>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? <Loading /> : this.dashboardRender();
  }
}
export default withStyles(DashboardStyle)(Dashboard);
