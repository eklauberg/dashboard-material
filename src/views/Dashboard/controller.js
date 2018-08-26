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

  unmount() {
    clearInterval(this.interval);
  }
}
