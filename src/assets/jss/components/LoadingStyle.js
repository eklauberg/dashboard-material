import { drawerWidth } from "../constants";

export default theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  }
});
