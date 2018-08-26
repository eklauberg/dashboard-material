import BaseController from "../BaseController";

export default class AppController extends BaseController {
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
}
