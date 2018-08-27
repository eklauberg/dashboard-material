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
import Moment from "../../../node_modules/react-moment";
import Select from "react-select";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveHeatMap } from "@nivo/heatmap";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Dashboard extends BaseView {
  constructor(props) {
    super(props, DashboardController);
    this.state = {
      history: {},
      realtime: {},
      loading: true
    };
  }

  componentDidMount() {
    this.controller.init();
  }

  componentWillUnmount() {
    this.controller.unmount();
  }

  dashboardRender() {
    const { history, realtime } = this.state;
    const { classes } = this.props;
    const data = this.controller.chartData();
    const paper = (
      <Paper className={classes.paper} elevation={2}>
        <Grid container spacing={8} align="center">
          <Grid item xs={12}>
            <Typography variant="title">Rastreadores</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Conectados</Typography>
            <Typography variant="display1">
              {realtime.servers.all.total}
            </Typography>
            <Typography variant="caption">
              <Moment format="DD/MM/YYYY HH:mm:ss">{realtime.at}</Moment>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Recorde</Typography>
            <Typography variant="display1">
              {history.servers.all.total}
            </Typography>
            <Typography variant="caption">
              <Moment format="DD/MM/YYYY HH:mm:ss">{history.at}</Moment>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Diferença</Typography>
            <Typography variant="display1">
              {history.servers.all.total - realtime.servers.all.total}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );

    return (
      <Page>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            {paper}
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    {data.map(t => (
                      <TableCell>{t.name}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={1}>
                    {data.map(t => (
                      <TableCell>{t.total}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow key={1}>
                    {data.map(t => (
                      <TableCell>{t.recorde}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
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
