import BaseController from "../BaseController";
import { DashboardProvider } from "../../providers";
import config from "../../config";
export default class DashboardController extends BaseController {
  constructor(setState, props, state) {
    super(setState, props, state);
    this.interval;
  }

  init() {
    this.begin();
    this.load();
    this.interval = setInterval(() => this.load(), config.api.time_reload);
  }

  load() {
    const data = DashboardProvider.last().then(data => {
      this.setState({ ...data, loading: false });
    });
  }

  chartData() {
    const { history, realtime } = this.state;
    const protocolosHistory = Object.entries(history.servers.all.protocols);
    const protocolosRealtime = Object.entries(realtime.servers.all.protocols);
    const mapa = {};

    protocolosHistory.map(protocolo => {
      mapa[protocolo[0]] = { recorde: protocolo[1] };
    });

    protocolosRealtime.map(protocolo => {
      mapa[protocolo[0]] = {
        recorde: (mapa[protocolo[0]] && mapa[protocolo[0]].recorde) || 0,
        total: protocolo[1] || 0
      };
    });

    const data = Object.entries(mapa).map(o => {
      return { name: `${o[0]}`, ...o[1] };
    });

    return data;
  }

  chartData2() {
    const { history, realtime } = this.state;
    const serversHistory = Object.entries(history.servers);
    const serversRealtime = Object.entries(realtime.servers);

    delete serversHistory.all;
    delete serversRealtime.all;

    const mapa = {};

    serversHistory.map(server => {
      mapa[server[0]] = { recorde: server[1].total };
    });

    serversRealtime.map(server => {
      mapa[server[0]] = {
        recorde: (mapa[server[0]] && mapa[server[0]].recorde) || 0,
        total: server[1].total || 0
      };
    });

    const data = Object.entries(mapa).map(o => {
      return { name: `${o[0]}`, ...o[1] };
    });
    console.log(data);
    return data;
  }

  unmount() {
    clearInterval(this.interval);
  }
}
