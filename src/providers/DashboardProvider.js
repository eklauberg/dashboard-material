import BaseProvider from "./BaseProvider";

class DashboardProvider extends BaseProvider {
  last() {
    return this.GET("/dashboards/last");
  }
}
export default new DashboardProvider();
