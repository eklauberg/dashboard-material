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
            <Paper style={{ height: 680 }}>
              <ResponsiveBar
                data={[{ name: "5000", recorde: 123, total: 100 }]}
                groupMode="grouped"
                keys={["recorde", "total"]}
                indexBy="name"
                margin={{
                  top: 50,
                  right: 130,
                  bottom: 50,
                  left: 60
                }}
                padding={0.3}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Protocolo",
                  legendPosition: "center",
                  legendOffset: 36
                }}
                labelTextColor="inherit:darker(1.6)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={{ height: 680 }}>
              <ResponsiveBar
                data={this.controller.chartData2()}
                groupMode="grouped"
                keys={["recorde", "total"]}
                indexBy="name"
                margin={{
                  top: 50,
                  right: 130,
                  bottom: 50,
                  left: 60
                }}
                padding={0.3}
                colors="nivo"
                colorBy="id"
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Protocolo",
                  legendPosition: "center",
                  legendOffset: 36
                }}
                labelTextColor="inherit:darker(1.6)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]}
              />
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
