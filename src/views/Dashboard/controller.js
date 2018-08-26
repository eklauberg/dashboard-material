import BaseController from "../BaseController";
import { DashboardProvider } from "../../providers";
export default class DashboardController extends BaseController {
  init() {
    this.begin();
    DashboardProvider.last().then(data => {
      this.setState({ ...data }, () => {
        this.end();
      });
    });
  }
}
